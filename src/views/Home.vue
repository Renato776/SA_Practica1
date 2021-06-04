<style>
.chip-support{
  justify-self: end; 
  background-color: lime !important;
  width: auto;
}
.chip-myself{
  justify-self: start; 
  background: cyan !important;
  width: auto;
}
.container-support{
  display:grid;
  background: #ccf2c8; 
  padding:1em;
}
.container-myself{
  display:grid;
  background: white; 
  padding:1em;
}
</style>
<template>
  <v-container class="py-1 px-10">
    <v-card class="my-10 mx-10">
      <v-card-title color="blue">Datos Personales</v-card-title>
      <v-card-text>
        <v-row>
          <v-col cols="3">
          <v-row>
            <v-img
              alt="profile"
              max-height="250"
              max-width="250"
              style="margin: 0px 0.5em 0.5em 0px;"
              :src="user.photo.src"
            ></v-img>
            </v-row>
            <v-row>
              <v-chip 
              color="blue" 
              style="margin:0.5em"
              v-for="label in user.photo.labels" :key=label>
                {{label}}
              </v-chip>
            </v-row>
          </v-col>
          <v-col cols="5">
            <v-row>
              <v-col>
                <h2>Nombre de Usuario:</h2>
                <h3>{{ user.username }}</h3>
              </v-col>
            </v-row>
            <v-row class="mt-8">
              <v-col>
                <h2>Nombre Completo:</h2>
                <h3>{{ user.name }}</h3>
              </v-col>
            </v-row>
          </v-col>
          <v-col align-self="center">
            <v-btn 
              color="primary"
              block
              @click="goToEditProfile"
            >Editar Perfil</v-btn>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>

    <v-card class="my-10 mx-10">
      <v-card-title style="background-color: #cef7f7;">
        <span style="color:black; font-size:large; margin-right:5px;">Support</span>
         <span style="color:gray;"> - </span>
        <span style="color:#005700; font-size: large; margin-left: 5px;">Online</span>
        </v-card-title>
      <v-card-text style="padding-left:0px; padding-right:0px;">
      <div style="width:100%; display:grid; grid-gap:0px; padding:0px; grid-template-columns: 1fr;">
        <div v-for="m in messages" :key="m.id" v-bind:class="{ 'container-myself': m.myself, 'container-support': !m.myself}">
                <v-chip v-bind:class="{'chip-myself': m.myself, 'chip-support': !m.myself}">
                  {{m.message}}
                </v-chip>
        </div>
      </div>
          <div style="width: 100%; display: grid; grid-gap:2rem; padding: 1em; grid-template-columns: 7fr 1fr;">
              <v-text-field v-model="mensaje" ></v-text-field>
              <v-btn style="align-self:center;"
                color="primary"
                block
                @click="chat"
              >Envíar</v-btn>
          </div>
      </v-card-text>
    </v-card>

  </v-container>
</template>

<script>
export default {
  name: 'Home',

  data() {
    return {
      user: {}
    } 
  },

  created() {
    this.user = this.$store.getters.getSession;
  },

  methods: {
    goToPayment() {
      this.$router.push('/pay');
    }
  }

}
</script>
