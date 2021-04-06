<template>
  <main>
    <router-link to ="/costa">Costa</router-link>
    <router-link to ="/primitivo">Primitivo</router-link>
    <router-link to ="/salvador">Salvador</router-link>
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
