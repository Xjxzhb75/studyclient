<template>
  <div class="index">
    <el-container>
     <el-header>
    <div class="logo">
      <img src="@/assets/img/logo-blue-long.png">
      <div class="text">健康险·数据管理系统</div>
    </div>

    <div class="upLogin">
      <el-popconfirm title="确定要退出登录吗？"  @confirm="outLogin">
      <el-button type="danger" slot="reference">退出登录</el-button> 
      </el-popconfirm> 
    </div>
  </el-header>
  <el-container>

    <el-aside :width="isCollapse ? '64px':'150px'">
     <el-menu  background-color="#dde4ee"
        active-text-color="#85A5FF"
        text-color="rgba(0, 0, 0, 0.7)"
        :collapse="isCollapse"
        router 
        >
      <el-menu-item index="1">
        <i class="el-icon-edit"></i>
        <span slot="title">报表上传</span>
      </el-menu-item>

         <el-menu-item index="2">
        <i class="el-icon-data-analysis"></i>
        <span slot="title">数据浏览</span>
      </el-menu-item>

        <el-menu-item index="3">
        <i class="el-icon-setting"></i>
        <span slot="title">账号管理</span>
      </el-menu-item>
        
     </el-menu>
    </el-aside>
    <el-main>Main</el-main>
  </el-container>
</el-container></div>
</template>

<script>
export default {
  data(){
   return {
     isCollapse:false
     }
  },
methods: {
    outLogin(){
     //console.log(window.sessionStorage.getItem("token"));
     window.sessionStorage.removeItem("token");
     window.sessionStorage.removeItem("username");

     this.$message.success("退出成功！")
     this.$router.push('/login');
     } 
   },
}
</script>

<style lang="less" scoped>
.index{
    height: 100%;
}

.el-header {
    background:#d3e4eb;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .logo{
      display: flex;
      align-items:center; 
      height: 100%;
     
      .text{
      font-size:18px;
      color:#657ddf;
      padding-left:20px;
      }
    }
}
.el-aside{
    background:#dde4ee;
    .el-menu{
      border-right:none;
    }

}
.el-container{
    background:#F8F8F8;
    height: 100%;
}

</style>