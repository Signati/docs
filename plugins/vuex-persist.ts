// ~/plugins/vuex-persist.js
// @ts-ignore
import VuexPersistence from 'vuex-persist'
import type {Context} from '@nuxt/types'

export default ({store}: Context) => {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ['theme'],
    // asyncStorage: true
    /* your options */
  }).plugin(store)
}
