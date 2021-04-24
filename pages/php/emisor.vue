<template>
  <section>
    <h3 class="display-1 basil--text">
      <span class="primary--text">#</span>Emisor
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
      <tbody>
      <tr>
        <td>
          <a class="app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold">
            Construtor
          </a>
        </td>
        <td>XmlEmisorAttribute</td>
        <td>Rfc?: string; <br>Nombre?: string; <br>RegimenFiscal?: string ! number;</td>
        <td></td>
        <td>Inicializa la clase</td>
      </tr>
      </tbody>
    </v-simple-table>
    <br>
    <Markup :code="`
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Emisor;

$emisor = new Emisor([
    'Rfc' => 'XXXXXX',
    'Nombre' => 'signati',
    'RegimenFiscal' => '602'
]);
$cfdi->emisor($emisor);
`" language="php"></Markup>
    <br>
    <Markup :code='`
 <?xml version="1.0" encoding="UTF-8"?>
 <cfdi:Emisor Rfc="" Nombre="" RegimenFiscal="601"/>
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
