import config from '../config/app'

const isElementInViewport = function (elem) {
  let rect = elem.getBoundingClientRect()
  let scrollHeight = window.innerHeight || document.documentElement.clientHeight
  let scrollWidth = window.innerWidth || document.documentElement.clientWidth
  return (rect.top < scrollHeight && rect.bottom > 0 && rect.left < scrollWidth && rect.right > 0)
}

const pxtorem = function (px) {
  return parseFloat(px) / config.baseSize + 'rem'
}

export {
  isElementInViewport,
  pxtorem
}