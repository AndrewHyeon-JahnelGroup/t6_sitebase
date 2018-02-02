// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'


Vue.use(BootstrapVue);
Vue.use(VueRouter);

//import components
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
Vue.config.productionTip = false

//routes
const routes = [
  {
    path: '/',
    component: FrontPage
  },
  {
    path: '/about',
    component: AboutPage
  }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
