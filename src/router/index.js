import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Logging from '../views/Logging.vue'
import AdminProfile from '../views/AdminProfile.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
    path: '/logging',
    name: 'Logging',
    component: Logging
  },
  {
    path:'/admin',
    name: '/admin',
    component: AdminProfile
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
