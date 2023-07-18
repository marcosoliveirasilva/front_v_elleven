<template>
  <q-page>
    <l-map
      v-if="!loading"
      :markers="markers"
    />
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { getLugares } from '../helpers/getters'
import LMap from 'components/LMap.vue'

export default defineComponent({
  name: 'MapPage',

  data () {
    return {
      loading: false,
      markers: []
    }
  },

  components: {
    LMap
  },

  created () {
    this.buscarLugares()
  },

  methods: {
    getLugares,

    async buscarLugares () {
      this.loading = true

      const response = await this.getLugares({})
      this.markers = response !== 'ERROR' ? response : []

      this.loading = false
    },

    handleDelete (id) {
      try {
        this.deleteLugar(id)
      } catch (error) {
        console.error(error)
      }
    }
  }
})
</script>
