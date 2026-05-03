# WeChat Bill Import Guide

## 📋 Overview

This guide walks you through exporting bills from WeChat and importing them into Expense Tracker: Koala (“Koala”).

---

## 📱 Part 1: Export bills in WeChat

### Step 1: Open the Bills page

1. Open WeChat
2. Tap **Me**
3. Tap **Services** (or **Pay**)
4. Tap the **Wallet** icon (top-right)
5. Tap **Bills**

> 📝 Note: Entry points may vary by WeChat version. If you can’t find it, try searching “账单” in WeChat.

### Step 2: Download a bill file

1. On the Bills page, tap **...** or **Filter**
2. In the bottom sheet, tap **Download bills**
3. Choose **Personal reconciliation**
4. Choose delivery method (**WeChat** or **Email**) and confirm
5. Select the time range (e.g. last month / last 3 months) and confirm

> 💡 Tips:
> - Export up to 3 months at a time to keep the file manageable.
> - For longer history, export multiple files and import them one by one.

### Step 3: Complete verification (if prompted)

1. Tap **Next**
2. Follow WeChat’s verification steps
3. Wait for WeChat to generate the file

> ⚠️ Important:
> - WeChat will deliver the bill file via the selected method.
> - If you choose email, make sure you have set up your email address in WeChat.

### Step 4: Save the file to your device

- If delivered via email: download the attachment (CSV/Excel) and save it locally.
- If delivered via WeChat: download and save it to Files (if supported).

> 📝 Where the file usually goes:
> - iOS: Files app → Downloads
> - Android: Downloads folder or WeChat folder

---

## 📱 Part 2: Import into Expense Tracker: Koala

### Step 1: Open the import page

1. Open Expense Tracker: Koala
2. Tap **Settings**
3. Find **Bill Import**
4. Enter the bill import page

### Step 2: Choose the import source

1. Tap **Import source**
2. Select **WeChat**

> ⚠️ Important: You must choose **WeChat**, otherwise the file cannot be parsed correctly.

### Step 3: Pick the file

1. Tap **File path**
2. Select the bill file exported from WeChat
3. Confirm the file name is shown

> 📝 Supported formats:
> - CSV (`.csv`)
> - Excel (`.xlsx`, `.xls`)

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the target ledger

> 💡 Tip: If you only have one ledger, Koala links it automatically.

### Step 5: Parse the file

1. Tap **Parse** (top-right)
2. Wait for parsing to finish
3. After success, Koala opens the preview page

> ⚠️ If parsing fails:
> - Check the file format.
> - Ensure the import source is set to WeChat.
> - Try exporting the file again.

### Step 6: Preview and edit

On the preview page, you can:

- Review records grouped by date
- Tap a record to edit category, amount, time, account, tags, and notes
- Long-press to delete invalid records
- Batch-skip invalid records

> 📝 Recommendation: Always review categories and amounts before importing.

### Step 7: Import

1. Confirm everything looks correct
2. Tap **Import**
3. Wait for the import to complete

---

## 📋 WeChat file columns (reference)

WeChat exports typically contain columns like:

| Column name (as exported) | Meaning | Example |
|------|------|------|
| 交易时间 | Transaction time | 2024-01-01 12:00:00 |
| 交易类型 | Transaction type | 微信红包 / 转账 / 消费等 |
| 交易对方 | Counterparty | 张三 / 商户名称 |
| 商品 | Item description | 午餐 / 购物等 |
| 收/支 | Income / Expense | 收入 / 支出 |
| 金额(元) | Amount | 100.00 |
| 支付方式 | Payment method | 零钱 / 银行卡 |
| 当前状态 | Status | 支付成功/已转账/已到账 |
| 交易单号 | Transaction ID | 4200001234567890 |
| 商户单号 | Merchant ID | 1234567890 |
| 备注 | Note | 备注内容 |

Excel exports have the same columns; only the file format is different.

---

## ⚠️ Notes

### 1. File requirements

- **Encoding**: UTF-8 is recommended
- **Format**: CSV or Excel
- **Size**: recommended under 10MB per file

### 2. Field mapping (how Koala imports)

Koala maps the WeChat fields to Koala fields automatically:

- Transaction time → bill date (converted to a date string)
- Income/expense → bill type
- Category fields → category (may require manual adjustment)
- Amount → bill amount
- Payment method → account (matched by name; created if missing)
- Counterparty / status / IDs / notes → bill note (combined)

### 3. Category matching

- Automatic matching may not be perfect.
- Review and adjust in the preview page if needed.

### 4. Account matching

- Koala tries to match accounts by payment method.
- If no matching account is found, Koala will create one.

### 5. Avoid manual edits to the export file

Do not modify the exported file (especially headers/columns). Renaming headers, deleting columns, or adding columns may cause parsing to fail.

---

## 🔧 FAQ

### Q1: I can’t find “Download bills”. What should I do?

Possible reasons:

1. Your WeChat version is too old
2. The entry point is different

Try:

- Tap **...** on the Bills page
- Look for **Bills** under Wallet
- Search “账单导出” in WeChat

### Q2: I didn’t receive the email.

Check:

1. Whether an email address is linked in WeChat
2. Whether the email address is correct
3. Spam/junk folder
4. Try choosing “Save to Files” (if available)

### Q3: Parsing failed.

Check:

1. File format (CSV/Excel)
2. Import source is WeChat
3. File is not corrupted
4. Encoding is correct (UTF-8 recommended)

### Q4: Categories look wrong after import.

This can happen because WeChat’s categories may not match Koala’s categories exactly. Review and adjust categories in the preview page, or batch-edit after import.

### Q5: Can I import images?

Not supported.

### Q6: How much history can I import?

There is no strict limit, but it’s recommended to:

1. Import up to 3 months per file
2. Split large ranges into multiple files
3. Keep the app in the foreground during import

---

## 💡 Tips

1. Import regularly (e.g. monthly) to keep data up to date
2. Review categories after import for better statistics
3. Create common accounts ahead of time to avoid messy auto-created names
4. Consider backing up your data before importing

---

**Last updated**: May 2026
