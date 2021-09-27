<template>
  <q-layout view="hHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          myActivo
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :mini="!leftDrawerOpen || miniState"
      bordered
    >
      <q-list>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>

      <q-separator />

      <q-list>
        <EssentialLink
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
import EssentialLink from 'components/EssentialLink.vue'

const modulesList = [
  {
    title: 'Define',
    caption: 'Create data structures',
    icon: 'account_tree',
    to: 'define'
  },
  {
    title: 'Acquire',
    caption: 'Import from any source',
    icon: 'drive_file_move',
    to: 'acquire'
  },
  {
    title: 'Analyse',
    caption: 'Create models and algorithms',
    icon: 'data_object',
    to: 'analyse'
  },
  {
    title: 'Visualise',
    caption: 'Gain insights',
    icon: 'insights',
    to: 'visualise'
  },
  {
    title: 'Decide',
    caption: 'Compare and record decisions',
    icon: 'alt_route',
    to: 'decide'
  },
  {
    title: 'Store',
    caption: 'Store all your data',
    icon: 'storage',
    to: 'store'
  }
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const miniState = ref(false)

    return {
      essentialLinks: modulesList,
      leftDrawerOpen,
      miniState,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
