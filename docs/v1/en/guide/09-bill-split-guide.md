# Bill Splitting

## 1. What this feature is

When a single purchase covers multiple purposes (for example, a “grocery” purchase that includes fruit and household items), you can split one bill into multiple sub-bills so category statistics are more accurate.

After splitting:

- You will see multiple “sub-bills” (each with its own category, amount, and note).
- The original bill becomes a “split container” and is excluded from the list and totals to avoid double counting.

## 2. When to use it

- One payment includes multiple categories (food + daily essentials, transport + parking, etc.)
- You want more granular category stats or budget comparisons
- You want to allocate one receipt across different categories/tags

## 3. How to use it

1. Open the bill list and find the bill you want to split
2. Swipe left on the bill and select **Split**
3. On the **Split Bill** page:
   - Tap **Category** to choose a category for each sub-item
   - Tap **Amount** to enter the amount for each sub-item
   - Notes are optional (for additional context)
   - Tap **Add Item** if you need more rows
4. Make sure **Remaining amount to allocate** is 0 (the sum of sub-items matches the original amount)
5. Tap **Done/Save** in the top-right corner

## 4. Rules and notes

- The sum of sub-item amounts must equal the original bill amount; otherwise you can’t save.
- Each sub-item must have a category and an amount greater than 0.
- Statistics are calculated from sub-bills; the original bill is not included.
- Multi-level splitting is supported: a sub-bill can be split again. Totals are calculated from the final (leaf) sub-bills.
- Bill splitting and reimbursements are mutually exclusive: expenses marked as reimbursable/pending reimbursed/reimbursed can’t be split; bills that have been split can’t start the reimbursement flow. Decide whether the expense needs reimbursement first, then choose whether to split it.

## 5. FAQ

### Q1: Where did the original bill go after splitting?

To prevent double counting, the original bill is marked as a “split container” and typically won’t appear in the list. Statistics are calculated from the sub-bills.

### Q2: Can I split only part of the bill?

Yes. You can keep one line as “Other / original category” and set its amount to the remainder. The key requirement is that the sub-item totals equal the original amount.

### Q3: Can I edit it after splitting?

In most cases, it’s best to edit the sub-bills directly (amount/category/note). If you need to re-split, a common approach is to delete the related sub-bills and split again.
