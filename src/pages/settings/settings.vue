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
import {AddNewNodeToBlog, GetAllArticalNode} from '../../services/getData'
export default {
  data () {
    return {
      selectedNode: null,
      newNodeName: '',
      data2: [

      ]
    }
  },
  mounted () {
    this.getAllNodes()
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
          if (data.code === 0) {
            this.getAllNodes()
            this.$Notice.open({
              title: '提示',
              desc: '添加子节点成功'
            })
          } else {
            this.$Notice.open({
              title: '提示',
              desc: '添加子节点失败'
            })
          }
        }, (error) => {
          console.log(error)
        })
      }
    },
    getAllNodes () {
      GetAllArticalNode({}, (data) => {
        console.log(data)
        if (data.code === 0) {
          data.data.expand = true
          this.data2 = [data.data]
          console.log(this.data2)
        } else {

        }
      }, (error) => {
        console.log(error)
      })
    }
  }
}
</script>

<style>
  .wl-new-node {
    width: 200px;
  }
</style>
