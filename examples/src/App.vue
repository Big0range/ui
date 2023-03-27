<template>
  <div>
    <BiCrop :preview-type="['default', 'round', 'circle']" @on-ready="demo">
      <img v-if="img" :src="img" alt="" srcset="" />
      <div v-else>456</div>
    </BiCrop>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Demo, DemoApi, BiCrop, BiCropApi } from "@big0range/ui";
const img = ref("");
const demo = (a: [string, Blob]) => {
  console.log(a);
  img.value = a[0];
};
</script>

<style scoped></style>
