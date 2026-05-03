# 繁體中文

## 用戶指南

### 帳單匯入

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/01-template-bill-import-guide">
    <div :class="$style.title">模板帳單匯入（CSV）</div>
    <div :class="$style.desc">適用於 CSV 模板檔</div>
  </a>
  <a :class="$style.card" href="./guide/02-wechat-bill-import-guide">
    <div :class="$style.title">微信帳單匯入</div>
    <div :class="$style.desc">支援 CSV / Excel</div>
  </a>
  <a :class="$style.card" href="./guide/03-alipay-bill-import-guide">
    <div :class="$style.title">支付寶帳單匯入</div>
    <div :class="$style.desc">適用於 CSV</div>
  </a>
  <a :class="$style.card" href="./guide/07-pixiu-bill-import-guide">
    <div :class="$style.title">貔貅帳單匯入</div>
    <div :class="$style.desc">適用於 CSV</div>
  </a>
  <a :class="$style.card" href="./guide/08-icost-bill-import-guide">
    <div :class="$style.title">iCost 帳單匯入</div>
    <div :class="$style.desc">支援 Excel（不支援 CSV）</div>
  </a>
</div>

### 功能說明

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/04-multi-ledger-guide">
    <div :class="$style.title">多帳本</div>
    <div :class="$style.desc">建立、切換與帳本隔離</div>
  </a>
  <a :class="$style.card" href="./guide/05-exchange-rate-guide">
    <div :class="$style.title">匯率切換</div>
    <div :class="$style.desc">本位幣與匯率顯示口徑</div>
  </a>
  <a :class="$style.card" href="./guide/06-cloud-backup-guide">
    <div :class="$style.title">雲端備份與同步</div>
    <div :class="$style.desc">登入、同步與資料復原</div>
  </a>
  <a :class="$style.card" href="./guide/09-bill-split-guide">
    <div :class="$style.title">帳單拆分說明</div>
    <div :class="$style.desc">一筆帳單拆成多筆子帳單</div>
  </a>
  <a :class="$style.card" href="./guide/10-bill-refund-guide">
    <div :class="$style.title">帳單退款說明</div>
    <div :class="$style.desc">以負數記錄抵銷統計影響</div>
  </a>
  <a :class="$style.card" href="./guide/11-bill-reimbursement-guide">
    <div :class="$style.title">帳單報銷說明</div>
    <div :class="$style.desc">支出報銷與報銷入帳</div>
  </a>
  <a :class="$style.card" href="./guide/12-scheduled-accounting-guide">
    <div :class="$style.title">定時記帳說明</div>
    <div :class="$style.desc">固定收支自動生成帳單</div>
  </a>
</div>

## 常見問題

<div :class="$style.grid">
  <a :class="$style.card" href="./faq/">
    <div :class="$style.title">常見問題（FAQ）</div>
    <div :class="$style.desc">匯入、多帳本、匯率、雲同步等</div>
  </a>
</div>

## 法律條款

<div :class="$style.grid">
  <a :class="$style.card" href="./legal/privacy">
    <div :class="$style.title">私隱政策</div>
    <div :class="$style.desc">個人資料處理與保護說明</div>
  </a>
  <a :class="$style.card" href="./legal/terms">
    <div :class="$style.title">使用者協議</div>
    <div :class="$style.desc">使用條款與服務約定</div>
  </a>
  <a :class="$style.card" href="./legal/membership">
    <div :class="$style.title">會員服務協議</div>
    <div :class="$style.desc">會員權益與訂閱說明</div>
  </a>
</div>

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
  border: 1px solid var(--vp-c-border);
  border-radius: 12px;
  background-color: var(--vp-c-bg-soft);
  text-decoration: none;
  transition: border-color 0.2s, background-color 0.2s, transform 0.2s;
}

.card:hover {
  border-color: var(--vp-c-brand-1);
  background-color: var(--vp-c-bg-soft-up);
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
