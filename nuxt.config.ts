import { defineNuxtConfig } from '@nuxt/bridge'
import eslintPlugin from 'vite-plugin-eslint'

require('dotenv').config({
  path: `./env/.env.${process.env.ENV ? process.env.ENV.toLowerCase() : 'local'}`
})

export default defineNuxtConfig({
  autoImports: {
    dirs: [
      'composables/**'
    ]
  },
  env: {
    SERVICE_URL: (process.env.ENV === 'LOCAL' ? 'http://' : 'https://') + process.env.SERVICE_ENDPOINT
  },
  head: {
    title: 'Nuxt Site',
    htmlAttrs: {
      lang: 'ko'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, user-scalable=no' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vee-validate.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  buildModules: [
    '@vueuse/nuxt'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',

    '@nuxtjs/dotenv',

    // '@nuxtjs/auth-next',

    ['@pinia/nuxt', { disableVuex: false }]
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // auth: {
  //   localStorage: false,
  //   strategies: {
  //     apollo: {
  //       name: 'apollo',
  //       enabled: true,
  //       fullPathRedirect: true,
  //       scheme: 'local',
  //       token: {
  //         type: ''
  //       },
  //       refreshToken: {
  //         property: 'refreshToken',
  //         data: 'refreshToken',
  //         maxAge: 60 * 60 * 24 * 30,
  //         prefix: '_refresh_token.'
  //       }
  //     }
  //   },
  //   cookie: {
  //     prefix: '',
  //     options: {
  //       path: '/',
  //       domain: undefined,
  //       expires: 1,
  //       secure: process.env.ENV !== 'LOCAL'
  //     }
  //   },
  //   redirect: {
  //     login: '/auth',
  //     callback: '/callback',
  //     logout: '/auth',
  //     home: '/'
  //   }
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [
      'pinia',
      'vee-validate/dist/rules'
    ]
  },

  vite: {
    plugins: [
      eslintPlugin({
        throwOnError: false,
        failOnError: false,
        emitError: false
      })
    ]
  }
})
