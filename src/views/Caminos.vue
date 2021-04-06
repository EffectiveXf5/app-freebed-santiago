<template>
  <main>
    <Header />
    
    <router-link to ="/costa">
      <h4>Camino de la costa</h4>
      <img src="../assets/img/caminonorte.jpg" alt="">
    </router-link>

    <router-link to ="/primitivo">
      <h4>Camino primitivo</h4>
      <img src="../assets/img/caminoSalvador.png" alt="">
    </router-link>

    <router-link to ="/salvador">
      <h4>Camino del salvador</h4>    
      <img src="../assets/img/caminoPrimitivo.jpg" alt="">
    </router-link>

    <Footer />
  </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Costa from '@/views/Costa.vue'
import Primitivo from '@/views/Primitivo.vue'
import Salvador from '@/views/Salvador.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Caminos',
  
  components: {
    Header,
    Costa,
    Primitivo,
    Salvador,
    Footer
  }
}
</script>

<style scoped>

  main {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: var(--secondary-color);
  }

  main img {
    border-radius: 15px solid black;
    width: 90vw;
    height: 20vh;
    margin: auto;
  }

  main h4 {
    margin-top: 8vh;
  }
  
</style>
