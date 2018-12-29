import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'


import HelloWorld from './components/HelloWorld.vue';
import MyComponent from './components/MyComponent.vue';

Vue.config.productionTip = false
Vue.use(VueRouter);

const routes = [
  {path: '/', component: HelloWorld},
  {path: '/catalogue', component: MyComponent}
]

const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
