# ColorAnimateText 字体动画

## 示例

<ClientOnly>
 <BiColorAnimateText :texts="['这是一段示例文字','hello word']" />
</ClientOnly>

::: details 显示代码

```html
<template>
  <BiColorAnimateText :texts="['这是一段示例文字','hello word']" />
</template>
<script lang="ts" setup>
  import { BiColorAnimateText } from "@big0range/ui";
</script>
```
::: 
## Attributes

| 参数              | 说明                       | 类型       | 可选值 | 默认            |
| ----------------- | -------------------------- | ---------- | ------ | --------------- |
| prefixString      | 前缀文字                   | `string`   | —      | `""`            |
| texts             | 需要做动效的文字           | `string[]` | —      | `["Big0range"]` |
| defaultRun        | 在初始化组件时是否默认运行 | `boolean`  | —      | `true`          |
| infinite          | 是否无限循环运行           | `boolean`  | —      | `true`          |
| frameTime         | 每一帧所用时间             | `number`   | —      | 75              |
| textWaitStep      | 每个文字停留多久           | `number`   | —      | 1               |
| paragraphWaitStep | 每段文字停留多久           | `number`   | —      | 2               |

