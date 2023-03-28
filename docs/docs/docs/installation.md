# 安装

## 环境支持

不支持 IE11 <br>
需安装element-plus<br>
支持typescript


## 使用包管理器

建议您使用包管理器 (NPM, Yarn, pnpm) 安装 @big0range/ui

```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install element-plus @big0range/ui

# Yarn
$ yarn add element-plus @big0range/ui

# pnpm
$ pnpm install element-plus @big0range/ui
```
在main.ts中引入样式文件
```ts
import { createApp } from 'vue'
// 导入样式文件
import "@big0range/ui/dist/style.css";
// element 样式文件 根据个人情况进行修改
import "element-plus/dist/index.css";


import App from './App.vue'
// import "element-plus/dist/index.css";
createApp(App).mount('#app')
```