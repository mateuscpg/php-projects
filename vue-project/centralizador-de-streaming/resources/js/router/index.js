
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login/Login.vue';
import Register from '../components/Login/Register.vue';
import api from '../services/Axios';


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
    path: '/register',
    name: 'Register',
    component: Register,
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
    path: '/team',
    name: 'Team',
    component: () => import('../components/pages/Team.vue'),
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/pages/Profile.vue'),
  },
  {
    path: '/show-principal-movie',
    name: 'ShowPrincipalMovie',
    component: () => import('../components/pages/ShowMovies/ShowPrincipalMovie.vue'),
    props: true,
  },
  {
    path: '/show-movie',
    name: 'ShowMovie',
    component: () => import('../components/pages/ShowMovies/ShowMovie.vue'),
    props: true,
  },
  {
    path: '/category/acction',
    name: 'categoryAcction',
    component: () => import('../components/pages/Categories/AcctionMovie.vue'),
    props: true,
  },
  {
    path: '/category/adventure',
    name: 'categoryAdventure',
    component: () => import('../components/pages/Categories/AdventureMovie.vue'),
    props: true,
  },
  {
    path: '/category/comedy',
    name: 'categoryComedy',
    component: () => import('../components/pages/Categories/ComedyMovie.vue'),
    props: true,
  },
  {
    path: '/category/romance',
    name: 'categoryRomance',
    component: () => import('../components/pages/Categories/RomanceMovie.vue'),
    props: true,
  },
  {
    path: '/category/terror',
    name: 'categoryTerror',
    component: () => import('../components/pages/Categories/TerrorMovie.vue'),
    props: true,
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async (to, from, next) => {
  if (to.path === '/') {
    next('/login'); // Redireciona para /login se a rota for a raiz
  }
   else if (to.path === '/login') {
    let isAuthenticated = await api.getPerfil();
      if (isAuthenticated) {
        next('/home'); // Redireciona para /home se o usuário estiver autenticado
      } 
      else {
        next(); // Permite que o usuário acesse a tela de login
      }
  }else {
    next(); // Continua para a próxima rota se não for /, /login ou /home
  }
});


export default router