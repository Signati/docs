<template>
  <div>

    <section id="concepts" class="ma-15 mt-5">
      <h3 class="display-1 basil--text">
        #Concepto
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
          <td align="center">XmlConceptoAttributes</td>
          <td align="center">ClaveProdServ: string; <br>NoIdentificacion: string; <br>Cantidad: number/string; <br>ClaveUnidad:
            string; <br>Unidad: string; <br> Descripcion: string; <br>ValorUnitario: number/string; <br>Importe:
            number/string; <br>Descuento: number /string; <br></td>
          <td align="center"></td>
          <td align="center">Inicializa la clase</td>
        </tr>
        <tr>
          <td align="center">traslado</td>
          <td align="center">XmlTranRentAttributesProperties</td>
          <td align="center">Base?: string;<br>Impuesto: string;<br>TipoFactor: string; <br>TasaOCuota: string;<br>
            Importe: string;
          </td>
          <td align="center"></td>
          <td align="center"></td>
        </tr>
        <tr>
          <td align="center">retencion</td>
          <td align="center">XmlTranRentAttributesProperties</td>
          <td align="center">Base?: string;<br>Impuesto: string;<br>TipoFactor: string; <br>TasaOCuota: string;<br>
            Importe: string;
          </td>
          <td align="center"></td>
          <td align="center"></td>
        </tr>
        <tr>
          <td align="center">complemento</td>
          <td align="center">ComlementTypeConcept</td>
          <td align="center">Iedu</td>
          <td align="center"></td>
          <td align="center"></td>
        </tr>
        </tbody>
      </v-simple-table>
      <Markup
        :code="`
    import { CFDI, Concepts } from '@signati/core';

    const cfd = new CFDI();
    const concepto = new Concepts({
    ClaveProdServ: '',
    NoIdentificacion: '',
    Cantidad: '',
    ClaveUnidad: '',
    Unidad: '',
    Descripcion: '',
    ValorUnitario: '',
    Importe: '',
    Descuento: '',
    });
    concepto.traslado({
    Base: '369.83',
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '0.16',
    Importe: '59.17',
    });
    concepto.retencion({
    Base: '369.83',
    Impuesto: '002',
    TipoFactor: 'Tasa',
    TasaOCuota: '0.16',
    Importe: '59.17',
    });

    await cfd.concepto(concepto);
    `"
        language="typescript"
      >

      </Markup>

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
    <section id="iedu">

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
