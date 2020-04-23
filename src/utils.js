export function scrollToRef(ref) {
  if (ref.current) {
    // window.scrollTo({
    //   behavior: 'smooth',
    //   top: ref.current.offsetTop,
    // })
    ref.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })
  }
}

export function scrollToTop() {
  try {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  } catch (error) {
    // just a fallback for older browsers
    window.scrollTo(0, 0)
  }
}
