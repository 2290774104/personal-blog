import { defineConfig } from 'vuepress/config'
export default defineConfig({
  title: 'tang’s blog',
  description: '唐皓晨的个人博客',
  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }]
  ],
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: [
      { text: 'guide', link: '/guide/' },
    ],
    sidebar: 'auto',
    sidebarDepth: 2
  }
})