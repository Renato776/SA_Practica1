<template>
    <v-container>
        <v-row>
            <v-card
                class="mx-auto my-12 px-10"
                width="40%"
            >
                <v-card-title>Presentar Solvencia</v-card-title>
                <v-card-text style="text-align:center;">
                     <v-file-input
                        label="Select image"
                        filled
                        show-size
                        accept="image/*"
                        prepend-icon="mdi-camera"
                        v-model="archivo"
                      ></v-file-input>
                    <v-btn style="display: inline-block;"
                        color="primary"
                        elevation="2"
                        @click="extraer"
                    >subir</v-btn>
                </v-card-text>
                      <v-divider>
                      </v-divider>
                      <p style="text-align:justify; text-justify:inter-word">
                      {{ texto }}
                      </p>
            </v-card>
        </v-row>
    </v-container>
</template>

<script>

import PhotoService from '@/services/photo.service.js';
export default {
    name: 'ExtractText',

    data() {
        return {
            archivo: null,
            texto: ''
        }
    },

    methods: {
      extraer(){
        if(!this.archivo) return;
        let formData = new FormData();
        formData.append("image", this.archivo);
        PhotoService.extractText(formData).then(response => {
            this.archivo = null;
            this.texto = response.data.data['text_image'];
            let qty = null;
            let possible = [ /gtq\s+[0-9]+(\.[0-9]+)?/ig, /q\s+[0-9]+(\.[0-9]+)?/ig, /\$\s+[0-9]+(\.[0-9]+)?/ig];
            let i = 0;
            while(!qty && i < possible.length){
              qty = possible[i].exec(this.texto);
              i++;
            }
            if(!qty){
              this.texto = "Recibo invalido, porfavor deposita tu solvencia y vuelve a intentar."
              console.log(this.texto);
              return;
            }
            if(/natalia/i.test(response.data.data['text_image'])){
              this.texto = `Recibo aceptado con éxito! Monto: ${qty}. Tu solvencia ha sido registrada`;
            } else {
              this.texto = `El recipiente del recibo es incorrecto, porfavor deposita tu solvencia y vuelve a intentar.`;
              console.log(this.texto);
            }
        }).catch(err => {
            console.log(err);
        });
      }
    },

    created(){}

}
</script>
