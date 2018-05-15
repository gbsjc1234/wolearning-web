<template>
  <div>
  <tree :data="data2" show-checkbox
        @on-check-change="onCheckChange"
        @on-select-change="onSelectChange"
  ></tree>
    <i-input v-model="newNodeName" class="wl-new-node"></i-input>
    <i-button type="primary">添加新节点</i-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectedNode: null,
      newNodeName: '',
      data2: [
        {
          title: 'parent 1',
          expand: true,
          children: [
            {
              title: 'parent 1-1',
              expand: true,
              children: [
                {
                  title: 'leaf 1-1-1'
                },
                {
                  title: 'leaf 1-1-2'
                }
              ]
            },
            {
              title: 'parent 1-2',
              expand: true,
              children: [
                {
                  title: 'leaf 1-2-1'
                },
                {
                  title: 'leaf 1-2-1'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    onCheckChange (node) {
      console.log(node)
    },
    onSelectChange (node) {
      console.log(node)
      this.selectedNode = node
    }
  }
}
</script>

<style>
  .wl-new-node {
    width: 200px;
  }
</style>
