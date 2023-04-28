import { defineStore } from 'pinia'

const user = defineStore({
  id: 'user',
  state: () => ({
    count: 0,
    name: '张三',
  }),
  actions: {
    add() {
      this.count += 1
    },
    cut() {
      this.count -= 1
    },
  },
  // 开启数据持久化
  persist: {
    enabled: true,
    // 你也可以在 strategies 里自定义 key 值，并将存放位置由 sessionStorage 改为 localStorage。
    // strategies: [
    //   {
    //     key: 'my_user',
    //     storage: localStorage,
    //     paths: ['name']   // 可以通过 paths 指定要持久化的字段，其他的则不会进行持久化
    //   }
    // ]
  },
})

export default user
