<template>
  <div>
    <BiCrop
      :preview-type="['default', 'round', 'circle']"
      @on-ready="demo"
      :before-ready="beforeReady"
    >
      <img v-if="img" :src="img" alt="" srcset="" />
      <div v-else>456</div>
    </BiCrop>

    <div>
      <ColorAnimateText :infinite="false" prefix-string="aaaaaaa"></ColorAnimateText>
    </div>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Demo, DemoApi, BiCrop, BiCropApi, ColorAnimateText } from "ui";
const img = ref("");
const demo = (a: { base64: string; blob: Blob }) => {
  console.log(a);
  img.value = a.base64;
};
const beforeReady = () => {
  return new Promise<void>((resolve, reject) => {
    setTimeout(() => {
      reject();
    }, 1000);
  });
};
</script>

<style scoped></style>
