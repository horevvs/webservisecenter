var app = new Vue({
    el: '#app',
    data: {message:'Hello'},
    methods: {
        setMessage: function(event){
            this.message = event.target.value;
        }
    }
});