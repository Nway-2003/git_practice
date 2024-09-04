import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import CardDetail from '../components/CardDetail.vue';
import MovieDetail from '../components/MovieDetail.vue';
import SignUp from '../pages/SignUp.vue';
import Login from '../pages/Login.vue';
import store from '../store';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/destination/:id',
    name: 'DestinationDetail',
    component: CardDetail,
    props: true,
  },
  {
    path: '/movie/:id',
    name: 'MovienDetail',
    component: MovieDetail,
    props: true,
  },
 
  {
    path: '/signup',
    name: 'SignUp',
    component: SignUp,
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
  {
    path: '/dashboard',
    component: () => import('../pages/Dashboard.vue'),
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ path: '/login' });
    } else {
      next();
    }
  } else {
    next();
  }
});

export default router;
