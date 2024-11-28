<template>
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

  <div :class="{ hidden: isPoliticasHidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showPoliticas()" >
    </div>
    <Politicas />
    
  </div>

  <div :class="{ hidden: isDepo1Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo1()" >
    </div>
    <Depo1 />
    
  </div>

  <div :class="{ hidden: isDepo2Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo2()" >
    </div>
    <Depo2 />
    
  </div>

  <div :class="{ hidden: isDepo3Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo3()" >
    </div>
    <Depo3 />
    
  </div>

  <div :class="{ hidden: isDepo4Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo4()" >
    </div>
    <Depo4 />
    
  </div>

  <div :class="{ hidden: isDepo5Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo5()" >
    </div>
    <Depo5 />
    
  </div>

  <div :class="{ hidden: isDepo6Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo6()" >
    </div>
    <Depo6 />
    
  </div>

  <div :class="{ hidden: isDepo7Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo7()" >
    </div>
    <Depo7 />
    
  </div>

  <div :class="{ hidden: isDepo8Hidden  }">
    <div class="fixed bg-black cursor-pointer bg-opacity-75 left-0 right-0 top-0 bottom-0 z-40" @click="showDepo8()" >
    </div>
    <Depo8 />
    
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
    <div class="bg-[#010918] py-10 lg:py-20" id="depoimentos">
           <div class="xl:container mx-auto">
        <section class="flex flex-wrap gap-10 justify-between items-end">
    <div class="flex flex-col font-bold min-w-[240px] w-[550px] max-md:max-w-full">
      <h2 class="gap-2.5 mx-auto lg:mx-0 self-stretch p-2 max-w-full text-xs text-cyan-500 whitespace-nowrap rounded border border-solid bg-neutral-800 border-zinc-600 min-h-[29px] w-[106px]">
        DEPOIMENTOS
      </h2>
      <h3 class="mt-6 text-3xl lg:text-5xl text-center lg:text-left text-white lg:leading-[58px] ">
        Ser certificado como CCA vale a pena?
      </h3>
    </div>
    <div class="hidden lg:flex gap-4 items-end text-xl tracking-normal text-white min-w-[240px]">
      <p class="w-[214px]">O próximo depoimento pode ser o seu</p>
      
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" class="object-contain shrink-0 w-6 aspect-square" xmlns="http://www.w3.org/2000/svg">
<path d="M19.5 13.5L12 21M12 21L4.5 13.5M12 21L12 3" stroke="#00A7D0" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

    </div>
  </section>
  <div>
    <section class="lg:flex pt-10 depoimentos-section lg:pt-20 flex-wrap justify-between items-center font-bold leading-none">

<Carousel v-bind="settings" :breakpoints="breakpoints">
   <slide v-for="depoimento in depoimentos"  :key="depoimento.indice">

   <article @click="showDepo(depoimento.indice)" class="cursor-pointer px-2 flex max-w-[444px]  relative flex-col  self-stretch pb-8  my-auto      ">
    <img loading="lazy" :src="depoimento.image" :alt="depoimento.nome" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex bottom-16 justify-between px-5 w-full  absolute">
      <div class="flex flex-col self-stretch my-auto ">
        <h3 class="text-3xl text-left tracking-tighter text-white">{{depoimento.nome}}</h3>
        <p class="mt-4 text-left text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
      
<svg width="82" height="81" class="object-contain mr-4 shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>


    </div>
  </article>

  </slide>


                    <template #addons>
                        <Navigation />
                        <div class="sm:hidden mt-7"><Pagination /></div>
                    </template>


                </Carousel>

<!--
  <article @click="showDepo1()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch pb-8  my-auto      ">
    <img loading="lazy" src="../assets/imgs/01.webp" alt="Lucas Q. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex bottom-16 justify-between px-5 w-full  absolute">
      <div class="flex flex-col self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Lucas Q.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
      
