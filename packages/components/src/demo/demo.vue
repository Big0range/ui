<template>
  <div class="button">button{{ a }}</div>
</template>
<script lang="ts" setup>
import "./demo.scss";
import { ref } from "vue";
const a = ref("aaaa");

defineProps<{
  color?: string;
}>();
</script>
