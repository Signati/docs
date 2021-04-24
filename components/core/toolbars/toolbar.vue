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
    <v-btn icon href="https://github.com/Signati/core" target="_blank" color="black">
      <v-icon>{{ mdiGithub }}</v-icon>
    </v-btn>

    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          icon
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>
            {{ programming.icon }}
          </v-icon>
        </v-btn>
      </template>

      <v-list dense rounded="lg">
        <v-list-item-group
          v-model="programming"
          color="primary"
        >
          <v-list-item
            v-for="(item, index) in langs"
            :key="index"
            :value="item"
            :disabled="item.disable"
            @click="select(item)"
          >
            <v-list-item-icon class="pt-4 pl-0" style="margin: 0px !important; margin-right: 5px !important;">
              <v-icon :color="item.disable ? 'gray' : item.color">
                {{ item.icon }}
              </v-icon>
            </v-list-item-icon>
            <v-list-item-content class="ml-5">
              <v-list-item-title :color="item.color">{{ item.label }}</v-list-item-title>
              <v-list-item-subtitle v-if="item.beta">
                Beta
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>
<script lang="ts">
import {computed, defineComponent, reactive, ref, watch} from '@vue/composition-api';
import {mdiGithub, mdiMenu, mdiLanguagePhp} from '@mdi/js';
import Search from "~/components/Search.vue";

interface PropsToolbar {
  value: boolean;
  hiddenMenu: boolean;
}

// @ts-ignore
import * as Cookies from 'js-cookie'
import {useLocalStorage} from "@vueuse/core";
import {useTheme} from "~/composables/useTheme";
import {useRoute, useRouter} from "@nuxtjs/composition-api";

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
  setup(props: { value: boolean, hiddenMenu: boolean }, {emit, root}) {
    const title = 'Signati'
    const clipped = ref(false)
    const open = computed(() => {
      return props.value;
    });

    const {programming, setProgramming} = useTheme()


    const langs = [
      {
        color: "#4CAF50",
        label: 'Node Js',
        icon: 'mdi-nodejs',
        path: 'nodejs',
        beta: false,
        disable: false
      },
      {
        color: '#FE382D',
        label: 'PHP',
        icon: 'mdi-language-php',
        path: 'php',
        beta: true,
        disable: false
      },
      {
        color: '#0C4B33',
        label: 'python',
        icon: 'mdi-language-python',
        path: 'php',
        beta: false,
        disable: true
      }
    ]
    const hide = computed(() => {
      return props.hiddenMenu;
    });
    const route = useRoute()
    const router = useRouter()
    const drawerTouch = () => {
      console.log('value ' + props.value);
      console.log('value emit' + !props.value);
      emit('input', !open.value);
    };
    const select = (lng: any) => {
      // lang.value = lng
      // @ts-ignore
      root.$vuetify.theme.themes.light.primary = lng.color
      // @ts-ignore
      root.$vuetify.theme.themes.dark.primary = lng.color
      setProgramming(lng)
      console.log(router)
      const firsPath = route.value.fullPath.split('/')[1]
      if (findPath(firsPath)) {
        router.push(route.value.fullPath.replace(firsPath, lng.path))
      } else {

      }
    }
    const findPath = (path: string) => {
      return langs.find((lang) => {
        return lang.path === path
      })
    }
    return {
      drawerTouch,
      select,
      clipped,
      mdiGithub,
      mdiMenu,
      open,
      title,
      hide,
      programming,
      langs
    };
  },
});
export default Toolbar;
</script>
