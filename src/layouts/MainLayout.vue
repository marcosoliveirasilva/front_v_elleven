<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Elleven Map App
        </q-toolbar-title>

         <q-btn
            color="info"
            label="Logout"
            class="float-right"
            dense
            @click="handleLogout()"
          />

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'
import Cookies from 'js-cookie'

const linksList = [
  {
    title: 'Localizações',
    caption: 'Lista de localizações cadastradas',
    icon: 'where_to_vote',
    routeName: 'lista'
  },
  {
    title: 'Cadastro de Localizações',
    caption: 'Formulário para cadastro',
    icon: 'assignment',
    routeName: 'form'
  },
  {
    title: 'Cadastro de Localizações ( Poligonos )',
    caption: 'Formulário para cadastro',
    icon: 'assignment',
    routeName: 'formPolygon'
  },
  {
    title: 'Mapa',
    caption: 'Mapa com localizações',
    icon: 'map',
    routeName: 'map'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },

  methods: {
    handleLogout () {
      Cookies.remove('_myapp_token')
      window.location.href = 'https://localhost:8080/#/login'
    }
  }
})
</script>
