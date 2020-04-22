import React, { Fragment, useCallback, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import s from 'components/CategoryCollapse/style.module.scss'
import Thumbnail from 'components/Thumbnail'
import Player from 'components/Player'

import { sportGroupLabels } from 'constants.js'

export default function CategoryCollapse(props) {
  const { category, videos, toggled, onToggle } = props

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleVideoClick = useCallback((video) => {
    setSelectedVideo(video.id)
  }, [])

  // reset selected video on toggle
  useEffect(() => setSelectedVideo(null), [toggled])

  return (
    <Fragment>
      <h1 className={s.title} onClick={() => onToggle(category)}>
        {`${sportGroupLabels[category]} (${videos.length})`}
      </h1>
      {!!selectedVideo && (
        <div className={s.playerContainer}>
          <Player videoId={selectedVideo} onReady={() => setLoading(false)} />
          {!!loading && (
            <div className={s.loader}>
              <span>Loading...</span>
            </div>
          )}
        </div>
      )}
      {toggled && !!videos.length && (
        <div className={s.videoList}>
          {videos.map(video => (
            <Thumbnail
              key={video.id}
              video={video}
              onClick={handleVideoClick}
              isSelected={selectedVideo === video.id}
            />
          ))}
        </div>
      )}
      {toggled && !videos.length && (
        <div>Nema videa.</div>
      )}
    </Fragment>
  )
}

CategoryCollapse.propTypes = {
  category: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  toggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}
