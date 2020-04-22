import React, { useState, useCallback } from 'react'
import s from 'components/container/style.module.scss'
import CategoryCollapse from 'components/CategoryCollapse'

import videos from 'static/videos.json'

export default function Container() {
  return (
    <div className={s.root}>
      <CategoryCollapse
        category="kosarka"
        videos={videos.kosarka}
      />
    </div>
  )
}
