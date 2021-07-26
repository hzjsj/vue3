import {
  createRouter,
  createWebHashHistory,
  RouteRecordRaw
} from 'vue-router'
import Home from '../views/home.vue'
import Vuex from '../views/vuex.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/vuex',
    name: 'Vuex',
    component: Vuex
  },
  {
    path: '/axios',
    name: 'Axios',
    component: () => import('../views/axios.vue') // 懒加载组件
  },
  {
    path: '/dataBase',
    name: 'DataBase',
    component: () => import('../views/dataBase.vue')
  },
  {
    path: '/:catchAll(.*)',
    name: '/404',
    component: () => import('../views/404.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
