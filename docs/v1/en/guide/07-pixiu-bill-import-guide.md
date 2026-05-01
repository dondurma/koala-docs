# Pixiu Bill Import Guide

## 📋 Overview

This guide shows how to export bills from **Pixiu** and import them into **Koala**.

Koala currently supports **Pixiu CSV export** (CSV only).

---

## 📱 Part 1: Export in Pixiu

The menu name may differ by Pixiu version, but the flow is similar:

1. Open Pixiu
2. Go to **Me**
3. Find **Data export / Export bills**
4. Select a date range and export as **CSV**
5. Save the file to your device

---

## 📱 Part 2: Import into Koala

1. Open Koala and go to **Settings** then **Bill Import**
2. Set **Import source** to **Pixiu**
3. Choose the exported CSV file
4. Link the target ledger
5. Tap **Parse** then preview and tap **Import**

---

## 📋 Pixiu CSV format (validation)

- First row must be headers
- Must have **10 columns**
- Comma `,` as the delimiter

### Column definitions (in order)

| # | Meaning | Notes |
|---|---|---|
| 1 | Date | `yyyy-MM-dd` or `yyyy/MM/dd` (year >= 2016) |
| 2 | Parent category | Used to match Koala categories |
| 3 | Type | Must contain the keyword for expense or income |
| 4 | Child category | Used to match Koala categories |
| 5 | Inflow | Income amount |
| 6 | Outflow | Expense amount |
| 7 | Currency code | For example `CNY` or `USD` |
| 8 | Account | Account name (created if missing) |
| 9 | Tags | Comma-separated (`,` or `，`) |
| 10 | Note | Text |

---

## ⚠️ Notes

- Import does **not** deduplicate automatically. Importing the same file twice will create duplicates.
- Category matching is based on the parent and child names; you can fix unmatched items in the preview page.

---

**Last updated**: May 2026
