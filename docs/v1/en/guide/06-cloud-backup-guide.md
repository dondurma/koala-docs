# Cloud Backup

## 📋 Overview

Expense Tracker: Koala ("Koala") provides a cloud backup feature that lets you securely back up your bill data to the cloud and sync it across multiple devices. This guide will help you understand how to use cloud backup.

---

## ☁️ What Is Cloud Backup?

**Cloud backup** uploads your bill data to a cloud server to achieve:

- **Data safety**: Prevent data loss from device loss or damage
- **Multi-device sync**: Sign in with the same account on different devices and data syncs automatically
- **Data recovery**: Restore data to a new device from the cloud at any time

> 💡 **Tip**:
> - Cloud backup requires signing in to an account (currently supports Sign in with Apple)
> - The cloud applies access control and data isolation — only signed-in users can access their own data
> - In most cases, syncing happens automatically; you can also trigger it manually from the Settings page

---

## 🔐 Sign In

### Sign in with Apple

1. Open Expense Tracker: Koala
2. Tap the **"Settings"** icon in the bottom navigation bar
3. At the top of the Settings page, tap the user info card
4. If you are not signed in, sign-in options will appear
5. Tap **"Sign in with Apple"**
6. Follow the prompts to complete the Apple sign-in flow

> 📝 **Note**:
> - After signing in, your data will automatically start syncing to the cloud
> - The initial sync on first sign-in may take some time
> - Please ensure your network connection is stable

---

## 🔄 Cloud Sync Mechanism

### Automatic Sync

The system automatically syncs data at the following times:

- **App launch**: Automatically syncs account and ledger data
- **After data changes**: Creating, editing, or deleting bills automatically marks them for sync
- **When switching ledgers**: Silently syncs the current ledger's data (bills, categories, tags, etc.)

> 💡 **Tip**:
> - Automatic sync runs in the background and does not affect normal use
> - If the network is unavailable, data is stored locally and synced automatically when the network is restored

### Manual Sync

You can also trigger sync manually:

1. Open Expense Tracker: Koala
2. Tap the **"Settings"** icon in the bottom navigation bar
3. In the upper-right corner of the Settings page, tap the cloud sync icon (cloud icon)
4. Wait for the sync to complete (sync progress will be displayed)

> ⚠️ **Note**:
> - Manual sync requires being signed in
> - If you are not signed in, you will be prompted to sign in before syncing
> - Please keep the app in the foreground during the sync process

---

## 📊 Synced Content

### Data Types That Are Synced

Cloud backup syncs the following data:

- **Ledger data**: Ledger names, descriptions, currencies, icons, etc.
- **Bill data**: All bill records (including amounts, categories, tags, notes, etc.)
- **Account data**: Account names, balances, types, etc.
- **Category data**: Expense and income categories
- **Tag data**: Tag groups and tags

### Data That Is Not Synced

The following data is not synced to the cloud:

- **App settings**: Theme, language, and other local settings
- **Cache data**: Temporary cache data
- **User preferences**: Personal preference settings

---

## 🔒 Data Security

### Data Protection

- **Access control**: Only signed-in users can access their own data
- **Data isolation**: Data from different accounts is isolated and invisible to others
- **Security tip**: Please safeguard your Apple account and perform the initial sync on a stable network

### Data Isolation

- **User isolation**: Each user's data is completely isolated and invisible to others
- **Device isolation**: Data from different devices is linked through the user account
- **Ledger isolation**: Data from different ledgers is stored independently

---

## 🔄 Sync Flow

### Incremental Sync

Expense Tracker: Koala uses an incremental sync mechanism:

- **Sync only changes**: Only newly created, modified, or deleted data is synced
- **Better efficiency**: Reduces data transfer volume and improves sync speed
- **Saves bandwidth**: Especially suitable for mobile network environments

### Sync Status

Each record has a sync status:

