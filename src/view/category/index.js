'use strict';

module.exports = {
    template: require('./template.html'),
    replace: true,
    data: function(){
        return {
            categorys: []
        };
    },
    ready: function(){
        this.$http.get('/data/mapping.json', function(data){
            console.log(data);
            this.categorys = data.categoryMap;
        });
    }
};
