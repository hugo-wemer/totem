export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'A tecnologia no processo de triagem' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['normalize.css/normalize.css', '@/assets/scss/base.scss'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/accessor',
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [{path: '@components', pathPrefix: false}],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    '@nuxtjs/fontawesome',
  ],

  fontawesome: {
    component: 'fa',
    icons: {
      solid: [
        'faSearch',
        'faCheckDouble',
        'faBook'
      ],
    }
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources',
    'cookie-universal-nuxt'
  ],

  styleResources: {scss: [
    '@/components/bosons/*.scss'
  ]},

  /* axios: {
    baseURL: process.env.NOV_ENV === 'production' ? 'https://adonis-backend-tcc.herokuapp.com/' : 'http://localhost:3333'
  }, */
  axios: {
    baseURL: 'https://adonis-backend-tcc.herokuapp.com'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
