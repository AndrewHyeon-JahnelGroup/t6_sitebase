<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <div class="contact-modal">
      <md-dialog-title>Contact Us</md-dialog-title>
        <email-form v-bind:mgData="mgData"/>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button id="submit" class="md-primary" @click="showDialog = false; sendEmail()">Send</md-button>
      </md-dialog-actions>
    </div>
    </md-dialog>
   <md-button class="md-primary md-raised" @click="showDialog = true">Contact Us</md-button>
  </div>
</template>

<script>
import EmailForm from './EmailForm'

export default {
    name: 'EmailModal',
    components: {
      EmailForm
    },
    data: () => (
      {
      showDialog: false,
      mgData: {
        from: '',
        number:'',
        subject: '',
        message: ''
      }

    }),
    methods: {
      sendEmail: function sendEmail() {
        console.log(this.$data.mgData, 'workshere')
        var submit = document.getElementById('submit');

        this.axios.post('http://localhost:4000/send', {
          body: this.$data.mgData
        })
        .then(response => {})
        .catch(e => {
          console.log(e, 'error')
        })

      }
    }
  }
</script>

<style>
.contact-modal{
  padding: 20px;
}
.md-dialog {
  width: 30%;
}
</style>
