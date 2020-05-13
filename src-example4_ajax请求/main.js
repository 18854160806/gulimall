import Vue from 'vue'
import App from './App'
import VueResource from 'vue-resource'
Vue.use(VueResource)//内部会给vm对象和组件对象，添加一个属性$http  get/post
new Vue({
  el: '#app',
  components: {App},
  template: '<App/>'
})
