import Vue from 'vue'
import ElementUI from 'element-ui'
import'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'
import axios from 'axios'
Vue.use(ElementUI);
Vue.config.productionTip = false
axios.defaults.baseURL = '/api'
var vue=new Vue({
  router,
  render: h => h(App)
}).$mount('#app')


export default vue