<template>
  <div>
    <section id="complementos">
      <h3 class="display-1 basil--text">
        # Complementos
      </h3>
      <v-list
        nav
        dense
      >
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in complements"
            :key="i"
          >
            <v-list-item-icon class="mr-2">
              <v-icon class="mr-2" :color="item.support ? 'blue':''">
                {{ item.support ? 'mdi-check-box-outline' : 'mdi-checkbox-blank-outline' }}
              </v-icon>
              <v-icon v-text="item.support ? item.icon : 'mdi-close-outline'"
                      :color="item.support ? item.colorIcon: 'red'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.label"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </section>

    <section id="c-conceptos">
      <h4 class="display-1 basil--text">
        # Complementos de Concepto
      </h4>
      <v-list
        nav
        dense
      >
        <v-list-item-group color="primary">
          <v-list-item
            v-for="(item, i) in cc"
            :key="i"
          >
            <v-list-item-icon class="mr-2">
              <v-icon class="mr-2" :color="item.support ? 'blue':''">
                {{ item.support ? 'mdi-check-box-outline' : 'mdi-checkbox-blank-outline' }}
              </v-icon>
              <v-icon v-text="item.support ? item.icon : 'mdi-close-outline'"
                      :color="item.support ? item.colorIcon: 'red'"></v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title v-text="item.label"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </section>
  </div>
</template>

<script lang="ts">
import {computed, defineComponent, onMounted, useStore} from "@nuxtjs/composition-api";

export default defineComponent({
  name: "support-for-plugins",
  setup() {
    const r = computed(() => {
      return cc.map((data) => {
        return {
          label: data,
          link: '',
          support: true,
          colorIcon: 'green',
          icon: 'mdi-check-all'
        }
      })
    })
    const complements = [
      {
        "label": "Timbre fiscal digital (TFD).",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Estado de cuenta de combustibles de monederos electrónicos.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Donatarias.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Compra venta de divisas.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Otros derechos e impuestos.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Leyendas fiscales.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Persona física integrante de coordinado.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Turista pasajero extranjero.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Spei de tercero a tercero.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Sector de ventas al detalle (Detallista).",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "CFDI Registro fiscal.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Recibo de pago de nómina.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Pago en especie.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Vales de despensa.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Consumo de combustibles.  versión 1.1 ",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Aerolíneas.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Notarios Públicos.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Vehículo usado.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Servicios parciales de construcción.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Renovación y sustitución de vehículos.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Certificado de destrucción",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Obras de arte plásticas y antigüedades",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "INE",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Comercio Exterior  versión 1.1 ",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Recepción de pagos",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Hidrocarburos",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "IngresosHidrocarburos",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "GastosHidrocarburos10",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      }
    ]

    const cc = [
      {
        "label": "Instituciones educativas privadas.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Venta de vehículos.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Terceros.",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Acreditamiento del IEPS",
        "link": "",
        "support": false,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      }
    ]

    const {commit} = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [
        {
          id: 1,
          name: 'Complementos',
          level: '1',
          icon: '',
          url: '/es/v33/getting-started/support-for-plugins/#complementos',
          isActive: 1,
          fatherID: 0,
          children: []
        },
        {
          id: 2,
          name: 'Complementos de Concepto',
          level: '1',
          icon: '',
          url: '/es/v33/getting-started/support-for-plugins/#c-conceptos',
          isActive: 1,
          fatherID: 0,
          children: []
        }

      ])
    })
    return {
      complements,
      cc
    }
  }
})
</script>

<style scoped>

</style>
