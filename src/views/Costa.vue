<template>
    <main>
        <section>
            <article v-for="hotel in hotels" :key="hotel.id">
                <h3>{{hotel.title}}</h3>
                <p>{{hotel.body}}</p>
            </article>
        </section>
    <Footer />
    </main>
</template>

<script>

import Footer from '@/components/Footer.vue'

export default {

    name:'Costa',
    components: {
        Footer
    },

    data() {
        return {
            hotels: ''
        }
    },

    created() {
        this.getHotels();
    },

    methods: {
        async getHotels() {
            try{
                const res = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await res.json()
                this.hotels = data;
            }catch(error){
                console.log(error)
            }
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