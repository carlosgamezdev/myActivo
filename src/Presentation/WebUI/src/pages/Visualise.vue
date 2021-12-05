<template>
  <q-page padding>
    <h1>Visualise</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'Visualise',
  setup() {
    const store = useStore()
    store.commit('ui/setAppTitle', 'myActivo - Visualise')
  }
})
</script>
