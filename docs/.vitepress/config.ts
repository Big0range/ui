import { defineConfig, DefaultTheme } from 'vitepress'


const sidebar: DefaultTheme.Sidebar = {
    '/guide': [
        {
            text: '指南',
            items: [
                { text: '组件库介绍', link: '/guide/' },
                { text: '快速开始', link: '/guide/quickstart' },
            ]
        }
    ],
    '/components': [
        {
            text: '通用基础组件',
            items: [
                { text: '基础组件 1', link: '/components/basic-component1' },
                { text: '基础组件 2', link: '/components/basic-component2' }
            ]
        },
        {
            text: '通用业务组件',
            items: [
                { text: '通用组件 1', link: '/components/common-component1' },
                { text: '通用组件 2', link: '/components/common-component2' }
            ]
        },
        {
            text: '高级业务组件',
            items: [
                { text: '高级组件 1', link: '/components/pro-component1' },
                { text: '高级组件 2', link: '/components/pro-component2' }
            ]
        }
    ]
}
const nav: DefaultTheme.NavItem[] = [
    { text: '指南', link: '/guide/' },
    { text: '组件', link: '/components/basic-component1' },
    // 顶部导航下拉菜单按如下方式：
    /*
    {
      text: 'Dropdown Menu',
      items: [
        { text: 'Item A', link: '/item-1' },
        { text: 'Item B', link: '/item-2' },
        { text: 'Item C', link: '/item-3' }
      ]
    }
     */
]
export default defineConfig({
    title: 'GGB',
    description: '基于 vite vue3 element-plus 组件库',
    lang: 'cn-ZH',
    base: '/ui/',
    lastUpdated: true,
    themeConfig: {
        nav,
        sidebar: {
            '/guide/': [
                {
                    text: 'Guide',
                    items: [
                        // This shows `/guide/index.md` page.
                        { text: 'Index', link: '/guide/' }, // /guide/index.md
                        { text: 'One', link: '/guide/one' }, // /guide/one.md
                        { text: 'Two', link: '/guide/two' } // /guide/two.md
                    ]
                }
            ],
            '/config/': [
                {
                    text: 'Config',
                    items: [
                        // This shows `/config/index.md` page.
                        { text: 'Index', link: '/config/' }, // /config/index.md
                        { text: 'Three', link: '/config/three' }, // /config/three.md
                        { text: 'Four', link: '/config/four' } // /config/four.md
                    ]
                }
            ]
        }
    }
})
