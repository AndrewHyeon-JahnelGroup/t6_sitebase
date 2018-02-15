<template>
  <div class="row bottom">
    <div class="col-md-6 map">
      <gmap-map
        class="gmap"
        :center="center"
        :zoom="12"
      >
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        >
        </gmap-marker>
      </gmap-map>
    </div>
    <div class="col-md-4 location text-left">
      <h4>Headquarters</h4>
      <p> {{address[0]}} <br />
        {{address[1]}} <br />
        {{address[2]}} </p>
      <br />
      <h4>Contact</h4>
      <p>Phone number: (203)226-1391 <br />
         Email: gbertram@teamsix.us <br />
         Fax: <br />
         Hours: Monday-Friday 8:30AM  to 5:00PM ET
      </p>

    </div>
    <div class="col-md-2 location">

    </div>
  </div>
</template>

<script>
export default {
  name: 'BottomBar',
  data () {
    return {
      msg: 'About',
      content: 'Team Six is a small group of highly capable and experienced engineers who engage in world-class Product Development. We are skilled at doing basic research and concept development. By nature, we are systems engineers; and our skill set is in the realm of mechanical, thermodynamic, fluid systems, controls, electrical, user interface, computer, and software design. We also have a great deal of experience with industrial design. Our client list is strictly confidential and will remain so for the foreseeable future.',
      center: {lat: 41.2396071, lng: -73.1495277},
      markers: [{
        position: {lat: 41.2396071, lng: -73.1495277}
      }],
      address: ['Team Six, Inc.', '35 Nutmeg Drive, Suite 130', 'Trumbull, CT']
    }
  }
}
</script>

<style scoped>
.map {
  padding: 25px;
  padding-left: 50px;
  max-width: 500px;
  min-width: 300px;

}

.gmap{
  max-width: 500px;
  min-width: 300px;
  height: 100%
}

.location {
  padding-top: 25px;
  position: relative;
  text-align: left;
  max-width: 325px;
}

.bottom {
  width: 100%;
  height: 350px;
  background-color: #D5D5D5;
}
</style>
