# waterMark

## 添加水印

![An image](../assets/images/waterMark.png)

::: details 显示代码

```html
<script lang="ts" setup>
  import { waterMark } from "@big0range/utils";
  waterMark.set("这是水印~~");
</script>
```

:::

## 清除水印

::: details 显示代码

```html
<script lang="ts" setup>
  import { waterMark } from "@big0range/utils";
  waterMark.clear();
</script>
```

:::

## set 方法
`waterMark.set(value,color)`
| 参数  | 说明         | 类型   | 可选值 | 默认                  |
| ----- | ------------ | ------ | ------ | --------------------- |
| value   | 水印内容     | string | —      | —                     |
| color | 水印文字颜色 | string | —      | rgba(17, 17, 17, 0.2) |

## clear 方法
`waterMark.set()`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| 无    | —    | —    | —      | —    |

