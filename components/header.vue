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

  <a href="#matricule2" class="font-bold text-xl">
  BLACK FRIDAY CCA <span class="px-2">•</span>
50% OFF <span class="px-2">•</span>
ENTRE OS DIAS 24/11 E 12/12
</a>

  <!-- link normal 23/11/2025
  <a href="#matricule2">
O PROGRAMA CCA AGORA ESTÁ LIBERADO <br class="brmobile" />PARA TODOS OS PÚBLICOS! 
<u>MATRICULE-SE JÁ!</u></a>
-->
 
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

            <a href="#matricule2"
              class="text-slate-950 cursor-pointer text-base xl:text-lg 2xl:text-xl font-bold leading-7  whitespace-nowrap justify-center items-stretch rounded transition-all bg-cyan-500 hover:bg-[#0A6F94] self-stretch grow px-8 2xl:px-14 py-3.5 max-md:px-5">
              MATRICULE-SE
            </a>

            

          </div>
        </div>
      </nav>

      
      <div class="mt-10 flex items-center justify-center faixa-bf py-3 text-lg xl:tracking-[0.2em]  2xl:tracking-[0.38em] border-y-2 text-lg uppercase text-center  border-[#00A7D0] ">
      <span class="text-white font-light">Black Friday</span>
       <span class=" text-[#00A7D0] items-center">
       <span class="mx-3 text-4xl">•</span> 50% OFF <span class="mx-3 text-4xl">•</span>
       </span>
       <span class="text-white hidden sm:inline font-light">PROGRAMA CCA</span>
       <span class=" text-[#00A7D0] items-center hidden sm:inline">
       <span class="mx-3 text-4xl">•</span> 50% OFF <span class="mx-3 text-4xl">•</span>
       </span>
       <span class="text-white hidden sm:inline font-light">Black Friday</span>
        <span class=" text-[#00A7D0] items-center hidden sm:inline">
       <span class="mx-3 text-4xl">•</span> 50% OFF <span class="mx-3 text-4xl">•</span>
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
              <svg width="329" height="40" class=" mt-5 sm:mt-0 sm:ml-12 button-bf" viewBox="0 0 329 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 8C0 3.58172 3.58172 0 8 0H107V40H8C3.58172 40 0 36.4183 0 32V8Z" fill="#00A7D0"/>
