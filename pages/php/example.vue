<template>
  <section>
    <h3 class="display-1 basil--text">
      # Estructura General CFDI 3.3
    </h3>
    <Markup :code="code" language="php"></Markup>
    <br>
    <Markup :code="xml" language="xml"></Markup>
  </section>
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
    const code = `
    <?php

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

</style>
