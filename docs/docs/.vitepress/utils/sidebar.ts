export const sidebar = {
  '/docs/': [
    {
      text: '开发指南',
      items: [
        { text: '指南', link: '/docs/installation' },
        { text: '快速上手', link: '/docs/quickstart' }
      ]
    }
  ],
  '/components/': [
    {
      text: '组件',
      items: [
        { text: 'CountTo', link: '/components/CountTo' },
        { text: 'Demo', link: '/components/Demo' },
      ]
    }
  ],
  '/utils/': [
    {
      text: '工具类',
      items: [
        { text: '安装', link: '/utils/' },
        { text: '添加水印', link: '/utils/waterMark' },
        { text: '临时存储', link: '/utils/sessionStorage' },
        { text: '永久存储', link: '/utils/localStorage' },
        { text: '下载', link: '/utils/download' },
        { text: '提取图片颜色', link: '/utils/color-thief' },
        { text: 'dayjs', link: '/utils/dayjs' },
      ]
    }
  ]
}
