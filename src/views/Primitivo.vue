<template>
    <main>
    <Header />
        <section>
            <article v-for="hotel in items" :key="hotel.id">
                <h3>{{hotel.title}}</h3>
                <p>{{hotel.body}}</p>
            </article>
        </section>
    <Footer />
    </main>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import hotels from '../assets/data/api.json'

export default {

    name:'Primitivo',
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

<style> 

    main section article {
        width: 75vw;
        height: 25vh;
        margin: auto;
    }

</style>