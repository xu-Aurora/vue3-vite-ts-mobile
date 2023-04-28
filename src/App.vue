<script lang="ts" setup>
import { setToastDefaultOptions } from 'vant'

setToastDefaultOptions({ forbidClick: true })
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">

</style>
