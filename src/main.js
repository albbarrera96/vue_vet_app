import "bootstrap/dist/css/bootstrap.css"

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueApexCharts from "vue3-apexcharts"

import "bootstrap/dist/js/bootstrap.js"

createApp(App).use(router, VueAxios, axios).use(VueApexCharts).mount('#app')
