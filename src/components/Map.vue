<template lang="pug">
div
  #map
</template>

<script>
export default {
  name: "Map",
  data () {
    return {
      map: null,
      markers: [],
      positions: [
        { title: "Here!", lat: 37.5035977, lng: 126.9570567 }
      ]
    }
  },
  methods: {
    waitLoading (){
      if (!window.kakao || !window.kakao.maps) {
        setTimeout(this.waitLoading, .1)
      } else {
        window.kakao.maps.load(this.initMap)
      }
    },
    initMap () {
      const container = document.getElementById('map')
      const options = {
        center: new window.kakao.maps.LatLng(37.5035977, 126.9570567),
        level: 3
      }
      this.map = new window.kakao.maps.Map(container, options)

      this.displayMarkers()
    },
    displayMarkers () {
      if (this.markers.length > 0) {
        this.markers.forEach((item) => {
          item.setMap(null);
        })
      }

      this.markers = this.positions.map((p) => {
        return new window.kakao.maps.Marker({
          map: this.map,
          position: new window.kakao.maps.LatLng(p.lat, p.lng),
          title: p.title
        })
      })
    }
  },
  mounted() {
    this.waitLoading()
  }
}
</script>

<style scoped lang="stylus">
#map
  width 100%
  min-height 400px
</style>
