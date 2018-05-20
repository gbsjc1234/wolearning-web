<template>
  <div>
  <tree :data="data2" show-checkbox
        @on-check-change="onCheckChange"
        @on-select-change="onSelectChange"
  ></tree>
    <i-input v-model="newNodeName" class="wl-new-node"></i-input>
    <i-button type="primary" @click="addNewNode">添加新节点</i-button>
  </div>
</template>
<script>
import {AddNewNodeToBlog} from '../../services/getData'
export default {
  data () {
    return {
      selectedNode: null,
      newNodeName: '',
      data2: [
        {
          title: '文章分类管理',
          expand: true,
          childrenKey: '000',
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
      this.selectedNode = node[0]
    },
    addNewNode () {
      if (this.newNodeName) {
        if (!this.selectedNode.selected) {
          return
        }
        let parentKey = this.selectedNode.childrenKey
        let params = new FormData()
        params.append('parentCode', parentKey)
        params.append('name', this.newNodeName)
        AddNewNodeToBlog(params, (data) => {
          console.log(data)
        }, (error) => {
          console.log(error)
        })
      }
    }
  }
}
</script>

<style>
  .wl-new-node {
    width: 200px;
  }
</style>
