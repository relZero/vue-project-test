export default [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => import('../views/downloadIndex')
  },
  {
    path: '/search',
    component: () => import('../views/search')
  },
  {
    path: '/login',
    component: () => import('../views/login')
  },
  {
    path: '/userCenter',
    component: () => import('../views/userCenter')
  },
  {
    path: '/gameDetail',
    component: () => import('../views/gameDetail')
  },
  {
    path: '/articleDetail',
    component: () => import('../views/articleDetail')
  },
  {
    path: '/hotList',
    component: () => import('../views/hotList')
  }
]
