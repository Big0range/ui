<template>
  <div>
    <!-- <slot /> -->
    {{ slots[1] }}
  </div>
</template>
<script lang="ts" setup>
import { getCurrentInstance, useSlots } from "vue";
console.log(getCurrentInstance()?.vnode);
console.log(useSlots().default!());
const slots = useSlots().default!();
</script>
