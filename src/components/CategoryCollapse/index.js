import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import s from 'components/CategoryCollapse/style.module.scss'
import Thumbnail from 'components/Thumbnail'

import { sportGroupLabels } from 'constants.js'

export default function CategoryCollapse(props) {
  const { category, videos, onVideoClick, selectedVideo } = props
  return (
    <Fragment>
      <h1>{sportGroupLabels[category]}</h1>
      {!!videos.length && (
        <div className={s.videoList}>
          {videos.map(video => (
            <Thumbnail
              video={video}
              onClick={onVideoClick}
              isSelected={selectedVideo === video.id}
            />
          ))}
        </div>
      )}
      {!videos.length && (
        <div>Nema videa.</div>
      )}
    </Fragment>
  )
}

CategoryCollapse.propTypes = {
  category: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
  onVideoClick: PropTypes.func.isRequired,
  selectedVideo: PropTypes.string,
}
