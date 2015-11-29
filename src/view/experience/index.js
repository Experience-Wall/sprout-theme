'use strict';

require('./style.scss');

module.exports = {
    template: require('./template.html'),
    replace: false,
    http: {
        root: '/data'
    },
    events: {
        changeCategory: function(category) {
            this.$http.get(category + '/' + category + '-0.json', (data) => {
                console.log(data);
            });
        }
    }
};
