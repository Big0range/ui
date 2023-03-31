<template>
  <div
    class="bi-swiper-item"
    :class="{ active: flag === options.active }"
    :style="{
      height: options.height,
      '--showWidth': showWidth + 'px',
      '--hideWidth': hideWidth + 'px',
      '--swiperItemHeight': options.height + 'px',
    }"
    @mousemove="hoverMethod"
  >
    <img
      class="cover"
      src="//www.cnr.cn/2022/images/xingzhen0620/guangdong.jpg"
      alt=""
      srcset=""
    />
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted, inject, computed } from "vue";
const options: any = inject("options");
/**自身的排序标记 */
const flag = options.flag;
options.flag++;

/**收起宽度 */
const hideWidth = computed(() => {
  return options.itemHideWidth;
});
/**展开宽度 */
const showWidth = computed(() => {
  return options.width - (options.max - 1) * hideWidth.value;
});
const hoverMethod = () => {
  if (flag === options.active) return;
  console.log(flag);
  options.active = flag;
};
</script>

<style lang="scss">
.bi-swiper-item {
  overflow: hidden;
  display: inline-block;
  border: 1px solid blue;
  width: var(--hideWidth);
  height: var(--swiperItemHeight);
  &.active {
    width: var(--showWidth);
    transition: width ease 1s;
  }
  .cover {
    width: var(--showWidth);
    height: var(--swiperItemHeight);
  }
}
</style>
