import Vue from 'vue'
import Vuex from 'vuex';
import App from './App.vue'
import { store } from './store';
import VueRouter from 'vue-router'
import ProductList from './components/ProductList'
import ProductForm from './components/ProductForm'

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(VueRouter);

const routes = [
  { path: '/produtos', component: ProductList },
  { path: '/', component: ProductForm }
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
