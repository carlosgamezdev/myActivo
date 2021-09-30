<template>
  <q-list>
    <ModuleLink
      v-for="link in modulesList"
      :key="link.title"
      v-bind="link"
    />
    <q-space />
    <q-separator />
    <ModuleLink
      v-bind="{
        title: 'Settings',
        caption: 'Manage your preferences',
        icon: 'settings',
        to: 'settings'
      }"
    />
  </q-list>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'src/store/index'
import ModuleLink from 'components/ModuleLink.vue'
import Module from '../models/Module'

export default defineComponent({
  name: 'ModuleSidebar',

  components: {
    ModuleLink
  },

  setup () {
    const store = useStore()
    const moduleRepo = store.$repo(Module)
    const modulesList = computed(() => moduleRepo.all())

    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    void store.dispatch('getAll','/api/modules').then((res) => moduleRepo.fresh(res.data))

    return {
      modulesList
    }
  }
})
</script>
