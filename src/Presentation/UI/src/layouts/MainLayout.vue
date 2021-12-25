<script>
  export default {
    name: 'MainLayout'
  }
</script>

<script setup>
  import { computed } from 'vue'
  import { useUiStore } from 'src/store/uiStore'
  import TopToolbar from 'src/layouts/TopToolbar.vue'
  import Sidebar from 'src/layouts/Sidebar.vue'

  const uiStore = useUiStore()
  const leftDrawerOpen = computed(() => uiStore.leftDrawerOpen)
  const miniState = computed(() => uiStore.miniState)
</script>

<template>
 <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <top-toolbar />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="!leftDrawerOpen || miniState"
      show-if-above
      bordered
    >
      <sidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

