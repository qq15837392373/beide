import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

//登录


import Router from 'vue-router';

const originalPush = Router.prototype.push

Router.prototype.push = function push(location) {

  return originalPush.call(this, location).catch(err => err)

}


import mainpage from './route/mainpage'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      ...mainpage
    ]
  },
  {
    path: '/Login',
    name: 'Login',
    component: ()=> import('@/views/login/Login')
},
{
  path: '/upDate',
  name: 'upDate',
  component: ()=> import('@/views/login/upDate')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
