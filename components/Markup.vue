<template>
  <Code
    class="my-0"
    v-bind="$attrs"
  >
    <prism
      ref="code"
      :code="code"
      :inline="inline"
      :language="language"
    />
  </Code>
</template>

<script>

// Components
import Prism from '@/components/vue-prism-component'
import Code from "~/components/Code.vue";

export default {
  name: 'Markup',

  components: {
    Prism,
    Code
  },

  props: {
    code: String,
    inline: Boolean,
    language: String,
  },
}
</script>
