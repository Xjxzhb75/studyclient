import Vue from 'vue'
import Router from 'vue-router'
//import AppIndex from '@/components/home/AppIndex'
//import Login from '@/components/Login'
//导入依赖
//定义一个login()方法，没有参数，

Vue.use(Router)
//使用导入的依赖
//const 声明常量，声明以后值不能改变
const routes=[
  

    { path: '/', 
    redirect: '/login' 
    },
    { path: '/login',
      component:() =>import("@/components/Login") 
    },
    { path: '/index', 
      component: ()=>import("@/components/home/AppIndex")
  }
   ]
const router=new Router({
  routes
})
router.beforeEach((to,from,next)=>{
  
  if (to.path=="/login"){
    return next();
  }

  var token=window.sessionStorage.getItem("token");
  if(!token){
    return next({path:"/login"})
  }
   next();
})
export default router