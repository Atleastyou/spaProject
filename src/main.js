import Vue from 'vue'
import router from './router'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import axios from '@/utils/request'

import './common'


Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'zh-CN',    // 语言标识
  messages: {
    'zh-CN': require('./lang/zh'),   // 通过require引入中文语言包
    'en-US': require('./lang/en')    // 通过require引入英文语言包
  }
})

Vue.filter('filterHeader', function (date) {
  if (location.pathname.indexOf(date) > -1) {
    return 'active'
  } else {
    return ''
  }
})

Vue.prototype.$axios = axios

export default new Vue({
  router,
  i18n,
  render: h => h(App),
  mounted() {
    document.dispatchEvent(new Event('render-event'))
  }
}).$mount('#app')
