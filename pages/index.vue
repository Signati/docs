<template>
  <v-row>
    <v-col cols="12">
      <p align="center">
        <a href="https://docs.signati.app/" target="blank">
          <img
            src="https://avatars1.githubusercontent.com/u/52678977?s=400&amp;u=040aa07fa564985892d0fd115a2764579845502d&amp;v=4"
            width="320" alt="Signati">
        </a>
      </p>
      <section>
        <h1 class="v-heading text-h3 text-sm-h3 mb-4 mx-auto" style="max-width: 568px;">
          <a class="text--black black--text text-decoration-none text-right text-md-left">Signati</a>
        </h1>
        <p class="mx-auto" style="max-width: 568px;">
          Este módulo genera un CFDI a partir de clases lo que facilita la creacion de XML y sellarlo sin nigun problema
          de compatibilidad de las versiones 2.0.
        </p>

        <v-container>
          <v-row justify="center">
            <v-col class="col-auto">
              <v-btn large
                     href="https://docs.signati.app/getting-started/installation"
                     to="/getting-started/installation"
                     dark color="primary" class="v-btn v-btn--has-bg theme--dark v-size--x-large">
                GET STARTED
              </v-btn>
            </v-col>
            <v-col class="col-auto">
              <v-btn href="https://github.com/MisaelMa/cfdi" large dark
                     class="v-btn v-btn--has-bg theme--dark v-size--x-large">
                <v-icon class="mr-2">
                  {{mdiGithub}}
                </v-icon>
                GITHUB
              </v-btn>
            </v-col>
          </v-row>

        </v-container>
      </section>
      <section>
        <h2 class="v-heading text-h3 text-sm-h3 mb-4 mx-auto" style="max-width: 568px;">
          soporte
        </h2>
        <v-row justify="center">
          <v-col class="col-auto">
            <v-btn large
                   href="https://docs.signati.app/nodejs/cfdi"
                   color="#4CAF50"
                   dark
                   class="v-btn v-btn--has-bg theme--dark v-size--x-large">
              <v-icon class="mr-2">
                mdi-nodejs
              </v-icon>
              Node Js
            </v-btn>
          </v-col>
          <v-col class="col-auto">
            <v-btn href="https://docs.signati.app/php/cfdi" large dark
                   color="#FE382D"
                   class="v-btn v-btn--has-bg theme--dark v-size--x-large">
              <v-icon class="mr-2">
                mdi-language-php
              </v-icon>
              PHP
            </v-btn>
          </v-col>
        </v-row>
      </section>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import Markup from "~/components/Markup.vue";
import {defineComponent, ref} from "@nuxtjs/composition-api";
import {useNetwork} from '@vueuse/core'
import {reactive} from "@vue/composition-api";
import {mdiGithub} from "@mdi/js";


export default defineComponent({
  layout: 'landing',
  components: {
    Logo,
    VuetifyLogo,
    VueMarkdown: () => {
      if (process.client) {
        return import('vue-markdown-render')
      }
    },
  },
  setup(props, ctx) {
    const network = reactive(useNetwork())

    return {
      network,
      mdiGithub
    }
  }
})
</script>
