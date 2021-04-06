<template>
    <main>
    <Header />
        <section>
            <router-link to="/bedroom">
                <article v-for="hotel in items" :key="hotel.id">
                    <h3>{{hotel.title}}</h3>
                    <h5>{{hotel.direction}}</h5>
                    <h5>{{hotel.price}}</h5>
                    <img :src="hotel.img" alt="">
                    <span>{{hotel.extras}}</span>
                </article>
            </router-link>
        </section>
    <Footer />
    </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import hotels from '../assets/data/api.json'

export default {

    name:'Costa',
    components: {
        Header,
        Footer
    },

    computed: {
        items() {
            return hotels.map((hotel) => {
                return hotel
            })
        }
    }
}
</script>

<style scoped> 

    main section {
        margin-top: 10vh;
    }

    main section article {
        width: 80vw;
        height: 20vh;
        margin: auto;
        margin-top: 2vh;
        background-color: red;
        border-radius: 15px;
        display: grid;
        grid-template-areas: "i t" "i d" "i p" "i ic";
        grid-template-columns: 30vw 1fr;
        box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    }

    main section article h3 {
        grid-area: t;
        padding: 1vh;
    }

    main section article h5:nth-child(2) {
        grid-area: d;
        padding: 1vh;
    }

    main section article h5:nth-child(3) {
        grid-area: p;
        padding: 1vh;
    }

    main section article img {
        grid-area: i;
        background-color: var(--contact-color);
    }

    main section article span {
        grid-area: ic;
        padding: 1vh;
    }

</style>