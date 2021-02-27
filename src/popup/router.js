import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/A1',
    name: 'A1',
    component: () => import(/* webpackChunkName: "about" */ '@/popup/components/A1.vue')
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
  }
]

const router = new VueRouter({
  routes
})

export default router
