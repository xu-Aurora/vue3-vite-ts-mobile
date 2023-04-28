import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/home.vue'),
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: () => import('@/views/vuex.vue'),
  },
  {
    path: '/vnode',
    name: 'Vnode',
    component: () => import('@/views/vnode.vue'),
  },
  {
    path: '/parent',
    name: 'Parent',
    component: () => import('@/views/parent.vue'),
  },
  {
    path: '/tsx',
    name: 'Tsx',
    component: () => import('@/views/tsx.vue'),
  },
]

export default routes
