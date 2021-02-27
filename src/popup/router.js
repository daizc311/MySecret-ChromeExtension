import Vue from 'vue'
import VueRouter from 'vue-router'
import Notebook from '@/popup/components/Notebook.vue'
import Page404 from '@/views/404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/Notebook',
    name: 'Notebook',
    component: Notebook
  },
  {
    path: '/PwdItems',
    name: 'PwdItems',
    component: () => import(/* webpackChunkName: "about" */ '@/popup/components/PwdItems.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    // 会匹配所有路径
    path: '*',
    name: '404',
    component: Page404,
  }
]

const router = new VueRouter({
  routes
})

export default router
