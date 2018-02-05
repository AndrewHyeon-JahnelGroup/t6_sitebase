<template>
  <div class="emailform">
    <md-dialog :md-active.sync="showDialog">
     <md-dialog-title>Contact Us</md-dialog-title>

     <md-tabs md-dynamic-height>
       <md-tab md-label="General">

    </md-tab>

     </md-tabs>

     <md-dialog-actions>
       <md-button class="md-primary" @click="showDialog = false">Close</md-button>
       <md-button class="md-primary" @click="showDialog = false">Save</md-button>
     </md-dialog-actions>
   </md-dialog>

   <md-button class="md-primary md-raised" @click="showDialog = true">Show Dialog</md-button>
  </div>
</template>

<script>

export default {
    name: 'EmailModal',
    data: () => ({
      showDialog: false
    })
  }
</script>

<style>
.md-dialog {
  background: white;
  max-width: 768px;
  opacity: 1;
}
</style>
