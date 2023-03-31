<template>
  <div>
    {{ data.index }}
    <slot />
  </div>
</template>
<script lang="ts" setup>
import { onMounted, ref, provide, reactive } from "vue";
const data = reactive({
  index: 1,
  change: (i: number) => {
    data.index = i;
  },
});
provide("data", data);
</script>
