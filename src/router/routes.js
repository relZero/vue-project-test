export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/downloadIndex/index.vue')
  },
  {
    path: '/search',
    component: () => import('../views/search/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/userCenter',
    component: () => import('../views/userCenter/index.vue')
  },
  {
    path: '/gameDetail',
    component: () => import('../views/gameDetail/index.vue')
  }
]
