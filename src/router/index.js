import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Favourites from '../views/Favourites.vue';
import Cocktail from '../views/Cocktail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/favourites',
    name: 'favourites',
    component: Favourites
  },
  {
    path: '/cocktail/:id',
    name: 'cocktail',
    component: Cocktail,
    props: route => ({ id: route.params.id })
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
