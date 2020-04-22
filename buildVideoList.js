const fs = require('fs')
const path = require('path')
const axios = require('axios')

const constants = require('./src/constants.js')

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'
const YTK = ''
const CHID = ''

const defaultSearchParams = {
  key: process.env.REACT_APP_YTK || YTK,
  channelId: process.env.REACT_APP_CH_ID || CHID,
  part: 'id',
  type: 'video',
  order: 'date',
  maxResults: 50,
}

const createVideosParams = (videoIds) => ({
  key: process.env.REACT_APP_YTK || YTK,
  part: 'snippet',
  order: 'date',
  id: videoIds.join(','),
})

const videoList = []

async function fetchVideosById(ids) {
  const params = createVideosParams(ids)
  try {
    const res = await axios.get(VIDEOS_URL, { params })
    videoList.push(...res.data.items)
  } catch (e) {
    console.error(e)
  }
}

async function fetchAllVideos(token) {
  const params = { ...defaultSearchParams }
  if (token) params.pageToken = token
  try {
    // fetch a batch of video IDs
    const res = await axios.get(SEARCH_URL, { params })
    const { items, nextPageToken } = res.data
    const resultIds = items.map(i => i.id.videoId)
    // fetch the videos
    await fetchVideosById(resultIds)
    // fetch next page if token present
    if (nextPageToken) {
      await fetchAllVideos(res.data.nextPageToken)
    }
  } catch (e) {
    console.error(e)
  }
}

function writeVideosToFile(videos) {
  const filePath = path.join(__dirname, '/src/static/videos.json')
  const data = JSON.stringify(videos)
  try {
    fs.writeFileSync(filePath, data)
    console.log('file written successfully!')
  } catch (e) {
    console.error('error writing videos.json file!')
    console.error(e)
  }
}

function categorizeVideos(list) {
  const result = {}
  const sportGroupKeys = constants.sportGroupKeys
  const sportTags = Object.values(constants.SPORTS)

  sportGroupKeys.forEach(group => {
    result[group] = []
  })

  for (const item of list) {
    const { snippet: { tags } } = item
    const sport = tags.find(tag => sportTags.includes(tag))
    if (sport) {
      const group = sportGroupKeys.find(
        key => constants.sportGroups[key].includes(sport)
      )
      result[group].push(item)
    }
  }

  console.log('done categorizing')
  return result
}

async function start() {
  try {
    console.log('starting fetch...')
    await fetchAllVideos()
    console.log('done fetching')
    const data = categorizeVideos(videoList)
    writeVideosToFile(data)
  } catch (e) {
    console.error(e)
  }
}

start()
