import '@babel/polyfill';
import 'mutationobserver-shim';
import Vue from 'vue';
import './plugins/bootstrap-vue';
import App from './App.vue';
import router from './router';
import store from './store';

import PaginaCarregando from '@/components/PaginaCarregando.vue';
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue';

Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);

Vue.config.productionTip = false;

Vue.component('PaginaCarregando', PaginaCarregando);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
