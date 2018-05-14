<template>
  <div class="page-register">
    <div class="page-register-main">
      <div class="page-register-title">用户注册系统</div>
      <i-input v-model="userName" clearable type="text" placeholder="请输入用户名">
        <span slot="prepend" class="page-register-label">用户名</span>
      </i-input>
      <i-input v-model="nickName" clearable class="page-register-input" type="text" placeholder="请输入昵称">
        <span slot="prepend" class="page-register-label">昵称</span>
      </i-input>
      <i-input v-model="password" clearable class="page-register-input" type="password" placeholder="请输密码">
        <span slot="prepend" class="page-register-label">密码</span>
      </i-input>
      <i-input v-model="replyPassword" clearable class="page-register-input" type="password" placeholder="重复输入密码">
        <span slot="prepend" class="page-register-label">重复密码</span>
      </i-input>
      <i-button class="page-register-register">提交</i-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: '',
      password: '',
      replyPassword: '',
      nickName: ''
    }
  }
}
</script>

<style>
i-input {
    text-indent: 5px;
}

.page-register-label {
  color: #e4e4e4;
  font-family: "Microsoft YaHei";
}

.page-register {
  position: absolute;
  top: 30%;
  width: 100%;
  display: block;
}

.page-register-main {
  border: 1px solid #F2F2F2;
  display: block;
  padding: 5px;
  background-color: #FFF;
  margin: 0 auto;
  width: 200px;
}

.page-register-title {
  color: #0066cc;
}

.page-register-input {
  margin-top: 20px;
}

.page-register-register {
  margin: 20px auto 0;
}

</style>
