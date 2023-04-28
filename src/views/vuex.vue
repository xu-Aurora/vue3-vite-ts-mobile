<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import user from '@/store/modules/user'

const myUser = user()
// state 也可以使用解构，但使用解构会使其失去响应式，这时候可以用 pinia 的 storeToRefs
const { count } = storeToRefs(myUser)

const add1 = () => {
  myUser.add()
}

const cut1 = () => {
  myUser.cut()
}
</script>

<template>
  <div>
    <h1>Vuex页面</h1>
    <div>state值: {{ count }}</div>
    <van-button @click="add1">
      增加
    </van-button>
    <van-button @click="cut1">
      减少
    </van-button>
  </div>
</template>
