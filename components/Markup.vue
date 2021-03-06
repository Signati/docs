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
// Imports
import 'markdown-it-prism'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-pug'
import 'prismjs/components/prism-sass'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-stylus'
import 'prismjs/components/prism-typescript'

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
