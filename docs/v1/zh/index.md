## 用户指南

### 账单导入

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/01-template-bill-import-guide">
    <div :class="$style.title">模板账单导入指南</div>
    <div :class="$style.desc">适用于 CSV 模板文件</div>
  </a>
  <a :class="$style.card" href="./guide/02-wechat-bill-import-guide">
    <div :class="$style.title">微信账单导入教程</div>
    <div :class="$style.desc">支持 CSV / Excel</div>
  </a>
  <a :class="$style.card" href="./guide/03-alipay-bill-import-guide">
    <div :class="$style.title">支付宝账单导入教程</div>
    <div :class="$style.desc">适用于 CSV</div>
  </a>
  <a :class="$style.card" href="./guide/07-pixiu-bill-import-guide">
    <div :class="$style.title">貔貅账单导入指南</div>
    <div :class="$style.desc">适用于 CSV</div>
  </a>
  <a :class="$style.card" href="./guide/08-icost-bill-import-guide">
    <div :class="$style.title">iCost 账单导入指南</div>
    <div :class="$style.desc">支持 Excel（不支持 CSV）</div>
  </a>
</div>

### 功能说明

<div :class="$style.grid">
  <a :class="$style.card" href="./guide/04-multi-ledger-guide">
    <div :class="$style.title">多账本功能说明</div>
    <div :class="$style.desc">多个账本的创建、切换与隔离</div>
  </a>
  <a :class="$style.card" href="./guide/05-exchange-rate-guide">
    <div :class="$style.title">汇率切换说明</div>
    <div :class="$style.desc">本位币与汇率展示口径</div>
  </a>
  <a :class="$style.card" href="./guide/06-cloud-backup-guide">
    <div :class="$style.title">云备份说明</div>
    <div :class="$style.desc">登录、同步与数据恢复</div>
  </a>
  <a :class="$style.card" href="./guide/09-bill-split-guide">
    <div :class="$style.title">账单拆分说明</div>
    <div :class="$style.desc">一笔账单拆成多笔子账单</div>
  </a>
  <a :class="$style.card" href="./guide/10-bill-refund-guide">
    <div :class="$style.title">账单退款说明</div>
    <div :class="$style.desc">用负数记录抵消统计影响</div>
  </a>
  <a :class="$style.card" href="./guide/11-bill-reimbursement-guide">
    <div :class="$style.title">账单报销说明</div>
    <div :class="$style.desc">支出报销与报销入账</div>
  </a>
  <a :class="$style.card" href="./guide/12-scheduled-accounting-guide">
    <div :class="$style.title">定时记账说明</div>
    <div :class="$style.desc">固定收支自动生成账单</div>
  </a>
</div>

## 常见问题

<div :class="$style.grid">
  <a :class="$style.card" href="./faq/">
    <div :class="$style.title">常见问题（FAQ）</div>
    <div :class="$style.desc">导入、多账本、汇率、云同步等</div>
  </a>
</div>

## 法律条款

<div :class="$style.grid">
  <a :class="$style.card" href="./legal/privacy">
    <div :class="$style.title">隐私政策</div>
    <div :class="$style.desc">个人信息处理与保护说明</div>
  </a>
  <a :class="$style.card" href="./legal/terms">
    <div :class="$style.title">用户协议</div>
    <div :class="$style.desc">使用条款与服务约定</div>
  </a>
  <a :class="$style.card" href="./legal/membership">
    <div :class="$style.title">会员服务协议</div>
    <div :class="$style.desc">会员权益与订阅说明</div>
  </a>
</div>

<style module>
:global(.vp-doc > h2:first-child) {
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
