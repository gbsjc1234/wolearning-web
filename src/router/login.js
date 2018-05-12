import LoginPage from '../pages/loginAndRegister/login.vue'
import Register from '../pages/loginAndRegister/register.vue'

export default [
  {
    path: '/login',
    name: 'login',
    component: LoginPage,
    meta: {title: '登录'}
  },
  {
    path: '/register',
    name: 'register',
    component: Register,
    meta: {title: '注册'}
  }
]
