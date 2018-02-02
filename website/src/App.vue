<template>
  <div id="app">
    <img id="logo" src="./assets/logo.jpg">
    <div>
      <img id="stock"src="./assets/stock.jpg">
    </div>  
    <front-page />
  </div>
</template>

<script>
import FrontPage from './components/FrontPage'
import TodoList from './components/toDoList'
import NavBar from './components/NavBar'

export default {
  name: 'App',
  components: {
    FrontPage,
    TodoList,
    NavBar
  },
  data() {
    return {
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }]
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
