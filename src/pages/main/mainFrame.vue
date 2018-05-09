<template>
  <div class="layout">
  <layout>
    <i-header>
      Header
    </i-header>

    <layout>
      <sider>
        <scroll>
          <card v-for="(item, index) in siderList" :key="index" class="page-main-card">
            {{item}}
          </card>
        </scroll>
      </sider>
      <i-content>
        content
      </i-content>
    </layout>

    <i-footer>Footer</i-footer>
  </layout>
  </div>
</template>

<script>
export default {
  name: 'main-frame',
  data () {
    return {
      siderList: ['用户管理', '添加随笔', '文章管理']
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
    min-height:300px;
  }
  .page-main-card {
    margin: 5px 10px;
    .ivu-card-body {
      padding-top: 8px;
      padding-bottom: 8px;
    }
  }
}
</style>
