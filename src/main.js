'use strict';

require('./scss/main.scss');

var Vue = require('vue');

Vue.use(require('vue-resource'));



let app = new Vue({
    el: '#app',
    data: {
        view: 'category'
    },
    components: {
        'category': function(resolve){
            require(['./view/category/index.js'], resolve);
        }
    }
});

app.view = 'category';

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
