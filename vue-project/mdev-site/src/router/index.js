import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/videos',
    component: () => import('../pages/Video')
  },
  {
    path: '/sobre',
    component: () => import('../pages/Sobre')
  },
  {
    path: '/contatos',
    component: () => import('../pages/Contatos')
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
