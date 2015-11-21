'use strict';

require('./scss/main.scss');

var Vue = require('vue');

Vue.use(require('vue-resource'));

var app = new Vue({
    el: '#app',
    data: {
        view: 'page-a'
    },
    http: {
        root: '/data',
        headers: {
            Authorization: 'Basic YXBpOnBhc3N3b3Jk'
        }
    }
});

let loadding = new Vue({
    el: '#loading',
    ready: function(){
        this.show = false;
    }
});


