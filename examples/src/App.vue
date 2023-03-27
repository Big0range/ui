<template>
  <div>
    <Demo :preview-type="['default', 'round', 'circle']" @on-ready="demo">
      <img v-if="img" :src="img" alt="" srcset="" />
      <div v-else>456</div>
    </Demo>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Demo, DemoApi, BiCrop, BiCropApi } from "ui";
const img = ref("");
const demo = (a: [string, Blob]) => {
  console.log(a);
  img.value = a[0];
};
</script>

<style scoped></style>
