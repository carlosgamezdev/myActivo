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
import Setting from 'src/models/Setting'

export default defineComponent({
  name: 'MainToolbar',
  setup() {
    const store = useStore()
    const settingsRepo = store.$repo(Setting)

    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const title = computed(() => settingsRepo.query().where('name','appTitle').first()?.value as string || 'myActivo')

    return {
      title,
      toggleLeftDrawer() { store.commit('ui/toggleLeftDrawer') },
    }
  }
})
</script>
