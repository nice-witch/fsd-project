import { createRouter, createWebHistory } from 'vue-router'
import FormPage from '@/pages/FormPages/FormPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [

    {
      path: '/',
      name: 'form',
      component: FormPage,
    },
    {
      path: '/result',
      name: 'result',
      component: () => import('@/pages/ResultPage/ResultPage.vue'),
    },
  ],
})

export default router
