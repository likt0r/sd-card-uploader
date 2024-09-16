import { MainScreen } from '@/renderer/screens'
import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: MainScreen,
      meta: {
        titleKey: 'title.main'
      }
    },
    {
      path: '/second',
      component: () => import('@/renderer/screens/SecondScreen.vue'),
      meta: {
        titleKey: 'title.second'
      }
    },
    {
      path: '/error',
      component: () => import('@/renderer/screens/ErrorScreen.vue'),
      meta: {
        titleKey: 'title.error'
      }
    },
    {
      path: '/sd-card-import',
      component: () => import('@/renderer/screens/SDCardImport.vue'),
      meta: {
        titleKey: 'sdCardImport.title'
      }
    },
    {
      path: '/:pathMatch(.*)*',
      redirect: '/'
    }
  ]
})
