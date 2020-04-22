import React, { useState, useCallback } from 'react'
import s from 'components/container/style.module.scss'
import CategoryCollapse from 'components/CategoryCollapse'
import Player from 'components/Player'

import videos from 'static/videos.json'

console.log(videos)

export default function Container() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  const handleVideoClick = useCallback((video) => {
    setSelectedVideo(video.id)
  }, [])

  return (
    <div className={s.root}>
      <CategoryCollapse
        category="kosarka"
        videos={videos.kosarka}
        onVideoClick={handleVideoClick}
        selectedVideo={selectedVideo}
      />
    </div>
  )
}
