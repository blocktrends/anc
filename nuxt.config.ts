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
        { hid: 'og:image', name: 'og:image', content: 'https://blocktrends.com.br/wp-content/uploads/2023/12/ancord-share.png'},
        { hid: 'twitter:image', name: 'twitter:image', content: 'https://blocktrends.com.br/wp-content/uploads/2023/12/ancord-share.png'},
        {  name: 'twitter:card', content: 'summary_large_image'},
        {  hid: 'title', name: 'title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'og:title', name: 'twitter:title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'description', name: 'description', content: 'Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD.'}
      ],
      script: [
        {
          hid: 'metaFb',
          innerHTML: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '1079915489855328');
          fbq('track', 'PageView');
          </script>
          <noscript><img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=1079915489855328&ev=PageView&noscript=1"
          /></noscript>`,
        }
      ],
    },
  },
})
