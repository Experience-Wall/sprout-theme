'use strict';

require('./style.scss');

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
    }
};


