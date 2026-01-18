# Employee Portal Specification

## Overview
A public-facing, read-only portal that provides domestic staff with transparent access to their employment records across all households they work for. It allows employees to independently verify their attendance, holiday balance, and payment history using only their registered phone number for access. The portal adapts its display based on employment type — Monthly employees see full attendance and holiday data, while Ad-hoc employees see only their payment history.

## User Flows
- **Staff Access:** Simple entry point where staff enter their registered phone number to identify themselves and view their dashboard.
- **Household Selection:** If the employee works for multiple households, display a list of their employments and allow them to select which household's records to view. Show employment type badge (Monthly/Ad-hoc) and relevant summary stats for each (holiday balance for Monthly; last payment for both).
- **Switch Household:** While viewing any household's records, staff can switch to a different household via a persistent household switcher in the header. This allows quick navigation without returning to the initial selection screen.
- **Monthly Employment View:** For Monthly employments, staff view their current `holidayBalance` and a summary of their attendance (absences) for the selected household to ensure accuracy, along with their full payment history.
- **Ad-hoc Employment View:** For Ad-hoc employments, staff see only their payment history (one-off payments recorded by the employer). No attendance or holiday information is displayed since Ad-hoc employees don't have these tracked.
- **Financial Transparency:** Staff review their payment history for the selected household, including base salaries received (Monthly), bonuses, advances and their repayment status (Monthly), or one-off payments (Ad-hoc).
- **Profile Review:** Staff can see their basic profile information as recorded (name, role, join date for the selected household) along with their employment type.
- **Cross-Household Summary:** Optionally show a combined overview of all employments with quick navigation between households, clearly indicating which are Monthly vs Ad-hoc.

## UI Requirements
- **Simple Login:** A clean, mobile-first landing page with a single input for the phone number.
- **Household Picker:** If the employee has multiple employments, show cards or list items for each household with employment type badge, key stats (holiday balance for Monthly, last payment amount/date for all), and visual distinction between Monthly and Ad-hoc employments.
- **Household Switcher:** A persistent control in the header (e.g., dropdown or tap-to-change) allowing staff to switch between households at any time while viewing records.
- **Employment Type Badge:** Visual indicator (e.g., "Monthly" or "Ad-hoc" chip) displayed prominently on the dashboard and household cards.
- **Staff Dashboard (Monthly):** Shows holiday balance, attendance summary, and recent payments (e.g., "Holidays Left: 4", "Absences This Month: 1", "Last Payment: Jan 1st").
- **Staff Dashboard (Ad-hoc):** Shows only payment-related information (e.g., "Total Payments: 12", "Last Payment: Jan 5th - ₹500"). No attendance or holiday sections are displayed.
- **Activity Feed:** A chronological list of recent events for the selected household — attendance events and payments for Monthly employees; payments only for Ad-hoc employees.
- **Mobile-First Design:** Optimized for small screens and basic smartphones, ensuring high legibility and simple navigation.
- **Read-Only Interface:** No edit actions are provided; the portal is strictly for information display.

## Configuration
- shell: false
