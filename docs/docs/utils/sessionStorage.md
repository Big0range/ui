# sessionStorage 临时存储

## 示例

::: details 显示代码

```typescript
import { sessionStorage } from "@big0range/utils";
// 设置临时缓存
sessionStorage.set("a", { a: 12 });
// 获取临时缓存
sessionStorage.get("a");
// 移除临时缓存
sessionStorage.remove();
// 移除全部临时缓存
sessionStorage.clear();
```

:::

## set (设置临时缓存)

`sessionStorage.set(key,value)`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | ---- | ---- | ----- | ---- |
| key | key | `string` | — | — |
| value | value | `any` | — | — |

## get (获取临时缓存)

`sessionStorage.set(key) 返回值为存入的数据`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| key | key | `string` | — | — |

## remove (移除临时缓存)

`sessionStorage.remove(key)`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| key | key | `string` | — | — |

## clear (移除全部临时缓存)

`sessionStorage.clear()`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| 无 | — | — | — | — |

