
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/login/Login.vue';
import SignIn from '../components/Login/SignIn.vue';


const routes = [
  {
    path: '/home',
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
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/pages/Profile.vue'),
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
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/login'); // Redireciona para /login se a rota for a raiz
  } else {
    next(); // Continua para a próxima rota
  }
});


export default router