require('./scss/main.scss');

var Vue = require('vue');
var app = new Vue({
    el: '#app',
    data: {
        view: 'page-a'
    }
});

/**
 * Some really crude routing logic here, just for
 * demonstration purposes. The key thing to note here is
 * that we are simply changing the view of the root app -
 * Vue's async components and Webpack's code splitting will
 * automatically handle all the lazy loading for us.
 */

function route () {
    app.view = window.location.hash.slice(1) || 'page-a';
}

window.addEventListener('hashchange', route);
window.addEventListener('load', route);
