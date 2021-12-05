<template>
  <q-page padding>
    <h1>Analyse</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'Analyse',
  setup() {
    const store = useStore()
    store.commit('ui/setAppTitle', 'myActivo - Analyse')
  }
})
</script>
