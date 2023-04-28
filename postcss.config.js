// postcss.config.js
module.exports = {
  plugins: {
    'postcss-pxtorem': {
      rootValue: 1,
      propList: ['*'],
      selectorBlackList: ['.ignore_'],		// 过滤类名不转换rem
    },
  },
}
