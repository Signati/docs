<template>
  <div>

    <section id="concepts">
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
                ClaveProdServ: '001',
                NoIdentificacion: '1212',
                Cantidad: '2',
                ClaveUnidad: 'pieza',
                Unidad: 'Pieza',
                Descripcion: 'audifonos',
                ValorUnitario: '1000',
                Importe: '2000',
                Descuento: '00.0',
                ObjetoImp: '01'
            });
            concepto.predial('000121231')
            concepto.aduana('21  47  3807  8003832')
            concepto.parte({
                ClaveProdServ: '51241200',
                NoIdentificacion: 'IM020',
                Cantidad: 1,
                Unidad: 'PIEZA',
                Descripcion: '',
                ValorUnitario: '172.50',
                Importe: '172.50'
            })
            concepto.traslado({
                Base: '369.83',
                Impuesto: '002',
                TipoFactor: 'Tasa',
                TasaOCuota: '0.16',
                Importe: '59.17',
            });
            concepto.traslado({
                Base: '369.8aaaa3',
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
    <section id="iedu">
      <h3 class="display-1 basil--text pt-15 mt-10">
        #Complemento IEDU
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
          <td align="center">XmlIeduAttribute</td>
          <td align="center">version: string;<br>nombreAlumno: string;<br>CURP: string;<br>nivelEducativo: string;<br>autRVOE:
            string; <br>rfcPago: string;
          </td>
          <td align="center"></td>
          <td align="center">Inicializa la clase</td>
        </tr>
        </tbody>
      </v-simple-table>

    </section>
    <Markup
      language="typescript"
      :code="`
import { CFDI, Iedu, Concepts, XmlIeduAttribute } from '@signati/core';

const cfd = new CFDI();
const concepto = new Concepts({ ...});
    const ieduObject: XmlIeduAttribute = {
      version: '1.0',
      autRVOE: '201587PRIM',
      CURP: 'EJEMPLOGH101004HQRRRN',
      nivelEducativo: 'Primaria',
      nombreAlumno: 'ejemplo garcia correa',
      rfcPago: 'XAXX010101000',
    };
    const iedu = new Iedu(ieduObject);
    concepto.complemento(iedu);

    await cfd.concepto(concepto);
      `"
    >

    </Markup>
    <br>
    <Markup
    :code='`
<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Conceptos>
    <cfdi:Concepto ClaveProdServ="" NoIdentificacion="" Cantidad="" ClaveUnidad="" Unidad="" Descripcion="" ValorUnitario="" Importe="" Descuento="">
        <cfdi:ComplementoConcepto>
            <iedu:instEducativas version="1.0" nombreAlumno="ejemplo garcia correa" CURP="EJEMPLOGH101004HQRRRN" nivelEducativo="Primaria" autRVOE="201587PRIM" rfcPago="XAXX010101000"/>
        </cfdi:ComplementoConcepto>
    </cfdi:Concepto>
</cfdi:Conceptos>
    `'
    language="xml"
    >

    </Markup>
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
          url: '/nodejs/conceptos/#concepts',
          icon: '',
          children: []
        },
        {
          id: 11,
          isActive: 1,
          name: 'IEDU',
          fatherID: 1,
          level: '1',
          url: '/nodejs/conceptos/#iedu',
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
