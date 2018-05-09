import HelloWorld from '../components/HelloWorld.vue'
// import LoginPage from '../pages/login.vue'
import LoginRoute from './login'

export default [
  ...LoginRoute,
  {
    path: '/',
    name: 'HelloWorld',
    component: HelloWorld
  }
]
