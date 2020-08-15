import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import './plugins/axios.js'
import './plugins/bootstrap-vue.js'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
