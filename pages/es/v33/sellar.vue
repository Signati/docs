<template>
  <section>
    <h3 class="display-1 basil--text">
      #Sellar Xml CFDI 3.3
    </h3>
    <br>
    <p>
      La funcion certificar extra la informacion del cer y decodifica el numero del certificado y las anexa en la
      propiesades del xml para poder ser sellada. La funcion sellar anexa un sello unico en base a todo el xml y la key
    </p>
    <Markup language="typescript"
            :code="`
 import { CFDI } from '@signati/core';
 const key = 'CSD_Pruebas_CFDI_TCM970625MB1.key';
 const cer = 'CSD_Pruebas_CFDI_TCM970625MB1.cer';
 const cfd = new CFDI();
 await cfd.certificar(cer);
 await cfd.sellar(key, '12345678a');
 const xml = await cfd.getXmlCdfi();
    `"
    ></Markup>

    <Markup
    :code='`
    <?xml version="1.0" encoding="utf-8"?>
<cfdi:Comprobante xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
                  xmlns:cfdi="http://www.sat.gob.mx/cfd/3"
                  xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd"
                  Version="3.3"
                  Serie=""
                  Folio=""
                  Fecha=""
                  Sello="Vj/X/ZUWxL6DJOEXflMAVwfotRU5uZ4....."
                  FormaPago=""
                  NoCertificado="20001000000300022762"
                  Certificado="MIIF8DCCA9igAwIBAgIUMjAwMDEwMDAwMDAzMDAwMjI3NjIwDQ....."
                  condicionesDePago=""
                  SubTotal=""
                  Descuento=""
                  Moneda=""
                  Total=""
                  TipoDeComprobante=""
                  MetodoPago=""
                  LugarExpedicion="">
    `'
    language="xml"
    >

    </Markup>
  </section>

</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
