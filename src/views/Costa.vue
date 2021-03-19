<template>
    <main>
        <article>
           <h3>{{hotel}}</h3>
           <p>Body:</p>
        </article>
    </main>
</template>

<script>
import {mapActions} from 'vuex'

export default {
    name:'Costa',
    data (){
        return {
            hotel: ''
        }
    },
    methods: {
        ...mapActions(['getHotels'])
    }
}
</script>

<style>

</style>