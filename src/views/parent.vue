<script lang="ts" setup>
import Child from './child.vue'

const state = reactive({
  msg: '123',
})
</script>

<template>
  <div>
    <h1>父组件:</h1>
    <div>
      接受子组件的值:{{ state.msg }}
    </div>

    <Child v-model:msg="state.msg" />
    <!-- <Child :msg="parentVal" @childClick='childClick' /> -->
  </div>
</template>

<style lang="less" scoped>
.svg {
  width: 100px;
  height: 100px;
}
</style>
