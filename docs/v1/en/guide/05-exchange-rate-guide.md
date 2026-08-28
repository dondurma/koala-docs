# Exchange Rates

## 📋 Overview

Expense Tracker: Koala ("Koala") supports multi-currency bookkeeping and provides real-time exchange rate lookup and switching. This guide will help you understand how to switch exchange rates, set the base currency, and how exchange rates affect bill display.

---

## 💰 What Is the Base Currency?

The **base currency** is the primary currency of your ledger. It is used for:

- **Unified display**: All bill amounts are converted to the base currency for display
- **Statistical calculations**: Overview and statistics page data is based on the base currency
- **Exchange rate benchmark**: The exchange rate list shows other currencies relative to the base currency

> 💡 **Example**:
> - If your base currency is CNY (Chinese Yuan), all bill amounts will be displayed in CNY
> - Even if you record a bill of 100 USD, the system will automatically convert it to CNY for display (e.g., 720 CNY)

---

## 🚀 How to Change the Base Currency

### Option 1: From the Currency Settings Page

1. Open Expense Tracker: Koala
2. Tap the **"Settings"** icon in the bottom navigation bar
3. Find the **"Currency settings"** option in the Settings page
4. Tap to enter the Currency Settings page
5. Tap the **"Base currency"** option at the top of the page
6. Select a new base currency from the currency picker
7. After confirming, the system will automatically:
   - Update the ledger's base currency setting
   - Fetch the latest exchange rate data
   - Refresh the amount display on all pages

> ⚠️ **Note**:
> - Changing the base currency will affect the display of all bill amounts
> - The system will automatically convert based on the latest exchange rate
> - If exchange rate data is unavailable, amounts may display incorrectly

### Option 2: From the Ledger Details Page

1. Open Expense Tracker: Koala
2. Go to the **"Ledger management"** page
3. Tap the **"More"** button in the upper-right corner of the ledger card you want to modify
4. Enter the ledger details page
5. Tap the **"Ledger currency"** option
6. Select a new currency from the currency picker
7. After confirming, the system will update automatically

> 📝 **Note**:
> - The ledger currency is the base currency
> - Changing the ledger currency is the same as changing the base currency
> - The change will affect the display of all bills in that ledger

---

## 📊 Exchange Rate List

### Viewing the Exchange Rate List

On the Currency Settings page, you can:

- **View all currencies**: All supported currencies are displayed in grouped sections
- **View exchange rates**: Each currency shows its rate relative to the base currency
- **Refresh rates**: Tap the refresh button in the upper-right corner to fetch the latest rates

### Exchange Rate Groups

The exchange rate list is organized as follows:

- **Base currency**: Displays the currently set base currency (rate is 1.0)
- **Common currencies**: Displays frequently used currencies (e.g., USD, EUR, GBP, JPY, etc.)
- **Alphabetical groups**: Other currencies are grouped by their first letter

### Exchange Rate Updates

The system updates exchange rates at the following times:

- **When changing the base currency**: Automatically fetches the latest rates
- **When manually refreshing**: Tapping the refresh button
- **When the ledger currency is updated**: Automatically fetches the latest rates and refreshes the display

> 💡 **Tip**:
> - Exchange rate data comes from the server, sourced via a third-party exchange rate provider
> - If the network is unavailable, cached exchange rate data will be used
> - It is recommended to refresh periodically to ensure rate accuracy

---

## 💱 How Exchange Rates Affect Bills

### Amount Display

When you record a multi-currency bill:

1. **Select the transaction currency**: Choose the actual transaction currency when recording the bill (e.g., USD)
2. **Enter the amount**: Enter the actual transaction amount (e.g., 100 USD)
3. **Automatic conversion**: The system automatically converts the amount to the base currency using the current exchange rate for display (e.g., 720 CNY)

### Statistical Calculations

All statistics and chart data are based on the base currency:

- **Overview page**: Displays total income and expenses in the base currency
- **Statistics page**: Chart data is based on the base currency
- **Category statistics**: Amounts for each category are converted to the base currency

