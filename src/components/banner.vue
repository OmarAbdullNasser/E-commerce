<template>
   <div class="w-full h-auto  overflow-x-hidden">  
    <div class="w-screen  h-[650px] relative">
        <div class="w-[400vw] h-full flex transition-transform duration-1000" :style="{transform:`translateX(-${currentSlide*100}vw)`}">
            <img class="w-screen h-full object-cover "
             v-for="img in bannerImg" :key="img.id" 
             :src="img" alt="" loading="priority" >
        </div>
        <div class="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
            <div class="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 " @click="prevSlide">
                <span class="material-symbols-outlined">arrow_left_alt</span>
            </div>
            <div class="w-14 h-12 border-[1px] border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300 " @click="nextSlide">
                <span class="material-symbols-outlined">arrow_right_alt</span>
            </div>
        
        </div>
    </div>
   </div>
</template>

<script>
import { ref } from "vue";
export default {
setup(){
    const bannerImg= ref([
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
    ])
    let currentSlide = ref(0);

    const prevSlide = () =>{
        if( currentSlide.value === 0){
            currentSlide.value= 3
        }else{
            currentSlide.value = currentSlide.value-1
        }
    }

    const nextSlide = () =>{
        if( currentSlide.value === 3 ){
            currentSlide.value= 0
        }else{
            currentSlide.value = currentSlide.value + 1
        }
    }
    
    return{bannerImg, prevSlide,nextSlide, currentSlide}
}
}
</script>

<style>

</style>