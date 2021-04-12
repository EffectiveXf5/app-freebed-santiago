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

                <div>
                    <p>Camas libres</p>
                    <h5>{{room.freeBeds}}</h5>

                    <p>Numero de camas</p>
                    <h5>{{room.beds}}</h5>

                    <p>Precio</p>
                    <h5>{{room.price}}</h5>

                    <p>Reviews</p>
                    <h5>{{room.reviews}}</h5>
                </div>

                <div>
                    <i class="fas fa-utensils"></i>
                    <i class="fas fa-wifi"></i>
                    <i class="fas fa-shower"></i>
                    <i class="fas fa-smoking-ban"></i>
                    <i class="fas fa-wheelchair"></i>
                </div>

                <button>RESERVAR</button>
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

    main section article {
        width: inherit;
        height: inherit;
    }

    main section article h3 {
        padding: 1vh;
        font-family: var(--font-family);
        font-size: 1.1rem;
    }

    main section article h5 {
        padding: 1vh;
        font-family: var(--font-family);
        font-size: 1.1rem;
    }

    main section article p {
        padding: 2vh;
        font-family: var(--font-family);
        font-size: 1.1rem;
    }

    main section article div:nth-child(4) {
        background-color: var(--input-color);
        height: 20vh;
        width: inherit;
        display: grid;
        grid-template-areas: "fbt tbt"
                             "fbd tbd" 
                             "pt rt"
                             "pd rd";

        grid-template-columns: repeat(2, 50vw);
        grid-template-rows: repeat(4, 5vh);
    }

    main section article div:nth-child(4) p {
        grid-area: fbt;
        font-family: var(--font-family);
        font-size: 1.1rem;
        /* flex-direction: column-reverse; */
        justify-self: center;
    }

    main section article div:nth-child(4) h5 {
        grid-area: fbd;
        font-family: var(--font-family);
        font-size: 1.1rem;
        /* flex-direction: column-reverse; */
        justify-self: center;
        align-self: center;
    }

    main section article div:nth-child(4) p:nth-child(3) {
        grid-area: tbt;
    }

    main section article div:nth-child(4) h5:nth-child(4) {
        grid-area: tbd;
    }

    main section article div:nth-child(4) p:nth-child(5) {
        grid-area: pt;
    }

    main section article div:nth-child(4) h5:nth-child(6) {
        grid-area: pd;
    }

    main section article div:nth-child(4) p:nth-child(7) {
        grid-area: rt;
    }

    main section article div:nth-child(4) h5:nth-child(8) {
        grid-area: rd;
    }

    main section article div:nth-child(5) {
        padding: 2vh;
        display: flex;
        justify-content: space-between;
    }

    main section article div:nth-child(5) i {
        font-size: 1.2rem;
    }

    main section article button {
        margin-top: 2vh;
        padding: 1vh;
        width: 70vw;
        background-color: var(--color-button);
        border: 1px solid var(--primary-color);
        border-radius: 10px;
        transform: translateX(22.5%);
        font-family: var(--font-family);
        font-size: 2rem;
        color: var(--primary-color);
    }

</style>