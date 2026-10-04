/**
 * koala-docs 外观（主题三态 + 字体两态）解析与应用。
 *
 * 对应方案：《App主题与复古字体传入在线文档实现方案》§3.3 / §3.4 / §3.9。
 *
 * 硬约束：
 * - 解析逻辑为**不依赖 DOM 的纯函数**（`resolveAppearance`），SSR 构建期可安全引用；
 * - DOM 应用与存储读写只在浏览器侧执行，且全部包 try/catch；
 * - 首屏防闪脚本与运行时判定共用本文件（HEAD_SCRIPT 为唯一来源），禁止双写。
 */

export type Appearance = 'light' | 'dark' | 'kraft'
export type FontMode = 'normal' | 'retro'

/** 浏览器访客手动选择的主题（长期） */
export const APPEARANCE_KEY = 'koala-docs-appearance'
/** 浏览器访客手动选择的字体（长期） */
export const FONT_KEY = 'koala-docs-font'
/** 本次会话由 URL 参数钉住的主题 */
export const SESSION_APPEARANCE_KEY = 'koala-docs-session-appearance'
/** 本次会话由 URL 参数钉住的字体 */
export const SESSION_FONT_KEY = 'koala-docs-session-font'
/** VitePress 内置外观 key，仅用于迁移老访客偏好（V2） */
export const LEGACY_APPEARANCE_KEY = 'vitepress-theme-appearance'
/**
 * 自管的语言标记（D13）。
 *
 * 不复用 `<html lang>`：VitePress 核心在 hydration 时会执行
 * `document.documentElement.lang = lang.value`（本站未用 locales，恒为 en-US），
 * 会覆写我们写入的值，导致按语言选择字体的 CSS 全部失配。
 */
export const LANG_ATTR = 'data-koala-lang'

/** 纯解析入参（已从各存储读出的快照），不依赖任何浏览器 API */
export interface AppearanceSnapshot {
  /** URL 是否带合法 theme 参数（= 新版 App 上下文） */
  appContext: boolean
  sessionAppearance?: string | null
  sessionFont?: string | null
  localAppearance?: string | null
  localFont?: string | null
  legacyAppearance?: string | null
  prefersDark: boolean
}

export interface ResolvedAppearance {
  appearance: Appearance
  font: FontMode
  appContext: boolean
}

/** theme 参数的四个合法取值（含 system） */
export function isValidTheme(v?: string | null): boolean {
  return v === 'system' || v === 'light' || v === 'dark' || v === 'kraft'
}

export function isValidFont(v?: string | null): boolean {
  return v === 'retro' || v === 'normal'
}

function systemAppearance(prefersDark: boolean): Appearance {
  return prefersDark ? 'dark' : 'light'
}

function themeOf(v: string | null | undefined, system: Appearance): Appearance | null {
  if (v === 'dark') return 'dark'
  if (v === 'light') return 'light'
  if (v === 'kraft') return 'kraft'
  // system（URL 参数）与 auto（VitePress 旧值）都解析为系统明暗
  if (v === 'system' || v === 'auto') return system
  return null
}

/**
 * 纯函数：按 §3.3 优先级解析最终外观。
 * 优先级：会话（URL 参数钉住）> 本地手动选择 > VitePress 旧 key（迁移）> 系统明暗。
 */
export function resolveAppearance(s: AppearanceSnapshot): ResolvedAppearance {
  const system = systemAppearance(s.prefersDark)
  const session = themeOf(s.sessionAppearance, system)
  const local = themeOf(s.localAppearance, system)
  const legacy = themeOf(s.legacyAppearance, system)
  const appearance = session ?? local ?? legacy ?? system
  const font =
    (s.sessionFont === 'retro' || s.sessionFont === 'normal' ? s.sessionFont : null) ??
    (s.localFont === 'retro' || s.localFont === 'normal' ? s.localFont : null) ??
    'normal'
  return { appearance, font, appContext: s.appContext }
}

/**
 * 浏览器侧：按路径解析语言 key（zh / zh-HK / en / ja / ko），无语言段（根 hub 页）兜底 zh。
 * 结果写入 [LANG_ATTR]，与 VitePress 的 `<html lang>` 互不干扰。
 */
