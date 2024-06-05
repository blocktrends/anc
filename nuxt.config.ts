// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  vue: {
    compilerOptions: {
      directiveTransforms: {
        focus: () => ({
          props: [],
          needRuntime: true
        })
      }
    }
  },
  runtimeConfig: {
    public: {
      VUE_APP_ENV_ANCORD_PASSWORD:  process.env.VUE_APP_ENV_ANCORD_PASSWORD,
      VUE_APP_ENV_ANCORD_USERNAME: process.env.VUE_APP_ENV_ANCORD_USERNAME
    }
  },
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
      /*
      meta: [
        { hid: 'og:image', name: 'og:image', content: '/ancord-share.jpg'},
        { hid: 'twitter:image', name: 'twitter:image', content: '/ancord-share.jpg'},
        {  name: 'twitter:card', content: 'summary_large_image'},
        {  hid: 'title', name: 'title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'og:title', name: 'twitter:title', content: 'Programa Certificação Criptoativos ANCORD'},
        {  hid: 'description', name: 'description', content: 'Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD.'}
      ],*/
      script: [
        {
          hid: 'clt',
          innerHTML: `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "k6gbmyo5mo");`,
        },
        {
          hid: 'fb',
          innerHTML: `
          !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '322393097349578');
fbq('track', 'PageView');
`
        },       
        {
          hid: 'fb',
          innerHTML: `
          <!-- Twitter conversion tracking event code -->
<script type="text/javascript">
  // Insert Twitter Event ID
  twq('event', 'tw-ofos8-om4aj', {
    email_address: null, // use this to pass a user’s email address
    phone_number: null // phone number in E164 standard
  });
</script>
<!-- End Twitter conversion tracking event code -->
`
        },   
      ],
    },
  },
})
