<template>
  <v-row>
    <v-col cols="12">

      <h3 class="display-1 basil--text">
        # Instalacion
      </h3>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow

      >
        <v-tab
          v-for="(item,i) in listHead"
          :key="i"
        >
          <v-icon :color="item.color" class="mr-2">
            {{ item.icon }}
          </v-icon>
          {{ item.title.toUpperCase() }}
        </v-tab>
      </v-tabs>

      <v-tabs-items v-model="tab" :touchless="true">
        <v-tab-item
          v-for="(item,k) in list"
          :key="k"
        >
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <v-sheet v-for="(d,i) of item.bash" :key="i" class="mb-4 mt-4">
                <section :id="d.step">
                  <Markup :code="d.data" :language="d.languaje" :title="d.step"/>
                </section>
              </v-sheet>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card
            color="basil"
            flat
          >
            <v-card-text>
              <v-sheet class="mb-4 mt-4">
                <section id="wopenssl">

                  <div class="title">OpenSSL</div>
                  Instalar
                  <a href="https://slproweb.com/products/Win32OpenSSL.html" target="_blank">
                    https://slproweb.com/products/Win32OpenSSL.html
                  </a>
                  <v-alert
                    outlined
                    text
                  >
                    <p>
                      c:\OpenSSL-Win32\bin\openssl.exe O c:\OpenSSL-Win64\bin\openssl.exe
                    </p>
                    Solo necesita agregar la ruta del bin OpenSSL (ej: C:\Archivos de programa\OpenSSL-Win64\bin) a la
                    variable del sistema PATH como se muestra a continuación:
                  </v-alert>

                  <v-img src="/env.png"></v-img>
                </section>
                <br>
                <section id="wsaxon">

                  <div class="title">saxon HE</div>
                  <a href="http://saxon.sourceforge.net/#F10HE" target="_blank">
                    http://saxon.sourceforge.net/#F10HE
                  </a>
                  <br>
                  <a
                    href="https://sourceforge.net/projects/saxon/files/Saxon-HE/10/Dotnet/SaxonHE10-3N-setup.exe/download"
                    target="_blank">
                    Download for .NET (10.3 Mbytes)
                  </a>
                  <br>

                  <v-alert
                    outlined
                    text
                  >

                    Agregar la ruta del bin de Saxon (ej: C:\Program Files\Saxonica\SaxonHE10.3N\bin) a la variable del
                    sistema PATH como se muestra en la imagen:
                  </v-alert>
                  <v-img src="/env.png"></v-img>
                </section>
              </v-sheet>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-col>
    <v-col cols="12">
      <section id="Installation">
        <v-card
          color="basil"
          flat
        >
          <v-card-text>
            <v-sheet class="mb-4 mt-4">
              <Markup title="Installation Node JS" language="bash" code="
npm i --save @signati/core
"></Markup>
            </v-sheet>
          </v-card-text>
        </v-card>

        <v-card
          color="basil"
          flat
        >
          <v-card-text>
            <v-sheet class="mb-4 mt-4">
              <Markup title="Installation PHP" language="bash" code="
composer require signati/core
"></Markup>
            </v-sheet>
          </v-card-text>
        </v-card>
      </section>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import {defineComponent, onMounted, ref, useContext, useRouter, useStore} from "@nuxtjs/composition-api";
import Markup from '~/components/Markup.vue'
import {genAppMetaInfo} from "~/util/metadata";
import metadata from "~/data/metadata.json";
import {useBrowserLocation} from '@vueuse/core'
import {computed} from "@vue/composition-api";

export default defineComponent({
  head: () => {
    return {
      ...genAppMetaInfo({
        title: "Instalacion",
        description: 'Comienza instalando los requerimientos Windows, Linux y Mac',
        keywords: "signati,saxon He,node, node js, php, laravel, Windows, Linux, Mac, SAT, CFDI",
        url: 'https://docs.signati.app/getting-started/installation'
      }),
    }
  },
  components: {
    Markup
  },
  setup() {
    const tab = ref(null)
    const listHead = [
      {
        icon: 'mdi-penguin',
        title: 'linux',
        color: 'black',
        bash: []
      },
      {
        icon: 'mdi-apple',
        color: 'grey',
        title: 'macOS',
        bash: []
      },
      {
        icon: 'mdi-microsoft-windows',
        color: 'blue',
        title: 'Windows',
        bash: []
      },
    ]
    const list = [
      {
        icon: 'mdi-penguin',
        title: 'linux',
        color: 'black',
        bash: [
          {
            step: 'JDK',
            languaje: 'bash',
            data: `
sudo apt install default-jre
sudo apt install default-jdk
      `
          },
          {
            step: 'Openssl',
            languaje: 'bash',
            data: `
Debian/Ubuntu: sudo apt-get install openssl
CentOS, Red Hat: yum install openssl
Archlinux: sudo pacman -S openssl
      `
          },
          {
            step: 'Saxon-HE',
            languaje: 'bash',
            data: `
Debian/Ubuntu: sudo apt install unzip
Archlinux sudo pacman -S unzip

official: http://saxon.sourceforge.net/
Archlinux:  https://aur.archlinux.org/packages/saxon-he

Automatic Installation Alternative
git clone https://github.com/Signati/saxon-he
sudo chmod 777 saxon-he-xVersion-install.sh
sudo ./saxon-he-xVersion-install.sh

███████╗ █████╗ ██╗  ██╗ ██████╗ ███╗   ██╗    ██╗  ██╗███████╗
██╔════╝██╔══██╗╚██╗██╔╝██╔═══██╗████╗  ██║    ██║  ██║██╔════╝
███████╗███████║ ╚███╔╝ ██║   ██║██╔██╗ ██║    ███████║█████╗
╚════██║██╔══██║ ██╔██╗ ██║   ██║██║╚██╗██║    ██╔══██║██╔══╝
███████║██║  ██║██╔╝ ██╗╚██████╔╝██║ ╚████║    ██║  ██║███████╗
╚══════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═══╝    ╚═╝  ╚═╝╚══════╝
      `
          },
        ]
      },
      {
        icon: 'mdi-apple',
        color: 'grey',
        title: 'macOS',
        bash: []
      },
    ]
    const {commit} = useStore()
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
              name: 'JDK',
              url: '/es/v33/getting-started/installation/#JDK',
              children: []
            },
            {
              id: 11,
              name: 'Openssl',
              url: '/es/v33/getting-started/installation/#Openssl',
              children: []
            },
            {
              id: 11,
              name: 'Saxon-HE',
              url: '/es/v33/getting-started/installation/#Saxon-HE',
              children: []
            }
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
              id: 21,
              name: 'Openssl',
              url: '/es/v33/getting-started/installation/#wopenssl',
              children: []
            },
            {
              id: 21,
              name: 'Saxon-HE',
              url: '/es/v33/getting-started/installation/#wsaxon',
              children: []
            }
          ],
          icon: 'mdi-microsoft-windows',
          url: '',
          isActive: 1,
          fatherID: 0
        },
        {
          id: 4,
          name: 'Installation',
          url: '/es/v33/getting-started/installation/#Installation',
          level: '1',
          children: [],
          icon: 'mdi-npm ',
          isActive: 1,
          fatherID: 0,
        }
      ])
    })

    const context = useContext()
    const router = useRouter()
    return {
      tab,
      list,
      listHead
    }
  }
})
</script>

<style scoped>

</style>
