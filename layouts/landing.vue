<template>
  <v-app dark>
    <Toolbar v-model="drawer" :hidden-menu="false"></Toolbar>
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
import Toolbar from "~/components/core/toolbars/toolbar.vue";

export default defineComponent({
  head: genAppMetaInfo(metadata),
  components:{
    Toolbar
  },
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
