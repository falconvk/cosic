import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'
import s from 'components/Player/style.module.scss'

export default function Player(props) {
  return (
    <YouTube
      className={s.root}
      opts={{
        width: '100%',
        height: '100%',
        playerVars: {
          'autoplay': 1,
        }
      }}
      {...props}
    />
  )
}

Player.propTypes = {
  videoId: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  opts: PropTypes.object,
}
