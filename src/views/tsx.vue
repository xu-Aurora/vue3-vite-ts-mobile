<script setup lang="tsx">
import styles from './tsx.module.less'

/**
 * 通过setup语法糖写jsx
 */

const arr = [
  { name: '张三', age: 16 },
  { name: '李四', age: 18 },
  { name: '王五', age: 19 },
  { name: '赵六', age: 20 },
]

const App = () => {
  return (<div>
		{
			arr.map((item) => {
			  return (
					<div className={styles.bg}>
						<span>{item.name}</span>
						<span>{item.age}</span>
					</div>
			  )
			})
		}
	</div>)
}
</script>

<template>
  <App />
</template>
