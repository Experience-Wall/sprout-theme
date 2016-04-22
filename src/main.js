'use strict';

require('./scss/main.scss');

var Vue = require('vue');

let $ = require('jquery');

Vue.use(require('vue-resource'));
Vue.config.async = false; // 为了渲染完 experience 后能取到 code 做高亮染色

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
        
    },
    ready: function(){
        this.$el.style.display = 'block';

        // let $letters = $('.letter');
        // console.log($letters);
        // let i = 0, max = $letters.length,
        //     lastShow;
        // let f = function(){
        //     lastShow && lastShow.removeClass('active');
        //     let e = $($letters[i % max]);
        //     e.addClass('active');
        //     lastShow = e;
        //     i++;
        // };
        // setInterval(f, 5000);
        // setTimeout(f);

        
        
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



window.addEventListener('load', () => {
    
    require('./canvasBird.js');
});
