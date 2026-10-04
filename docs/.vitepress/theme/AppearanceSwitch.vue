<script setup lang="ts">
import { onMounted, ref } from 'vue'
import {
  applyAppearance,
  resolveFromBrowser,
  setUserAppearance,
  setUserFont,
  type Appearance,
  type FontMode,
} from './appearance'

/**
 * 主题三态 + 复古字体开关。
 *
 * - 浏览器访客与**旧版 App**（无 theme 参数）可见；新版 App（带 theme 参数）不渲染（D12）；
 * - 浏览器 API 只在 onMounted 后访问，保证 SSR 构建期安全（§3.9）；
 * - variant='screen' 用于移动端抽屉，需额外的上下留白避免与分割线贴合。
 */
const props = withDefaults(defineProps<{ variant?: 'bar' | 'screen' }>(), {
  variant: 'bar',
})

const visible = ref(false)
const appearance = ref<Appearance>('light')
const font = ref<FontMode>('normal')

type Labels = { light: string; dark: string; kraft: string; retro: string }
const LABELS: Record<string, Labels> = {
  zh: { light: '浅色', dark: '深色', kraft: '牛皮纸', retro: '复古字体' },
  'zh-HK': { light: '淺色', dark: '深色', kraft: '牛皮紙', retro: '復古字體' },
  en: { light: 'Light', dark: 'Dark', kraft: 'Kraft Paper', retro: 'Retro Font' },
  ja: { light: 'ライト', dark: 'ダーク', kraft: 'クラフト紙', retro: 'レトロフォント' },
  ko: { light: '라이트', dark: '다크', kraft: '크라프트지', retro: '레트로 폰트' },
}
const labels = ref<Labels>(LABELS.en)

/** 站点无 VitePress locales，语言按路径解析，兜底 en */
function pickLang(): string {
  const m = location.pathname.match(/\/v1\/(zh-HK|zh|en|ja|ko)\//)
  return m ? m[1] : 'en'
}

onMounted(() => {
  labels.value = LABELS[pickLang()] ?? LABELS.en
  const resolved = resolveFromBrowser()
  // hydration 后再断言一次，避免首屏脚本与运行时状态漂移
  applyAppearance(resolved)
  appearance.value = resolved.appearance
  font.value = resolved.font
  visible.value = !resolved.appContext
})

function chooseTheme(a: Appearance) {
  setUserAppearance(a)
  appearance.value = a
}

function toggleFont() {
  const next: FontMode = font.value === 'retro' ? 'normal' : 'retro'
  setUserFont(next)
  font.value = next
}
</script>

<template>
  <div
    v-if="visible"
    class="koala-appearance-switch"
    :class="{ 'koala-appearance-switch--screen': props.variant === 'screen' }"
  >
    <button
      v-for="key in (['light', 'dark', 'kraft'] as const)"
      :key="key"
      class="koala-appearance-switch__btn"
      :class="{ 'is-active': appearance === key }"
      type="button"
      @click="chooseTheme(key)"
    >
      {{ labels[key] }}
    </button>
    <button
      class="koala-appearance-switch__btn"
      :class="{ 'is-active': font === 'retro' }"
      type="button"
      @click="toggleFont"
    >
      {{ labels.retro }}
    </button>
  </div>
</template>

<style scoped>
.koala-appearance-switch {
  display: flex;
  align-items: center;
  gap: 4px;
  margin-left: 8px;
}

/* 移动端抽屉：与上方菜单分割线拉开距离，并允许窄屏换行 */
.koala-appearance-switch--screen {
  margin: 0;
  padding: 20px 0 8px;
  flex-wrap: wrap;
}

.koala-appearance-switch__btn {
  padding: 2px 8px;
  font-size: 12px;
  line-height: 1.6;
  color: var(--vp-c-text-2);
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 12px;
  cursor: pointer;
  transition: color 0.2s, border-color 0.2s, background-color 0.2s;
}

.koala-appearance-switch__btn:hover {
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-brand-1);
}

.koala-appearance-switch__btn.is-active {
  color: var(--vp-c-brand-1);
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-brand-soft);
}
</style>
