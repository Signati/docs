<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      clipped
      app
      fixed
    >
<!--      <v-list>-->
<!--        <v-list-item>-->
<!--          <v-list-item-avatar>-->
<!--            <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>-->
<!--          </v-list-item-avatar>-->
<!--        </v-list-item>-->

<!--        <v-list-item link>-->
<!--          <v-list-item-content>-->
<!--            <v-list-item-title class="title">-->
<!--              John Leider-->
<!--            </v-list-item-title>-->
<!--            <v-list-item-subtitle>john@vuetifyjs.com</v-list-item-subtitle>-->
<!--          </v-list-item-content>-->

<!--          <v-list-item-action>-->
<!--            <v-icon>mdi-menu-down</v-icon>-->
<!--          </v-list-item-action>-->
<!--        </v-list-item>-->
<!--      </v-list>-->
<!--      <v-divider></v-divider>-->

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
    <v-app-bar
      :clipped-left="clipped"
      fixed
      app
      color="white"
      outlined
      style="left: 0px !important; right: 0px !important; border-bottom-color: rgba(0,0,0,.12)!important;"
      elevation="0"
    >
      <v-app-bar-nav-icon class="d-lg-none d-xl-flex" @click.stop="drawer = !drawer"/>
      <v-img height="40" max-width="40" class="ml-10 mr-3" src="../../../logo.png"></v-img>
      <v-toolbar-title v-text="title"/>
      <v-spacer/>
        <Search></Search>
      <v-spacer/>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawerRight"
      right
      clipped
      app
      fixed
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
      </v-list>
    </v-navigation-drawer>
    <v-main>
      <v-container fluid>
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
import { defineComponent, ref } from "@nuxtjs/composition-api";
import FirstList from "~/components/Menu/FirstList.vue";
import Search from "~/components/Search.vue";

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
    Search
  },
  setup() {
    const title = 'Signati'
    const clipped = ref(false)
    const drawerRight = ref(true)
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
            url: '/es/v33/conceptos',
            icon: '',
            children: [
              {
                id: 10,
                isActive: 1,
                name: 'conceptos',
                fatherID: 1,
                level: '1',
                url: '/es/v33/conceptos/#concepts',
                icon: '',
                children: []
              },
              {
                id: 11,
                isActive: 1,
                name: 'IEDU',
                fatherID: 1,
                level: '1',
                url: '/es/v33/conceptos/#iedu',
                icon: '',
                children: []
              },
            ]
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
            url: '',
            icon: '',
            children: [
              {
                "id": 50,
                "isActive": 1,
                "name": "ine",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#ine",
                "icon": "",
                "children": []
              },
              {
                "id": 51,
                "isActive": 1,
                "name": "pago10",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#pago10",
                "icon": "",
                "children": []
              },
              {
                "id": 52,
                "isActive": 1,
                "name": "cce11",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#cce11",
                "icon": "",
                "children": []
              },
              {
                "id": 53,
                "isActive": 1,
                "name": "aerolineas",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#aerolineas",
                "icon": "",
                "children": []
              },
              {
                "id": 54,
                "isActive": 1,
                "name": "combustible",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#combustible",
                "icon": "",
                "children": []
              },
              {
                "id": 55,
                "isActive": 1,
                "name": "decreto",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#decreto",
                "icon": "",
                "children": []
              },
              {
                "id": 56,
                "isActive": 1,
                "name": "destruccion",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#destruccion",
                "icon": "",
                "children": []
              },
              {
                "id": 57,
                "isActive": 1,
                "name": "registro-fiscal",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#registro-fiscal",
                "icon": "",
                "children": []
              },
              {
                "id": 58,
                "isActive": 1,
                "name": "donatarias",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#donatarias",
                "icon": "",
                "children": []
              },
              {
                "id": 59,
                "isActive": 1,
                "name": "obras-arte",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#obras-arte",
                "icon": "",
                "children": []
              },
              {
                "id": 60,
                "isActive": 1,
                "name": "vales-despensa",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#vales-despensa",
                "icon": "",
                "children": []
              },
              {
                "id": 61,
                "isActive": 1,
                "name": "divisas",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#divisas",
                "icon": "",
                "children": []
              },
              {
                "id": 62,
                "isActive": 1,
                "name": "turistas",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#turistas",
                "icon": "",
                "children": []
              },
              {
                "id": 63,
                "isActive": 1,
                "name": "leyenda-fiscal",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#leyenda-fiscal",
                "icon": "",
                "children": []
              },
              {
                "id": 64,
                "isActive": 1,
                "name": "pago-especie",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#pago-especie",
                "icon": "",
                "children": []
              },
              {
                "id": 65,
                "isActive": 1,
                "name": "spei",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#spei",
                "icon": "",
                "children": []
              },
              {
                "id": 66,
                "isActive": 1,
                "name": "servicios-parciales-de-contruccion",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#servicios-parciales-de-contruccion",
                "icon": "",
                "children": []
              },
              {
                "id": 67,
                "isActive": 1,
                "name": "vehiculo-usado",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#vehiculo-usado",
                "icon": "",
                "children": []
              },
              {
                "id": 68,
                "isActive": 1,
                "name": "ingresos-hidrocarburos",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#ingresos-hidrocarburos",
                "icon": "",
                "children": []
              },
              {
                "id": 69,
                "isActive": 1,
                "name": "gastos-hidrocarburos",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#gastos-hidrocarburos",
                "icon": "",
                "children": []
              },
              {
                "id": 70,
                "isActive": 1,
                "name": "implocal",
                "fatherID": 1,
                "level": "1",
                "url": "/es/v33/complement/#implocal",
                "icon": "",
                "children": []
              }
            ]
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
        name: 'Donaciones',
        fatherID: 1,
        level: '1',
        url: '/es/v33/donaciones',
        icon: '',
        children: []
      },
    ])
    const m = () => {
      return test.map((d, i) => {
        return {
          id: 50 + i,
          isActive: 1,
          name: d.toLowerCase(),
          fatherID: 1,
          level: '1',
          url: '/es/v33/complement/#' + d.toLowerCase(),
          icon: '',
          children: []
        }
      })
    }
    const test = [
      "INE",
      "PAGO10",
      "CCE11",
      "AEROLINEAS",
      "COMBUSTIBLE",
      "DECRETO",
      "DESTRUCCION",
      "REGISTRO-FISCAL",
      "DONATARIAS",
      "OBRAS-ARTE",
      "VALES-DESPENSA",
      "DIVISAS",
      "TURISTAS",
      "LEYENDA-FISCAL",
      "PAGO-ESPECIE",
      "SPEI",
      "SERVICIOS-PARCIALES-DE-CONTRUCCION",
      "VEHICULO-USADO",
      "INGRESOS-HIDROCARBUROS",
      "GASTOS-HIDROCARBUROS",
      "IMPLOCAL"
    ]
    return {
      m,
      clipped,
      drawer,
      drawerRight,
      fixed,
      items,
      miniVariant,
      title,
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
