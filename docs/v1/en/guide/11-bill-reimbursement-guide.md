# Bill Reimbursements

## 1. What this feature is

Reimbursement is used for cases where you first pay an expense and later get the money paid back by someone else or by your company (for example, travel, office supplies, or out-of-pocket expenses).

In Koala, the core logic is:

- You record an **expense** and mark it as **reimbursable**
- When it is reimbursed, Koala automatically creates a **Reimbursement Income** bill and adds the reimbursed amount back into the account you choose

Benefits:

- The original expense is preserved (easy to trace what the money was for)
- The reimbursement payout is recorded (easy to reconcile the deposit account and date)
- Statistics stay clear: the expense and the reimbursement income are recorded separately

## 2. When to use it

- Company reimbursements (transportation, hotels, meals, office supplies, etc.)
- Someone paid on your behalf and later transferred money back to you
- Any expense you paid upfront that needs to be recovered later

## 3. How to use it

### 3.1 Create a reimbursable expense

1. Create a new expense bill
2. On the create/edit page, enable **Reimbursement** (or similar options like “Reimbursable / Pending reimbursement”)
3. After saving, the bill will show a status such as **Pending reimbursement** / **Reimbursed** in the list

### 3.2 Reimburse an expense

1. In the bill list, find an expense that is **Pending reimbursement**
2. Swipe left on the bill and select **Reimburse**
3. On the reimbursement page, set:
   - Amount: defaults to the original expense amount; change it to the actual reimbursed amount if needed
   - Date: defaults to today; change it to the actual deposit date if needed
   - Deposit account: choose the account that the reimbursement was paid into
   - Note: optional
4. Tap **Done/Save**

After saving, a new **Reimbursement Income** bill will be added to record the payout.

## 4. Rules and notes

- Only **expenses** that are marked as **reimbursable** can be reimbursed.
- Bill splitting and reimbursements are mutually exclusive: split bills (including split sub-bills and split containers) can’t start the reimbursement flow; reimbursable expenses can’t be split. Decide whether reimbursement is needed first. If necessary, split the cost first, then record the reimbursable part as a separate reimbursable expense.
- Once a **Reimbursement Income** record has been created, the original expense typically can’t be reimbursed again (to avoid double deposits).
- If you delete the **Reimbursement Income** record, the original expense returns to **Pending reimbursement** (and can be reimbursed again).
- Reimbursement income is counted as income in statistics, while the original expense is still counted as expense. This keeps cash flow clear and traceable.

## 5. FAQ

### Q1: What’s the difference between reimbursement and refund?

- Refund: a return that offsets the original bill (implemented by adding a negative-amount record)
- Reimbursement: getting money back for a reimbursable expense (implemented by adding a Reimbursement Income record)

### Q2: What if the reimbursement was paid into a different account?

On the reimbursement page, set the **Deposit account** to the actual account that received the money.

### Q3: How do I record a partial reimbursement?

Change the reimbursement amount to the amount actually reimbursed. The remaining unreimbursed part stays on the original expense for later follow-up.
