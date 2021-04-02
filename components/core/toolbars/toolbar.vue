<template>
  <v-app-bar
    :clipped-left="clipped"
    fixed
    app
    color="white"
    outlined
    style="left: 0px !important; right: 0px !important; border-bottom-color: rgba(0,0,0,.12)!important;"
    elevation="0"
  >
    <v-app-bar-nav-icon v-if="hide" class="d-lg-none d-xl-flex" @click.stop="drawerTouch"/>
    <v-img height="40" max-width="40" class="ml-8 mr-4" src="../../../logo.png"></v-img>
    <v-toolbar-title class="primary--text" v-text="title"/>
    <v-spacer/>
    <Search></Search>
    <v-spacer/>
    v3.3.10
    <v-btn icon href="https://github.com/Signati/core" target="_blank" color="primary">
      <v-icon>{{ mdiGithub }}</v-icon>
    </v-btn>
  </v-app-bar>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, ref, watch} from '@vue/composition-api';
import {mdiGithub, mdiMenu} from '@mdi/js';
import Search from "~/components/Search.vue";

interface PropsToolbar {
  value: boolean
}

const Toolbar = defineComponent<PropsToolbar>({
  components: {
    Search
  },
  props: {
    value: {
      type: Boolean,
      required: false, // Accepts null and undefined as well
    },
    hiddenMenu: {
      required: false,
      default: false
    }
  },
  setup(props: { value: boolean, hiddenMenu: boolean }, {emit}) {
    const title = 'Signati/Core'
    const clipped = ref(false)
    const open = computed(() => {
      return props.value;
    });

    const hide = computed(() => {
      return props.hiddenMenu;
    });
    const drawerTouch = () => {
      console.log('value ' + props.value);
      console.log('value emit' + !props.value);
      emit('input', !open.value);
    };
    return {
      drawerTouch,
      clipped,
      mdiGithub,
      mdiMenu,
      open,
      title,
      hide
    };
  },
});
export default Toolbar;
</script>
