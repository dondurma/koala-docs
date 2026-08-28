# Alipay Bill Import Guide

## 📋 Overview

This guide shows you how to export bills from Alipay and import them into Expense Tracker: Koala (“Koala”).

---

## 📱 Part 1: Export bills in Alipay

### Step 1: Open the Bills page

1. Open Alipay
2. Tap **Me**
3. Tap **Bills**

> 📝 Note: Entry points may vary by Alipay version. If you can’t find it, try searching “账单” in Alipay.

### Step 2: Start export

1. On the Bills page, tap **...** (top-right)
2. Select **Transaction statement** / **Bill export** (wording may differ)
3. Choose **Personal reconciliation** and tap **Apply**

### Step 3: Select export options

1. Choose transaction type: **All** / **Income** / **Expense**
2. Choose the time range (e.g. last month / last 3 months)
3. Choose delivery method: **Alipay** / **Email**

> 💡 Tips:
> - Export up to 3 months at a time to avoid very large files.
> - For longer history, export multiple files.
> - If you choose email, Alipay sends the file as an attachment (make sure your email is configured).

### Step 4: Save the file to your device

1. If delivered via email:
   - Open your mailbox and find the message from Alipay
   - Download the attachment (CSV)
   - Save it locally (so the file picker can access it)
2. If “Save to Files” is available:
   - Save it to your Downloads folder
   - Remember the location

> 📝 Where the file usually goes:
> - iOS: Files app → Downloads
> - Android: Downloads folder or Alipay folder

---

## 📱 Part 2: Import into Expense Tracker: Koala

### Step 1: Open the import page

1. Open Expense Tracker: Koala
2. Tap **Settings**
3. Find **Bill Import**
4. Enter the bill import page

### Step 2: Choose the import source

1. Tap **Import source**
2. Select **Alipay**

> ⚠️ Important: You must choose **Alipay**, otherwise the file cannot be parsed correctly.

### Step 3: Pick the file

1. Tap **File path**
2. Select the CSV file exported from Alipay
3. Confirm the file name is shown

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the target ledger

> 💡 Tip: If you only have one ledger, Koala links it automatically.

### Step 5: Parse the file

1. Tap **Parse** (top-right)
2. Wait for parsing to finish (may take a few seconds)
3. If successful, you will be taken to the preview page automatically

> ⚠️ **If parsing fails**:
> - Check that the file format is correct
> - Check that the import source is set to **Alipay**
> - Check that the file is not corrupted
> - Try exporting the file again from Alipay

### Step 6: Preview and edit

After parsing, you can:

- **View all records**: grouped by date
- **Edit a single record**: tap a record to change:
  - Category (income/expense category)
  - Amount
  - Time
  - Account
  - Tags
  - Notes
- **Delete invalid records**: long-press a record to delete
- **Batch operations**: choose to skip invalid records

> 📝 **Recommendations**:
> - Review the data before importing to make sure it is correct
> - Check that categories are matched correctly
> - Check that amounts are correct
> - Adjust categories and accounts manually if needed

### Step 7: Import data

1. After reviewing the data on the preview page, confirm everything looks correct
2. Tap **Import**
3. Wait for the import to finish (may take a few seconds)
4. After import completes, the result will be shown

> ✅ **Import successful**: All valid records have been imported into your ledger. You can view them in the bill list.

---

## 📋 Alipay CSV columns (reference)

Alipay’s CSV export typically contains:

| Column name (as exported) | Meaning | Example |
|------|------|------|
| 交易时间 | Transaction time | 2024-01-01 12:00:00 |
| 交易分类 | Category label | 餐饮美食/日用百货 |
| 交易对方 | Counterparty | 张三 / Merchant name |
| 对方账号 | Counterparty account | xxx@163.com |
| 商品说明 | Item description | Lunch / Shopping |
| 收/支 | Income / Expense | 收入 / 支出 |
| 金额 | Amount | 100.00 |
| 收/付款方式 | Payment method/account | 余额宝 |
| 交易状态 | Status | 交易成功 / 已退款 |
| 交易订单号 | Transaction order no. | 20240101... |
| 商家订单号 | Merchant order no. | 1234567890 |
| 备注 | Note | 备注内容 |

> 📝 Note: Column names may vary slightly by Alipay version, but the meaning is the same.

---

## ⚠️ Notes

### 1. File requirements

- **Encoding**: UTF-8 is recommended (Alipay exports may be UTF-8 or GBK)
- **Format**: CSV only (`.csv`)
- **Size**: recommended under 10MB per file

### 2. Field mapping (how Koala imports)

Koala maps Alipay columns to Koala fields automatically:

- Transaction time (row[0]) → bill date (date only, `yyyy-MM-dd`)
- Category (row[1]) → category (parent and child set to the same name)
- Counterparty / account / item / status / order numbers → appended into the bill note (combined)
- Income/expense (row[5]) → bill type (income/expense)
- Amount (row[6]) → bill amount
- Payment method (row[7]) → account (matched by name; created if missing)
- Note (row[11]) → bill note (used as the original note; “/” or empty is ignored, then Koala appends extra lines)

### 3. Category matching

- The system will try to match categories automatically, but results may not be fully accurate.
- It is recommended to check whether categories are correct on the preview page.
- Adjust categories manually if needed.

### 4. Account matching

- The system will try to match accounts based on "payment source" or other information.
- If an account does not exist, the system will create it automatically.
- It is recommended to create common accounts before importing.

### 5. Duplicate handling

- If an imported record duplicates an existing record (based on transaction identifiers), the system will skip it automatically.
- It is recommended to check for duplicate data before importing.

### 6. Refund handling

- If the bill contains refund records, the system will try to identify and handle them.
- Refund records are usually marked as "已退款" (Refunded) or "退款成功" (Refund successful).
- It is recommended to check refund records on the preview page.

### 7. Avoid manual edits to the export file

Do not modify the exported file (especially headers/columns). Renaming headers, deleting columns, or adding columns may cause parsing to fail.

---

## 🔧 FAQ

### Q1: I can’t find “Bill export”.

Possible reasons:

1. Your Alipay version is too old
2. The entry point is different

Try:

- Tap **...** on the Bills page
- Look for **Bills** under Me
- Search “账单导出” in Alipay

### Q2: I didn’t receive the email.

Check:

1. Whether an email address is linked in Alipay
2. Whether the email address is correct
3. Spam/junk folder
4. Try “Save to Files” (if available)

### Q3: Parsing failed.

Check:

1. File format is CSV
2. Import source is set to Alipay
3. File is not corrupted
4. Encoding is correct (UTF-8 or GBK)

### Q4: Categories look wrong after import.

This can happen because Alipay’s category labels may not match Koala’s categories exactly. Review and adjust categories in the preview page, or batch-edit after import.

### Q5: Can I import images?

Not supported.

### Q6: How much history can I import?

There is no strict limit, but it’s recommended to:

1. Import up to 3 months per file
2. Split large ranges into multiple files
3. Keep the app in the foreground during import

### Q7: Why is only CSV supported?

Alipay currently exports bills in CSV. If Excel export becomes available, the guide will be updated.

---

## 💡 Tips

1. Import regularly (e.g. monthly) to keep data up to date
2. Review categories after import for better statistics
3. Create common accounts ahead of time to avoid messy auto-created names
4. Consider backing up your data before importing
5. Review refund records after import

---

**Last updated**: May 2026
