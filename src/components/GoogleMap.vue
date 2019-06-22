<template>
  <div>
    <gmap-map
      :center="center"
      :zoom="15"
      style="width:100%;  height: 190px"
    >
      <gmap-marker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      center: { lat: 50.005838, lng: 36.247817 },
      markers: [],
      places: [],
      currentPlace: null
    };
  },
  methods: {
    setPlace(place) {
      this.currentPlace = place;
    },
  }
};
</script>