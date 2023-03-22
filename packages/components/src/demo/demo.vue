<template>
  <div>
    <div>
      <el-button>{{ demo.a }} b:{{ demo.b }}</el-button>
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
const demo = ref<IDemo>({ a: "a", b: "b" });
</script>
