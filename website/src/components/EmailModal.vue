<template>
  <div>
    <md-dialog :md-active.sync="showDialog">
      <div class="contact-modal">
      <md-dialog-title>Contact Us</md-dialog-title>
        <email-form v-bind:mgData="mgData"/>
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button id="submit" class="md-primary" @click="showDialog = false">Send</md-button>
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
        text: ''
      }

    }),
    methods: {
      sendEmail: function sendEmail() {
        var submit = document.getElementById('submit');

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