<path d="M19.282 26.698C18.43 26.698 17.638 26.566 16.906 26.302C16.174 26.038 15.541 25.678 15.007 25.222C14.473 24.76 14.068 24.232 13.792 23.638L15.844 22.423C16.078 22.831 16.342 23.2 16.636 23.53C16.93 23.854 17.269 24.112 17.653 24.304C18.043 24.49 18.496 24.583 19.012 24.583C19.792 24.583 20.419 24.376 20.893 23.962C21.367 23.548 21.604 23.008 21.604 22.342C21.604 21.922 21.496 21.547 21.28 21.217C21.07 20.881 20.779 20.617 20.407 20.425C20.035 20.233 19.6 20.137 19.102 20.137C18.838 20.137 18.586 20.161 18.346 20.209C18.112 20.251 17.872 20.335 17.626 20.461C17.386 20.581 17.119 20.755 16.825 20.983C16.741 21.019 16.681 21.037 16.645 21.037C16.615 21.037 16.555 21.016 16.465 20.974L14.557 20.092L15.151 13.486H23.512L23.413 15.637H17.23L16.978 18.778C17.458 18.508 17.914 18.313 18.346 18.193C18.784 18.073 19.264 18.013 19.786 18.013C20.656 18.013 21.433 18.178 22.117 18.508C22.807 18.832 23.353 19.309 23.755 19.939C24.157 20.569 24.358 21.337 24.358 22.243C24.358 23.161 24.151 23.953 23.737 24.619C23.323 25.285 22.735 25.798 21.973 26.158C21.217 26.518 20.32 26.698 19.282 26.698ZM30.9605 26.698C29.3825 26.698 28.1495 26.125 27.2615 24.979C26.3795 23.833 25.9385 22.183 25.9385 20.029C25.9385 18.589 26.1425 17.368 26.5505 16.366C26.9585 15.364 27.5375 14.605 28.2875 14.089C29.0375 13.567 29.9285 13.306 30.9605 13.306C32.5085 13.306 33.7295 13.885 34.6235 15.043C35.5175 16.195 35.9645 17.854 35.9645 20.02C35.9645 22.174 35.5235 23.827 34.6415 24.979C33.7595 26.125 32.5325 26.698 30.9605 26.698ZM30.9605 24.547C31.7345 24.547 32.3015 24.202 32.6615 23.512C33.0215 22.816 33.2015 21.655 33.2015 20.029C33.2015 18.367 33.0185 17.176 32.6525 16.456C32.2865 15.736 31.7195 15.376 30.9515 15.376C30.1835 15.376 29.6105 15.739 29.2325 16.465C28.8605 17.191 28.6745 18.379 28.6745 20.029C28.6745 21.649 28.8605 22.807 29.2325 23.503C29.6045 24.199 30.1805 24.547 30.9605 24.547ZM39.853 26.572L48.646 13.342H50.167L41.419 26.572H39.853ZM40.879 20.668C40.255 20.668 39.694 20.506 39.196 20.182C38.698 19.852 38.305 19.411 38.017 18.859C37.729 18.307 37.585 17.692 37.585 17.014C37.585 16.324 37.729 15.697 38.017 15.133C38.311 14.569 38.707 14.122 39.205 13.792C39.703 13.456 40.261 13.288 40.879 13.288C41.497 13.288 42.052 13.456 42.544 13.792C43.036 14.122 43.426 14.569 43.714 15.133C44.002 15.697 44.146 16.324 44.146 17.014C44.146 17.692 44.005 18.307 43.723 18.859C43.441 19.411 43.051 19.852 42.553 20.182C42.061 20.506 41.503 20.668 40.879 20.668ZM40.861 19.336C41.335 19.336 41.68 19.141 41.896 18.751C42.112 18.355 42.22 17.776 42.22 17.014C42.22 16.228 42.109 15.631 41.887 15.223C41.665 14.815 41.323 14.611 40.861 14.611C40.405 14.611 40.066 14.818 39.844 15.232C39.622 15.64 39.511 16.234 39.511 17.014C39.511 17.77 39.619 18.346 39.835 18.742C40.057 19.138 40.399 19.336 40.861 19.336ZM49.42 26.68C48.79 26.68 48.226 26.518 47.728 26.194C47.23 25.87 46.837 25.432 46.549 24.88C46.261 24.322 46.117 23.698 46.117 23.008C46.117 22.318 46.261 21.691 46.549 21.127C46.843 20.563 47.239 20.116 47.737 19.786C48.241 19.45 48.802 19.282 49.42 19.282C50.038 19.282 50.593 19.45 51.085 19.786C51.583 20.116 51.976 20.563 52.264 21.127C52.552 21.691 52.696 22.318 52.696 23.008C52.696 23.698 52.555 24.322 52.273 24.88C51.991 25.432 51.601 25.87 51.103 26.194C50.611 26.518 50.05 26.68 49.42 26.68ZM49.402 25.33C49.87 25.33 50.212 25.135 50.428 24.745C50.644 24.349 50.752 23.776 50.752 23.026C50.752 22.24 50.641 21.643 50.419 21.235C50.197 20.827 49.858 20.623 49.402 20.623C48.946 20.623 48.607 20.83 48.385 21.244C48.169 21.652 48.061 22.246 48.061 23.026C48.061 23.77 48.169 24.34 48.385 24.736C48.601 25.132 48.94 25.33 49.402 25.33ZM64.5858 26.68C63.3558 26.68 62.2908 26.413 61.3908 25.879C60.4968 25.339 59.8038 24.574 59.3118 23.584C58.8258 22.588 58.5828 21.4 58.5828 20.02C58.5828 18.634 58.8288 17.44 59.3208 16.438C59.8188 15.436 60.5178 14.665 61.4178 14.125C62.3178 13.579 63.3738 13.306 64.5858 13.306C65.7918 13.306 66.8418 13.576 67.7358 14.116C68.6298 14.656 69.3198 15.427 69.8058 16.429C70.2978 17.431 70.5438 18.628 70.5438 20.02C70.5438 21.394 70.3008 22.579 69.8148 23.575C69.3348 24.571 68.6478 25.339 67.7538 25.879C66.8598 26.413 65.8038 26.68 64.5858 26.68ZM64.5858 24.52C65.2218 24.52 65.7708 24.37 66.2328 24.07C66.7008 23.764 67.0608 23.284 67.3128 22.63C67.5648 21.97 67.6908 21.112 67.6908 20.056C67.6908 18.97 67.5618 18.091 67.3038 17.419C67.0518 16.747 66.6918 16.255 66.2238 15.943C65.7618 15.625 65.2158 15.466 64.5858 15.466C63.9558 15.466 63.4068 15.625 62.9388 15.943C62.4708 16.255 62.1078 16.75 61.8498 17.428C61.5918 18.1 61.4628 18.976 61.4628 20.056C61.4628 21.118 61.5918 21.976 61.8498 22.63C62.1078 23.284 62.4708 23.764 62.9388 24.07C63.4068 24.37 63.9558 24.52 64.5858 24.52ZM72.8701 26.5V13.486H81.7261L81.7171 15.682H75.5161V18.949H80.8891V21.1H75.5161V26.5H72.8701ZM83.9092 26.5V13.486H92.7652L92.7562 15.682H86.5552V18.949H91.9282V21.1H86.5552V26.5H83.9092Z" fill="black"/>
<path d="M107 0H321C325.418 0 329 3.58172 329 8V32C329 36.4183 325.418 40 321 40H107V0Z" fill="white"/>
<path d="M132.958 26.5V13.486H137.674C139.378 13.486 140.641 13.78 141.463 14.368C142.291 14.95 142.705 15.793 142.705 16.897C142.705 17.545 142.54 18.109 142.21 18.589C141.88 19.063 141.292 19.477 140.446 19.831C140.992 19.969 141.433 20.155 141.769 20.389C142.105 20.623 142.363 20.884 142.543 21.172C142.723 21.454 142.846 21.751 142.912 22.063C142.978 22.369 143.011 22.672 143.011 22.972C143.011 24.172 142.603 25.06 141.787 25.636C140.971 26.212 139.672 26.5 137.89 26.5H132.958ZM135.577 24.466H137.944C138.736 24.466 139.333 24.307 139.735 23.989C140.143 23.671 140.347 23.245 140.347 22.711C140.347 22.327 140.248 22.006 140.05 21.748C139.852 21.484 139.582 21.286 139.24 21.154C138.904 21.022 138.52 20.956 138.088 20.956H135.577V24.466ZM135.577 18.868H138.088C138.358 18.868 138.616 18.838 138.862 18.778C139.114 18.712 139.336 18.613 139.528 18.481C139.726 18.349 139.882 18.181 139.996 17.977C140.11 17.767 140.167 17.521 140.167 17.239C140.167 16.675 139.954 16.249 139.528 15.961C139.108 15.667 138.568 15.52 137.908 15.52H135.577V18.868ZM145.526 26.5V13.486H148.172V24.277H153.824V26.5H145.526ZM155.216 26.5L159.869 13.486H162.65L167.303 26.5H164.684L163.622 23.485H158.933L157.853 26.5H155.216ZM159.527 21.19H162.983L161.264 16.015L159.527 21.19ZM173.925 26.68C172.713 26.68 171.666 26.398 170.784 25.834C169.902 25.27 169.221 24.478 168.741 23.458C168.267 22.438 168.03 21.247 168.03 19.885C168.03 18.517 168.267 17.344 168.741 16.366C169.215 15.382 169.893 14.626 170.775 14.098C171.657 13.57 172.707 13.306 173.925 13.306C174.903 13.306 175.773 13.504 176.535 13.9C177.303 14.29 177.921 14.824 178.389 15.502C178.863 16.18 179.142 16.945 179.226 17.797H176.472C176.388 17.347 176.235 16.948 176.013 16.6C175.791 16.246 175.5 15.97 175.14 15.772C174.78 15.568 174.348 15.466 173.844 15.466C173.238 15.466 172.716 15.613 172.278 15.907C171.84 16.201 171.504 16.675 171.27 17.329C171.036 17.983 170.919 18.847 170.919 19.921C170.919 21.541 171.177 22.714 171.693 23.44C172.215 24.16 172.932 24.52 173.844 24.52C174.348 24.52 174.78 24.406 175.14 24.178C175.5 23.944 175.791 23.638 176.013 23.26C176.235 22.876 176.388 22.456 176.472 22H179.226C179.148 22.618 178.998 23.209 178.776 23.773C178.554 24.331 178.239 24.829 177.831 25.267C177.423 25.705 176.898 26.05 176.256 26.302C175.614 26.554 174.837 26.68 173.925 26.68ZM181.544 26.5V13.486H184.271V19.444L189.014 13.486H192.029L188.078 18.526L192.506 26.5H189.644L186.197 20.443L184.271 22.765V26.5H181.544ZM198.507 26.5V13.486H207.363L207.354 15.682H201.153V18.949H206.526V21.1H201.153V26.5H198.507ZM209.546 26.5V13.486H215.036C216.074 13.486 216.923 13.651 217.583 13.981C218.243 14.311 218.729 14.77 219.041 15.358C219.353 15.94 219.509 16.612 219.509 17.374C219.509 18.058 219.401 18.637 219.185 19.111C218.975 19.579 218.696 19.969 218.348 20.281C218.006 20.593 217.631 20.848 217.223 21.046L219.644 26.5H216.917L214.802 21.487H212.165V26.5H209.546ZM212.165 19.462H214.568C215.27 19.462 215.825 19.273 216.233 18.895C216.647 18.517 216.854 18.031 216.854 17.437C216.854 16.837 216.656 16.363 216.26 16.015C215.864 15.667 215.363 15.493 214.757 15.493H212.165V19.462ZM222.079 26.5V13.486H224.698V26.5H222.079ZM227.616 26.5V13.486C227.682 13.486 227.865 13.486 228.165 13.486C228.471 13.486 228.828 13.486 229.236 13.486C229.65 13.486 230.061 13.489 230.469 13.495C230.883 13.495 231.228 13.498 231.504 13.504C233.082 13.54 234.369 13.822 235.365 14.35C236.361 14.878 237.09 15.616 237.552 16.564C238.02 17.512 238.254 18.634 238.254 19.93C238.254 21.28 238.008 22.447 237.516 23.431C237.024 24.409 236.271 25.165 235.257 25.699C234.249 26.233 232.968 26.5 231.414 26.5H227.616ZM230.262 24.376H231.468C232.212 24.376 232.887 24.232 233.493 23.944C234.105 23.656 234.594 23.185 234.96 22.531C235.326 21.877 235.509 21.004 235.509 19.912C235.509 18.898 235.347 18.076 235.023 17.446C234.699 16.81 234.237 16.345 233.637 16.051C233.037 15.757 232.326 15.61 231.504 15.61H230.262V24.376ZM239.028 26.5L243.681 13.486H246.462L251.115 26.5H248.496L247.434 23.485H242.745L241.665 26.5H239.028ZM243.339 21.19H246.795L245.076 16.015L243.339 21.19ZM254.736 26.5V21.019L250.218 13.486H253.062L256.059 18.76L259.02 13.486H261.891L257.364 21.028V26.5H254.736ZM272.45 26.68C271.238 26.68 270.191 26.398 269.309 25.834C268.427 25.27 267.746 24.478 267.266 23.458C266.792 22.438 266.555 21.247 266.555 19.885C266.555 18.517 266.792 17.344 267.266 16.366C267.74 15.382 268.418 14.626 269.3 14.098C270.182 13.57 271.232 13.306 272.45 13.306C273.428 13.306 274.298 13.504 275.06 13.9C275.828 14.29 276.446 14.824 276.914 15.502C277.388 16.18 277.667 16.945 277.751 17.797H274.997C274.913 17.347 274.76 16.948 274.538 16.6C274.316 16.246 274.025 15.97 273.665 15.772C273.305 15.568 272.873 15.466 272.369 15.466C271.763 15.466 271.241 15.613 270.803 15.907C270.365 16.201 270.029 16.675 269.795 17.329C269.561 17.983 269.444 18.847 269.444 19.921C269.444 21.541 269.702 22.714 270.218 23.44C270.74 24.16 271.457 24.52 272.369 24.52C272.873 24.52 273.305 24.406 273.665 24.178C274.025 23.944 274.316 23.638 274.538 23.26C274.76 22.876 274.913 22.456 274.997 22H277.751C277.673 22.618 277.523 23.209 277.301 23.773C277.079 24.331 276.764 24.829 276.356 25.267C275.948 25.705 275.423 26.05 274.781 26.302C274.139 26.554 273.362 26.68 272.45 26.68ZM285.37 26.68C284.158 26.68 283.111 26.398 282.229 25.834C281.347 25.27 280.666 24.478 280.186 23.458C279.712 22.438 279.475 21.247 279.475 19.885C279.475 18.517 279.712 17.344 280.186 16.366C280.66 15.382 281.338 14.626 282.22 14.098C283.102 13.57 284.152 13.306 285.37 13.306C286.348 13.306 287.218 13.504 287.98 13.9C288.748 14.29 289.366 14.824 289.834 15.502C290.308 16.18 290.587 16.945 290.671 17.797H287.917C287.833 17.347 287.68 16.948 287.458 16.6C287.236 16.246 286.945 15.97 286.585 15.772C286.225 15.568 285.793 15.466 285.289 15.466C284.683 15.466 284.161 15.613 283.723 15.907C283.285 16.201 282.949 16.675 282.715 17.329C282.481 17.983 282.364 18.847 282.364 19.921C282.364 21.541 282.622 22.714 283.138 23.44C283.66 24.16 284.377 24.52 285.289 24.52C285.793 24.52 286.225 24.406 286.585 24.178C286.945 23.944 287.236 23.638 287.458 23.26C287.68 22.876 287.833 22.456 287.917 22H290.671C290.593 22.618 290.443 23.209 290.221 23.773C289.999 24.331 289.684 24.829 289.276 25.267C288.868 25.705 288.343 26.05 287.701 26.302C287.059 26.554 286.282 26.68 285.37 26.68ZM291.622 26.5L296.275 13.486H299.056L303.709 26.5H301.09L300.028 23.485H295.339L294.259 26.5H291.622ZM295.933 21.19H299.389L297.67 16.015L295.933 21.19Z" fill="black"/>
</svg>
</div>

                  <!-- link normal 23/11/2025
             <div class="sm:flex text-center sm:text-left">
                  <img src="../assets/imgs/ancord-bt-topo.svg" class="inline-block" alt="Logo Ancord Blocktrends" />
   <img src="../assets/imgs/button-bf.svg" class="hidden mt-5 sm:mt-0 sm:ml-14 button-bf"
              alt="Logo Ancord" />
