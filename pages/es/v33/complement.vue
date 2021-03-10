<template>
  <div>
    <section id="ine">
      <h3 class="display-1 basil--text">
        # Complemeto INE
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
        <td align="center">XmlIneAttribute</td>
        <td align="center">Version: string;<br>TipoProceso: TipoProcesoIne;<br>TipoComite?: TipoComiteIne;<br>IdContabilidad?: string;</td>
        <td align="center"></td>
        <td align="center">Inicializa la clase</td>
      </tr>
      <tr>
        <td align="center">Entidad</td>
        <td align="center">XmlIneEntidadAttribute</td>
        <td align="center">ClaveEntidad: ClaveEntidadIne;<br>Ambito?: AmbitoIne;</td>
        <td align="center"></td>
        <td align="center"></td>
      </tr>
      <tr>
        <td align="center">Contabilidad</td>
        <td align="center">XmlIneContabilidadAttribute</td>
        <td align="center">IdContabilidad: string;</td>
        <td align="center"></td>
        <td align="center"></td>
      </tr>
      </tbody></v-simple-table>
      <Markup
      :code="`
import { Ine } from '@signati/core';
const ine = new Ine({
      Version: '1.0',
      TipoProceso: 'Ordinario',
      IdContabilidad: '9',
      TipoComite: 'Ejecutivo Estatal',
    });
    ine.Entidad({ Ambito: 'Federal', ClaveEntidad: 'ROO' });
    ine.Contabilidad({ IdContabilidad: '9' });
    this.cfd.complemento(ine);
          `"
      language="typescript"
      ></Markup>

      <Markup

      :code='`<?xml version="1.0" encoding="UTF-8"?>

<cfdi:Complemento>
  <ine:INE Version="1.0" TipoProceso="Ordinario" IdContabilidad="9" TipoComite="Ejecutivo Estatal">
   <ine:Entidad Ambito="Federal" ClaveEntidad="ROO">
     <ine:Contabilidad IdContabilidad="9"/>
   </ine:Entidad>
  </ine:INE>
</cfdi:Complemento>`'

      language="xml"
      >

      </Markup>
    </section>
    <section id="pago10">
      <h3 class="display-1 basil--text">
        # complemeto-pago10
      </h3>
    </section>
  </div>
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
