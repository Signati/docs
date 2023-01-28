<template>
  <section>
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
      <tbody>
      <tr>
        <td align="center">Construtor</td>
        <td align="center">String</td>
        <td align="center">data: string;</td>
        <td align="center"></td>
        <td align="center">Inicializa la clase</td>
      </tr>
      </tbody>
    </v-simple-table>
    <br>
    <Markup :code="`
import { CFDI, Relacionado } from '@cfdi/xml';
const cfd = new CFDI();

const relation = new Relacionado({ TipoRelacion: '01' });
relation.addRelation('4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A');
relation.addRelation('4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A');
await cfd.relacionados(relation);

    `" language="typescript">
    </Markup>
    <br>
    <Markup :code='`
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:CfdiRelacionados TipoRelacion="01">
  <cfdi:CfdiRelacionado UUID="4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A"/>
  <cfdi:CfdiRelacionado UUID="4A1B43E2-1183-4AD4-A3DE-C2DA787AE56A"/>
</cfdi:CfdiRelacionados>

    `' language="xml">
    </Markup>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, useStore} from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    const {commit} = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [])
    })
    return {}
  }
})
</script>

<style scoped>

</style>
