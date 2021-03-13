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
        <section id="libreria">
          Instalar librería:
          <Markup :code="`
sudo apt-get install openssl
        `" language="bash" title="Debian/Ubuntu"></Markup>
        </section>
        <br>
        <section id="openssl-linux">
          <Markup :code="`
yum install openssl
        `" language="bash" title="CentOS, Red Hat"></Markup>
        </section>
        <br>
        <section id="terminal-linux">
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

        </section>
      </v-tab-item>
      <v-tab-item :key="2">
        mac
      </v-tab-item>
      <v-tab-item :key="3">
        <section id="openssl-win">

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

        </section>
      </v-tab-item>
    </v-tabs-items>
  </section>

</template>

<script lang="ts">
import { defineComponent, onMounted, ref, useStore } from "@nuxtjs/composition-api";
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

    const { commit } = useStore()
    onMounted(() => {
      commit('menu/setRoutes', [
        {
          id: 1,
          name: 'Linux',
          level: '1',
          icon: 'mdi-penguin',
          url: '',
          isActive: 1,
          fatherID: 0,
          children: [
            {
              id: 11,
              name: 'Debian/Ubuntu',
              url: '/es/v33/getting-started/generate/#libreria',
              children: []
            },
            {
              id: 12,
              name: 'CentOS, Red Hat',
              url: '/es/v33/getting-started/generate/#openssl-linux',
              children: []
            },
            {
              id: 13,
              name: 'Open SSL',
              url: '/es/v33/getting-started/generate/#terminal-linux',
              children: []
            },
          ],
        },
        {
          id: 2,
          name: 'Mac OS',
          level: '1',
          children: [],
          icon: 'mdi-apple',
          url: '',
          isActive: 1,
          fatherID: 0
        },
        {
          id: 3,
          name: 'Windows',
          level: '1',
          children: [
            {
              id: 14,
              name: 'Open SSL',
              url: '/es/v33/getting-started/generate/#openssl-win',
              children: []
            },
          ],
          icon: 'mdi-microsoft-windows',
          url: '',
          isActive: 1,
          fatherID: 0
        },
      ])
    })

    return {
      list,
      tab
    }
  }
})
</script>

<style scoped>

</style>
