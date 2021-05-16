<template>
  <v-container class="justify-center">
    <section v-for="(doc,i) of data" :key="i" :id="doc.function " class="justify-space-between">
      <h2 id="retrieving-results">
        <span class="primary--text">#</span>
        <span style="font-size: 20px">{{ doc.function }}</span>
      </h2>
      <p class="pa-6 pb-0" style="font-size: 1rem; line-height: 1.8em;">
        {{ doc.descripcion }}
        <br>
        <span class="primary--text" style="font-size: .9rem;" v-html="doc.type"></span>
      </p>
      <Markup :code="doc.properties" language="php"/>
    </section>
    <v-row>


    </v-row>
  </v-container>
</template>

<script lang="ts">
import {defineComponent, onMounted, useStore} from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";
import {genAppMetaInfo} from "~/util/metadata";

export default defineComponent({
  name: "example",
  head: () => {
    return {
      ...genAppMetaInfo({
        title: "PHP - CFDI 3.3",
        description: 'Genera un CFDI 3.3 con clases',
        keywords: "signati,php ,saxon He,node, node js, php, laravel, Windows, Linux, Mac, SAT, CFDI",
        url: 'https://docs.signati.app/php/cfdi'
      }),
    }
  },
  components: {
    Markup
  },
  setup() {
    const data = [
      {
        "function": "CFDI",
        "type": "<code> Signati\\Core\\CFDI<code>:",
        "properties": `
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
       `,
        "enum": "",
        "descripcion": "Inicializa la clase"
      },
      {
        "function": "setAttributesXml",
        "type": "<code> Signati\\Core\\CFDI<code>:",
        "properties": `
$cfdi = new CFDI([...])
$cfdi->setAttributesXml('1.0','utf-8')
        `,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Relacion",
        "type": "Signati\\Core\\Tags\\Relacionado",
        "properties": `
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Relacionado;

$cfdi = new CFDI([...]);
$cfdi->relacionados(...new Relacionado(...));

`,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Emisor",
        "type": "Signati\\Core\\Tags\\Emisor",
        "properties": `
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Emisor;

$cfdi = new CFDI([...]);
$cfdi->emisor(...new Emisor([...]));
`,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Receptor",
        "type": "Signati\\Core\\Tags\\Receptor",
        "properties": `
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Receptor;

$cfdi = new CFDI([...]);
$cfdi->receptor(...new Receptor([...]));
`,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Concepto",
        "type": "Signati\\Core\\Tags\\Concept",
        "properties": `
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Concepto;

$cfdi = new CFDI([...]);
$cfdi->concepto(...new Concepto([...]));
`,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Impuesto",
        "type": "Signati\\Core\\Tags\\Impuestos",
        "properties": `
use Signati\\Core\\CFDI;
use Signati\\Core\\Tags\\Impuestos;

$cfdi = new CFDI([...]);
$cfdi->impuesto(...new Impuestos([...]));
`,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Certificar",
        "type": "Signati\\Core\\CFDI",
        "properties": `
use Signati\\Core\\CFDI;
$cfdi = new CFDI([...]);
$cer = join([dirname(__DIR__), '../LAN7008173R5.cer']);
$cfdi->certificar($cer);
    `,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "Sellar",
        "type": "Signati\\Core\\CFDI",
        "properties": `
use Signati\\Core\\CFDI;
$cfdi = new CFDI([...]);
$key = join([dirname(__DIR__), '/server/certificados/LAN7008173R5.key']);
$cfdi->sellar($key,'12345678a');
        `,
        "enum": "",
        "descripcion": "Descripcion ...proximamente"
      },
      {
        "function": "getArray",
        "type": "Signati\\Core\\CFDI",
        "properties": `
use Signati\\Core\\CFDI;
$cfdi = new CFDI([...]);
$cfdi->getArray();
        `,
        "enum": "",
        "descripcion": "Obtiene el xml en tipo array"
      },
      {
        "function": "getDocument",
        "type": "Signati\\Core\\CFDI",
        "properties": `
use Signati\\Core\\CFDI;
$cfdi = new CFDI([...]);
$cfdi->getDocument();
        `,
        "enum": "",
        "descripcion": "Obtiene el xml"
      },
    ]
    const {commit} = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [])
    })
    return {
      data
    }
  }
})
</script>

<style scoped>

</style>
