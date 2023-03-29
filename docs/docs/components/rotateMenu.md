## RotateMenu 旋转菜单

## 示例

<BiRotateMenu  />

::: details 显示代码

```html
<template>
  <BiRotateMenu />
</template>
<script lang="ts" setup>
  import { BiRotateMenu } from "@big0range/ui";
</script>
```

:::

## Attributes

| 参数      | 说明           | 类型                              | 可选值 | 默认                                     |
| --------- | -------------- | --------------------------------- | ------ | ---------------------------------------- |
| imgWidth  | 菜单 icon 宽度 | number                            |   —      | 20                                       |
| imgHeight | 菜单 icon 高度 | number                            |    —      | 20                                       |
| items     | 需要展示的菜单 | `{ url: string; alt?: string }[]` |    —      | `new Array(6).fill({url:'xxxx',alt:''})` |



##  Events

| 事件名 | 说明                 | 类型                      |
| ------ | -------------------- | ------------------------- |
| change | 当菜单被点击时的事件 | `(index: number) => void` |