export function detectLang(): string {
  try {
    const m = location.pathname.match(/\/v1\/(zh-HK|zh|en|ja|ko)\//)
    return m ? m[1] : 'zh'
  } catch {
    return 'zh'
  }
}

/** 浏览器侧：给 <html> 落类名（kraft/light/dark + retro-font）与语言标记 */
export function applyAppearance(r: ResolvedAppearance): void {
  if (typeof document === 'undefined') return
  const el = document.documentElement
  el.classList.toggle('dark', r.appearance === 'dark')
  el.classList.toggle('kraft', r.appearance === 'kraft')
  el.classList.toggle('retro-font', r.font === 'retro')
  el.setAttribute(LANG_ATTR, detectLang())
}

function readSession(k: string): string | null {
  try {
    return sessionStorage.getItem(k)
  } catch {
    return null
  }
}

function readLocal(k: string): string | null {
  try {
    return localStorage.getItem(k)
  } catch {
    return null
  }
}

function writeLocal(k: string, v: string): void {
  try {
    localStorage.setItem(k, v)
  } catch {
    /* 存储不可用时静默降级 */
  }
}

function clearSession(k: string): void {
  try {
    sessionStorage.removeItem(k)
  } catch {
    /* 存储不可用时静默降级 */
  }
}

function prefersDark(): boolean {
  try {
    return typeof matchMedia !== 'undefined' && matchMedia('(prefers-color-scheme: dark)').matches
  } catch {
    return false
  }
}

/** 浏览器侧：URL 是否处于新版 App 上下文（带合法 theme 参数） */
export function isAppContext(): boolean {
  try {
    return isValidTheme(new URLSearchParams(location.search).get('theme'))
  } catch {
    return false
  }
}

/** 浏览器侧：从存储快照解析当前外观（不读写 URL，不产生副作用） */
export function resolveFromBrowser(): ResolvedAppearance {
  return resolveAppearance({
    appContext: isAppContext(),
    sessionAppearance: readSession(SESSION_APPEARANCE_KEY),
    sessionFont: readSession(SESSION_FONT_KEY),
    localAppearance: readLocal(APPEARANCE_KEY),
    localFont: readLocal(FONT_KEY),
    legacyAppearance: readLocal(LEGACY_APPEARANCE_KEY),
    prefersDark: prefersDark(),
  })
}

/** 浏览器侧：浏览器访客手动切主题（写长期偏好并覆盖本次会话） */
export function setUserAppearance(a: Appearance): void {
  writeLocal(APPEARANCE_KEY, a)
  clearSession(SESSION_APPEARANCE_KEY)
  applyAppearance(resolveFromBrowser())
}

/** 浏览器侧：浏览器访客手动切字体（写长期偏好并覆盖本次会话） */
export function setUserFont(f: FontMode): void {
  writeLocal(FONT_KEY, f)
  clearSession(SESSION_FONT_KEY)
  applyAppearance(resolveFromBrowser())
}

/**
 * 首屏防闪内联脚本（唯一来源）。
 *
 * - 由 config.mts 的 `head` 注入，在样式生效前同步执行；
 * - 逻辑与 `resolveAppearance` 保持一致：URL 参数 > 会话 > 本地 > 旧 key > 系统；
 * - 所有存储读写包 try/catch；无语言段时 lang 兜底 zh。
 */
export const HEAD_SCRIPT = `(function(){
  function s(k){ try { return sessionStorage.getItem(k); } catch(e){ return null; } }
  function l(k){ try { return localStorage.getItem(k); } catch(e){ return null; } }
  function sw(fn){ try { fn(); } catch(e){} }
  var q=new URLSearchParams(location.search);
  var t=q.get('theme'), f=q.get('font');
  var TK='${SESSION_APPEARANCE_KEY}', FK='${SESSION_FONT_KEY}';
  var TK_L='${APPEARANCE_KEY}', FK_L='${FONT_KEY}';
  var okT=/^(system|light|dark|kraft)$/, okF=/^(retro|normal)$/;
  if(t && okT.test(t)) sw(function(){ sessionStorage.setItem(TK,t); });
  if(f && okF.test(f)) sw(function(){ sessionStorage.setItem(FK,f); });
  var at=s(TK)||'';
  if(!at){ var lt=l(TK_L); if(lt==='dark'||lt==='light'||lt==='kraft')at=lt; }
  if(!at){ var lg=l('${LEGACY_APPEARANCE_KEY}'); if(lg==='dark')at='dark'; else if(lg==='light')at='light'; }
  if(!at || at==='system'){ at=matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light'; }
  var af=s(FK)||l(FK_L)||'normal';
  var e=document.documentElement;
  if(at==='dark')e.classList.add('dark');
  if(at==='kraft')e.classList.add('kraft');
  if(af==='retro')e.classList.add('retro-font');
  var m=location.pathname.match(/\\/v1\\/(zh-HK|zh|en|ja|ko)\\//);
  e.setAttribute('${LANG_ATTR}', m?m[1]:'zh');
})()`
