import HelloWorld from '../components/HelloWorld.vue'
// import LoginPage from '../pages/login.vue'
import LoginRoute from './login'
import MainFrameRoute from './mainFrame'

export default [
  ...LoginRoute,
  ...MainFrameRoute,
  {
    path: '/helloworld',
    name: 'HelloWorld',
    component: HelloWorld
  }
]
