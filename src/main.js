import "babel-polyfill"
import Vue from 'vue'
import App from './App'
import router from './router'
import './assets/common/css/style.css'
Vue.config.productionTip = false
import api from './api';
Vue.prototype.$http = api;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
