import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import directives from '@/directives'
// 全局注册svg
import 'virtual:svg-icons-register'
import '@/utils/rem'

import SvgIcon from '@/components/SvgIcon/index.vue'

import '@/styles/index.less'
import 'vant/es/toast/style'
import 'vant/es/dialog/style'
import 'vant/es/notify/style'
import 'vant/es/image-preview/style'

import 'uno.css'

const app = createApp(App) // 创建实例

// 全局引入svg公用组件,使用自定义svg
app.component('SvgIcon', SvgIcon)

app.use(router)
app.use(store)
app.use(directives)

app.mount('#app')
