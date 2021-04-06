<template>
  <main>
    <router-link to ="/costa">
      <img src="../assets/img/caminonorte.jpg" alt="">
    </router-link>

    <router-link to ="/primitivo">
      <img src="../assets/img/caminoSalvador.png" alt="">
    </router-link>

    <router-link to ="/salvador">
      <img src="../assets/img/caminoPrimitivo.jpg" alt="">
    </router-link>

    <Footer />
  </main>
</template>

<script>
import Costa from '@/views/Costa.vue'
import Primitivo from '@/views/Primitivo.vue'
import Salvador from '@/views/Salvador.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Caminos',
  components: {
    Costa,
    Primitivo,
    Salvador,
    Footer
  }
}
</script>

<style scoped>
  main img {
    width: 90vw;
    height: 25vh;
    margin: auto;
  }
</style>
