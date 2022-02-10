<script setup lang="ts">
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { ref, computed } from 'vue'
import { VAceEditor } from 'vue3-ace-editor'
// import Tree from 'src/composables/useTree'
import ace from 'ace-builds'
import 'ace-builds/src-min-noconflict/theme-chrome'
import 'ace-builds/src-min-noconflict/mode-json'
import workerJsonUrl from 'file-loader?esModule=false!ace-builds/src-noconflict/worker-json.js'
import * as d3 from 'd3'
import { DefaultLinkObject } from 'd3'

ace.config.setModuleUrl('ace/mode/json_worker', workerJsonUrl)

const svgRef = ref<SVGSVGElement>()
const content = ref('{\n \"name\":\"root object\",\n \"otherprop\": \"another object\",\n \"children\": [\n    {\n        \"name\": \"child 1\",\n        \"children\": [\n            {\n                \"name\": \"grand child 1\"\n            },\n            {\n                \"name\": \"grand child 2\"\n            }\n        ]\n    },\n    {\n        \"name\": \"child 2\"\n    }\n ]\n}')

const padding = 10
const width = computed(() => svgRef.value ? svgRef.value.width.baseVal.value - (2 * padding) : 0)
const height = computed(() => svgRef.value ? svgRef.value.height.baseVal.value - (2 * padding) : 0)

const jsonContent = computed(() => {
  try {
    return JSON.parse(content.value) as Record<string,unknown>[]
  } catch (error) {
    return {}
  }
})

const root = computed(() => d3.hierarchy<Record<string,unknown>>(jsonContent.value))
const tree = computed(() => {
  const treeFunc = d3.tree<Record<string,unknown>>()
  return treeFunc(root.value)
})
const links = computed(() => tree.value.links())

const path = (link: d3.HierarchyPointLink<Record<string,undefined>>) => {
  const linkGenerator = d3.linkHorizontal()
  const generatedLink = linkGenerator(link)
  return generatedLink ? generatedLink : undefined
}

// const getBezierPath = (source: { x: number; y: number }, target: { x: number; y: number }) => {

//     const from = {
//       y: source.x * height.value,
//       x: source.y * width.value + padding
//     }

//     const to = {
//       y: target.x * height.value,
//       x: target.y * width.value + padding
//     }


//     if (Math.abs(from.x - to.x) > Math.abs(from.y - to.y)) {
//     const midX = (to.x + from.x) / 2;
//     return `M ${from.x},${from.y} C ${midX},${from.y} ${midX},${to.y} ${to.x},${to.y}`;
//   } else {
//     const midY = (to.y + from.y) / 2;
//     return `M ${from.x},${from.y} C ${from.x},${midY} ${to.x},${midY} ${to.x},${to.y}`;
//   }
// };

</script>

<template>
  <div class="row" style="min-height: inherit;">
    <div class="col">
      <v-ace-editor v-model:value="content" lang="json" style="height: 100%;" :options="{ useWorker: true }" />
    </div>
    <q-separator vertical />
    <div class="col">
      <svg ref="svgRef" style="width: 100%; height: 100%;">
        <g
          v-for="(n,i) in tree.descendants()"
          :key="i"
        >
          <text
            :x="width * n.y + padding"
            dx="1em"
            :y="height * n.x"
            dy="0.35em"
          >{{n.data.name}}</text>
          <circle
            r="5"
            :cx="width * n.y + padding"
            :cy="height * n.x"
          />
        </g>
        <path
          v-for="(link,i) in links"
          :key="i"
          fill="transparent"
          stroke="black"
          :d="path(link)"
        />
      </svg>
    </div>
  </div>
</template>
