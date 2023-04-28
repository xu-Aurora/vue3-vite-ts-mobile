module.exports = {
  extends: ['@antfu', './.eslintrc-auto-import.json'],
  globals: {
    api: true,

    // Ref sugar (take 2)
    $: 'readonly',
    $$: 'readonly',
    $ref: 'readonly',
    $shallowRef: 'readonly',
    $computed: 'readonly',

    // script setup
    defineProps: 'readonly',
    defineEmits: 'readonly',
    defineExpose: 'readonly',
    withDefaults: 'readonly',
  },
  plugins: [
    'antfu',
  ],
  /* 指定如何解析语法 */
  parser: 'vue-eslint-parser',
  /* 优先级低于 parse 的语法解析配置 */
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020,
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-debugger': 'off',
    'no-tabs': 'off',
    'sort-imports': 'off',
    'no-mixed-spaces-and-tabs': 'off',
    'array-callback-return': 'off',
    'vue/require-component-is': 'off',
    'vue/no-mutating-props': 'off',
    'vue/one-component-per-file': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/ban-ts-comment': 'off',
    'no-caller': 'off',
  },
}
