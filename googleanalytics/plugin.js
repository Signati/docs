import Vue from 'vue'
import VueGtag from 'vue-gtag'

export default (ctx) => {

    Vue.use(VueGtag, {
      config: {
        id: 'UA-212994312-1' // 'G-L96E2TZNTG'
      },
      pageTrackerScreenviewEnabled: true,
      enabled: true
    }, ctx.app.router)

}
