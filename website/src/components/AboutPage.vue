<template>
  <div class="frontpage justify-content-between">
    <div class="row justify-content-between">
      <h1 class="abt col-md-12">{{ msg }}</h1>
    </div>
    <div class="row">
      <div class="col-md-12" id="about">
        <p>{{ content }}</p>
      </div>
    </div>
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
      content: 'Team Six is a small group of highly capable and experienced engineers who engage in world-class Product Development. We are skilled at doing basic research and concept development. By nature, we are systems engineers; and our skill set is in the realm of mechanical, thermodynamic, fluid systems, controls, electrical, user interface, computer, and software design. We also have a great deal of experience with industrial design. Our client list is strictly confidential and will remain so for the foreseeable future.'
    }
  }
}
</script>

<style>
.abt {
  text-align: center
}
#about {
  width: 80%;
  text-align: center;
}

.frontpage {
  text-align: center
}
</style>
