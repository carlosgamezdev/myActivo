<template>
  <q-toolbar>
    <q-btn
      flat
      dense
      round
      icon="apps"
      aria-label="Menu"
      @click="toggleLeftDrawer"
    />

    <q-toolbar-title>
      {{title}}
    </q-toolbar-title>

    <!-- <q-avatar color="secondary" icon="person" /> -->
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useUiStore } from 'src/store/uiStore'

export default defineComponent({
  name: 'TopToolbar',
  setup() {
    const uiStore = useUiStore()
    const title = computed(() => uiStore.appTitle)

    return {
      title,
      toggleLeftDrawer() { uiStore.toggleLeftDrawer() },
    }
  }
})
</script>
