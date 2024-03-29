import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({
    outputDir: './big0range-ui/types',
  })],
  build: {
  
    lib: {
      // 入口指向组件库入口模块
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'big0range-ui',
      // 构建生成的文件名，与package.json中配置一致
      fileName: 'big0range-ui',

    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['vue','element-plus','utils','@big0range/utils'],
      output: {
        dir: './big0range-ui/dist',
        globals: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          vue: 'Vue'
        }
      }
    }
  },
  resolve: {
    // Vite路径别名配置
    alias: {
      '@': path.resolve('./src')
    }
  }
})