<script>
  export default {
    name: 'Define'
  }
</script>

<script setup>
  import { useMeta } from 'quasar'
  import DataStructureEditor from 'src/components/DataStructureEditor.vue'
  import { useUiStore  } from 'src/store/uiStore'

  useUiStore().setAppTitle('myActivo - Define')
  useMeta({
    title: 'myActivo - Define'
  })
</script>

<template>
<data-structure-editor />
</template>
