Vue.component('contador', {
    template:
    /*html*/`
    <div>
    <hr>
    <button class="btn btn-success" @click="contador++">+</button>
    <button class="btn btn-danger" @click="contador--">-</button>
    <hr>
    <div class="progress progress-bar-striped">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" 
        :style="{'width': contador+'%'}" 
        aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
        {{contador}} %
        </div>
    </div>
    </div>
    `,
    data () {
        return {
            contador: 0,
        }
    },
});
