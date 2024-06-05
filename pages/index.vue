<template>
  <div>
    <Head>

      <Title>Programa Certificação Criptoativos ANCORD</Title>
<Meta name="og:image" content="/ancord-share.jpg" />
<Meta name="twitter:image" content="/ancord-share.jpg" />
<Meta name="twitter:card" content="summary_large_image" />
<Meta name="title" content="Programa Certificação Criptoativos ANCORD" />
<Meta name="twitter:title" content="Programa Certificação Criptoativos ANCORD" />
<Meta name="description" content="Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD." />
    </Head>
  </div>
<div :class="{ hidden: isHidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showLightBox()" >
    </div>
    <Lightbox />
    
  </div>

  <div :class="{ hidden: isTermosHidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showTermos()" >
    </div>
    <Termos />
    
  </div>

  <div :class="{ hidden: isPoliticasHidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showPoliticas()" >
    </div>
    <Politicas />
    
  </div>

  <div class="bg-black">

    <Head>
      <Title>Programa Certificação Criptoativos ANCORD</Title>
      <!--

          <Meta hid="og:image" name="og:image" content="https://blocktrends.com.br/wp-content/uploads/2023/07/cardpreview-generica.png" />
            <Meta hid="twitter:image" name="twitter:image" content="https://blocktrends.com.br/wp-content/uploads/2023/07/cardpreview-generica.png" />
          -->
    </Head>
    <Header />

    <Hero />
    <a id="programa" style="position: absolute;"></a>
    <Programa />
    <div class="parceria pb-20" id="sobre">
      <div class="xl:container lg:flex justify-center mx-auto">
        <div class="flex xl:w-[1276px] max-w-full flex-col items-stretch my-12 max-md:my-10">
          <div
            class="text-cyan-500 mt-12 text-xs font-bold inline-block whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--Cor-Primria-Ancord,#00A7D0)] bg-slate-950 self-center p-2 py-1 sm:p-3 border-solid max-md:px-5">
            SOBRE NÓS
          </div>
          <div class="flex justify-center mt-14">
            <img src="../assets/imgs/ancord-blocktrends-sobre.svg" alt="Logo Ancord Blocktrends" />
          </div>


          <div
            class="text-cyan-500 text-center text-5xl font-bold leading-[58px] self-center max-w-[907px] mt-12 max-md:max-w-full max-md:text-4xl max-md:leading-[54px] max-md:mt-10">
            <span class="text-white">Uma parceria que tem como objetivo </span>
            <span class="text-cyan-500">impulsionar</span>
            <span class="text-white"> o seu desenvolvimento</span>
          </div>
          <div class=" mt-16 max-lg:max-w-full max-lg:mt-10">
            <div class="gap-1 flex max-lg:flex-col max-lg:items-stretch max-md:gap-0">
              <div class="flex bg-ancord flex-col items-stretch w-6/12 max-lg:w-full max-lg:ml-0">
                <div
                  class="rounded border-[color:var(--Cor-Primria-Ancord,#00A7D0)] flex grow flex-col items-center w-full px-20 py-12 border-[1.5px] border-solid max-md:max-w-full max-md:mt-6 max-md:px-5"
                  style="padding: 3rem 40px 5rem;">
                  <a href="https://www.ancord.org.br/" target="_blank">
                    <img
                      class="aspect-[2.84] object-contain object-center w-[142px] fill-white overflow-hidden max-w-full mt-8"
                      src="../assets/imgs/ancord-logo.svg" alt="Logo Ancord" />

                  </a>
                  <div class="bg-white self-stretch shrink-0 h-px mt-16 max-md:max-w-full max-md:mt-10"></div>
                  <div
                    class="text-[#00A7D0] text-center text-3xl lg:text-5xl font-extrabold leading-9 whitespace-nowrap mt-8  max-md:leading-8">
                    +50 anos de atuação
                  </div>
                  <div class="bg-white self-stretch shrink-0 h-px mt-9 max-md:max-w-full"></div>
                  <div
                    class="text-white text-justify text-lg leading-7 tracking-normal self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                
                    Com mais de 50 anos de atuação, a <strong>ANCORD</strong> (Associação Nacional das Corretoras e Distribuidoras de Títulos e Valores Mobiliários, Câmbio e Mercadorias) se consolidou como a mais representativa Associação da Indústria de Intermediação. Além disso, é reconhecida pela qualidade de suas iniciativas educacionais e se tornou uma referência, como a mais importante Entidade Certificadora e Credenciadora do Mercado.

                  </div>
                  <!--
                  <a href="#" target="_blank" class="items-stretch flex gap-2 mt-16 mb-3.5 max-md:mt-10">
                    <div class="text-[#00A7D0] text-xl font-bold leading-7 grow whitespace-nowrap">
                      Institucional ANCORD
                    </div>
                   
<svg class="mt-0.5" width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 19.5L20 4.5M20 4.5L8.75 4.5M20 4.5V15.75" stroke="#00A7D0" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</a>-->
                </div>
              </div>
              <div class="flex mt-10 lg:mt-0 bg-bt flex-col items-stretch w-6/12 ml-5 max-lg:w-full max-lg:ml-0">
                <div style="padding: 3rem 46px 5rem;"
                  class="rounded border-[color:var(--Cor-Primria-Ancord,#00A7D0)] flex grow flex-col items-center w-full px-20 py-12 border-[1.5px] border-solid max-md:max-w-full max-md:mt-6 max-md:px-5">
                  <a href="https://blocktrends.com.br/" target="_blank">
                    <img src="../assets/imgs/bt-logo.svg" alt="Logo Blocktrends"
                      class="aspect-[2.84] object-contain object-center w-[142px] fill-white overflow-hidden max-w-full mt-8" />
                  </a>
                  <div class="bg-white self-stretch shrink-0 h-px mt-16 max-md:max-w-full max-md:mt-10"></div>
                  <div
                    class="text-white text-center text-3xl lg:text-5xl font-extrabold leading-9 whitespace-nowrap mt-8 max-md:text-4xl max-md:leading-8">
                    +27 mil alunos
                  </div>
                  <div class="bg-white self-stretch shrink-0 h-px mt-9 max-md:max-w-full"></div>
                  <div
                    class="text-white text-justify text-lg leading-7 tracking-normal self-stretch mt-14 max-md:max-w-full max-md:mt-10">
                    Formando +27 mil alunos em cursos de Web3, o <strong>BlockTrends</strong> é uma EdTech que busca
                    acelerar a educação sobre criptoativos no Brasil. Reduzindo o gap educacional no setor, o BlockTrends
                    é responsável pelo maior curso da história da bolsa de valores (B3) e pela 1ª Pós-Graduação em
                    desenvolvimento blockchain do país, além de possuir um portal de notícias sobre cripto que impacta
                    todo mês uma audiência de +1 milhão de pessoas.
                  </div>
                  <!--
                  <a href="https://blocktrends.com.br/" target="_blank" class="items-stretch flex gap-2 mt-16 mb-3.5 max-md:mt-10">
                    <div class="text-white text-xl font-bold leading-7 grow whitespace-nowrap">
                      Institucional BlockTrends
                    </div>
                   
