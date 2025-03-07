<template>

<a href="#matricule" style="background: linear-gradient(222.77deg, #0296bb 1.96%, #39d8ff 98.36%); width: 100vw;" 
class="flex button-bf items-center font-bold justify-center hidden faixa-bf py-3 text-xs sm:text-xl lg:text-2xl  uppercase text-center ">
      <span>Black Friday CCA</span>
       <span class=" items-center">
       <span class="mx-4 text-4xl">•</span> 60% OFF <span class=" sm:inline mx-4 text-4xl">•</span>
       </span>
       <span class=" sm:inline  ">ENTRE OS DIAS <br class="bfbr" />26/11 E 06/12</span>
   
   
  
      </a>

  <div :class="{ hidden: isHidden  }">
    <div class="fixed cursor-pointer bg-black bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showLightBox()" >
    </div>
    <Lightbox />
    
  </div>


<div class="bg-cyan-500 min-h-[48px] hidden font-semibold z-20 sticky top-0 text-center text-xs md:text-base py-2  sm:px-0 sm:py-4 " style="display: block;">
<a href="https://checkout.blocktrends.com.br/checkout/btancord-cca" target="_blank">
O PROGRAMA CCA AGORA ESTÁ LIBERADO <br class="brmobile" />PARA TODOS OS PÚBLICOS! 
<u>MATRICULE-SE JÁ!</u></a>
  </div>
  
  <div class="bg-top pb-14 sm:pb-24">
    <div class="pt-16  top-0 font-bold  border-[#00A7D0] pb-10">
      <nav class="flex items-center justify-between flex-wrap xl:container mx-auto">
        <div class="flex items-center flex-no-shrink text-white">
          <a href="/">
            <img src="../assets/imgs/certificacao-criptoativos-ancord.svg" class="max-w-[260px] sm:max-w-none"
              alt="Logo Ancord" />
           
          </a>
        </div>
        <div class="block xl:hidden">
          <button @click="toggleMenu" class="flex items-center text-white">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M4.5 13.5C4.5 12.8787 5.00368 12.375 5.625 12.375H30.375C30.9963 12.375 31.5 12.8787 31.5 13.5C31.5 14.1213 30.9963 14.625 30.375 14.625H5.625C5.00368 14.625 4.5 14.1213 4.5 13.5ZM4.5 23.625C4.5 23.0037 5.00368 22.5 5.625 22.5H30.375C30.9963 22.5 31.5 23.0037 31.5 23.625C31.5 24.2463 30.9963 24.75 30.375 24.75H5.625C5.00368 24.75 4.5 24.2463 4.5 23.625Z"
                fill="white" />
            </svg>

          </button>
        </div>
        <div :class="open ? 'block' : 'hidden'"
          class="responsive-menu w-full flex-grow xl:flex xl:items-center xl:w-auto ">
          <div class="lg:text-base xl:text-lg xl:flex-grow text-center xl:text-right">
            <a href="#programa" @click="toggleMenu"
              class="no-underline block mt-8 xl:mt-0 xl:inline-block  text-white hover:text-[#00A7D0] lg:mr-8 2xl:mr-16">
              PROGRAMA
            </a>
            <a href="#conteudo" @click="toggleMenu"
              class="no-underline block mt-4 xl:mt-0 xl:inline-block  text-white hover:text-[#00A7D0] lg:mr-8 2xl:mr-16">
              CONTEÚDO
            </a>
            <a href="#mentores" @click="toggleMenu"
              class="no-underline block mt-4 xl:mt-0 block  xl:inline-block text-white hover:text-[#00A7D0] lg:mr-8 2xl:mr-16">
              MENTORES
            </a>
            <a href="#faq" @click="toggleMenu"
              class="no-underline block mt-4 xl:mt-0 xl:inline-block text-white hover:text-[#00A7D0] mb-8 xl:mr-16 lg:mr-8 lg:mb-0">
              FAQ
            </a>
          </div>
          <div class="text-center mt-8 xl:mt-0">
            <a href="https://plataforma.blocktrends.com.br/" target="_blank"
              class="entrar-button-plataforma mr-5 xl:mr-8 text-cyan-500 text-base xl:text-lg 2xl:text-xl font-bold leading-7 whitespace-nowrap justify-center items-stretch rounded border-[color:var(--Cor-Primria-Ancord,#00A7D0)] grow px-5 2xl:px-8 py-3 border-2 border-solid max-md:px-5">
              ENTRAR
            </a>

            <!--<a @click="showLightBox();" 
              class="text-slate-950 cursor-pointer text-base xl:text-lg 2xl:text-xl font-bold leading-7  whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3.5 max-md:px-5">
              MATRICULE-SE
            </a>-->

            <a href="https://checkout.blocktrends.com.br/checkout/btancord-cca" target="_blank"
              class="text-slate-950 cursor-pointer text-base xl:text-lg 2xl:text-xl font-bold leading-7  whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3.5 max-md:px-5">
              MATRICULE-SE
            </a>

            

          </div>
        </div>
      </nav>

      
      <div class="mt-10 flex items-center justify-center faixa-bf py-3 text-lg xl:tracking-[0.2em]  2xl:tracking-[0.38em] border-y-2 text-lg uppercase text-center  border-[#00A7D0] ">
      <span class="text-white font-light">Black Friday</span>
       <span class=" text-[#00A7D0] items-center">
       <span class="mx-3 text-4xl">•</span> 60% OFF <span class="mx-3 text-4xl">•</span>
       </span>
       <span class="text-white hidden sm:inline font-light">PROGRAMA CCA</span>
       <span class=" text-[#00A7D0] items-center hidden sm:inline">
       <span class="mx-3 text-4xl">•</span> 60% OFF <span class="mx-3 text-4xl">•</span>
       </span>
       <span class="text-white hidden sm:inline font-light">Black Friday</span>
        <span class=" text-[#00A7D0] items-center hidden sm:inline">
       <span class="mx-3 text-4xl">•</span> 60% OFF <span class="mx-3 text-4xl">•</span>
       </span>
       <span class="text-white hidden sm:inline font-light">PROGRAMA CCA</span>
      </div>


    </div>

    <div>
      <div class="xl:container mx-auto">

        <div class="xl:flex mt-10 sm:mt-16">
          <div class="flex-1 xl:pr-20 text-white">

            <div class="flex flex-col justify-start items-center xl:items-start relative gap-9">
              <div class="px-5 sm:px-0 flex flex-col justify-start items-center xl:items-start gap-10">
                <div class="flex flex-col justify-start items-center xl:items-start   relative gap-7 xl:gap-12">
             <div class="sm:flex text-center sm:text-left">
                  <img src="../assets/imgs/ancord-bt-topo.svg" class="inline-block" alt="Logo Ancord Blocktrends" />
   <img src="../assets/imgs/button-bf.svg" class="hidden mt-5 sm:mt-0 sm:ml-14 button-bf"
              alt="Logo Ancord" />
