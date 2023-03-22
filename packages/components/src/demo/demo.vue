<template>
  <div>
    <div>
      <el-button>{{ a }} b:{{ b }}</el-button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
interface IDemo {
  a: string;
  b: string;
}
defineProps<IDemo>();
</script>
