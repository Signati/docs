<template>
  <v-app dark>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      outlined
      style="left: 0px !important; border-bottom-color: rgba(0,0,0,.12)!important;"
      elevation="0"
    >
      <v-img height="40" max-width="40" class="ml-8 mr-4" src="../../../logo.png"></v-img>
      <v-toolbar-title class="primary--text" v-text="title"/>
      <v-spacer/>
      <Search></Search>
      <v-spacer/>
      v3.3.9
      <v-btn icon color="primary">
        <v-icon>{{ mdiGithub }}</v-icon>
      </v-btn>

    </v-app-bar>
    <v-main>
      <v-container>
        <nuxt />
      </v-container>
    </v-main>
    <v-footer
      :absolute="!fixed"
      app
    >
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import { defineComponent, ref, useContext, useRouter } from "@nuxtjs/composition-api";
import { mdiGithub } from "@mdi/js";
import { genAppMetaInfo } from "~/util/metadata";
import metadata from '../data/metadata.json'

export default defineComponent({
  head: genAppMetaInfo(metadata),
  setup(props, { root }) {
    const context = useContext()
    const router = useRouter()
    const clipped = ref<boolean>(false);
    const drawer = ref<boolean>(false);
    const fixed = ref<boolean>(false);
    const title = ref<string>('Signati');

    return {
      clipped,
      drawer,
      fixed,
      title,
      mdiGithub
    }
  }
})
</script>
