import React from 'react'
import PropTypes from 'prop-types'
import s from 'components/Thumbnail/style.module.scss'

export default function Thumbnail(props) {
  const { video, isSelected, onClick } = props
  const {
    snippet: {
      thumbnails: { medium, high, standard, default: def },
      title,
      publishedAt,
    },
  } = video

  const handleClick = () => onClick(video)

  const thumbnail = medium || high || standard || def
  const imgClass = isSelected ? s.selected : ''

  return (
    <div className={s.root}>
      <img
        className={imgClass}
        src={thumbnail.url}
        alt={title}
        width="320"
        height="180"
        onClick={handleClick}
      />
      <div className={s.details}>
        <div className={s.title}>
          {title}
        </div>
        <div className={s.publishedTime}>
          {new Date(publishedAt).toLocaleString('hr')}
        </div>
      </div>
    </div>
  )
}

Thumbnail.propTypes = {
  video: PropTypes.object.isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}
