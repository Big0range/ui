import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue"
import dts from 'vite-plugin-dts'
import { resolve } from 'path'
export default defineConfig(
    {
        build: {
            lib: {
                entry: './src/index.ts',
                name: 'utils',
                // 构建生成的文件名，与package.json中配置一致
                fileName: 'utils',
            },
            rollupOptions: {
                output: {
                    dir: './big0range-utils/dist',
                }
            },
        },
        plugins: [

            dts({
                outputDir: resolve(__dirname, './big0range-utils/types'),
                //指定使用的tsconfig.json为我们整个项目根目录下掉,如果不配置,你也可以在components下新建tsconfig.json
                tsConfigFilePath: '../../tsconfig.json'
            }),
        ]

    }
)