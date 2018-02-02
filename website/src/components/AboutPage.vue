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
  name: 'AboutPage',
  data () {
    return {
      msg: 'About',
      content: 'Under development'
    }
  }
}
</script>
