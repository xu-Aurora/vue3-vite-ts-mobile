import type { DirectiveBinding } from 'vue'

const debounce = {
  mounted(el: Element, binding: DirectiveBinding<any>) {
    let timer: any

    el.addEventListener('click', () => {
      if (timer)
        clearTimeout(timer)

      timer = setTimeout(() => {
        binding.value()
      }, 1000)
    })
  },
}

export default debounce
