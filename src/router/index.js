import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(), // hash模式：createWebHashHistory，history模式：createWebHistory
  routes: [
    {
      path: '/',
      redirect: '/objectIndex'
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: () => import(/* webpackChunkName: "introduce" */ '../views/Introduce.vue')
    },
    {
      path: '/objectIndex',
      name: 'objectIndex',
      component: () => import(/* webpackChunkName: "introduce" */ '../views/object/index.vue')
    },
   
  ]
})

export default router