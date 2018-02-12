import Vue from 'vue'
import VueRouter from 'vue-router';
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const Fractions = () => import('./pages/fractions/Fractions.vue');
const Websocket = () => import('./pages/websocket/Websocket.vue');

Vue.use(VueRouter);
Vue.use(BootstrapVue);

const router = new VueRouter({
  routes: [
    { path: '/fractions', component: Fractions },
    { path: '/websocket', component: Websocket }
  ]
})

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
