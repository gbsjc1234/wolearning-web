<template>
  <div class="page-register">
    <div class="page-register-main">
      <div class="page-register-title">用户注册</div>
      <Form label-position="left" :label-width="60" ref="formValidate" :rules="ruleValidate" :model="formValidate">
        <formItem label="用户名" prop="userName">
          <i-input  v-model="formValidate.userName" placeholder="输入你的用户名" class="page-register-input"></i-input>
        </formItem>
        <formItem label="昵称" prop="nickName">
          <i-input  placeholder="输入你的昵称" v-model="formValidate.nickName" class="page-register-input"></i-input>
        </formItem>
        <formItem label="密码" prop="password">
          <i-input  placeholder="输入你的密码"  type="password" v-model="formValidate.password" class="page-register-input"></i-input>
        </formItem>
        <formItem label="重复密码" prop="replyPassword">
          <i-input  placeholder="重复输入你的密码"  type="password" v-model="formValidate.replyPassword" class="page-register-input"></i-input>
        </formItem>
        <FormItem>
          <i-button type="primary" class="page-register-register" @click="handleSubmit('formValidate')">提交</i-button>
          <i-button type="primary" class="page-register-login">登陆</i-button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    const validateUserName = (rule, value, callback) => {
      let regex = new RegExp('^[a-zA-Z0-9_-]{5,12}$')
      if (!regex.test(value)) {
        callback(new Error('5-12位(字母、数字、下划线、减号)'))
      } else {
        callback()
      }
    }
    const validateNickName = (rule, value, callback) => {
      let regex = new RegExp('^([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z0-9_]){3,10}$')
      if (!regex.test(value)) {
        callback(new Error('3-10位(中文、数字、字母、下划线)'))
      } else {
        callback()
      }
    }

    const validatePassword = (rule, value, callback) => {
      let regex = new RegExp('^[a-zA-Z0-9_-]{6,12}$')
      if (!regex.test(value)) {
        callback(new Error('6-12位(字母、数字、下划线、减号)'))
      } else {
        callback()
      }
    }

    const validateReplyPassword = (rule, value, callback) => {
      let password = this.formValidate.password
      if (password !== value) {
        callback(new Error('两次密码输入不一致'))
      } else {
        callback()
      }
    }

    return {
      formValidate: {
        userName: '',
        nickName: '',
        password: '',
        replyPassword: ''
      },
      ruleValidate: {
        userName: [
          {validator: validateUserName, trigger: 'change'}
        ],
        nickName: [
          {validator: validateNickName, trigger: 'change'}
        ],
        password: [
          {validator: validatePassword, trigger: 'change'}
        ],
        replyPassword: [
          {validator: validateReplyPassword, trigger: 'change'}
        ]
      }
    }
  },
  methods: {
    handleSubmit: function (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          this.$Message.success('注册成功!')
          this.$refs[name].resetFields()
        } else {
          this.$Message.error('注册失败!')
        }
      })
    }
  }
}
</script>

<style>
  body{
    background-color: #666;
  }

  .page-register {
    position: absolute;
    top: 20%;
    width: 100%;
    display: block;
  }

  .page-register-main {
    /*border: 1px solid #fff;*/
    display: block;
    padding: 5px;
    background-color: #efefef;
    margin: 0 auto;
    width: 350px;
  }
  .page-register-title {
    width: 100%;
    text-align: center;
    font: 700 16px/30px 'microsoft yahei';
    padding-bottom: 10px;
    color: #666;
  }

  .page-register-register {
    width: 80px;
    height: 28px;
    margin-left: 45px;
  }

  .page-register-login {
    width: 80px;
    height: 28px;
    margin-left: 20px;
    background-color: #a4a4a4;
    border: #f2f2f2;
  }

</style>
