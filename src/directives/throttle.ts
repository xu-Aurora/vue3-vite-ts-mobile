import type { DirectiveBinding } from 'vue'

const throttle = {
  mounted(el: Element, binding: DirectiveBinding<any>) {
    let timer: any

    el.addEventListener('click', () => {
      if (!timer) {
        binding.value()
        timer = setTimeout(() => {
          timer = null
        }, 1500)
      }
    })
  },
}

export default throttle
