<template>
  <div class="emailform">
    <md-dialog :md-active.sync="showDialog">
      <div class="contact-modal">
      <md-dialog-title>Contact Us</md-dialog-title>
        <email-form />
      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
        <md-button class="md-primary" @click="showDialog = false">Send</md-button>
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
    data: () => ({
      showDialog: false
    })
  }
</script>

<style>
.contact-modal{
  padding: 20px;
}
.md-dialog {
  background: white;
  width: 30%;
  opacity: 1;
}
</style>
