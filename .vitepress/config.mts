import { defineConfig } from 'vitepress'

const svg = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd"><svg t="1712036389765" class="icon" viewBox="0 0 1124 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2051" xmlns:xlink="http://www.w3.org/1999/xlink" width="35.125" height="32"><path d="M848.648366 68.159582v167.186405h-187.086362v-167.186405h-203.01525v167.186405H275.440383v-167.186405H72.429595v887.680836h346.312784v-296.536122h278.644009v296.536122H1051.663617V68.159582z" fill="#FF7189" p-id="2052"></path><path d="M73.473673 335.755991h986.074074v75.851852h-986.074074z" fill="#6E6E96" p-id="2053"></path><path d="M73.473673 411.607843h981.612201v75.851852h-981.612201z" fill="#A9000E" opacity=".15" p-id="2054"></path><path d="M1085.127669 989.304471h-421.205333v-296.536122H452.210893v296.536122H38.965542V34.695529h269.938894v167.186406H425.082702V34.695529h269.943355v167.186406h120.158257V34.695529h269.943355v954.608942z m-354.277229-66.928105H1018.199564V101.623634h-136.087146v167.186405h-254.014466v-167.186405h-136.087146v167.186405H241.976331v-167.186405H105.893647v820.74827h279.38468v-296.536122h345.567651v296.540584z" fill="#6E6E96" p-id="2055"></path></svg>'

export default defineConfig({
  head: [["link", { rel: 'icon', href: '/logo.png' }]],
  title: "朴睦的文档",
  description: "朴睦的文档",
  // 最新更新时间
  lastUpdated: true,
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
      { 
        icon: {
          svg
        }, 
        link: 'https://github.com/dengwenj' 
      }
    ],

    footer: {
      copyright: 'Copyright © 朴睦'
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
    },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    lastUpdatedText: '最后更新时间',
  },
  markdown: {
    image: {
      // 图片懒加载
      lazyLoading: true
    }
  }
})
