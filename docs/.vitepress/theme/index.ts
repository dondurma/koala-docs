import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import Layout from './Layout.vue'
import './styles/kraft.css'
import './styles/retro-font.css'
import './styles/surfaces.css'

/**
 * koala-docs 自定义主题入口。
 * 仅做两件事：包装默认 Layout（挂载外观切换），引入牛皮纸、复古字体与表层色补全样式。
 */
export default {
  extends: DefaultTheme,
  Layout,
} satisfies Theme
