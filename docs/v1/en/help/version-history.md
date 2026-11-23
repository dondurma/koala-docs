# Release Notes

> This page records what’s new in each Koala release and is maintained in reverse chronological order (latest first).

## 2026-11-23 v1.2.1 (40)

### Added

1. Budgets are here: monthly and category budgets, a progress bar on Overview you can tap to open that month, carry-over and overspend deduction, and customizable tier colors, and tapping a category budget shows that category's bills for the month. A membership feature.
2. Budgets sync across your devices with your account, so a new phone picks up where you left off.
3. A new "Business Trip" ledger with income and expense categories preset for travel.
4. Long-press to reorder subcategories in Category Management and accounts on the Assets page — the record screen follows the new order.
5. The app now tells you once when a new version is on the App Store, with a one-tap link to update.
6. A new "Our other apps" entry in Settings.

### Fixed

1. The income and expense arrows on the Overview page pointed the wrong way — fixed.
2. Tapping a color in the brand-color picker did nothing; that's fixed. The four color pickers (brand, mood, income/expense, budget) now share one swatch style.
3. Deleting a category no longer leaves a nameless budget row behind.
4. The budget progress bar now fills the full row, and category amounts are right-aligned.
5. Budget changes now sync automatically after reopening the app, returning to the foreground, or while you stay on Overview — no more tapping sync.

## 2026-11-17 v1.2.0 (39)

### Fixed

1. A split bill syncing to another device no longer deducts the original amount from your balance twice.
2. Upgrading from a very old version no longer leaves you with no ledgers or an empty-looking ledger.
3. Recording with a Shortcut while the app isn't running in the background now opens the entry sheet on the first try.
4. iOS 27 renamed Accessibility in Settings, so the Shortcut setup steps now match the new name.
5. Hong Kong Traditional Chinese now uses local wording such as "設定", "輔助使用" and "捷徑".

## 2026-11-14 v1.1.5 (38)

### Added

1. Refunds can now be partial and repeated: the refund screen shows how much has been refunded and how much is left, and the original bill is marked as partially, fully, or over-refunded.
2. When refunding, you can now choose a different account — the original bill and its refund no longer have to sit in the same account.

### Fixed

1. Membership now unlocks properly after redeeming an offer code or purchasing on devices where availability checks previously failed.
2. Deleting a bill or an account no longer leaves related refund or reimbursement entries behind, and balances are no longer overstated.
3. Split bills keep their parent-child link after switching devices or reinstalling, and deleting the child bills no longer leaves the parent behind.
4. The read-only prompt for refunded or reimbursed bills now appears reliably, and reimbursement labels no longer disappear when the entry falls on another day or account.
5. Fixed a crash in the iOS widget on some system versions.
6. The "Telephone" icon label now displays correctly.

## 2026-11-03 v1.1.4 (37)

### Added

1. A new Message Center in Settings: when announcements are updated, the icon shows a red dot — tap it to read what's new.
2. After your 100th bill or a successful import, the app may invite you to rate it on the App Store at a good moment.
3. When a non-member taps a members-only feature, an explanation dialog comes up first — the membership page only opens after tapping "Learn about membership," so a single tap won't take you there.
4. Help pages opened inside the app no longer repeat the website's top navigation, so reading is cleaner.

### Fixed

1. Refunding the same bill twice now records it only once instead of double-counting.
2. Refunds now stop you early on already-refunded bills, a zero amount, or an amount above the original bill — no more filling everything in just to fail.
3. After you dismiss the multi-currency membership prompt, you no longer get a false "currency update failed" message.
4. With the Kraft Paper theme, turning off the retro font now restores the normal switch style instead of retro brackets everywhere.
5. The success count after importing bills is now accurate: skipped records are no longer counted as imported.

## 2026-10-28 v1.1.3 (36)

### Added

1. Lifetime Membership: choose monthly, yearly, or a one-time Lifetime purchase, and upgrade anytime from your membership page — pay once and it stays yours.
2. New "Redeem Offer Code" on the membership page — enter a code and your membership is activated right away.
3. Transfer records for an account can now be viewed month by month, with previous/next month and one-tap back to this month.
4. All switches in the Kraft Paper theme now use a retro bracket style that fits the paper look.

### Fixed

