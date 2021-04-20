import {parse} from 'cookie'
import {Context} from "@nuxt/types";

export interface ContextExpress extends Context {
}


export const state = () => ({})

export const actions = {
  // @ts-ignore
  nuxtServerInit({commit}, {req, isServer, $vuetify}: ContextExpress) {
    if (req.headers.cookie) {
      try {
        const cook = parse(req.headers.cookie);
        console.log($vuetify.theme)
        // @ts-ignore
        $vuetify.theme.dark = false
        // @ts-ignore
        $vuetify.theme.themes.light.primary = cook.color ? cook.color : '#4CAF50'
        $vuetify.theme.themes.dark.primary = cook.color ? cook.color : '#4CAF50'
        $vuetify.theme.defaults.light.primary = cook.color ? cook.color : '#4CAF50'
        $vuetify.theme.defaults.dark.primary = cook.color ? cook.color : '#4CAF50'
        //  console.log(auth)
      } catch (err) {
        // No valid cookie found
      }
    }
  }
}
