import React, { Fragment, useCallback, useState, useEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import s from 'components/CategoryCollapse/style.module.scss'
import Thumbnail from 'components/Thumbnail'
import Player from 'components/Player'

import { sportGroupLabels } from 'constants.js'
import { scrollToRef } from 'utils.js'

export default function CategoryCollapse(props) {
  const { category, videos, toggled, onToggle } = props

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const titleRef = useRef(null)

  const handleVideoClick = useCallback((video) => {
    scrollToRef(titleRef)
    setSelectedVideo(video.id)
  }, [])

  const handlePlayerReady = useCallback(() => {
    setLoading(false)
    scrollToRef(titleRef)
  }, [titleRef])

  const handleToggleClick = useCallback(() => {
    setLoading(true)
    onToggle(category)
  }, [category])

  // reset selected video on toggle
  useEffect(() => setSelectedVideo(null), [toggled])

  return (
    <Fragment>
      <h1
        className={`${s.title} ${toggled ? s.open : ''}`}
        onClick={handleToggleClick}
        ref={titleRef}
      >
        {`${sportGroupLabels[category]} (${videos.length})`}
      </h1>
      {!!selectedVideo && (
        <div className={s.playerContainer}>
          <Player videoId={selectedVideo} onReady={handlePlayerReady} />
          {!!loading && (
            <div className={s.loader}>
              <span>Loading...</span>
            </div>
          )}
        </div>
      )}
      <Collapse isOpened={toggled}>
        {!!videos.length && (
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
        {!videos.length && (
          <div className={s.placeholderText}>Nema videa.</div>
        )}
      </Collapse>
    </Fragment>
  )
}

CategoryCollapse.propTypes = {
  category: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  toggled: PropTypes.bool.isRequired,
  onToggle: PropTypes.func.isRequired,
}
