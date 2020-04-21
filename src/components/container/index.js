import React, { useEffect, useState, useCallback, useMemo } from 'react'
import axios from 'axios'
import fs from 'fs'
import path from 'path'
import videos from 'static/videos.json'
import s from 'components/container/style.module.scss'
import {
  SEARCH_URL,
  VIDEOS_URL,
  defaultSearchParams,
  createVideosParams,
} from 'constants/app'

export default function Container() {
  // // const [doneLoading, setDoneLoading] = useState(false)
  // const [videos, setVideos] = useState([])
  // // const [orderedVide]
  //
  // // fetch a list of videos by ID
  // const fetchVideoList = useCallback(async (ids) => {
  //   const params = createVideosParams(ids)
  //   try {
  //     console.log('---------- fetching videos')
  //     const res = await axios.get(VIDEOS_URL, { params })
  //     // add to videos
  //     setVideos((prevResults) => [...prevResults, ...res.data.items])
  //     console.log('fetch videos done...')
  //   } catch (e) {
  //     console.log(e)
  //   }
  // }, [])
  //
  // // fetches all videos
  // const fetchAllVideos = useCallback(async (token) => {
  //   const params = { ...defaultSearchParams }
  //   if (token) params.pageToken = token
  //
  //   try {
  //     console.log('### fetching IDs')
  //     // fetch a batch of video IDs
  //     const res = await axios.get(SEARCH_URL, { params })
  //     const { items, nextPageToken } = res.data
  //     const resultIds = items.map(i => i.id.videoId)
  //
  //     // const calls = [fetchVideoList(resultIds)]
  //     // fetch the videos
  //     fetchVideoList(resultIds)
  //     // fetch next page if token present
  //     if (nextPageToken) {
  //       // calls.push(fetchAllVideos(res.data.nextPageToken))
  //       await fetchAllVideos(res.data.nextPageToken)
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   }
  //
  //   console.log('all done')
  //   console.timeEnd()
  // }, [])
  //
  // // on mount, fetch all videos
  // useEffect(() => {
  //   // console.time()
  //   // fetchAllVideos()
  // }, [])
  //
  // useEffect(() => {
  //   console.log(videos)
  // }, [videos])

  useEffect(() => {
    console.log(videos.length)
    console.log(videos)
  }, [])

  return (
    <div className={s.root}>
      {videos.length}
      <br/>
      {!!videos.length && videos}
    </div>
  )
}
