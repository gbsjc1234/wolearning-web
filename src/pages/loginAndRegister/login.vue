<template>
  <div class="page-login" :style="documentHeight">
    <div class="page-login-main">
      <div class="page-login-title">用户登录系统</div>
      <i-input v-model="userName" clearable >
        <span slot="prepend" class="page-login-label">用户名</span>
      </i-input>
      <i-input v-model="password" clearable class="page-login-input">
       <span slot="prepend">密码</span>
      </i-input>
      <i-button type="primary" class="page-login-login">登录</i-button>
      <i-button class="page-login-login">注册</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  computed: {
    documentHeight () {
      return document.body.clientHeight
    }
  }
}
</script>

<style lang="less">
.page-login {
  position: absolute;
  top: 30%;
  width: 100%;
  display: block;
  .page-login-main {
    border: 1px solid #F2F2F2;
    display: block;
    padding: 5px;
    background-color: white;
    margin: 0 auto;
    width: 200px;
    .page-login-title {
      color: #0066cc;
    }
    .page-login-input {
      margin-top: 20px;
    }
    .ivu-input-group-prepend {
      width: 60px;
    }
    .page-login-login {
      margin-top: 20px;
      margin-right: 10px;
      margin-left: 10px;
    }
  }
}
</style>
