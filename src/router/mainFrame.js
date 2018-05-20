import MainFrame from '../pages/main/mainFrame.vue'
import WriteContent from '../pages/write/writeContent.vue'
import Settings from './setting'
import UserManage from './userManage'
export default [
  {
    path: '/mainFrame',
    name: 'MainFrame',
    component: MainFrame,
    meta: {title: '学习平台'},
    children: [
      ...Settings,
      ...UserManage,
      {
        path: 'writeContent',
        component: WriteContent
      }
    ]
  }
]
