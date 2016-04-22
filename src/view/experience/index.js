'use strict';

require('./style.scss');


let $ = require('jquery');

var renderHl = function(){
    setTimeout(function(){
        $('code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    }, 1000);
};

module.exports = {
    template: require('./template.html'),
    replace: false,
    
    http: {
        root: '/data'
    },
    data: function(){
        return {
            experiences: []
        };
    },
    events: {
        changeCategory: function(category) {
            let self = this;
            this.$http.get(category + '/' + category + '-0.json', (data) => {
                self.experiences = data;

                renderHl();
                
            });
        }
    },
    ready: function(){
        renderHl();
    }
};


