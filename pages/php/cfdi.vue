<template>
  <section>
    <h3 class="display-1 basil--text">
      #CFDI 3.3
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
      <tr v-for="(doc,i) of data" :key="i">
        <td>
          <a class="app-link text-decoration-none primary--text font-weight-medium d-inline-block font-weight-bold">
            {{ doc.function }}
          </a>
        </td>
        <td>{{ doc.type }}</td>
        <td v-html="doc.properties"></td>
        <td>{{ doc.enum }}</td>
        <td>{{ doc.descripcion }}</td>
      </tr>
      </tbody>
    </v-simple-table>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, useStore} from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  name: "example",
  layout: 'php',
  components: {
    Markup
  },
  setup() {
    const data = [
      {
        "function": "setAttributesXml",
        "type": "XmlVersion",
        "properties": "version: string;\nencoding: string;",
        "enum": "",
        "descripcion": "Inicializa la clase"
      },
      {
        "function": "setAttributesComprobantes",
        "type": "Comprobante",
        "properties": `
        xmlns: XmlnsLinks;<br/>
        schemaLocation: string[];<br/>
        Version: string;<br/>
        Serie: string;<br/>
        Folio: string;<br/>
        Fecha: string;<br/>
        Sello: string;<br/>
        FormaPago: string;<br/>
        NoCertificado: string;<br/>
        Certificado: string;<br/>
        condicionesDePago?: string;<br/>
        SubTotal: string;<br/>
        Descuento: string;<br/>
        Moneda: string;<br/>
        Total: string;<br/>
        TipoDeComprobante: string;<br/>
        MetodoPago: string;<br/>
        LugarExpedicion: string;`,
        "enum": "",
        "descripcion": "Inicializa la clase"
      },
      {
        "function": "relacionados",
        "type": "Relacionado",
        "properties": "class",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "emisor",
        "type": "Emisor",
        "properties": "class",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "receptor",
        "type": "Receptor",
        "properties": "class",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "concepto",
        "type": "Concepts",
        "properties": "class",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "impuesto",
        "type": "Impuestos",
        "properties": "class",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "certificar",
        "type": "",
        "properties": "cerpath: string",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "sellar",
        "type": "",
        "properties": "keyfile: string,\npassword: string",
        "enum": "",
        "descripcion": ""
      },
      {
        "function": "getXmlCdfi",
        "type": "",
        "properties": "",
        "enum": "",
        "descripcion": "Obtiene el xml"
      }
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
