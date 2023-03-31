<template>
  <div class="bi-swiper" ref="swiperRef" :style="{ height: options.height + 'px' }">
    <slot />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide, reactive, onMounted, renderSlot, useSlots } from "vue";
const options = reactive({
  max: 10,
  width: 0,
  height: 310,
  active: 0,
  page: 0,
  itemWidth: 310,
  itemHideWidth: 72,
  flag: 0,
});

provide("options", options);
const swiperRef = ref<HTMLDivElement>();
onMounted(() => {
  options.width = swiperRef.value?.clientWidth || 0;
  console.log(options.width);
  console.log("onMounted");
});
</script>

<style lang="scss">
.bi-swiper {
  overflow-x: hidden;
  white-space: nowrap;
}
</style>
