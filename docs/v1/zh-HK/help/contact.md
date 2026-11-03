# 聯絡我

如有任何問題或建議，歡迎透過以下方式聯絡我。

<div class="contact-cards">
  <a class="contact-card" href="mailto:ruanweidev@163.com">
    <span class="contact-icon">📧</span>
    <span class="contact-name">電郵</span>
    <span class="contact-value">ruanweidev@163.com</span>
  </a>
  <a class="contact-card" href="https://xhslink.com/m/3CgkJlri999" target="_blank">
    <span class="contact-icon">🍠</span>
    <span class="contact-name">小紅書</span>
    <span class="contact-value">點擊訪問</span>
  </a>
  <a class="contact-card" href="./wechat-official-account">
    <span class="contact-icon">💬</span>
    <span class="contact-name">微信公眾號</span>
    <span class="contact-value">點擊查看</span>
  </a>
  <a class="contact-card" href="https://www.instagram.com/wylan.dev" target="_blank">
    <span class="contact-icon">📷</span>
    <span class="contact-name">Instagram</span>
    <span class="contact-value">@wylan.dev</span>
  </a>
</div>

## 可以直接找我

考拉記帳由我一個人開發和維護。App Store 上的評價我看到了也不一定能回覆到你，問題容易懸着，所以遇到以下情況，建議直接用上面的電郵或社交帳號找我：

- 資料看起來不對、同步卡住、帳單匯入失敗
- 登入、會員、恢復購買異常
- 有想吐槽的地方，或者某個操作讓你覺得別扭

## 回饋時附上這些

- 機型和系統版本
- App 版本號
- 出問題的操作步驟（有截圖或錄屏更好）
- 同步問題請說明是否已登入、是否多裝置

電郵和私訊我都會逐條看。處理可能不會很快，但不會不處理；如果隔了很久沒動靜，直接再發一封催我——多半是漏看了。

<style scoped>
.contact-cards {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 20px 0 32px;
}

.contact-card {
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 22px;
  border-radius: 20px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.contact-card:hover {
  background-color: var(--vp-c-bg-soft-up, var(--vp-c-bg-soft));
  transform: translateY(-1px);
}

/* 牛皮纸 + 复古字体：倒角对齐主页导航卡片（2px）；其余主题保持 20px。
   注意：此处不可用 :global()，scoped 下 :global(X) Y 会被编译成 X，后代选择器 Y 丢失。 */
html.kraft.retro-font .contact-card {
  border-radius: 2px;
}

.contact-icon {
  font-size: 26px;
  line-height: 1;
  flex-shrink: 0;
}

.contact-name {
  font-weight: 600;
  flex-shrink: 0;
  min-width: 64px;
}

.contact-value {
  color: var(--vp-c-text-2);
  font-size: 0.92em;
  margin-left: auto;
  text-align: right;
}
</style>

**最後更新**：2026 年 11 月
