'use strict';

require('./scss/main.scss');

var Vue = require('vue');

Vue.use(require('vue-resource'));


let app = new Vue({
    el: '#app',
    data: {
        onCategory: false,
        category: ''
    },
    components: {
        'w-category': Vue.extend(require('./view/category')),
        'w-experience': Vue.extend(require('./view/experience'))
    },
    methods: {
        
    }
});

// document.addEventListener("DOMContentLoaded", function(event) {

// });



let loading = require('./loading');



let getRoute = () => {
    return window.location.hash.split('/').slice(1);
};

let route = () => {
    let routeArr = getRoute();
    
    if ( routeArr.length === 0 || routeArr[0] === '' ) {
        app.onCategory = true;
    } else {
        app.onCategory = false;
        app.$broadcast('changeCategory', routeArr[0]);
    }
};


window.addEventListener('hashchange', route);
window.addEventListener('load', route);
