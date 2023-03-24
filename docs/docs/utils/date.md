# 日期处理

**一些 dayjs 无法实现的特殊需求，如有误请在 GitHub 中提交 [issues](https://github.com/Big0range/ui/issues)**

## 示例

::: details 显示代码

```ts
import { date } from "@big0range/utils";
// 当前日期的月份最后一天
const last = date.lastDayOfMonth(new Date("2022-01-22"));
// last = 2022-01-31

// 当前日期的月份第一天
const last = date.firstDayOfMonth(new Date("2022-01-22"));
// last = 2022-01-01
```

:::

## lastDayOfMonth 当前日期的月份最后一天

`function lastDayOfMonth(date: Date, formatValue?: string | undefined): string`

| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | ---- | ---- | ----- | ---- |
| date | Date 类型的日期 | `Date` | — | — |
| formatValue | 返回日期格式化方式 | `string` | — | 'YYYY-MM-DD' |

## lastDayOfMonth 当前日期的月份第一天

`function firstDayOfMonth(date: Date, formatValue?: string | undefined): string`

| 参数 | 说明 | 类型 | 可选值 | 默认 |
| --- | ---- | ---- | ----- | ---- |
| date | Date 类型的日期 | `Date` | — | — |
| formatValue | 返回日期格式化方式 | `string` | — | 'YYYY-MM-DD' |

