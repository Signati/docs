<template>
  <v-row>
    <v-col cols="12">
      <p align="center">
        <a href="http://nestjs.com/" target="blank">
          <img
            src="https://avatars1.githubusercontent.com/u/52678977?s=400&amp;u=040aa07fa564985892d0fd115a2764579845502d&amp;v=4"
            width="320" alt="Signati">
        </a>
      </p>
      <section>
        <h1 class="v-heading text-h3 text-sm-h3 mb-4 mx-auto" style="max-width: 568px;">
          <a  class="text--black black--text text-decoration-none text-right text-md-left"> # Signati</a></h1>
        <p class="mx-auto" style="max-width: 568px;">
          Este módulo genera un CFDI a partir de clases lo que facilita la creacion de XMl y sellarlo sin nigun problema
          de compatibilidad de las versiones 2.0.
        </p>

        <v-container>
          <v-row justify="center">
            <v-col class="col-auto">
              <v-btn large dark color="primary" class="v-btn v-btn--has-bg theme--dark v-size--x-large">
                GET STARTED
              </v-btn>
            </v-col>
            <v-col class="col-auto">
              <v-btn large dark class="v-btn v-btn--has-bg theme--dark v-size--x-large">
                GITHUB
              </v-btn>
            </v-col>
          </v-row>

        </v-container>
      </section>
      <section>
        <h2 class="v-heading text-h3 text-sm-h3 mb-4 mx-auto" style="max-width: 568px;">
          <a href="#project-sponsors" class="text-decoration-none text-right text-md-left"> # </a>
          Project Sponsors </h2>
      </section>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
// import Markup from "~/components/Markup.vue";
import { defineComponent, onMounted, ref, useStore } from "@nuxtjs/composition-api";
import { genAppMetaInfo } from '~/util/metadata';

export default defineComponent({
  head: () => {
    return {
      ...genAppMetaInfo({
        title: "Node Js CFDI 4.0",
        description: 'Comienza instalando los requerimientos Windows, Linux y Mac',
        keywords: "signati,saxon He,node, node js, php, laravel, Windows, Linux, Mac, SAT, CFDI",
        url: 'https://docs.signati.app/getting-started/installation'
      }),
    }
  },
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
    const src = ref('')

    const { commit } = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [

      ])
    })
    return {
      src,
    }
  }
})
</script>
