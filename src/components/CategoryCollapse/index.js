import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { sportGroupLabels } from 'constants.js'

export default function CategoryCollapse({ category, videos }) {
  return (
    <Fragment>
      <h1>{sportGroupLabels[category]}</h1>
      {videos.map(item => {
        //todo: add Thumbnail component (check carousel first)
        const {
          snippet: {
            thumbnails: { medium, high, standard, default: def },
            title,
          },
        } = item
        const thumbnail = standard || medium || high || standard || def
        return <img
          src={thumbnail.url}
          alt={title}
          width="320"
          height="180"
        />
      })}
    </Fragment>
  )
}

CategoryCollapse.propTypes = {
  category: PropTypes.string.isRequired,
  videos: PropTypes.array.isRequired,
}