</div>
                  <div class="flex flex-col justify-start items-center xl:items-start     relative gap-6">
                    <div class="flex flex-col justify-start items-center xl:items-start    relative gap-2">
                      <p
                        class=" text-center xl:text-left   text-3xl md:text-5xl 2xl:text-5xl font-bold leading-tight md:leading-tight 2xl:leading-tight ">
                        <span class="   font-bold text-left text-[#00a7d0]">CCA</span><span
                          class="    font-bold text-left text-white">
                          - A 1ª Certificação<br />Cripto do Mercado <span class="mobileextra"><br /></span>Brasileiro</span>
                      </p>
                    </div>
                    <div
                      class="whitespace-normal block px-4 xl:px-0  font-light hidebrs   opacity-[0.87] text-xl 2xl:text-2xl text-center sm:text-left text-white">
                      Domine
                      a blockchain e lidere a <br class="brmobile" /> revolução cripto<br />
                      com o Programa<br class="brmobile" /> CCA, desenvolvido pelo<br />
                      <strong class="   opacity-[0.87] font-extrabold text-left text-white">
                        BlockTrends</strong><br class="brmobile" />
                      e certificado pela ANCORD.
                    </div>
                  </div>
                </div>
                <!--
                <a @click="showLightBox()" 
                  class="flex main-button-bf cursor-pointer justify-center mx-auto xl:mx-0 items-center   w-[521px] max-w-max sm:max-w-none relative gap-2 pl-[42px] pr-[46px] py-5 transition-all rounded bg-[#00a7d0] hover:bg-[#0A6F94]">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="  w-5 h-5 relative" preserveAspectRatio="xMidYMid meet">
                    <path d="M4.66699 10.072H16.3337" stroke="#010918" stroke-width="1.75" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M10.5 4.23862L16.3333 10.072L10.5 15.9053" stroke="#010918" stroke-width="1.75"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="  text-xl font-bold text-left text-[#010918]">
                    MATRICULE-SE AGORA <span class="hidden button-bf">COM 60% OFF</span>
                  </p>
                </a>-->

                <a href="https://checkout.blocktrends.com.br/checkout/btancord-cca" target="_blank"
                  class="flex main-button-bf cursor-pointer justify-center mx-auto xl:mx-0 items-center   w-[521px] max-w-max sm:max-w-none relative gap-2 pl-[42px] pr-[46px] py-5 transition-all rounded bg-[#00a7d0] hover:bg-[#0A6F94]">
                  <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                    class="  w-5 h-5 relative" preserveAspectRatio="xMidYMid meet">
                    <path d="M4.66699 10.072H16.3337" stroke="#010918" stroke-width="1.75" stroke-linecap="round"
                      stroke-linejoin="round"></path>
                    <path d="M10.5 4.23862L16.3333 10.072L10.5 15.9053" stroke="#010918" stroke-width="1.75"
                      stroke-linecap="round" stroke-linejoin="round"></path>
                  </svg>
                  <p class="  text-xl font-bold text-left text-[#010918]">
                    MATRICULE-SE AGORA <span class="hidden button-bf">COM 60% OFF</span>
                  </p>
                </a>

                


              </div>
              <a href="#depoimentos" class="sm:flex text-center flex-row-reverse sm:text-left sm:items-center text-2xl ">
                 <span class="sm:pl-2 block font-bold text-center sm:text-left mb-3 sm:mb-0">Quero ver a opinião de<br class="brmobile" /> outros alunos antes</span>
             
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="  w-12 h-12 relative inline-block" preserveAspectRatio="xMidYMid meet">
                  <path d="M14 26.072L24 36.072L34 26.072" stroke="#00A7D0" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path d="M14 12.072L24 22.072L34 12.072" stroke="#00A7D0" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>

                </svg>
              </a>
            </div>

          </div>

          <div class="relative mt-36 2xl:mt-20 inline-flex xl:block">
            <div class="absolute -mt-[120px] md:-mt-[90px] items-center justify-center md:justify-between flex-wrap md:flex-nowrap flex gap-2 w-full">
              <div>
                  <h2
    class=" py-0 w-full text-xl 2xl:text-2xl tracking-tight text-white max-w-[1200px] max-md:text-2xl max-sm:text-xl max-sm:text-center"
  >
    É um Assessor de Investimentos?
  </h2>
              </div>
              <div class="mt-2 md:mt-0">
                <a href="https://wa.me/message/W2USYZZK75FMC1#"
                target="_blank"
                    class=" self-stretch hover:bg-[#05D361] hover:text-[#000] text-[#05D361] border-[#05D361] px-3 2xl:px-5 py-3 text-lg 2xl:text-xl font-bold tracking-normal rounded-lg border-2  border-solid"
                    aria-label="Resgatar desconto"
                >
                    Clique para resgatar seu desconto
                </a>
              </div>
            </div>

            <iframe :class="youtube ? 'showVideo' : '' " class="mt-36 sm:mt-10 iframe-video" width="756" height="425"
              src="https://www.youtube.com/embed/7QA-3JxoXU0?si=i87TjIgS7UeP3uxU" title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
              <a :class="youtube ? 'showVideo' : '' "
                class="sm:hidden absolute flex sm:block w-full sm:w-auto text-center justify-center sm:right-3 top-[25px] md:top-0">
                <img src="../assets/imgs/certificado-cca.svg" class="inline-block" alt="Certificado Cca" />
              </a>
            <div class="gif-video  md:block hidden" :class="youtube ? 'hideMoldura' : '' " >
              <a
                class="absolute flex sm:block w-full sm:w-auto text-center justify-center sm:right-3 -top-[40px] sm:top-0">
                <img src="../assets/imgs/certificado-cca.svg" alt="Certificado Cca" />
              </a>
              <a  @click="toggleVideo"
                class="absolute flex sm:block w-full sm:w-auto  text-center justify-center sm:right-0 sm:inline-table top-24 sm:top-1/2 -mt-[83px] sm:left-0  m-auto">
                <img src="../assets/imgs/aperte-play.svg" class="max-w-[150px] sm:max-w-none" alt="Certificado Cca" />
              </a>
              <video  @click="toggleVideo" width="756px" height="456px" loop="true" autoplay="autoplay" class="mt-24 sm:mt-0 border border-white rounded "
                muted>
                <source src="../assets/video/intro-ancord.webm" type="video/webm" />

                <source src="../assets/video/intro-ancord.mp4" type="video/mp4" />
              </video>
            </div>

          </div>


        </div>
      </div>
    </div>

  </div>
</template>

<script>
import Lightbox from '../components/lightbox.vue'



export default {
  components: {
    Lightbox
  },
  data() {
    return {
      open: false,
      youtube: false,
      isHidden: true
    }
  },
  mounted() {
  //if (window.location.search.includes('bf')) {
    //document.body.classList.add('bf');
  //};
},
  methods: {
    showLightBox() {
      this.isHidden = !this.isHidden;

      if(this.isHidden === false) {
        gtag('event', 'lightbox_open', {
          event_category: 'UI Interaction',
          event_label: 'Lightbox Opened',
          value: 1, // Optional, use a numeric value if it makes sense
        });
      }

      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    toggleMenu() {

      if (window.innerWidth < 1280) {
        this.open = !this.open
      }

    },
    toggleVideo() {
      console.log('click')
      this.youtube = true
    }
  }
}
</script>
