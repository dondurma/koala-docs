# Bill Refunds

## 1. What this feature is

Refunds are used to record the cash flow when a bill is refunded, and to automatically offset its impact in statistics.

Koala does this by creating an additional “refund record” with a negative amount based on the original bill:

- If the original bill is an expense, the refund record is also an expense, but with a negative amount to offset the original expense.
- If the original bill is an income, the refund record is also an income, but with a negative amount to offset the original income.

Refund records are automatically tagged with **Refund** for easier filtering and review.

## 2. When to use it

- Shopping refunds / returns
- Partial refunds
- Income reversals (for example, a transfer being revoked or a payment being returned)

## 3. How to use it

1. Open the bill list and find the bill you want to refund
2. Swipe left on the bill and select **Refund**
3. On the refund page, set:
   - Amount: defaults to the original amount; you can change it for a partial refund
   - Date: defaults to today; change it to the actual refund date if needed
   - Tags: inherits the original bill’s tags and automatically adds the **Refund** tag
   - Note: optional, for additional context
4. Tap **Confirm/Done** to save

After saving, a new refund record appears in the list to offset the corresponding amount impact.

## 4. Rules and notes

- Enter the amount that was actually refunded; you don’t need to type a minus sign.
- Both expense refunds and income refunds are recorded as negative amounts, so they automatically offset totals.
- Multiple refunds are supported: if the same bill is refunded in multiple parts, you can repeat the process and create one refund record per refund.
- If you delete a refund record, its offset effect will also be removed (statistics return to the pre-refund state).

## 5. FAQ

### Q1: How do I record a partial refund?

Change the amount on the refund page to the refunded amount. You can also refund multiple times and enter each refunded amount separately.

### Q2: Does a refund change the original bill?

The original bill amount is not modified. A refund is implemented by adding a separate refund record. This preserves the original spending record while keeping statistics explainable and traceable.

### Q3: How can I quickly find all refunds?

Refund records are automatically tagged with **Refund**, so you can filter/search by that tag.
