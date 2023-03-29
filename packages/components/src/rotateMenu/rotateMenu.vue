<template>
  <div class="bi-menu" :class="{ active }" :style="{ '--sum': items.length }">
    <div class="toggle" @click="active = !active">+</div>
    <li v-for="(image, index) in items" :style="{ '--i': index }">
      <a @click="click(index)">
        <img
          :style="{ width: `${imgWidth}px`, height: `${imgHeight}px` }"
          :title="image.alt"
          :src="image.url"
          :alt="image.alt"
          srcset=""
        />
      </a>
    </li>
  </div>
</template>

<script lang="ts" setup>
import { ref, withDefaults } from "vue";

import "./rotateMenu.scss";
const props = withDefaults(
  defineProps<{
    imgWidth: number;
    imgHeight: number;
    items: { url: string; alt?: string }[];
  }>(),
  {
    imgWidth: 20,
    imgHeight: 20,
    items: () =>
      new Array(6).fill({
        url:
          "https://baijiahao.baidu.com/bjh/picproxy?param=DWnUSb9ggzjcg1O9dn%2BveurOMfokx%2BNdv%2BFpiKFJ2f%2F2y0QyEKZUroZnhy%2B4FFukFmVXHwch2mdBxd9%2F9zCHjTnaqLiT%2Bm59tzg9SMwLLUzloFXJW4PwukoDW7IU8RlJ",
        alt: "",
      }),
  }
);

const active = ref(false);
const loading = ref(false);
const click = (index: number) => {
  if (loading.value) return;
  loading.value = true;
  active.value = false;
  emits("change", index);
  setTimeout(() => {
    loading.value = false;
  }, 1000);
};
const emits = defineEmits<{
  (event: "change", index: number): void;
}>();
</script>
