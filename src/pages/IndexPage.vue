<template>
  <q-page padding>
    <q-table
      title="Meus locais"
      :rows="lugares"
      :columns="columns"
      row-key="uid"
      :loading="loading"
    >
      <template v-slot:top-left>
        <q-btn label="Novo" icon="add" color="primary" :to="{ name: 'form' }" />
      </template>

      <template v-slot:top-right>
        <q-btn label="Novo (Poligono)" icon="add" color="primary" :to="{ name: 'formPolygon' }" />
      </template>

      <template v-slot:body-cell-acoes="props">
        <q-td>
          <q-btn
            color="negative"
            icon="delete"
            class="float-right"
            dense
            @click="handleDelete(props.row.id)"
          />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import { getLugares } from '../helpers/getters'
import { deleteLugar } from '../helpers/deletions'

const columns = [
  {
    name: 'uid',
    label: 'Id',
    align: 'left',
    field: row => row.id,
    sortable: true
  },
  {
    name: 'descricao',
    label: 'Descrição',
    align: 'left',
    field: row => row.descricao,
    sortable: true
  },
  {
    name: 'latitude',
    label: 'Latitude',
    align: 'left',
    field: row => row.latitude,
    sortable: true
  },
  {
    name: 'longitude',
    label: 'Longitude',
    align: 'left',
    field: row => row.longitude,
    sortable: true
  },
  {
    name: 'acoes',
    label: 'Ações',
    align: 'rigth',
    field: row => row.acoes
  }
]

export default defineComponent({
  name: 'IndexPage',

  data () {
    return {
      loading: false,
      lugares: [],
      columns
    }
  },

  created () {
    this.buscarLugares()
  },

  methods: {
    getLugares,
    deleteLugar,

    async buscarLugares () {
      this.loading = true

      const response = await this.getLugares({})
      this.lugares = response !== 'ERROR' ? response : []

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
