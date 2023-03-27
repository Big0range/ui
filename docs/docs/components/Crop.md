# CountTo 图片裁剪组件

## 基础用法

<BiCrop :preview-type="['default', 'round', 'circle']"  />

::: details 显示代码

```html
<template>
  <BiCrop :preview-type="['default', 'round', 'circle']" @on-ready="onReady" />
</template>
<script lang="ts" setup>
  import { BiCrop } from "@big0range/ui";
  const onReady = (e: { base64: string; blob: Blob }) => {
    // 上传完成之后数据会在这里返回
    console.log(e);
  };
</script>
```

:::

## 如何上传

::: details 显示代码

```html
<template>
  <BiCrop
    :preview-type="['default', 'round', 'circle']"
    beforeReady
    @on-ready="onReady"
  />
</template>
<script lang="ts" setup>
  import { BiCrop } from "@big0range/ui";
  const onReady = (e: { base64: string; blob: Blob }) => {
    // 上传完成之后数据会在这里返回
    console.log(e);
  };
  // 你需要先定义一个Promise类型的上传方法
  const beforeReady = async (bolb: Bolb) => {
    // 之后就可以愉快的将blob数据发送至后端啦，可根据自己情况进行发送，我这里用的是自己封装的request
    const formData = new FormData();
    formData.append("file", blob);
    // 仅为示例
    await uoloadFile(formData);
  };
</script>
```

:::

## 获取所有数据(已上传以及正在上传的)

::: details 显示代码

```html
<template>
  <BiCrop ref="BiCropRef" />
</template>
<script lang="ts" setup>
   import { BiCrop,BiCropApi } from "@big0range/ui";
   const BiCropRef = ref<BiCropApi>()
  const getImageData = ()=>{
  //  {base64: string, bolb:Bolb}[]
   const imageData = BiCropRef.value!.getImageData()
  }
</script>
```

:::

## 如何校验所有数据是否已上传完毕

::: details 显示代码

```html
<template>
  <BiCrop ref="BiCropRef" />
</template>
<script lang="ts" setup>
   import { BiCrop,BiCropApi } from "@big0range/ui";
   const BiCropRef = ref<BiCropApi>()
  const verify = ()=>{
    // 全部已上传完成则返回true, 如果还有正在上传中的或者没有选择任意一张图则返回false
   const verifyResult:boolean = BiCropRef.value!.verify()
  }
</script>
```

:::

## Attributes

| 参数            | 说明                                                                                                                                                                     | 类型                  | 可选值                                                             | 默认                             |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------- | ------------------------------------------------------------------ | -------------------------------- |
| previewType     | 需要展示的预览类型，可选值为 default、round、circle                                                                                                                      | `string`              | `default` , `round` , `circle`                                     | `['default', 'round', 'circle']` |
| leftWidth       | 左侧图片宽度                                                                                                                                                             | number                | —                                                                  | 500                              |
| leftHeight      | 左侧图片高度                                                                                                                                                             | number                | —                                                                  | 559                              |
| rightPreviewWH  | 右侧预览图片宽高                                                                                                                                                         | number                | —                                                                  | 150                              |
| previewWidth    | 预览小图宽度                                                                                                                                                             | number                | —                                                                  | 150                              |
| previewHeight   | 预览小图高度                                                                                                                                                             | number                | —                                                                  | 150                              |
| title           | 弹窗标题                                                                                                                                                                 | string                | —                                                                  | 裁剪图片                         |
| getDataIoptions | 详情如下图写                                                                                                                                   | —                     | —                                                                  | —                                |
| type            | 导出图片类型                                                                                                                                                             | string                | `image/jpeg`、`image/webp`、`image/png`、`image/bmp`、`image/tiff` | `image/png`                      |
| quality         | 导出图片质量，值在 0 与 1 之间，当图片格式为 image/jpeg 或者 image/webp 时用来指定图片展示质量。如果这个参数的值不在指定类型与范围之内，则使用默认值，其余参数将被忽略。 | number                | —                                                                  | 1                                |
| max             | 最大选择数量                                                                                                                                                             | number                | —                                                                  | 2                                |
| fit             | 确定图片如何适应容器框，同原生 [object-fit](https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit)                                                                 | string                | `fill`, `contain` , `cover` , `none` , `scale-down`                | `fill`                           |
| uploadText      | 上传中文案                                                                                                                                                               | string                | —                                                                  | 上传中                           |
| beforeReady     | 上传前的钩子，参数为 Promise 函数, 自定义上传方法,如需展示上传中,这很必要                                                                                                | `()=>Promise<unkonw>` | —                                                                  | —                                |

![示例](/getDataIoptions.png)