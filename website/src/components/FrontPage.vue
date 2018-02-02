<template>
  <div class="frontpage">
    <h1>{{ msg }}</h1>
    <p>{{ content }}</p>
    <div class = "loadercontainer">
    <div class="loader">
      <div id="largeBox"></div>
      <div id="smallBox"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'FrontPage',
  data () {
    return {
      msg: 'Welcome to Team Six, Inc.',
      content: 'Under development'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.frontpage {
  padding-top: 20px;
}
.loadercontainer {
  padding: 20px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  margin: 0;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loader {
  width: 3em;
  height: 3em;
  animation: loaderAnim 1.25s infinite;
  outline: 1px solid transparent;
}
.loader #largeBox {
  height: 3em;
  width: 3em;
  background-color: #34495e;
  outline: 1px solid transparent;
  position: fixed;
}
.loader #smallBox {
  height: 3em;
  width: 3em;
  background-color: #ECECEC;
  position: fixed;
  z-index: 1;
  outline: 1px solid transparent;
  animation: smallBoxAnim 1.25s alternate infinite ease-in-out;
}

@keyframes smallBoxAnim {
  0% {
    transform: scale(0.2);
  }
  100% {
    transform: scale(0.75);
  }
}
@keyframes loaderAnim {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(90deg);
  }
}

</style>
