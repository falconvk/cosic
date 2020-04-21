import React from 'react'
import videos from 'static/videos.json'
import s from 'components/container/style.module.scss'

export default function Container() {
  return (
    <div className={s.root}>
      {videos.length}
      {!!videos.length && videos.map(i => (
        <div key={i.id}>{i.id}</div>
      ))}
      <br/>
    </div>
  )
}
