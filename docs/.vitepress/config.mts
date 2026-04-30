import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Koala Docs',
  description: 'Koala app documents',
  cleanUrls: true,
  themeConfig: {
    nav: [
      { text: '简体中文', link: '/zh/' },
      { text: '繁體中文', link: '/zh-HK/' },
      { text: 'English', link: '/en/' },
      { text: '日本語', link: '/ja/' },
      { text: '한국어', link: '/ko/' },
    ],
  },
})