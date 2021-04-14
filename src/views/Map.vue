<template>
  <main>
    <section>
        <div>
            <h1>Tus coordenadas:</h1>
            <p>{{ myCoordinates.lat }} Latitude, {{ myCoordinates.lng }} Longitude</p>
        </div>

        <div>
            <h1>Cordenadas del mapa:</h1>
            <p>{{ mapCoordinates.lat }} Latitude, {{ mapCoordinates.lng }} Longitude</p>
        </div>
    </section>

    <GmapMap
        :center="myCoordinates"
        :zoom="zoom"
        map-type-id="terrain"
        style="width:90vw; height:90vh;"
        ref="mapRef"
        @dragend="handleDrag"
    >
    </GmapMap>
  </main>
</template>

<script>
export default {
    data() {
        return {
            map: null,

            myCoordinates: {
                lat: 0,
                lng: 0
            }
        }
    },

    created() {
        
        if(localStorage.center) {
            this.myCoordinates = JSON.parse(localStorage.center);
        } else {
            this.$getLocation({})
            .then(coordinates => {
                this.myCoordinates = coordinates;
            });
        }

        if(localStorage.zoom) {
            this.zoom = parseInt(localStorage.zoom);
        }
    },

    mounted() {
        this.$refs.mapRef.$mapPromise.then( map => this.map = map);
    },

    methods: {
        handleDrag() {
            let center = {
                lat: this.map.getCenter().lat(),
                lng: this.map.getCenter().lng()
            };

            let zoom = this.map.getZoom();

            localStorage.center = JSON.stringify(center);
            localStorage.zoom = zoom;
        }
    },

    computed: {
        mapCoordinates() {
            if(!this.map) {
                return {
                    lat: 0,
                    lng: 0
                };
            }

            return {
                lat: this.map.getCenter().lat().toFixed(4),
                lng: this.map.getCenter().lng().toFixed(4)
            };
        }
    }
}
</script>

<style scoped>

    main {
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    main section {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

</style>