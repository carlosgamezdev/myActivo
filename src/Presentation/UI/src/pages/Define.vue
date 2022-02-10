<script setup lang="ts">
  import { useMeta } from 'quasar'
  import DataStructureEditor from 'src/components/DataStructureEditor.vue'
  import { useUiStore  } from 'src/store/uiStore'

  useUiStore().setAppTitle('myActivo - Define')
  useMeta({
    title: 'myActivo - Define'
  })
</script>

<template>
<q-page padding>
  <data-structure-editor />
</q-page>
</template>
