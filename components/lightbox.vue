<template>
    

    <div class="absolute bg-neutral-900 shadow-md border border-[#00A7D0] h-64 w-96 z-50 left-0 right-0 top-0 bottom-0 m-auto">
        <div class="flex justify-center">
<div class="w-full max-w-xs">
  <form class="  mb-4 ">
    <div class="mb-4">
      <label class="block pt-5 text-white text-lg text-grey-darker  " for="username">
        Digite o seu CPF para consultarmos seu certificado ANCORD {{apiToken}}
      </label>
      <input pattern="(\d{3}\.?\d{3}\.?\d{3}-?\d{2})|(\d{2}\.?\d{3}\.?\d{3}/?\d{4}-?\d{2})"  class="shadow appearance-none border rounded w-full py-2 mt-3 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Número do seu CPF">
    </div>
 
    <div class="flex items-center justify-between mt-4 ">
      <a @click="submitCpf()" class="text-slate-950 text-center cursor-pointer text-base xl:text-lg 2xl:text-xl font-bold leading-7 whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3.5 max-md:px-5" data-v-inspector="components/header.vue:52:13"> Enviar</a>
        
    </div>
    <div class="text-center text-white text-xs underline pt-3">Entrar em contato</div>
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

