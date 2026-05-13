import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Koala Docs',
  description: 'Koala app documents',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '简体中文', link: '/v1/zh/' },
      { text: '繁體中文', link: '/v1/zh-HK/' },
      { text: 'English', link: '/v1/en/' },
      { text: '日本語', link: '/v1/ja/' },
      { text: '한국어', link: '/v1/ko/' },
    ],
    footer: {
      message:
        '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" style="color: var(--vp-c-brand-1); text-decoration: none;">备案号：浙ICP备2026031826号</a>',
    },
  },
})
