<template>
    <div>
        <h1>Galería de fotos</h1>

        <router-link :to="{name: 'fotos', params: {id : item}}"
        v-for="(item, index) of fotosArreglo" :key="index">
            <button> foto {{item}} </button>
        </router-link>
        <div v-if="$route.params.id">
        <Foto/>
        </div>
        <hr>
        <button @click="goHome">Home</button>
        <hr>
        <button @click="goAnterior">Anterior</button>
        <button v-if="$router.go" @click="goSiguiente">Siguiente</button>
    </div>
</template>

<script>

import Foto from "@/components/Foto.vue"

export default {
    components: {
        Foto,
    },
    data() {
        return{
            fotosArreglo: [1,2,3],
        }
    },
    methods:{
        goHome(){
            this.$router.push('/')
        },
        goAnterior(){
            this.$router.go(-1);
        },
        goSiguiente(){
            this.$router.go(1);
        },
    },
}
</script>