<template>
  <div class="frontpage">
    <h1>Team</h1>
        <team-profile v-for="item in team"
                      v-bind:name="item.name" />
  </div>
</template>

<script>
import TeamProfile from './TeamProfile'

export default {
  name: 'AboutPage',
  components: {
    TeamProfile
  },
  data () {
    return {
      team: [
        {name: 'Bob Smith'},
        {name: 'Jack Jim'},
        {name: 'Tom James'},
        {name: 'Will Jones'}
      ]
    }
  }
}
</script>
