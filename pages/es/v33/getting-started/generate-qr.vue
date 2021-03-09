<template>
  <section class="ma-15 mt-5">
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

    <Markup code="`
    *La URL del acceso al servicio que pueda mostrar los datos de la versión publica del comprobante.
    *Numero de folio fiscal del comprobante (UUID).
    *RFC del emisor.
    *RFC del receptor.
    *Ocho últimos caracteres del sello digital del emisor del comprobante.
    `">

    </Markup>
    Donde se manejan / caracteres conformados de la siguiente manera:
    <img src="https://signati.github.io/core/prefijoqr.png" alt="">

    Ejemplo:
    <br>
    <a href="https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=5803EB8D-81CD-4557-8719-26632D2FA434&re=XAXX010101000&rr=CARR861127SB0&tt=0000014300.000000&fe=rH8/bw==" class="green--text">
    https://verificacfdi.facturaelectronica.sat.gob.mx/default.aspx?id=5803EB8D-81CD-4557-8719-26632D2FA434&re=XAXX010101000&rr=CARR861127SB0&tt=0000014300.000000&fe=rH8/bw==
    </a>
    <br>
    El código de barras bidimensional debe ser impreso en un cuadro con lados no menores a 2.75 centímetros.
    <img src="https://signati.github.io/core/qr.png" alt="">
  </section>

</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
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
    return {
      list,
      tab
    }
  }
})
</script>

<style scoped>

</style>
