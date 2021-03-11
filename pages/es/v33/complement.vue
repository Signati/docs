<template>
  <div>
    <section v-for="sect of complementsList" :id="sect.uuid" :key="sect.uuid">
      <h3 class="display-1 basil--text">
        # Complemeto INE
      </h3>
      <v-simple-table v-for="table of sect.table">
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
        <tr v-for="item of table.data">
          <td>
            <v-btn text link tile color="primary">
              {{ item.function }}
            </v-btn>
          </td>
          <td>{{ item.type }}</td>
          <td>{{ item.properties }}</td>
          <td>{{ item.enum }}</td>
          <td>{{ item.descripcion }}</td>
        </tr>
        </tbody>
      </v-simple-table>
      <div v-for="code of sect.markup">
        <Markup :code="code.code" :language="code.language"/>
        <br>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@nuxtjs/composition-api";
import Markup from "~/components/Markup.vue";
import { complementsList } from "~/util/complements-list";

export default defineComponent({
  components: {
    Markup
  },
  setup() {
    return {
      complementsList
    }
  }
})
</script>

<style scoped>

</style>
