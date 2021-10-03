<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import useUser from 'src/composables/useUser'

export default defineComponent({
  name: 'App',

  setup () {
    void useUser('1')
  }
})
</script>
