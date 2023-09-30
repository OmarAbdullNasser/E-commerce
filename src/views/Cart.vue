<template>
    <div>
        <img
            class="w-full h-60 object-cover"
            src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="cartImg"
        />

        <div class="max-w-screen-xl mx-auto py-20 flex">
            <CartItem />
            <div class="w-1/3 bg-[#fafafa] py-6 px-4">
                <div
                    class="flex flex-col items-start gap-6 border-b-[1px] border-b-gray-400 pb-6"
                >
                    <h2 class="text-2xl font-medium">cart totals</h2>
                    <p class="flex items-center gap-4 text-base">
                        Subtotal :
                        <span class="font-titleFont font-bold text-lg"
                            >$ {{ totalAmt }}
                        </span>
                    </p>
                    <p class="flex items-start gap-2 text-base">
                        Shipping:
                        <span
                            >Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Officia error,
                        </span>
                    </p>
                </div>
                <p
                    class="font-titleFont font-semibold flex justify-between mt-6"
                >
                    Total :
                    <span class="text-xl font-bold">$ {{ totalAmt }}</span>
                </p>
                <button
                    class="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
                    v-if="User"
                >
                    proceed to checkout
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import CartItem from '../components/CartItem.vue'
import { watchEffect, ref, computed } from 'vue'

export default {
    name: 'Cart',
    components: {
        CartItem,
    },
    setup() {
        const store = useStore()
        const P_card = store.state.Card
        const User = computed(() => store.state.userInfo)
        const totalAmt = ref('')
        watchEffect(() => {
            let x = ref(0)
            P_card.map((item) => {
                x.value += item.price * item.q
                return x
            })
            totalAmt.value = x.value
        })

        return {
            User,
            totalAmt,
        }
    },
}
</script>

<style></style>
