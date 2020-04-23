import React from 'react'
import containerStyle from 'components/container/style.module.scss'
import s from 'components/Footer/style.module.scss'
import logo from 'static/images/udkc-logo-blue.png'
import { scrollToTop } from 'utils.js'

export default function Footer() {
  return (
    <div className={s.root}>
      <div className={containerStyle.root}>
        <div className={s.arrowRow}>
          <div className={s.arrowTop} onClick={scrollToTop} />
        </div>

        <div className={s.information}>
          <div className={s.about}>
            <img src={logo} alt="logo" />
            <span>Zrinsko Frankopanska 38, 23000 Zadar</span>
            <span>
              <b>e-mail</b> <a href="mailto:kresimircosic.udruga@gmail.com">kresimircosic.udruga@gmail.com</a>
            </span>
            <span>www.kresimircosic.com</span>
          </div>

          <div className={s.links}>
            {/* eslint-disable-next-line */}
            <a
              href="https://www.facebook.com/kresimircosic.udruga"
              target="_blank"
              rel="noopener noreferrer"
              className={s.facebook}
            />
            {/* eslint-disable-next-line */}
            <a
              href="https://www.youtube.com/channel/UCz2EOiYcYRuu77c6kZ_Hj0g?view_as=subscriber"
              target="_blank"
              rel="noopener noreferrer"
              className={s.youtube}
            />
          </div>
        </div>

      </div>
    </div>
  )
}
