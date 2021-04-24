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

        //  console.log(auth)
      } catch (err) {
        // No valid cookie found
      }
    }
  }
}
