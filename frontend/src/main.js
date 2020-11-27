// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './scss/main.scss'

require('./plugins');

/* eslint-disable no-new */
(async () => {
  try {
    await store.dispatch('roleCheck');
  } catch(err) {}

  new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>',
  })

  Vue.config.productionTip = false

})()
//store.dispatch('roleCheck').then(() => {

//})
