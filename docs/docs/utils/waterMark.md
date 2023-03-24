# waterMark 水印

## 添加水印

![An image](../assets/images/waterMark.png)

::: details 显示代码

```typescript
import { waterMark } from "@big0range/utils";
waterMark.set("这是水印~~");
```

:::

## set

`waterMark.set(value,color)`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ----- | ------------ | ------ | ------ | --------------------- |
| value | 水印内容 | `string` | — | — |
| color | 水印文字颜色 | `string` | — | rgba(17, 17, 17, 0.2) |

## 清除水印

::: details 显示代码

```typescript
import { waterMark } from "@big0range/utils";
waterMark.clear();
```

:::

## clear

`waterMark.clear()`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| 无 | — | — | — | — |