</div>-->




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

                <a href="#matricule2"
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

          <div class="relative mt-36 2xl:mt-20 inline-flex xl:block w-full " :class="youtube ? '' : 'sm:w-auto'">
            <div class="absolute -mt-[120px] md:-mt-[72px] items-center justify-center md:justify-between flex-wrap md:flex-nowrap flex gap-2 w-full">
              <div>
                  <h2
    class=" py-0 w-full text-xl 2xl:text-2xl tracking-tight text-white max-w-[1200px] max-md:text-2xl max-sm:text-xl max-sm:text-center"
  >
    É um Assessor de Investimentos?
  </h2>
              </div>
              <div class="mt-5 md:mt-0">
                <a href="https://wa.me/message/W2USYZZK75FMC1#"
                target="_blank"
                    class=" self-stretch hover:bg-[#05D361] hover:text-[#000] text-[#05D361] border-[#05D361] px-3 2xl:px-5 py-3 text-md 2xl:text-xl font-bold tracking-normal rounded-lg border-2  border-solid"
                    aria-label="Resgatar desconto"
                >
                    Clique para resgatar seu desconto
                </a>
              </div>
            </div>

            <iframe :class="youtube ? 'showVideo' : '' " class="mt-36 sm:mt-10 iframe-video" style="aspect-ratio: 16 / 9;width: 100%;" 
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
