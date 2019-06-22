import Vue from 'vue'
import App from './App.vue'
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBRTd5-9pR0PAtFbdXFzh8JbKT5R2VCrWU",
    libraries: "places" // necessary for places input
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
