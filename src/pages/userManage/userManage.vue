<template>
  <div class="user-manager">
    <Card>
      <div class="user-manager-menu">
        <a class="add-new-user">
          <Icon type="plus"></Icon>
          添加新用户
        </a>
      </div>
      <div class="select-content">
        <div class="select-condition clearfix">
          <div class="findByName findCondition">
            <div>
              <label>用户名</label>
            </div>
            <i-input placeholder="输入用户名" v-model="selectCondition.findByUserName"></i-input>
          </div>
          <div class="findByTime findCondition">
            <div>
              <label>时间段</label>
            </div>
            <DatePicker v-model="selectCondition.findByTime" type="daterange" :start-date="new Date(1991, 4, 14)" placement="bottom-end" placeholder="选择时间段" style="width: 200px"></DatePicker>
          </div>

          <div class="findByIsDeleted findCondition">
            <div>
              <label>用户状态</label>
            </div>
            <Select style="width:120px" v-model="selectCondition.findByIsDeleted">
              <Option v-for="item in optionValue" :value="item.value" :key="item.value">{{item.label}}</Option>
            </Select>
          </div>
          <div class="find-button">
            <i-button type="primary" shape="circle" icon="ios-search" @click="handleSelect">查询</i-button>
          </div>
        </div>
        <div class="page-content">
          <Table border :columns="columns" :data="userData" :loading="loading"></Table>
        </div>
      </div>

      <div class="select-page">
        <Page :total="pageDefine.totalItem" @on-page-size-change="handleChangePageSize" :page-size="pageDefine.currentPageSize" @on-change="handleChangePageIndex" show-sizer :page-size-opts="pageDefine.pageSizeSelect"></Page>
      </div>
    </Card>
    <Modal
      v-model="deleted.isDeleted"
      :width="280"
      title="提示"
      @on-ok="deleteOK"
      @on-cancel="deleteCancel">
      <p slot="header" style="color:#f60;text-align:center; font-size: 16px">
        <Icon type="information-circled"></Icon>
        <span>提示</span>
      </p>
      <div style="text-align: center"><span style="color: #666; font-weight: 600; font-size: 14px; font-family: 'Microsoft YaHei';">确认删除用户：<a style="color: #FF6600">{{deleted.name}}</a></span></div>
    </Modal>
    <Modal
      v-model="update.isUpdate"
      :width="500"
      :height="320"
      title="修改用户信息"
      @on-ok="updateOK"
      @on-cancel="updateCancel">
      <div class="update-main">
        <div class="update-name">{{update.name}}的信息</div>
        <Form label-position="left" :label-width="60">
          <formItem label="昵称" prop="nickName">
            <i-input  placeholder="输入昵称" v-model="update.nickName"></i-input>
          </formItem>
          <formItem label="身份" prop="nickName">
            <i-input  placeholder="输入身份" v-model="update.role"></i-input>
          </formItem>
          <formItem label="权限" prop="nickName">
            <i-input  placeholder="输入权限" v-model="update.authority"></i-input>
          </formItem>
        </Form>
      </div>
    </Modal>
  </div>
</template>

