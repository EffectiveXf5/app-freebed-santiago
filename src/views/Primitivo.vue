<template>
    <main>
        <section>
            <article v-for="item in items" v-bind:key="item.id">
                <h3>{{item.title}}</h3>
                <p>{{item.body}}</p>
            </article>
        </section>
    <Footer />
    </main>
</template>

<script>
import Footer from '@/components/Footer.vue'
import hotels from '../assets/data/api.json'


export default {

    name:'Primitivo',
    components: {
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