<svg width="24" class="mt-0.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</a>-->
                </div>
              </div>
            </div>
          </div>


          <div class="gap-1 flex max-lg:flex-col max-lg:items-stretch max-md:gap-0 ">
            
            <div
              class="rounded w-6/12 max-lg:w-full max-lg:ml-0 bg-banca border-[color:var(--Cor-Primria-Ancord,#00A7D0)] flex flex-col  mt-6 px-5  py-9 border-[1.5px] border-solid items-center justify-center max-md:max-w-full max-md:px-5">
              
              <div class="flex  flex-1 max-w-full items-stretch   max-sm:flex-wrap ">
                <div class="text-white pr-5 uppercase lg:text-xl xl:pl-16 leading-8 self-center grow my-auto">
                  Aplicação da Prova:
                </div>
                <div class="flex-1 text-right xl:pr-7">
                <img class="max-w-[110px] sm:max-w-none inline-block"
                          src="../assets/imgs/fgv.svg" alt="FGV" />
            
                </div>

                <!--<div class="items-stretch self-center flex gap-2 lg:pr-[90px] xl:pr-[140px] my-auto">
                  <div class="text-white text-xl font-bold leading-7 grow whitespace-nowrap">
                    Institucional FGV
                  </div>
                  <svg   width="24" class="mt-0.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
                  </div>-->
              </div>

            </div>

            <div
              class="rounded w-6/12 ml-5 max-lg:w-full max-lg:ml-0 bg-banca border-[color:var(--Cor-Primria-Ancord,#00A7D0)] flex flex-col  mt-6 px-5  py-9 border-[1.5px] border-solid items-center justify-center max-md:max-w-full max-md:px-5">
              
              <div class="flex  flex-1 max-w-full items-stretch   max-sm:flex-wrap ">
                <div class="text-white pr-5 uppercase lg:text-xl xl:pl-16 leading-8 self-center grow my-auto">
                  Apoio:
                </div>
                <div class="flex-1 text-right xl:pr-7">
                <img class="max-w-[110px] sm:max-w-none inline-block"
                          src="../assets/imgs/abcripto.svg" alt="FGV" />
            
                </div>

                <!--<div class="items-stretch self-center flex gap-2 lg:pr-[90px] xl:pr-[140px] my-auto">
                  <div class="text-white text-xl font-bold leading-7 grow whitespace-nowrap">
                    Institucional FGV
                  </div>
                  <svg   width="24" class="mt-0.5" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M4.5 19.5L19.5 4.5M19.5 4.5L8.25 4.5M19.5 4.5V15.75" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
                  </div>-->
              </div>
              
            </div>
            </div>


        </div>
      </div>

    </div>


    <div class="bg-white">
      <Aulas />
    </div>


    <div class="xl:container mx-auto  ">
      <div
        class="-mt-20 lg:-mt-28 justify-between items-center rounded border border-[color:var(--athens-gray-600,#6775A9)] bg-neutral-900 self-center z-[1] lg:flex w-full max-w-screen-2xl gap-5 px-12 py-11 border-solid max-md:max-w-full max-md:flex-wrap max-md:px-5">
        <div class="flex grow basis-[0%] flex-col items-start max-md:max-w-full">
          <div class="text-center sm:text-left mx-auto sm:mx-0">


            <div
              class="inline-block text-cyan-500 text-xs font-bold whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--Cor-Primria-Ancord,#00A7D0)] bg-black px-5 py-2 border-solid">
              PROGRAMA CCA
            </div>
          </div>
          <div
            class="text-center sm:text-left text-white lg:leading-tight text-xl hidebrs lg:text-4xl font-light tracking-tighter self-stretch mt-4 max-md:max-w-full">
            Seja um pioneiro no Programa CCA e<br /> torne-se um especialista certificado.
          </div>
        </div>

        <a class="link-blue-rect cursor-pointer" @click="showLightBox()" >
          <svg class="mt-5 sm:mt-10 -ml-5 lg:ml-0 lg:mt-0 max-w-full" width="463" height="68" viewBox="0 0 463 68"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="57" width="406" height="68" rx="4" class="blue-rect transition-all" fill="#00A7D0" />
            <path class="hidden sm:block" d="M6.66699 35H25.3337" stroke="#00A7D0" stroke-width="1.75"
              stroke-linecap="round" stroke-linejoin="round" />
            <path class="hidden sm:block" d="M16 25.6665L25.3333 34.9998L16 44.3332" stroke="#00A7D0" stroke-width="1.75"
              stroke-linecap="round" stroke-linejoin="round" />
            <path
              d="M123.01 41.2C121.663 41.2 120.5 40.8867 119.52 40.26C118.54 39.6333 117.783 38.7533 117.25 37.62C116.723 36.4867 116.46 35.1633 116.46 33.65C116.46 32.13 116.723 30.8267 117.25 29.74C117.777 28.6467 118.53 27.8067 119.51 27.22C120.49 26.6333 121.657 26.34 123.01 26.34C124.097 26.34 125.063 26.56 125.91 27C126.763 27.4333 127.45 28.0267 127.97 28.78C128.497 29.5333 128.807 30.3833 128.9 31.33H125.84C125.747 30.83 125.577 30.3867 125.33 30C125.083 29.6067 124.76 29.3 124.36 29.08C123.96 28.8533 123.48 28.74 122.92 28.74C122.247 28.74 121.667 28.9033 121.18 29.23C120.693 29.5567 120.32 30.0833 120.06 30.81C119.8 31.5367 119.67 32.4967 119.67 33.69C119.67 35.49 119.957 36.7933 120.53 37.6C121.11 38.4 121.907 38.8 122.92 38.8C123.48 38.8 123.96 38.6733 124.36 38.42C124.76 38.16 125.083 37.82 125.33 37.4C125.577 36.9733 125.747 36.5067 125.84 36H128.9C128.813 36.6867 128.647 37.3433 128.4 37.97C128.153 38.59 127.803 39.1433 127.35 39.63C126.897 40.1167 126.313 40.5 125.6 40.78C124.887 41.06 124.023 41.2 123.01 41.2ZM137.485 41.2C136.119 41.2 134.935 40.9033 133.935 40.31C132.942 39.71 132.172 38.86 131.625 37.76C131.085 36.6533 130.815 35.3333 130.815 33.8C130.815 32.26 131.089 30.9333 131.635 29.82C132.189 28.7067 132.965 27.85 133.965 27.25C134.965 26.6433 136.139 26.34 137.485 26.34C138.825 26.34 139.992 26.64 140.985 27.24C141.979 27.84 142.745 28.6967 143.285 29.81C143.832 30.9233 144.105 32.2533 144.105 33.8C144.105 35.3267 143.835 36.6433 143.295 37.75C142.762 38.8567 141.999 39.71 141.005 40.31C140.012 40.9033 138.839 41.2 137.485 41.2ZM137.485 38.8C138.192 38.8 138.802 38.6333 139.315 38.3C139.835 37.96 140.235 37.4267 140.515 36.7C140.795 35.9667 140.935 35.0133 140.935 33.84C140.935 32.6333 140.792 31.6567 140.505 30.91C140.225 30.1633 139.825 29.6167 139.305 29.27C138.792 28.9167 138.185 28.74 137.485 28.74C136.785 28.74 136.175 28.9167 135.655 29.27C135.135 29.6167 134.732 30.1667 134.445 30.92C134.159 31.6667 134.015 32.64 134.015 33.84C134.015 35.02 134.159 35.9733 134.445 36.7C134.732 37.4267 135.135 37.96 135.655 38.3C136.175 38.6333 136.785 38.8 137.485 38.8ZM146.69 41V26.54H150.93L154.24 36.85L157.58 26.54H161.81V41H158.86V29.94L155.38 41H153.09L149.63 29.99V41H146.69ZM165.05 41V26.54H174.98L174.97 29H167.98V32.51H174.05V34.92H167.96V38.51L175.08 38.52V41H165.05ZM183.557 41.2C182.21 41.2 181.047 40.8867 180.067 40.26C179.087 39.6333 178.33 38.7533 177.797 37.62C177.27 36.4867 177.007 35.1633 177.007 33.65C177.007 32.13 177.27 30.8267 177.797 29.74C178.324 28.6467 179.077 27.8067 180.057 27.22C181.037 26.6333 182.204 26.34 183.557 26.34C184.644 26.34 185.61 26.56 186.457 27C187.31 27.4333 187.997 28.0267 188.517 28.78C189.044 29.5333 189.354 30.3833 189.447 31.33H186.387C186.294 30.83 186.124 30.3867 185.877 30C185.63 29.6067 185.307 29.3 184.907 29.08C184.507 28.8533 184.027 28.74 183.467 28.74C182.794 28.74 182.214 28.9033 181.727 29.23C181.24 29.5567 180.867 30.0833 180.607 30.81C180.347 31.5367 180.217 32.4967 180.217 33.69C180.217 35.49 180.504 36.7933 181.077 37.6C181.657 38.4 182.454 38.8 183.467 38.8C184.027 38.8 184.507 38.6733 184.907 38.42C185.307 38.16 185.63 37.82 185.877 37.4C186.124 36.9733 186.294 36.5067 186.387 36H189.447C189.36 36.6867 189.194 37.3433 188.947 37.97C188.7 38.59 188.35 39.1433 187.897 39.63C187.444 40.1167 186.86 40.5 186.147 40.78C185.434 41.06 184.57 41.2 183.557 41.2ZM192.022 41V26.54H201.952L201.942 29H194.952V32.51H201.022V34.92H194.932V38.51L202.052 38.52V41H192.022ZM208.159 41L213.329 26.54H216.419L221.589 41H218.679L217.499 37.65H212.289L211.089 41H208.159ZM212.949 35.1H216.789L214.879 29.35L212.949 35.1ZM228.272 41V26.54H238.202L238.192 29H231.202V32.51H237.272V34.92H231.182V38.51L238.302 38.52V41H228.272ZM246.524 41.2C245.804 41.2 245.101 41.11 244.414 40.93C243.728 40.75 243.101 40.48 242.534 40.12C241.968 39.76 241.501 39.31 241.134 38.77C240.774 38.23 240.558 37.5967 240.484 36.87H243.474C243.574 37.31 243.764 37.68 244.044 37.98C244.331 38.28 244.698 38.51 245.144 38.67C245.598 38.83 246.114 38.91 246.694 38.91C247.154 38.91 247.591 38.8433 248.004 38.71C248.418 38.5767 248.754 38.3733 249.014 38.1C249.274 37.8267 249.404 37.4833 249.404 37.07C249.404 36.5767 249.224 36.2067 248.864 35.96C248.504 35.7067 248.014 35.5067 247.394 35.36L244.684 34.77C243.918 34.61 243.248 34.3633 242.674 34.03C242.108 33.69 241.671 33.25 241.364 32.71C241.058 32.1633 240.904 31.5 240.904 30.72C240.904 29.82 241.151 29.0433 241.644 28.39C242.144 27.7367 242.821 27.2367 243.674 26.89C244.534 26.5367 245.498 26.36 246.564 26.36C247.771 26.36 248.788 26.5567 249.614 26.95C250.448 27.3367 251.084 27.8633 251.524 28.53C251.964 29.19 252.188 29.9267 252.194 30.74H249.274C249.221 30.24 249.068 29.84 248.814 29.54C248.561 29.2333 248.234 29.0133 247.834 28.88C247.441 28.74 246.991 28.67 246.484 28.67C245.611 28.67 244.974 28.8467 244.574 29.2C244.174 29.5533 243.974 29.9633 243.974 30.43C243.974 30.87 244.124 31.2267 244.424 31.5C244.731 31.7667 245.221 31.97 245.894 32.11L248.404 32.65C249.338 32.83 250.094 33.1167 250.674 33.51C251.254 33.8967 251.678 34.3667 251.944 34.92C252.211 35.4733 252.344 36.0933 252.344 36.78C252.344 37.6533 252.094 38.4233 251.594 39.09C251.101 39.75 250.418 40.2667 249.544 40.64C248.671 41.0133 247.664 41.2 246.524 41.2ZM258.023 41V29.14H253.653V26.54H265.223V29.14H260.953V41H258.023ZM272.998 41.2C271.591 41.2 270.464 40.9667 269.618 40.5C268.771 40.0267 268.158 39.3567 267.778 38.49C267.404 37.6233 267.218 36.59 267.218 35.39V26.54H270.188V35.61C270.188 36.69 270.448 37.48 270.968 37.98C271.488 38.4733 272.164 38.72 272.998 38.72C273.551 38.72 274.041 38.6133 274.468 38.4C274.894 38.18 275.228 37.8433 275.468 37.39C275.714 36.93 275.838 36.3367 275.838 35.61V26.54H278.788V35.49C278.788 36.6567 278.598 37.67 278.218 38.53C277.838 39.3833 277.221 40.0433 276.368 40.51C275.521 40.97 274.398 41.2 272.998 41.2ZM281.69 41V26.54C281.764 26.54 281.967 26.54 282.3 26.54C282.64 26.54 283.037 26.54 283.49 26.54C283.95 26.54 284.407 26.5433 284.86 26.55C285.32 26.55 285.704 26.5533 286.01 26.56C287.764 26.6 289.194 26.9133 290.3 27.5C291.407 28.0867 292.217 28.9067 292.73 29.96C293.25 31.0133 293.51 32.26 293.51 33.7C293.51 35.2 293.237 36.4967 292.69 37.59C292.144 38.6767 291.307 39.5167 290.18 40.11C289.06 40.7033 287.637 41 285.91 41H281.69ZM284.63 38.64H285.97C286.797 38.64 287.547 38.48 288.22 38.16C288.9 37.84 289.444 37.3167 289.85 36.59C290.257 35.8633 290.46 34.8933 290.46 33.68C290.46 32.5533 290.28 31.64 289.92 30.94C289.56 30.2333 289.047 29.7167 288.38 29.39C287.714 29.0633 286.924 28.9 286.01 28.9H284.63V38.64ZM294.37 41L299.54 26.54H302.63L307.8 41H304.89L303.71 37.65H298.5L297.3 41H294.37ZM299.16 35.1H303L301.09 29.35L299.16 35.1ZM309.972 41V26.54H316.072C317.225 26.54 318.168 26.7233 318.902 27.09C319.635 27.4567 320.175 27.9667 320.522 28.62C320.868 29.2667 321.042 30.0133 321.042 30.86C321.042 31.62 320.922 32.2633 320.682 32.79C320.448 33.31 320.138 33.7433 319.752 34.09C319.372 34.4367 318.955 34.72 318.502 34.94L321.192 41H318.162L315.812 35.43H312.882V41H309.972ZM312.882 33.18H315.552C316.332 33.18 316.948 32.97 317.402 32.55C317.862 32.13 318.092 31.59 318.092 30.93C318.092 30.2633 317.872 29.7367 317.432 29.35C316.992 28.9633 316.435 28.77 315.762 28.77H312.882V33.18ZM327.339 41L332.509 26.54H335.599L340.769 41H337.859L336.679 37.65H331.469L330.269 41H327.339ZM332.129 35.1H335.969L334.059 29.35L332.129 35.1ZM348.087 41.2C346.761 41.2 345.607 40.9 344.627 40.3C343.654 39.6933 342.901 38.8367 342.367 37.73C341.841 36.6233 341.577 35.3167 341.577 33.81C341.577 32.2767 341.854 30.9533 342.407 29.84C342.967 28.72 343.747 27.8567 344.747 27.25C345.747 26.6433 346.914 26.34 348.247 26.34C349.107 26.34 349.891 26.4767 350.597 26.75C351.304 27.0233 351.917 27.3967 352.437 27.87C352.964 28.3433 353.374 28.88 353.667 29.48C353.967 30.0733 354.131 30.69 354.157 31.33H351.077C350.991 30.87 350.817 30.45 350.557 30.07C350.304 29.69 349.977 29.3867 349.577 29.16C349.177 28.9267 348.711 28.81 348.177 28.81C347.537 28.81 346.957 28.9767 346.437 29.31C345.917 29.6367 345.507 30.16 345.207 30.88C344.907 31.6 344.757 32.55 344.757 33.73C344.757 34.6833 344.854 35.4767 345.047 36.11C345.247 36.7433 345.514 37.2467 345.847 37.62C346.181 37.9867 346.561 38.2467 346.987 38.4C347.414 38.5533 347.851 38.63 348.297 38.63C348.724 38.63 349.104 38.56 349.437 38.42C349.777 38.2733 350.067 38.0867 350.307 37.86C350.547 37.6333 350.737 37.3867 350.877 37.12C351.017 36.8467 351.107 36.58 351.147 36.32L351.257 35.44H348.267V33.42L354.317 33.45V41H352.327V39.11C352.081 39.4367 351.774 39.7633 351.407 40.09C351.047 40.41 350.597 40.6767 350.057 40.89C349.524 41.0967 348.867 41.2 348.087 41.2ZM363.423 41.2C362.056 41.2 360.873 40.9033 359.873 40.31C358.88 39.71 358.11 38.86 357.563 37.76C357.023 36.6533 356.753 35.3333 356.753 33.8C356.753 32.26 357.026 30.9333 357.573 29.82C358.126 28.7067 358.903 27.85 359.903 27.25C360.903 26.6433 362.076 26.34 363.423 26.34C364.763 26.34 365.93 26.64 366.923 27.24C367.916 27.84 368.683 28.6967 369.223 29.81C369.77 30.9233 370.043 32.2533 370.043 33.8C370.043 35.3267 369.773 36.6433 369.233 37.75C368.7 38.8567 367.936 39.71 366.943 40.31C365.95 40.9033 364.776 41.2 363.423 41.2ZM363.423 38.8C364.13 38.8 364.74 38.6333 365.253 38.3C365.773 37.96 366.173 37.4267 366.453 36.7C366.733 35.9667 366.873 35.0133 366.873 33.84C366.873 32.6333 366.73 31.6567 366.443 30.91C366.163 30.1633 365.763 29.6167 365.243 29.27C364.73 28.9167 364.123 28.74 363.423 28.74C362.723 28.74 362.113 28.9167 361.593 29.27C361.073 29.6167 360.67 30.1667 360.383 30.92C360.096 31.6667 359.953 32.64 359.953 33.84C359.953 35.02 360.096 35.9733 360.383 36.7C360.67 37.4267 361.073 37.96 361.593 38.3C362.113 38.6333 362.723 38.8 363.423 38.8ZM372.628 41V26.54H378.728C379.881 26.54 380.824 26.7233 381.558 27.09C382.291 27.4567 382.831 27.9667 383.178 28.62C383.524 29.2667 383.698 30.0133 383.698 30.86C383.698 31.62 383.578 32.2633 383.338 32.79C383.104 33.31 382.794 33.7433 382.408 34.09C382.028 34.4367 381.611 34.72 381.158 34.94L383.848 41H380.818L378.468 35.43H375.538V41H372.628ZM375.538 33.18H378.208C378.988 33.18 379.604 32.97 380.058 32.55C380.518 32.13 380.748 31.59 380.748 30.93C380.748 30.2633 380.528 29.7367 380.088 29.35C379.648 28.9633 379.091 28.77 378.418 28.77H375.538V33.18ZM385.62 41L390.79 26.54H393.88L399.05 41H396.14L394.96 37.65H389.75L388.55 41H385.62ZM390.41 35.1H394.25L392.34 29.35L390.41 35.1Z"
              fill="#121214" />
          </svg>

        </a>


      </div>

    </div>

    <div class="text-center">
      <div
        class="text-cyan-500 mx-auto inline-block text-xs font-bold whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--cinza-cinza-4,#575757)] bg-neutral-800 self-center mt-20 p-2 py-1 sm:p-3 border-solid max-md:mt-10">
        PARA QUEM É?
      </div>
    </div>

    <div
      class="text-white text-center text-4xl sm:text-5xl font-bold leading-[48px] sm:leading-[58px] tracking-tighter self-center mt-6 sm:mt-3 sm:mt-9 max-md:max-w-full px-5 sm:px-0 ">
      Dos Fundamentos à Certificação de Especialista
    </div>

    <div class="self-center hidebrs xl:container mx-auto w-full max-w-screen-2xl sm:mt-14 max-md:max-w-full sm:max-md:mt-10">
      <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0  pb-28 ">
        <div class="flex flex-col items-stretch sm:w-[47%] max-md:w-full max-md:ml-0">
          <div class="flex  flex-col items-end max-md:max-w-full max-md:mt-10">
     

            <div class="self-stretch flex justify-between sm:mt-6 items-start max-md:max-w-full max-md:flex-wrap">
              <svg class="aspect-square hidden sm:block object-contain object-center sm:w-9 overflow-hidden shrink-0 max-w-full " width="36"
                height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5 19.125L16.875 22.5L22.5 14.625M31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5C25.4558 4.5 31.5 10.5442 31.5 18Z"
                  stroke="#00A7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="items-stretch self-stretch flex grow basis-[0%] flex-col px-3 sm:px-3 max-md:max-w-full">
                <div class="text-white text-2xl sm:text-4xl  font-semibold  whitespace-nowrap max-md:max-w-full">
                  Para se manter atualizado
                </div>
                <div
                  class="text-white text-lg leading-7 mt-3 max-md:max-w-full border-b border-[#29292E] pb-7 sm:pb-10 max-w-[544px]">
                  Pensado para Assessores de Investimentos, o Programa CCA <br />
                  aprimora sua expertise em cripto e te auxilia a orientar seus <br />
                  clientes com precisão e segurança.

                </div>
              </div>
            </div>

            <div class="self-stretch flex justify-between mt-6 items-start max-md:max-w-full max-md:flex-wrap">
              <svg class="aspect-square hidden sm:block object-contain object-center sm:w-9 overflow-hidden shrink-0 max-w-full " width="36"
                height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5 19.125L16.875 22.5L22.5 14.625M31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5C25.4558 4.5 31.5 10.5442 31.5 18Z"
                  stroke="#00A7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="items-stretch self-stretch flex grow basis-[0%] flex-col px-3 sm:px-3 max-md:max-w-full">
                <div class="text-white text-2xl sm:text-4xl  font-semibold  whitespace-nowrap max-md:max-w-full">
                  Para se especializar
                </div>
                <div
                  class="text-white text-lg leading-7 mt-3 max-md:max-w-full border-b border-[#29292E] pb-7 sm:pb-10 max-w-[544px]">
                  Mergulhe na indústria e se torne um especialista em cripto. <br />
                  Certificado pela ANCORD, o Programa CCA valida <br />
                  sua expertise e destaca o seu currículo do resto.


                </div>
              </div>
            </div>

            <div class="self-stretch flex justify-between  mt-6 items-start max-md:max-w-full max-md:flex-wrap">
              <svg class="aspect-square hidden sm:block object-contain object-center sm:w-9 overflow-hidden shrink-0 max-w-full " width="36"
                height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M13.5 19.125L16.875 22.5L22.5 14.625M31.5 18C31.5 25.4558 25.4558 31.5 18 31.5C10.5442 31.5 4.5 25.4558 4.5 18C4.5 10.5442 10.5442 4.5 18 4.5C25.4558 4.5 31.5 10.5442 31.5 18Z"
                  stroke="#00A7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
              <div class="items-stretch self-stretch flex grow basis-[0%] flex-col px-3 sm:px-3 max-md:max-w-full">
                <div class="text-white text-2xl sm:text-4xl  font-semibold whitespace-nowrap max-md:max-w-full">
                  Para aprender do zero
                </div>
                <div class="text-white text-lg leading-7 mt-3 max-md:max-w-full ">
                Muitos cursos por aí, mas nenhum pensado para Assessores de Investimentos? 
                Comece a aprender sobre Cripto e Web3<br /> com quem entende e 
                matricule-se agora já no Programa CCA.

                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col items-stretch w-[53%] ml-5 max-md:w-full max-md:ml-0">
          <img loading="lazy" srcset="../assets/imgs/note.png"
            class="aspect-[1.35] object-contain object-center w-full overflow-hidden grow mt-3 max-md:max-w-full max-md:mt-10" />
        </div>
      </div>
    </div>

    <div class="py-3 mentores bg-white depoimentos-fold">
      <Mentores />
    </div>


    <div class="bg-[#121214] pb-20  ">

      <div class="xl:container mx-auto">
        <div class="flex w-full max-w-screen-2xl flex-col mb-12 max-md:max-w-full">
          <div
            class="text-cyan-500 text-xs font-bold whitespace-nowrap justify-center items-stretch rounded border border-[color:var(--cinza-cinza-4,#575757)] bg-neutral-800 self-center  mt-12 sm:mt-20 p-2 py-1 sm:p-3 border-solid max-md:px-5">
            ACESSO IMEDIATO
          </div>
          <div
            class="text-white text-center text-3xl  sm:text-5xl font-bold sm:leading-[58px] self-center sm:max-w-[1149px] mt-8 sm:mt-16 max-md:max-w-full leading-[43px] sm:max-md:leading-[54px] sm:max-md:mt-10">
            <span class="text-cyan-500">Programa Certificação Criptoativos ANCORD</span>
            <span class="text-white">, sua jornada completa de aprendizado para <span class="mobileextra"><br /></span>a Web3
            </span>
          </div>
          <svg id="matricule"
            class="aspect-square object-contain object-center w-6 overflow-hidden self-center max-w-full mt-14 max-md:mt-10"
            width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 4.5V19.5M12 19.5L18.75 12.75M12 19.5L5.25 12.75" stroke="#A9A9A9" stroke-width="1.5"
              stroke-linecap="round" stroke-linejoin="round" />
          </svg>

          <a style="position: absolute;"></a>
          <div
            class="border border-[color:var(--cinza-cinza-4,#575757)] self-stretch mt-12 rounded-lg border-solid max-lg:max-w-full max-lg:mt-10">
            <div class="flex max-lg:flex-col max-lg:items-stretch max-lg:gap-0">
              <div class="flex flex-col items-stretch w-6/12 max-lg:w-full max-md:ml-0">
                <div class="bg-[#50d71e] rounded-t-md py-2 flex justify-center">
               
