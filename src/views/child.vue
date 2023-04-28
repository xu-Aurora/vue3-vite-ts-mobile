<script lang="ts" setup>
import { useVModel } from '@vueuse/core'

const props1 = defineProps<{
  msg: string
}>()

// https://v3.cn.vuejs.org/guide/component-custom-events.html#v-model-%E5%8F%82%E6%95%B0
const emit1 = defineEmits(['update:msg'])

const color1 = ref('green')

const dispatch1 = () => {
  const data = useVModel(props1, 'msg', emit1)
  data.value = `${Math.random()}`

  color1.value = 'red'
}
</script>

<!-- https://juejin.cn/post/6994960288101433351#heading-4 -->
<!-- useVModel,实现父子组件数据双向绑定,简化 -->
<template>
  <div class="container">
    <h1 ref="foo">
      子组件:
    </h1>
    <van-button @click="dispatch1">
      发送
    </van-button>
    <div class="parent">
      接受父组件的值: {{ props1.msg }}
    </div>
  </div>
</template>

<!-- vue的setup语法糖写法 -->
<!-- <script lang="ts" setup>
  import { defineProps, defineEmits, ref, defineExpose } from 'vue'

  const color = ref('green')

  const props = defineProps<{
    msg: string
  }>()

  const emit = defineEmits(['childClick'])

  const dispatch = () => {
    emit('childClick', '子组件的值')
    color.value = 'red'
  }

  const foo = ref(null)

  // https://v3.cn.vuejs.org/api/sfc-script-setup.html#defineexpose
  defineExpose({
    foo
  })

</script> -->

<!-- <script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  emits: ['childClick'],
  props: {
    msg: {
      type: String,
      required: true
    }
  },
  setup(props, { emit }) {
    const state = reactive({
      parentVal: props.msg,
    })

    const emitFn = () => emit('childClick', '子组价的值')

    return {
      ...toRefs(state),
      emitFn
    }
  }
})
</script> -->

<style scoped lang="less">
  h1 {
    margin-top: 30px;
  }

  // 深度选择器
  .container :deep(.van-button) {
    color: red;
  }

  // 动态class
  .parent {
    color: v-bind(color1)
  }
</style>
