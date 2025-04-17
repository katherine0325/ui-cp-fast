// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueMeta from 'vue-meta'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './style.css'

Vue.config.productionTip = false

Vue.use(VueMeta)

Vue.use(Antd)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
