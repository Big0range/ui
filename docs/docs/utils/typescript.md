# ts 工具类

## 获取数组元素的类型 普通函数的返回类型 Promise 的返回类型 ()=>Promise 的返回类型

```ts
import { Unpacked } from "@big0range/utils";
// string
type a = Unpacked<string[]>;
// 'aaa'
type b = Unpacked<() => "aaa">;
// number
type c = Unpacked<() => number>;
// string
type d = Unpacked<Promise<string>>;
// number
type e = Unpacked<() => Promise<number>>;
```

## 只用于获取()=>Promise 的返回类型

**一般用于处理封装的接口请求 api**

```ts
import { PromiseReturnType } from "@big0range/utils";
// number
type a = PromiseReturnType<() => Promise<number>>;
```
