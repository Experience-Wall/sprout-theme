'use strict';

require('./style.scss');


let $ = require('jquery');


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

                $('code').each(function(i, block) {
                    hljs.highlightBlock(block);
                });

                
            });
        }
    },
    ready: function(){
        
    }
};


