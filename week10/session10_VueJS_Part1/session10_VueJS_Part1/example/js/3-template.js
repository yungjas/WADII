var app = new Vue({
    el: '#app',
    data: {
       name: 'John',
       phone: '123456'
    },
    methods: { 
       getPhone: function() { 
           return "This is my number " + this.phone; 
        }
    }
})    