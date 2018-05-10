import MainFrame from '../pages/main/mainFrame.vue'
import WriteContent from '../pages/write/writeContent.vue'
export default [
  {
    path: '/mainFrame',
    name: 'MainFrame',
    component: MainFrame,
    meta: {title: '学习平台'},
    children: [
      {
        path: 'writeContent',
        component: WriteContent
      }
    ]
  }
]
