<template>
    <div class="group relative">
        <router-link
            :to="{ name: 'ProdectDetalis', params: { id: prodect.id } }"
        >
            <div class="w-full h-96 cursor-pointer overflow-hidden">
                <img
                    class="w-full h-full object-contain group-hover:scale-110 duration-500"
                    :src="prodect.image"
                    alt=""
                />
            </div>
        </router-link>
        <div class="w-full border-[1px] px-2 py-4">
            <div class="flex justify-between items-center">
                <div>
                    <h2 class="font-titleFont text-base font-blod">
                        {{ truncate(prodect.title, 15) }}
                    </h2>
                </div>

                <div class="flex relative overflow-hidden text-sm">
                    <div
                        class="relative text-sm w-28 flex gap-2 justify-end transform group-hover:translate-x-24 transition-transfrom duration-500"
                    >
                        <p class="line-through text-gray-500">
                            ${{ oldPrice(prodect.price) }}
                        </p>
                        <p class="font-semibold">${{ prodect.price }}</p>
                    </div>
                    <p
                        class="absolute z-20 w-[150px] text-gray-500 hover:text-gray-900 flex items-center gap-1 top-0 transform -translate-x-32 group-hover:translate-x-0 transition-transform cursor-pointer duration-500"
                        @click="
                            AddtoCard({
                                user: null,
                                _id: prodect.id,
                                title: prodect.title,
                                image: prodect.image,
                                price: prodect.price,
                                description: prodect.description,
                                q: 1,
                            })
                        "
                    >
                        Add to Cart
                        <span class="material-symbols-outlined"
                            >arrow_right_alt</span
                        >
                    </p>
                </div>
            </div>
            <div class="flex justify-start">
                <p>{{ prodect.category }}</p>
            </div>
        </div>
    </div>
</template>

<script>
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

export default {
    props: ['id', 'prodect'],
    setup(props) {
        const _id = props.prodect.title
        const Router = useRouter()
        const store = useStore()
        // provide(/* key */ 'message', /* value */ 'hello!')

        // const idtoString = (id) =>{
        //   return String(id).toLowerCase().split(" ").join("");
        // }
        // const rootId = idtoString(_id)

        function truncate(str, n) {
            return str?.length > n ? str.substr(0, n - 1) + '...' : str
        }

        function oldPrice(n) {
            return Math.floor(n + 20)
        }

        function AddtoCard(payload) {
            store.commit('AddtoCard', payload)
            toast.success(truncate(props.prodect.title, 15), {
                autoClose: 1000,
            })
        }

        return { truncate, oldPrice, AddtoCard }
    },
}
</script>

<style></style>
