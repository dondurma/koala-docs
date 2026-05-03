# Exchange Rates

## 📋 Overview

Expense Tracker: Koala (“Koala”) supports multi-currency bills with exchange rate lookup and switching.

---

## 💰 What is the base currency?

The base currency is the main currency of your ledger. It is used for:

- Displaying amounts across the app
- Calculations in overview and statistics
- Showing exchange rates relative to the base currency

---

## 🚀 Change the base currency

### Option 1: From Currency Settings

1. Open Expense Tracker: Koala and go to **Settings**
2. Tap **Currency settings**
3. Tap **Base currency**
4. Select a new currency

Koala will refresh exchange rates and update amount display.

### Option 2: From Ledger Details

1. Open **Ledger management**
2. Open the ledger details
3. Tap **Ledger currency**
4. Select a new currency

---

## 📊 Exchange rate list

You can:

- Browse supported currencies
- See rates relative to the base currency
- Tap the refresh button to fetch the latest rates

> 💡 Tip:
> - Rates are fetched from the server via a third-party exchange-rate provider.
> - When offline, Koala uses cached rates.

---

## 💱 How exchange rates affect bills

- Koala converts amounts using the **current exchange rate**.
- If the exchange rate changes (for example after refresh), the converted display of historical bills may also change.
- The original transaction amount is not changed.

---

## 🔄 Caching

Koala caches exchange rates to improve performance.

- Cache is updated when you refresh rates or change base currency or ledger currency.

---

**Last updated**: May 2026
