Vue.component('saludo', {
    template: `
    <div>
    <h1>{{saludos}}</h1>
    <h3>Hi theere!!</h3>
    </div>
    `,
    data () {
        return {
            saludos: "Hi There!",
        }
    }
});
