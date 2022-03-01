import dayjs from 'dayjs';
export default {
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
  'demo-container': {
    component: 'demo-block',
    locales: [
      {
        lang: 'zh-CN',
        'demo-block': {
          'hide-text': '隐藏代码',
          'show-text': '显示代码',
          'copy-text': '复制代码',
          'copy-success': '复制成功'
        }
      },
      {
        lang: 'en-US',
        'demo-block': {
          'hide-text': 'Hide',
          'show-text': 'Expand',
          'copy-text': 'Copy',
          'copy-success': 'Successful'
        }
      }
    ]
  },
  // "上次更新"的时间格式
  '@vuepress/last-updated': {
    transformer: (timestamp, lang) => {
      return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss');
    }
  }
};
