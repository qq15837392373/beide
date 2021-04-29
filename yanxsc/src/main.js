import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

// css
import '@/assets/css/reset.css'

//rem
import '@/assets/js/rem.js'

//引入阿里图标
import '@/assets/icon/iconfont.css'

//axios使用
// import '@/plugins/axios'


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
