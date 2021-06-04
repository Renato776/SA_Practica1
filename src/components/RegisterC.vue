<template>
    <v-container>
        <v-row
            class="py-10"
        >
            <v-card
                class="mx-auto my-12"
            >
                <v-card-title>Registrarse</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field label="Nombre Completo" 
                        v-model="name"
                        required
                        :error-messages="nameErrors"
                        @blur="$v.name.$touch()"
                        @input="$v.name.$touch()"
                        >
                        </v-text-field>

                        <v-text-field label="Nombre de usuario" v-model="username" required
                        :error-messages="usernameErrors"
                        @blur="$v.username.$touch()"
                        @input="$v.username.$touch()"
                        >
                        </v-text-field>

                        <v-text-field label="Contraseña"
                        :type="showPassword ? 'text' : 'password'"
                        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPassword = !showPassword"
                        v-model="password"
                        required
                        :error-messages="passwordErrors"
                        @blur="$v.password.$touch()"
                        @input="$v.password.$touch()"
                        >
                        </v-text-field>

                        <v-text-field label="Confirmar contraseña" 
                        :type="showPasswordConfirmation ? 'text' : 'password'"
                        :append-icon="showPasswordConfirmation ? 'mdi-eye' : 'mdi-eye-off'"
                        @click:append="showPasswordConfirmation = !showPasswordConfirmation"
                        v-model="passwordConfirmation"
                        required
                        :error-messages="passwordConfirmationErrors"
                        @blur="$v.passwordConfirmation.$touch()"
                        @input="$v.passwordConfirmation.$touch()"
                        >
                        </v-text-field>

                        <v-btn color="primary" block class="mt-2" @click="submit" :disabled="$v.$invalid">
                            Registrarse
                        </v-btn>
                    </v-form>

                    <v-card-actions class="mt-4">
                    ¿Ya tienes una cuenta?
                        <v-btn class="ml-2" plain @click="goToLogin">Iniciar sesión</v-btn>
                    </v-card-actions>

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
import { required, sameAs } from 'vuelidate/lib/validators';
import UserService from '@/services/user.service.js';

export default {
    name: 'RegisterComponent',

    mixins: [validationMixin],

    validations: {
        name: { required },
        username: { required },
        password: { required },
        passwordConfirmation: {
            sameAsPassword: sameAs('password')
        }
    },

    data() {
        return {
            showPassword: false,
            showPasswordConfirmation: false,
            name: '',
            username: '',
            password: '',
            passwordConfirmation: '',
            isRepeatedUsername: true,
            errorRequest: ''
        }
    },

    methods: {
        goToLogin() {
            this.$router.push('/');
        },

        submit() {
            this.$v.$touch();
            UserService.register(this.name, this.username, 
            this.password, this.passwordConfirmation).then(
                () => {
                    this.$router.push('/');
                }
            ).catch(
                error => {
                    if (error.response.status == 400){
                        this.isRepeatedUsername = false;
                        this.$v.username.$touch();
                    }else{
                        this.errorRequest = error.response.data.message;
                    }
                }
            );
        }
    },

    computed: {
        nameErrors() {
            const errors = [];
            if (!this.$v.name.$dirty) return errors;
            !this.$v.name.required && errors.push('El nombre es obligatorio');
            return errors;
        },

        usernameErrors() {
            const errors = [];
            if (!this.$v.username.$dirty) return errors;
            !this.$v.username.required && errors.push('El nombre de usuario es obligatorio');
            !this.isRepeatedUsername && errors.push(`El nombre de usuario ${this.username} no esta disponible`);
            return errors;
        },

        passwordErrors() {
            const errors = [];
            if(!this.$v.password.$dirty) return errors;
            !this.$v.password.required && errors.push('La contraseña es obligatoria');
            return errors;
        },

        passwordConfirmationErrors() {
            const errors = [];
            if(!this.$v.passwordConfirmation.$dirty) return errors;
            !this.$v.passwordConfirmation.sameAsPassword && errors.push('Las contraseñas no coinciden');
            return errors;
        }
    }
}
</script>
