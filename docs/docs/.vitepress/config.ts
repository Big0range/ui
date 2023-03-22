import { defineConfig, DefaultTheme } from 'vitepress'
import { nav } from './utils/nav'
import { sidebar } from './utils/sidebar'

export default defineConfig({
    title: 'big0range',
    // titleTemplate:'bui',
    description: '个人组件库',
    lang: 'cn-ZH',
    base: '/ui/',
    lastUpdated: true,
    themeConfig: {
        nav,
        sidebar,
        siteTitle: 'big0range-ui',
        socialLinks: [{ icon: 'github', link: 'https://github.com/Big0range/ui' },],
        lastUpdatedText: '最后更新时间',
        outlineTitle: 'CONTENTS',
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        editLink: {
            pattern: 'https://github.com/Big0range/ui/edit/main/docs/docs/:path',
            text: '在GitHub上编辑此页面'
        }
    },
    markdown: {
        // theme: 'material-palenight',
        lineNumbers: true
    },
})
