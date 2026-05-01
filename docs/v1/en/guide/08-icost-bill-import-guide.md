# iCost Bill Import Guide

## 📋 Overview

This guide shows how to export bills from **iCost** and import them into **Koala**.

Koala supports **iCost Excel export** (`.xlsx` or `.xls`). CSV exported from iCost is not supported.

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

## 📱 Part 2: Import into Koala

1. Open Koala and go to **Settings** then **Bill Import**
2. Set **Import source** to **iCost**
3. Choose the exported Excel file
4. Link the target ledger
5. Tap **Parse** then preview and tap **Import**

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

---

## 📚 Related Guides

- [Template Bill Import (CSV)](./01-template-bill-import-guide)
- [WeChat Bill Import](./02-wechat-bill-import-guide)
- [Alipay Bill Import](./03-alipay-bill-import-guide)
- [Pixiu Bill Import](./07-pixiu-bill-import-guide)
- [Multi-ledger](./04-multi-ledger-guide)

---

**Last updated**: Apr 2026
