import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'
import router from './router.js'
import './plugins/axios.js'
import './plugins/bootstrap-vue.js'
import 'font-awesome/css/font-awesome.css'
import './plugins/vue-toasted.js'

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