> 📝 **Note**:
> - If the exchange rate changes, the displayed amounts of historical bills may also change
> - However, the original transaction amounts are not altered
> - The system uses the **current exchange rate** for conversion display (so after refreshing rates, the converted display of historical bills may also update)

---

## 🔄 Exchange Rate Caching

### Cache Details

To improve performance, the system caches exchange rate data:

- **Memory cache**: Cached in memory while the app is running
- **Database cache**: Persistently stored in the local database
- **Cache updates**: When you manually refresh or change the base currency / ledger currency, the system updates the exchange rates and clears the old cache

### Cache Clearing

The system clears the cache in the following situations:

- **When changing the base currency**: Clears all exchange rate caches
- **When manually refreshing**: Clears the old cache and fetches new data
- **When the ledger currency is updated**: Clears the exchange rate cache for that ledger

---

## ⚙️ Exchange Rate Settings

### Manually Adjust Exchange Rates

In some cases, you may need to manually adjust an exchange rate:

1. On the Currency Settings page, find the currency you want to modify
2. Tap the currency item to enter the exchange rate settings page
3. Enter the exchange rate value manually
4. After saving, the rate will be applied to all related calculations

> ⚠️ **Note**:
> - A manually set exchange rate will override the automatically fetched rate
> - It is recommended to manually adjust rates only when necessary
> - After manual adjustment, automatic updates may overwrite your changes

### Exchange Rate Precision

The system supports the following exchange rate precision levels:

- **Display precision**: The exchange rate list typically displays multiple decimal places
- **Calculation precision**: Internal calculations use higher precision
- **Amount display**: Final amounts are typically displayed with 2 decimal places

---

## 🔧 FAQ

### Q1: Will historical bill amounts change after switching the base currency?

**A:** Yes. After switching the base currency:
- All bill amounts will be reconverted and displayed in the new base currency
- However, the original transaction amounts will not change
- The system uses the **current exchange rate** for conversion display (so after switching the base currency or refreshing rates, the converted display of historical bills may also change)

### Q2: What if the exchange rate is inaccurate?

**A:** You can try:
1. Tap the refresh button to fetch the latest exchange rates
2. Check whether your network connection is working
3. If it is still inaccurate, you can manually adjust the exchange rate

### Q3: Can I set multiple base currencies?

**A:** No. Each ledger can have only one base currency. However, you can:
- Create multiple ledgers, each with a different base currency
- Record transactions in different currencies across different ledgers

### Q4: How often are exchange rates updated?

**A:**

- Exchange rate data is fetched by the server via a third-party provider; the update frequency depends on the server's strategy and the third-party data source
- The app fetches the latest rates when you change the base currency / ledger currency or manually refresh
- If the network is unavailable, cached exchange rate data will be used

### Q5: Which currencies are supported?

**A:** Expense Tracker: Koala supports major currencies worldwide, including:
- Common currencies: CNY, USD, EUR, GBP, JPY, AUD, CAD, and more
- Other currencies: 100+ currencies supported

### Q6: Where does the exchange rate data come from?

**A:** Exchange rate data comes from a third-party exchange rate API, fetched via the server proxy to ensure accuracy and stability.

### Q7: Will changing the base currency affect other ledgers?

**A:** No. Each ledger has its own independent base currency setting — changing the base currency of one ledger does not affect other ledgers.

---

## 💡 Tips

1. **Choose the right base currency**: Select a base currency that matches your primary transaction currency to minimize conversion errors
2. **Refresh rates regularly**: It is recommended to refresh exchange rates periodically to ensure data accuracy
3. **Use multiple ledgers**: If you frequently deal with multiple currencies, consider creating separate ledgers with different base currencies
4. **Manual adjustments**: If the automatic exchange rate is inaccurate, you can adjust it manually, but it is recommended to check periodically
5. **Back up data**: It is recommended to regularly back up important ledgers in case exchange rate data is lost

---

**Last updated**: May 2026
