# Alipay Bill Import Guide

## 📋 Overview

This guide shows how to export bills from Alipay and import them into Koala.

---

## 📱 Part 1: Export bills in Alipay

### Step 1: Open the bill page

1. Open Alipay
2. Tap **Me**
3. Tap **Bills**

> 📝 Note: The entry may differ by version. If you can’t find it, try searching “账单”.

### Step 2: Export

1. On the Bills page, tap **...** (top-right)
2. Choose **账单导出** or **开具交易流水证明**
3. Select **用户个人对帐**, then submit/apply
4. Choose the transaction type and date range
5. Choose delivery method (**Alipay** or **Email**)

> 💡 Tips:
> - Export up to 3 months at a time.
> - If delivered by email, download the CSV attachment.

---

## 📱 Part 2: Import into Koala

1. Open Koala → **Settings** → **Bill Import**
2. Set **Import source** to **Alipay**
3. Choose the exported **CSV** file
4. Link the target ledger
5. Tap **Parse** → review → **Import**

---

## 📋 Alipay CSV columns (for reference)

| Column name (as exported) | Meaning | Example |
|------|------|------|
| 交易时间 | Transaction time | 2024-01-01 12:00:00 |
| 交易分类 | Category | 餐饮美食 |
| 交易对方 | Counterparty | 张三 / 商户 |
| 对方账号 | Counterparty account | xxx@163.com |
| 商品说明 | Item description | 午餐 |
| 收/支 | Income/Expense | 收入 / 支出 |
| 金额 | Amount | 100.00 |
| 收/付款方式 | Payment method/account | 余额宝 |
| 交易状态 | Status | 交易成功 |
| 交易订单号 | Transaction order no. | ... |
| 商家订单号 | Merchant order no. | ... |
| 备注 | Note | ... |

---

## ⚠️ Notes

- Only **CSV** is supported for Alipay.
- Don’t rename/delete headers or add columns manually.
- If you export multiple files, import them one by one.

---

**Last updated**: May 2026
