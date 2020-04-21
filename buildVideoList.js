const fs = require('fs')
const path = require('path')
const axios = require('axios')

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'
const YTK = 'AIzaSyBr_IPur83tI5d0uukRvi32EZf69JaTyvc'
const CHID = 'UCAAui2B1chG8tt5Aoow6e_A'

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

async function start() {
  try {
    console.log('starting fetch...')
    await fetchAllVideos()
    console.log('done fetching')
    writeVideosToFile(videoList)
  } catch (e) {
    console.error(e)
  }
}

start()
