import React, { useState, useCallback } from 'react'
import s from 'components/container/style.module.scss'
import CategoryCollapse from 'components/CategoryCollapse'
import { sportGroupKeys } from 'constants.js'

import videos from 'static/videos.json'

export default function Container() {
  const [selectedCategory, setSelectedCategory] = useState(null)
  const handleCategoryToggle = useCallback((category) => {
    setSelectedCategory(prev => {
      if (prev === category) return null
      return category
    })
  }, [])

  return (
    <div className={s.root}>
      {sportGroupKeys.map(group => (
        <CategoryCollapse
          category={group}
          videos={videos[group]}
          toggled={selectedCategory === group}
          onToggle={handleCategoryToggle}
          key={group}
        />
      ))}
    </div>
  )
}