<script>
import {GetAllUserAccount, FindUserByCondition, DeleteUserAccountByName, UpdateUserAccountByName} from '../../services/getData'
export default {
  data () {
    return {
      columns: [
        {
          title: '用户名',
          key: 'name'
        },
        {
          title: '昵称',
          key: 'nickName'
        },
        {
          title: '身份',
          key: 'role'
        },
        {
          title: '权限',
          key: 'authority'
        },
        {
          title: '创建时间',
          key: 'createTime'
        },
        {
          title: '修改时间',
          key: 'modifyTime'
        },
        {
          title: '用户状态',
          key: 'isDeleted'
        },
        {
          title: '操作',
          key: 'action',
          width: 150,
          align: 'center',
          render: (h, params) => {
            return h('div', [
              h('Button', {
                props: {
                  type: 'primary',
                  size: 'small'
                },
                style: {
                  marginRight: '5px'
                },
                on: {
                  click: () => {
                    this.update.name = params.row.name
                    this.update.nickName = params.row.nickName
                    this.update.role = params.row.role
                    this.update.authority = params.row.authority
                    this.update.isUpdate = true
                  }
                }
              }, '更新'),
              h('Button', {
                props: {
                  type: 'error',
                  size: 'small'
                },
                on: {
                  click: () => {
                    this.deleted.isDeleted = true
                    this.deleted.name = params.row.name
                  }
                }

              }, '删除')
            ])
          }
        }
      ],
      loading: true,
      deleted: {
        name: '',
        isDeleted: false
      },
      update: {
        isUpdate: false,
        name: '',
        nickName: '',
        role: '',
        authority: ''
      },
      userData: [
        {name: 'admin1', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin2', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin3', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin4', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin5', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin6', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin7', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'},
        {name: 'admin8', nickName: 'jack', 'role': '管理员', 'authority': 'averageUser', 'createTime': '2018-5-21', 'modifyTime': '-', 'isDeleted': '有效'}
      ],
      selectCondition: {
        findByUserName: '',
        findByTime: '',
        findByIsDeleted: ''
      },
      optionValue: [
        {label: '有效', value: 0},
        {label: '已删除', value: 1}
      ],
      pageDefine: {
        currentPageIndex: 1,
        totalItem: 0,
        currentPageSize: 6,
        pageSizeSelect: [6, 8, 10, 12, 18, 20]
      }
    }
  },
  mounted () {
    this.getAllUserAccount()
  },
  methods: {
    handleSelect: function (pageIndex = 1) {
      if (this.selectCondition.findByUserName || this.selectCondition.findByIsDeleted || this.selectCondition.findByTime[0]) {
        this.pageDefine.currentPageIndex = pageIndex
        let params = new FormData()
        params.append('pageSize', this.pageDefine.currentPageSize)
        params.append('pageIndex', this.pageDefine.currentPageIndex)
        if (this.selectCondition.findByUserName) {
          params.append('name', this.selectCondition.findByUserName)
        }
        if (this.selectCondition.findByIsDeleted) {
          params.append('isDeleted', this.selectCondition.findByIsDeleted)
        }
        if (this.selectCondition.findByTime[0]) {
          params.append('start', this.selectCondition.findByTime[0])
          params.append('end', this.selectCondition.findByTime[1])
        }
        this.loading = true
        FindUserByCondition(params, (data) => {
          if (data.data.code === 0) {
            this.userData = [data.data.data.userInfo]
            this.pageDefine.totalItem = data.data.data.total
            this.loading = false
          } else {
            this.loading = false
            this.$Notice.open({
              title: '提示',
              desc: '查询失败'
            })
          }
        }, (error) => {
          this.loading = false
          console.log(error)
        })
      } else {
        this.getAllUserAccount()
      }
    },
    handleChangePageIndex: function (pageIndex) {
      this.handleSelect(pageIndex)
    },
    handleChangePageSize: function (pageSize) {
      this.pageDefine.currentPageSize = pageSize
      this.handleSelect(1)
    },
    getAllUserAccount: function () {
      let params = new FormData()
      params.append('pageSize', this.pageDefine.currentPageSize)
      params.append('pageIndex', this.pageDefine.currentPageIndex)
      this.loading = true
      GetAllUserAccount(params, (data) => {
        if (data.data.code === 0) {
          this.userData = [data.data.data.userInfo]
          this.pageDefine.totalItem = data.data.data.total
          this.loading = false
          console.log(this.userData)
        } else {
          this.loading = false
          this.$Notice.open({
            title: '提示',
            desc: '查询失败'
          })
        }
      }, (error) => {
        this.loading = false
        console.log(error)
      })
    },
    deleteCancel: function () {
      this.deleted.isDeleted = false
    },
    deleteOK: function () {
      this.deleted.isDeleted = false
      let params = new FormData()
      params.append('name', this.deleted.name)
      DeleteUserAccountByName(params, (data) => {
        if (data.data.code === 0) {
          this.handleSelect(this.pageDefine.currentPageIndex)
        } else {
          this.$Notice.open({
            title: '提示',
            desc: '删除失败'
          })
        }
      }, (error) => {
        this.loading = false
        console.log(error)
      })
    },
    updateOK: function () {
      this.update.isUpdate = false
      let params = new FormData()
      params.append('name', this.update.name)
      params.append('name', this.update.role)
      params.append('name', this.update.authority)
      params.append('name', this.update.nickName)
      UpdateUserAccountByName(params, (data) => {
        if (data.data.code === 0) {
          this.handleSelect(this.pageDefine.currentPageIndex)
        } else {
          this.$Notice.open({
            title: '提示',
            desc: '跟新失败'
          })
        }
      }, (error) => {
        this.loading = false
        console.log(error)
      })
    },
    updateCancel: function () {
      this.update.isUpdate = false
    }
  }
}
</script>

<style>
  .user-manager {
    width: 100%;
  }

  .select-content {
    min-height: 200px;
  }

  .user-manager-menu {
    margin-bottom: 10px;
  }

  .add-new-user {
    cursor: pointer;
    color: #495060;
  }

  .add-new-user:hover {
    color: #2d8cf0;
  }

  .findByName {
    float: left;
  }
  .findByTime {
    float: left;
  }

  .find-button {
    float: left;
    margin-top: 20px;
    /*margin-left: 50px;*/
  }

  .findCondition {
    margin-right: 120px;
  }

  .findByIsDeleted {
    float: left;
  }

  .page-content {
    margin-top: 20px;
  }

  .select-page {
    padding-top: 20px;
    text-align: center;
  }

  /*清除浮动*/
  .clearfix:before, .clearfix:after {
    content:"";
    display:table;
  }

  .clearfix:after {clear:both;}

  .clearfix {
    *zoom:1;/*IE/7/6*/
  }
  .update-name {
    text-align: center;
    font-size: 16px;
    font-family: 'Microsoft YaHei';
    font-weight: 600;
    margin-bottom: 20px;
  }
  .update-main {
    width: 380px;
    margin: 0 auto;
  }
</style>
