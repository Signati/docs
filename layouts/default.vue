<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      absolute
      app
      fixed
      width="250"
    >
      <v-list>
        <v-list-item>
          <v-list-item-avatar>
            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
          </v-list-item-avatar>
        </v-list-item>

        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              John Leider
            </v-list-item-title>
            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon>mdi-menu-down</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
      <v-divider></v-divider>

      <v-list nav dense>
                <span v-for="(item, i) in rutasuser" :key="i">
                <v-list-group
                  v-if="item.children.length > 0"
                  active-class="active"
                  group
                >
                    <template v-slot:activator>
                        <v-list-item-icon class="m-0 mr-2">
                              <v-icon>{{ item.icon }}</v-icon>
                         </v-list-item-icon>
                        <v-list-item-title class="ml-0 pl-0">
                            {{ item.name }}
                        </v-list-item-title>
                    </template>
                    <span v-for="(childone, k) in item.children" :key="k">

                    <v-list-group
                      v-if="childone.children.length > 0"
                      sub-group
                      class="ma-0 pa-0"
                    >
                        <template v-slot:activator
                                  style="background-color: #f6f9fc !important;border-color: #f6f9fc !important;">

                            <v-list-item-title class="ml-0 pl-0" style="position: relative;float: left;left: -15px;">
                                {{ childone.name }}
                            </v-list-item-title>
                        </template>
                        <FirstList v-for="(childtwo,index) in childone.children"
                                   :secondchild="true"
                                   :item="childtwo"
                                   :key="index"></FirstList>

                    </v-list-group>
                    <FirstList v-else
                               :secondchild="true"
                               :item="childone"
                    ></FirstList>
                    </span>

                </v-list-group>
                 <FirstList v-else :item="item"></FirstList>
                </span>
        <FirstList update :item="{
					url:'/update',
					icon:'mdi-arrow-up-bold-circle',
					name:'Actualizaciones',
					color:'primary'
				}"></FirstList>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      outlined
      style="left: 0px !important; border-bottom-color: rgba(0,0,0,.12)!important;"
      elevation="0"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-spacer />

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
import { defineComponent, ref } from "@nuxtjs/composition-api";
import FirstList from "~/components/Menu/FirstList.vue";

export interface RoutePath {
  id: number;
  isActive: number | boolean;
  name: string;
  fatherID: number | null | String;
  level: string;
  url: string;
  icon: string;
  children?: RoutePath[];
}

export default defineComponent({
  components: {
    FirstList,
  },
  setup() {
    const clipped = ref(false)
    const drawer = ref(true)
    const fixed = ref(false)
    const items = [
      {
        icon: 'mdi-apps',
        title: 'Getting started',
        to: '/'
      },
      {
        icon: 'mdi-chart-bubble',
        title: 'Inspire',
        to: '/inspire'
      }
    ];
    const miniVariant = ref(false)
    const rutasuser = ref<RoutePath[]>([
      {
        id: 1,
        isActive: 1,
        name: 'Getting started',
        fatherID: 1,
        level: '1',
        url: '',
        icon: '',
        children: [
          {
            id: 2,
            isActive: 1,
            name: 'Installation',
            fatherID: 1,
            level: '1',
            url: '/es/v33/getting-started/installation',
            icon: '',
            children: []
          },
          {
            id: 3,
            isActive: 1,
            name: 'Dependeces',
            fatherID: 1,
            level: '1',
            url: '',
            icon: '',
            children: []
          },

        ]
      }
    ])
    return {
      clipped,
      drawer,
      fixed,
      items,
      miniVariant,
      rutasuser
    }
  }
})
</script>
