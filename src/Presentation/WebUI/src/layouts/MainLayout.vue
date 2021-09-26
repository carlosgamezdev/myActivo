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

        <!-- <div>Quasar v{{ $q.version }}</div> -->
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

      <div class="absolute" style="bottom: 15px; right: 10px">
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
    link: 'https://app.myactivo.com'
  },
  {
    title: 'Acquire',
    caption: 'Import from any source',
    icon: 'drive_file_move',
    link: 'https://app.myactivo.com'
  },
  {
    title: 'Analyse',
    caption: 'Create models and algorithms',
    icon: 'data_object',
    link: 'https://app.myactivo.com'
  },
  {
    title: 'Visualise',
    caption: 'Gain insights',
    icon: 'insights',
    link: 'https://app.myactivo.com'
  },
  {
    title: 'Decide',
    caption: 'Compare and record decisions',
    icon: 'alt_route',
    link: 'https://app.myactivo.com'
  },
  {
    title: 'Store',
    caption: 'Store all your data',
    icon: 'storage',
    link: 'https://app.myactivo.com'
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
