// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Routers from './router'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueScroller from 'vue-scroller'
Vue.use(VueScroller)
Vue.use(VueRouter)
Vue.use(iView)
Vue.use(ElementUI)
Vue.config.productionTip = false

const RouterConfig = {
  routes: Routers
}
const router = new VueRouter(RouterConfig)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
