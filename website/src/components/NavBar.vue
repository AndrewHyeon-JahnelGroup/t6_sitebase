<template>
  <md-tabs md-sync-route>
      <md-tab id="tab-home" md-label="Home" to="/"></md-tab>
      <md-tab id="tab-pages" md-label="Pages" to="/about"></md-tab>
      <md-tab id="tab-posts" md-label="Posts" to="/team"></md-tab>
      <md-tab id="tab-settings" md-label="Settings" to="/contact"></md-tab>
      <md-tab id="tab-disabled" md-label="Disabled" md-disabled></md-tab>
    </md-tabs>
  </div>
</template>

<script>
export default{
  name: 'NavBar'
}
</script>
