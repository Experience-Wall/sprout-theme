'use strict';

require('./style.scss');

module.exports = {
    template: require('./template.html'),
    replace: false,
    data: function(){
        return {
            categorys: []
        };
    },
    ready: function(){
        this.$http.get('/data/mapping.json', function(data){

            this.categorys = Object.keys(data.categoryMap).map(function(k){
                return [k, data.categoryMap[k]];
            });
        });
    }
};
