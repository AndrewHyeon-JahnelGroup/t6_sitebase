// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

//import components
import FrontPage from './components/FrontPage'

Vue.config.productionTip = false

//routes
const routes = [
  {
    path: '/',
    component: FrontPage
  },
  // {
  //   path: '/about',
  //   component: AboutPage
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes: routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
