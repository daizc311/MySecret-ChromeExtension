<template>
  <div id="appPopup">
    <el-container>
      <el-header style="height: 40px">
        <!-- 菜单 -->
        <el-menu :default-active="$route.path"
                 class="el-menu-demo"
                 mode="horizontal"
                 :background-color="backgroundColor"
                 text-color="#fff"
                 active-text-color="#ffd04b"
                 router="true"
                 @select="handleSelect">
          <el-menu-item  index="/Notebook">记事本</el-menu-item>
          <el-menu-item  index="/PwdItems">密码管理</el-menu-item>
          <el-menu-item  index="/A1">处理中心</el-menu-item>
        </el-menu>
        <!-- 头像 -->
        <div class="avatar">
          <el-avatar :size="50" :src="avatarImgSrc"></el-avatar>
        </div>
      </el-header>
      <el-container>
        <!-- 使用 router-link 组件来导航. -->
        <!-- 通过传入 `to` 属性指定链接. -->
        <!-- <router-link> 默认会被渲染成一个 `<a>` 标签 -->
        <router-view/>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'AppPopup',
  created() {
    this.$router.push(this.defaultActive)
  },
  data: function () {
    return {
      avatarImgSrc:"https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      backgroundColor:"#545c64",
      defaultActive:"/Notebook",
      test: true
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      // console.log(key, keyPath);
    }
  }
}
</script>

<style>
html {

  width: 400px;
  height: 400px;
}

body, html {
  margin: 0;
  padding: 0;
}

.avatar {
  overflow: hidden;
  width: 50px;
  height: 50px;
  border-style: solid;
  border-width: 5px;
  border-color: #545c64;
  border-radius: 100px;
  position: absolute;
  right: 0;
  top: 0;
}

.el-header {
  padding: 0 !important;
}

.el-menu--horizontal > .el-menu-item {
  height: 40px !important;
  line-height: 40px !important;
}
</style>
