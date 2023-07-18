import Guard from '../services/middleware'

const routes = [
  {
    path: '/',
    component: () => import('layouts/LoginLayout.vue'),
    children: [
      { path: '', name: 'loginDefault', component: () => import('pages/Login.vue') },
      { path: 'login', name: 'login', component: () => import('pages/Login.vue') }
    ]
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: 'lista', name: 'lista', component: () => import('pages/IndexPage.vue') },
      { path: 'form', name: 'form', component: () => import('pages/FormPage.vue') },
      { path: 'map', name: 'map', component: () => import('pages/MapPage.vue') },
      { path: 'formPolygon', name: 'formPolygon', component: () => import('pages/FormPagePolygon.vue') }
    ],
    beforeEnter: Guard.auth
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
