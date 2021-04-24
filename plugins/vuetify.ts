import {defineNuxtPlugin} from '@nuxtjs/composition-api'

export default defineNuxtPlugin((ctx) => {
  //@ts-ignore
  if (process.client) {
    const programming = localStorage.getItem('vuex')
    if (programming) {
      const vuex = JSON.parse(programming)
      const theme = vuex.theme.programming
      console.log(theme)
      // @ts-ignore
      ctx.$vuetify.theme.dark = false
      // @ts-ignore
      ctx.$vuetify.theme.themes.light.primary = theme.color
      // @ts-ignore
      ctx.$vuetify.theme.themes.dark.primary = theme.color
    } else {
      // @ts-ignore
      ctx.$vuetify.theme.dark = false
      // @ts-ignore
      ctx.$vuetify.theme.themes.light.primary = "#4CAF50";
      // @ts-ignore
      ctx.$vuetify.theme.themes.dark.primary = "#4CAF50";
    }
  }
})
