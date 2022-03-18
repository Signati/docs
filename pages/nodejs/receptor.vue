<template>
  <section>

    <Markup :code="`
import { CFDI, Receptor } from '@signati/core';

const cfd = new CFDI();
const receptor = new Receptor({
                Rfc: 'XAXX010101000',
                Nombre: 'PUBLICO EN GENERAL',
                UsoCFDI: 'G01',
                DomicilioFiscalReceptor: '112',
                RegimenFiscalReceptor: '22'
});

await cfd.receptor(receptor);
    `" language="typescript">
    </Markup>
    <br>
    <Markup :code='`
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Receptor Rfc="XAXX010101000" Nombre="PUBLICO EN GENERAL" UsoCFDI="G01" DomicilioFiscalReceptor="112" RegimenFiscalReceptor="22"/>
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
