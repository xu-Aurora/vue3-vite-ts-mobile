// https://antfu.me/posts/reimagine-atomic-css-zh

import {
  defineConfig,
  presetAttributify,
  presetMini,
  presetUno,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

// https://github.com/unocss/unocss#readme
export default defineConfig({
  presets: [presetMini({ dark: 'class' }), presetAttributify(), presetUno()],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  // 自定义快捷键class
  shortcuts: {
    'bg-dark': 'bg-bg_color',
    'wh-full': 'w-full h-full',
    'cp-on': 'cursor-pointer outline-none',
    'flex-c': 'flex justify-center items-center',
    'flex-ac': 'flex justify-around items-center',
    'flex-bc': 'flex justify-between items-center',
    'navbar-bg-hover': 'dark:color-white !dark:hover:bg-[#242424]',
  },
  rules: [
    [/^w-(\d+)$/, match => ({ width: `${match[1]}rem` })],
    [/^h-(\d+)$/, match => ({ height: `${match[1]}rem` })],
    [/^text-(\d+)$/, match => ({ 'font-size': `${match[1]}rem` })],
    [/^leading-(\d+)$/, match => ({ 'line-height': `${match[1]}rem` })],
    [/^border-(\d+)$/, match => ({ 'border-width': `${match[1]}rem` })],
    [/^rounded-(\d+)$/, match => ({ 'border-radius': `${match[1]}rem` })],
    [/^m-(\d+)$/, match => ({ margin: `${match[1]}rem` })],
    [/^mx-(\d+)$/, match => ({ margin: `0 ${match[1]}rem` })],
    [/^my-(\d+)$/, match => ({ margin: `${match[1]}rem 0` })],
    [/^mt-(\d+)$/, match => ({ 'margin-top': `${match[1]}rem` })],
    [/^mr-(\d+)$/, match => ({ 'margin-right': `${match[1]}rem` })],
    [/^mb-(\d+)$/, match => ({ 'margin-bottom': `${match[1]}rem` })],
    [/^ml-(\d+)$/, match => ({ 'margin-left': `${match[1]}rem` })],
    [/^p-(\d+)$/, match => ({ padding: `${match[1]}rem` })],
    [/^px-(\d+)$/, match => ({ padding: `0 ${match[1]}rem` })],
    [/^py-(\d+)$/, match => ({ padding: `${match[1]}rem 0` })],
    [/^pt-(\d+)$/, match => ({ 'padding-top': `${match[1]}rem` })],
    [/^pr-(\d+)$/, match => ({ 'padding-right': `${match[1]}rem` })],
    [/^pb-(\d+)$/, match => ({ 'padding-bottom': `${match[1]}rem` })],
    [/^pl-(\d+)$/, match => ({ 'padding-left': `${match[1]}rem` })],
  ],
})
