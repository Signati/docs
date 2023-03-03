// ~/plugins/vuex-persist.js
// @ts-ignore
import VuexPersistence from "vuex-persist";
export default ({ store }: any) => {
  new VuexPersistence({
    storage: window.localStorage,
    modules: ["theme"],
    // asyncStorage: true
    /* your options */
  }).plugin(store);
};
