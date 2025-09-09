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
      path: '/manager',
      name: 'manager',
      component: () => import('@/views/ManagerPage.vue'),
      children: [
        {
          path: 'changeName',
          component: () => import('@/components/changeNamePart.vue')
        },
        {
          path: 'changePassword',
        },
        {
          path: 'allArticles',
        },
        {
          path: 'addArticles',
          component: () => import('@/components/addArticlesPart.vue')
        },
        {
          path: 'logout',
          component: () => import('@/components/logoutPart.vue')
        }
      ]
    },
    {
      path: '/article',
      name: 'article',
      component: () => import('@/views/ArticlePage.vue')
    }
  ],
})

export default router
