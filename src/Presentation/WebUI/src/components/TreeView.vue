<template>
  <svg></svg>
</template>

<script lang="ts">
import * as d3 from 'd3'
import { defineComponent, computed } from 'vue'
import { AxiosResponse } from 'axios'
import { useStore } from 'src/store/index'
import JsonSchema from 'src/models/JsonSchema'

export default defineComponent({
  name: 'TreeView',
  setup() {
    const store = useStore()
    const schemaRepo = store.$repo(JsonSchema)

    store.dispatch('getAll','/api/define/schemas/1').then((response: AxiosResponse<JsonSchema>) => schemaRepo.save(response.data)).catch(err => console.log(err))

    const treeData = computed(() => schemaRepo.all())

    return { treeData }
  }
})
</script>
