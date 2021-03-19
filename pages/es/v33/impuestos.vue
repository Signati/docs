<template>
  <section>
    <h3 class="display-1 basil--text">
      #Impuestos
    </h3>
    <v-simple-table>
      <thead>
      <tr>
        <th align="center">Function</th>
        <th align="center">Type</th>
        <th align="center">properties</th>
        <th align="center">Enum</th>
        <th align="center">Descripcion</th>
      </tr>
      </thead>
      <tbody><tr>
        <td align="center">Construtor</td>
        <td align="center">XmlImpuestosTrasladados</td>
        <td align="center">TotalImpuestosRetenidos?: string; <br>TotalImpuestosTrasladados?: string;</td>
        <td align="center"></td>
        <td align="center">Inicializa la clase</td>
      </tr>
      <tr>
        <td align="center">traslados</td>
        <td align="center">XmlTranRentAttributesProperties</td>
        <td align="center">Base?: string;<br>Impuesto: string;<br>TipoFactor: string; <br>TasaOCuota: string;<br> Importe: string;</td>
        <td align="center"></td>
        <td align="center">Agregar Traslados</td>
      </tr>
      <tr>
        <td align="center">retenciones</td>
        <td align="center">XmlTranRentAttributesProperties</td>
        <td align="center">Base?: string;<br>Impuesto: string;<br>TipoFactor: string; <br>TasaOCuota: string;<br> Importe: string;</td>
        <td align="center"></td>
        <td align="center">Agrega Retenciones</td>
      </tr>
      </tbody></v-simple-table>
    <br>
    <Markup :code="`
import { CFDI, EmisImpuestosor } from '@signati/core';
const cfd = new CFDI();
const impuesto = new Impuestos({TotalImpuestosRetenidos: ''});
            impuesto.traslados({
                Impuesto: '',
                TipoFactor: '',
                TasaOCuota: '',
                Importe: '',
            });
            impuesto.retenciones({
                Impuesto: '',
                TipoFactor: '',
                TasaOCuota: '',
                Importe: '',
            });
await cfd.impuesto(impuesto);

    `" language="typescript"></Markup>
    <br>
    <Markup :code='`
  <?xml version="1.0" encoding="UTF-8"?>
  <cfdi:Impuestos TotalImpuestosRetenidos="" TotalImpuestosTrasladados="">
    <cfdi:Retenciones>
      <cfdi:Retencion Impuesto="" Importe=""/>
    </cfdi:Retenciones>
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
    `' language="xml"></Markup>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    const { commit } = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [

      ])
    })
    return {}
  }
})
</script>

<style scoped>

</style>
