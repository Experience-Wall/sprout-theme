'use strict';

require('./scss/main.scss');

var Vue = require('vue');

Vue.use(require('vue-resource'));

var VueRouter = require('vue-router');
Vue.use(VueRouter);

var app = Vue.extend({});


let loading = require('./loading');


let router = new VueRouter();


router.map({
    '/': {
        component: require('./view/category/index')
    }
});

router.start(app, '#app');


