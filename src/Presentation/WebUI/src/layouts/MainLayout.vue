<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
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
          myActivo
        </q-toolbar-title>

        <q-avatar color="secondary" icon="person" />
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="!leftDrawerOpen || miniState"
      show-if-above
      bordered
    >
      <ModuleSidebar />

      <div class="absolute" style="bottom: 15px; right: 10px;">
          <q-btn
            dense
            round
            unelevated
            color="secondary"
            :icon="miniState ? 'chevron_right' : 'chevron_left'"
            @click="miniState = !miniState"
          />
        </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import ModuleSidebar from './ModuleSidebar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    ModuleSidebar
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const miniState = ref(false)

    return {
      leftDrawerOpen,
      miniState,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
