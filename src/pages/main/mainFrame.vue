<template>
  <div class="layout">
  <layout>
    <i-header>
      Header
    </i-header>
    <layout>
      <sider>
        <scroller>
          <card v-for="(item, index) in siderList" :key="index" class="page-main-card" @click.native="clickItem(item.link)">
            {{item.title}}
          </card>
        </scroller>
      </sider>
      <i-content>
          <router-view></router-view>
      </i-content>
    </layout>

    <i-footer>Footer</i-footer>
  </layout>
  </div>
</template>

<script>
export default {
  name: 'main-frame',
  components: {
  },
  data () {
    return {
      siderList: [
        {title: '用户管理', link: '/mainFrame/userManage'},
        {title: '添加随笔', link: '/mainFrame/writeContent'},
        {title: '文章管理', link: '/mainFrame/'},
        {title: '系统管理', link: '/mainFrame/settings'}
      ]
    }
  },
  methods: {
    clickItem (link) {
      this.$router.push(link)
    }
  }

}
</script>

<style lang="less">
.layout {
  .ivu-layout-header {
    background-color: white;
  }
  .ivu-layout-sider {
    background-color: white;
  }
  .ivu-layout-has-sider {
    min-height:600px;
  }
  .ivu-layout-content {
    min-height: 600px;
  }
  .page-main-card {
    cursor: pointer;
    height:45px;
    &:hover {
      background-color: #f8f8f8;
    }
    .ivu-card-body {
      text-align: center;
      padding-top: 8px;
      padding-bottom: 8px;
    }
    &.ivu-card-bordered {
      border-width: 0px;
    }
  }
}
</style>
