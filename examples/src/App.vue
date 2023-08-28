<template>
  <div>
    <div @click="getThis">getThis</div>
    <div @click="prev">上一步</div>
    <div @click="next">下一步</div>
    <div><input @change="setcolor" value="#ffffff" type="color" /></div>
    <div><input type="range" value="2" @change="setLineWidth" /></div>
    <div @click="download">导出</div>
    <div class="canvas-sign"></div>
    <img id="img" src="/aaa.jpg" alt="" srcset="" style="display: none" />
  </div>
</template>
<script setup lang="ts">
import { onMounted } from "vue";
import { CanvasSign } from "utils";
let canvasSign: CanvasSign;
const download = () => {
  canvasSign.download("test.png", "image/jpeg");
};
onMounted(() => {
  canvasSign = new CanvasSign(document.querySelector(".canvas-sign")!, {
    width: 500,
    height: 500,
    bgColor: "#000",
    lineWidth: 5,
    bgImage: "/aaa.jpg",
  });
});
const setLineWidth = (e: any) => {
  console.log(e.target.value);
  canvasSign.setLineWidth(e.target.value);
};
const setcolor = (e: any) => {
  console.log(e.target.value);
  canvasSign.setLineColor(e.target.value);
};

const getThis = () => {
  console.log(canvasSign.getThis());
};
const prev = () => {
  canvasSign.prev();
};
const next = () => {
  canvasSign.next();
};
</script>