1. Tapping "Done" repeatedly while splitting a bill no longer splits it twice, and a split with only one item can't be saved — your original bill stays intact.
2. If one account has invalid data, your other accounts and transfers keep syncing instead of the whole round getting stuck, and the sync status now shows how many were skipped.
3. Fixed some records staying "pending" and retrying over and over even though they had already synced.
4. After you delete a bill, transfer, or account, balances and related data no longer linger or get deducted twice on your other device.
5. The default date when you add a bill now follows the date you're viewing, so entries made in a past month show up right away.
6. If a membership purchase can't be confirmed, the page no longer freezes — it tells you the status is syncing and returns, and you can't start a purchase while signed out anymore.
7. Unified dialog backgrounds and button corners in dark mode — no more jarring mismatches.
8. Some switch rows on the Settings and record screens are no longer taller than their neighbors, and the whole row is tappable.
9. Account bill and transfer lists now show a message when loading fails, and you can tap to retry.
10. Typing quickly in bill search no longer lets an older result overwrite the newest one.

## 2026-10-14 v1.1.2 (34)

### Added

1. Custom account icons: pick an icon or type your own emoji when you create or edit an account.
2. New "Keypad Haptics" switch: your number keypad gives a light vibration (turn it off anytime in Settings), and keys now show a press effect on a quick tap.
3. Refreshed profile card backgrounds: new styles include Sparse Branch, Lush Leaves, Plain Paper, Matte Clay, Kraft Paper and Light Wood — plus a "None" option.

### Fixed

1. You can now remove the "Reimbursable" tag while editing a bill.
2. If a reimbursement entry already exists, removing the "Reimbursable" tag now shows a prompt instead — keeping your records consistent.

## 2026-10-12 v1.1.1 (33)

### Added

1. In grid mode, the icon now flies into the calculator when you pick a subcategory — a little more fun to use.

### Fixed

1. Fixed reimbursement entries occasionally duplicating or mismatching when two devices record at the same time.
2. Fixed the subcategory panel sometimes staying on the previous category after switching categories in line mode.
3. Fixed the Currency & Exchange Rate page showing mixed-up groups after switching languages.
4. Fixed the profile card briefly going blank during Apple sign-in — it now shows "Signing in...".
5. Removed the redundant "Common" entry from the income/expense picker for a cleaner category list.
6. Fixed some interface copy.
7. Fixed the bottom navigation bar not responding after you delete your account and re-enter the app.

## 2026-10-05 v1.1.0 (32)

### Added

1. New "Kraft Paper" theme — a vintage paper feel that gives the whole app more character.
2. New Retro Font and Corner Radius settings, so you can adjust the style in a tap.
3. New card backgrounds to dress up your profile page.
4. New bill receipt: turn your bills into a beautiful receipt and share it in one tap.
5. Improved User Guide, with a "?" help entry added to the title bar on several pages.
6. Items now sort by how often you use them, so your favorites come first.
7. Clearer sync status — you’ll see a hint when some data hasn’t been synced yet.
8. Updated the app icon.

### Fixed

1. Greatly improved the parsing speed of bill import — no more long waits for large files.
2. Fixed some UI and copy details.

## 2026-09-26 v1.0.7 (31)

### Fixed

1. Fixed reimbursement entries disappearing on their own — they now stay even after switching devices or reinstalling.
2. Fixed sync carrying over failed items from a previous account after you sign in with a new one.
3. Fixed sync occasionally hanging for a long time, or a whole batch of bills failing to load.
4. Fixed some category, tag and transfer changes not syncing, or showing differently across two devices.

## 2026-09-15 v1.0.2 (25)

### Fixed

1. Fixed double-counting of amounts for split bills in tag statistics and export.
2. Fixed scheduled accounting continuing to create bills after the configured end date.
3. Fixed subcategories not syncing to other devices after being moved to another category.
4. Improved the stability of bill list scrolling and page back navigation.
5. Fixed some Korean copy.

## 2026-09-10 v1.0.1 (24)

### Fixed

1. Fixed the lag issue when deleting bills on the Bill Import - Data Preview page.

## 2026-09-02 v1.0.0 (23)

### Added

1. Batch bill editing.

## 2026-05-22 v1.0.0

### Added

1. Bill import: template / WeChat / Alipay / Pixiu / iCost.
2. Multi-ledger management and switching.
3. Base currency and exchange rate display switching.
4. Cloud backup and sync.
5. Bill splitting, refunds, reimbursements, and scheduled accounting.
6. Charts, FAQ, and help documentation.
