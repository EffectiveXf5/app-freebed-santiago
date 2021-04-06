<template>
  <main>
      <figcaption>
          <img src="../assets/img/room.jpg" alt="">
      </figcaption>

      <section>
          <article v-for="room in items" :key="room.id">
                <h3>{{room.title}}</h3>
                <h5>{{room.direction}}</h5>
                <p>{{room.description}}</p>
                <h5>{{room.price}}</h5>
                <span>{{room.extras}}</span>
            </article>
      </section>
      <Footer />
  </main>
</template>

<script>
import Footer from '@/components/Footer.vue'
import rooms from '../assets/data/room-json.json'

export default {
    name: 'Bedroom',

    components: {
        Footer
    },

    computed: {
        items() {
            return rooms.map((room) => {
                return room
            })
        }
    }
}
</script>

<style scoped>

    main figcaption img {
        width: 100vw;
        height: 35vh;
        border-radius: 0 0 15px 15px;
    }

</style>