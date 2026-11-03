# お問い合わせ

ご質問やご提案がございましたら、以下の方法でお気軽にご連絡ください。

<div class="contact-cards">
  <a class="contact-card" href="mailto:ruanweidev@163.com">
    <span class="contact-icon">📧</span>
    <span class="contact-name">メール</span>
    <span class="contact-value">ruanweidev@163.com</span>
  </a>
  <a class="contact-card" href="https://xhslink.com/m/3CgkJlri999" target="_blank">
    <span class="contact-icon">🍠</span>
    <span class="contact-name">REDnote（小紅書）</span>
    <span class="contact-value">アクセス</span>
  </a>
  <a class="contact-card" href="https://www.instagram.com/wylan.dev" target="_blank">
    <span class="contact-icon">📷</span>
    <span class="contact-name">Instagram</span>
    <span class="contact-value">@wylan.dev</span>
  </a>
</div>

## 直接のご連絡について

コアラ家計簿は一人で開発・運営しています。App Store のレビューには返信できないため、問題が宙に浮いたままになりがちです。次のような場合は、上のメールや SNS から直接ご連絡ください。

- データがおかしい、同期が止まる、明細のインポートに失敗する
- ログイン、会員、購入の復元に関する不具合
- 不満や、ここが使いにくいという指摘

## ご連絡時に添えていただきたい情報

- 端末の機種と OS のバージョン
- アプリのバージョン
- 問題が起きた操作手順（スクリーンショットや画面収録があると助かります）
- 同期の問題は、ログイン済みか、複数端末を使っているか

メールも DM もすべて目を通します。対応は早くないかもしれませんが、放置はしません。長く返信がない場合は、もう一度ご連絡ください（見落としている可能性が高いです）。

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

**最終更新**：2026年11月
