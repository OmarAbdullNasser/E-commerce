<template class="font-bodyFont" >
  <Header/>
  <router-view />
  <Footer/>
</template>

<script>
import Header  from '../src/components/Header.vue'
import Footer  from '../src/components/Footer.vue'
export default {
  components:{
    Header,
    Footer
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


</style>
