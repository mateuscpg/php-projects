import Vue from 'vue'
import Router from 'vue-router'
import Home from '../pages/Home'
import Videos from '../pages/Videos'
import Sobre from '../pages/Sobre'
import Contatos from '../pages/Contatos'

Vue.use(Router)

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/videos',
    component: Videos
  },
  {
    path: '/sobre',
    component: Sobre
  },
  {
    path: '/contatos',
    component: Contatos
  }
]

const router = new Router({
  routes,
  mode: 'history'
})

export default router
