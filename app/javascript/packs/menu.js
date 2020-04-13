import Vue from 'vue/dist/vue.esm'
Vue.config.devtools = true;

const vue = new Vue({
    el: '#top-menu',
    data: {
      gnav: false,
      isActive: false
    },
    methods: {
      open: function(event) {
        let elm = event.currentTarget;
        let className = elm.className;
        if(vue.$data.isActive == true) {
          vue.$data.gnav = false;
          vue.$data.isActive = false;
        } else {
          vue.$data.gnav = true;
          vue.$data.isActive = true;
        }
      }
    }
  })
