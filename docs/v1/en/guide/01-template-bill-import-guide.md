# Template Bill Import Guide

## 📋 Overview

Koala supports importing bills from external files, which is useful when you migrate historical records. Supported import sources:

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

1. Open Koala
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

### Step 4: Link a ledger

1. Tap **Linked ledger**
2. Choose the ledger you want to import into

### Step 5: Parse, preview, and import

1. Tap **Parse** (top-right)
2. Review records on the preview page
3. Edit or delete invalid records if needed
4. Tap **Import**

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

---

## ⚠️ Notes

- **Date**: must be `YYYY/MM/DD` (e.g. `2026/01/01`)
- **Amount**: numeric, decimals supported (e.g. `100.00`)
- **Type**: must be `支出` (expense) or `收入` (income)
- **Category & account**: if missing in Koala, Koala may create them during import

---

## 📚 Related Guides

- [WeChat Bill Import](./02-wechat-bill-import-guide)
- [Alipay Bill Import](./03-alipay-bill-import-guide)
- [Multi-ledger](./04-multi-ledger-guide)

---

**Last updated**: Jan 2026

