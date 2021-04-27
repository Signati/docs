<template>
  <div>

    <section id="concepts">
      <h3 class="display-1 basil--text">
        #Concepto
      </h3>

      <Markup
        :code="`
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Concepto;

$cfdi = new CFDI([...])

$concepto = new Concepto([
     'ClaveProdServ' => '3243',
     'NoIdentificacion' => '234234',
     'Cantidad' => '1',
     'ClaveUnidad' => 'Pieza',
     'Unidad' => '1',
     'Descripcion' => 'asdad',
     'ValorUnitario' => '322332',
     'Importe' => '00',
     'Descuento' => '00',
 ]);

 $concepto->traslado([
     'Base' => '',
     'Impuesto' => '',
     'TipoFactor' => '',
     'TasaOCuota' => '',
     'Importe' => '',
 ]);

 $concepto->retencion([
     'Base' => '',
     'Impuesto' => '',
     'TipoFactor' => '',
     'TasaOCuota' => '',
     'Importe' => '',
 ]);
 $cfdi->concepto($concepto);

    `"
        language="php"
      >

      </Markup>
      <br>
      <Markup
        :code='`
<?xml version="1.0" encoding="UTF-8"?>
 <cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="" NoIdentificacion="" Cantidad="" ClaveUnidad="" Unidad="" Descripcion="" ValorUnitario="" Importe="" Descuento="">
      <cfdi:Impuestos>
        <cfdi:Traslados>
          <cfdi:Traslado Base="" Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
        </cfdi:Traslados>
        <cfdi:Retenciones>
          <cfdi:Retencion Base="" Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
        </cfdi:Retenciones>
      </cfdi:Impuestos>
    </cfdi:Concepto>
  </cfdi:Conceptos>
      `'
        language="xml"
      >

      </Markup>
    </section>
    <br>
    <br>
  </div>

</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    const {commit} = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [
        {
          id: 10,
          isActive: 1,
          name: 'conceptos',
          fatherID: 1,
          level: '1',
          url: '/php/conceptos/#concepts',
          icon: '',
          children: []
        },
        {
          id: 11,
          isActive: 1,
          name: 'IEDU',
          fatherID: 1,
          level: '1',
          url: '/php/conceptos/#iedu',
          icon: '',
          children: []
        }])
    })
    return {}
  }
})
</script>

<style scoped>

</style>
