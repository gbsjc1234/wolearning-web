import axios from 'axios'
import Urls from './urls'

axios.interceptors.request.use(config => {
  if (localStorage.getItem('token')) {
    config.headers.Authorization = localStorage.getItem('token')
  }
  return config
}, (error) => {
  console.log(error)
})

const baseDir = window.baseDir

const Get = (url, data, successFun, errorFun) => {
  axios.get(baseDir + url, data).then((data) => {
    if (successFun) {
      successFun(data.data)
    }
  }).catch((error) => {
    if (errorFun) {
      errorFun(error.data)
    }
  })
}

const Post = (url, data, successFun, errorFun) => {
  axios.post(baseDir + url, data, {'Content-Type': 'application/x-www-form-urlencoded'}).then((data) => {
    if (successFun) {
      successFun(data.data)
    }
  }).catch((error) => {
    if (errorFun) {
      errorFun(error.data)
    }
  })
}
// 系统设置
export const AddNewNodeToBlog = (data, successFun, errorFun) => Post(Urls.sysManage + Urls.addNodeToClassificationTree, data, successFun, errorFun)

export const GetAllArticalNode = (data, successFun, errorFun) => Get(Urls.sysManage + Urls.getAllNodes, data, successFun, errorFun)

export const GetAllUserAccount = (data, successFun, errorFun) => Get(Urls.userManage + Urls.getAllUserAccount, data, successFun, errorFun)

export const FindUserByCondition = (data, successFun, errorFun) => Get(Urls.userManage + Urls.findUserByCondition, data, successFun, errorFun)

export const DeleteUserAccountByName = (data, successFun, errorFun) => Get(Urls.userManage + Urls.deleteUserAccountByName, data, successFun, errorFun)

export const UpdateUserAccountByName = (data, successFun, errorFun) => Post(Urls.userManage + Urls.updateUserAccountByName, data, successFun, errorFun)

export const UserLogin = (data, successFun, errorFun) => Post(Urls.userAccount + Urls.login, data, successFun, errorFun)
