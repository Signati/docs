<template>
  <section>
    <h3 class="display-1 basil--text">
      #  Estructura General CFDI 3.3
    </h3>
    <Markup :code="code" language="typescript"></Markup>
    <br>
    <Markup :code="xml" language="xml"></Markup>
  </section>
</template>

<script lang="ts">
import { defineComponent, onMounted, useStore } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";
import {genAppMetaInfo} from "~/util/metadata";

export default defineComponent({
  name: "example",
  head: () => {
    return {
      ...genAppMetaInfo({
        title: "EJEMPLO - Node JS CFDI 3.3",
        description: 'Ejemplo de la creacion de un CDFI 3.3',
        keywords: "signati,php ,saxon He,node, node js, php, laravel, Windows, Linux, Mac, SAT, CFDI",
        url: 'https://docs.signati.app/nodejs/example'
      }),
    }
  },

  components: {
    Markup
  },
  setup() {
    const code = `
    import { CFDI,
         Comprobante,
         Concepts,
         Emisor,
         Impuestos,
         Receptor,
         Relacionado }  from '@signati/core';

  const key = 'CSD_Pruebas_CFDI_TCM970625MB1.key';
  const cer = 'CSD_Pruebas_CFDI_TCM970625MB1.cer';
  const styleSheet = '4.0/cadenaoriginal.xslt';

  const comprobanteAttribute: Comprobante = {
    // xmlns: {
    //     xsi: 'http://www.w3.org/2001/XMLSchema-instance',
    //     cfdi: 'http://www.sat.gob.mx/cfd/3',
    // },
    // schemaLocation: [
    //     'http://www.sat.gob.mx/cfd/3',
    //     'http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd',
    // ],
    Serie: 'E',
    Folio: 'ACACUN-27',
    Fecha: '2014-07-08T12:16:50',
    Sello: '',
    FormaPago: '01',
    NoCertificado: '',
    Certificado: '',
    condicionesDePago: 'Contado',
    SubTotal: '16148.04',
    Descuento: '645.92',
    Moneda: 'MXN',
    Total: '17207.35',
    TipoDeComprobante: 'I',
    MetodoPago: 'PUE',
    LugarExpedicion: 'México',
    Exportacion: '01'
};
  const cfd = new CFDI(comprobanteAttribute, {
      xslt: styleSheet,
      debug: false
  });
  await cfd.setAttributesXml({version: '1.0', encoding: 'utf-8'});

  const relation = new Relacionado({ TipoRelacion: '01' });
  relation.addRelation('');
  await cfd.relacionados(relation);

  const emisor = new Emisor({
                     Rfc: '',const cfd = new CFDI();
                     Nombre: '',
                     RegimenFiscal: 601
                 });
  await cfd.emisor(emisor);

  const receptor = new Receptor({
                        Rfc: 'XAXX010101000',
                        Nombre: 'PUBLICO EN GENERAL',
                        UsoCFDI: 'G01'
                    });
  await cfd.receptor(receptor);
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
                ObjetoImp: '01'
            });
         concepto.traslado({
               Base: '',
               Impuesto: '',
               TipoFactor: '',
               TasaOCuota: '',
               Importe: '',
         });

         concepto.retencion({
               Base: '',
               Impuesto: '',
               TipoFactor: '',
               TasaOCuota: '',
               Importe: '',
         });

   await cfd.concepto(concepto);

   const impuesto: Impuestos = new Impuestos({ TotalImpuestosRetenidos: '1000' });
   impuesto.traslados({
       Base: 1,
       Impuesto: '002',
       TipoFactor: 'Tasa',
       TasaOCuota: '0.16',
       Importe: '59.17',
   });
   impuesto.retenciones({
       Impuesto: '002',
       Importe: '59.17',
   });
   await cfd.impuesto(impuesto)
   await cfd.certificar(cer);
   await cfd.sellar(key, '12345678a');
   const xml = await cfd.getXmlCdfi();
   `

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<cfdi:Comprobante xmlns:cfdi="http://www.sat.gob.mx/cfd/3" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sat.gob.mx/cfd/3 http://www.sat.gob.mx/sitio_internet/cfd/3/cfdv33.xsd" Version="3.3" Serie="" Folio="" Fecha="" Sello="" FormaPago="" NoCertificado="" Certificado="" CondicionesDePago="" SubTotal="" Descuento="" Moneda="" TipoCambio="" Total="" TipoDeComprobante="" MetodoPago="" LugarExpedicion="" Confirmacion="">
  <cfdi:CfdiRelacionados TipoRelacion="">
    <cfdi:CfdiRelacionado UUID=""/>
  </cfdi:CfdiRelacionados>
  <cfdi:Emisor Rfc="" Nombre="" RegimenFiscal=""/>
  <cfdi:Receptor Rfc="" Nombre="" ResidenciaFiscal="" NumRegIdTrib="" UsoCFDI=""/>
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
  <cfdi:Impuestos TotalImpuestosRetenidos="" TotalImpuestosTrasladados="">
    <cfdi:Retenciones>
      <cfdi:Retencion Impuesto="" Importe=""/>
    </cfdi:Retenciones>
    <cfdi:Traslados>
      <cfdi:Traslado Impuesto="" TipoFactor="" TasaOCuota="" Importe=""/>
    </cfdi:Traslados>
  </cfdi:Impuestos>
  <cfdi:Complemento/>
</cfdi:Comprobante>`

    const { commit } = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [

      ])
    })
    return {
      code,
      xml
    }
  }
})
</script>

<style scoped>

</style>
