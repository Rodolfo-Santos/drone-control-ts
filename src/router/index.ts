import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Drone from '../views/Drone.vue';

Vue.use(VueRouter);

export default new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/drone/:id',
      name: 'drone',
      component: Drone,
      props: true,
    },
  ],
});
