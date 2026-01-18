# Payroll & Finance Specification

## Overview
A lightweight payroll system for calculating monthly salaries, managing advances, and settling holiday imbalances. It handles the logic for both excess absences (penalties) and unused leave entitlements (carry forward, encashment, or lapse) to ensure financial transparency between employers and household staff. Optional payment receipts (screenshots or PDFs) can be attached to any transaction as proof of payment.

## User Flows
- **Monthly Payroll Processing:** Review the calculated salary for each employee, including bonuses, penalties, and encashments.
- **Interactive Settlement (Excess Absences):** If an employee exceeds their holiday entitlement, choose whether to apply a financial penalty or carry the deficit forward to the next month.
- **Unused Leave Settlement:** For employees with a positive holiday balance at month-end, choose to:
    - **Carry Forward:** Roll the unused days into the next month's balance.
    - **Encashment:** Pay out the unused days as a bonus (calculated as daily rate × unused days).
    - **Lapse:** Expire the unused days so they do not carry over or get paid out.
- **Advance Management:** Record salary advances given to employees and track their repayment status.
- **Payment Ledger:** View a searchable history of all financial transactions (Salary, Advances, Bonuses, Penalties) for each employee.
- **Finalize Payment:** Mark a monthly payroll as "Paid" to settle the records and update the employee's financial history.
- **Attach Payment Receipt:** Optionally upload one or more receipt images (screenshots) or PDFs as proof of payment when finalizing a transaction or after payment.

## UI Requirements
- **Payroll Dashboard:** Summary of the current month's total payroll and pending actions.
- **Calculation Breakdown View:** A detailed breakdown for each employee (e.g., Base Salary + Bonuses + Encashments - (Penalty Days × Daily Rate)).
- **Settlement Workspace:** An interface to decide the fate of both excess absences and unused entitlements for each employee before finalizing payroll.
- **Payment Ledger Table:** A structured, searchable table showing payment history, dates, and transaction types.
- **Action Buttons:** Clear triggers for "Mark as Paid", "Record Advance", and "Add Bonus".
- **Receipt Upload Interface:** Upload button on transaction rows and payment finalization flow for attaching receipt images or PDFs.
- **Receipt Preview:** Thumbnail previews for uploaded images, PDF icon indicator for PDF attachments.
- **Receipt Gallery Modal:** Viewer to display all receipts attached to a transaction with ability to delete individual receipts.

## Configuration
- shell: true
