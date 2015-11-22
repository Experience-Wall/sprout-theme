'use strict';

let Vue = require('vue');


module.exports = Vue.extend({
    template: require('./template.html'),
    data: function(){
        return {
            categorys: []
        };
    },
    ready: function(){
        this.$http.get('/data/mapping.json', function(data){
            console.log(data);
            this.categorys = data.categoryMap;
        });
    }
});
