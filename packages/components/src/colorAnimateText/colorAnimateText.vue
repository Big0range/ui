<template>
  <div ref="container"></div>
</template>
<script lang="ts" setup>
import { ref, withDefaults, onMounted, onBeforeUnmount, Ref } from "vue";
import { ColorAnimateTextInstance } from "./colorAnimateText";
import "./colorAnimateText.scss";
const container = ref<HTMLDivElement>();
const props = withDefaults(
  defineProps<{
    /**
     *  前缀文字
     */
    prefixString: string;
    /**
     * 需要做动效的文字
     */
    texts: string[];
    /**
     * 在初始化组件时是否默认运行
     */
    defaultRun: boolean;
    /**
     * 是否无限循环运行
     */
    infinite: boolean;
    /**
     * 每一帧所用时间
     */
    frameTime: number;
    /**
     * 每个文字停留多久
     */
    textWaitStep: number;
    /**
     * 每段文字停留多久
     */
    paragraphWaitStep: number;
  }>(),
  {
    prefixString: "",
    texts: () => ["Big0range"],
    defaultRun: true,
    infinite: true,
    frameTime: 75,
    textWaitStep: 1,
    paragraphWaitStep: 2,
  }
);
let instance: ColorAnimateTextInstance;
onMounted(() => {
  instance = new ColorAnimateTextInstance(props, container.value!);
  instance.ngOnInit();
  instance.ngAfterViewInit();
});
onBeforeUnmount(() => {
  instance.ngOnDestroy();
});
</script>
