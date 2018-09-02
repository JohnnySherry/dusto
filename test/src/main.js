// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from "vuex"
import VueResource from 'vue-resource'
import Bootstrapvue from 'bootstrap-vue'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap-vue/dist/bootstrap-vue.css"
import "ag-grid/dist/styles/ag-grid.css"
import "ag-grid/dist/styles/ag-theme-balham.css"


Vue.config.productionTip = false


Vue.use(Bootstrapvue);
Vue.use(VueResource);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
