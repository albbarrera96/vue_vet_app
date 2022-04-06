import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import AdminProfile from '../views/admin/profile.vue'
import AdminDocs from '../views/admin/doctors.vue'
import DocDocs from '../views/doctor/doctors.vue'
import DocProfile from '../views/doctor/profile.vue'
import PatientProfile from '../views/patient/profile.vue'
import PatientDocs from '../views/patient/doctors.vue'
import PatientApps from '../views/patient/patientApp.vue'
import ReceptProfile from '../views/receptionist/profile.vue'
import ReceptDocs from '../views/receptionist/doctors.vue'

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
    path: '/login',
    name: 'Login',
    component: Login
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
  {
    path: '/doctor/docs',
    name: 'DocDocs',
    component: DocDocs
  },
  {
    path: '/patient',
    name: 'Patient',
    component: PatientProfile
  },
  {
    path: '/patient/docs',
    name: 'PatientDocs',
    component: PatientDocs
  },
  {
    path: '/patient/appointments',
    name: 'PatientAppointments',
    component: PatientApps
  },
  {
    path: '/receptionist',
    name: 'Receptionist',
    component: ReceptProfile
  },
  {
    path: '/receptionist/docs',
    name: 'ReceptDocs',
    component: ReceptDocs
  }


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
