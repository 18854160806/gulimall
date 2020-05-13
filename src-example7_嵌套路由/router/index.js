/**
 *路由器木块
 */

import Vue from 'vue'
import VueRouter from 'vue-router'
import About from '../views/About'
import Home from '../views/Home'
import News from '../views/News'
import Message from '../views/Message'
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
      component: Home,
      children:[
        {
          //path最左侧永远代表根路径，不对
          path:'/home/news',
          component:News
        },
        {
          //可以不加/  简化写法，省略/home
          path:'message',
          component:Message
        },
        {
          path:'',
          redirect:'/home/news'
        }
      ]
    },
    {
      path: '/',
      redirect: '/about'
    }
  ]


})
