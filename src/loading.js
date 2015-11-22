'use strict';

let Vue = require('vue');

let loadding = new Vue({
    el: '#loading',
    ready: function(){
        this.show = false;
    }
});

module.exports = loadding;
