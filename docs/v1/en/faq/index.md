# FAQ

This page collects the most common questions and quick fixes when using Expense Tracker: Koala (“Koala”). If something goes wrong, start here.

---

## Bill Import

### Q: What bill sources are supported? Which file formats can I import?

**A:** Koala currently supports 5 sources:

- **Template import**: CSV (`.csv`)
- **WeChat bills**: CSV / Excel (`.csv` / `.xlsx` / `.xls`)
- **Alipay bills**: CSV (`.csv`)
- **Pixiu**: CSV (`.csv`)
- **iCost**: Excel (`.xlsx` / `.xls`) — iCost CSV is not supported

Related guides:

- [Template Bill Import Guide](../guide/01-template-bill-import-guide)
- [WeChat Bill Import Guide](../guide/02-wechat-bill-import-guide)
- [Alipay Bill Import Guide](../guide/03-alipay-bill-import-guide)
- [Pixiu Bill Import Guide](../guide/07-pixiu-bill-import-guide)
- [iCost Bill Import Guide](../guide/08-icost-bill-import-guide)

### Q: Why do I see “Parse failed / Open failed / Header not found”?

**A:** In most cases, it’s one of the following (from most common to less common):

1. **Wrong import source selected**: for example, parsing a WeChat file as Template/Alipay may fail immediately or shift fields.
2. **The file was edited**: opening in Excel/WPS and renaming headers, deleting/adding columns, or changing the delimiter is a very common cause.
3. **Unsupported export format**: for example, exporting iCost as CSV or using a non-standard Alipay export.
4. **Corrupted/incomplete file**: interrupted downloads, broken attachments, or content lost during sharing.
5. **File too large**: very large files may be slow to parse or fail; export by smaller time ranges and import in batches.

Best practice: re-export a fresh file from the original app (do not edit it), make sure the import source in Koala matches, then parse again.

### Q: Why is the imported amount 0 or incorrect?

**A:** Common causes:

- **Income/expense detection is wrong**: some sources use keywords to decide which amount column to read (e.g. Pixiu inflow/outflow). If the “type” field is abnormal, Koala may read the wrong column.
- **Amount field is empty or contains unexpected characters**: spaces or invisible characters can cause parsing issues.
- **Thousands separators / signs**: exports may include `+/-` or commas. Koala usually handles them, but “re-saved” files may end up in an incompatible format.

Recommendation: on the preview page, verify **type (income/expense)** and **amount** first. If it looks off, re-export the original file.

### Q: Categories/accounts/tags don’t match after import. What should I do?

**A:** Koala tries its best to match automatically, but different apps use different category structures, so 100% accuracy can’t be guaranteed.

- **Categories**: adjust per record in the preview page; for better matching, create categories in Koala with the same names as the export file, then parse again.
- **Accounts**: usually matched by account name/payment method; if not found, Koala may create a new account. Create common accounts ahead of time, and bulk-fix them in the preview page if needed.
- **Tags**: matched by tag name; missing tags may be created. Review for unwanted tag names (extra spaces/symbols).

### Q: Does Koala deduplicate imports automatically? What happens if I import the same file twice?

**A:** Strategies vary by source, but the safest assumption is: **no automatic deduplication**.

- Best practice: avoid importing the same file or the same time range multiple times; if you import in batches, keep time ranges non-overlapping.
- If duplicates were created: filter by time range in the bill list and delete duplicates manually.

### Q: How are refunds / transfers / red packets handled?

**A:** These records vary a lot across platforms. After import, it’s recommended to:

- Check **type (income/expense)** and **the sign of the amount** in the preview page
- Adjust categories when needed (e.g. map “Refund” to a refund/other-income category)
- Use the note field to trace details (status/order IDs are often appended into the note)

### Q: How much should I import at once? Import is slow.

**A:** Split by time range:

- For WeChat/Alipay, exporting up to **3 months** per file is usually more stable and faster.
- For large histories, export multiple files and import them one by one.
- Keep Koala in the foreground during import to reduce interruptions.

---

## Multiple Ledgers

### Q: My data “disappeared” after switching ledgers.

**A:** Most likely you switched to a different ledger. Bills, categories, tags, and statistics are isolated per ledger.

Recommendation: open **Ledger management** to confirm the current ledger, then check the bill list again.

### Q: What data is per-ledger and what is shared?

**A:**

- **Per-ledger**: bills, categories, tags, statistics
- **Shared on the device**: accounts (the same account can be used across ledgers)

### Q: What happens when I delete a ledger? Can I restore it?

**A:** Deleting a ledger removes it from this device. If cloud sync is enabled, the deletion will also be applied to the cloud after a sync. It cannot be restored inside the app, so please double-check before deleting.

---

## Currency & Exchange Rates

### Q: What is the base currency / ledger currency? What does it affect?

**A:** The base currency (ledger currency) is the main display currency for the current ledger. It affects:

- Amount display (converted for display)
- Overview and statistics calculations
- Exchange-rate list (shown relative to the base currency)

### Q: Why did the converted amounts of old bills change after refreshing rates?

**A:** Koala uses the **current exchange rate** for conversion display. After refreshing rates or changing the base currency, the **converted display** of historical bills may change, but the **original transaction amount** does not.

### Q: What happens when I’m offline? What if rate refresh fails?

**A:** Offline, Koala will try to use the last saved rates. If refresh fails:

1. Check your network connection
2. Try again later
3. If you edited rates manually, verify the values are what you expect

---

## Cloud Backup & Sync

### Q: Do I need to sign in for cloud backup? Which sign-in methods are supported?

**A:** Yes. Koala currently supports **Sign in with Apple**. You can sign in via the user card at the top of the Settings page.

### Q: What data is synced? What is not synced?

**A:**

- **Synced**: ledgers, bills, accounts, categories, tags
- **Not synced**: app settings (theme/language), cache, preferences

### Q: When does sync happen automatically? How do I sync manually?

**A:**

- **Automatic**: typically on app launch, after data changes, and when switching ledgers
- **Manual**: tap the cloud icon at the top-right of the Settings page

During manual sync, keep the app in the foreground until it finishes.

### Q: What if I edit the same record on multiple devices?

**A:** Koala tries to keep the newest change while also avoiding overwriting local edits that haven’t been uploaded yet. When using multiple devices, it’s best to let one device finish syncing before making large edits on another device.

### Q: Can I restore my data after reinstalling or switching devices?

**A:**

- **Signed in and synced**: reinstall and sign in with the same account, then wait for sync to restore data
- **Not signed in**: data is local-only, and uninstalling will remove it permanently

---

## Membership & Pricing

### Q: Why isn’t Koala offered as a one-time purchase?

**A:** Because I want Koala to be a long-term product that keeps improving, not a one-off transaction.

A membership model supports sustainable development: ongoing bug fixes, experience improvements, and continuous adaptation to OS updates and new devices, plus long-term investment in capabilities like sync, data safety, and performance. That way, you get an app that keeps getting better over time, instead of risking slow updates and unsustainable maintenance after a buyout.

---

## Feedback & Support

### Q: What should I include when reporting an issue?

**A:** The more complete the information, the easier it is to troubleshoot. Recommended:

- Import source (WeChat/Alipay/Pixiu/iCost/Template)
- File format (CSV/Excel) and exported time range
- Screenshot of the error message (if any)
- What you already tried (re-exporting, changing source, changing file, etc.)
