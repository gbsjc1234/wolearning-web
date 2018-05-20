import axios from 'axios'
import Urls from './urls'

const baseDir = window.baseDir

// const Get = (url, data, successFun, errorFun) => {
//   axios.get(baseDir + url, data).then((data) => {
//     if (successFun) {
//       successFun(data)
//     }
//   }).catch((error) => {
//     if (errorFun) {
//       errorFun(error)
//     }
//   })
// }

const Post = (url, data, successFun, errorFun) => {
  axios.post(baseDir + url, data, {'Content-Type': 'application/x-www-form-urlencoded'}).then((data) => {
    if (successFun) {
      successFun(data)
    }
  }).catch((error) => {
    if (errorFun) {
      errorFun(error)
    }
  })
}
// 系统设置
export const AddNewNodeToBlog = (data, successFun, errorFun) => Post(Urls.sysManage + Urls.addNodeToClassificationTree, data, successFun, errorFun)
