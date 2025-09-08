import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: () => import('@/views/WelcomPage.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/EditorPage.vue')
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/ArticlePage.vue')
    }
  ],
})

export default router
