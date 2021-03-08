<template>
  <div>
    <section id="installation">
      <h1 class="v-heading text-h3 text-sm-h3 mb-4">
        <a href="#installation" class="text-decoration-none text-right text-md-left"> # </a> Installation
      </h1>

      <h4 class="text-sm-h4 mb-4">
        <a href="#Dependeces" class="text-decoration-none text-right text-md-left"> # </a> Dependeces
      </h4>

      <v-sheet v-for="(d,i) of data" :key="i">
        {{ d.step }}
        <Markup :code="d.data" :language="d.languaje">
        </Markup>
      </v-sheet>


    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Markup from '@/components/Markup.vue'

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    const data = [
      {
        step: 'JDK',
        languaje:'bash',
        data: `
        sudo apt install default-jre
        sudo apt install default-jdk
      `
      },
      {
        step: 'Openssl',
        languaje:'bash',
        data: `
          Debian/Ubuntu: sudo apt-get install openssl
          CentOS, Red Hat: yum install openssl
          Archlinux: sudo pacman -S openssl
      `
      },
      {
        step: 'Saxon-HE >=9.9.1.6J',
        languaje:'bash',
        data: `
          official: http://saxon.sourceforge.net/
          Archlinux:  https://aur.archlinux.org/packages/saxon-he

          Automatic Installation Alternative

          https://github.com/Signati/saxon-he
          sudo chmod 777 saxon.sh
          sudo ./saxon.sh

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
        languaje:'bash',
        data: `npm i --save @signati/core`
      },
    ]
    return {
      data
    }
  }
})
</script>

<style scoped>

</style>
