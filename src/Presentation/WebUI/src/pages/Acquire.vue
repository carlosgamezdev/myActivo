<template>
  <q-page padding>
    <h1>Acquire</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'Acquire',
  setup() {
    const store = useStore()
    store.commit('ui/setAppTitle', 'myActivo - Acquire')
  }
})
</script>
