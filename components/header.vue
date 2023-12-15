<template>
  
    <div class="bg-top pb-14 sm:pb-24">
      <div class="pt-16  top-0 border-b border-[#00A7D0] pb-10">
        <nav class="flex items-center justify-between flex-wrap xl:container mx-auto">
          <div class="flex items-center flex-no-shrink text-white">
            <a href="/">
              <img src="../assets/imgs/certificacao-criptoativos-ancord.svg" class="max-w-[260px] sm:max-w-none" alt="Logo Ancord" />
            </a>
          </div>
          <div class="block xl:hidden">
            <button @click="toggleMenu" class="flex items-center text-white">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 13.5C4.5 12.8787 5.00368 12.375 5.625 12.375H30.375C30.9963 12.375 31.5 12.8787 31.5 13.5C31.5 14.1213 30.9963 14.625 30.375 14.625H5.625C5.00368 14.625 4.5 14.1213 4.5 13.5ZM4.5 23.625C4.5 23.0037 5.00368 22.5 5.625 22.5H30.375C30.9963 22.5 31.5 23.0037 31.5 23.625C31.5 24.2463 30.9963 24.75 30.375 24.75H5.625C5.00368 24.75 4.5 24.2463 4.5 23.625Z" fill="white"/>
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
                        class="mr-5 xl:mr-8 text-cyan-500 text-base xl:text-lg 2xl:text-xl font-bold leading-7 whitespace-nowrap justify-center items-stretch rounded border-[color:var(--Cor-Primria-Ancord,#00A7D0)] grow px-5 2xl:px-8 py-3 border-2 border-solid max-md:px-5">
                        FAZER LOGIN
                    </a>
              <a href="https://clkdmg.site/pay/programa-cca" target="_blank"
                class="text-slate-950 text-base xl:text-lg 2xl:text-xl font-bold leading-7  whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3.5 max-md:px-5">
                MATRICULE-SE
                  </a>

            </div>
          </div>
        </nav>
      </div>

      <div>
        <div class="xl:container mx-auto">

          <div class="lg:flex mt-10 sm:mt-16">
            <div class="flex-1 sm:pr-20 text-white">

              <div class="flex flex-col justify-start items-center sm:items-start relative gap-9">
                <div class="px-5 sm:px-0 flex flex-col justify-start items-center sm:items-start gap-10">
                  <div class="flex flex-col justify-start items-center sm:items-start   relative gap-7 sm:gap-12">
                    <img src="../assets/imgs/ancord-bt-topo.svg" alt="Logo Ancord Blocktrends" />
                    
                    <div
                      class="flex flex-col justify-start items-center sm:items-start     relative gap-6">
                      <div
                        class="flex flex-col justify-start items-center sm:items-start    relative gap-2">
                        <p class=" text-center sm:text-left   text-3xl md:text-5xl 2xl:text-6xl font-bold leading-tight md:leading-tight 2xl:leading-tight ">
                          <span
                            class="   font-bold text-left text-[#00a7d0]">CCA</span><span
                            class="    font-bold text-left text-white">
                            - A 1ª Certificação<br />Cripto da ANCORD</span>
                        </p>
                      </div>
                      <div class="whitespace-normal block px-4 sm:px-0  font-light hidebrs   opacity-[0.87] text-xl 2xl:text-2xl text-center sm:text-left text-white">
                        Domine
                          a blockchain e lidere a <br class="brmobile" /> revolução cripto<br />
                          com o Programa<br class="brmobile" /> CCA, desenvolvido pelo<br />
                          <strong
                          class="   opacity-[0.87] font-extrabold text-left text-white">
                          BlockTrends</strong><br class="brmobile" /> 
                          e certificado pela ANCORD.
                      </div>
                    </div>
                  </div>
                  <a href="https://clkdmg.site/pay/programa-cca" target="_blank"
                    class="flex justify-center mx-auto xl:mx-0 items-center   w-[521px] max-w-max sm:max-w-none relative gap-2 pl-[42px] pr-[46px] py-5 transition-all rounded bg-[#00a7d0] hover:bg-[#0A6F94]">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg"
                      class="  w-5 h-5 relative" preserveAspectRatio="xMidYMid meet">
                      <path d="M4.66699 10.072H16.3337" stroke="#010918" stroke-width="1.75" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                      <path d="M10.5 4.23862L16.3333 10.072L10.5 15.9053" stroke="#010918" stroke-width="1.75"
                        stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                    <p class="  text-xl font-bold text-left text-[#010918]">
                      MATRICULE-SE AGORA
                    </p>
                  </a>
                </div>
                <a href="#programa">
                <svg width="48" height="49" viewBox="0 0 48 49" fill="none" xmlns="http://www.w3.org/2000/svg"
                  class="  w-12 h-12 relative" preserveAspectRatio="xMidYMid meet">
                  <path d="M14 26.072L24 36.072L34 26.072" stroke="#00A7D0" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                  <path d="M14 12.072L24 22.072L34 12.072" stroke="#00A7D0" stroke-width="4" stroke-linecap="round"
                    stroke-linejoin="round"></path>
                </svg>
              </a>
              </div>

            </div>

            <div class="relative mt-20 inline-flex xl:block">
              <a class="absolute flex sm:block w-full sm:w-auto text-center justify-center sm:right-3 -top-[40px] sm:top-0">
                <img src="../assets/imgs/certificado-cca.svg" alt="Certificado Cca" />
              </a>
              <a href="#" class="absolute flex sm:block w-full sm:w-auto  text-center justify-center sm:right-0 sm:inline-table top-24 sm:top-0 sm:left-0 bottom-0 m-auto">
                <img src="../assets/imgs/aperte-play.svg" class="max-w-[150px] sm:max-w-none" alt="Certificado Cca" />
              </a>
              <video width="756px" loop="true" autoplay="autoplay" class="mt-24 sm:mt-0 border border-white rounded " muted>
                <source src="../assets/video/intro-ancord.webm" type="video/webm" />

                <source src="../assets/video/intro-ancord.mp4" type="video/mp4" />
              </video>
            </div>


          </div>
        </div>
      </div>

    </div>


  
</template>

<script>


export default {
  data() {
    return {
      open: false,
    }
  },
  methods: {
    toggleMenu() {

      if (window.innerWidth < 1280) {
        this.open = !this.open
      }

    }
  }
}
</script>