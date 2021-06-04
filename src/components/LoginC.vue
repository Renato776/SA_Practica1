<template>
    <v-container>
        <v-row align="center">
            <v-card
                class="mx-auto my-12">

            <v-card-title>Iniciar Sesión</v-card-title>
            
            <v-card-text>
                <v-text-field
                label="Nombre de usuario"
                v-model="username"
                :error-messages="usernameErrors"
                @input="$v.username.$touch()"
                @blur="$v.username.$touch()"
                >
                </v-text-field>
                
                <v-text-field
                label="Contraseña"
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
                v-model="password"
                @input="$v.password.$touch()"
                @blur="$v.password.$touch()"
                :error-messages="passwordErrors"
                ></v-text-field>
                
                <div style="display: grid; grid-gap:1rem; width: 500px; grid-template-columns: 1fr 280px; grid-template-rows: 50px; overflow: hidden; padding-top: 0.2em; padding-bottom:0.2em;">
                <v-btn
                style="align-self: center; height: 50px; font-family: sans-serif;"
                    color="primary"
                    elevation="2"
                    @click="loginUser"
                    :disabled="$v.$invalid"
                >Login</v-btn>

                <v-btn
                style="align-self: center; height: 50px; font-family: sans-serif;"
                    color="primary"
                    elevation="2"
                    @click="goToRegister"
                > CALIFICACION </v-btn>
                </div>
            </v-card-text>
            

            </v-card>
        </v-row>
        <v-row 
            justify="center"
            v-if="errorRequest !== ''"
        >
            <v-alert
                type="error"
            >{{ errorRequest }}</v-alert>
        </v-row>
    </v-container>
</template>


<script>

import { validationMixin } from 'vuelidate';
import { required } from 'vuelidate/lib/validators';
import UserService from '@/services/user.service.js';

export default {
    name: 'LoginComponent',
    data(){
        return {
            showPassword: false,
            username: '',
            password: '',
            errorRequest: ''
        }
    },
    created(){
      this.$store.commit('logout');
    },

    methods: {
        goToRegister() {
            this.$router.push('/register');
        },
        loginUser(){
            this.$v.$touch();
            UserService.login(this.username, this.password).then(
                (response) => {
                    this.$store.commit('login', response.data.data);
                    this.$router.push('/calendar');
                }
            ).catch(
                error => {
                    this.errorRequest = error.response.data.message;
                }
            );
        }
    },

    mixins: [validationMixin],

    validations: {
        username: { required },
        password: { required }
    },

    computed: {
        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('El nombre de usuario es obligatorio');
            return errors;
        },

        passwordErrors() {
            const errors = [];
            if(!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('La contraseña es obligatoria');
            return errors;
        }
    }
}
</script>
