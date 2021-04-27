<template>
  <section>
    <h3 class="display-1 basil--text">
      #Impuestos
    </h3>
    <br>
    <Markup :code="`
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Impuestos;
$cfdi = new CFDI([...])
$impuest = new Impuestos([
   'TotalImpuestosRetenidos' => '',
   'TotalImpuestosTrasladados' => '',
]);

 $impuest->traslados([
     'Impuesto' => '',
     'TipoFactor' => '',
     'TasaOCuota' => '',
     'Importe' => '',
 ]);

 $impuest->retenciones([
     'Impuesto' => '',
     'TipoFactor' => '',
     'TasaOCuota' => '',
     'Importe' => '',
 ]);

$cfdi->impuesto($impuest);

    `" language="php"></Markup>
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
