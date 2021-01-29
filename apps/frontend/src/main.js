import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import { createRouter } from './router';
import store from './store'

import i18n from './plugins/i18n';
import vuetify from './plugins/vuetify';
import './logger';
import VueKuzzle from 'vue-plugin-kuzzle';
import config from './config.json';

import '@babel/polyfill'
import 'roboto-fontface/css/roboto/roboto-fontface.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js';

Vue.config.productionTip = false
Vue.use(VueKuzzle, config);
const router = createRouter(Vue.prototype.$kuzzle, store);

new Vue({
  router,
  store,
  vuetify,
  i18n,
  render: h => h(App)
}).$mount('#app')
