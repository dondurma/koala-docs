import { defineConfig } from 'vitepress'
import { HEAD_SCRIPT } from './theme/appearance'

export default defineConfig({
  title: 'Koala Docs',
  description: 'Koala app documents',
  cleanUrls: true,
  // 关闭 VitePress 内置两态外观：站点自管「浅色 / 深色 / 牛皮纸」三态，
  // 内置开关不再渲染，.dark 类改由 theme/appearance.ts 的首屏脚本与运行时管理。
  appearance: false,
  head: [
    ['link', { rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    // 首屏防闪：样式生效前同步落类名（唯一来源见 theme/appearance.ts）
    ['script', {}, HEAD_SCRIPT],
  ],
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
        '<a href="https://beian.miit.gov.cn/" target="_blank" rel="noreferrer" style="color: var(--vp-c-brand-1); text-decoration: none; font-size: 12px;">浙ICP备2026031826号-1A</a> · <a href="/fonts/licenses/FONTS.txt" target="_blank" rel="noreferrer" style="color: var(--vp-c-text-3); text-decoration: none; font-size: 12px;">Font Licenses</a>',
    },
  },
})
