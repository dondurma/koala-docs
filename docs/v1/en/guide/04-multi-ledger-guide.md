# Multi-Ledger

## 📋 Overview

Expense Tracker: Koala ("Koala") supports creating multiple ledgers, making it easy to manage different types of financial records. Each ledger can have its own name, currency, categories, and more — ideal for the following scenarios:

- **Personal ledger**: Track daily personal income and expenses
- **Family ledger**: Record shared household expenses
- **Travel ledger**: Log spending during trips
- **Baby ledger**: Track baby-related expenses
- **Car ledger**: Record automobile-related costs
- **Renovation ledger**: Log home renovation spending
- **Business ledger**: Track business income and expenses

---

## 🚀 Quick Start

### Create a New Ledger

1. Open Expense Tracker: Koala
2. Tap the **"Settings"** icon in the bottom navigation bar
3. Find the **"Ledger management"** option in the Settings page
4. Tap to enter the Ledger Management page
5. Tap the **"+"** button in the upper-right corner
6. Fill in the ledger information:
   - **Ledger name**: Enter a name (e.g., Personal, Family, etc.)
   - **Ledger description**: Optional — enter a description
   - **Ledger icon**: Choose an icon (optional)
   - **Ledger currency**: Select the currency for the ledger (e.g., CNY, USD, etc.)
7. Tap **"Save"** to finish creating the ledger

> 💡 **Tip**:
> - The ledger name can be changed at any time
> - The ledger currency can be changed on the ledger details page
> - Each ledger's data is independent and does not affect others

### Switch Ledgers

1. Open Expense Tracker: Koala
2. Tap the **"Settings"** icon in the bottom navigation bar
3. Find the **"Ledger management"** option in the Settings page
4. Tap to enter the Ledger Management page
5. Find the ledger you want to switch to in the list
6. Tap the ledger card to switch to it

> 📝 **Note**:
> - After switching ledgers, all pages (Overview, Statistics, Bill list, etc.) will display data for the selected ledger
> - Switching ledgers does not affect data in other ledgers
> - The current ledger is indicated by a badge on the ledger card

---

## 📚 Ledger Management

### View the Ledger List

On the Ledger Management page, you can:

- **View all ledgers**: All ledgers are displayed in a grid layout
- **View ledger info**: Each ledger card shows:
  - Ledger icon
  - Ledger name
  - Current ledger badge (if selected)
- **Quick switch**: Tap a ledger card to switch to it

### Edit a Ledger

1. On the Ledger Management page, find the ledger you want to edit
2. Tap the **"More"** button (three-dot icon) in the upper-right corner of the ledger card
3. Enter the ledger details page
4. You can modify:
   - **Ledger name**: Tap the name to edit
   - **Ledger description**: Tap the description to edit
   - **Ledger icon**: Tap the icon to choose a new one
   - **Ledger currency**: Tap the currency to switch
5. After making changes, tap **"Save"**

> ⚠️ **Note**:
> - Changing the ledger currency will adjust the display of all bill amounts accordingly
> - It is recommended to choose the correct currency when creating the ledger to avoid later changes

### Delete a Ledger

1. On the Ledger Management page, find the ledger you want to delete
2. Tap the **"More"** button on the ledger card
3. Enter the ledger details page
4. Tap the **"Delete ledger"** button
5. Confirm the deletion (the system will warn that this action cannot be undone)

> ⚠️ **Warning**:
> - Deleting a ledger also deletes all bill data within it
> - The ledger is removed from this device; if cloud sync is enabled, it will also be removed from the cloud during the next sync
> - This action cannot be restored inside the app — please proceed with caution
> - It is recommended to back up your data before deleting

---

## 💰 Ledger Currency Settings

### Set the Ledger Currency

Each ledger can have its own currency. You can:

1. **Set at creation**: Choose a currency when creating the ledger
2. **Change later**: Modify the currency on the ledger details page

### Currency Switching Details

When you switch the ledger currency:

- **Exchange rates update automatically**: The system fetches the latest exchange rate data
- **Amount display adjusts**: All bill amounts are displayed in the new currency
- **Exchange rate cache clears**: The system clears the old exchange rate cache to ensure data accuracy

> 📝 **Note**:
> - Switching the currency does not change the original amounts of your bills
> - The system automatically converts amounts based on the current exchange rate
> - If exchange rate data is unavailable, amounts may display incorrectly

### Multi-Currency Support

Expense Tracker: Koala supports a wide range of currencies, including:

- **Common currencies**: CNY (Chinese Yuan), USD (US Dollar), EUR (Euro), GBP (British Pound), JPY (Japanese Yen), and more
- **Other currencies**: Supports major currencies worldwide

> 💡 **Tip**: If your ledger needs to handle multi-currency transactions, it is recommended to:
> - Choose one primary currency as the ledger currency
> - Select the correct transaction currency when recording transactions
> - The system will automatically convert amounts to the ledger currency for display

---

## 📊 Ledger Data Isolation

### Data Independence

Each ledger's data is completely independent:

- **Bill data**: Each ledger has its own bill list
- **Category data**: Each ledger has its own category settings
- **Tag data**: Each ledger has its own tag settings
- **Statistics data**: Each ledger has its own statistics

