<template>
  <CodeContainer
    class="my-0"
    v-bind="$attrs"
    rounded="lg"
  >
    <div>
      {{title}}
    </div>
    <prism
      ref="code"
      :code="code"
      :inline="inline"
      :language="language"
    />
  </CodeContainer>
</template>

<script lang="ts">

// Components
import Prism from '@/components/vue-prism-component'
import CodeContainer from "~/components/CodeContainer.vue";
import { defineComponent } from "@nuxtjs/composition-api";

export default defineComponent({
  components: {
    Prism,
    CodeContainer
  },
  props: {
    code: String,
    inline: Boolean,
    language: String,
    title: String
  },
  setup() {
    return {}
  }
})
</script>
