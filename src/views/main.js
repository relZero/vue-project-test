import Vue from 'vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import vueSwiper from 'vue-awesome-swiper'
import App from './app.vue'
import layer from 'vue-layer'
import Vuerify from 'vuerify'
import VuerifyDirective from 'v-vuerify-next'
import VueCookie from 'vue-cookie'

import 'amfe-flexible'
import '../assets/styles/global.scss'
import 'swiper/dist/css/swiper.css'
import 'vue-layer/lib/vue-layer.css'
import createRouter from '../router'
import createStore from '../store'

Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(vueSwiper)
Vue.use(Vuerify, {
  password: 'required',
  phone: {
    test: /^\d{11}$/,
    message: '请输入正确的手机号'
  }
})
Vue.use(VuerifyDirective)
Vue.use(VueCookie)
Vue.prototype.$layer = layer(Vue)
Vue.prototype.$remCalculation = 75

const router = createRouter()
const store = createStore()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#root')
