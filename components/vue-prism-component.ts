import { defineComponent, h } from '@nuxtjs/composition-api'
import Prism from 'prismjs'

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
  setup(props, { slots, attrs }) {
    const defaultSlot = (slots && slots.default && slots.default()) || []
    const code = props.code
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
          }
        })
      }
      // @ts-ignore
      console.log(Prism.highlight(code, prismLanguage))
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
