<template>
  <section>
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
            <v-icon class="mr-2" :color="item.support ? 'blue':''"> {{item.support ? 'mdi-check-box-outline': 'mdi-checkbox-blank-outline'}}</v-icon>
            <v-icon v-text="item.support ? item.icon : 'mdi-close-outline'" :color="item.support ? item.colorIcon: 'red'"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

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
            <v-icon class="mr-2" :color="item.support ? 'blue':''"> {{item.support ? 'mdi-check-box-outline': 'mdi-checkbox-blank-outline'}}</v-icon>
            <v-icon v-text="item.support ? item.icon : 'mdi-close-outline'" :color="item.support ? item.colorIcon: 'red'"></v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title v-text="item.label"></v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <pre>
    </pre>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent } from "@nuxtjs/composition-api";

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
        "support": true,
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
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Compra venta de divisas.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Otros derechos e impuestos.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Leyendas fiscales.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Persona física integrante de coordinado.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Turista pasajero extranjero.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Spei de tercero a tercero.",
        "link": "",
        "support": true,
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
        "support": true,
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
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Vales de despensa.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Consumo de combustibles.  versión 1.1 ",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Aerolíneas.",
        "link": "",
        "support": true,
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
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Servicios parciales de construcción.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Renovación y sustitución de vehículos.",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Certificado de destrucción",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Obras de arte plásticas y antigüedades",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "INE",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Comercio Exterior  versión 1.1 ",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Recepción de pagos",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "Hidrocarburos",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "IngresosHidrocarburos",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      },
      {
        "label": "GastosHidrocarburos10",
        "link": "",
        "support": true,
        "colorIcon": "green",
        "icon": "mdi-check-all"
      }
    ]

    const cc = [
      {
        "label": "Instituciones educativas privadas.",
        "link": "",
        "support": true,
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
    return {
      complements,
      cc
    }
  }
})
</script>

<style scoped>

</style>