<svg width="82" height="81" class="object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>


    </div>
  </article>
  <article @click="showDepo2()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]   relative flex-col   self-stretch pb-8  my-auto  ">
    <img loading="lazy" src="../assets/imgs/02.webp" alt="João V. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex bottom-16 justify-between px-5 w-full absolute gap-10 items-center">
      <div class="flex flex-col self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">João V.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

  <article @click="showDepo3()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch  pb-8 my-auto ">
    <img loading="lazy" src="../assets/imgs/03.webp" alt="Giovani R. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex absolute justify-between px-5 w-full bottom-16  gap-10 items-center">
      <div class="flex flex-col justify-center self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Giovani R.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

  <article @click="showDepo4()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch  pb-8 my-auto ">
    <img loading="lazy" src="../assets/imgs/04.webp" alt="Otavio M. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex absolute justify-between px-5 w-full bottom-16  gap-10 items-center">
      <div class="flex flex-col justify-center self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Otávio M.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

  <article @click="showDepo5()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch  pb-8 my-auto ">
    <img loading="lazy" src="../assets/imgs/05.webp" alt="Danilo R. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex absolute justify-between px-5 w-full bottom-16  gap-10 items-center">
      <div class="flex flex-col justify-center self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Danilo R.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

  <article @click="showDepo6()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch  pb-8 my-auto ">
    <img loading="lazy" src="../assets/imgs/06.webp" alt="Thiago C. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex absolute justify-between px-5 w-full bottom-16  gap-10 items-center">
      <div class="flex flex-col justify-center self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Thiago C.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

   <article @click="showDepo7()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch  pb-8 my-auto ">
    <img loading="lazy" src="../assets/imgs/07.webp" alt="Carlos N. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex absolute justify-between px-5 w-full bottom-16  gap-10 items-center">
      <div class="flex flex-col justify-center self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Carlos N.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

   <article @click="showDepo8()" class="cursor-pointer flex max-w-[444px] lg:max-w-[30%]  relative flex-col  self-stretch  pb-8 my-auto ">
    <img loading="lazy" src="../assets/imgs/08.webp" alt="Gabriel R. portrait" class="object-cover  inset-0 size-full rounded-2xl border-2 border-cyan-500 border-solid" />
    <div class="flex absolute justify-between px-5 w-full bottom-16  gap-10 items-center">
      <div class="flex flex-col justify-center self-stretch my-auto ">
        <h3 class="text-3xl tracking-tighter text-white">Gabriel R.</h3>
        <p class="mt-4 text-xl tracking-tight text-cyan-500 uppercase">aluno cca certificado</p>
      </div>
   <svg width="82" height="81" class=" object-contain shrink-0 self-stretch my-auto aspect-square w-[81px]" viewBox="0 0 82 81" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M29.8462 52.8C29.8462 53.84 30.9262 54.53 31.8662 54.08L57.7562 41.9C58.8462 41.39 58.8462 39.84 57.7562 39.33L31.8662 27.15C30.9262 26.71 29.8462 27.39 29.8462 28.43V52.8Z" fill="white"/>
<path d="M41.1862 0.23999C18.8862 0.23999 0.806152 18.32 0.806152 40.62C0.806152 62.92 18.8862 81 41.1862 81C63.4862 81 81.5662 62.92 81.5662 40.62C81.5662 18.32 63.4862 0.23999 41.1862 0.23999ZM41.1862 78.34C20.3562 78.34 3.46615 61.45 3.46615 40.62C3.46615 19.79 20.3462 2.89999 41.1862 2.89999C62.0262 2.89999 78.9062 19.79 78.9062 40.62C78.9062 61.45 62.0162 78.34 41.1862 78.34Z" fill="white"/>
</svg>
 </div>
  </article>

-->

  <div class="mx-auto text-center">
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
                        MATRICULE-SE AGORA
                      </div>
                    </a>
                  </div>
</section>
  </div>
      </div>
      </div>
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
                <div class="bg-[#05D361] rounded-t-md py-3 flex justify-center">
               <span class="hidden  button-bf text-xl sm:text-3xl font-bold flex items-center">
               BLACK FRIDAY CCA <span class="text-4xl mx-2 sm:mx-3 text-[#01602C] ">•</span> 60% OFF
               </span>
