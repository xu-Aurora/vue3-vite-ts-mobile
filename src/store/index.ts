import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'

const store = createPinia()

// 可以辅助实现数据持久化功能
store.use(piniaPluginPersist)

export default store
