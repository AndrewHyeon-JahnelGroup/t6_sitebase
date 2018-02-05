<template>
  <div>
    <email-modal />
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