<svg class="preco-desconto" width="217" height="25" viewBox="0 0 217 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 14.75L15.5 8.75M20 5.25699V22.25L16.25 20.75L12.5 22.25L8.75 20.75L5 22.25V5.25699C5 4.149 5.80608 3.20014 6.90668 3.07241C8.74156 2.85947 10.608 2.75 12.5 2.75C14.392 2.75 16.2584 2.85947 18.0933 3.07241C19.1939 3.20014 20 4.149 20 5.25699ZM10.25 9.5H10.2575V9.5075H10.25V9.5ZM10.625 9.5C10.625 9.70711 10.4571 9.875 10.25 9.875C10.0429 9.875 9.875 9.70711 9.875 9.5C9.875 9.29289 10.0429 9.125 10.25 9.125C10.4571 9.125 10.625 9.29289 10.625 9.5ZM14.75 14H14.7575V14.0075H14.75V14ZM15.125 14C15.125 14.2071 14.9571 14.375 14.75 14.375C14.5429 14.375 14.375 14.2071 14.375 14C14.375 13.7929 14.5429 13.625 14.75 13.625C14.9571 13.625 15.125 13.7929 15.125 14Z" stroke="black" stroke-width="1.55" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M34.3236 16.696V8.191H36.2406V16.696H34.3236ZM31.0206 13.411V11.494H39.5256V13.411H31.0206ZM46.8582 19.198C46.0062 19.198 45.2142 19.066 44.4822 18.802C43.7502 18.538 43.1172 18.178 42.5832 17.722C42.0492 17.26 41.6442 16.732 41.3682 16.138L43.4202 14.923C43.6542 15.331 43.9182 15.7 44.2122 16.03C44.5062 16.354 44.8452 16.612 45.2292 16.804C45.6192 16.99 46.0722 17.083 46.5882 17.083C47.3682 17.083 47.9952 16.876 48.4692 16.462C48.9432 16.048 49.1802 15.508 49.1802 14.842C49.1802 14.422 49.0722 14.047 48.8562 13.717C48.6462 13.381 48.3552 13.117 47.9832 12.925C47.6112 12.733 47.1762 12.637 46.6782 12.637C46.4142 12.637 46.1622 12.661 45.9222 12.709C45.6882 12.751 45.4482 12.835 45.2022 12.961C44.9622 13.081 44.6952 13.255 44.4012 13.483C44.3172 13.519 44.2572 13.537 44.2212 13.537C44.1912 13.537 44.1312 13.516 44.0412 13.474L42.1332 12.592L42.7272 5.986H51.0882L50.9892 8.137H44.8062L44.5542 11.278C45.0342 11.008 45.4902 10.813 45.9222 10.693C46.3602 10.573 46.8402 10.513 47.3622 10.513C48.2322 10.513 49.0092 10.678 49.6932 11.008C50.3832 11.332 50.9292 11.809 51.3312 12.439C51.7332 13.069 51.9342 13.837 51.9342 14.743C51.9342 15.661 51.7272 16.453 51.3132 17.119C50.8992 17.785 50.3112 18.298 49.5492 18.658C48.7932 19.018 47.8962 19.198 46.8582 19.198ZM58.5367 19.198C56.9587 19.198 55.7257 18.625 54.8377 17.479C53.9557 16.333 53.5147 14.683 53.5147 12.529C53.5147 11.089 53.7187 9.868 54.1267 8.866C54.5347 7.864 55.1137 7.105 55.8637 6.589C56.6137 6.067 57.5047 5.806 58.5367 5.806C60.0847 5.806 61.3057 6.385 62.1997 7.543C63.0937 8.695 63.5407 10.354 63.5407 12.52C63.5407 14.674 63.0997 16.327 62.2177 17.479C61.3357 18.625 60.1087 19.198 58.5367 19.198ZM58.5367 17.047C59.3107 17.047 59.8777 16.702 60.2377 16.012C60.5977 15.316 60.7777 14.155 60.7777 12.529C60.7777 10.867 60.5947 9.676 60.2287 8.956C59.8627 8.236 59.2957 7.876 58.5277 7.876C57.7597 7.876 57.1867 8.239 56.8087 8.965C56.4367 9.691 56.2507 10.879 56.2507 12.529C56.2507 14.149 56.4367 15.307 56.8087 16.003C57.1807 16.699 57.7567 17.047 58.5367 17.047ZM67.4292 19.072L76.2222 5.842H77.7432L68.9952 19.072H67.4292ZM68.4552 13.168C67.8312 13.168 67.2702 13.006 66.7722 12.682C66.2742 12.352 65.8812 11.911 65.5932 11.359C65.3052 10.807 65.1612 10.192 65.1612 9.514C65.1612 8.824 65.3052 8.197 65.5932 7.633C65.8872 7.069 66.2832 6.622 66.7812 6.292C67.2792 5.956 67.8372 5.788 68.4552 5.788C69.0732 5.788 69.6282 5.956 70.1202 6.292C70.6122 6.622 71.0022 7.069 71.2902 7.633C71.5782 8.197 71.7222 8.824 71.7222 9.514C71.7222 10.192 71.5812 10.807 71.2992 11.359C71.0172 11.911 70.6272 12.352 70.1292 12.682C69.6372 13.006 69.0792 13.168 68.4552 13.168ZM68.4372 11.836C68.9112 11.836 69.2562 11.641 69.4722 11.251C69.6882 10.855 69.7962 10.276 69.7962 9.514C69.7962 8.728 69.6852 8.131 69.4632 7.723C69.2412 7.315 68.8992 7.111 68.4372 7.111C67.9812 7.111 67.6422 7.318 67.4202 7.732C67.1982 8.14 67.0872 8.734 67.0872 9.514C67.0872 10.27 67.1952 10.846 67.4112 11.242C67.6332 11.638 67.9752 11.836 68.4372 11.836ZM76.9962 19.18C76.3662 19.18 75.8022 19.018 75.3042 18.694C74.8062 18.37 74.4132 17.932 74.1252 17.38C73.8372 16.822 73.6932 16.198 73.6932 15.508C73.6932 14.818 73.8372 14.191 74.1252 13.627C74.4192 13.063 74.8152 12.616 75.3132 12.286C75.8172 11.95 76.3782 11.782 76.9962 11.782C77.6142 11.782 78.1692 11.95 78.6612 12.286C79.1592 12.616 79.5522 13.063 79.8402 13.627C80.1282 14.191 80.2722 14.818 80.2722 15.508C80.2722 16.198 80.1312 16.822 79.8492 17.38C79.5672 17.932 79.1772 18.37 78.6792 18.694C78.1872 19.018 77.6262 19.18 76.9962 19.18ZM76.9782 17.83C77.4462 17.83 77.7882 17.635 78.0042 17.245C78.2202 16.849 78.3282 16.276 78.3282 15.526C78.3282 14.74 78.2172 14.143 77.9952 13.735C77.7732 13.327 77.4342 13.123 76.9782 13.123C76.5222 13.123 76.1832 13.33 75.9612 13.744C75.7452 14.152 75.6372 14.746 75.6372 15.526C75.6372 16.27 75.7452 16.84 75.9612 17.236C76.1772 17.632 76.5162 17.83 76.9782 17.83ZM86.7529 19V5.986C86.8189 5.986 87.0019 5.986 87.3019 5.986C87.6079 5.986 87.9649 5.986 88.3729 5.986C88.7869 5.986 89.1979 5.989 89.6059 5.995C90.0199 5.995 90.3649 5.998 90.6409 6.004C92.2189 6.04 93.5059 6.322 94.5019 6.85C95.4979 7.378 96.2269 8.116 96.6889 9.064C97.1569 10.012 97.3909 11.134 97.3909 12.43C97.3909 13.78 97.1449 14.947 96.6529 15.931C96.1609 16.909 95.4079 17.665 94.3939 18.199C93.3859 18.733 92.1049 19 90.5509 19H86.7529ZM89.3989 16.876H90.6049C91.3489 16.876 92.0239 16.732 92.6299 16.444C93.2419 16.156 93.7309 15.685 94.0969 15.031C94.4629 14.377 94.6459 13.504 94.6459 12.412C94.6459 11.398 94.4839 10.576 94.1599 9.946C93.8359 9.31 93.3739 8.845 92.7739 8.551C92.1739 8.257 91.4629 8.11 90.6409 8.11H89.3989V16.876ZM99.708 19V5.986H108.645L108.636 8.2H102.345V11.359H107.808V13.528H102.327V16.759L108.735 16.768V19H99.708ZM115.194 19V5.986C115.26 5.986 115.443 5.986 115.743 5.986C116.049 5.986 116.406 5.986 116.814 5.986C117.228 5.986 117.639 5.989 118.047 5.995C118.461 5.995 118.806 5.998 119.082 6.004C120.66 6.04 121.947 6.322 122.943 6.85C123.939 7.378 124.668 8.116 125.13 9.064C125.598 10.012 125.832 11.134 125.832 12.43C125.832 13.78 125.586 14.947 125.094 15.931C124.602 16.909 123.849 17.665 122.835 18.199C121.827 18.733 120.546 19 118.992 19H115.194ZM117.84 16.876H119.046C119.79 16.876 120.465 16.732 121.071 16.444C121.683 16.156 122.172 15.685 122.538 15.031C122.904 14.377 123.087 13.504 123.087 12.412C123.087 11.398 122.925 10.576 122.601 9.946C122.277 9.31 121.815 8.845 121.215 8.551C120.615 8.257 119.904 8.11 119.082 8.11H117.84V16.876ZM128.149 19V5.986H137.086L137.077 8.2H130.786V11.359H136.249V13.528H130.768V16.759L137.176 16.768V19H128.149ZM144.576 19.18C143.928 19.18 143.295 19.099 142.677 18.937C142.059 18.775 141.495 18.532 140.985 18.208C140.475 17.884 140.055 17.479 139.725 16.993C139.401 16.507 139.206 15.937 139.14 15.283H141.831C141.921 15.679 142.092 16.012 142.344 16.282C142.602 16.552 142.932 16.759 143.334 16.903C143.742 17.047 144.207 17.119 144.729 17.119C145.143 17.119 145.536 17.059 145.908 16.939C146.28 16.819 146.583 16.636 146.817 16.39C147.051 16.144 147.168 15.835 147.168 15.463C147.168 15.019 147.006 14.686 146.682 14.464C146.358 14.236 145.917 14.056 145.359 13.924L142.92 13.393C142.23 13.249 141.627 13.027 141.111 12.727C140.601 12.421 140.208 12.025 139.932 11.539C139.656 11.047 139.518 10.45 139.518 9.748C139.518 8.938 139.74 8.239 140.184 7.651C140.634 7.063 141.243 6.613 142.011 6.301C142.785 5.983 143.652 5.824 144.612 5.824C145.698 5.824 146.613 6.001 147.357 6.355C148.107 6.703 148.68 7.177 149.076 7.777C149.472 8.371 149.673 9.034 149.679 9.766H147.051C147.003 9.316 146.865 8.956 146.637 8.686C146.409 8.41 146.115 8.212 145.755 8.092C145.401 7.966 144.996 7.903 144.54 7.903C143.754 7.903 143.181 8.062 142.821 8.38C142.461 8.698 142.281 9.067 142.281 9.487C142.281 9.883 142.416 10.204 142.686 10.45C142.962 10.69 143.403 10.873 144.009 10.999L146.268 11.485C147.108 11.647 147.789 11.905 148.311 12.259C148.833 12.607 149.214 13.03 149.454 13.528C149.694 14.026 149.814 14.584 149.814 15.202C149.814 15.988 149.589 16.681 149.139 17.281C148.695 17.875 148.08 18.34 147.294 18.676C146.508 19.012 145.602 19.18 144.576 19.18ZM157.357 19.18C156.145 19.18 155.098 18.898 154.216 18.334C153.334 17.77 152.653 16.978 152.173 15.958C151.699 14.938 151.462 13.747 151.462 12.385C151.462 11.017 151.699 9.844 152.173 8.866C152.647 7.882 153.325 7.126 154.207 6.598C155.089 6.07 156.139 5.806 157.357 5.806C158.335 5.806 159.205 6.004 159.967 6.4C160.735 6.79 161.353 7.324 161.821 8.002C162.295 8.68 162.574 9.445 162.658 10.297H159.904C159.82 9.847 159.667 9.448 159.445 9.1C159.223 8.746 158.932 8.47 158.572 8.272C158.212 8.068 157.78 7.966 157.276 7.966C156.67 7.966 156.148 8.113 155.71 8.407C155.272 8.701 154.936 9.175 154.702 9.829C154.468 10.483 154.351 11.347 154.351 12.421C154.351 14.041 154.609 15.214 155.125 15.94C155.647 16.66 156.364 17.02 157.276 17.02C157.78 17.02 158.212 16.906 158.572 16.678C158.932 16.444 159.223 16.138 159.445 15.76C159.667 15.376 159.82 14.956 159.904 14.5H162.658C162.58 15.118 162.43 15.709 162.208 16.273C161.986 16.831 161.671 17.329 161.263 17.767C160.855 18.205 160.33 18.55 159.688 18.802C159.046 19.054 158.269 19.18 157.357 19.18ZM170.385 19.18C169.155 19.18 168.09 18.913 167.19 18.379C166.296 17.839 165.603 17.074 165.111 16.084C164.625 15.088 164.382 13.9 164.382 12.52C164.382 11.134 164.628 9.94 165.12 8.938C165.618 7.936 166.317 7.165 167.217 6.625C168.117 6.079 169.173 5.806 170.385 5.806C171.591 5.806 172.641 6.076 173.535 6.616C174.429 7.156 175.119 7.927 175.605 8.929C176.097 9.931 176.343 11.128 176.343 12.52C176.343 13.894 176.1 15.079 175.614 16.075C175.134 17.071 174.447 17.839 173.553 18.379C172.659 18.913 171.603 19.18 170.385 19.18ZM170.385 17.02C171.021 17.02 171.57 16.87 172.032 16.57C172.5 16.264 172.86 15.784 173.112 15.13C173.364 14.47 173.49 13.612 173.49 12.556C173.49 11.47 173.361 10.591 173.103 9.919C172.851 9.247 172.491 8.755 172.023 8.443C171.561 8.125 171.015 7.966 170.385 7.966C169.755 7.966 169.206 8.125 168.738 8.443C168.27 8.755 167.907 9.25 167.649 9.928C167.391 10.6 167.262 11.476 167.262 12.556C167.262 13.618 167.391 14.476 167.649 15.13C167.907 15.784 168.27 16.264 168.738 16.57C169.206 16.87 169.755 17.02 170.385 17.02ZM178.669 19V5.986H181.27L187.21 14.599V5.986H189.838V19H187.471L181.288 10.045V19H178.669ZM195.566 19V8.326H191.633V5.986H202.046V8.326H198.203V19H195.566ZM209.197 19.18C207.967 19.18 206.902 18.913 206.002 18.379C205.108 17.839 204.415 17.074 203.923 16.084C203.437 15.088 203.194 13.9 203.194 12.52C203.194 11.134 203.44 9.94 203.932 8.938C204.43 7.936 205.129 7.165 206.029 6.625C206.929 6.079 207.985 5.806 209.197 5.806C210.403 5.806 211.453 6.076 212.347 6.616C213.241 7.156 213.931 7.927 214.417 8.929C214.909 9.931 215.155 11.128 215.155 12.52C215.155 13.894 214.912 15.079 214.426 16.075C213.946 17.071 213.259 17.839 212.365 18.379C211.471 18.913 210.415 19.18 209.197 19.18ZM209.197 17.02C209.833 17.02 210.382 16.87 210.844 16.57C211.312 16.264 211.672 15.784 211.924 15.13C212.176 14.47 212.302 13.612 212.302 12.556C212.302 11.47 212.173 10.591 211.915 9.919C211.663 9.247 211.303 8.755 210.835 8.443C210.373 8.125 209.827 7.966 209.197 7.966C208.567 7.966 208.018 8.125 207.55 8.443C207.082 8.755 206.719 9.25 206.461 9.928C206.203 10.6 206.074 11.476 206.074 12.556C206.074 13.618 206.203 14.476 206.461 15.13C206.719 15.784 207.082 16.264 207.55 16.57C208.018 16.87 208.567 17.02 209.197 17.02Z" fill="black"/>
</svg>

                </div>
                <div
                  class="bg-black flex grow flex-col justify-center items-center w-full px-4 xl:px-16 pt-8 sm:pt-0 sm:py-12 rounded-lg max-md:max-w-full max-md:px-2">
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
                     
                          <span class="font-bold preco-desconto">R$ 1.947 à vista ou</span>
                          <span class="font-bold hidden button-bf">R$ 1.558 à vista ou</span>
                        </div>

                        <div
                          class="text-cyan-500 text-center text-4xl sm:text-5xl tracking-tighter whitespace-nowrap mt-4">
                          <span class="text-[28px] mr-1">10x </span>
                          <span class="font-bold preco-desconto"> R$271,61 </span>
                            <span class="font-bold hidden button-bf mr-2"> R$217,34   </span>
                          <span class="text-[28px] mr-1"> no cartão</span>
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
     <div class="flex gap-2 justify-center text-sm font-medium text-zinc-500">

  
