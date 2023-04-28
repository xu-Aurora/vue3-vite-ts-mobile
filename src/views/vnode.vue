<script lang="ts" setup>
const tags = ['primary', 'success', 'warning', 'danger']

const VNode = defineComponent({
  name: 'VNode',
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
  setup(props, { slots }) {
    return () => h(
      'div',
      tags.map(item => h('van-tag', { type: item }, item)),
    )
  },
})

const vnode = h(
  'div',
  tags.map(item => h('van-tag', { type: item }, item)),
)
</script>

<template>
  <div>
    <VNode />
    <van-tag type="primary">
      标签
    </van-tag>
  </div>
</template>
