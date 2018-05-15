<template>
  <tree :data="data2" show-checkbox
        @on-check-change="onCheckChange"
        @on-select-change="onSelectChange"
  ></tree>
</template>
<script>
export default {
  data () {
    return {
      selectedNode: null,
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
