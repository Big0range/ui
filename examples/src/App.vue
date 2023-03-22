<template>
  <div><Demo a="123" b="456" /></div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { Demo } from "ui";
import { isObject, localStorage, waterMark } from "utils";
console.log(isObject({ a: 123 }));
localStorage.set("a", { a: 12 });
console.log(localStorage.get("a"));

onMounted(() => {
  waterMark.set("这是水印~~");
  // setTimeout(() => {
  //   waterMark.clear();
  // }, 5000);
});
</script>

<style scoped></style>