<svg  class="shrink-0 my-auto w-5 aspect-square" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18 10C18 14.4183 14.4183 18 10 18C5.58172 18 2 14.4183 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10ZM11 6C11 6.55228 10.5523 7 10 7C9.44771 7 9 6.55228 9 6C9 5.44772 9.44771 5 10 5C10.5523 5 11 5.44772 11 6ZM9 9C8.58579 9 8.25 9.33579 8.25 9.75C8.25 10.1642 8.58579 10.5 9 10.5H9.25338C9.41332 10.5 9.53213 10.6481 9.49743 10.8042L9.03829 12.8704C8.79542 13.9633 9.62706 15 10.7466 15H11C11.4142 15 11.75 14.6642 11.75 14.25C11.75 13.8358 11.4142 13.5 11 13.5H10.7466C10.5867 13.5 10.4679 13.3519 10.5026 13.1958L10.9617 11.1296C11.2046 10.0367 10.3729 9 9.25338 9H9Z" fill="#7A7A7E"/>
</svg>

  <div class="hidebrs">
    Obtenha desconto somente para compras em lote,<br />
    acima de 10 AIs. (<a target="_blank" href="mailto:contato@blocktrends.com.br">contato@blocktrends.com.br</a>).
  </div>
</div>

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

<a class="fixed  bottom-5 right-5" href="https://wa.me/message/W2USYZZK75FMC1" target="_blank">
<svg width="64" height="64" class="sm:hidden" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="32" cy="32" r="32" fill="#1D873E"></circle>
<path fill-rule="evenodd" clip-rule="evenodd" d="M40.463 35.8158C40.0062 35.5872 37.7604 34.4824 37.3416 34.3301C36.9229 34.1777 36.6185 34.1015 36.3139 34.5587C36.0094 35.0158 35.134 36.0444 34.8675 36.3492C34.6011 36.6539 34.3347 36.6921 33.8779 36.4634C33.4211 36.2349 31.9492 35.7526 30.2045 34.1969C28.8466 32.9861 27.9298 31.4906 27.6633 31.0334C27.3969 30.5763 27.6349 30.3292 27.8637 30.1015C28.0691 29.897 28.3204 29.5682 28.5488 29.3015C28.7772 29.0348 28.8533 28.8444 29.0056 28.5397C29.1579 28.2349 29.0817 27.9682 28.9675 27.7396C28.8533 27.511 27.9398 25.2634 27.5592 24.3491C27.1884 23.4587 26.8118 23.5791 26.5314 23.5652C26.2652 23.5519 25.9604 23.5491 25.6559 23.5491C25.3514 23.5491 24.8566 23.6634 24.4378 24.1205C24.0191 24.5777 22.8391 25.6825 22.8391 27.9301C22.8391 30.1777 24.4759 32.3491 24.7043 32.6539C24.9327 32.9587 27.9253 37.5711 32.5076 39.5491C33.5974 40.0196 34.4483 40.3005 35.1116 40.5111C36.2059 40.8586 37.2017 40.8096 37.9888 40.692C38.8664 40.5609 40.6914 39.5872 41.0721 38.5206C41.4526 37.4539 41.4526 36.5396 41.3385 36.3492C41.2243 36.1587 40.9198 36.0444 40.463 35.8158ZM32.1285 47.1922H32.1224C29.3958 47.1911 26.7216 46.4589 24.3886 45.0749L23.8338 44.7456L18.0828 46.2538L19.6179 40.6485L19.2565 40.0738C17.7355 37.6553 16.9322 34.86 16.9334 31.9899C16.9367 23.6147 23.7531 16.8009 32.1346 16.8009C36.1931 16.8025 40.0082 18.3846 42.877 21.2557C45.7458 24.1269 47.3248 27.9434 47.3233 32.0021C47.3198 40.3779 40.5035 47.1922 32.1285 47.1922ZM45.0606 19.074C41.6091 15.6196 37.0189 13.7162 32.1285 13.7143C22.052 13.7143 13.851 21.9122 13.847 31.9887C13.8456 35.2098 14.6874 38.354 16.2872 41.1253L13.6936 50.5957L23.3849 48.0544C26.0551 49.5103 29.0615 50.2776 32.1212 50.2789H32.1287H32.1288C42.2043 50.2789 50.406 42.0799 50.4101 32.0033C50.412 27.1201 48.5122 22.5284 45.0606 19.074Z" fill="white"></path>
</svg>
<svg width="96" height="96" class="hidden m-5 sm:block" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="48" cy="48" r="48" fill="#05D361"/>
<path d="M22.4028 72.7012L25.9918 59.6686C23.7729 55.8432 22.609 51.5111 22.6211 47.0824C22.6211 33.205 33.97 21.922 47.9015 21.922C54.6672 21.922 61.0207 24.5406 65.7858 29.2952C70.563 34.0497 73.1941 40.3729 73.182 47.0944C73.182 60.9718 61.8331 72.2548 47.8894 72.2548H47.8773C43.6457 72.2548 39.4868 71.1928 35.7887 69.1897L22.4028 72.7012ZM36.4314 64.6403L37.1952 65.0988C40.4205 67.0055 44.1186 68.0071 47.8894 68.0191H47.9015C59.4808 68.0191 68.914 58.6428 68.914 47.1065C68.914 41.5193 66.7315 36.2701 62.7667 32.312C58.8018 28.3539 53.5154 26.1818 47.9015 26.1818C36.3222 26.1697 26.8891 35.546 26.8891 47.0824C26.8891 51.0284 27.9924 54.8778 30.1022 58.2084L30.5993 59.0049L28.4774 66.7159L36.4314 64.6403Z" fill="white"/>
<path d="M22.4028 72.7012L25.9918 59.6686C23.7729 55.8432 22.609 51.5111 22.6211 47.0824C22.6211 33.205 33.97 21.922 47.9015 21.922C54.6672 21.922 61.0207 24.5406 65.7858 29.2952C70.563 34.0497 73.1941 40.3729 73.182 47.0944C73.182 60.9718 61.8331 72.2548 47.8894 72.2548H47.8773C43.6457 72.2548 39.4868 71.1928 35.7887 69.1897L22.4028 72.7012ZM36.4314 64.6403L37.1952 65.0988C40.4205 67.0055 44.1186 68.0071 47.8894 68.0191H47.9015C59.4808 68.0191 68.914 58.6428 68.914 47.1065C68.914 41.5193 66.7315 36.2701 62.7667 32.312C58.8018 28.3539 53.5154 26.1818 47.9015 26.1818C36.3222 26.1697 26.8891 35.546 26.8891 47.0824C26.8891 51.0284 27.9924 54.8778 30.1022 58.2084L30.5993 59.0049L28.4774 66.7159L36.4314 64.6403Z" fill="url(#paint0_linear_2258_49)"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M41.5845 36.5597C41.1117 35.5098 40.6145 35.4857 40.1659 35.4736C39.8022 35.4616 39.3778 35.4616 38.9534 35.4616C38.5291 35.4616 37.8501 35.6185 37.2681 36.246C36.6861 36.8735 35.0613 38.3939 35.0613 41.4952C35.0613 44.5845 37.3287 47.5772 37.6439 47.9995C37.9592 48.4219 42.021 54.9744 48.4351 57.4965C53.7701 59.5962 54.8613 59.1738 56.0132 59.0652C57.1651 58.9566 59.7477 57.5447 60.2812 56.0725C60.8025 54.6003 60.8025 53.3453 60.6449 53.0798C60.4873 52.8144 60.0629 52.6575 59.4324 52.3437C58.8019 52.03 55.6979 50.5095 55.1159 50.2923C54.5339 50.0872 54.1096 49.9785 53.6973 50.606C53.273 51.2335 52.0605 52.6454 51.6967 53.0678C51.333 53.4901 50.9571 53.5384 50.3266 53.2246C49.6961 52.9109 47.6591 52.2472 45.2463 50.0992C43.3669 48.4339 42.0938 46.3704 41.73 45.7429C41.3663 45.1154 41.6937 44.7775 42.0089 44.4638C42.2878 44.1862 42.6394 43.7277 42.9547 43.3657C43.2699 43.0036 43.379 42.7382 43.5851 42.3158C43.7913 41.8935 43.6943 41.5314 43.5366 41.2177C43.379 40.916 42.1423 37.8026 41.5845 36.5597Z" fill="white"/>
<defs>
<linearGradient id="paint0_linear_2258_49" x1="47.7974" y1="72.6964" x2="47.7974" y2="21.922" gradientUnits="userSpaceOnUse">
<stop stop-color="#F9F9F9"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>
</a>




  </footer>
