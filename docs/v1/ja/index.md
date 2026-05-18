## ガイド

### 明細のインポート

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/01-template-bill-import-guide">
    <div :class="$style.title">テンプレート明細インポート（CSV）</div>
    <div :class="$style.desc">CSV テンプレートでインポート</div>
  </a>
  <a :class="$style.card" href="./guide/02-wechat-bill-import-guide">
    <div :class="$style.title">WeChat 明細インポート</div>
    <div :class="$style.desc">CSV / Excel に対応</div>
  </a>
  <a :class="$style.card" href="./guide/03-alipay-bill-import-guide">
    <div :class="$style.title">Alipay 明細インポート</div>
    <div :class="$style.desc">CSV 形式</div>
  </a>
  <a :class="$style.card" href="./guide/07-pixiu-bill-import-guide">
    <div :class="$style.title">Pixiu 明細インポート</div>
    <div :class="$style.desc">CSV 形式</div>
  </a>
  <a :class="$style.card" href="./guide/08-icost-bill-import-guide">
    <div :class="$style.title">iCost 明細インポート</div>
    <div :class="$style.desc">Excel 対応（CSV は非対応）</div>
  </a>
</div>

### 機能ガイド

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/04-multi-ledger-guide">
    <div :class="$style.title">複数帳本</div>
    <div :class="$style.desc">帳本の作成、切替、データの分離</div>
  </a>
  <a :class="$style.card" href="./guide/05-exchange-rate-guide">
    <div :class="$style.title">為替レート</div>
    <div :class="$style.desc">基準通貨と表示ルール</div>
  </a>
  <a :class="$style.card" href="./guide/06-cloud-backup-guide">
    <div :class="$style.title">クラウドバックアップと同期</div>
    <div :class="$style.desc">ログイン、同期、復元</div>
  </a>
  <a :class="$style.card" href="./guide/09-bill-split-guide">
    <div :class="$style.title">明細の分割（帳単位）</div>
    <div :class="$style.desc">1件を複数の子明細に分割</div>
  </a>
  <a :class="$style.card" href="./guide/10-bill-refund-guide">
    <div :class="$style.title">返金（明細の返金）</div>
    <div :class="$style.desc">負の金額で集計を相殺</div>
  </a>
  <a :class="$style.card" href="./guide/11-bill-reimbursement-guide">
    <div :class="$style.title">精算（立替の精算）</div>
    <div :class="$style.desc">立替支出と精算入金の記録</div>
  </a>
  <a :class="$style.card" href="./guide/12-scheduled-accounting-guide">
    <div :class="$style.title">定期記帳</div>
    <div :class="$style.desc">定期的な収支を自動で記録</div>
  </a>
</div>

## よくある質問

<div :class="$style.grid">
  <a :class="$style.card" href="./faq/">
    <div :class="$style.title">よくある質問（FAQ）</div>
    <div :class="$style.desc">インポート、帳本、為替、同期など</div>
  </a>
</div>

## 法的情報

<div :class="$style.grid">
  <a :class="$style.card" href="./legal/privacy">
    <div :class="$style.title">プライバシーポリシー</div>
    <div :class="$style.desc">個人情報の取扱いについて</div>
  </a>
  <a :class="$style.card" href="./legal/terms">
    <div :class="$style.title">利用規約</div>
    <div :class="$style.desc">利用条件とサービスに関する規定</div>
  </a>
  <a :class="$style.card" href="./legal/membership">
    <div :class="$style.title">会員サービス規約</div>
    <div :class="$style.desc">会員特典とサブスクリプション</div>
  </a>
</div>

## ヘルプ

<div :class="$style.grid">
  <a :class="$style.card" href="./help/account-deletion">
    <div :class="$style.title">アカウント削除の説明</div>
    <div :class="$style.desc">削除時の影響と注意事項</div>
  </a>
  <a :class="$style.card" href="./help/version-history">
    <div :class="$style.title">バージョン履歴</div>
    <div :class="$style.desc">追加機能と不具合修正</div>
  </a>
</div>

<style module>
:global(.vp-doc > div > h2:first-child) {
  border-top: none;
  padding-top: 0;
  margin-top: 0;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 12px;
  margin: 12px 0 24px;
}

.card {
  display: block;
  padding: 14px 16px;
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none !important;
  transition: border-color 0.2s, background-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: #FFB300;
  background-color: var(--vp-c-bg-soft-up);
  text-decoration: none !important;
  transform: translateY(-1px);
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
