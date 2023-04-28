import type { App } from 'vue'

import debounce from './debounce'
import throttle from './throttle'

const directives: { [k: string]: any } = {
  debounce,
  throttle,
}

// 批量注册
export default {
  install(Vue: App) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  },
}