<svg width="217" height="25" viewBox="0 0 217 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 14.75L15.5 8.75M20 5.25699V22.25L16.25 20.75L12.5 22.25L8.75 20.75L5 22.25V5.25699C5 4.149 5.80608 3.20014 6.90668 3.07241C8.74156 2.85947 10.608 2.75 12.5 2.75C14.392 2.75 16.2584 2.85947 18.0933 3.07241C19.1939 3.20014 20 4.149 20 5.25699ZM10.25 9.5H10.2575V9.5075H10.25V9.5ZM10.625 9.5C10.625 9.70711 10.4571 9.875 10.25 9.875C10.0429 9.875 9.875 9.70711 9.875 9.5C9.875 9.29289 10.0429 9.125 10.25 9.125C10.4571 9.125 10.625 9.29289 10.625 9.5ZM14.75 14H14.7575V14.0075H14.75V14ZM15.125 14C15.125 14.2071 14.9571 14.375 14.75 14.375C14.5429 14.375 14.375 14.2071 14.375 14C14.375 13.7929 14.5429 13.625 14.75 13.625C14.9571 13.625 15.125 13.7929 15.125 14Z" stroke="black" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.3236 16.696V8.191H36.2406V16.696H34.3236ZM31.0206 13.411V11.494H39.5256V13.411H31.0206ZM46.8582 19.198C46.0062 19.198 45.2142 19.066 44.4822 18.802C43.7502 18.538 43.1172 18.178 42.5832 17.722C42.0492 17.26 41.6442 16.732 41.3682 16.138L43.4202 14.923C43.6542 15.331 43.9182 15.7 44.2122 16.03C44.5062 16.354 44.8452 16.612 45.2292 16.804C45.6192 16.99 46.0722 17.083 46.5882 17.083C47.3682 17.083 47.9952 16.876 48.4692 16.462C48.9432 16.048 49.1802 15.508 49.1802 14.842C49.1802 14.422 49.0722 14.047 48.8562 13.717C48.6462 13.381 48.3552 13.117 47.9832 12.925C47.6112 12.733 47.1762 12.637 46.6782 12.637C46.4142 12.637 46.1622 12.661 45.9222 12.709C45.6882 12.751 45.4482 12.835 45.2022 12.961C44.9622 13.081 44.6952 13.255 44.4012 13.483C44.3172 13.519 44.2572 13.537 44.2212 13.537C44.1912 13.537 44.1312 13.516 44.0412 13.474L42.1332 12.592L42.7272 5.986H51.0882L50.9892 8.137H44.8062L44.5542 11.278C45.0342 11.008 45.4902 10.813 45.9222 10.693C46.3602 10.573 46.8402 10.513 47.3622 10.513C48.2322 10.513 49.0092 10.678 49.6932 11.008C50.3832 11.332 50.9292 11.809 51.3312 12.439C51.7332 13.069 51.9342 13.837 51.9342 14.743C51.9342 15.661 51.7272 16.453 51.3132 17.119C50.8992 17.785 50.3112 18.298 49.5492 18.658C48.7932 19.018 47.8962 19.198 46.8582 19.198ZM58.5367 19.198C56.9587 19.198 55.7257 18.625 54.8377 17.479C53.9557 16.333 53.5147 14.683 53.5147 12.529C53.5147 11.089 53.7187 9.868 54.1267 8.866C54.5347 7.864 55.1137 7.105 55.8637 6.589C56.6137 6.067 57.5047 5.806 58.5367 5.806C60.0847 5.806 61.3057 6.385 62.1997 7.543C63.0937 8.695 63.5407 10.354 63.5407 12.52C63.5407 14.674 63.0997 16.327 62.2177 17.479C61.3357 18.625 60.1087 19.198 58.5367 19.198ZM58.5367 17.047C59.3107 17.047 59.8777 16.702 60.2377 16.012C60.5977 15.316 60.7777 14.155 60.7777 12.529C60.7777 10.867 60.5947 9.676 60.2287 8.956C59.8627 8.236 59.2957 7.876 58.5277 7.876C57.7597 7.876 57.1867 8.239 56.8087 8.965C56.4367 9.691 56.2507 10.879 56.2507 12.529C56.2507 14.149 56.4367 15.307 56.8087 16.003C57.1807 16.699 57.7567 17.047 58.5367 17.047ZM67.4292 19.072L76.2222 5.842H77.7432L68.9952 19.072H67.4292ZM68.4552 13.168C67.8312 13.168 67.2702 13.006 66.7722 12.682C66.2742 12.352 65.8812 11.911 65.5932 11.359C65.3052 10.807 65.1612 10.192 65.1612 9.514C65.1612 8.824 65.3052 8.197 65.5932 7.633C65.8872 7.069 66.2832 6.622 66.7812 6.292C67.2792 5.956 67.8372 5.788 68.4552 5.788C69.0732 5.788 69.6282 5.956 70.1202 6.292C70.6122 6.622 71.0022 7.069 71.2902 7.633C71.5782 8.197 71.7222 8.824 71.7222 9.514C71.7222 10.192 71.5812 10.807 71.2992 11.359C71.0172 11.911 70.6272 12.352 70.1292 12.682C69.6372 13.006 69.0792 13.168 68.4552 13.168ZM68.4372 11.836C68.9112 11.836 69.2562 11.641 69.4722 11.251C69.6882 10.855 69.7962 10.276 69.7962 9.514C69.7962 8.728 69.6852 8.131 69.4632 7.723C69.2412 7.315 68.8992 7.111 68.4372 7.111C67.9812 7.111 67.6422 7.318 67.4202 7.732C67.1982 8.14 67.0872 8.734 67.0872 9.514C67.0872 10.27 67.1952 10.846 67.4112 11.242C67.6332 11.638 67.9752 11.836 68.4372 11.836ZM76.9962 19.18C76.3662 19.18 75.8022 19.018 75.3042 18.694C74.8062 18.37 74.4132 17.932 74.1252 17.38C73.8372 16.822 73.6932 16.198 73.6932 15.508C73.6932 14.818 73.8372 14.191 74.1252 13.627C74.4192 13.063 74.8152 12.616 75.3132 12.286C75.8172 11.95 76.3782 11.782 76.9962 11.782C77.6142 11.782 78.1692 11.95 78.6612 12.286C79.1592 12.616 79.5522 13.063 79.8402 13.627C80.1282 14.191 80.2722 14.818 80.2722 15.508C80.2722 16.198 80.1312 16.822 79.8492 17.38C79.5672 17.932 79.1772 18.37 78.6792 18.694C78.1872 19.018 77.6262 19.18 76.9962 19.18ZM76.9782 17.83C77.4462 17.83 77.7882 17.635 78.0042 17.245C78.2202 16.849 78.3282 16.276 78.3282 15.526C78.3282 14.74 78.2172 14.143 77.9952 13.735C77.7732 13.327 77.4342 13.123 76.9782 13.123C76.5222 13.123 76.1832 13.33 75.9612 13.744C75.7452 14.152 75.6372 14.746 75.6372 15.526C75.6372 16.27 75.7452 16.84 75.9612 17.236C76.1772 17.632 76.5162 17.83 76.9782 17.83ZM86.7529 19V5.986C86.8189 5.986 87.0019 5.986 87.3019 5.986C87.6079 5.986 87.9649 5.986 88.3729 5.986C88.7869 5.986 89.1979 5.989 89.6059 5.995C90.0199 5.995 90.3649 5.998 90.6409 6.004C92.2189 6.04 93.5059 6.322 94.5019 6.85C95.4979 7.378 96.2269 8.116 96.6889 9.064C97.1569 10.012 97.3909 11.134 97.3909 12.43C97.3909 13.78 97.1449 14.947 96.6529 15.931C96.1609 16.909 95.4079 17.665 94.3939 18.199C93.3859 18.733 92.1049 19 90.5509 19H86.7529ZM89.3989 16.876H90.6049C91.3489 16.876 92.0239 16.732 92.6299 16.444C93.2419 16.156 93.7309 15.685 94.0969 15.031C94.4629 14.377 94.6459 13.504 94.6459 12.412C94.6459 11.398 94.4839 10.576 94.1599 9.946C93.8359 9.31 93.3739 8.845 92.7739 8.551C92.1739 8.257 91.4629 8.11 90.6409 8.11H89.3989V16.876ZM99.708 19V5.986H108.645L108.636 8.2H102.345V11.359H107.808V13.528H102.327V16.759L108.735 16.768V19H99.708ZM115.194 19V5.986C115.26 5.986 115.443 5.986 115.743 5.986C116.049 5.986 116.406 5.986 116.814 5.986C117.228 5.986 117.639 5.989 118.047 5.995C118.461 5.995 118.806 5.998 119.082 6.004C120.66 6.04 121.947 6.322 122.943 6.85C123.939 7.378 124.668 8.116 125.13 9.064C125.598 10.012 125.832 11.134 125.832 12.43C125.832 13.78 125.586 14.947 125.094 15.931C124.602 16.909 123.849 17.665 122.835 18.199C121.827 18.733 120.546 19 118.992 19H115.194ZM117.84 16.876H119.046C119.79 16.876 120.465 16.732 121.071 16.444C121.683 16.156 122.172 15.685 122.538 15.031C122.904 14.377 123.087 13.504 123.087 12.412C123.087 11.398 122.925 10.576 122.601 9.946C122.277 9.31 121.815 8.845 121.215 8.551C120.615 8.257 119.904 8.11 119.082 8.11H117.84V16.876ZM128.149 19V5.986H137.086L137.077 8.2H130.786V11.359H136.249V13.528H130.768V16.759L137.176 16.768V19H128.149ZM144.576 19.18C143.928 19.18 143.295 19.099 142.677 18.937C142.059 18.775 141.495 18.532 140.985 18.208C140.475 17.884 140.055 17.479 139.725 16.993C139.401 16.507 139.206 15.937 139.14 15.283H141.831C141.921 15.679 142.092 16.012 142.344 16.282C142.602 16.552 142.932 16.759 143.334 16.903C143.742 17.047 144.207 17.119 144.729 17.119C145.143 17.119 145.536 17.059 145.908 16.939C146.28 16.819 146.583 16.636 146.817 16.39C147.051 16.144 147.168 15.835 147.168 15.463C147.168 15.019 147.006 14.686 146.682 14.464C146.358 14.236 145.917 14.056 145.359 13.924L142.92 13.393C142.23 13.249 141.627 13.027 141.111 12.727C140.601 12.421 140.208 12.025 139.932 11.539C139.656 11.047 139.518 10.45 139.518 9.748C139.518 8.938 139.74 8.239 140.184 7.651C140.634 7.063 141.243 6.613 142.011 6.301C142.785 5.983 143.652 5.824 144.612 5.824C145.698 5.824 146.613 6.001 147.357 6.355C148.107 6.703 148.68 7.177 149.076 7.777C149.472 8.371 149.673 9.034 149.679 9.766H147.051C147.003 9.316 146.865 8.956 146.637 8.686C146.409 8.41 146.115 8.212 145.755 8.092C145.401 7.966 144.996 7.903 144.54 7.903C143.754 7.903 143.181 8.062 142.821 8.38C142.461 8.698 142.281 9.067 142.281 9.487C142.281 9.883 142.416 10.204 142.686 10.45C142.962 10.69 143.403 10.873 144.009 10.999L146.268 11.485C147.108 11.647 147.789 11.905 148.311 12.259C148.833 12.607 149.214 13.03 149.454 13.528C149.694 14.026 149.814 14.584 149.814 15.202C149.814 15.988 149.589 16.681 149.139 17.281C148.695 17.875 148.08 18.34 147.294 18.676C146.508 19.012 145.602 19.18 144.576 19.18ZM157.357 19.18C156.145 19.18 155.098 18.898 154.216 18.334C153.334 17.77 152.653 16.978 152.173 15.958C151.699 14.938 151.462 13.747 151.462 12.385C151.462 11.017 151.699 9.844 152.173 8.866C152.647 7.882 153.325 7.126 154.207 6.598C155.089 6.07 156.139 5.806 157.357 5.806C158.335 5.806 159.205 6.004 159.967 6.4C160.735 6.79 161.353 7.324 161.821 8.002C162.295 8.68 162.574 9.445 162.658 10.297H159.904C159.82 9.847 159.667 9.448 159.445 9.1C159.223 8.746 158.932 8.47 158.572 8.272C158.212 8.068 157.78 7.966 157.276 7.966C156.67 7.966 156.148 8.113 155.71 8.407C155.272 8.701 154.936 9.175 154.702 9.829C154.468 10.483 154.351 11.347 154.351 12.421C154.351 14.041 154.609 15.214 155.125 15.94C155.647 16.66 156.364 17.02 157.276 17.02C157.78 17.02 158.212 16.906 158.572 16.678C158.932 16.444 159.223 16.138 159.445 15.76C159.667 15.376 159.82 14.956 159.904 14.5H162.658C162.58 15.118 162.43 15.709 162.208 16.273C161.986 16.831 161.671 17.329 161.263 17.767C160.855 18.205 160.33 18.55 159.688 18.802C159.046 19.054 158.269 19.18 157.357 19.18ZM170.385 19.18C169.155 19.18 168.09 18.913 167.19 18.379C166.296 17.839 165.603 17.074 165.111 16.084C164.625 15.088 164.382 13.9 164.382 12.52C164.382 11.134 164.628 9.94 165.12 8.938C165.618 7.936 166.317 7.165 167.217 6.625C168.117 6.079 169.173 5.806 170.385 5.806C171.591 5.806 172.641 6.076 173.535 6.616C174.429 7.156 175.119 7.927 175.605 8.929C176.097 9.931 176.343 11.128 176.343 12.52C176.343 13.894 176.1 15.079 175.614 16.075C175.134 17.071 174.447 17.839 173.553 18.379C172.659 18.913 171.603 19.18 170.385 19.18ZM170.385 17.02C171.021 17.02 171.57 16.87 172.032 16.57C172.5 16.264 172.86 15.784 173.112 15.13C173.364 14.47 173.49 13.612 173.49 12.556C173.49 11.47 173.361 10.591 173.103 9.919C172.851 9.247 172.491 8.755 172.023 8.443C171.561 8.125 171.015 7.966 170.385 7.966C169.755 7.966 169.206 8.125 168.738 8.443C168.27 8.755 167.907 9.25 167.649 9.928C167.391 10.6 167.262 11.476 167.262 12.556C167.262 13.618 167.391 14.476 167.649 15.13C167.907 15.784 168.27 16.264 168.738 16.57C169.206 16.87 169.755 17.02 170.385 17.02ZM178.669 19V5.986H181.27L187.21 14.599V5.986H189.838V19H187.471L181.288 10.045V19H178.669ZM195.566 19V8.326H191.633V5.986H202.046V8.326H198.203V19H195.566ZM209.197 19.18C207.967 19.18 206.902 18.913 206.002 18.379C205.108 17.839 204.415 17.074 203.923 16.084C203.437 15.088 203.194 13.9 203.194 12.52C203.194 11.134 203.44 9.94 203.932 8.938C204.43 7.936 205.129 7.165 206.029 6.625C206.929 6.079 207.985 5.806 209.197 5.806C210.403 5.806 211.453 6.076 212.347 6.616C213.241 7.156 213.931 7.927 214.417 8.929C214.909 9.931 215.155 11.128 215.155 12.52C215.155 13.894 214.912 15.079 214.426 16.075C213.946 17.071 213.259 17.839 212.365 18.379C211.471 18.913 210.415 19.18 209.197 19.18ZM209.197 17.02C209.833 17.02 210.382 16.87 210.844 16.57C211.312 16.264 211.672 15.784 211.924 15.13C212.176 14.47 212.302 13.612 212.302 12.556C212.302 11.47 212.173 10.591 211.915 9.919C211.663 9.247 211.303 8.755 210.835 8.443C210.373 8.125 209.827 7.966 209.197 7.966C208.567 7.966 208.018 8.125 207.55 8.443C207.082 8.755 206.719 9.25 206.461 9.928C206.203 10.6 206.074 11.476 206.074 12.556C206.074 13.618 206.203 14.476 206.461 15.13C206.719 15.784 207.082 16.264 207.55 16.57C208.018 16.87 208.567 17.02 209.197 17.02Z" fill="black"/>
</svg>

                </div>
                <div
                  class="bg-black flex grow flex-col justify-center items-center w-full px-4 xl:px-16 pt-8 sm:pt-0 sm:py-12 rounded-lg max-md:max-w-full max-md:px-5">
                  <div class="flex w-[544px] max-w-full flex-col mb-10">
                
                  <!--
                    <div class="text-cyan-500 text-center text-xl font-medium self-center whitespace-nowrap">
                      PROGRAMA CCA
                    </div>
                    <div
                      class="text-white text-center text-4xl font-bold self-center max-w-[421px] mt-6 max-md:max-w-full">
                      Comece agora mesmo!
                    </div>

                    <div class="bg-zinc-800 self-stretch shrink-0 h-px mt-11 max-md:max-w-full "></div>-->
                    <div
                      class="self-center flex lg:w-[500px] max-w-full justify-between lg:gap-5 items-start">
                      <div class="items-center flex grow basis-[0%] flex-col">
                        <div class="text-white lg:text-center text-xl tracking-tight whitespace-nowrap">
                          De <span class="line-through">R$ 3.895,00</span> por
                        </div>
                        <div
                          class="text-white text-center text-2xl sm:text-[32px] tracking-tighter whitespace-nowrap mt-4">
                     
                          <span class="font-bold">R$ 1.947 à vista ou</span>
                        </div>

                        <div
                          class="text-cyan-500 text-center text-4xl sm:text-5xl tracking-tighter whitespace-nowrap mt-4">
                          <span class="text-[28px] mr-1">10x </span>
                          <span class="font-bold"> R$271,61 </span><span class="text-[28px] mr-1">no cartão</span>
                        </div>

                      </div>
                      <!--
                      <div class="flex grow basis-[0%] flex-col items-end">
                        <div class="justify-end items-stretch flex gap-1.5">

                          <img src="../assets/imgs/desconto.svg" alt="Desconto icone" />


                          <div class="text-green-500 text-center text-sm uppercase grow whitespace-nowrap self-start">
                            +50% de desconto
                          </div>
                        </div>
                        <div class="text-white  text-right text-xs lg:text-xl self-stretch mt-5">
                          <span class="">
                            Ou apenas 6x de
                            <br />
                          </span>
                          <span class="font-bold">R$ 324,50</span>
                          <span class=""> no cartão</span>
                        </div>
                      </div>-->
                    </div>
                    <div class="flex mt-5 justify-center">
                    
