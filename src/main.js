'use strict';

require('./scss/main.scss');

var Vue = require('vue');

Vue.use(require('vue-resource'));



let app = new Vue({
    el: '#app',
    data: {
        onCategory: false
    },
    components: {
        'w-category': Vue.extend(require('./view/category'))
    },
    methods: {
        c: function(){
            this.onCategory = !this.onCategory;
        }
    }
});

document.addEventListener("DOMContentLoaded", function(event) {
    app.viewx = 'w-category';
});



let loading = require('./loading');



let getRoute = () => {
    return window.location.hash.split('/').slice(1);
};

let showCategory = () => {
    
};

let route = () => {
    let routeArr = getRoute();
    
    if ( routeArr.length === 0 || routeArr[0] === '' ) {
        showCategory();
    } else {
        
    }
};


window.addEventListener('hashchange', route);
window.addEventListener('load', route);
