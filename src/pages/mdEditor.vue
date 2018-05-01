<template>
  <div>
    <mavon-editor v-model="editorValue" :ishljs = "true"></mavon-editor>
  </div>
</template>

<script>

import {mavonEditor} from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
export default {
  name: 'md-editor',
  components: {
    mavonEditor
  },
  data () {
    return {
      editor: null,
      editorValue: 'sadfasd'
    }
  }
}
</script>

<style lang="less">

</style>
