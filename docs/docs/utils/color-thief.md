# color-thief 图片提取主题色

## getColor 从 img DOM 元素中提取主题色

`getColor: (sourceImage: HTMLImageElement, quality?: number) => [number, number, number]`

::: details 显示代码

```ts
import { ColorThief } from "@big0range/utils";

const imgDom = document.getElementById("img");

const color = ColorThief.getColor(imgDom, 10);
```

:::

| 参数        | 说明                    | 类型             | 可选值 | 默认 |
| ----------- | ----------------------- | ---------------- | ------ | ---- |
| sourceImage | img 的 DOM 元素         | `HTMLImageElement` | —      | —    |
| quality     | 精准度,越低则准确度越高 | `number`           | —      | 10   |

## getColorFromUrl 从 url 中提取主题色

`getColorFromUrl: (imageUrl: string, quality?: number | undefined) => Promise<[number, number, number] | null>`

::: details 显示代码

```ts
import { ColorThief } from "@big0range/utils";

const imgUrl = "https://www.******";

const color = ColorThief.getColorFromUrl(imgUrl, 10);
```

:::

| 参数     | 说明                    | 类型   | 可选值 | 默认 |
| -------- | ----------------------- | ------ | ------ | ---- |
| imageUrl | 图片地址                | `string` | —      | —    |
| quality  | 精准度,越低则准确度越高 | `number` | —      | 10   |

## getImageData 网络图片转 base64

`getImageData: (imageUrl: string) => Promise<string>`

::: details 显示代码

```ts
import { ColorThief } from "@big0range/utils";

const imgUrl = "https://www.******";

const base64 = await ColorThief.getImageData(imgUrl);
```

:::

| 参数     | 说明     | 类型   | 可选值 | 默认 |
| -------- | -------- | ------ | ------ | ---- |
| imageUrl | 图片地址 | `string` | —      | —    |

## getPalette 取色板

`getPalette: (sourceImage: HTMLImageElement, colorCount?: number, quality?: number) => [number, number, number][]`

::: details 显示代码

```ts
import { ColorThief } from "@big0range/utils";

const imgDom = document.getElementById("img");

const colorPalette = ColorThief.getPalette(imgDom, 8, 10);
```

:::

| 参数        | 说明                    | 类型             | 可选值 | 默认 |
| ----------- | ----------------------- | ---------------- | ------ | ---- |
| sourceImage | img 的 DOM 元素         | `HTMLImageElement` | —      | —    |
| colorCount  | 需要提取的数量          | `number`           | —      | 8    |
| quality     | 精准度,越低则准确度越高 | `number`           | —      | 10   |

