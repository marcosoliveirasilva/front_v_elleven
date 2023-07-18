<template>
  <q-page padding>
    <q-form class="row q-col-gutter-xs justify-center" @submit="handleSubmit">
      <q-input
        label="Descrição"
        outlined
        v-model="form.descricao"
        class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
        :rules="requiredRule"
      />
      <q-input
        label="Latitude P1"
        outlined
        v-model="form.latitude_p1"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
        :rules="requiredRule"
      />
      <q-input
        label="Longitude P1"
        outlined
        v-model="form.longitude_p1"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
        :rules="requiredRule"
      />
      <q-input
        label="Latitude P2"
        outlined
        v-model="form.latitude_p2"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
        :rules="requiredRule"
      />
      <q-input
        label="Longitude P2"
        outlined
        v-model="form.longitude_p2"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
        :rules="requiredRule"
      />
      <q-input
        label="Latitude P3"
        outlined
        v-model="form.latitude_p3"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
        :rules="requiredRule"
      />
      <q-input
        label="Longitude P3"
        outlined
        v-model="form.longitude_p3"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
        :rules="requiredRule"
      />
      <q-input
        label="Latitude P4"
        outlined
        v-model="form.latitude_p4"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
      />
      <q-input
        label="Longitude P4"
        outlined
        v-model="form.longitude_p4"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4"
      />
      <q-input
        label="Latitude P5"
        outlined
        v-model="form.latitude_p5"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4 q-mt-md"
      />
      <q-input
        label="Longitude P5"
        outlined
        v-model="form.longitude_p5"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4 q-mt-md"
      />
      <q-input
        label="Latitude P6"
        outlined
        v-model="form.latitude_p6"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4 mt-10 q-mt-md"
      />
      <q-input
        label="Longitude P6"
        outlined
        v-model="form.longitude_p6"
        class="col-xs-8 col-sm-8 col-md-5 col-lg-4 q-mt-md"
      />
      <div class="col-xs-12 col-sm-12 col-md-8 col-lg-7 q-mt-md">
        <q-btn label="Salvar" color="primary" class="float-right" type="submit" />
        <q-btn
          label="Cancelar"
          color="white"
          class="float-right text-black q-mr-md"
          :to="{ name: 'lista' }" />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { api } from 'boot/axios'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'FormPage',

  data () {
    return {
      text: ''
    }
  },

  setup () {
    const form = ref({
      descricao: ''
    })

    const formEnvio = ref({
      descricao: '',
      latitude: '0',
      longitude: '0',
      poligono: '',
      raio: '0'
    })

    const router = useRouter()

    const requiredRule = [
      val => (val && val.length > 0) || 'Campo obrigatório'
    ]

    const handleSubmit = async () => {
      try {
        let i = ''
        if (form.value.latitude_p1 !== undefined && form.value.longitude_p1 !== undefined) {
          i = i + form.value.latitude_p1 + '_'
          i = i + form.value.longitude_p1
        }
        if (form.value.latitude_p2 !== undefined && form.value.longitude_p2 !== undefined) {
          i = i + ',' + form.value.latitude_p2 + '_'
          i = i + form.value.longitude_p2
        }
        if (form.value.latitude_p3 !== undefined && form.value.longitude_p3 !== undefined) {
          i = i + ',' + form.value.latitude_p3 + '_'
          i = i + form.value.longitude_p3
        }
        if (form.value.latitude_p4 !== undefined && form.value.longitude_p4 !== undefined) {
          i = i + ',' + form.value.latitude_p4 + '_'
          i = i + form.value.longitude_p4
        }
        if (form.value.latitude_p5 !== undefined && form.value.longitude_p5 !== undefined) {
          i = i + ',' + form.value.latitude_p5 + '_'
          i = i + form.value.longitude_p5
        }
        if (form.value.latitude_p6 !== undefined && form.value.longitude_p6 !== undefined) {
          i = i + ',' + form.value.latitude_p6 + '_'
          i = i + form.value.longitude_p6
        }

        formEnvio.value.poligono = i
        formEnvio.value.descricao = form.value.descricao

        await api.post('locais/add', formEnvio.value)
        router.push({ name: 'lista' })
      } catch (error) {
        console.error(error)
      }
    }
    return {
      form,
      handleSubmit,
      requiredRule
    }
  }
})

</script>
