<template>
  <div class="col contact">
    <h4>{{content}}</h4>
    <div>
      <email-modal class="text-center"/>
    </div>
  </div>
</template>

<script>
import EmailModal from './EmailModal'

export default {
  name: 'ContactPage',
  components: {
    EmailModal
  },
  data () {
    return {
      msg: 'Contact Us',
      content: 'Please fill out a quick form to get in contact with us'
    }
  }
}
</script>

<style scoped>
.contact {
  margin: 25px;
}
</style>
