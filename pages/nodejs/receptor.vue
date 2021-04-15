<template>
  <section>
    <h3 class="display-1 basil--text">
      #Receptor
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
        <td align="center">XmlReceptorAttribute</td>
        <td align="center">Rfc: string; <br> Nombre: string; <br> UsoCFDI: string;</td>
        <td align="center"></td>
        <td align="center">Inicializa la clase</td>
      </tr>
      </tbody>
    </v-simple-table>
    <br>
    <Markup :code="`
import { CFDI, Receptor } from '@signati/core';

const cfd = new CFDI();
const receptor = new Receptor({
    Rfc: 'XAXX010101000',
    Nombre: 'PUBLICO EN GENERAL',
    UsoCFDI: 'G01'
});
await cfd.receptor(receptor);
    `" language="typescript">
    </Markup>
    <br>
    <Markup :code='`
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Receptor Rfc="XAXX010101000" Nombre="PUBLICO EN GENERAL" UsoCFDI="G01"/>
    `' language="xml">
    </Markup>
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
