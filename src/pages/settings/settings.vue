<template>
   <i-menu mode="horizontal" theme="light" active-name="1">
      <i-menu-item name="1" @on-select="onSelect">
        <Icon type="ios-paper"></Icon>
          文章类型设置
      </i-menu-item>
   </i-menu>
</template>

<script>
export default {
  name: 'settings',
  components: {
  },
  data () {
  },
  methods: {
    onSelect (key) {
      console.log(key)
    }
  }
}
</script>

<style lang="less">

</style>
