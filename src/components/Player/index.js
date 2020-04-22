import React from 'react'
import PropTypes from 'prop-types'
import YouTube from 'react-youtube'

export default function Player(props) {
  return (
    <YouTube {...props} />
  )
}

Player.propTypes = {
  videoId: PropTypes.string.isRequired,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  opts: PropTypes.object,
}
