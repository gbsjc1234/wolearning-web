<template>
  <quill-editor v-model="value"></quill-editor>
</template>

<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import {quillEditor} from 'vue-quill-editor'

export default {
  name: 'wl-quill-editor',
  components: {
    quillEditor
  },
  data () {
    return {
      value: ''
    }
  }
}
</script>

<style>

</style>
