<template>
  <div>
    <span v-for="value in values" ref="domRef"></span>
    <div>{{ values }}</div>
  </div>
</template>
<script lang="ts" setup>
import { ref, withDefaults, onMounted, watch, computed, nextTick } from "vue";
import HanziWriter from "hanzi-writer";
import type { HanziWriterOptions } from "./types";

const domRef = ref<HTMLElement[]>([]);
const defaultOptions = {
  width: 60,
  height: 60,
  padding: 2,
  delayBetweenStrokes: 0,
  strokeAnimationSpeed: 3,
  showCharacter: false,
  showOutline: false,
  strokeColor: "#FFC107",
};
const props = defineProps<{
  values: string;
  /**
   * @see https://www.baidu.com
   */
  options?: Partial<HanziWriterOptions>;
}>();

const computedOptions = computed(() => {
  return { ...props.options, ...defaultOptions };
});
const reset = () => {
  domRef.value?.forEach((item) => {
    item.innerHTML = "";
  });
};

const start = async () => {
  reset();
  for (let i = 0; i < props.values.length; i++) {
    if (!/^[\u4E00-\u9FA5]{1,1}$/.test(props.values[i])) {
      console.error(`BiHanziWriter: 错误字符====>${props.values[i]}, 不是汉字`);
      continue;
    }
    if (domRef.value[i] === undefined) {
      continue;
    }
    await HanziWriter.create(
      domRef.value[i],
      props.values[i],
      computedOptions.value
    ).animateCharacter();
  }
};

onMounted(() => {
  start();
});
</script>
