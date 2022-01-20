import { defineConfig4CustomTheme } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing',
  title: "tang's blog",
  description: '唐皓晨的个人博客',
  head: [['link', { rel: 'icon', href: '/favicon.jpg' }]],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: '学习笔记',
            items: [
              { text: 'VuePress', link: '/pages/b42ac3/' },
              { text: 'vuepress-theme-vdoing', link: '/pages/28a711/' }
            ]
          }
        ]
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' }
        ]
      }
    ],
    sidebar: 'structuring',
    sidebarDepth: 2,
    // repo: 'tang-haochen/personal-blog', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10,
    lastUpdated: '上次更新',
    // docsDir: 'docs',
    // editLinks: true,
    // editLinkText: '编辑',
    author: {
      name: 'tanghc'
    },
    blogger: {
      avatar: '',
      name: 'tanghc',
      slogan: '前端学习者'
    },
    // 页脚信息
    footer: {
      createYear: 2022, // 博客创建年份
      copyrightInfo: ''
    }
  },
  // 插件
  plugins: {
    // 一键复制代码
    'one-click-copy': {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ], // String or Array
      copyMessage: '复制成功', // default is 'Copied successfully!'
      toolTipMessage: '复制代码', // default is ''Copy to clipboard'
      duration: 1000 // prompt message display time
    }
  }
});
