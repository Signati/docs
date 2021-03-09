<template>
  <section class="ma-15 mt-5">
    <h3 class="display-1 basil--text">
      #Relacionado
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
        <td align="center">String</td>
        <td align="center">data: string;</td>
        <td align="center"></td>
        <td align="center">Inicializa la clase</td>
      </tr>
      </tbody>
    </v-simple-table>
    <Markup :code="`
import { CFDI, Relacionado } from '@signati/core';
const cfd = new CFDI();

const relation = new Relacionado({ TipoRelacion: '01' });
      relation.addRelation('asdasd-3234-asdasd-2332-asdas');
      relation.addRelation('asdasd-3234-asdasd-2332-asdas');

await cfd.relacionados(relation);
    `" language="typescript">
    </Markup>
    <Markup :code='`
<?xml version="1.0" encoding="UTF-8"?>

    `' language="xml">
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
