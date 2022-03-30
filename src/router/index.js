import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Logging from '../views/Logging.vue'
import AdminProfile from '../views/AdminProfile.vue'
import AdminDocs from '../views/AdminDocs.vue'
import DocProfile from '../views/DocProfile'

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
    name: 'Admin',
    component: AdminProfile
  },
  {
    path: '/admin/docs',
    name: 'AdminDocs',
    component: AdminDocs
  },
  {
    path:'/doctor',
    name: 'Doctor',
    component: DocProfile
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
