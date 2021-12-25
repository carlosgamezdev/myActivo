<script>
  export default { name: 'Sidebar' }
</script>

<script setup>
import { computed } from 'vue'
import { useUiStore } from 'src/store/uiStore'
import SidebarLink from 'src/components/SidebarLink.vue'
// import Module from 'src/models/Module'

const uiStore = useUiStore()
const modulesList = computed(() => uiStore.modules)
const miniState = computed(() => uiStore.miniState)
const toggleMiniState = () => uiStore.toggleMiniState()
</script>

<template>
  <q-list>
    <SidebarLink
      v-for="link in modulesList"
      :key="link.title"
      v-bind="link"
    />
    <q-space />
    <q-separator />
    <SidebarLink
      v-bind="{
        title: 'Settings',
        caption: 'Manage your preferences',
        icon: 'settings',
        to: 'settings'
      }"
    />
  </q-list>
  <div class="absolute" style="bottom: 15px; right: 10px;">
    <q-btn
      dense
      round
      unelevated
      color="secondary"
      :icon="miniState ? 'chevron_right' : 'chevron_left'"
      @click="toggleMiniState"
    />
  </div>
</template>
