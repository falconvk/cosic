import React, {
  Fragment,
  useCallback,
  useState,
  useEffect,
  useRef,
  useMemo,
} from 'react'
import PropTypes from 'prop-types'
import { Collapse } from 'react-collapse'
import s from 'components/CategoryCollapse/style.module.scss'
import Thumbnail from 'components/Thumbnail'
import Player from 'components/Player'

import { sportGroupLabels, filterTags, filterLabels } from 'constants.js'
import { scrollToRef } from 'utils.js'

export default function CategoryCollapse(props) {
  const { category, videos, toggled, onToggle } = props

  const [selectedVideo, setSelectedVideo] = useState(null)
  const [loading, setLoading] = useState(true)
  const titleRef = useRef(null)

  const [activeFilter, setActiveFilter] = useState(null)
  const filteredVideos = useMemo(() => {
    if (activeFilter) {
      return videos.filter(vid => vid.snippet.tags.includes(activeFilter))
    }
    return videos
  }, [videos, activeFilter])

  const toggleFilter = useCallback((filter) => {
    setActiveFilter(prev => {
      if (prev === filter) return null
      setSelectedVideo(null)
      return filter
    })
  }, [setActiveFilter, setSelectedVideo])

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
  }, [category, onToggle])

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

      <Collapse isOpened={toggled}>
        {/* FILTERS */}
        <div className={s.filterList}>
          {filterTags.map(filter => (
            <span
              className={`${s.filter} ${activeFilter === filter ? s.active : ''}`}
              onClick={() => toggleFilter(filter)}
              key={filter}
            >
            {filterLabels[filter]}
          </span>
          ))}
        </div>

        {/* VIDEO PLAYER */}
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

        {/* VIDEO LIST */}
        {!!filteredVideos.length && (
          <div className={s.videoList}>
            {filteredVideos.map(video => (
              <Thumbnail
                key={video.id}
                video={video}
                onClick={handleVideoClick}
                isSelected={selectedVideo === video.id}
              />
            ))}
          </div>
        )}

        {/* NO VIDEOS PLACEHOLDER */}
        {!filteredVideos.length && (
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
