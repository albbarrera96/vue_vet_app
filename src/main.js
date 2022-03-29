import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import "bootstrap/dist/js/bootstrap.js"

createApp(App).use(router, axios, VueAxios).mount('#app')
