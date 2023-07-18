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
        label="Latitude"
        outlined
        v-model="form.latitude"
        class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
        :rules="requiredRule"
      />
      <q-input
        label="Longitude"
        outlined
        v-model="form.longitude"
        class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
        :rules="requiredRule"
      />
      <q-input
        label="Raio"
        outlined
        v-model="form.raio"
        class="col-xs-12 col-sm-12 col-md-8 col-lg-7"
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
  setup () {
    const form = ref({
      descricao: '',
      latitude: '',
      longitude: '',
      poligono: '0',
      raio: ''
    })
    const router = useRouter()

    const requiredRule = [
      val => (val && val.length > 0) || 'Campo obrigatório'
    ]

    const handleSubmit = async () => {
      try {
        if (form.value.raio === undefined || form.value.raio === null || form.value.raio === '') { form.value.raio = '0' }
        await api.post('locais/add', form.value)
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
