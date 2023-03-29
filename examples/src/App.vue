<template>
  <div>
    <BiRotateMenu @change="demo" />
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from "vue";
import { BiRotateMenu } from "ui";
const demo = (e: number) => {
  console.log(e);
};
</script>

<style scoped></style>
