<template>
  <div class="team">
    <h1>Team</h1>
      <div class="container card-deck">
        <team-profile v-for="item in team"
                      v-bind:name="item.name" :about="item.about" :title="item.title" :email="item.email"/>
      </div>
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
        {
          name: 'George Bertram',
          title: 'President',
          about: '',
          email: 'gbertram@teamsix.us'
        },
        {
          name: 'Dave Carson',
          title: 'Lead Mechanical Engineer',
          about: '',
          email: 'dcarson@teamsix.us'
        },
        {
          name: 'Mark Salerno',
          title: 'Design Director',
          about: 'Super Genius Extraordinaire, Master of Technology and Innovation, Master of the Impossible',
          email: 'msalerno@teamsix.us'
        },
        {
          name: 'Doug Walker',
          title: 'Mechanical Engineer',
          about: 'Doug Walker has degrees in Mechanical Engineering from MIT and the University of Michigan. He has 22 years of experience in machine design, mechanism design, and product development.',
          email: 'dwalker@teamsix.us'
        },
        {
          name: 'Ken Polley',
          title: '',
          about: '',
          email: 'kpolley@teamsix.us'
        },
        {
          name: 'Kathy Roehrich',
          title: 'title',
          about: '',
          email: 'kreohrich@teamsix.us'
        },
        {
          name: 'Andrew Hyeon',
          title: 'Head Software Engineer and  Lead Task Monkey',
          about: '',
          email: 'ahyeon@teamsix.us'
        },
      ]
    }
  }
}
</script>
<style scoped>
.team {
  margin-top: 25px;
  margin-bottom: 25px;
  width: 100%
}
.container {
  margin: 10px;
  display: flex;
  width: 100%;
  flex-wrap: wrap
}
</style>
