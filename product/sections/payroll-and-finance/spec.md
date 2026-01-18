# Payroll & Finance Specification

## Overview
A lightweight payroll system for calculating monthly salaries, managing advances, and settling holiday imbalances within the current household. Payroll is tracked per Employment — each household maintains independent salary and payment history for the same employee. It handles the logic for both excess absences (penalties) and unused leave entitlements (carry forward, encashment, or lapse) to ensure financial transparency between employers and household staff. Optional payment receipts (screenshots or PDFs) can be attached to any transaction as proof of payment.

**Employment Types:**
- **Monthly employees** appear in the monthly payroll processing flow with salary calculations, holiday settlements, and automated deductions.
- **Ad-hoc employees** are managed separately — they don't have a base salary, holidays, or automated calculations. Only manual payment records (one-off payments for work done) are tracked.

## User Flows
- **Monthly Payroll Processing:** Review the calculated salary for each **Monthly** Employment in the current household, including bonuses, penalties, and encashments. Ad-hoc employees are excluded from this flow.
- **Interactive Settlement (Excess Absences):** If a Monthly employee exceeds their holiday entitlement at this household, choose whether to apply a financial penalty or carry the deficit forward to the next month.
- **Unused Leave Settlement:** For Monthly employments with a positive holiday balance at month-end, choose to:
    - **Carry Forward:** Roll the unused days into the next month's balance.
    - **Encashment:** Pay out the unused days as a bonus (calculated as daily rate × unused days).
    - **Lapse:** Expire the unused days so they do not carry over or get paid out.
- **Advance Management:** Record salary advances given to Monthly employees and track their repayment status. Advances are per-Employment (household-specific).
- **Ad-hoc Payments:** Record one-off payments for Ad-hoc employees (description, amount, date). No salary calculation or holiday logic applies.
- **Payment Ledger:** View a searchable history of all financial transactions (Salary, Advances, Bonuses, Penalties, Ad-hoc Payments) for each Employment at this household.
- **Finalize Payment:** Mark a monthly payroll as "Paid" to settle the records and update the Employment's financial history.
- **Attach Payment Receipt:** Optionally upload one or more receipt images (screenshots) or PDFs as proof of payment when finalizing a transaction or after payment.

## UI Requirements
- **Payroll Dashboard:** Summary of the current month's total payroll and pending actions for the current household. Shows Monthly employees in main payroll section; Ad-hoc employees in a separate "Ad-hoc Payments" section or tab.
- **Calculation Breakdown View:** A detailed breakdown for each Monthly Employment (e.g., Base Salary + Bonuses + Encashments - (Penalty Days × Daily Rate)).
- **Settlement Workspace:** An interface to decide the fate of both excess absences and unused entitlements for each Monthly Employment before finalizing payroll.
- **Ad-hoc Payment Form:** Simple form to record a payment for an Ad-hoc employee (description of work, amount, date, optional receipt).
- **Payment Ledger Table:** A structured, searchable table showing payment history, dates, and transaction types for the current household. Includes filter for Monthly vs Ad-hoc.
- **Action Buttons:** Clear triggers for "Mark as Paid", "Record Advance", "Add Bonus" (Monthly), and "Record Payment" (Ad-hoc).
- **Receipt Upload Interface:** Upload button on transaction rows and payment finalization flow for attaching receipt images or PDFs.
- **Receipt Preview:** Thumbnail previews for uploaded images, PDF icon indicator for PDF attachments.
- **Receipt Gallery Modal:** Viewer to display all receipts attached to a transaction with ability to delete individual receipts.

## Configuration
- shell: true
