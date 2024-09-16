import { createMemoryHistory, createWebHashHistory,createWebHistory, createRouter } from 'vue-router'

import HomeView from './pages/HomeView.vue'
import ImportData from './pages/ImportData.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/import-data', component: ImportData },
  {
    path: '*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})  

export default router