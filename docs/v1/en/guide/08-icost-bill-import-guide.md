# iCost Bill Import Guide

## 📋 Overview

This guide shows how to export bills from **iCost** and import them into **Expense Tracker: Koala** (“Koala”).

Expense Tracker: Koala (“Koala”) supports **iCost Excel export** (`.xlsx` or `.xls`). CSV exported from iCost is not supported.

---

## 📱 Part 1: Export in iCost

Menu names may differ across versions:

1. Open iCost
2. Go to **Settings / More**
3. Find **Export / Data export / Export bills**
4. Choose **Excel (.xlsx / .xls)**
5. Choose a date range (recommended up to 3 months)
6. Export and save the file

> ⚠️ Important: If you export as CSV, Koala will show a message that CSV is not supported.

---

## 📱 Part 2: Import into Expense Tracker: Koala

### Step 1: Open the import page

1. Open Expense Tracker: Koala
2. Tap **Settings**
3. Find **Bill Import**
4. Enter the bill import page

### Step 2: Choose the import source

1. Tap **Import source**
2. Select **iCost**

> ⚠️ Important: You must choose **iCost**, otherwise Koala may parse it as another source and fail to find the header or shift fields.

### Step 3: Pick the file

1. Tap **File path**
2. Select the Excel file exported from iCost (`.xlsx` / `.xls`)
3. Confirm the file name is shown

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the target ledger

### Step 5: Parse and preview

1. Tap **Parse** (top-right)
2. After parsing succeeds, Koala opens the preview page
3. You can edit category, account, time, amount, tags, and notes before importing

### Step 6: Import

1. Tap **Import** after confirming everything looks correct
2. Wait for import to finish

---

## 📋 iCost Excel format (how Koala reads it)

Koala checks:

- The Excel file has a readable worksheet
- The header row contains **"日期"** (used to locate the header)

Tip: If iCost lets you choose export language, export with Chinese headers (at least keep "日期").

### Columns (by position)

| # | Field | Notes |
|---|---|---|
| 1 | Date | Date strings (multiple formats) or Excel serial date |
| 2 | Type | Must contain the keyword for expense or income |
| 3 | Amount | `+` or `-` allowed; thousands separators are handled |
| 4 | Parent category | Used to match Koala categories |
| 5 | Child category | If empty, Koala uses parent category |
| 6 | Account | If empty, Koala uses a default account |
| 8 | Note | Text |
| 9 | Currency code | For example `CNY` or `USD` (fallback to ledger default) |
| 10 | Tags | Comma-separated (`,` or `，`) |

### Field mapping (how Koala imports)

- Date (row[0]) → bill date
- Type (row[1], contains expense/income keyword) → bill type
- Amount (row[2]) → amount
- Parent category (row[3]) → parent category (matched/created)
- Child category (row[4]; if empty, use parent) → child category (matched/created)
- Account (row[5]; if empty, default account) → account
- Column 7 (row[6]) → ignored
- Note (row[7]) → note
- Currency code (row[8]) → currency (matched by code; fallback to ledger currency)
- Tags (row[9]) → tags (matched/created and linked)

---

## ⚠️ Notes

1. **Excel only**: iCost CSV files cannot be imported.
2. **No automatic deduplication**: Importing the same file twice will create duplicate bills. Avoid importing the same time range repeatedly.
3. **Header language**: Parsing relies on finding a header row that contains “日期”. If you export with non-Chinese headers, Koala may fail to locate the header.
4. **Empty account handling**: If the account column is empty, Koala uses a default account as a fallback. Consider filling in accounts in iCost, or batch-edit accounts in the preview page.
5. **Category matching**: Koala matches by “parent + child” names. If matching fails, the preview page will show it as incomplete; select the correct category before importing.

---

## 🔧 FAQ

### Q1: “iCost header not found”.

Common reasons:

1. The header row does not contain “日期” (for example, exported with English headers)
2. The file is not an iCost export, or it was edited and the structure changed
3. The Excel file is empty or has no worksheet

Re-export from iCost and prefer Chinese headers.

### Q2: Many records went into the same account.

This is expected if the “Account” column is empty. Koala uses a default account as a fallback. Batch-edit accounts in the preview page, or export again after filling accounts in iCost.

### Q3: Categories don’t match.

On the preview page, tap a record and select the correct category manually; or create categories in Koala with the same names as in the iCost export, then parse again.

---

## 📚 Related Guides

- [Template Bill Import (CSV)](./01-template-bill-import-guide)
- [WeChat Bill Import](./02-wechat-bill-import-guide)
- [Alipay Bill Import](./03-alipay-bill-import-guide)
- [Pixiu Bill Import](./07-pixiu-bill-import-guide)
- [Multi-ledger](./04-multi-ledger-guide)

---

**Last updated**: Apr 2026
