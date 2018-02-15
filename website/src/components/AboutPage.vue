<template>
  <div class="frontpage">
    <div class="col">
      <h1 class="abt">{{ msg }}</h1>
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
.frontpage {
  text-align: center;
  margin-top: 25px;
  margin-bottom: 25px;
}
.abt {
  text-align: center
}
#about {
  width: 80%;
  text-align: center;
}

</style>
