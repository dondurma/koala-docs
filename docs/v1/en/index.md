# English

## Guides

### Bill Import

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/01-template-bill-import-guide">
    <div :class="$style.title">Template Bill Import (CSV)</div>
    <div :class="$style.desc">Import using the CSV template</div>
  </a>
  <a :class="$style.card" href="./guide/02-wechat-bill-import-guide">
    <div :class="$style.title">WeChat Bill Import</div>
    <div :class="$style.desc">Supports CSV / Excel</div>
  </a>
  <a :class="$style.card" href="./guide/03-alipay-bill-import-guide">
    <div :class="$style.title">Alipay Bill Import</div>
    <div :class="$style.desc">CSV format</div>
  </a>
  <a :class="$style.card" href="./guide/07-pixiu-bill-import-guide">
    <div :class="$style.title">Pixiu Bill Import</div>
    <div :class="$style.desc">CSV format</div>
  </a>
  <a :class="$style.card" href="./guide/08-icost-bill-import-guide">
    <div :class="$style.title">iCost Bill Import</div>
    <div :class="$style.desc">Excel supported (CSV not supported)</div>
  </a>
</div>

### Features

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/04-multi-ledger-guide">
    <div :class="$style.title">Multi-ledger</div>
    <div :class="$style.desc">Create, switch, and isolate ledgers</div>
  </a>
  <a :class="$style.card" href="./guide/05-exchange-rate-guide">
    <div :class="$style.title">Exchange Rates</div>
    <div :class="$style.desc">Base currency and rate display rules</div>
  </a>
  <a :class="$style.card" href="./guide/06-cloud-backup-guide">
    <div :class="$style.title">Cloud Backup & Sync</div>
    <div :class="$style.desc">Sign-in, syncing, and restore</div>
  </a>
  <a :class="$style.card" href="./guide/09-bill-split-guide">
    <div :class="$style.title">Bill Splitting</div>
    <div :class="$style.desc">Split one bill into multiple sub-bills</div>
  </a>
  <a :class="$style.card" href="./guide/10-bill-refund-guide">
    <div :class="$style.title">Bill Refunds</div>
    <div :class="$style.desc">Offset totals with negative records</div>
  </a>
  <a :class="$style.card" href="./guide/11-bill-reimbursement-guide">
    <div :class="$style.title">Bill Reimbursements</div>
    <div :class="$style.desc">Reimbursable expenses and deposit records</div>
  </a>
  <a :class="$style.card" href="./guide/12-scheduled-accounting-guide">
    <div :class="$style.title">Scheduled Accounting</div>
    <div :class="$style.desc">Auto-generate recurring bills</div>
  </a>
</div>

## FAQ

<div :class="$style.grid">
  <a :class="$style.card" href="./faq/">
    <div :class="$style.title">FAQ</div>
    <div :class="$style.desc">Import, ledgers, rates, sync, and more</div>
  </a>
</div>

## Legal

<div :class="$style.grid">
  <a :class="$style.card" href="./legal/privacy">
    <div :class="$style.title">Privacy Policy</div>
    <div :class="$style.desc">How we handle and protect your data</div>
  </a>
  <a :class="$style.card" href="./legal/terms">
    <div :class="$style.title">Terms</div>
    <div :class="$style.desc">Terms of use and service conditions</div>
  </a>
  <a :class="$style.card" href="./legal/membership">
    <div :class="$style.title">Membership Service Agreement</div>
    <div :class="$style.desc">Membership benefits and subscription</div>
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
