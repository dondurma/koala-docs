# 考拉记账 · 在线文档

<div :class="$style.grid">
  <a :class="$style.card" href="/v1/zh/">
    <div :class="$style.title">简体中文</div>
    <div :class="$style.desc">使用指南、常见问题与隐私政策</div>
  </a>
  <a :class="$style.card" href="/v1/zh-HK/">
    <div :class="$style.title">繁體中文</div>
    <div :class="$style.desc">使用指南、常見問題與隱私政策</div>
  </a>
  <a :class="$style.card" href="/v1/en/">
    <div :class="$style.title">English</div>
    <div :class="$style.desc">User guides, FAQ and privacy policy</div>
  </a>
  <a :class="$style.card" href="/v1/ja/">
    <div :class="$style.title">日本語</div>
    <div :class="$style.desc">利用ガイド・よくある質問・プライバシーポリシー</div>
  </a>
  <a :class="$style.card" href="/v1/ko/">
    <div :class="$style.title">한국어</div>
    <div :class="$style.desc">사용 가이드, 자주 묻는 질문, 개인정보 처리방침</div>
  </a>
</div>

> 进入对应语言版本后，可在左上角「用户指南 / 常见问题 / 隐私政策」中浏览全部内容。

<style module>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 12px 0 24px;
}

.card {
  display: block;
  padding: 14px 16px;
  border-radius: 20px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none !important;
  transition: background-color 0.2s, transform 0.2s;
}

.card:hover {
  background-color: var(--vp-c-bg-soft-up);
  text-decoration: none !important;
  transform: translateY(-1px);
}

/* 牛皮纸 + 复古字体：导航卡片倒角对齐 App 小档（2px）；其余主题保持 20px */
:global(html.kraft.retro-font) .card {
  border-radius: 2px;
}

.title {
  font-weight: 600;
  line-height: 1.35;
  color: var(--vp-c-text-1);
}

.desc {
  margin-top: 6px;
  font-size: 13px;
  line-height: 1.5;
  color: var(--vp-c-text-2);
}
</style>
