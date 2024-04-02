import { defineConfig } from 'vitepress'

export default defineConfig({
  head: [["link", { rel: 'icon', href: '/logo.png' }]],
  title: "朴睦的文档",
  description: "朴睦的文档",
  themeConfig: {
    outlineTitle: "目录",
    // 展示的标题层级
    outline: [1, 6],
    nav: [
      { 
        text: '前端',
        items: [
          {
            text: '开发规范',
            link: '/'
          },
          {
            text: 'UI 规范',
            link: '/src/api-examples'
          }
        ]
      },
      { text: '后端', link: '/src/markdown-examples' }
    ],

    sidebar: [
      {
        text: '文档目录',
        items: [
          { text: '前端', link: '/src/api-examples' },
          { text: '后端', link: '/src/markdown-examples' }
        ]
      },
      {
        // text: '文档目录2',
        items: [
          { text: '前端', link: '/src/api-examples' },
          { text: '后端', link: '/src/markdown-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/dengwenj' }
    ],

    footer: {
      message: 'Copy',
    },

    logo: '/logo.png',

    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关文档',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换',
              closeText: '关闭',
            }
          }
        }
      }
    }
  }
})
