'use strict';

{
  var overlay = new Vue({
    el: '#overlay',
    data: {
      isFire: false
    },
    computed: {

    },
    methods: {
      fire: function() {
        if(this.isFire === true){
          this.isFire = false;
        }else{
          this.isFire = true;
        }
      }
    }
  });
}
