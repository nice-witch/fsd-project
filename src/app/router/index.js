import { createRouter, createWebHistory } from 'vue-router'
import {FormPage} from "@/pages/FormPages/index.js";
import {ResultPage} from "@/pages/ResultPage/index.js";

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
      component: ResultPage,
    },
  ],
})

export default router
