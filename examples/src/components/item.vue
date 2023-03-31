<template>
  <div>123</div>
</template>

<script lang="ts" setup>
import { onMounted, ref, inject, reactive } from "vue";
const data: any = inject("data");
console.log("data", data);
data.change(2);
</script>
