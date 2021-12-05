<template>
  <q-page>
    <q-toolbar class="bg-secondary text-white">
      <q-btn-group>
        <q-btn label="Tree" to="/define/tree-view" />
      </q-btn-group>
    </q-toolbar>
    <router-view />
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'Define',
  setup() {
    const store = useStore()
    store.commit('ui/setAppTitle', 'myActivo - Define')

    return { }
  }
})
</script>