</div></template>

<script setup lang="ts">
useSeoMeta({
  title: 'Programa Certificação Criptoativos ANCORD',
  ogTitle: 'Programa Certificação Criptoativos ANCORD',
  description: 'Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD.',
  ogDescription: 'Domine a blockchain e lidere a revolução cripto com o Programa CCA, desenvolvido pelo BlockTrends e certificado pela ANCORD.',
  ogImage: '/ancord-share.jpg',
  twitterCard: 'summary_large_image',
})
</script>

<script lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

import lucasImage from '../assets/imgs/01.webp'

import joaoImage from '../assets/imgs/02.webp'

import giovaniImage from '../assets/imgs/03.webp'

import otavioImage from '../assets/imgs/04.webp'

import daniloImage from '../assets/imgs/05.webp'

import thiagoImage from '../assets/imgs/06.webp'

import carlosImage from '../assets/imgs/07.webp'

import gabrielImage from '../assets/imgs/08.webp'


import Header from '../components/header.vue'
import Hero from '../components/hero.vue'
import Programa from '../components/programa.vue'
import Aulas from '../components/aulas.vue'
import Faq from '../components/faq.vue'
import Mentores from '../components/mentores.vue'

import Depo1 from '../components/depoimento1.vue'
import Depo2 from '../components/depoimento2.vue'
import Depo3 from '../components/depoimento3.vue'

