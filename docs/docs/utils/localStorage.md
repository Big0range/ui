# localStorage

## 示例

::: details 显示代码

```html
<script lang="ts" setup>
  import { localStorage } from "@big0range/utils";
  // 设置永久缓存
  localStorage.set("a", { a: 12 });
  // 获取永久缓存
  localStorage.get("a");
  // 移除永久缓存
  localStorage.remove();
  // 移除全部永久缓存
  localStorage.clear();
</script>
```

:::

## set 方法(设置永久缓存)

`localStorage.set(key,value)`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | ---- | ---- | ----- | ---- |
| key | key | string | — | — |
| value | value | any | — | — |

## get 方法(获取永久缓存)

`localStorage.set(key) 返回值为存入的数据`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| key | key | string | — | — |

## remove 方法(移除永久缓存)

`localStorage.remove(key)`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| key | key | string | — | — |

## clear 方法(移除全部永久缓存)

`localStorage.clear()`
| 参数 | 说明 | 类型 | 可选值 | 默认 |
| ---- | ---- | ---- | ------ | ---- |
| 无 | — | — | — | — |

