import Vue from 'vue'
import Router from 'vue-router'
//import AppIndex from '@/components/home/AppIndex'
//import Login from '@/components/Login'
//导入依赖
//定义一个login()方法，没有参数，
const Login=()=>import("@/components/Login");
const AppIndex=()=>import("@/components/home/AppIndex");
Vue.use(Router)
//使用导入的依赖
//const 声明常量，声明以后值不能改变
const routes=[
  

    { path: '/', 
    redirect: '/login' 
    },
    { path: '/login',
      component: Login 
    },
    { path: '/index', 
      component: AppIndex
  }
   ]
const router=new Router({
  routes
})
export default router
