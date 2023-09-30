<template>
    <div class="py-10">
        <div class=" flex flex-col items-center gap-4">
            <h1 class="text-2xl bg-black text-white py-2 w-80 text-center">Shopping everyday</h1>
            <span class="w-20 h-[3px] bg-black"></span>
            <p class="max-w-[700px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                quos fugit inventore, cumque quae corporis ratione tenetur eos
                voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
                asperiores repudiandae assumenda quidem.
            </p>
        </div>

        <div class="max-w-screen-xl mx-auto grid grid-cols-4 gap-10 py-10">
            <ProdectCard v-for="prodect in produects" :key="prodect.id" :prodect="prodect" :id="prodect._id"/>
        </div>
    </div>
</template>

<script>
import { watchEffect, ref } from 'vue'
import axios from 'axios'
import ProdectCard  from '../components/ProdectCard.vue'
export default {
    components:{
        ProdectCard,
    },
    setup(){
        let produects= ref([])
        watchEffect(()=>{
            async function productsData(){
                const request = await axios.get("https://fakestoreapi.com/products");
                produects.value=  request.data
                // console.log(produects.value)
                return request
            }
            productsData();
        }
        );

        

        return{ produects}
    }
}
</script>

<style>

</style>