# Cloud Backup and Sync

## 📋 Overview

Expense Tracker: Koala (“Koala”) provides cloud backup so your bills can be synced across devices when you sign in with the same account.

---

## ☁️ What is cloud backup?

Cloud backup uploads your data to the server to support:

- Data safety (device loss or damage)
- Multi-device sync
- Restoring data on a new device

> 💡 Tips:
> - Cloud backup requires signing in (currently supports Sign in with Apple).
> - Access control and data isolation are applied so only you can access your data.
> - Most syncing is automatic; you can also trigger it manually.

---

## 🔐 Sign in (Apple)

1. Open Expense Tracker: Koala and go to **Settings**
2. Tap the user card at the top
3. Tap **Sign in with Apple** and follow the prompts

---

## 🔄 Sync behavior

### Automatic sync

Koala syncs automatically in cases like:

- App launch (sync accounts and ledgers)
- After data changes (create, edit, delete bills)
- When switching ledgers (silently sync the current ledger data)

### Manual sync

1. Open **Settings**
2. Tap the cloud icon (top-right)
3. Keep the app in the foreground until it finishes

---

## 📊 What is synced

- Ledgers
- Bills
- Accounts
- Categories
- Tags

Not synced:

- App settings (theme and language)
- Cache data
- Personal preferences

---

## 🔄 Conflicts

- If a record has local changes that have not been uploaded, Koala keeps the local changes to avoid being overwritten.
- When both sides change the same record, Koala tries to keep the most recent change.

---

**Last updated**: May 2026
