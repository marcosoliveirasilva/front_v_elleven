<template>
  <img src="../../public/img/wave.png" class="wave" alt="login-wave">
  <div class="row" style="height: 90vh">
    <div class="col-0 col-md-6 flex justify-center content-center">
      <img src="../../public/img/logo_elleven.png" class="responsive" alt="login-image">
    </div>
    <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
         class="col-12 col-md-6 flex content-center">
      <q-card v-bind:style="$q.screen.lt.sm ? {'width': '80%'} : {'width': '50%'}">
        <q-card-section>
          <q-avatar size="103px" class="absolute-center shadow-10">
            <img src="../../public/img/icon.png" alt="avatar">
          </q-avatar>
        </q-card-section>
        <q-card-section>
          <div class="q-pt-lg">
            <div class="col text-h6 ellipsis flex justify-center">
              <h2 class="text-h2 text-uppercase q-my-none text-weight-regular">Login</h2>
            </div>
          </div>
        </q-card-section>
        <q-card-section>
          <q-form class="q-gutter-md" @submit.prevent="submitForm">
            <q-input label="Email" v-model="login.email">
            </q-input>
            <q-input label="Password" type="password" v-model="login.password">
            </q-input>
            <div>
              <q-btn class="full-width" color="primary" label="Login" type="submit" rounded></q-btn>
              <div class="text-center q-mt-sm q-gutter-lg">
                <router-link class="text-white" to="/login">Esqueceu a senha?</router-link>
                <router-link class="text-white" to="/login">Criar conta</router-link>
              </div>
            </div>
          </q-form>
        </q-card-section>
      </q-card>
    </div>
  </div>
</template>

<script>
import Cookie from 'js-cookie'

export default {
  name: 'PageLogin',

  data () {
    return {
      login: {
        email: 'obie.johns@example.com',
        password: 'password'
      }
    }
  },

  methods: {
    submitForm  () {
      const payload = {
        email: this.login.email,
        password: this.login.password
      }

      this.$axios
        .post(
          'http://127.0.0.1:8000/api/login',
          payload
        )
        .then((response) => {
          Cookie.set('_myapp_token', response.data.access_token)
          window.location.href = 'https://localhost:8080/#/lista'
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.wave {
  position: fixed;
  height: 100%;
  left: 0;
  bottom: 0;
  z-index: -1;
}
</style>
