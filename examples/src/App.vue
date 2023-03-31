<template>
  <div style="width: 1200px; background-color: red">
    <BiSwiper>
      <BiSwiperItem v-for="i in 10"></BiSwiperItem>
    </BiSwiper>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref, useSlots, h } from "vue";
import { BiSwiper, BiSwiperItem } from "ui";
</script>

<style scoped></style>
