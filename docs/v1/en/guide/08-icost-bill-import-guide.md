# iCost Bill Import Guide

## 📋 Overview

This guide shows how to export bills from **iCost** and import them into **Expense Tracker: Koala** (“Koala”).

Expense Tracker: Koala (“Koala”) supports **iCost Excel export** (`.xlsx` or `.xls`). CSV exported from iCost is not supported.

## 📱 Part 1: Export in iCost

Menu names may differ across versions:

1. Open iCost
2. Go to **Settings / More**
3. Find **Export / Data export / Export bills**
4. Choose **Excel (.xlsx / .xls)**
5. Choose a date range (recommended up to 3 months)
6. Export and save the file

> ⚠️ Important: If you export as CSV, Koala will show a message that CSV is not supported.

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

## 📋 iCost Excel format (how Koala reads it)

How Koala recognizes an iCost Excel file:

- The Excel file must have a readable worksheet
- Koala identifies columns by **header name**, so column order does not matter; the header row can be within the first few rows
- If the header names can't be mapped to the required fields (date / type / amount), Koala prompts “header not found” or opens the “field mapping confirmation page” for manual assignment

> 📝 **Tip**: If iCost lets you choose the export language, exporting with Chinese headers makes automatic recognition more likely.

### Field definitions

| Field | Description |
|------|------|
| Date | Supports `yyyy-MM-dd` / `yyyy/MM/dd` / `yyyy-MM-ddTHH:mm:ss` / `yyyy-MM-dd HH:mm:ss`; Excel serial dates are also supported |
| Type | The text must contain the keyword “支出” (expense) or “收入” (income); contains “支出” = expense, contains “收入” = income |
| Amount | `+`/`-` allowed; Koala removes the sign and thousands-separator commas on import |
| Parent category (level-1) | Used to match Koala's parent category name |
| Child category (level-2) | If empty, Koala uses the value of “Parent category” |
| Account | If empty, Koala uses a default account as a fallback |
| Note | Note text |
| Currency code | For example `CNY` / `USD`; if empty or unmatched, Koala uses the target ledger's default currency |
| Tags | Multiple tags separated by commas (`,`), also supports the Chinese comma `，` |

### Field mapping (how Koala imports)

- Date → bill date
- Type (containing “expense/income”) → bill type
- Amount → amount
- Level-1 category → parent category (matched/created)
- Level-2 category (uses level-1 if empty) → child category (matched/created)
- Account (default account if empty) → account
- Note → note
- Currency code → currency (matched by code; falls back to the ledger's default currency)
- Tags → tags (parsed/created and linked)

## ⚠️ Notes

1. **Excel only**: iCost CSV files cannot be imported.
2. **No automatic deduplication**: Importing the same file twice will create duplicate bills. Avoid importing the same time range repeatedly.
3. **Header names**: Parsing relies on the header names being mappable to fields such as “date / type / amount”; if they can't be recognized, Koala prompts “header not found” or opens the field mapping confirmation page.
4. **Empty account handling**: If the account column is empty, Koala uses a default account as a fallback. Consider filling in accounts in iCost, or batch-edit accounts in the preview page.
5. **Category matching**: Koala matches by “parent + child” names. If matching fails, the preview page will show it as incomplete; select the correct category before importing.

## 🔧 FAQ

### Q1: “iCost header not found”.

Common reasons:

1. The header names can't be recognized (for example, exported with English headers that can't be mapped to “date / type / amount”)
2. The file is not an iCost export, or its structure was damaged by editing
3. The Excel file is empty or has no worksheet

> 📝 If only some header names can be recognized, Koala may open the “field mapping confirmation page”, where you can manually assign the field for each column before importing.

### Q2: Many records went into the same account.

This is expected if the “Account” column is empty. Koala uses a default account as a fallback. Edit accounts in the preview page, or export again after filling accounts in iCost.

### Q3: Categories don’t match.

On the preview page, tap a record and select the correct category manually; or create categories in Koala with the same names as in the iCost export, then parse again.

## 📚 Related Guides

- [Template Bill Import (CSV)](./01-template-bill-import-guide)
- [WeChat Bill Import](./02-wechat-bill-import-guide)
- [Alipay Bill Import](./03-alipay-bill-import-guide)
- [Pixiu Bill Import](./07-pixiu-bill-import-guide)
- [Multi-ledger](./04-multi-ledger-guide)

**Last updated**: September 2026