<svg width="304" height="20" viewBox="0 0 304 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44771 7 9 6.55228 9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.58579 9 8.25 9.33579 8.25 9.75C8.25 10.1642 8.58579 10.5 9 10.5H9.25338C9.41332 10.5 9.53213 10.6481 9.49743 10.8042L9.03829 12.8704C8.79542 13.9633 9.62706 15 10.7466 15H11C11.4142 15 11.75 14.6642 11.75 14.25C11.75 13.8358 11.4142 13.5 11 13.5H10.7466C10.5867 13.5 10.4679 13.3519 10.5026 13.1958L10.9617 11.1296C11.2046 10.0367 10.3729 9 9.25338 9H9Z" fill="#7A7A7E"/>
<path d="M28.525 15L32.179 4.878H33.831L37.478 15H35.966L35.014 12.347H31.003L30.044 15H28.525ZM31.374 10.989H34.622L32.998 6.334L31.374 10.989ZM41.5127 15.14C41.0087 15.14 40.5351 15.0607 40.0917 14.902C39.6531 14.7433 39.2844 14.4937 38.9857 14.153C38.6917 13.8123 38.5074 13.376 38.4327 12.844H39.7697C39.8304 13.1193 39.9447 13.348 40.1127 13.53C40.2854 13.7073 40.4907 13.8403 40.7287 13.929C40.9714 14.013 41.2304 14.055 41.5057 14.055C41.9631 14.055 42.3341 13.9733 42.6187 13.81C42.9034 13.642 43.0457 13.3853 43.0457 13.04C43.0457 12.7927 42.9687 12.5943 42.8147 12.445C42.6607 12.2957 42.4204 12.186 42.0937 12.116L40.6517 11.773C40.0544 11.633 39.5761 11.4113 39.2167 11.108C38.8574 10.8 38.6754 10.3707 38.6707 9.82C38.6707 9.39533 38.7757 9.01733 38.9857 8.686C39.2004 8.35467 39.5177 8.09567 39.9377 7.909C40.3624 7.71767 40.8851 7.622 41.5057 7.622C42.3224 7.622 42.9781 7.804 43.4727 8.168C43.9721 8.532 44.2287 9.05933 44.2427 9.75H42.9477C42.9011 9.41867 42.7494 9.15967 42.4927 8.973C42.2407 8.78167 41.9071 8.686 41.4917 8.686C41.0624 8.686 40.7101 8.77233 40.4347 8.945C40.1594 9.113 40.0217 9.372 40.0217 9.722C40.0217 9.96 40.1221 10.149 40.3227 10.289C40.5281 10.4243 40.8291 10.5363 41.2257 10.625L42.5977 10.968C42.9524 11.0613 43.2441 11.185 43.4727 11.339C43.7014 11.4883 43.8811 11.654 44.0117 11.836C44.1424 12.018 44.2334 12.207 44.2847 12.403C44.3407 12.599 44.3687 12.7833 44.3687 12.956C44.3687 13.4133 44.2521 13.8053 44.0187 14.132C43.7901 14.454 43.4634 14.7037 43.0387 14.881C42.6141 15.0537 42.1054 15.14 41.5127 15.14ZM48.6495 15.14C48.1455 15.14 47.6718 15.0607 47.2285 14.902C46.7898 14.7433 46.4211 14.4937 46.1225 14.153C45.8285 13.8123 45.6441 13.376 45.5695 12.844H46.9065C46.9671 13.1193 47.0815 13.348 47.2495 13.53C47.4221 13.7073 47.6275 13.8403 47.8655 13.929C48.1081 14.013 48.3671 14.055 48.6425 14.055C49.0998 14.055 49.4708 13.9733 49.7555 13.81C50.0401 13.642 50.1825 13.3853 50.1825 13.04C50.1825 12.7927 50.1055 12.5943 49.9515 12.445C49.7975 12.2957 49.5571 12.186 49.2305 12.116L47.7885 11.773C47.1911 11.633 46.7128 11.4113 46.3535 11.108C45.9941 10.8 45.8121 10.3707 45.8075 9.82C45.8075 9.39533 45.9125 9.01733 46.1225 8.686C46.3371 8.35467 46.6545 8.09567 47.0745 7.909C47.4991 7.71767 48.0218 7.622 48.6425 7.622C49.4591 7.622 50.1148 7.804 50.6095 8.168C51.1088 8.532 51.3655 9.05933 51.3795 9.75H50.0845C50.0378 9.41867 49.8861 9.15967 49.6295 8.973C49.3775 8.78167 49.0438 8.686 48.6285 8.686C48.1991 8.686 47.8468 8.77233 47.5715 8.945C47.2961 9.113 47.1585 9.372 47.1585 9.722C47.1585 9.96 47.2588 10.149 47.4595 10.289C47.6648 10.4243 47.9658 10.5363 48.3625 10.625L49.7345 10.968C50.0891 11.0613 50.3808 11.185 50.6095 11.339C50.8381 11.4883 51.0178 11.654 51.1485 11.836C51.2791 12.018 51.3701 12.207 51.4215 12.403C51.4775 12.599 51.5055 12.7833 51.5055 12.956C51.5055 13.4133 51.3888 13.8053 51.1555 14.132C50.9268 14.454 50.6001 14.7037 50.1755 14.881C49.7508 15.0537 49.2421 15.14 48.6495 15.14ZM56.0865 15.14C55.4098 15.14 54.8195 14.9953 54.3155 14.706C53.8115 14.412 53.4195 13.9873 53.1395 13.432C52.8595 12.8767 52.7195 12.2047 52.7195 11.416C52.7195 10.6553 52.8525 9.99033 53.1185 9.421C53.3845 8.85167 53.7672 8.41067 54.2665 8.098C54.7705 7.78067 55.3795 7.622 56.0935 7.622C56.7748 7.622 57.3652 7.77133 57.8645 8.07C58.3638 8.364 58.7512 8.79567 59.0265 9.365C59.3018 9.92967 59.4395 10.6133 59.4395 11.416C59.4395 12.1487 59.3112 12.795 59.0545 13.355C58.7978 13.915 58.4198 14.3537 57.9205 14.671C57.4258 14.9837 56.8145 15.14 56.0865 15.14ZM56.0935 13.985C56.5088 13.985 56.8542 13.8777 57.1295 13.663C57.4048 13.4437 57.6125 13.138 57.7525 12.746C57.8925 12.3493 57.9625 11.892 57.9625 11.374C57.9625 10.8933 57.8995 10.457 57.7735 10.065C57.6522 9.66833 57.4538 9.35333 57.1785 9.12C56.9078 8.88667 56.5462 8.77 56.0935 8.77C55.6782 8.77 55.3282 8.87733 55.0435 9.092C54.7635 9.302 54.5535 9.603 54.4135 9.995C54.2735 10.3823 54.2035 10.842 54.2035 11.374C54.2035 11.8453 54.2665 12.2793 54.3925 12.676C54.5185 13.0727 54.7192 13.39 54.9945 13.628C55.2745 13.866 55.6408 13.985 56.0935 13.985ZM64.0505 15.14C63.3972 15.14 62.8162 14.9977 62.3075 14.713C61.7989 14.4237 61.3999 14.0013 61.1105 13.446C60.8212 12.886 60.6765 12.207 60.6765 11.409C60.6765 10.6577 60.8095 9.99733 61.0755 9.428C61.3462 8.85867 61.7335 8.41533 62.2375 8.098C62.7415 7.78067 63.3459 7.622 64.0505 7.622C64.5965 7.622 65.0795 7.72933 65.4995 7.944C65.9195 8.154 66.2602 8.448 66.5215 8.826C66.7875 9.204 66.9485 9.645 67.0045 10.149H65.7025C65.6652 9.911 65.5765 9.68933 65.4365 9.484C65.2965 9.27867 65.1122 9.11533 64.8835 8.994C64.6549 8.868 64.3819 8.805 64.0645 8.805C63.4812 8.805 63.0075 9.01733 62.6435 9.442C62.2795 9.86667 62.0975 10.5177 62.0975 11.395C62.0975 12.1977 62.2679 12.837 62.6085 13.313C62.9492 13.789 63.4415 14.027 64.0855 14.027C64.4029 14.027 64.6759 13.9617 64.9045 13.831C65.1332 13.7003 65.3152 13.5323 65.4505 13.327C65.5905 13.1217 65.6792 12.9093 65.7165 12.69H66.9905C66.9345 13.1753 66.7735 13.6023 66.5075 13.971C66.2462 14.3397 65.9055 14.6267 65.4855 14.832C65.0655 15.0373 64.5872 15.14 64.0505 15.14ZM68.6574 15V7.762H70.0994V15H68.6574ZM68.6224 6.362V4.885H70.1274V6.362H68.6224ZM74.2284 15.14C73.7618 15.14 73.3464 15.056 72.9824 14.888C72.6231 14.72 72.3408 14.4773 72.1354 14.16C71.9301 13.8427 71.8274 13.46 71.8274 13.012C71.8274 12.2093 72.1098 11.6097 72.6744 11.213C73.2438 10.8163 74.1538 10.6063 75.4044 10.583L76.5944 10.548V10.023C76.5944 9.60767 76.4708 9.281 76.2234 9.043C75.9761 8.805 75.5934 8.68833 75.0754 8.693C74.6928 8.693 74.3498 8.78167 74.0464 8.959C73.7431 9.13633 73.5448 9.428 73.4514 9.834H72.1564C72.1844 9.35333 72.3221 8.94967 72.5694 8.623C72.8214 8.29167 73.1668 8.042 73.6054 7.874C74.0441 7.706 74.5574 7.622 75.1454 7.622C75.8081 7.622 76.3518 7.713 76.7764 7.895C77.2011 8.07233 77.5161 8.33367 77.7214 8.679C77.9314 9.02433 78.0364 9.44433 78.0364 9.939V15H76.7624L76.6504 13.67C76.3798 14.2253 76.0368 14.6103 75.6214 14.825C75.2061 15.035 74.7418 15.14 74.2284 15.14ZM74.6974 14.097C74.9261 14.097 75.1524 14.0573 75.3764 13.978C75.6004 13.894 75.8034 13.782 75.9854 13.642C76.1674 13.4973 76.3121 13.3363 76.4194 13.159C76.5314 12.9817 76.5898 12.7997 76.5944 12.613V11.416L75.6144 11.437C75.1151 11.4417 74.6904 11.493 74.3404 11.591C73.9951 11.689 73.7291 11.8407 73.5424 12.046C73.3604 12.2513 73.2694 12.5243 73.2694 12.865C73.2694 13.2523 73.4024 13.5557 73.6684 13.775C73.9391 13.9897 74.2821 14.097 74.6974 14.097ZM82.6234 15.14C81.6761 15.14 80.9271 14.8157 80.3764 14.167C79.8304 13.5137 79.5574 12.5733 79.5574 11.346C79.5574 10.5947 79.6671 9.94133 79.8864 9.386C80.1104 8.826 80.4394 8.392 80.8734 8.084C81.3074 7.776 81.8487 7.622 82.4974 7.622C82.8194 7.622 83.1087 7.66167 83.3654 7.741C83.6221 7.82033 83.8461 7.923 84.0374 8.049C84.2287 8.175 84.3897 8.31033 84.5204 8.455C84.6511 8.59967 84.7491 8.735 84.8144 8.861V4.598H86.3264V15H85.1994L85.0314 13.516C84.9801 13.6747 84.9007 13.8473 84.7934 14.034C84.6907 14.2207 84.5461 14.398 84.3594 14.566C84.1774 14.734 83.9441 14.8717 83.6594 14.979C83.3747 15.0863 83.0294 15.14 82.6234 15.14ZM82.9104 14.013C83.5824 14.013 84.0677 13.803 84.3664 13.383C84.6651 12.9583 84.8144 12.263 84.8144 11.297C84.8097 10.751 84.7421 10.289 84.6114 9.911C84.4854 9.533 84.2847 9.24833 84.0094 9.057C83.7387 8.861 83.3817 8.763 82.9384 8.763C82.3831 8.763 81.9281 8.96367 81.5734 9.365C81.2234 9.76167 81.0484 10.4057 81.0484 11.297C81.0484 12.1743 81.2071 12.8463 81.5244 13.313C81.8464 13.7797 82.3084 14.013 82.9104 14.013ZM91.3189 15.14C90.6423 15.14 90.0519 14.9953 89.5479 14.706C89.0439 14.412 88.6519 13.9873 88.3719 13.432C88.0919 12.8767 87.9519 12.2047 87.9519 11.416C87.9519 10.6553 88.0849 9.99033 88.3509 9.421C88.6169 8.85167 88.9996 8.41067 89.4989 8.098C90.0029 7.78067 90.6119 7.622 91.3259 7.622C92.0073 7.622 92.5976 7.77133 93.0969 8.07C93.5963 8.364 93.9836 8.79567 94.2589 9.365C94.5343 9.92967 94.6719 10.6133 94.6719 11.416C94.6719 12.1487 94.5436 12.795 94.2869 13.355C94.0303 13.915 93.6523 14.3537 93.1529 14.671C92.6583 14.9837 92.0469 15.14 91.3189 15.14ZM91.3259 13.985C91.7413 13.985 92.0866 13.8777 92.3619 13.663C92.6373 13.4437 92.8449 13.138 92.9849 12.746C93.1249 12.3493 93.1949 11.892 93.1949 11.374C93.1949 10.8933 93.1319 10.457 93.0059 10.065C92.8846 9.66833 92.6863 9.35333 92.4109 9.12C92.1403 8.88667 91.7786 8.77 91.3259 8.77C90.9106 8.77 90.5606 8.87733 90.2759 9.092C89.9959 9.302 89.7859 9.603 89.6459 9.995C89.5059 10.3823 89.4359 10.842 89.4359 11.374C89.4359 11.8453 89.4989 12.2793 89.6249 12.676C89.7509 13.0727 89.9516 13.39 90.2269 13.628C90.5069 13.866 90.8733 13.985 91.3259 13.985ZM98.962 15.14C98.458 15.14 97.9843 15.0607 97.541 14.902C97.1023 14.7433 96.7336 14.4937 96.435 14.153C96.141 13.8123 95.9566 13.376 95.882 12.844H97.219C97.2796 13.1193 97.394 13.348 97.562 13.53C97.7346 13.7073 97.94 13.8403 98.178 13.929C98.4206 14.013 98.6796 14.055 98.955 14.055C99.4123 14.055 99.7833 13.9733 100.068 13.81C100.353 13.642 100.495 13.3853 100.495 13.04C100.495 12.7927 100.418 12.5943 100.264 12.445C100.11 12.2957 99.8696 12.186 99.543 12.116L98.101 11.773C97.5036 11.633 97.0253 11.4113 96.666 11.108C96.3066 10.8 96.1246 10.3707 96.12 9.82C96.12 9.39533 96.225 9.01733 96.435 8.686C96.6496 8.35467 96.967 8.09567 97.387 7.909C97.8116 7.71767 98.3343 7.622 98.955 7.622C99.7716 7.622 100.427 7.804 100.922 8.168C101.421 8.532 101.678 9.05933 101.692 9.75H100.397C100.35 9.41867 100.199 9.15967 99.942 8.973C99.69 8.78167 99.3563 8.686 98.941 8.686C98.5116 8.686 98.1593 8.77233 97.884 8.945C97.6086 9.113 97.471 9.372 97.471 9.722C97.471 9.96 97.5713 10.149 97.772 10.289C97.9773 10.4243 98.2783 10.5363 98.675 10.625L100.047 10.968C100.402 11.0613 100.693 11.185 100.922 11.339C101.151 11.4883 101.33 11.654 101.461 11.836C101.592 12.018 101.683 12.207 101.734 12.403C101.79 12.599 101.818 12.7833 101.818 12.956C101.818 13.4133 101.701 13.8053 101.468 14.132C101.239 14.454 100.913 14.7037 100.488 14.881C100.063 15.0537 99.5546 15.14 98.962 15.14ZM106.209 15L109.863 4.878H111.515L115.162 15H113.65L112.698 12.347H108.687L107.728 15H106.209ZM109.058 10.989H112.306L110.682 6.334L109.058 10.989ZM116.972 15V4.878H118.421L123.573 12.424V4.878H125.078V15H123.734L118.47 7.293V15H116.972ZM131.465 15.14C130.551 15.14 129.767 14.93 129.113 14.51C128.46 14.0853 127.958 13.4833 127.608 12.704C127.263 11.92 127.09 10.982 127.09 9.89C127.09 8.80267 127.263 7.87633 127.608 7.111C127.954 6.341 128.453 5.753 129.106 5.347C129.76 4.941 130.546 4.738 131.465 4.738C132.193 4.738 132.84 4.88733 133.404 5.186C133.969 5.48467 134.422 5.886 134.762 6.39C135.108 6.894 135.313 7.45167 135.378 8.063H133.782C133.712 7.68033 133.577 7.335 133.376 7.027C133.18 6.71433 132.919 6.46933 132.592 6.292C132.266 6.11 131.878 6.019 131.43 6.019C130.856 6.019 130.369 6.15433 129.967 6.425C129.566 6.69567 129.26 7.118 129.05 7.692C128.845 8.266 128.742 9.00567 128.742 9.911C128.742 11.2783 128.973 12.2793 129.435 12.914C129.897 13.544 130.562 13.859 131.43 13.859C131.878 13.859 132.266 13.7633 132.592 13.572C132.919 13.376 133.18 13.117 133.376 12.795C133.577 12.4683 133.712 12.1137 133.782 11.731H135.378C135.322 12.1743 135.206 12.6013 135.028 13.012C134.851 13.418 134.604 13.782 134.286 14.104C133.974 14.426 133.584 14.6803 133.117 14.867C132.651 15.049 132.1 15.14 131.465 15.14ZM141.312 15.14C140.392 15.14 139.597 14.937 138.925 14.531C138.257 14.1203 137.742 13.53 137.378 12.76C137.018 11.9853 136.839 11.052 136.839 9.96C136.839 8.85867 137.021 7.92067 137.385 7.146C137.753 6.36667 138.271 5.77167 138.939 5.361C139.611 4.94567 140.402 4.738 141.312 4.738C142.217 4.738 143.001 4.94567 143.664 5.361C144.331 5.77167 144.844 6.36667 145.204 7.146C145.568 7.92067 145.75 8.85867 145.75 9.96C145.75 11.052 145.57 11.983 145.211 12.753C144.851 13.523 144.338 14.1133 143.671 14.524C143.008 14.9347 142.222 15.14 141.312 15.14ZM141.312 13.859C141.9 13.859 142.401 13.7237 142.817 13.453C143.237 13.1823 143.556 12.76 143.776 12.186C143.995 11.612 144.105 10.877 144.105 9.981C144.105 9.06167 143.993 8.31033 143.769 7.727C143.549 7.14367 143.23 6.71433 142.81 6.439C142.394 6.159 141.895 6.019 141.312 6.019C140.728 6.019 140.224 6.159 139.8 6.439C139.38 6.719 139.055 7.15067 138.827 7.734C138.598 8.31733 138.484 9.06633 138.484 9.981C138.484 10.8817 138.598 11.619 138.827 12.193C139.055 12.7623 139.38 13.1823 139.8 13.453C140.224 13.7237 140.728 13.859 141.312 13.859ZM147.761 15V4.878H151.779C152.531 4.878 153.154 4.99467 153.648 5.228C154.143 5.45667 154.512 5.78333 154.754 6.208C154.997 6.63267 155.118 7.13433 155.118 7.713C155.118 8.259 155.025 8.714 154.838 9.078C154.656 9.442 154.418 9.73833 154.124 9.967C153.835 10.1957 153.529 10.3753 153.207 10.506L155.167 15H153.592L151.8 10.765H149.259V15H147.761ZM149.259 9.554H151.373C152.078 9.554 152.624 9.40233 153.011 9.099C153.399 8.791 153.592 8.35233 153.592 7.783C153.592 7.223 153.415 6.79833 153.06 6.509C152.71 6.21967 152.234 6.075 151.632 6.075H149.259V9.554ZM157.304 15V4.878C157.342 4.878 157.451 4.88033 157.633 4.885C157.82 4.885 158.044 4.885 158.305 4.885C158.567 4.88033 158.833 4.88033 159.103 4.885C159.379 4.885 159.624 4.88733 159.838 4.892C161.075 4.91067 162.081 5.116 162.855 5.508C163.63 5.9 164.197 6.46467 164.556 7.202C164.92 7.93467 165.102 8.82833 165.102 9.883C165.102 10.9797 164.909 11.9107 164.521 12.676C164.134 13.4367 163.541 14.0153 162.743 14.412C161.95 14.804 160.944 15 159.726 15H157.304ZM158.83 13.74H159.74C160.506 13.74 161.171 13.6163 161.735 13.369C162.305 13.117 162.746 12.711 163.058 12.151C163.371 11.5863 163.527 10.8327 163.527 9.89C163.527 8.966 163.378 8.231 163.079 7.685C162.781 7.13433 162.351 6.74 161.791 6.502C161.236 6.25933 160.566 6.138 159.782 6.138H158.83V13.74ZM173.32 17.394C172.144 17.394 171.234 17.2283 170.59 16.897C169.946 16.5703 169.624 16.113 169.624 15.525C169.624 15.2683 169.685 15.0513 169.806 14.874C169.932 14.692 170.079 14.5427 170.247 14.426C170.42 14.3093 170.578 14.2183 170.723 14.153C170.868 14.083 170.961 14.034 171.003 14.006C170.924 13.9593 170.821 13.901 170.695 13.831C170.574 13.7563 170.464 13.6583 170.366 13.537C170.268 13.411 170.219 13.2477 170.219 13.047C170.219 12.8137 170.329 12.599 170.548 12.403C170.772 12.2023 171.108 12.0553 171.556 11.962C171.117 11.7473 170.777 11.458 170.534 11.094C170.291 10.73 170.17 10.3427 170.17 9.932C170.17 9.46067 170.303 9.05467 170.569 8.714C170.835 8.36867 171.208 8.105 171.689 7.923C172.174 7.741 172.744 7.65 173.397 7.65C173.878 7.65 174.277 7.70367 174.594 7.811C174.916 7.91833 175.212 8.06767 175.483 8.259C175.572 8.22633 175.698 8.17733 175.861 8.112C176.029 8.042 176.211 7.96733 176.407 7.888C176.603 7.80867 176.79 7.73167 176.967 7.657C177.149 7.58233 177.296 7.52167 177.408 7.475L177.401 8.777L176.141 9.008C176.206 9.148 176.258 9.302 176.295 9.47C176.337 9.638 176.358 9.792 176.358 9.932C176.358 10.352 176.244 10.7393 176.015 11.094C175.786 11.444 175.443 11.724 174.986 11.934C174.529 12.144 173.957 12.249 173.271 12.249C173.206 12.249 173.122 12.249 173.019 12.249C172.916 12.2443 172.83 12.2373 172.76 12.228C172.326 12.242 172.027 12.2933 171.864 12.382C171.701 12.466 171.619 12.5593 171.619 12.662C171.619 12.7927 171.724 12.8813 171.934 12.928C172.144 12.9747 172.489 13.0143 172.97 13.047C173.143 13.061 173.362 13.075 173.628 13.089C173.899 13.103 174.197 13.1217 174.524 13.145C175.317 13.1917 175.922 13.39 176.337 13.74C176.757 14.09 176.967 14.5543 176.967 15.133C176.967 15.7957 176.666 16.337 176.064 16.757C175.462 17.1817 174.547 17.394 173.32 17.394ZM173.579 16.477C174.218 16.477 174.701 16.3837 175.028 16.197C175.355 16.015 175.518 15.742 175.518 15.378C175.518 15.1073 175.413 14.8857 175.203 14.713C174.993 14.5403 174.678 14.44 174.258 14.412L172.326 14.286C172.135 14.2767 171.943 14.3187 171.752 14.412C171.565 14.5053 171.411 14.636 171.29 14.804C171.169 14.9673 171.108 15.1493 171.108 15.35C171.108 15.714 171.309 15.9917 171.71 16.183C172.111 16.379 172.734 16.477 173.579 16.477ZM173.313 11.332C173.798 11.332 174.188 11.2153 174.482 10.982C174.781 10.744 174.93 10.4033 174.93 9.96C174.93 9.50267 174.781 9.15033 174.482 8.903C174.188 8.651 173.798 8.525 173.313 8.525C172.823 8.525 172.426 8.651 172.123 8.903C171.824 9.155 171.675 9.50733 171.675 9.96C171.675 10.3893 171.817 10.7253 172.102 10.968C172.391 11.2107 172.795 11.332 173.313 11.332ZM180.773 15.14C180.307 15.14 179.891 15.056 179.527 14.888C179.168 14.72 178.886 14.4773 178.68 14.16C178.475 13.8427 178.372 13.46 178.372 13.012C178.372 12.2093 178.655 11.6097 179.219 11.213C179.789 10.8163 180.699 10.6063 181.949 10.583L183.139 10.548V10.023C183.139 9.60767 183.016 9.281 182.768 9.043C182.521 8.805 182.138 8.68833 181.62 8.693C181.238 8.693 180.895 8.78167 180.591 8.959C180.288 9.13633 180.09 9.428 179.996 9.834H178.701C178.729 9.35333 178.867 8.94967 179.114 8.623C179.366 8.29167 179.712 8.042 180.15 7.874C180.589 7.706 181.102 7.622 181.69 7.622C182.353 7.622 182.897 7.713 183.321 7.895C183.746 8.07233 184.061 8.33367 184.266 8.679C184.476 9.02433 184.581 9.44433 184.581 9.939V15H183.307L183.195 13.67C182.925 14.2253 182.582 14.6103 182.166 14.825C181.751 15.035 181.287 15.14 180.773 15.14ZM181.242 14.097C181.471 14.097 181.697 14.0573 181.921 13.978C182.145 13.894 182.348 13.782 182.53 13.642C182.712 13.4973 182.857 13.3363 182.964 13.159C183.076 12.9817 183.135 12.7997 183.139 12.613V11.416L182.159 11.437C181.66 11.4417 181.235 11.493 180.885 11.591C180.54 11.689 180.274 11.8407 180.087 12.046C179.905 12.2513 179.814 12.5243 179.814 12.865C179.814 13.2523 179.947 13.5557 180.213 13.775C180.484 13.9897 180.827 14.097 181.242 14.097ZM186.501 15V7.762H187.936V9.246C188.058 8.89133 188.226 8.595 188.44 8.357C188.66 8.11433 188.914 7.93233 189.203 7.811C189.493 7.685 189.798 7.622 190.12 7.622C190.218 7.622 190.312 7.629 190.4 7.643C190.489 7.65233 190.559 7.671 190.61 7.699V9.141C190.55 9.113 190.47 9.09433 190.372 9.085C190.279 9.07567 190.197 9.06867 190.127 9.064C189.81 9.04067 189.521 9.057 189.259 9.113C188.998 9.169 188.772 9.26233 188.58 9.393C188.394 9.52367 188.249 9.694 188.146 9.904C188.048 10.114 187.999 10.3613 187.999 10.646V15H186.501ZM193.898 15.14C193.432 15.14 193.016 15.056 192.652 14.888C192.293 14.72 192.011 14.4773 191.805 14.16C191.6 13.8427 191.497 13.46 191.497 13.012C191.497 12.2093 191.78 11.6097 192.344 11.213C192.914 10.8163 193.824 10.6063 195.074 10.583L196.264 10.548V10.023C196.264 9.60767 196.141 9.281 195.893 9.043C195.646 8.805 195.263 8.68833 194.745 8.693C194.363 8.693 194.02 8.78167 193.716 8.959C193.413 9.13633 193.215 9.428 193.121 9.834H191.826C191.854 9.35333 191.992 8.94967 192.239 8.623C192.491 8.29167 192.837 8.042 193.275 7.874C193.714 7.706 194.227 7.622 194.815 7.622C195.478 7.622 196.022 7.713 196.446 7.895C196.871 8.07233 197.186 8.33367 197.391 8.679C197.601 9.02433 197.706 9.44433 197.706 9.939V15H196.432L196.32 13.67C196.05 14.2253 195.707 14.6103 195.291 14.825C194.876 15.035 194.412 15.14 193.898 15.14ZM194.367 14.097C194.596 14.097 194.822 14.0573 195.046 13.978C195.27 13.894 195.473 13.782 195.655 13.642C195.837 13.4973 195.982 13.3363 196.089 13.159C196.201 12.9817 196.26 12.7997 196.264 12.613V11.416L195.284 11.437C194.785 11.4417 194.36 11.493 194.01 11.591C193.665 11.689 193.399 11.8407 193.212 12.046C193.03 12.2513 192.939 12.5243 192.939 12.865C192.939 13.2523 193.072 13.5557 193.338 13.775C193.609 13.9897 193.952 14.097 194.367 14.097ZM199.626 15V7.762H201.089V8.805C201.206 8.609 201.362 8.42467 201.558 8.252C201.759 8.07933 202.004 7.93933 202.293 7.832C202.587 7.72467 202.926 7.671 203.308 7.671C203.761 7.671 204.179 7.762 204.561 7.944C204.949 8.12133 205.259 8.40133 205.492 8.784C205.726 9.162 205.842 9.652 205.842 10.254V15H204.344V10.415C204.344 9.897 204.204 9.512 203.924 9.26C203.649 9.008 203.292 8.882 202.853 8.882C202.559 8.882 202.279 8.931 202.013 9.029C201.747 9.127 201.533 9.27633 201.369 9.477C201.206 9.673 201.124 9.92033 201.124 10.219V15H199.626ZM210.253 15.049C209.716 15.049 209.301 14.9767 209.007 14.832C208.713 14.6873 208.508 14.4797 208.391 14.209C208.274 13.9337 208.216 13.6023 208.216 13.215V8.84H207.04V7.762H208.265L208.629 5.634H209.721V7.755H211.345V8.84H209.721L209.728 13.159C209.728 13.397 209.751 13.572 209.798 13.684C209.849 13.7913 209.933 13.8613 210.05 13.894C210.171 13.922 210.335 13.936 210.54 13.936H211.38V14.909C211.291 14.9463 211.154 14.979 210.967 15.007C210.785 15.035 210.547 15.049 210.253 15.049ZM215.956 15.14C215.27 15.14 214.665 14.993 214.143 14.699C213.62 14.4003 213.212 13.9757 212.918 13.425C212.628 12.8743 212.484 12.2187 212.484 11.458C212.484 10.7067 212.617 10.044 212.883 9.47C213.149 8.89133 213.534 8.43867 214.038 8.112C214.542 7.78533 215.148 7.622 215.858 7.622C216.553 7.622 217.141 7.77133 217.622 8.07C218.102 8.36867 218.466 8.78867 218.714 9.33C218.961 9.86667 219.085 10.5013 219.085 11.234V11.731H213.989C213.984 12.165 214.054 12.5547 214.199 12.9C214.343 13.2407 214.558 13.5113 214.843 13.712C215.132 13.908 215.491 14.006 215.921 14.006C216.355 14.006 216.728 13.908 217.041 13.712C217.358 13.516 217.566 13.2243 217.664 12.837H219.05C218.966 13.3317 218.767 13.7517 218.455 14.097C218.142 14.4423 217.766 14.7037 217.328 14.881C216.889 15.0537 216.432 15.14 215.956 15.14ZM213.989 10.758H217.657C217.657 10.38 217.591 10.037 217.461 9.729C217.33 9.41633 217.129 9.17133 216.859 8.994C216.593 8.812 216.257 8.721 215.851 8.721C215.435 8.721 215.09 8.82133 214.815 9.022C214.539 9.22267 214.332 9.47933 214.192 9.792C214.056 10.1047 213.989 10.4267 213.989 10.758ZM220.79 15V7.762H222.246V8.805C222.452 8.48767 222.732 8.21233 223.086 7.979C223.441 7.741 223.898 7.622 224.458 7.622C224.72 7.622 224.983 7.66633 225.249 7.755C225.52 7.84367 225.767 7.97667 225.991 8.154C226.22 8.32667 226.4 8.54133 226.53 8.798C226.759 8.45267 227.065 8.17033 227.447 7.951C227.83 7.73167 228.259 7.622 228.735 7.622C228.992 7.622 229.258 7.664 229.533 7.748C229.809 7.82733 230.063 7.965 230.296 8.161C230.534 8.35233 230.726 8.61833 230.87 8.959C231.02 9.29967 231.094 9.73133 231.094 10.254V15H229.589V10.415C229.589 10.0183 229.522 9.708 229.386 9.484C229.256 9.26 229.083 9.10367 228.868 9.015C228.658 8.92167 228.434 8.875 228.196 8.875C227.982 8.875 227.758 8.917 227.524 9.001C227.291 9.085 227.093 9.225 226.929 9.421C226.766 9.617 226.684 9.883 226.684 10.219V15H225.186V10.093C225.186 9.827 225.114 9.603 224.969 9.421C224.829 9.239 224.652 9.10367 224.437 9.015C224.227 8.92167 224.017 8.875 223.807 8.875C223.574 8.875 223.341 8.92167 223.107 9.015C222.874 9.10833 222.678 9.25533 222.519 9.456C222.365 9.652 222.288 9.90633 222.288 10.219V15H220.79ZM238.715 13.334L238.708 6.467H240.423V13.334H238.715ZM236.125 10.765V9.05H242.992V10.758L236.125 10.765ZM244.532 15V13.894V13.327C244.532 12.8137 244.628 12.3727 244.819 12.004C245.011 11.6307 245.263 11.3063 245.575 11.031C245.888 10.7557 246.231 10.5153 246.604 10.31C246.982 10.1 247.358 9.90867 247.731 9.736C248.109 9.55867 248.455 9.38367 248.767 9.211C249.08 9.03367 249.332 8.84233 249.523 8.637C249.715 8.427 249.81 8.17967 249.81 7.895C249.81 7.545 249.687 7.25567 249.439 7.027C249.192 6.79833 248.854 6.684 248.424 6.684C247.986 6.684 247.598 6.81467 247.262 7.076C246.931 7.33267 246.719 7.748 246.625 8.322H244.364C244.369 7.65 244.521 7.04333 244.819 6.502C245.123 5.96067 245.578 5.53133 246.184 5.214C246.791 4.89667 247.556 4.738 248.48 4.738C249.274 4.738 249.955 4.871 250.524 5.137C251.098 5.39833 251.539 5.76467 251.847 6.236C252.155 6.70733 252.309 7.25333 252.309 7.874C252.309 8.38267 252.216 8.819 252.029 9.183C251.847 9.547 251.602 9.85967 251.294 10.121C250.991 10.3777 250.657 10.5993 250.293 10.786C249.934 10.9727 249.572 11.143 249.208 11.297C248.844 11.451 248.508 11.605 248.2 11.759C247.897 11.913 247.652 12.0857 247.465 12.277C247.283 12.4683 247.192 12.6993 247.192 12.97V13.019H252.274V15H244.532ZM257.543 15.154C256.269 15.154 255.277 14.7037 254.568 13.803C253.859 12.8977 253.504 11.619 253.504 9.967C253.504 8.85633 253.665 7.91133 253.987 7.132C254.314 6.35267 254.778 5.76 255.38 5.354C255.987 4.94333 256.71 4.738 257.55 4.738C258.801 4.738 259.781 5.193 260.49 6.103C261.204 7.00833 261.561 8.294 261.561 9.96C261.561 11.6167 261.209 12.8977 260.504 13.803C259.804 14.7037 258.817 15.154 257.543 15.154ZM257.536 13.236C258.091 13.236 258.488 12.9887 258.726 12.494C258.964 11.9993 259.083 11.1593 259.083 9.974C259.083 8.75133 258.962 7.881 258.719 7.363C258.476 6.845 258.082 6.586 257.536 6.586C256.99 6.586 256.593 6.84733 256.346 7.37C256.099 7.89267 255.975 8.76067 255.975 9.974C255.975 11.15 256.096 11.9877 256.339 12.487C256.586 12.9863 256.985 13.236 257.536 13.236ZM264.581 15.056L271.42 4.766H272.757L265.953 15.056H264.581ZM265.393 10.45C264.889 10.45 264.436 10.3217 264.035 10.065C263.638 9.80367 263.323 9.45833 263.09 9.029C262.861 8.59967 262.747 8.13067 262.747 7.622C262.747 7.104 262.863 6.62567 263.097 6.187C263.335 5.74833 263.652 5.396 264.049 5.13C264.45 4.85933 264.898 4.724 265.393 4.724C265.878 4.724 266.319 4.85933 266.716 5.13C267.112 5.396 267.425 5.74833 267.654 6.187C267.887 6.62567 268.004 7.104 268.004 7.622C268.004 8.13067 267.889 8.59967 267.661 9.029C267.432 9.45833 267.119 9.80367 266.723 10.065C266.331 10.3217 265.887 10.45 265.393 10.45ZM265.379 9.267C265.705 9.267 265.934 9.12933 266.065 8.854C266.2 8.574 266.268 8.16333 266.268 7.622C266.268 7.05733 266.198 6.63033 266.058 6.341C265.918 6.047 265.691 5.9 265.379 5.9C265.066 5.9 264.84 6.047 264.7 6.341C264.56 6.635 264.49 7.062 264.49 7.622C264.49 8.15867 264.557 8.567 264.693 8.847C264.828 9.127 265.057 9.267 265.379 9.267ZM272.169 15.14C271.669 15.14 271.219 15.0093 270.818 14.748C270.416 14.4867 270.101 14.1413 269.873 13.712C269.644 13.2827 269.53 12.8113 269.53 12.298C269.53 11.78 269.646 11.3017 269.88 10.863C270.113 10.4243 270.428 10.072 270.825 9.806C271.226 9.53533 271.674 9.4 272.169 9.4C272.663 9.4 273.109 9.53533 273.506 9.806C273.902 10.072 274.215 10.4243 274.444 10.863C274.677 11.3017 274.794 11.78 274.794 12.298C274.794 12.8113 274.679 13.2827 274.451 13.712C274.222 14.1413 273.909 14.4867 273.513 14.748C273.116 15.0093 272.668 15.14 272.169 15.14ZM272.155 13.943C272.481 13.943 272.71 13.8053 272.841 13.53C272.976 13.25 273.044 12.844 273.044 12.312C273.044 11.7473 272.974 11.318 272.834 11.024C272.698 10.73 272.472 10.583 272.155 10.583C271.842 10.583 271.618 10.7323 271.483 11.031C271.347 11.325 271.28 11.752 271.28 12.312C271.28 12.844 271.345 13.25 271.476 13.53C271.606 13.8053 271.833 13.943 272.155 13.943ZM280.941 15.14C279.961 15.14 279.111 14.93 278.393 14.51C277.679 14.0853 277.126 13.4857 276.734 12.711C276.342 11.9363 276.146 11.0193 276.146 9.96C276.146 8.89133 276.344 7.96733 276.741 7.188C277.137 6.40867 277.695 5.80667 278.414 5.382C279.137 4.95267 279.979 4.738 280.941 4.738C281.902 4.738 282.737 4.95267 283.447 5.382C284.161 5.80667 284.714 6.40867 285.106 7.188C285.502 7.96733 285.701 8.89133 285.701 9.96C285.701 11.0193 285.507 11.9363 285.12 12.711C284.732 13.4857 284.182 14.0853 283.468 14.51C282.754 14.93 281.911 15.14 280.941 15.14ZM280.941 13.208C281.375 13.208 281.755 13.103 282.082 12.893C282.408 12.6783 282.66 12.3353 282.838 11.864C283.02 11.3927 283.111 10.7697 283.111 9.995C283.111 9.197 283.02 8.55533 282.838 8.07C282.656 7.58 282.401 7.22533 282.075 7.006C281.748 6.782 281.37 6.67 280.941 6.67C280.507 6.67 280.126 6.782 279.8 7.006C279.473 7.23 279.216 7.587 279.03 8.077C278.848 8.56233 278.757 9.20167 278.757 9.995C278.757 10.7697 278.848 11.3927 279.03 11.864C279.216 12.3353 279.473 12.6783 279.8 12.893C280.126 13.103 280.507 13.208 280.941 13.208ZM287.38 15V4.878H294.534L294.527 6.845H289.774V9.029H293.82V10.947H289.774V15H287.38ZM296.089 15V4.878H303.243L303.236 6.845H298.483V9.029H302.529V10.947H298.483V15H296.089Z" fill="#7A7A7E"/>
</svg>

                    </div>
                    <a  @click="showLightBox()"
                      class=" cursor-pointer justify-center items-center bg-cyan-500 self-center flex gap-2 mt-8 px-8 xl:px-16 py-5 rounded-md max-md:max-w-full transition-all hover:bg-[#0A6F94] max-md:flex-wrap max-md:mt-10 max-md:px-5">

                      <svg
                        class="hidden sm:block aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
                        width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.1665 10H15.8332" stroke="#010918" stroke-width="1.75" stroke-linecap="round"
                          stroke-linejoin="round" />
                        <path d="M10 4.16699L15.8333 10.0003L10 15.8337" stroke="#010918" stroke-width="1.75"
                          stroke-linecap="round" stroke-linejoin="round" />
                      </svg>

                      <div class="text-slate-950 xl:text-xl font-extrabold leading-7 self-stretch grow whitespace-nowrap">
                        QUERO ME MATRICULAR AGORA
                      </div>
                    </a>
                    <div
                      class="items-start self-center flex justify-between gap-5 mt-8 max-md:justify-center max-md:mt-10">
                      <img
                        class="aspect-square object-contain object-center w-8 fill-zinc-500 overflow-hidden self-stretch shrink-0 max-w-full"
                        src="../assets/imgs/elo.svg" alt="Icone pagamento elo" />

                      <img
                        class="aspect-[3.13] object-contain object-center w-[50px] overflow-hidden self-center shrink-0 max-w-full my-auto"
                        src="../assets/imgs/visa.svg" alt="Icone pagamento visa" />


                      <img
                        class="aspect-[1.5] object-contain object-center w-[45px] overflow-hidden shrink-0 max-w-full self-start"
                        src="../assets/imgs/mastercard.svg" alt="Icone pagamento mastercard" />

                      <img
                        class="aspect-[1.38] object-contain object-center w-11 overflow-hidden self-stretch z-[1] shrink-0 max-w-full"
                        src="../assets/imgs/amex.svg" alt="Icone pagamento amex" />

                    </div>
                    <div class="bg-zinc-800 self-stretch shrink-0 h-px mt-9 max-md:max-w-full"></div>
                    <div class="items-stretch self-center flex gap-1.5 mt-9">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/ambiente-seguro.svg" alt="Icone ambiente seguro" />



                      <div class="text-white text-base leading-4 self-center grow whitespace-nowrap my-auto">
                        Ambiente 100% seguro
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-stretch w-6/12  max-lg:w-full max-md:ml-0">
                <div
                  class="bg-neutral-900 flex grow flex-col justify-center w-full px-16 py-12 rounded-md items-start max-md:max-w-full max-md:px-5">
                  <div
                    class="flex w-96 max-w-full flex-col items-stretch xl:ml-14 sm:mt-20 sm:mb-14 max-md:ml-2.5 ">
                    <div class="text-neutral-400 text-left text-xl font-medium whitespace-nowrap">
                      VOCÊ RECEBE
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-10">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/raio.svg" alt="Icone raio" />



                      <div class="text-neutral-400 text-xl font-extrabold grow ">
                        Inscrição para o Exame do CCA
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/raio.svg" alt="Icone raio" />
                      <div class="text-neutral-400 text-xl font-extrabold grow ">
                        Acesso à Comunidade e Networking
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/raio.svg" alt="Icone raio" />
                      <div class="text-neutral-400 text-xl font-extrabold grow ">
                        Live exclusiva para alunos
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">

                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/check.svg" alt="Icone check" />



                      <div class="text-neutral-400 text-xl font-medium grow">
                        Curso Intensivo CCA
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/check.svg" alt="Icone check" />
                      <div class="text-neutral-400 text-xl font-medium grow ">
                        19 Aulas completas
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/check.svg" alt="Icone check" />
                      <div class="text-neutral-400 text-xl font-medium grow ">
                        4 Apostilas abrangentes
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/check.svg" alt="Icone check" />
                      <div class="text-neutral-400 text-xl font-medium grow ">
                        Plantão de tira-dúvidas
                      </div>
                    </div>
                    <div class="items-stretch flex justify-between gap-3 mt-6">
                      <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
                        src="../assets/imgs/check.svg" alt="Icone check" />
                      <div class="text-neutral-400 text-xl font-medium grow ">
                        Atendimento humano e especializado
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="py-3 faq sm:py-20 bg-black depoimentos-fold">
      <Faq />
    </div>





    <div class="items-center bg-check self-stretch flex w-full flex-col px-20 py-12 max-md:max-w-full max-md:px-5">
      <div class="text-white text-center text-2xl sm:text-4xl font-bold tracking-tighter  mt-6 max-md:max-w-full">
        Comece agora a 1ª Certificação Cripto do Mercado Brasileiro
      </div>
      <div class="text-white text-center text-lg leading-7 max-w-[525px] mt-6 max-md:max-w-full">
        Não perca a oportunidade de liderar na indústria cripto. Torne-se um
        especialista certificado e seja um CCA
      </div>
      <div
        class="items-center flex justify-center gap-5 mt-12 mb-9 px-px max-md:max-w-full max-md:flex-wrap max-md:mt-10">
        <a @click="showLightBox()"
          class="cursor-pointer transition-all hover:bg-[#BDBDBD] min-w-[339px]  justify-center items-center bg-white flex gap-2 px-14 py-6 rounded-lg max-md:px-5">
          <img class="aspect-square object-contain object-center w-5 overflow-hidden shrink-0 max-w-full my-auto"
            src="../assets/imgs/embarque-agora.svg" alt="Embarque agora" />

          <div class="text-slate-950 text-xl font-extrabold leading-7 self-stretch sm:grow whitespace-nowrap">
            EMBARQUE AGORA
          </div>
        </a>
        <a href="https://wa.me/message/W2USYZZK75FMC1#" target="_blank"
          class="transition-all hover:bg-[#008CA1] items-center bg-cyan-950 flex justify-between gap-4 px-10 py-4 rounded-lg max-md:px-5">
          <img class="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
            src="../assets/imgs/fale-com-time.svg" alt="Fale com o nosso time" />

          <div class="items-stretch self-stretch flex grow basis-[0%] flex-col">
            <div class="text-white text-xs tracking-tight whitespace-nowrap">
              TEM ALGUMA DÚVIDA?
            </div>
            <div class="text-white text-xl font-bold whitespace-nowrap mt-1">
              FALE COM O NOSSO TIME.
            </div>
          </div>
        </a>
      </div>
    </div>

    <footer class="bg-black py-12 sm:py-24 " id="home-footer">

      <div class="container mx-auto">

        <div class="px-10 sm:px-0 sm:flex flex-col lg:flex-row items-start  pb-16">

          <div class="sm:flex items-start justify-start lg:mr-18 flex-1 w-full">

            <div class="text-center sm:text-left sm:mr-44">

              <span
                style="box-sizing:border-box;display:inline-block;overflow:hidden;width:initial;height:initial;background:none;opacity:1;border:0;margin:0;padding:0;position:relative;max-width:100%">

                <img src="../assets/imgs/logo-ancord-rodape.svg" alt="Logo Ancord" />




              </span>


              <div class="mt-14 text-center mx-auto sm:text-left">

                <img src="../assets/imgs/ancord-bt-rodape.svg" class="inline-block sm:block" alt="Logo Ancord Blocktrends" />




              </div>


            </div>

            <div class="flex relative sm:flex-col lg:flex-row  text-sm lg:text-md w-full">




              <div class="mb-4 mt-10 lg:mt-0 flex flex-col mr-16 sm:mr-20">

                <h6 class="text-sm  font-semibold text-[#00A7D0] mb-5">INSTITUCIONAL</h6>
                <a class="text-white text-left text-sm hover:text-green-main mb-5 font-normal"
                  href="#programa">Programa</a>

                <a class="text-white text-left text-sm hover:text-green-main mb-5 font-normal"
                  href="#conteudo">Conteúdo</a>
                <a class="text-white text-left text-sm hover:text-green-main mb-5 font-normal"
                  href="#mentores">Mentores</a>
                <a class="text-white text-left text-sm hover:text-green-main mb-5 font-normal" href="#sobre">Sobre</a>
                <a class="text-white text-left text-sm hover:text-green-main font-normal" href="#faq">FAQ</a>

              </div>

              <div class="mb-4 mt-10 lg:mt-0 flex flex-col sm:mr-20">

                <h6 class="text-sm  font-bold text-[#00A7D0] mb-5">POLÍTICAS</h6>
                <a class="text-white cursor-pointer text-left text-sm hover:text-green-main mb-5 font-normal" @click="showTermos()">Termos e
                  Condições</a>
                <a class="text-white cursor-pointer text-left text-sm hover:text-green-main mb-5 font-normal" @click="showPoliticas()">Política de
                  Privacidade</a>



              </div>




              <div class="mb-4 flex flex-col absolute right-0 bottom-0 xl:bottom-auto">
                <a href="#">
                  <img src="../assets/imgs/voltar-topo.svg" alt="Voltar para o topo" />

                </a>


            </div>

          </div>

        </div>



      </div>





    </div>




  </footer>
</div></template>

<script lang="ts">
import Header from '../components/header.vue'
import Hero from '../components/hero.vue'
import Programa from '../components/programa.vue'
import Aulas from '../components/aulas.vue'
import Faq from '../components/faq.vue'
import Mentores from '../components/mentores.vue'

export default defineNuxtComponent({
  components: {
    Header,
    Hero,
    Programa,
    Aulas,
    Faq,
    Mentores
  },

  data() {
    return {
     open: false,
    isHidden: true,
    isPoliticasHidden: true,
    isTermosHidden: true,
    }
  },
   methods: {
    showPoliticas() {
      this.isPoliticasHidden = !this.isPoliticasHidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showTermos() {
      this.isTermosHidden = !this.isTermosHidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showLightBox() {
      this.isHidden = !this.isHidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
 
  }
  
})

</script>
