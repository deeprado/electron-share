import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import './extends'
import {imageIsExist} from './utils'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

Vue.config.productionTip = false

// 全局注册自定义指令，用于判断当前图片是否能够加载成功，可以加载成功则赋值为img的src属性，否则使用默认图片
Vue.directive('real-img', async function (el, binding) {
  // 指令名称为：real-img
  let imgURL = binding.value // 获取图片地址
  if (imgURL) {
    let exist = await imageIsExist(imgURL)
    if (exist) {
      el.setAttribute('src', imgURL)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
