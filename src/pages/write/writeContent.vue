<template>
  <div class="wl-write-content">
    <div class="wl-write-head">
      <i-select v-model="editorType" class="wl-write-select">
        <i-option v-for="item in editorList" :value="item.value" :key="item.value">{{item.label}}</i-option>
      </i-select>
      <i-button type="ghost" class="el-write-save">
        保存草稿
      </i-button>
      <i-button type="primary" class="el-write-save">
        发布
      </i-button>
    </div>
    <div>
      <md-editor v-if="editorType=='md'"></md-editor>
      <quill-editor v-if="editorType=='quill'"></quill-editor>
    </div>
  </div>
</template>
<script>
import MdEditor from '../../components/editors/MdEditor.vue'
import QuillEditor from '../../components/editors/QuillEditor.vue'
export default {
  components: {
    MdEditor,
    QuillEditor
  },
  data () {
    return {
      isMdEditor: true,
      editorType: 'md',
      editorList: [
        {value: 'md', label: 'md编辑器'},
        {value: 'quill', label: '富文本编辑器'}
      ]
    }
  }
}
</script>

<style lang="less">
.wl-write-content {
  background-color: white;
  .wl-write-head {
    height: 60px;
    .wl-write-select {
      width: 200px;
      display: inline-block;
      float: left;
      margin-left: 20px;
      .ivu-select-dropdown {
        z-index: 10000;
      }
    }
    .el-write-save {
      display: inline-block;
      float: right;
      margin-right: 20px;
    }

  }
}
</style>
