<template>
  <v-container>
    <section class="docs_main">
      <h2 class="display-1 basil--text">
        <span class="primary--text">#</span>
        Estructura General CFDI 3.3
      </h2>

      <h4>Ejemplo</h4>
      <Markup :code="code" language="php"></Markup>
      <br>
      <Markup :code="xml" language="xml"></Markup>
    </section>
  </v-container>
</template>

<script lang="ts">
import {defineComponent, onMounted, useStore} from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  name: "example",
  components: {
    Markup
  },
  setup() {
    const code = `<?php

use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Concepto;
use Signati\\Core\\Tags\\Emisor;
use Signati\\Core\\Tags\\Impuestos;
use Signati\\Core\\Tags\\Receptor;
use Signati\\Core\\Tags\\Relacionado;

$cfdi = new CFDI([
  'Serie' => 'A',
  'Folio' => 'A0103',
  'Fecha' => '2018-02-02T11:36:17',
  'FormaPago' => '01',
  // 'NoCertificado' => '30001000000300023708',
  'SubTotal' => '4741.38',
  'Moneda' => 'MXN',
  'TipoCambio' => '1',
  'Total' => '5500.00',
  'TipoDeComprobante' => 'I',
  'MetodoPago' => 'PUE',
  'LugarExpedicion' => '64000',
], '3.3');

$relacion = new Relacionado('01');
$relacion->addRelacion('asdasdsad');
$relacion->addRelacion('dalia');
$cfdi->relacionados($relacion);

    $emisor = new Emisor([
        'Rfc' => "XXXXXX",
        'Nombre' => "signait",
        'RegimenFiscal' => "602"
    ]);
    $cfdi->emisor($emisor);

    $receptor = new Receptor([
        'Rfc' => "asdsad",
        'Nombre' => "amir",
        'ResidenciaFiscal' => "1231",
        'NumRegIdTrib' => "1231",
        'UsoCFDI' => "012"
    ]);
    $cfdi->receptor($receptor);


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
    //$concepto->complemento();

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

    $concepto2 = new Concepto([
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
    $cfdi->concepto($concepto2);

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
    $impuest->traslados([
        'Impuesto' => '',
        'TipoFactor' => '',
        'TasaOCuota' => '',
        'Importe' => '',
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

    $impuest->retenciones([
        'Impuesto' => '',
        'TipoFactor' => '',
        'TasaOCuota' => '',
        'Importe' => '',
    ]);
    $cfdi->impuesto($impuest);
    $cer = join([dirname(__DIR__), '/server/certificados/LAN7008173R5.cer']);
    $key = join([dirname(__DIR__), '/server/certificados/LAN7008173R5.key']);
    $cfdi->certificar($cer);

    $cfdi->sellar($key,'12345678a');

    header("Content-type: application/xhtml+xml");
    echo $cfdi->getDocument();

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

    const {commit} = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [])
    })
    return {
      code,
      xml
    }
  }
})
</script>

<style scoped>

code, kbd, pre, samp {
  font-family: ui-monospace, SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
  font-size: 1em
}

code, kbd, pre, samp {
  font-family: source-code-pro, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace
}


.docs_main code {
  font-size: .875em;
  font-family: source-code-pro, ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace;
  line-height: 1.714em
}

.docs_main :not(pre) > code {
  background: #fbfbfd;
  color: #ca473f;
  padding: 0 .25em
}


code, pre[class*=language-] {
  color: #090910;
  background: none;
  text-align: left;
  white-space: pre;
  word-spacing: normal;
  word-break: normal;
  word-wrap: normal;
  -moz-tab-size: 4;
  -o-tab-size: 4;
  tab-size: 4;
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none
}

code::-moz-selection, code ::-moz-selection, pre[class*=language-]::-moz-selection, pre[class*=language-] ::-moz-selection {
  text-shadow: none;
  background: #e7e8f2
}

code::selection, code ::selection, pre[class*=language-]::selection, pre[class*=language-] ::selection {
  text-shadow: none;
  background: #e7e8f2
}

.docs_main :not(pre) > code, pre[class*=language-] {
  background: #fbfbfd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .075);
  color: #ca473f;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto
}

.docs_main :not(pre) > code {
  display: inline-flex;
  padding: 0 .125rem;
  max-width: 100%;
  overflow-x: auto
}

pre[class*=language-].line-numbers {
  position: relative;
  padding-left: 3.8em;
  counter-reset: linenumber
}

pre[class*=language-].line-numbers > code {
  position: relative;
  white-space: inherit
}

.docs_main h2 a:before, .docs_main h3 a:before {
  margin-left: -25px;
  font-size: 28px
}

.docs_main h4 a:before {
  margin-left: -18px;
  font-size: 17px
}

.docs_main code {
  font-size: .8rem;
  font-weight: 500;
  line-height: 1.9;
  color: #090910
}

pre[class*=language-] {
  padding: 1em;
  margin: .5em 0 2em;
  overflow: auto;
  -webkit-overflow-scrolling: touch;
  max-width: 100%
}

.docs_main :not(pre) > code, pre[class*=language-] {
  background: #fbfbfd;
  box-shadow: 0 1px 1px rgba(0, 0, 0, .075);
  color: #ca473f;
  -webkit-user-select: auto;
  -moz-user-select: auto;
  -ms-user-select: auto;
  user-select: auto
}

.docs_main :not(pre) > code {
  display: inline-flex;
  padding: 0 .125rem;
  max-width: 100%;
  overflow-x: auto
}


</style>
