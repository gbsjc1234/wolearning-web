import axios from 'axios'
import Urls from './urls'

const baseDir = window.baseDir

const Get = (url, data, successFun, errorFun) => {
  axios.get(baseDir + url, data).then((data) => {
    if (successFun) {
      successFun(data)
    }
  }).catch((error) => {
    if (errorFun) {
      errorFun(error)
    }
  })
}

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

export const GetAllArticalNode = (data, successFun, errorFun) => Get(Urls.sysManage + Urls.getAllNodes, data, successFun, errorFun)

export const GetAllUserAccount = (data, successFun, errorFun) => Get(Urls.userManage + Urls.getAllUserAccount, data, successFun, errorFun)

export const FindUserByCondition = (data, successFun, errorFun) => Get(Urls.userManage + Urls.findUserByCondition, data, successFun, errorFun)

export const DeleteUserAccountByName = (data, successFun, errorFun) => Get(Urls.userManage + Urls.deleteUserAccountByName, data, successFun, errorFun)

export const UpdateUserAccountByName = (data, successFun, errorFun) => Post(Urls.userManage + Urls.updateUserAccountByName, data, successFun, errorFun)
