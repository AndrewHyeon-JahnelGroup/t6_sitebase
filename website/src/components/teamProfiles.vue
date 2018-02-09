<template>
  <div class="frontpage">
    <h1>team</h1>
    <ul id="teamlist">
      <li v-for="item in team">
        {{ item }}
      </li>
    </ul>
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
  name: 'teamProfile',
  data () {
    return {
      team: [
        'team member 1',
        'team member 2',
        'team member 3',
        'team member 4'
      ]
    }
  }
}
</script>
