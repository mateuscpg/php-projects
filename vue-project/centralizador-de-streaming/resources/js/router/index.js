
import { createRouter, createWebHistory } from 'vue-router'
import Login from '../components/Login/Login.vue';
import Register from '../components/Login/Register.vue';
import api from '../services/Axios';
import { USER_COLLECTION } from '../collection';

const verifyIsUserLoggedIn = (to, from, next) => {
  let user = JSON.parse(localStorage.getItem(USER_COLLECTION));
 
  console.log(user.isUserLoggedIn);
  const isAuthenticated =user.isUserLoggedIn;
  if (to.path === '/') {
    next('/login'); // Redireciona para /login se a rota for a raiz
  }
  if(isAuthenticated && to.fullPath =='/login'){
    next('/home');
  }

  else {
    next(); 
  }
} 

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../components/pages/Home.vue'),
    beforeEnter: verifyIsUserLoggedIn
    
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      showSidebar: false, // Define para não mostrar a Sidebar nesta rota
    },
     beforeEnter: verifyIsUserLoggedIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register,
    meta: {
      showSidebar: false, // Define para não mostrar a Sidebar nesta rota
    },
     beforeEnter: verifyIsUserLoggedIn
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../components/pages/About.vue'),
     beforeEnter: verifyIsUserLoggedIn
  },
  {
    path: '/team',
    name: 'Team',
    component: () => import('../components/pages/Team.vue'),
     beforeEnter: verifyIsUserLoggedIn
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import('../components/pages/Profile.vue'),
     beforeEnter: verifyIsUserLoggedIn
  },
  {
    path: '/show-principal-movie/:id_movie',
    name: 'ShowPrincipalMovie',
    component: () => import('../components/pages/ShowMovies/ShowPrincipalMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/show-movie/:id_movie',
    name: 'ShowMovie',
    component: () => import('../components/pages/ShowMovies/ShowMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/intro',
    name: 'Intro',
    component: () => import('../mixins/Intro.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/category/acction',
    name: 'categoryAcction',
    component: () => import('../components/pages/Categories/AcctionMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/category/adventure',
    name: 'categoryAdventure',
    component: () => import('../components/pages/Categories/AdventureMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/category/comedy',
    name: 'categoryComedy',
    component: () => import('../components/pages/Categories/ComedyMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/category/romance',
    name: 'categoryRomance',
    component: () => import('../components/pages/Categories/RomanceMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
    props: true,
  },
  {
    path: '/category/terror',
    name: 'categoryTerror',
    component: () => import('../components/pages/Categories/TerrorMovie.vue'),
     beforeEnter: verifyIsUserLoggedIn,
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
else {
    next(); // Continua para a próxima rota se não for /, /login ou /home
  }
});

export default router