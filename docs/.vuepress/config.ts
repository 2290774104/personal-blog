import { defineConfig4CustomTheme } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
import nav from './config/nav'
import plugins from './config/plugins'
export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: "tang's blog",
      description: '唐皓晨的个人博客'
    }
  },
  title: "tang's blog",
  description: '唐皓晨的个人博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav,
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
  plugins
});
