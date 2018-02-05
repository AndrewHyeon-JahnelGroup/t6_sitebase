<template>
  <div>
    <md-field>
     <label>Name</label>
     <md-input v-model="name"></md-input>
    </md-field>

    <md-field>
     <label>Email</label>
     <md-input v-model="type"></md-input>
    </md-field>

    <md-field>
     <label>Phone Number</label>
     <md-input v-model="phoneNumber"></md-input>
    </md-field>

    <md-field>
     <label>Message</label>
     <md-textarea v-model="message"></md-textarea>
    </md-field>
  </div>
</template>

<script>

export default {
  name: 'EmailForm',
  data: () => ({
     name: null,
     type: null,
     phoneNumber: null,
     message: null,
   })
}
</script>
