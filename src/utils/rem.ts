/**
 * 监听屏幕大小的变化,设置根字体
 */

const documentElement = document.documentElement
function callback() {
  const clientWidth = documentElement.clientWidth
  documentElement.style.fontSize = `${clientWidth / 375}px`
}
callback()
window.addEventListener('resize', callback)
