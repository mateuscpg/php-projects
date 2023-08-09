
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/Login.vue';
import SignIn from '../components/Login/SignIn.vue';


const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/pages/Home.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      showSidebar: false, // Define para não mostrar a Sidebar nesta rota
    },
  },
  {
    path: '/signin',
    name: 'Signin',
    component: SignIn,
    meta: {
      showSidebar: false, // Define para não mostrar a Sidebar nesta rota
    },
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/pages/About.vue'),
  },
  {
    path: '/show-movie',
    name: 'ShowMovie',
    component: () => import('../components/pages/ShowMovie.vue'),
    props: true,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router