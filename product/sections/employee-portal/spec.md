# Employee Portal Specification

## Overview
A public-facing, read-only portal that provides domestic staff with transparent access to their employment records. It allows employees to independently verify their attendance, holiday balance, and payment history using only their registered phone number for access.

## User Flows
- **Staff Access:** Simple entry point where staff enter their registered phone number to identify themselves and view their dashboard.
- **Record Verification:** Staff view their current `holidayBalance` and a summary of their attendance (absences) to ensure accuracy.
- **Financial Transparency:** Staff review their payment history, including base salaries received, any bonuses, and the status of advances.
- **Profile Review:** Staff can see their basic profile information as recorded by the employer (name, role, join date).

## UI Requirements
- **Simple Login:** A clean, mobile-first landing page with a single input for the phone number.
- **Staff Dashboard:** An easy-to-read summary showing the most important numbers (e.g., "Holidays Left: 4", "Last Payment: Jan 1st").
- **Activity Feed:** A chronological list of recent attendance events and payments.
- **Mobile-First Design:** Optimized for small screens and basic smartphones, ensuring high legibility and simple navigation.
- **Read-Only Interface:** No edit actions are provided; the portal is strictly for information display.

## Configuration
- shell: false
