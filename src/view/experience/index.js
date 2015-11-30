'use strict';

require('./style.scss');

let $ = require('../../../node_modules/jquery/src/core.js');


//let $ = require('jquery');

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
                console.log(data);
                self.experiences = data;
            });
        }
    },
    ready: function(){
        $(document).on('click', function(){
            console.log('click');
        });
    }
};


