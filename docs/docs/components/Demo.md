# CountTo

## 基础用法

<ClientOnly>
 <Demo :a="'aaa'" :b="'bbbb'" />
</ClientOnly>

::: details 显示代码

```html
<template>
  <Demo  :a="'aaa'" :b="'bbbb'"/>
</template>
<script lang="ts" setup>
  import { Demo } from "ui";
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
