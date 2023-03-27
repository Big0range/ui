# CountTo

## 示例

<ClientOnly>
 <CountTo :startVal="0"  :end-val="666666" :duration="5000" />
</ClientOnly>

::: details 显示代码

```html
<template>
  <CountTo :start-val="0" :end-val="666666" :duration="5000" />
</template>
<script lang="ts" setup>
  import { CountTo } from "@big0range/ui";
</script>
```

:::

## Attributes

| 参数      | 说明       | 类型   | 可选值 | 默认 |
| --------- | ---------- | ------ | ------ | ---- |
| startVal  | 起始数字   | number | —      | 0    |
| endVal    | 结束数字   | number | —      | 0    |
| duration  | 持续时长   | number | —      | 1000 |
| decimals  | 小数点位数 | number | —      | 2    |
| separator | 千位分隔符 | string | —      | ,    |
| prefix    | 前缀       | string | —      | —    |
| suffix    | 后缀       | string | —      | —    |
