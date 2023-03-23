
# download 下载


## 下载文件
::: details 显示代码

```typescript
import { downloadFile } from "@big0range/utils";
// 这是一个接口示例(注意 返回类型应该设置为Blob类型)
const data: Blob = await getFileApi("https://****");
// 开始下载 
// 这是一个Promise类型 如需等待执行完毕可使用await
await downloadFile(data, "demo.xls");
```

:::

## 下载图片
::: details 显示代码

```typescript
import { downloadImg } from "@big0range/utils";
// 这是一个接口示例(注意 返回类型应该设置为Blob类型)
const imgUrl = 'http://www.******'
await downloadImg(imgUrl, "demo.png");
```

:::