import { defineConfig, DefaultTheme } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

export default defineConfig({
    title: 'bui',
    description: '个人组件库',
    lang: 'cn-ZH',
    base: '/ui/',
    lastUpdated: true,
    themeConfig: {
        nav,
        sidebar
    }
})
