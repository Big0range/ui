

export const nav = [
  {
    text: '指南',
    activeMatch: '^/docs/',
    link: '/docs/installation'
  },
  {
    text: '基础组件',
    activeMatch: '^/components/',
    link: '/components/CountTo'
  },
  {
    text: '工具类',
    activeMatch: '^/utils/',
    link: '/utils/'
  },
  {
    text: '相关链接',
    items: [
      {text: 'vite中文文档',link: 'https://cn.vitejs.dev/guide/'},
      {text: 'vite官方文档',link: 'https://vitejs.dev/guide/'},
      {text: 'vue3官方文档',link: 'https://cn.vuejs.org/'},
      {text: 'typescript官方文档',link: 'https://www.typescriptlang.org/zh/docs/'},
    ],
  }

]