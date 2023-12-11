// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
     cssnano:
       process.env.NODE_ENV === 'production'
         ? { preset: ['default', { discardComments: { removeAll: true } }] }
         : false, // disable cssnano when not in production
    },
 },
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        'Public Sans':{
          wght: [300, 400, 500, 600, 700, 800],
          ital: [300, 400, 500],
        },
        download: true,
        inject: true
      }
    }]
  ],
  app: {
    cdnURL: '/',
    head: {
      meta: [
        { hid: 'og:image', name: 'og:image', content: 'https://blocktrends.com.br/wp-content/uploads/2023/12/ancord-share.jpg'},
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://blocktrends.com.br/wp-content/uploads/2023/12/ancord-share.jpg'},
        {  name: 'twitter:card', content: 'summary_large_image'},
        {  hid: 'title', name: 'title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'og:title', name: 'twitter:title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'description', name: 'description', content: 'Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD.'}
      ]
    },
  },
})
