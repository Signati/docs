<template>
  <section>
    <h1 class="v-heading text-h3 text-sm-h3 mb-4">
      PDF Design
    </h1>
    <v-row>
      <v-col
        v-for="(pdf,i) in pdfList"
        :key="i"
        class="d-flex child-flex"
        cols="12"
        sm="12"
        md="4"
        lg="4"
      >


        <v-hover v-slot="{ hover }">
          <v-card
            :elevation="hover ? 12 : 2"
            :class="{ 'on-hover': hover }"
            :href="`/pdf/${pdf.file}.pdf`"
            target="_blank"
          >


            <v-img
              :src="`/pdf/${pdf.file}.jpg`"
              :lazy-src="`/pdf/${pdf.file}.jpg`"
              contain
              height="360px"
              class="grey lighten-2"
            >
              <v-chip label
                      color="primary"
                      small
                      class="pa-0 ma-0 subheading text-left" style="top: -5px; height: 15px">
                {{ pdf.name }}
              </v-chip>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out primary darken-2 v-card--reveal  white--text"
                  style="height: 100%;"
                >
                  <div style="display: block">
                  <p class="display-1">
                    $14.99
                  </p>
                  <p>
                    próximamente
                  </p>
                  </div>
                </div>
              </v-expand-transition>
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-hover>


      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import {defineComponent, onMounted, useStore} from "@nuxtjs/composition-api";

export default defineComponent({
  setup() {
    const {commit} = useStore()
    const pdfList = [
      {
        name: 'A117',
        file: 'A117'
      },
      {
        name: 'B111',
        file: 'B111'
      },
      {
        name: 'B112',
        file: 'B112'
      },
      {
        name: 'B123',
        file: 'B123'
      },
      {
        name: 'B222',
        file: 'B222'
      },
      {
        name: 'B333',
        file: 'B333'
      }
    ]
    onMounted(() => {
      commit('menu/setRoutes', [])
    })
    return {
      pdfList
    }
  }
})
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: .5;
  position: absolute;
  width: 100%;
}
</style>
