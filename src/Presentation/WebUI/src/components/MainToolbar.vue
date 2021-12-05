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

    <q-avatar color="secondary" icon="person" />
  </q-toolbar>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'src/store'

export default defineComponent({
  name: 'MainToolbar',
  setup() {
    const store = useStore()

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const title = computed(() => store.state.ui.appTitle)

    return {
      title,
      toggleLeftDrawer() { store.commit('ui/toggleLeftDrawer') },
    }
  }
})
</script>
