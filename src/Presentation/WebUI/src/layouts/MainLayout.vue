<template>
  <q-layout v-if="userLoaded" view="hHh Lpr lFf">
    <q-header elevated>
      <MainToolbar />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :mini="!leftDrawerOpen || miniState"
      show-if-above
      bordered
    >
      <ModuleSidebar />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'src/store/index'
import ModuleSidebar from 'src/components/ModuleSidebar.vue'
import MainToolbar from 'src/components/MainToolbar.vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    ModuleSidebar,
    MainToolbar
  },

  setup () {
    const store = useStore()
    const leftDrawerOpen = computed({
      get(){
        return store.state.ui.leftDrawerOpen
      },
      set(value: boolean){
        store.commit('ui/setLeftDrawer',value)
      }
      })
    const userLoaded = computed(() => store.state.ui.userLoaded)
    const miniState = computed(() => store.state.ui.miniState)

    return {
      leftDrawerOpen,
      userLoaded,
      miniState
    }
  }
})
</script>
