<template>
  <q-page class="row items-center justify-evenly">
    <structure-visualiser />
    <!-- <example-component
      title="Example component"
      active
      :todos="todos"
      :meta="meta"
    ></example-component> -->
  </q-page>
</template>

<script lang="ts">
import StructureVisualiser from 'components/StructureVisualiser.vue';
// import { defineComponent, ref } from 'vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  components: { StructureVisualiser },
  setup() {
    return {};
  }
});
</script>
