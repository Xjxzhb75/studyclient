<template>
<div id="userLayout" >
  <div class="login_panle">
    <div class="login_panle_left">
      <span>太保健康险数据维护系统</span>
      <img  src="@/assets/img/no-data.svg" />
    </div>    
    <div class="container">
      <div class="login_panle_form">
      <img class='lg30' src="@/assets/img/logo30.jpg" >

     <el-form :model="loginForm"  ref="loginForm" label-width="100px"  :rules="loginRules" status-icon>
        
        <el-form-item label="用户名 :" prop="username">
           <el-input v-model="loginForm.username"
             clearable
             placeholder="请输入用户名">
             </el-input>
           </el-form-item>
          
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginForm.password"
            show-password
             clearable
             placeholder="请输入密码">
            </el-input>
          
          </el-form-item>
            <el-form-item>
               <el-button type="primary" @click="onSunmit">登录</el-button>
               <el-button type="primary" @click="onReset">重置</el-button>
            </el-form-item>
          
          </el-form> 
      </div>  
    </div>
    <div class="login_panle_foot">
      <span>版权所有©中国太平洋财产保险股份有限公司</span>
      <span>吉林省分公司</span>
        <p>
          CopyRight©China Pacific Property Insurance Co., Ltd.. All Rights
          Reserved
        </p>
    </div>
  </div>
</div>  
</template>

<script>
 import {loginAxios} from "@/network/networks"
  export default {
    data() {
      return {
        loginForm:{
          username:"",
          password:""
        },
        loginRules:{
          username:[
            {required:true,message:'请输入用户名',trigger:'blur'},
            {min:5,max:15,message:'用户名在5-15位之间',trigger:'blur'}
          ],
          password:[
            {required:true,message:'请输入密码',trigger:'blur'},
            {min:5,max:15,message:'密码在5-15位之间',trigger:'blur'}
          ]
        },
        
        responseResult:[]
      };
      
    },
    created(

    ) {
    },
    methods: {
      //重置用户名和密码
      onReset(){
          this.$refs["loginForm"].resetFields(); 
          this.$refs["userNameInp"].focus();    
      },
      onSunmit () {
        
       this.$refs.loginForm.validate((valid) => {
       console.log(valid)
        //验证失败退出
        if (!valid) {
          this.$message.error('用户名和密码是必填的')
          return
             } 
             loginAxios(this.loginForm).then
             (res=>{
               //console.log(window.sessionStorage.setItem("token",res.data.token));
               if(res.data.status== 1 ){
                 this.$message.error(res.data.data)
                 } else if (res.data.status==0){
                   console.log(res.data.data.token)
                  window.sessionStorage.setItem("token",res.data.data.token)
                  this.$router.push('/index');
                 }
               
             })
             //
          })
        }
    }
}
</script>

<style lang="less" scoped>
  #userLayout{
    //background: #0D3F67;
   margin: 0;
    padding: 0;
    background-image: url("../assets/img/cpic-back.jpg");
    background-size: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    .login_panle{
      position: absolute;
      top: 3vh;
      left: 2vw;
      width: 90vw;
      height: 94vh;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      //border:1px solid #FFFFFF;
      .container{
        box-shadow: 2px 3px 15px rgba(0, 0, 0, 0.7);
        width: 480px;
        height: 370px;
        background-color: #ffffff;
        backdrop-filter: blur(5px);
        border-radius: 10px;
        margin: 90px auto;
        .login_panle_form {
         display: flex;
         flex-direction: column;
         align-items: center;
         justify-content: center;
         padding: 50px 10px 80px 0px;
          .lg30 {
              padding-bottom: 20px;
          }     
    }
      }
      .login_panle_left {
        width: 697px;
        height: 547px;
        //float: right !important;
        text-align: center;
        color: #f0f0f0;
        font-size: 45px;
        
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        justify-content: space-evenly;
        img{
          height: 60%;
          vertical-align:text-bottom;
        }
      }
      .login_panle_foot {
        position: absolute;
        bottom: 15px;
        text-align: center;
        font-size: 14px;
        color: #f0f0f0;
        
      }
      
    }
  }
  

</style>