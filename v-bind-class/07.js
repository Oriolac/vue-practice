const app = new Vue({
    el: '#app',
    data: {
        fondo: 'bg-warning',
        inputfondo: '',
        invisible: true,
    },
    methods: {
        changeBackground () {
            this.fondo = this.inputfondo;
        }
    }
})