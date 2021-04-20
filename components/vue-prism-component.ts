import {defineComponent, h} from '@nuxtjs/composition-api'
import Prism from 'prismjs'
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
import 'prismjs/components/prism-powershell'
import 'prismjs/components/prism-shell-session'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'

export default defineComponent({
  props: {
    code: {
      type: String
    },
    inline: {
      type: Boolean,
      default: false
    },
    language: {
      type: String,
      default: 'markup'
    }
  },
  setup(props, {slots, attrs}) {
    const defaultSlot = (slots && slots.default && slots.default()) || []
    const code = props.code ? props.code : (defaultSlot && defaultSlot.length) ? defaultSlot : '';
    const inline = props.inline
    const language = props.language
    const prismLanguage = Prism.languages[language]
    const className = `language-${language}`

    if (process.env.NODE_ENV === 'development' && !prismLanguage) {
      throw new Error(
        `Prism component for language "${language}" was not found, did you forget to register it? See all available ones: https://cdn.jsdelivr.net/npm/prismjs/components/`
      )
    }
    return () => {
      if (inline) {
        // @ts-ignore
        return h('code', {
          class: [className],
          // @ts-ignore
          domProps: {
            // @ts-ignore
            innerHTML: Prism.highlight(code, prismLanguage)
          },
          slot: {}
        })
      }
      // @ts-ignore
      return h(
        'pre',
        {
          ...attrs,
          class: [attrs.class, className]
        },
        [
          // @ts-ignore
          h('code', {
            ...attrs,
            // @ts-ignore
            class: [attrs.class, className],
            // @ts-ignore
            domProps: {
              // @ts-ignore
              innerHTML: Prism.highlight(code, prismLanguage)
            }
          })
        ]
      )
    }
  }
})
