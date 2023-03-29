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
        { text: 'CountTo 数字平滑过度', link: '/components/CountTo' },
        { text: 'Crop 图片裁剪组件', link: '/components/Crop' },
        { text: 'ColorAnimateText 字体动画', link: '/components/colorAnimateText' },
        { text: 'RotateMenu 旋转菜单', link: '/components/rotateMenu' },

        { text: 'Demo', link: '/components/Demo' },

      ]
    }
  ],
  '/utils/': [
    {
      text: 'utils',
      link: '/utils/',
      items: [
        // { text: '安装', link: '/utils/' },
        { text: '添加水印', link: '/utils/waterMark' },
        { text: '临时存储', link: '/utils/sessionStorage' },
        { text: '永久存储', link: '/utils/localStorage' },
        { text: '下载', link: '/utils/download' },
        { text: '提取图片颜色', link: '/utils/color-thief' },
        { text: '日期处理', link: '/utils/date' },
        { text: 'ts 工具', link: '/utils/typescript' },

        { text: '集成的工具', link: '/utils/integration' },
      ]
    }
  ]
}
