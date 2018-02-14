<template>
  <div class="container">
    <email-modal class="text-center"/>
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
      content: 'Under development'
    }
  }
}
</script>
