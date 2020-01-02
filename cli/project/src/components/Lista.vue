<!-- eslint-disable -->
<template>
    <div class="container">
        <ul class="list-group">
            <li v-for="item of sortF" :key="item.id"
            class="list-group-item d-flex justify-content-between align-items-center">
                {{item.nombre}}
                <div class="text-right">
                    <span class="badge badge-primary badge-pill mr-2">{{item.cantidad}}</span>

                    <button class="btn btn-danger rounded-pill" @click="aumentar(item.id)">+</button>
                </div>

            </li>
        </ul>
        <br>
        <div class="text-right">
            <button class="btn btn-dark" @click="reiniciar">Reiniciar!</button>
        </div>
    </div>
</template>

<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        name: 'Lista',
        computed: {
            ...mapState(['frutas']),
            sortF() {
                return this.frutas.slice().sort((a, b) => b.cantidad - a.cantidad)
            }
        },
        methods: {
            ...mapMutations(['aumentar', 'reiniciar']),
        },

    }
</script>