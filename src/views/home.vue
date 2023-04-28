<script lang="ts" setup>
import { showToast } from 'vant'
import { formatDate } from '@/utils'

defineOptions({
  name: 'Home',
})

const router = useRouter()

const state = reactive({
  date(val: string) {
    return formatDate(val)
  },
})

const goPgae = () => {
  // router.push('/vuex')
  showToast('我是vant')
}

const throttle = () => {
  console.log('throttle')
}
</script>

<template>
  <div class="container">
    <div>Home</div>
    <div>{{ state.date('2021-02-01') }}</div>
    <van-button @click="goPgae">
      页面跳转
    </van-button>

    <van-button v-throttle="throttle">
      throttle
    </van-button>

    <div class="img" />

    <div class="w-100 text-red">
      我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本我是文本
    </div>

    <div>
      <svg-icon name="icon" />
    </div>
  </div>
</template>

<style lang="less" scoped>
	.container {
		.img {
			width: 100px;
			height: 100px;
			border: 1px solid sandybrown;
			.bg_img('../assets/logo.png')
		}

		.text {
			width: 100px;
			height: 100px;
		}
	}
</style>
