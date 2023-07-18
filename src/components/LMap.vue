<template>
  <div>
    <div id="mapContainer" />
  </div>
</template>

<script>
import { defineComponent, onMounted, onBeforeMount } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

export default defineComponent({
  name: 'LMap',

  props: {
    markers: {
      type: Array,
      required: false,
      default: () => []
    }
  },
  setup (props) {
    let map = null

    onMounted(() => {
      console.log(props.markers)
      createMapLayer()
    })

    onBeforeMount(() => {
      if (map) {
        map.remove()
      }
    })

    const createMapLayer = () => {
      map = L.map('mapContainer').setView([-14.88255, -40.85661], 12)
      L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution:
          '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map)

      if (props.markers.length) {
        setMarkers()
        setMarkersCircle()
        setMarkersPoligono()
      }
    }

    const setMarkers = () => {
      // eslint-disable-next-line array-callback-return
      props.markers.map((marker) => {
        if (marker.raio === '0' && marker.poligono === '0') {
          return L.marker([marker.latitude, marker.longitude]).addTo(map)
            .bindPopup(marker.descricao)
        }
      })
    }

    const setMarkersCircle = () => {
      // eslint-disable-next-line array-callback-return
      props.markers.map((marker) => {
        if (marker.raio !== '0') {
          return L.circle([marker.latitude, marker.longitude], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 300
          }).addTo(map).bindPopup(marker.descricao)
        }
      })
    }

    const setMarkersPoligono = () => {
      // eslint-disable-next-line array-callback-return
      props.markers.map((marker) => {
        if (marker.poligono !== '0') {
          const p = marker.poligono.split(',')
          const poligonos = []

          p.forEach(function (pu) {
            poligonos.push(pu.split('_'))
          })

          return L.polygon(poligonos).addTo(map).bindPopup(marker.descricao)
        }
      })
    }
  }
})
</script>

<style scoped>
#mapContainer {
  width: 100vw;
  height: calc(100vh - 50px);
}
</style>
