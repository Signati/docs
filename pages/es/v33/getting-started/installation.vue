<template>
  <v-row >
    <v-col>

      <h3 class="display-1 basil--text">
        # Installation
      </h3>
      <v-tabs
        v-model="tab"
        background-color="transparent"
        color="basil"
        grow

      >
        <v-tab
          v-for="(item,i) in list"
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
        </v-tabs-items>


      </section>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, useContext, useRouter, useStore } from "@nuxtjs/composition-api";
import Markup from '@/components/Markup.vue'

export default defineComponent({
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
          {
            step: 'Installation',
            languaje: 'bash',
            data: `
npm i --save @signati/core
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
      {
        icon: 'mdi-microsoft-windows',
        color: 'blue',
        title: 'Windows',
        bash: []
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
            },
            {
              id: 11,
              name: 'Installation',
              url: '/es/v33/getting-started/installation/#Installation',
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
          children: [],
          icon: 'mdi-microsoft-windows',
          url: '',
          isActive: 1,
          fatherID: 0
        },
      ])
    })

    const context = useContext()
    const router = useRouter()
    if (process.client) {
      // @ts-ignore
      const ga = context.$ga
      // @ts-ignore
      ga.page({
        page: 'es/v33/getting-started/installation',
        title: 'Install Page',
        location: window.location.href
      })
    }
    return {
      tab,
      list,
    }
  }
})
</script>

<style scoped>

</style>
