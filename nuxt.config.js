export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'my-surat',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {type: "text/javascript", src:"/assets/home/js/jquery.min.js", body: true},
      {type: "text/javascript", src:"/assets/home/js/bootsnav.js", body: true},
      {type: "text/javascript", src:"/assets/home/js/jquery.nav.js", body: true},
      {type: "text/javascript", src:"/assets/home/js/hamburger-menu.js", body: true},
      { type: "text/javascript", src: "/assets/home/js/theme-vendors.min.js", body: true },
      { type: "text/javascript", src: "/assets/home/js/main.js", body: true },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/home/css/style.css',
    '@/static/home/css/bootsnav.css',
    '@/static/home/css/font-icons.min.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
