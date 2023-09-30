<template>
    <div>
        <div class="max-w-screen-xl mx-auto my-10 flex gap-10">
            <div class="w-2/5 relative">
                <img
                    :src="Singleproduect.image"
                    class="w-full h-[550px] object-contain"
                    alt=""
                />
            </div>

            <div class="w-3/5 flex flex-col justify-center gap-12">
                <div>
                    <h2 class="text-4xl font-semibold">
                        {{ Singleproduect.title }}
                    </h2>
                    <div class="flex items-center gap-4 mt-3">
                        <p class="line-through font-base text-gray-500">
                            ${{ oldPrice(Singleproduect.price) }}
                        </p>
                        <p class="text-2xl font-medium text-gray-900">
                            ${{ Singleproduect.price }}
                        </p>
                    </div>
                </div>

                <div class="icons flex items-center gap-2 text-base">
                    <div class="flex">
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                        <span class="material-symbols-outlined">star</span>
                    </div>
                    <p class="text-sm text-gray-500">
                        Count: {{ Singleproduect.rating?.count }}
                    </p>
                </div>
                <p class="text-base text-gray-500 mt-3">
                    {{ Singleproduect.description }}
                </p>

                <div class="flex gap-4">
                    <div
                        class="w-52 flex items-center justify-between text-gray-500 gap-4 border p-3"
                    >
                        <p class="text-sm">Quantity</p>

                        <div
                            class="flex items-center gap-4 text-sm font-semibold"
                        >
                            <button
                                class="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                @click="q === 1 ? (q = 1) : q--"
                                v-if="q"
                            >
                                -
                            </button>
                            <span :v-model="q"> {{ q }} </span>
                            <button
                                class="border h-5 font-normal text-lg flex items-center justify-center px-2 hover:bg-gray-700 hover:text-white cursor-pointer duration-300 active:bg-black"
                                @click="q++"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <button
                        class="bg-black text-white py-3 px-6 active:bg-gray-800"
                        @click="AddtoCard"
                        v-if="q"
                    >
                        Add to Card
                    </button>
                </div>
                <p class="text-base text-gray-500 flex justify-start">
                    Category :
                    <span class="font-medium capitalize">
                        {{ Singleproduect.category }}</span
                    >
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { watchEffect, ref } from 'vue'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    props: ['id'],
    setup(props) {
        const store = useStore()

        const Singleproduect = ref([])
        const q = ref(1)

        let payload = {}

        watchEffect(() => {
            async function S_produect() {
                const request = await axios.get(
                    `https://fakestoreapi.com/products/${props.id}`
                )
                Singleproduect.value = request.data

                return Singleproduect
            }
            S_produect()
        })

        function oldPrice(n) {
            return Math.floor(n + 20)
        }

        function AddtoCard() {
            if (q.value) {
                payload = {
                    user: null,
                    _id: Singleproduect.value.id,
                    title: Singleproduect.value.title,
                    image: Singleproduect.value.image,
                    price: Singleproduect.value.price,
                    description: Singleproduect.value.description,
                    q: q.value,
                }
                store.commit('AddtoCard', payload)
                toast.success(Singleproduect.value.title, {
                    autoClose: 1000,
                })
            }
        }

        return { Singleproduect, oldPrice, AddtoCard, q }
    },
}
</script>

<style>
.material-symbols-outlined {
    font-variation-settings: 'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24;
}
</style>
