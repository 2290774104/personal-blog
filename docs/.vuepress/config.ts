import { defineConfig4CustomTheme } from 'vuepress/config';
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types';
import dayjs from 'dayjs'
export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing',
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
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端',
        items: [
          {
            text: '学习笔记',
            items: [
              { text: 'VuePress-v1.x', link: '/pages/b42ac3/' },
              { text: 'JavaScript异步编程', link: '/pages/a6e94e/' }
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
    // 代码块一键复制
    'one-click-copy': {
      copySelector: [
        'div[class*="language-"] pre',
        'div[class*="aside-code"] aside'
      ], // 需要显示复制按钮的元素
      copyMessage: '复制成功', // 复制成功提示文字
      toolTipMessage: '复制代码', // 复制按钮title
      duration: 1000 // 复制成功提示文字显示时间
    },
    'demo-block': {
      settings: {
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false // 是否展示为横向样式
      }
    },
    // "上次更新"的时间格式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
      }
    }
  }
});
