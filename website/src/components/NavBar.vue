<template>
  <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="About" to="/about"></md-tab>
      <md-tab id="tab-posts" md-label="Our Team" to="/team"></md-tab>
      <md-tab id="tab-settings" md-label="Contact" to="/contact"></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default{
  name: 'NavBar'
}
</script>
