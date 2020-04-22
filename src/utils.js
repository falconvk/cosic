export function scrollToRef(ref) {
  if (ref.current) {
    // window.scrollTo({
    //   behavior: 'smooth',
    //   top: ref.current.offsetTop,
    // })
    ref.current.scrollIntoView({ block: 'start', inline: 'nearest', behavior: 'smooth' })
  }
}
