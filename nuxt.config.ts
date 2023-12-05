// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: ['~/assets/css/main.css'],
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    ['@nuxtjs/google-fonts', {
      families: {
        'Public Sans':{
          wght: [300, 400, 500, 600, 700, 800],
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
        { hid: 'og:image', name: 'og:image', content: ''},
        { hid: 'twitter:image', name: 'twitter:image', content: ''},
        {  name: 'twitter:card', content: 'summary_large_image'},
        {  hid: 'title', name: 'title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'og:title', name: 'twitter:title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'description', name: 'description', content: 'Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD.'}
      ]
    },
  },
})
