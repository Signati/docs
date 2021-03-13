<template>
  <v-row>
    <v-col cols="12">

      <h3 class="display-1 basil--text">
        # Generar QR
      </h3>
      <br>
      <div>
        ESPECIFICACIÓN TÉCNICA DEL CÓDIGO DE BARRAS BIDIMENSIONAL A INCORPORAR EN LA REPRESENTACIÓN IMPRESA.
      </div>
      <br>
      <p>
        Las representaciones impresas de los dos tipos de comprobantes fiscales digitales por Internet deben incluir un
        código de barras bidimensional conforme al formato de QR Code (Quick Response Code),usando la capacidad de
        corrección de error con nivel mínimo M, descrito en el estándar ISO/IEC18004, con base en los siguientes
        lineamientos.
      </p>
      Debe contener los siguientes datos en la siguiente secuencia:
    </v-col>
    <v-col cols="12">
      <v-alert
        text
        dense
        color="teal"
        border="left"
      >
        *La URL del acceso al servicio que pueda mostrar los datos de la versión publica del comprobante.
        <br>
        *Numero de folio fiscal del comprobante (UUID).
        <br>
        *RFC del emisor.
        <br>
        *RFC del receptor.
        <br>
        *Ocho últimos caracteres del sello digital del emisor del comprobante.
      </v-alert>

      Donde se manejan / caracteres conformados de la siguiente manera:
      <br>
      <v-img src="/prefijoqr.png" alt=""/>
      <br>
      Ejemplo:
      <br>
      <br>
      <v-alert
        outlined
        type="success"
        text
      >
        <a
          href="https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=5803EB8D-81CD-4557-8719-26632D2FA434&re=XAXX010101000&rr=CARR861127SB0&tt=0000014300.000000&fe=rH8/bw=="
          class="green--text">
          https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=5803EB8D-81CD-4557-8719-26632D2FA434&re=XAXX010101000&rr=CARR861127SB0&tt=0000014300.000000&fe=rH8/bw==
        </a>

      </v-alert>
      <br>
      El código de barras bidimensional debe ser impreso en un cuadro con lados no menores a 2.75 centímetros.

      <v-container fluid>
        <v-layout justify-center align-center>
          <v-flex shrink>
            <v-img height="300" contain width="300" src="/qr.png" alt=""/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-col>
  </v-row>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref, useStore } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  name: "generate",
  components: {
    Markup
  },
  setup() {
    const tab = ref(null)
    const list = [
      {
        icon: 'mdi-penguin',
        title: 'linux',
        color: 'black',
      },
      {
        icon: 'mdi-apple',
        color: 'grey',
        title: 'macOS',
      },
      {
        icon: 'mdi-microsoft-windows',
        color: 'blue',
        title: 'Windows',
      },

    ]

    const { commit } = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [
        {
          id: 1,
          name: 'Generar QR',
          level: '1',
          icon: '',
          url: '/es/v33/getting-started/support-for-plugins/#complementos',
          isActive: 1,
          fatherID: 0,
          children: []
        },
      ])
    })
    return {
      list,
      tab
    }
  }
})
</script>

<style scoped>

</style>
