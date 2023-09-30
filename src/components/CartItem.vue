<template>
    <div class="w-2/3 pr-10">
        <d class="w-full">
            <h2 class="font-titleFont text-2xl">Shopping cart</h2>
        </d>
        <div>
            <div
                v-for="prodect in P_Card"
                :key="prodect.id"
                class="flex justify-between items-center gap-6 mt-6"
            >
                <div class="flex items-center gap-2">
                    <span
                        class="material-symbols-outlined text-xl text-gray-600 hover:text-red-600 cursor-pointer duration-300"
                        @click="deletProdect(prodect)"
                        >close</span
                    >
                    <img
                        :src="prodect.image"
                        class="w-32 h-32 object-cover"
                        alt=""
                    />
                </div>
                <h2 class="w-52">{{ prodect.title }}</h2>
                <p class="w-10">{{ prodect.price }}</p>
                <div
                    class="w-50 flex items-center justify-between text-gray-500 gap-4 border p-3"
                >
                    <p class="text-sm">Quantity</p>

                    <div class="flex items-center gap-4 text-sm font-semibold">
                        <button
                            class="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            @click="dnc_q(prodect)"
                            v-if="prodect.q"
                        >
                            -
                        </button>

                        <span :v-model="q"> {{ prodect.q }} </span>

                        <button
                            class="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                            @click="Inc_q(prodect)"
                        >
                            +
                        </button>
                    </div>
                    <p class="w-14">{{ prodect.price * prodect.q }}</p>
                </div>
            </div>
            <button
                class="bg-red-500 text-white mt-8 ml-7 py-1 px-6 duration-300 float-left"
                @click="RestCard"
            >
                Rest Card
            </button>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { watchEffect, ref, computed } from 'vue'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'
import { parseQuery } from 'vue-router'
export default {
    setup() {
        const store = useStore()
        const P_Card = computed(() => store.state.Card)
        const q = ref(1)
        const totals = ref([])
        const deletProdect = (prodect) => {
            store.commit('deleteItem', prodect)
            toast.error(`${prodect.title} is removed `, {
                autoClose: 1000,
            })
        }

        // const onCalc=(e)=>{
        //     this.$emit('getVal',)
        // }
        const RestCard = () => {
            store.commit('resetCart')
            toast.error(`Your Card id Empty`, {
                autoClose: 1000,
            })
        }

        function Inc_q(payload) {
            store.commit('increamentQuantity', payload)
        }

        function dnc_q(payload) {
            store.commit('decrementQuantity', payload)
            console.log(payload.q)
        }

        return { P_Card, q, deletProdect, RestCard, Inc_q, dnc_q }
    },
}
</script>

<style></style>
