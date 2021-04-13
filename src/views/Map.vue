<template>
  <main>
      <h1>Tu estas aqui:</h1>
      <p>{{ coordinates.lat }} Latitude, {{ coordinates.lng }} Longitude</p>
      <GmapMap
        :center="{lat:10, lng:10}"
        :zoom="7"
        map-type-id="terrain"
        style="width:640px; height:360px;"
      >
      </GmapMap>
  </main>
</template>

<script>
export default {
    data() {
        return {
            coordinates: {
                lat: 0,
                lng: 0
            }
        }
    },

    created() {
        this.$getLocation({})
            .then(coordinates => {
                this.coordinates = coordinates;
            });
    }
}
</script>

<style>

</style>