<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title>
          Elleven Map App
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent/*, onMounted */ } from 'vue'
// import useApi from 'src/composables/UseApi'

export default defineComponent({
  name: 'LoginLayout',

  setup () {
    return {
    }
  }
})
</script>
