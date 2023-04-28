import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import requireTransform from 'vite-plugin-require-transform'
import viteCompression from 'vite-plugin-compression'
import defineOptions from 'unplugin-vue-define-options/vite'
import svgLoader from 'vite-svg-loader'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import eruda from 'vite-plugin-eruda'
import progress from 'vite-plugin-progress'
import unocss from 'unocss/vite'

// https://cn.vitejs.dev/guide/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // 可以自定义文件生成的位置，默认是根目录下，使用ts的建议放src目录下
      dts: 'src/auto-imports.d.ts',
      // 使用vue、vue-router时可以不用import引入api,直接使用即可
      imports: ['vue', 'vue-router', 'pinia'],
      eslintrc: {
        enabled: true,
      },
    }),
    // jsx、tsx语法支持
    vueJsx(),
    // vant 组件按需引入
    Components({
      resolvers: [VantResolver()],
      directoryAsNamespace: true,
    }),
    // 压缩
    viteCompression({
      verbose: true, // 默认即可
      disable: false, // 开启压缩(不禁用)，默认即可
      deleteOriginFile: false, // 删除源文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz', // 文件类型
    }),
    // 原子化css
    unocss(),
    // 定义name
    defineOptions(),
    // 这个插件可以让我们直接引入 svg 文件来使用，就像使用 Vue组件 一样
    svgLoader(),
    // 注定读取指定文件夹下的svg文件
    createSvgIconsPlugin({
      iconDirs: [resolve(process.cwd(), 'src/assets/svgs')],
      // 指定symbolId格式
      symbolId: 'icon-[dir]-[name]',
    }),
    // 在vite中使用require
    requireTransform({
      fileRegex: /.js$|.vue$|.ts$/,
    }),
    // 控制台调试
    eruda(),
    // 构建显示进度条
    progress(),
  ],
  base: './', // 配置打包路径
  resolve: {
    // https://juejin.cn/post/7054317318343491615#heading-15
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.vue', '.mjs'],
    alias: {
      '@': resolve(__dirname, 'src'), // 设置 `@` 指向 `src` 目录
    },
  },
  css: {
    preprocessorOptions: {
      // 将全局样式文件全局注入到项目中
      less: {
        additionalData: '@import "@/styles/global.less";',
      },
    },
  },

  build: {
    minify: 'terser',
    terserOptions: {
      // 生产环境时移除console
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
  },
  server: {
    host: true, // host设置为true才可以使用network的形式，以ip访问项目
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true, // 允许跨域

    // 设置代理
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true, // 允许跨域
        secure: false,
      },
    },
  },
})
