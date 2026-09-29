# Bill Export Guide

## 📋 Overview

You can export bills as a CSV file for backup, or to migrate them to another bookkeeping tool.

> ⚠️ **Membership feature**: Bill export requires a membership. Free users can learn about it and subscribe on the membership page — see the Membership Guide for details.

---

## 🚀 How to Export

1. Open Expense Tracker: Koala and go to **“Settings”**
2. Find and tap **“Bill Export”**
3. Set the export options as needed:
   - **Time range**: choose the start and end dates to export
   - **Specific account**: export bills for only one account (optional)
   - **Specific ledger**: choose the ledger to export
4. Tap **“Export”** in the top-right corner
5. Koala generates a CSV file and opens the system share/save sheet, so you can save it locally or send it to another app

---

## 📄 Export Format

- Currently **only CSV export** is supported
- Exported columns: Transaction Date, Transaction Type (expense/income), Parent Category, Child Category, Income Amount, Expense Amount, Account, Tags, Remark
- The date format is `yyyy/MM/dd`, consistent with the template import headers, so the exported file can be re-imported via “Template Bill Import”

> 📝 **Note**: The export uses headers in the current app language; you can open it directly in spreadsheet software (such as Excel / Numbers) or save it as Excel.

---

## ⚠️ Notes

- Deleted bills are not exported; **the split container (original bill) is not exported** — only the sub-bills after splitting are exported
- Refund records are exported with a negative amount; reimbursement deposits are exported as an income record
- If you don’t specify a “Specific account”, bills for all accounts in the selected ledger are exported

---

## 🔧 FAQ

### Q1: Why is the export CSV instead of Excel?

Currently only CSV export is provided. CSV can be opened directly by most spreadsheet software, and can also be saved as Excel.

### Q2: What determines the export range?

It is determined by “time range + specific account + specific ledger”; if no time range is selected, all bills in that ledger are exported.

### Q3: Can the exported file be imported back?

Yes. The export headers are consistent with the “Template Bill Import” headers, so you can re-import it following the Template Bill Import Guide (review it on the preview page before importing to avoid duplicate data).

---

## 📚 Related Guides

- [Template Bill Import Guide](./01-template-bill-import-guide)
- [Membership Guide](./19-membership-guide)

---

**Last updated**: September 2026
