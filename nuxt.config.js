import sortCSSmq from 'sort-css-media-queries'

export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'apple-touch-icon', type: 'image/png', href: '/apple-touch-icon-180x180.png' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Open+Sans' }
    ],
    script: [
      { src: 'https://kit.fontawesome.com/9b0eb4b9b8.js', crossorigin:"anonymous"  }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    { src: '~/assets/sass/styles.scss', lang: 'scss' }
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/mapbox', mode: 'client' }, { src: '~/plugins/mapbox', mode: 'client' },
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@nuxt/typescript-build'

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios'
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {},
  /*
  ** Build configuration
  */
  generate: {
    routes () {
      const list = require('./assets/config/list.json')
      return list.map((name) => {
        return '/map/' + name.replace('.json', '')
      })
    },
    fallback: true,
  },
  router: {
    base: '/mapprint/'
  },
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
    postcss: {
      plugins: {
        'css-mqpacker': {
          sort: sortCSSmq
        },
        'cssnano': {
          reduceIdents: false,
          zindex: false
        }
      }
    }
  },
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    titleTemplate: '%s - 紙マップ',
    meta: [
      { hid: 'description', name: 'description', content: '印刷できる災害情報サイト' },
      { hid: 'og:site_name', property: 'og:site_name', content: '紙マップ' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'https://codeforjapan.github.io/mapprint/' },
      { hid: 'og:title', property: 'og:title', content: '紙マップ' },
      { hid: 'og:description', property: 'og:description', content: '印刷できる災害情報サイト' },
      { hid: 'og:image', property: 'og:image', content: '/mapprint/images/logo.png' },
      { name: 'twitter:card', content: 'summary' },
    ],
  },
}