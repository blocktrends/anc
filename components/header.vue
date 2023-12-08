<template>
  
    <div class="bg-top pb-24">
      <div class="pt-16  top-0 border-b border-[#00A7D0] pb-10">
        <nav class="flex items-center justify-between flex-wrap xl:container mx-auto">
          <div class="flex items-center flex-no-shrink text-white">
            <a href="/">
              <img src="../assets/imgs/certificacao-criptoativos-ancord.svg" class="max-w-[260px] sm:max-w-none" alt="Logo Ancord" />
            </a>
          </div>
          <div class="block lg:hidden">
            <button @click="toggleMenu" class="flex items-center text-white">
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 13.5C4.5 12.8787 5.00368 12.375 5.625 12.375H30.375C30.9963 12.375 31.5 12.8787 31.5 13.5C31.5 14.1213 30.9963 14.625 30.375 14.625H5.625C5.00368 14.625 4.5 14.1213 4.5 13.5ZM4.5 23.625C4.5 23.0037 5.00368 22.5 5.625 22.5H30.375C30.9963 22.5 31.5 23.0037 31.5 23.625C31.5 24.2463 30.9963 24.75 30.375 24.75H5.625C5.00368 24.75 4.5 24.2463 4.5 23.625Z" fill="white"/>
</svg>

            </button>
          </div>
          <div :class="open ? 'block' : 'hidden'"
            class="responsive-menu w-full flex-grow lg:flex lg:items-center lg:w-auto ">
            <div class="lg:text-base xl:text-lg lg:flex-grow text-center lg:text-right">
              <a href="#programa" @click="toggleMenu"
                class="no-underline block mt-8 lg:mt-0 lg:inline-block  text-white hover:text-[#00A7D0] lg:mr-8 xl:mr-16">
                PROGRAMA
              </a>
              <a href="#conteudo" @click="toggleMenu"
                class="no-underline block mt-4 lg:mt-0 lg:inline-block  text-white hover:text-[#00A7D0] lg:mr-8 xl:mr-16">
                CONTEÚDO
              </a>
              <a href="#mentores" @click="toggleMenu"
                class="no-underline block mt-4 lg:mt-0 block  lg:inline-block text-white hover:text-[#00A7D0] lg:mr-8 xl:mr-16">
                MENTORES
              </a>
              <a href="#faq" @click="toggleMenu"
                class="no-underline block mt-4 lg:mt-0 lg:inline-block text-white hover:text-[#00A7D0] mb-8 xl:mr-16 lg:mr-8 lg:mb-0">
                FAQ
              </a>
            </div>
            <div class="text-center">
              <!--<a href="#"
                        class="no-underline uppercase green-border green-text font-bold inline-block text-xs px-7 py-4 mr-5 leading-none border rounded-3xl thin-buttom-green">
                        já sou aluno
                    </a>-->
              <a href="#matricule"
                class="text-slate-950 text-xl font-bold leading-7  whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#038BB7] self-stretch grow px-8 xl:px-14 py-3.5 max-md:px-5">
                MATRICULE-SE
                  </a>

            </div>
          </div>
        </nav>
      </div>

      <div>
        <div class="xl:container mx-auto">

          <div class="lg:flex mt-16">
            <div class="flex-1 sm:pr-20 text-white">

              <div class="flex flex-col justify-start items-center sm:items-start relative sm:gap-9">
                <div class="flex flex-col justify-start items-center sm:items-start   gap-10">
                  <div class="flex flex-col justify-start items-center sm:items-start   relative sm:gap-12">
                    <img src="../assets/imgs/ancord-bt-topo.svg" alt="Logo Ancord Blocktrends" />
                    
                    <div
                      class="flex flex-col justify-start items-center sm:items-start     relative sm:gap-6">
                      <div
                        class="flex flex-col justify-start items-center sm:items-start    relative gap-2">
                        <p class=" text-center sm:text-left   text-4xl md:text-5xl 2xl:text-6xl font-bold leading-tight md:leading-tight 2xl:leading-tight ">
                          <span
                            class="   font-bold text-left text-[#00a7d0]">CCA</span><span
                            class="    font-bold text-left text-white">
                            - A 1ª Certificação<br />Cripto da ANCORD</span>
                        </p>
                      </div>
                      <p class=" px-4 sm:px-0  font-light hidebrs   opacity-[0.87] text-xl 2xl:text-2xl text-center sm:text-left text-white">
                        <span
                          class="   opacity-[0.87] text-left text-white">Domine
                          a blockchain e lidere a revolução cripto<br />
                          com o Programa CCA, desenvolvido pelo<br /></span>
                          <span
                          class="   opacity-[0.87] font-extrabold text-left text-white">
                          BlockTrends</span><span
                          class="   opacity-[0.87]  text-left text-white">
                          e certificado pela ANCORD.</span>
                      </p>
                    </div>
                  </div>
                  <a href="#matricule"
                    class="flex justify-center mx-auto xl:mx-0 items-center   w-[521px] max-w-max sm:max-w-none relative gap-2 pl-[42px] pr-[46px] py-5 transition-all rounded bg-[#00a7d0] hover:bg-[#038BB7]">
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
              <a class="absolute right-3 top-0">
                <img src="../assets/imgs/certificado-cca.svg" alt="Certificado Cca" />
              </a>
              <a href="#" class="absolute right-0 inline-table top-0 left-0 bottom-0 m-auto">
                <img src="../assets/imgs/aperte-play.svg" alt="Certificado Cca" />
              </a>
              <video width="756px" loop="true" autoplay="autoplay" class="border border-white rounded " muted>
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

      if (window.innerWidth < 1024) {
        this.open = !this.open
      }

    }
  }
}
</script>