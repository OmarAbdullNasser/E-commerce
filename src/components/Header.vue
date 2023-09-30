<template>
    <div
        class="w-full h-20 bg-white border-b-[1px] border-b-gary-800 font-titleFont sticky top-0 z-50"
    >
        <div
            class="max-w-screen-xl h-full mx-auto flex items-center justify-between"
        >
            <router-link :to="{ name: 'home' }">
                <div>
                    <img class="w-28" src="../assets/logoDark.png" alt="" />
                </div>
            </router-link>

            <div class="flex items-center gap-8">
                <router-link :to="{ name: 'Cart' }">
                    <div class="relative">
                        <img class="w-6" src="../assets/cart.png" alt="" />
                        <span
                            class="absolute w-6 top-2 left-0 text-sm flex items-center justify-center font-semibold"
                            >{{ Card_length }}</span
                        >
                    </div>
                </router-link>
                <router-link to="/Login">
                    <img
                        class="w-8 h-8 rounded-full"
                        :src="`${
                            User
                                ? User.image
                                : 'https://images.pexels.com/photos/264547/pexels-photo-264547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                        }`"
                        alt=""
                    />
                </router-link>
                <p
                    v-if="User"
                    class="text-base font-titleFont font-semibold underline underline-offset-2"
                >
                    {{ User.name }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
export default {
    setup() {
        const store = useStore()
        const Card_length = computed(() => store.state.Card.length)
        const User = computed(() => store.state.userInfo)
        return { Card_length, User }
    },
}
</script>

<style></style>
