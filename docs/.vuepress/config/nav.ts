import { NavItem } from '@vuepress/types/src/theme-default';
const nav: NavItem[] = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    items: [
      { text: '学习笔记', link: '/pages/b42ac3/' },
      { text: 'css常用片段', link: '/pages/d4868f/' }
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
];

export default nav