> 📝 **Note**:
> - Account data is device-level and shared across all ledgers
> - This means you can use the same account in different ledgers

### Effects of Switching Ledgers

After switching ledgers:

- **Overview page**: Displays statistics for the current ledger
- **Statistics page**: Displays chart data for the current ledger
- **Bill list**: Displays bill records for the current ledger
- **Account list**: Displays all accounts (shared across ledgers)

---

## 🔄 Ledger Sync

### Cloud Sync Support

Expense Tracker: Koala supports cloud sync for ledgers:

- **Multi-device sync**: Sign in with the same account on different devices, and ledger data syncs automatically
- **Incremental sync**: Only changed data is synced for better efficiency
- **Conflict handling**: If multiple devices make changes simultaneously, the system prioritizes local unpushed changes

### Sync Timing

Ledger data is automatically synced at the following times:

- **App launch**: Automatically syncs the ledger list and current ledger data
- **Manual sync**: Tap the cloud sync button on the Settings page
- **After data changes**: Creating, editing, or deleting a ledger automatically marks it for sync

> 💡 **Tip**:
> - It is recommended to manually sync periodically to ensure data is up to date
> - If the network is unstable, you can retry syncing later

---

## 🎨 Ledger Type Descriptions

Expense Tracker: Koala includes several built-in ledger types, each with its own preset categories:

### Default Ledger (All Income & Expenses)

- **Expense categories**: Includes all expense categories (except certain specific ones)
- **Income categories**: Includes all income categories (except certain specific ones)
- **Best for**: General-purpose ledger, suitable for most scenarios

### Travel Ledger

- **Expense categories**: Transportation, Accommodation, Dining, Shopping, Entertainment, Other
- **Income categories**: Refunds, Other
- **Best for**: Tracking expenses during trips

### Baby Ledger

- **Expense categories**: Baby formula, Diapers, Toys, Education, Medical, Other
- **Income categories**: Red envelopes (gifts), Other
- **Best for**: Tracking baby-related expenses

### Car Ledger

- **Expense categories**: Fuel, Maintenance, Insurance, Repairs, Parking, Other
- **Income categories**: Other
- **Best for**: Tracking automobile-related costs

### Pet Ledger

- **Expense categories**: Food, Medical, Supplies, Grooming, Other
- **Income categories**: Other
- **Best for**: Tracking pet-related expenses

### Renovation Ledger

- **Expense categories**: Materials, Labor, Design, Furniture, Other
- **Income categories**: Other
- **Best for**: Tracking home renovation spending

### Wedding Ledger

- **Expense categories**: Wedding dress, Venue, Photography, Gifts, Other
- **Income categories**: Gift money, Other
- **Best for**: Tracking wedding-related income and expenses

### Social Etiquette Ledger

- **Expense categories**: Gift money, Dining out, Gifts, Other
- **Income categories**: Gift money, Other
- **Best for**: Tracking social gift-giving and reciprocity

### Business Ledger

- **Expense categories**: Inventory, Rent, Salaries, Taxes, Other
- **Income categories**: Sales revenue, Other
- **Best for**: Tracking business income and expenses

> 💡 **Tip**:
> - You can choose a ledger type when creating a ledger
> - Different ledger types come with different preset categories
> - You can also create a custom ledger and manually set up categories

---

## 🔧 FAQ

### Q1: How many ledgers can I create?

**A:** You can currently create up to **50** ledgers, but it is recommended to:
- Create ledgers based on actual needs — avoid creating too many
- Each ledger takes up storage space
- Having too many ledgers may affect app performance

### Q2: Can I delete a ledger?

**A:** Yes, but please note:
- Deleting a ledger also deletes all data within it
- The ledger is removed from this device; if cloud sync is enabled, it will also be removed from the cloud during the next sync
- This action cannot be restored inside the app — please proceed with caution
- It is recommended to back up your data before deleting

### Q3: Will ledger data be synced?

**A:** Yes. If you are signed in, ledger data is automatically synced to the cloud and can be accessed across multiple devices.

### Q4: Can I change the ledger type?

**A:** Changing the ledger type directly is not currently supported. If needed, you can:
- Create a new ledger with the correct type
- Migrate your data to the new ledger
- Delete the old ledger

### Q5: Are accounts ledger-based?

**A:** No. Accounts are device-level and shared across all ledgers. This means:
- You can use the same account in different ledgers
- Account balances are shared across all ledgers
- If you need different accounts for different ledgers, you can create multiple accounts with the same name (not recommended)

### Q6: Will switching ledgers affect other ledgers?

**A:** No. Each ledger's data is completely independent — switching ledgers does not affect data in other ledgers.

---

## 💡 Tips

1. **Organize wisely**: Create ledgers based on actual needs — avoid creating too many
2. **Clean up regularly**: Review your ledger list periodically and delete any you no longer need
3. **Back up data**: It is recommended to regularly back up important ledgers to prevent data loss
4. **Use clear names**: Choose descriptive ledger names for easy identification and management
5. **Choose the right currency**: Select the appropriate currency based on the ledger's purpose to avoid frequent switching

---

**Last updated**: January 2026
