<template>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="ugram Logo"
          class="shrink mr-2"
          contain
          src="/favicon.ico"
          transition="scale-transition"
          width="40"
        />
        <v-btn
            text
            @click="goToHome"
            >
                <span class="mr-2">Natalia Consejera</span>
            </v-btn>

      </div>

      <v-spacer></v-spacer>

      <div v-if="getSession !== null" >
        <div v-if="isAdmin" >
          <v-btn
              target="_blank"
              text
              @click="goToCalendar"
              >
                  <span class="mr-2">Calendario</span>
              </v-btn>
          
            <v-btn
              target="_blank"
              text
              @click="goToLogin"
              >
                  <span class="mr-2">Cerrar Sesión</span>
          </v-btn>
        </div>
        <div v-if="isAdmin != true" >
          <v-btn
              target="_blank"
              text
              @click="goToPayment"
              >
                  <span class="mr-2">Presentar solvencia</span>
              </v-btn>
          
            <v-btn
              target="_blank"
              text
              @click="logout"
              >
                  <span class="mr-2">Cerrar Sesión</span>
              </v-btn>
        </div>
      </div>
      
      <div v-if="getSession === null" >

        <v-btn
            target="_blank"
            text
            @click="goToRegister"
            >
                <span class="mr-2">Registrarse</span>
            </v-btn>
        
          <v-btn
            target="_blank"
            text
            @click="goToLogin"
            >
                <span class="mr-2">Login</span>
            </v-btn>
        </div>
    </v-app-bar>
</template>

<script>

import { mapGetters } from 'vuex';

export default {
    name: 'Header',

    data() {
      return {
        mensaje: 'Necesitas ayuda?',
        messages: []
      } 
    },

    computed: {
        ...mapGetters(['getSession','isAdmin'])
    },

    methods: {
        logout() {
            this.$store.commit('logout');
            this.$router.push('/');
        },
        goToCalendar() {
            this.$router.push('/calendar');
        },
        goToLogin() {
            this.$router.push('/');
        },
        goToRegister() {
            this.$router.push('/register');
        },
        goToPayment() {
            this.$router.push('/pay');
        },
        goToHome() {
            this.$router.push('/home');
        }
    }

}
</script>
