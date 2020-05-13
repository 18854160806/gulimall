/**
 *路由器模块
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'

Vue.use(VueRouter)
export default new VueRouter({
  //创建n个路由
  routes:[
    {
      path:'/about',
      component:About
    },
    {
      path: '/Home',
      component: Home
    },
    {
      path:'/',
      redirect:'/about'
    }
  ]


})
