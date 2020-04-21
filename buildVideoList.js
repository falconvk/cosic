const fs = require('fs')
const path = require('path')
const axios = require('axios')
// const constants = require('./src/constants/app.js')

const SEARCH_URL = 'https://www.googleapis.com/youtube/v3/search'
const VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos'
const YTK = ''
const CHID = ''

const defaultSearchParams = {
  key: process.env.REACT_APP_YTK,
  // key: YTK,
  channelId: process.env.REACT_APP_CH_ID,
  // channelId: CHID,
  // channelId: 'UCAAui2B1chG8tt5Aoow6e_A',
  // channelId: 'UCbsObMtz4YLeTC7cf10vZGQ',
  // channelId: 'UCwslAYK88ax-ITOE4uIiteQ',
  part: 'id',
  type: 'video',
  order: 'date',
  maxResults: 50,
}

const createVideosParams = (videoIds) => ({
  key: process.env.REACT_APP_YTK,
  part: 'snippet',
  order: 'date',
  id: videoIds.join(','),
})

async function fetchAllVideos() {

}

const filePath = path.join(__dirname, '/src/static/videos.json')
const data = JSON.stringify([
  process.env.NODE_ENV,
  process.env.REACT_APP_YTK,
  process.env.REACT_APP_CH_ID,
  'test1',
  'test2',
])

try {
  fs.writeFileSync(filePath, data)
  console.log('file written successfully!')
} catch (e) {
  console.error(e)
}

console.log(process.env.NODE_ENV)
console.log(process.env.REACT_APP_YTK)
console.log(process.env.REACT_APP_CH_ID)
// console.log(SEARCH_URL)
// console.log(defaultSearchParams)
