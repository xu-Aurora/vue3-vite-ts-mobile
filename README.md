# Vue3  移动端脚手架

## 开发前准备

**环境:**

1. node 环境推荐使用 14-16 之间的版本，[node 版本安装](https://nodejs.org/download/release/)。推荐下载.zip 格式的，因为 node14+版本需要，window8 系统才能安装，zip 格式的则无需安装(window8+可以随意下载什么格式)
2. 本项目指定用 pnpm 命令工具，全局安装：npm install pnpm -g

**工具:**

- 推荐使用[vscode](https://code.visualstudio.com/Download)开发

```bash
vscode插件推荐：

1. Vue Language Features (Volar)  			Vue3.0 语法支持
2. Auto Rename Tag							自动更新相对应的开始标签或结束标签的标签名
3. Chinese (Simplified) Language Pack for Visual Studio Code   		汉化vscode
4. indent-rainbow							可以使代码换行对齐更加具有可读性
5. Import Cost								该插件会在行尾显示导入的包的大小
6. Vue.vscode-typescript-vue-plugin				vue3 插件
7. uncoss													unocss语法提示

温馨提示：使用了Volar插件，要关闭Vetur插件，不然会造成语法识别混乱

```

**前置知识：**

- [typescript](https://www.typescriptlang.org/zh/) ts 语法

- [vue3.0](https://v3.cn.vuejs.org/) vue 框架

- [vite](https://cn.vitejs.dev/) 项目构建工具

- [vant4](https://vant-contrib.gitee.io/vant/#/zh-CN/home) UI 库

- [pinia](https://pinia.vuejs.org/) 状态管理

- [vue-router](https://router.vuejs.org/zh/index.html) 路由

- [axios](https://axios-http.com/zh/) 请求接口工具

- [dayjs](https://dayjs.gitee.io/zh-CN/) 一个轻量级格式化日期的库

- [eslint](https://eslint.bootcss.com/) js 代码检查工具

- [less](https://less.bootcss.com/) CSS 预处理器


## 开发

- 安装依赖

```bash
pnpm install
```

- 启动项目

```bash
pnpm dev
```

- 安装包

```bash
pnpm add 包名
```

- 卸载包

```bash
pnpm remove 包名
```

- 打包

```bash
pnpm build
```

## 开发提示

```bash
1. 'vue'、'vue-router'、'pinia' 这三个库的api使用时不需要手动引入,已经做了自动引入处理
2. 已实现自动读取 src/assets/svgs 文件夹下的svg文件, <svg-icon name="icon" /> 即可使用,name属性对应的事svg的文件名字
3. 已内置 unocss 原子化css插件
4. 已配置 vue快速生成模板, 输入vue再按tab即可快速生成模板
5. 已通过 rem 做好适配 375 的设计稿, 默认写 px 单位就默认达到适配效果
```

## 目录解构

**目录总构：**

```bash

├── .github (可选)                                           # GitHub Actions 配置文件
├── .husky (可选)                                            # 提交校验配置文件
├── .vscode (可选)                                           # IDE工具推荐配置文件（开发辅助）
├── node_modules                                            # 模块包
├── public                                                  # 静态资源
├── src
├── types                                                   # 全局 TS 类型配置
├── .editorconfig                                           # 编辑器读取文件格式及样式定义配置
├── .env.development                                        # 开发环境变量配置
├── .env.production                                         # 生产环境变量配置
├── .eslintignore                                           # eslint 语法检查忽略文件
├── .eslintrc.js                                            # eslint 语法检查配置
├── .gitignore                                              # git 提交忽略文件
├── index.html                                              # html 主入口
├── package.json                                            # 依赖包管理 JSON 文件
├── pnpm-lock.yaml                                          # 依赖包版本内容锁定文件(不要改动！)
├── README.md                                               # README
├── tsconfig.json                                           # ts 配置
├── unocss.config.ts                                      	# unocss 配置
└── vite.config.ts                                          # vite 配置
```

**核心：**

- src 目录

```bash
├── src										             👉 项目源代码
│   ├── api                                                  # 请求 api
│   ├── assets                                               # svg、图片等静态资源
│   ├── components                                           # 全局自定义公用组件
│   ├── directives                                           # 全局自定义指令
│   ├── layout                                               # 主要页面布局
│   ├── router                                               # 路由配置
│   ├── store                                                # 全局状态管理
│   ├── style                                                # 全局样式
│   ├── utils                                                # 全局工具方法
│   ├── views                                                # 全局单页面组件
│   ├── App.vue                                              # 入口页面
│   ├── main.ts                                              # 入口文件
```
