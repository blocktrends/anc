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
      <div class="text-xs text-white text-center mt-8 mb-2">Digite o seu CPF</div>
      <input pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"  class=" shadow appearance-none border rounded w-full py-3 mt-3 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="000.000.000-00">
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

<script>

export default {
 data() {
    return {
  //   apiToken:'abc'
    }
  },
  methods: {
    async submitCpf() {


        let apiToken = $fetch('https://apicredenciamento.ancord.org.br:8085/auth/entrar/', {
            method: 'POST',
            body: { 
                "login": "26195884000170",
                "senha":"123456"
            }
        });

        apiToken.then((res) => { 
     

           let statusCpf = $fetch('https://apicredenciamento.ancord.org.br:8085/candidato/consultar/aprovados', {
                method: 'POST',
                body: { 
                    "cpf": "90350307024"
                },
                headers: {
                    'ApiKey': res,
                }
            });

            statusCpf.then((result) => { 
                window.location.replace("https://checkout.blocktrends.com.br/pay/programa-cca");
            });

            

        });


       /* const statusCpf = $fetch('http://54.209.206.23:9092/candidato/consultar/aprovados', {
            method: 'POST',
            body: { 
                "cpf": "90350307024"
            }
        });*/



    }
  }
}
</script>