import Depo4 from '../components/depoimento4.vue'
import Depo5 from '../components/depoimento5.vue'
import Depo6 from '../components/depoimento6.vue'
import Depo7 from '../components/depoimento7.vue'
import Depo8 from '../components/depoimento8.vue'

export default defineNuxtComponent({
  components: {
    Header,
    Hero,
    Programa,
    Aulas,
    Faq,
    Mentores,
    Depo1,
    Depo2,
    Depo3,
    Depo4,
    Depo5,
    Depo6,
    Depo7,
    Depo8,
    Carousel,
    Slide,
    Pagination,
    Navigation
  },

  data() {
    return {
     open: false,
    isHidden: true,
    isPoliticasHidden: true,
    isTermosHidden: true,
    isDepo1Hidden: true,
    isDepo2Hidden: true,
    isDepo3Hidden: true,
    isDepo4Hidden: true,
    isDepo5Hidden: true,
    isDepo6Hidden: true,
    isDepo7Hidden: true,
    isDepo8Hidden: true,
    depoimentos: [
         {
                    id: 'otavio', 
                    image: otavioImage, 
                    nome: 'Otávio M.', 
                    indice: '4',
                },
                {
                    id: 'danilo', 
                    image: daniloImage, 
                    nome: 'Danilo R.', 
                    indice: '5',
                },
                {
                    id: 'thiago', 
                    image: thiagoImage, 
                    nome: 'Thiago C.', 
                    indice: '6',
                },
                {
                    id: 'carlos', 
                    image: carlosImage, 
                    nome: 'Carlos N.', 
                    indice: '7',
                },
                {
                    id: 'gabriel', 
                    image: gabrielImage, 
                    nome: 'Gabriel R.', 
                    indice: '8',
                },
                {
                    id: 'lucas', 
                    image: lucasImage, 
                    nome: 'Lucas Q.', 
                    indice: '1',
                },
                
                {
                    id: 'joao', 
                    image: joaoImage, 
                    nome: 'João V.', 
                    indice: '2',
                },
                {
                    id: 'giovani', 
                    image: giovaniImage, 
                    nome: 'Giovani R.', 
                    indice: '3',
                },
                
            ],
            settings: {
                itemsToShow: 1,
                modelValue: 1,
                snapAlign: 'center',
                wrapAround: true,
            },
            breakpoints: {
                // 700px and up
                900: {
                    itemsToShow: 3,
                    snapAlign: 'center',
                    dots: true
                },
                1024: {
                    itemsToShow: 3,
                    snapAlign: 'start',
                    mouseDrag: false,
                    touchDrag: false,
                },
            },
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
    showDepo(depoNumber) {
      const key = `isDepo${depoNumber}Hidden`; // Dynamically generate the key
      if (this[key] !== undefined) { // Check if the key exists
        this[key] = !this[key]; // Toggle the value
        document.documentElement.classList.toggle("overflow-y-hidden");
        document.body.classList.toggle("overflow-y-hidden");
      } else {
        console.error(`Key ${key} does not exist`);
      }
    },
    showDepo1() {
      this.isDepo1Hidden = !this.isDepo1Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo2() {
      this.isDepo2Hidden = !this.isDepo2Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo3() {
      this.isDepo3Hidden = !this.isDepo3Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo4() {
      this.isDepo4Hidden = !this.isDepo4Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo5() {
      this.isDepo5Hidden = !this.isDepo5Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo6() {
      this.isDepo6Hidden = !this.isDepo6Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo7() {
      this.isDepo7Hidden = !this.isDepo7Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    },
    showDepo8() {
      this.isDepo8Hidden = !this.isDepo8Hidden;
      document.documentElement.classList.
            toggle("overflow-y-hidden");
      document.body.classList.
            toggle("overflow-y-hidden");
    }
 
  }
  
})

</script>
