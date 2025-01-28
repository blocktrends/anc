<template>
    

    <div class="fixed bg-neutral-900 max-w-[88vw] shadow-md rounded-lg border-2 border-[#00A7D0] h-max pb-7 md:pb-9 w-[560px] z-50 left-0 right-0 top-0 bottom-0 m-auto">
        <div class="flex justify-center">
<div class="w-full md:mx-14">
  <form class="  mb-4 "  v-on:submit.prevent="submitCpf">
    <div class="mb-4 px-2 md:px-0">
      <label class="block text-center font-bold text-[#00a7d0] pt-9 md:pt-10 text-blue text-2xl md:text-3xl text-grey-darker  " for="username">
        Você é um Assessor de<br />
        Investimentos certificado<br />
        pela ANCORD?
      
      </label>
      <div class="text-xs text-white  text-center mt-8 mb-2"><label :class="cpf_class" v-html="mensagem_cpf"></label></div>
<div class="px-3 md:px-0" v-if="isBrowser">
 <input v-mask="['###.###.###-##', '##.###.###/####-##']"  maxlength="14"
      v-model="cpf"
      class="a shadow appearance-none border rounded w-full py-3 mt-3 px-3 text-grey-darker 
      leading-tight focus:outline-none focus:shadow-outline" id="username" type="tel" placeholder="000.000.000-00">
  </div>
     
    </div>
 
    <div class="flex items-center justify-between mt-4 px-5 md:px-0">
     
      <a @click="submitCpf()" :class="button_class"  class="relative text-slate-950 text-center cursor-pointer text-base xl:text-lg 2xl:text-base font-bold leading-7 whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3 max-md:px-5 uppercase" data-v-inspector="components/header.vue:52:13"> 
  
 <svg   class="hidden animate-spin left-0 right-0 mx-auto absolute  h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
    </svg>
  <span>Continuar</span>
  </a>
        
    </div>
    <a href="https://wa.me/message/W2USYZZK75FMC1" target="_blank" class="block text-center text-white text-xs underline pt-4 font-light">Precisa de ajuda? Entre em contato conosco. </a>
  </form>

</div>
</div>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const isBrowser = ref(typeof window !== 'undefined');
</script>
<script >

export default {
 data() {
    return {
      cpf:'',
      mensagem_cpf: 'Digite o seu CPF',
      cpf_class: '',
      button_class: ''
    }
  },
  methods: {
    async submitCpf() {
      

      this.button_class = 'button_class';
      const config = useRuntimeConfig()
     

      let LOGIN_ANCORD = config.public.VUE_APP_ENV_ANCORD_USERNAME;
      let PASS_ANCORD = config.public.VUE_APP_ENV_ANCORD_PASSWORD;

      const queryString = window.location.search;
      const urlParams = new URLSearchParams(queryString);
      let paramsrc = urlParams.get('src');

      if(paramsrc !== null)
        paramsrc = '&src='+paramsrc;
      else
       paramsrc = '';

      let apiToken = $fetch('https://apicredenciamento.ancord.org.br:8085/auth/entrar/', {
          method: 'POST',
          body: { 
              "login": LOGIN_ANCORD,
              "senha": PASS_ANCORD
          }
      });


      apiToken.then((res) => { 
 
        let cpf_sent = this.cpf.replace(/[^\w\s]/gi, '')

        if(cpf_sent.length == 11) {
          let statusCpf = $fetch('https://apicredenciamento.ancord.org.br:8085/candidato/consultar/aprovados', {
              method: 'POST',
              body: { 
                  "cpf": cpf_sent
              },
              headers: {
                  'ApiKey': res,
              }
          });

            

          statusCpf.then((result) => { 
         //   console.log(result)
            if(result[0].resultado == "HABILITADO" || result[0].resultado == "Habilitado") {

              gtag('event', 'assessor_habilitado', {
                event_category: 'UI Interaction',
                event_label: 'Assessor Habilitado',
                value: 1, // Optional, use a numeric value if it makes sense
              });

              var guru_url = "https://checkout.blocktrends.com.br/checkout/btancord-cca?email="+result[0].email+"&name="+result[0].nome+"&phone="+result[0].telefone+"&doc="+result[0].cpf+paramsrc;
            //  if (window.location.search.includes('bf')) {
            //    guru_url = "https://checkout.blocktrends.com.br/checkout/btancord-cca-bf?email="+result[0].email+"&name="+result[0].nome+"&phone="+result[0].telefone+"&doc="+result[0].cpf;
           //   };
              window.location.replace(guru_url)
            }
            else {

              gtag('event', 'assessor_nao_encontrado', {
                event_category: 'UI Interaction',
                event_label: 'Assessor não encontrado',
                value: 1, // Optional, use a numeric value if it makes sense
              });

              let linkAssessorNaoEncontrado = 'https://checkout.blocktrends.com.br/checkout/btancord-cca-cpf?doc='+cpf_sent+paramsrc;
             //  if (window.location.search.includes('bf')) {
             //   linkAssessorNaoEncontrado = 'https://checkout.blocktrends.com.br/checkout/btancord-cca-bf?doc='+cpf_sent+paramsrc;
              
           //   };
              
              this.mensagem_cpf = "CPF não pertence a Assessor (AI) certificado.<br />Você é um AI certificado pela ANCORD?<br /><a href='"+linkAssessorNaoEncontrado+"'> <u>Se sim, clique aqui para continuar.</u></a>."
              this.cpf_class = 'text-white bold text-base'
              this.button_class = '';
            }
              
          });
        } else {
          alert("Preencha seu CPF corretamente.");
          this.button_class = '';
        } 

      });


    }
  }
}
</script>

