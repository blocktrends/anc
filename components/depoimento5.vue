<template>


    <div class="fixed max-w-[88vw] shadow-md rounded-lg  h-max pb-7 md:pb-9 w-[560px] z-50 left-0 right-0 top-0 bottom-0 m-auto">

    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 -right-5 pointer-events-none -z-50 absolute text-white">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
</svg>

        <div class="flex justify-center">
            <div class="w-full md:mx-14">
                <iframe class="max-h-[85vh] max-w-[80vw] mx-auto " width="480" height="853" 
src="https://www.youtube.com/embed/BnihId2F6tg" 
title="YouTube video player" frameborder="0" 
allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
allowfullscreen></iframe>
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
  
    }
  },
  methods: {
   
  }
}
</script>

