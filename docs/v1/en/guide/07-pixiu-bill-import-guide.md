# Pixiu Bill Import Guide

## 📋 Overview

This guide shows how to export bills from **Pixiu** and import them into **Expense Tracker: Koala** (“Koala”).

Koala currently supports **Pixiu CSV exports** (CSV only).

---

## 📱 Part 1: Export in Pixiu

The menu name may vary by Pixiu version, but the flow is the same: go to export, choose a date range, export as CSV, then save the file.

### Step 1: Find the export entry

1. Open Pixiu
2. Go to **Me**
3. Find **Data export / Export bills** (wording may differ)

### Step 2: Select the time range

1. Choose the time range (e.g. last month / last 3 months)
2. Confirm and start export

> 💡 Tips:
> - Export up to 3 months at a time to keep the file manageable.
> - For a large history, export multiple files and import them in batches.

### Step 3: Export as CSV and save

1. Choose export format: **CSV**
2. Save the exported CSV file to your device (or share → Save to Files)
3. Remember the file location for import

---

## 📱 Part 2: Import into Expense Tracker: Koala

### Step 1: Open the import page

1. Open Expense Tracker: Koala
2. Tap **Settings**
3. Find **Bill Import**
4. Enter the bill import page

### Step 2: Choose the import source

1. Tap **Import source**
2. Select **Pixiu**

> ⚠️ Important: You must choose **Pixiu**, otherwise validation may fail or fields may be parsed incorrectly.

### Step 3: Pick the file

1. Tap **File path**
2. Select the CSV file exported from Pixiu
3. Confirm the file name is shown

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the target ledger

### Step 5: Parse and preview

1. Tap **Parse** (top-right)
2. After parsing succeeds, Koala opens the preview page
3. You can edit/delete single records, or batch-skip invalid records

### Step 6: Import

1. Tap **Import** after confirming everything looks correct
2. Wait for import to finish

---

## 📋 Pixiu CSV format (reference)

Koala validates Pixiu CSV as follows:

- The first row must be the header row
- The header must contain **10 columns**
- Fields are separated by a comma `,` (standard CSV)

### Columns (in order)

| # | Column meaning | Notes |
|------|------|------|
| 1 | Date | Supports `yyyy-MM-dd` / `yyyy/MM/dd`, and the year must be ≥ 2016; otherwise it’s treated as invalid |
| 2 | Parent category | Used to match Koala’s parent category name |
| 3 | Type | Must contain the keyword “支出” (expense) or “收入” (income); if it contains “收入”, Koala imports it as income, otherwise as expense |
| 4 | Child category | Used to match Koala’s child category name |
| 5 | Inflow amount | Income amount (a leading `-` is allowed; Koala removes the sign on import) |
| 6 | Outflow amount | Expense amount (a leading `-` is allowed; Koala removes the sign on import) |
| 7 | Currency code | For example `CNY` / `USD`; if empty, Koala uses the ledger’s default currency |
| 8 | Account | Account name (matched to Koala accounts; created during import if missing) |
| 9 | Tags | Multiple tags separated by commas (`,`), also supports Chinese comma `，` |
| 10 | Note | Note text |

### Mapping into Koala

- Date → bill date
- Type (expense/income keyword) → bill type
- Parent + child category → category (if not matched, it will be marked as incomplete on the preview page)
- Inflow/outflow → amount (Koala chooses the column based on bill type)
- Account → account (matched by name; created if missing)
- Tags → tags (matched/created and linked to the record)
- Note → note
- Currency code → bill currency (matched by code; falls back to the ledger currency if not matched)

---

## ⚠️ Notes

1. **No automatic deduplication**: Importing the same file twice will create duplicate bills. Avoid importing the same time range repeatedly.
2. **Category matching**: Koala matches by “parent + child” names. If matching fails, the preview page will show it as incomplete; select the correct category before importing.
3. **Account validity**: If the account name is empty or only symbols, it may be treated as invalid and require you to fill it in.
4. **CSV encoding**: UTF-8 and GBK are supported. If you see garbled text, re-export as UTF-8 or convert the encoding and import again.

---

## 🔧 FAQ

### Q1: “Header length is incorrect”.

Make sure the first header row has exactly **10 columns**. Common causes:

1. The CSV file is not exported from Pixiu
2. Editing the file in Excel/WPS introduced extra separators so the column count changed
3. The file was saved in an incompatible CSV variant (e.g. semicolon-delimited)

### Q2: Amount is wrong or becomes 0 after import.

Check:

1. The “Type” column contains the keyword for expense/income (this decides whether Koala reads inflow or outflow)
2. The corresponding amount column has a numeric value (`-` is allowed; Koala removes it)

### Q3: Categories don’t match.

On the preview page, tap a record and select the correct category manually; or create categories in Koala with the same names as in the Pixiu export, then parse again.

---

**Last updated**: May 2026
