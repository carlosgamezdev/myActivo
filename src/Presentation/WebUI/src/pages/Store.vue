<template>
  <q-page padding>
    <h1>Store</h1>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'Store',
  setup() {
    const store = useStore()
    store.commit('ui/setAppTitle', 'myActivo - Store')
  }
})
</script>
