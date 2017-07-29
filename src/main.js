// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '@/common/reset'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'

import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.$http = axios

Vue.config.productionTip = false
Vue.use(MintUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store,
  template: '<App/>',
  components: { App }
})
