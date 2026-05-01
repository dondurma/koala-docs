# WeChat Bill Import Guide

## 📋 Overview

This guide shows how to export bills from WeChat and import them into Koala.

---

## 📱 Part 1: Export bills in WeChat

### Step 1: Open the bill page

1. Open WeChat
2. Tap **Me**
3. Tap **Services** (or **Pay**)
4. Tap the **Wallet** icon (top-right)
5. Tap **Bills**

> 📝 Note: The entry may differ across WeChat versions. If you can’t find it, try searching “账单”.

### Step 2: Download a bill file

1. On the Bills page, tap **...** or **Filter**, then tap **Download bills** in the bottom sheet
2. Choose **Personal reconciliation**
3. Choose delivery method (**WeChat** or **Email**)
4. Choose a date range and confirm

> 💡 Tips:
> - Export up to 3 months at a time.
> - For longer history, export multiple files and import them one by one.

### Step 3: Save the file to your device

- If delivered via email: download the attachment and save it locally.
- If saved to files: remember where you saved it.

---

## 📱 Part 2: Import into Koala

### Step 1: Open the import page

1. Open Koala
2. Tap **Settings**
3. Find **Bill Import**
4. Enter the bill import page

### Step 2: Choose the import source

1. Tap **Import source**
2. Select **WeChat**

> ⚠️ Important: You must choose **WeChat**.

### Step 3: Pick the file

1. Tap **File path**
2. Select the bill file exported from WeChat

Supported formats:
- `.csv`
- `.xlsx` / `.xls`

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the target ledger

### Step 5: Parse, preview, and import

1. Tap **Parse** (top-right)
2. Review records on the preview page
3. Edit or delete invalid records if needed
4. Tap **Import**

---

## 📋 WeChat file columns (for reference)

WeChat export typically contains columns like:

| Column name (as exported) | Meaning | Example |
|------|------|------|
| 交易时间 | Transaction time | 2024-01-01 12:00:00 |
| 交易类型 | Transaction type | 红包 / 转账 / 消费 |
| 交易对方 | Counterparty | 张三 / 商户 |
| 商品 | Item description | 午餐 |
| 收/支 | Income/Expense | 收入 / 支出 |
| 金额(元) | Amount | 100.00 |
| 支付方式 | Payment method | 零钱 / 银行卡 |
| 当前状态 | Status | 支付成功 |
| 交易单号 | Transaction ID | 420000... |
| 商户单号 | Merchant ID | 123... |
| 备注 | Note | ... |

---

## ⚠️ Notes

- Don’t edit the exported WeChat file (especially headers/columns), otherwise parsing may fail.
- Category matching may not be perfect; review and adjust in the preview page.

---

**Last updated**: May 2026
