# Template Bill Import Guide

## 📋 Overview

Expense Tracker: Koala (“Koala”) supports importing bills from external files, which is useful when you migrate historical records. Supported import sources:

- **Template file import**: import a standard CSV file
- **WeChat bill import**: import a bill file exported from WeChat
- **Alipay bill import**: import a bill file exported from Alipay
- **Pixiu bill import**: import a CSV file exported from Pixiu
- **iCost bill import**: import an Excel file exported from iCost

---

## 📁 Supported File Formats

- **CSV** (`.csv`): Alipay, Pixiu, Template
- **Excel** (`.xlsx`, `.xls`): WeChat, iCost

---

## 🚀 Quick Start

### Step 1: Open the import page

1. Open Expense Tracker: Koala
2. Tap **Settings**
3. Find **Bill Import**
4. Enter the bill import page

### Step 2: Choose the import source

- **Template file**: standard-format CSV
- **WeChat**: WeChat-exported bill file
- **Alipay**: Alipay-exported bill file
- **Pixiu**: Pixiu-exported bill file
- **iCost**: iCost-exported bill file

> ⚠️ **Important**: Choose the correct source, otherwise parsing may fail.

### Step 3: Pick a file

1. Tap **File path**
2. Select the file in the file picker
3. Confirm the file name is shown

> 📝 **Note**:
> - The file must be stored locally on the device (accessible via the file manager)
> - Make sure the file format is correct (CSV or xlsx)
> - Make sure the file is not corrupted

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the ledger you want to import into
3. Confirm the ledger selection

> 💡 **Tip**: If you only have one ledger, it will be automatically selected as the default.

### Step 5: Parse the file

1. Tap the **Parse** button in the top-right corner
2. Wait for the system to parse the file (this may take a few seconds)
3. After parsing succeeds, you will be automatically taken to the preview page

> ⚠️ **If parsing fails**:
> - Check that the file format is correct
> - Check that you selected the correct import source
> - Check that the file is not corrupted
> - Try re-exporting the file

### Step 6: Preview and edit

After parsing succeeds, you can do the following on the preview page:

- **View all bill records**: displayed grouped by date
- **Edit a single record**: tap a record to modify its category, amount, time, etc.
- **Delete invalid records**: long-press a record to delete it
- **Batch operations**: choose to skip invalid records

> 📝 **Recommendation**: Before importing, preview the data first and make sure it is correct.

### Step 7: Import data

1. After confirming the data on the preview page is correct
2. Tap the **Import** button
3. Wait for the import to complete (this may take a few seconds)
4. After a successful import, the result will be displayed

> ✅ **Import successful**: All valid records have been imported into the ledger. You can view them in the bill list.

---

## 📝 Template CSV Format

To import via template file, prepare a CSV in the format below.

### CSV requirements

1. **Encoding**: UTF-8 or GBK
2. **Delimiter**: comma `,`
3. **Header row**: required in the first line

### Example

```csv
日期,类型,金额,分类,账户,备注,标签
2024-01-01,支出,100.00,餐饮,现金,午餐,工作餐
2024-01-02,收入,5000.00,工资,银行卡,月薪,
```

### Field reference

| Field | Description | Required | Example |
|------|------|------|------|
| Transaction date | Bill date, format: `yyyy/MM/dd` | ✅ | 2026/01/01 |
| Transaction type | Expense or income | ✅ | 支出 / 收入 |
| Parent category | Level-1 category name | ✅ | 伙食 |
| Child category | Level-2 category name under the parent | ✅ | 早餐 |
| Inflow amount | Amount used when type is income | ✅ | 100.00 |
| Outflow amount | Amount used when type is expense | ✅ | 15 |
| Account | Account name (prefer an existing account) | ✅ | 默认账户 |
| Note | Bill note | ❌ | 午餐 |
| Tags | Tag names, separated by commas | ❌ | 工作餐,聚餐 |

### Download the Template File

1. On the import page, tap **Download Template File**
2. The system will download a sample CSV file
3. Use the template as a reference when preparing your data

---

## ⚠️ Notes

### 1. Data Format Requirements

- **Date format**: must be `YYYY/MM/DD` (e.g. `2026/01/01`)
- **Amount format**: numeric, decimals supported (e.g. `100.00`)
- **Transaction type**: must be "支出" (expense) or "收入" (income)
- **Category & account**: must already exist in the app; if missing, they will be created automatically during import

### 2. Data Validation

Before import, the system automatically validates data:

- ✅ **Valid records**: correct format, can be imported normally
- ⚠️ **Invalid records**: format errors, must be corrected before import
- ❌ **Skipped records**: you can choose to skip invalid records and import only valid data

### 3. Duplicate Data Handling

- Check for duplicate data before importing

### 4. Importing Large Data Sets

- If the data volume is large (over 1000 records), import in batches
- Keep the app in the foreground during import
- After import, manually trigger a data sync

---

## 🔧 FAQ

### Q1: Parsing failed?

**A:** Check the following:
1. Is the file format correct (CSV or xlsx)?
2. Did you select the correct import source?
3. Is the file corrupted?
4. Is the file encoding correct (UTF-8 recommended)?

### Q2: Data is incomplete after import?

**A:** Possible reasons:

1. Some records had format errors and were skipped by the system
2. Categories or accounts don't exist — create them first
3. Check invalid records on the preview page

### Q3: Can I import images?

**A:** Image import is not supported at this time.

### Q4: Can I edit records after import?

**A:** Yes. After import, you can edit or delete any record in the bill list.

### Q5: Can I import multiple files at once?

**A:** Not at this time. You can only import one file per session. If you need to import multiple files, do them one by one.

---

## 📚 Related Guides

- [WeChat Bill Import](./02-wechat-bill-import-guide)
- [Alipay Bill Import](./03-alipay-bill-import-guide)
- [Multi-ledger](./04-multi-ledger-guide)

---

## 💡 Tips

- Back up existing data before importing
- Verify data correctness after import
- If you have questions, contact the developer via the "Feedback" feature

---

**Last updated**: Jan 2026
