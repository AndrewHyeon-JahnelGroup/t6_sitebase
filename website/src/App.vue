<template>
  <div id="app">
    <nav-bar />
    <img id="logo" src="./assets/logo.jpg">
    <div>
      <!-- <img id="stock"src="./assets/stock.jpg"> -->
    </div>
    <router-view />
  </div>
</template>

<script>
import FrontPage from './components/FrontPage'
import TodoList from './components/toDoList'
import NavBar from './components/NavBar'
import AboutPage from './components/AboutPage'
import OurTeam from './components/OurTeam'
import ContactPage from './components/ContactPage'
import EmailModal from './components/EmailModal'

export default {
  name: 'App',
  components: {
    FrontPage,
    TodoList,
    NavBar,
    AboutPage,
    OurTeam,
    ContactPage,
    EmailModal
  },
  data() {
    return {
    };
  },
};

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#logo {
  height: 100px;
}
#stock {
  width: 100%;
}
</style>
