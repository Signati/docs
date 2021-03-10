<template>
  <section>
    <h3 class="display-1 basil--text">
      # Generar archivos .pem
    </h3>
    <br>
    <p>
      Lo primero que se necesita es tener instalada la librería OpenSSL (programa dedicado a la generación y tratado de
      claves, certificados y keyStore) para poder utilizar los comandos que nos ayudarán a crear las llaves de nuestros
      sellos digitales.
    </p>

    <v-tabs
      v-model="tab"
      background-color="transparent"
      color="basil"
      grow
    >
      <v-tab
        v-for="(item,k) in list"
        :key="k"
      >
        <v-icon :color="item.color" class="mr-2">
          {{ item.icon }}
        </v-icon>
        {{ item.title.toUpperCase() }}
      </v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item :key="1">
        Instalar librería:
        <Markup :code="`
sudo apt-get install openssl
        `" language="bash" title="Debian/Ubuntu"></Markup>
        <br>
        <Markup :code="`
yum install openssl
        `" language="bash" title="CentOS, Red Hat"></Markup>
        <br>
        Ejecutar desde terminal

        <Markup
          :code="`
         openssl pkcs8 -inform DER -in nombrearchivo.key -out nombrearchivo.key.pem -passin pass:contraseña
          `"
          title="archivo key.pem"
          language="bash"></Markup>
        <br>
        <Markup
          :code="`
         openssl x509 -inform DER -outform PEM -in ruta/nombreArchivo.cer -pubkey -out ruta/nombreArchivo.cer.pem
          `"
          title="archivo cer.pem"
          language="bash"></Markup>

      </v-tab-item>
      <v-tab-item :key="2">
        mac
      </v-tab-item>
      <v-tab-item :key="3">
        <p>
          Descargar libreria: http://slproweb.com/products/Win32OpenSSL.html
        </p>
        <p>
          Deberán descargar la versión según su sistema operativo, e instalar.
        </p>
        <p>
          Ejecutar desde terminal
        </p>

        Archivo key.pem
        <Markup
          :code="`
          openssl.exe pkcs8 -inform DER -in nombrearchivo.key -out nombrearchivo.key.pem -passin pass:contraseña
          `"
          language="bash"></Markup>
        archivo cer.pem
        <Markup
          :code="`
          openssl.exe x509 -inform DER -outform PEM -in ruta/nombreArchivo.cer -pubkey -out ruta/nombreArchivo.cer.pem
          `"
          language="bash"></Markup>

      </v-tab-item>
    </v-tabs-items>
  </section>

</template>

<script lang="ts">
import { defineComponent, ref } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";

export default defineComponent({
  name: "generate",
  components: {
    Markup
  },
  setup() {
    const tab = ref(null)
    const list = [
      {
        icon: 'mdi-penguin',
        title: 'linux',
        color: 'black',
      },
      {
        icon: 'mdi-apple',
        color: 'grey',
        title: 'macOS',
      },
      {
        icon: 'mdi-microsoft-windows',
        color: 'blue',
        title: 'Windows',
      },

    ]
    return {
      list,
      tab
    }
  }
})
</script>

<style scoped>

</style>
