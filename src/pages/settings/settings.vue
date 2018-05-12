<template>
  <div class="wl-settings">
   <i-menu mode="horizontal" theme="light" active-name="1" @on-select="onSelect">
      <menu-item name="1" >
        <icon type="ios-paper"></icon>
           文章设置
      </menu-item>
       <menu-item name="2" >
         <icon type="ios-people"></icon>
            角色设置
       </menu-item>
       <menu-item name="3" >
         <icon type="stats-bars"></icon>
            权限设置
       </menu-item>
   </i-menu>
    <div class="wl-content-type">
      <div class="wl-type">
        <div class="wl-type-title">一级类型</div>
        <scroller>
          <card dis-hover v-for="(item, index) in classA" :key="index" @click="clickCard(item)">
            {{ item.name }}
          </card>
        </scroller>
      </div>

      <div class="wl-type">
        <div class="wl-type-title">二级类型</div>
          <scroller>
            <card  v-for="(item, index) in classB" :key="index" @click="clickCard(item)">
              {{ item.name }}
            </card>
          </scroller>
      </div>

      <div class="wl-type">
        <div class="wl-type-title">三级类型</div>
          <scroller>
            <card  v-for="(item, index) in classC" :key="index" @click="clickCard(item)">
              {{ item.name }}
            </card>
          </scroller>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'settings',
  components: {
  },
  data () {
    return {
      showIndex: 1,
      classA: [
        {
          code: '001',
          name: 'dd'
        }
      ],
      classB: [
        {
          code: '001002',
          name: 'ddd'
        }
      ],
      classC: [
        {
          code: '001001001',
          name: 'fff'
        }
      ]
    }
  },
  methods: {
    onSelect (key) {
      this.showIndex = key
    },
    clickCard (item) {
      console.log(item)
    }
  }
}
</script>

<style lang="less">
.wl-settings {
  width: 100%;
  .wl-content-type {
    width: 100%;
    min-height:500px;
    .wl-type {
      width: 20%;
      margin-left: 3%;
      margin-right: 3%;
      display: inline-block;
      .wl-type-title {
        width: 100%;
        text-align:center;
        margin-top: 30px;
      }
      ._v-container {

        position: relative;
        margin-left: 3%;
        margin-right: 3%;
        height: 300px !important;
        background-color: white;
        .ivu-card {
          &:hover {
            background-color: #f8f8f8;
            cursor: pointer;
          }
          .ivu-card-body {
            padding: 10px;
            text-align: center;
          }
        }
      }
    }
  }
}
</style>