- **Synced (0)**: Data has been successfully synced to the cloud
- **Pending sync (1)**: Data has changed and is waiting to sync
- **Pending delete (2)**: Data has been deleted and is waiting to sync the deletion

### Conflict Handling

If multiple devices modify the same record simultaneously:

- **Local priority**: If the local side has unsynced changes, the system prioritizes local changes to avoid being overwritten by cloud data
- **Latest change wins**: When both sides modify the same record, the system tries to keep the most recent change
- **Manual resolution**: If a conflict occurs, manual resolution may be needed

---

## 📱 Multi-Device Sync

### Device Requirements

- **Same account**: All devices must be signed in with the same account
- **Network connection**: A network connection is required to sync
- **App version**: It is recommended to use the latest version of the app

### Sync Steps

1. **Sign in on the new device**:
   - Open Expense Tracker: Koala
   - Sign in with the same Apple account
   - The system will automatically begin syncing data

2. **Wait for the sync to complete**:
   - The initial sync may take some time
   - You can check the sync status on the Settings page
   - Once the sync is complete, the data will appear on the new device

3. **Continue using the app**:
   - After the sync is complete, you can use the app normally on the new device
   - Data changes will automatically sync to other devices

> 💡 **Tip**:
> - It is recommended to avoid making large changes before the sync is complete
> - If the sync fails, you can trigger it manually
> - Make sure all devices are signed in with the same account

---

## 🔧 FAQ

### Q1: Is cloud backup free?

**A:** The cloud backup feature is currently free. However, premium features with additional storage or advanced functionality may be introduced in the future.

### Q2: How much storage space does my data use?

**A:**
- For most users, bill data is typically very small (a few MB to a few tens of MB)
- If the data volume is large, it may affect sync speed
- It is recommended to periodically clean up data you no longer need

### Q3: Can I disable cloud backup?

**A:** Yes. If you do not want to use cloud backup:
- Simply do not sign in (data will only be stored locally)
- However, this means you cannot sync across multiple devices
- It also means your data cannot be protected against device loss

### Q4: What if the sync fails?

**A:** You can try:
1. Check whether your network connection is working
2. Check whether you are signed in
3. Trigger the sync manually
4. If it still fails, try again later

### Q5: Can I recover historical data?

**A:**
- Data that has been synced to the cloud will be synced to a new device when you sign in with the same account
- If device data is lost, it can be restored from the cloud
- Deleted data generally cannot be recovered inside the app — please proceed with caution

### Q6: Will syncing affect performance?

**A:**
- Syncing runs in the background and does not noticeably affect performance
- Syncing large amounts of data may take some time
- It is recommended to perform the initial sync over Wi-Fi

### Q7: Can I sync to multiple accounts?

**A:** No. Each device can only be signed in to one account, and data can only be synced to a single account.

### Q8: Will my data be lost if I uninstall the app?

**A:**
- If you were signed in and had synced, your data is preserved in the cloud
- After reinstalling the app and signing in, you can restore your data
- If you were not signed in, uninstalling the app will result in loss of local data

---

## 💡 Tips

1. **Sync regularly**: It is recommended to manually sync periodically to ensure your data is up to date
2. **Network environment**: It is recommended to perform the initial sync over Wi-Fi
3. **Back up data**: It is recommended to regularly export important data as a backup (CSV/Excel)
4. **Account security**: Protect your sign-in account to prevent unauthorized access
5. **Multi-device management**: If you use multiple devices, it is recommended to periodically check the sync status

---

## ⚠️ Important Notes

1. **Sign-in required**: Cloud backup requires signing in — it cannot be used without an account
2. **Network dependency**: Syncing requires a network connection — syncing is not possible offline
3. **Data security**: Although data is protected, you should still safeguard your sign-in account
4. **Sync delay**: Syncing may have some delay and is not instantaneous
5. **Data recovery**: Deleted data cannot be recovered — please proceed with caution

---

**Last updated**: May 2026
