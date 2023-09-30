<template>
    <div class="home font-bodyFont">
        <banner />
        <Prodects />
    </div>
</template>

<script>
// @ is an alias to /src
import banner from '../components/banner.vue'
import Prodects from '../components/Prodects.vue'
import { useStore } from 'vuex'
export default {
    name: 'HomeView',
    components: {
        banner,
        Prodects,
    },
    setup() {
        const store = useStore()
        console.log(store.state.userInfo)
    },
}
</script>
