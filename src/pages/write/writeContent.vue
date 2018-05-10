<template>
  <div>
    <div>选择编辑器</div>
    <div>
      <md-editor v-if="isMdEditor"></md-editor>
      <quill-editor v-if="!isMdEditor"></quill-editor>
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
      isMdEditor: true
    }
  }
}
</script>

<style>

</style>
