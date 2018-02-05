// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import BootstrapVue from 'bootstrap-vue'
import App from './App'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(VueMaterial);

//import components
import FrontPage from './components/FrontPage'
import AboutPage from './components/AboutPage'
import OurTeam from './components/OurTeam'
import ContactPage from './components/ContactPage'
import EmailModal from './components/EmailModal'

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
  },
  {
    path: '/team',
    component: OurTeam
  },
  {
    path: '/contact',
    component: ContactPage
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
