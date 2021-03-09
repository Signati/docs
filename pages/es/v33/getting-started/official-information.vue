<template>
  <section>
    <h3 class="display-1 basil--text">
      # Informacion Oficial
    </h3>
    <v-list
      two-line
      subheader
    >
      <v-list-item v-for="(link,i) of links" :key="i" :href="link.link" target="_blank">
        <v-list-item-content>
          <v-list-item-title>{{ link.label }}</v-list-item-title>
          <v-list-item-subtitle>{{ link.tags }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

    </v-list>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  name: "support-for-plugins",
  setup() {
    const links = [
      {
        label: 'Anexo 20',
        link: ' http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20_version3-3.htm',
        tags: 'Pagina Oficial'
      },
      {
        label: 'Certificados de prueba',
        link: 'http://omawww.sat.gob.mx/tramitesyservicios/Paginas/certificado_sello_digital.htm',
        tags: 'Pagina Oficial'
      },
      {
        label: 'Catálogo de productos y servicios',
        link: 'http://pys.sat.gob.mx/PyS/catPyS.aspx',
        tags: 'Pagina Oficial'
      },
      {
        label: 'Catálogo de unidades de medida',
        link: 'http://pys.sat.gob.mx/PyS/catUnidades.aspx',
        tags: 'Pagina Oficial'
      },
      {
        label: 'Consulta los complementos y complementos concepto de factura',
        link: 'https://www.sat.gob.mx/consultas/49522/complementos-y-complementos-concepto-de-factura-',
        tags: 'Pagina Oficial'
      },
      {
        label: 'Lista de complementos PDF',
        link: 'https://www.sat.gob.mx/cs/Satellite?blobcol=urldata&blobkey=id&blobtable=MungoBlobs&blobwhere=1461173971924&ssbinary=true',
        tags: 'Pagina Oficial'
      }
    ]


    return {
      links
    }
  }
})

</script>

<style scoped>

</style>
