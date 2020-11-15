import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    limit: 20,
    statusType: [
      {
        name: 'Flying',
        status: 'flying',
        color: 'primary',
        disable: false,
      },
      {
        name: 'Charging',
        status: 'charging',
        color: 'info',
        disable: false,
      },
      {
        name: 'Repair',
        status: 'repair',
        color: 'warning',
        disable: false,
      },
      {
        name: 'Success',
        status: 'success',
        color: 'success',
        disable: true,
      },
      {
        name: 'Offline',
        status: 'offline',
        color: 'secondary',
        disable: true,
      },
      {
        name: 'Failed',
        status: 'failed',
        color: 'danger',
        disable: false,
      },
    ],
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  },
});
