<script setup lang="ts">
  import { computed } from 'vue'
  import { useUiStore } from 'src/store/uiStore'
  import TopToolbar from 'src/layouts/TopToolbar.vue'
  import Sidebar from 'src/layouts/Sidebar.vue'

  const uiStore = useUiStore()
  const miniState = computed(() => uiStore.miniState)
  const leftDrawerOpen = computed({
    get(){
        return uiStore.leftDrawerOpen
      },
    set(value: boolean){
      uiStore.setLeftDrawer(value)
    }
  })
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

