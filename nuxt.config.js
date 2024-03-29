// import colors from 'vuetify/es5/util/colors'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  telemetry: false,
  // router: {
  //   base: '/nodejs/v33'
  // },
  head: {
    __dangerouslyDisableSanitizers: ['script'],
    titleTemplate: '%s - docs',
    title: 'docs',
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
    ],
    link: [
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=DM+Sans&amp;family=DM+Mono"
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
        async: true,
        'data-ad-client': 'ca-pub-3148933927224946',
        crossOrigin: 'anonymous',
      },
      {
        innerHTML: `  (adsbygoogle = window.adsbygoogle || []).push({});`,
        type: 'text/javascript',
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    {
      src: '~/plugins/vuetify.ts',
    },
    {
      src: '~/plugins/vuex-persist',
      ssr: false
    }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/composition-api/module',
    '~/googleanalytics/module.js'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/markdownit',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // Simple usage
  ],
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en'
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    defaultAssets: {
      font: {
        family: 'DM Sans'
      }
    },
    theme: {
      themes: {
        light: {
          primary: '#ffffff',
        },
      },
    },
  },
  babel: {
    presets(env, [preset, options]) {
      return [
        ["@nuxt/babel-preset-app", options]
      ]
    }
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {
      isDev,
      isClient,
      isServer
    }) {
      config.node = {
        fs: 'empty'
      }
      if (config.module) {
        // config.module.rules.push({
        //   enforce: 'pre',
        //   test: /\.(js|vue)$/,
        //   loader: 'eslint-loader',
        //   exclude: /(node_modules)/
        // })

      }
    }
  }
}
