<template>
  <v-row >
    <v-col>
      <section id="installation">
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
                <v-sheet v-for="(d,i) of item.bash" :key="i">
                  {{ d.step }}
                  <Markup :code="d.data" :language="d.languaje">
                  </Markup>
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
import { defineComponent, ref } from "@nuxtjs/composition-api";
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
    return {
      tab,
      list,
    }
  }
})
</script>

<style scoped>

</style>
