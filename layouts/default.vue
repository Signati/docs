<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      fixed
    >

      <v-list nav dense :expand="true">
                <span v-for="(item, i) in rutasuser" :key="i">
                <v-list-group
                  :value="true"
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
                                   :secondchild="false"
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
      </v-list>
    </v-navigation-drawer>
    <Toolbar v-model="drawer" :hidden-menu="true"></Toolbar>
    <v-navigation-drawer
      v-model="drawerRight"
      right
      clipped
      app
      fixed
    >
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick"/>
        <input type="hidden" name="hosted_button_id" value="LYAK7CBWDNVMY"/>
        <input type="image" width="250" height="80" src="/Paypal.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/>

      </form>

      <v-divider></v-divider>
      <v-list nav dense>
                <span v-for="(right, r) in menuRoutesRight" :key="r">
                <v-list-group
                  v-if="right.children.length > 0"
                  active-class="active"
                  group
                  :value="true"
                >
                    <template v-slot:activator>
                        <v-list-item-icon class="m-0 mr-2">
                              <v-icon>{{ right.icon }}</v-icon>
                         </v-list-item-icon>
                        <v-list-item-title class="ml-0 pl-0">
                            {{ right.name }}
                        </v-list-item-title>
                    </template>
                    <span v-for="(childone, k) in right.children" :key="k">

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
                 <FirstList v-else :item="right"></FirstList>
                </span>
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container>
        <nuxt/>
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
import { computed, defineComponent,onBeforeMount, ref, useStore } from "@nuxtjs/composition-api";
import FirstList from "~/components/Menu/FirstList.vue";
import Toolbar from "~/components/core/toolbars/toolbar.vue";
import { mdiGithub } from '@mdi/js';
import { RoutePath } from "~/types/RoutePath";
import { isMobile, isTablet } from 'mobile-device-detect';

export default defineComponent({
  components: {
    FirstList,
    Toolbar
  },
  setup() {
    const drawerRight = ref(true)
    const drawer = ref(true)
    const fixed = ref(false)
    const { getters, state, commit } = useStore()
    const menuRoutesRight = computed(() => {
      return getters['menu/routes']
    })
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
            name: 'Support for plugins',
            fatherID: 1,
            level: '1',
            url: '/es/v33/getting-started/support-for-plugins',
            icon: '',
            children: []
          },
          {
            id: 4,
            isActive: 1,
            name: 'Official Information',
            fatherID: 1,
            level: '1',
            url: '/es/v33/getting-started/official-information',
            icon: '',
            children: []
          },
          {
            id: 5,
            isActive: 1,
            name: 'Generate PEM files',
            fatherID: 1,
            level: '1',
            url: '/es/v33/getting-started/generate',
            icon: '',
            children: []
          },
          {
            id: 5,
            isActive: 1,
            name: 'Generate QR',
            fatherID: 1,
            level: '1',
            url: '/es/v33/getting-started/generate-qr',
            icon: 'mdi-qrcode-edit',
            children: []
          },
        ]
      },
      {
        id: 7,
        isActive: 1,
        name: 'Example',
        fatherID: 1,
        level: '1',
        url: '/es/v33/example',
        icon: '',
        children: []
      },
      {
        id: 8,
        isActive: 1,
        name: '@signati/core',
        fatherID: 1,
        level: '1',
        url: '',
        icon: '',
        children: [
          {
            id: 9,
            isActive: 1,
            name: 'CFDI',
            fatherID: 1,
            level: '1',
            url: '/es/v33/cfdi',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Emisor',
            fatherID: 1,
            level: '1',
            url: '/es/v33/emisor',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Receptor',
            fatherID: 1,
            level: '1',
            url: '/es/v33/receptor',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Relacionado',
            fatherID: 1,
            level: '1',
            url: '/es/v33/relacionado',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Conceptos',
            fatherID: 1,
            level: '1',
            url: '/es/v33/conceptos/#concepts',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Impuestos',
            fatherID: 1,
            level: '1',
            url: '/es/v33/impuestos',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Complementos',
            fatherID: 1,
            level: '1',
            url: '/es/v33/complementos/#ine',
            icon: '',
            children: []
          },
          {
            id: 9,
            isActive: 1,
            name: 'Sellar Xml',
            fatherID: 1,
            level: '1',
            url: '/es/v33/sellar',
            icon: '',
            children: []
          },
        ]
      },
      {
        id: 9,
        isActive: 1,
        name: 'PDF',
        fatherID: 1,
        level: '1',
        url: '/es/v33/pdf',
        icon: '',
        children: []
      },
      {
        id: 10,
        isActive: 1,
        name: 'Donaciones',
        fatherID: 1,
        level: '1',
        url: '/es/v33/donaciones',
        icon: '',
        children: []
      },
    ])
    onBeforeMount(()=>{
      if (isMobile || isTablet){
        drawer.value = false;
        drawerRight.value = false
      }
    })
    return {
      drawer,
      drawerRight,
      fixed,
      miniVariant,
      mdiGithub,
      menuRoutesRight,
      rutasuser
    }
  }
})
</script>
<style>
html {
  font-family: "DM Sans";
}

</style>
