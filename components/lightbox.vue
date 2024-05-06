<template>
    

    <div class="absolute bg-neutral-900 max-w-[88vw] shadow-md rounded-lg border-2 border-[#00A7D0] h-[400px] md:h-[420px] w-[560px] z-50 left-0 right-0 top-0 bottom-0 m-auto">
        <div class="flex justify-center">
<div class="w-full md:mx-14">
  <form class="  mb-4 ">
    <div class="mb-4 px-5 md:px-0">
      <label class="block text-center font-bold text-[#00a7d0] pt-9 md:pt-10 text-blue text-2xl md:text-3xl text-grey-darker  " for="username">
        Você é um Assessor de<br />
        Investimentos certificado<br />
        pela ANCORD?
      
      </label>
      <div class="text-xs text-white  text-center mt-8 mb-2"><label :class="cpf_class" v-html="mensagem_cpf"></label></div>

      <input v-mask="['###.###.###-##', '##.###.###/####-##']"  maxlength="14"
      v-model="cpf"
      class="a shadow appearance-none border rounded w-full py-3 mt-3 px-3 text-grey-darker 
      leading-tight focus:outline-none focus:shadow-outline" id="username" type="tel" placeholder="000.000.000-00">
    </div>
 
    <div class="flex items-center justify-between mt-4 px-5 md:px-0">
      <a @click="submitCpf()" class="text-slate-950 text-center cursor-pointer text-base xl:text-lg 2xl:text-base font-bold leading-7 whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3 max-md:px-5 uppercase" data-v-inspector="components/header.vue:52:13"> Enviar</a>
        
    </div>
    <a href="https://wa.me/message/W2USYZZK75FMC1" target="_blank" class="block text-center text-white text-xs underline pt-4 font-light">Precisa de ajuda? Entre em contato conosco. </a>
  </form>

</div>
</div>
    </div>
</template>

<script >

export default {
 data() {
    return {
      cpf:'',
      mensagem_cpf: 'Digite o seu CPF',
      cpf_class: ''
    }
  },
  methods: {
    async submitCpf() {
      
      const config = useRuntimeConfig()
     

      let LOGIN_ANCORD = config.public.VUE_APP_ENV_ANCORD_USERNAME;
      let PASS_ANCORD = config.public.VUE_APP_ENV_ANCORD_PASSWORD;

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
            console.log(result)
            if(result[0].resultado == "HABILITADO" || result[0].resultado == "Habilitado")
              window.location.replace("https://checkout.blocktrends.com.br/pay/programa-cca")
            else {
              this.mensagem_cpf = "CPF não encontrado. Tente novamente ou <a href='https://wa.me/message/W2USYZZK75FMC1' target='_blank'><u>fale conosco</u></a>."
              this.cpf_class = 'text-red bold text-base'
            }
              
          });
        } else {
          alert("Preencha seu CPF corretamente.");
        } 

      });


    }
  }
}
</script>

