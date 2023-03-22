<template>
  <div class="button">button组件</div>
</template>
<script lang="ts" setup>
import "./button.scss";
import { ref } from "vue";
const a = ref("aaaa");

defineProps<{
  color?: string;
}>();
</script>
