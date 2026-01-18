# Attendance & Holidays Specification

## Overview
A "present by default" system for tracking household staff attendance and managing holiday entitlements within the current household. It focuses on recording exceptions (absences) and tracking a running holiday balance per Employment that carries forward month-to-month. The system automatically pauses tracking for employees during defined inactivity periods. **Note:** Only Monthly employees appear in this section — Ad-hoc employees do not have attendance or holiday tracking.

## User Flows
- **Daily Exception Marking:** View a list of all **Monthly** staff in the current household (defaulted to present); click to mark an "Absence" for those who didn't show up. Ad-hoc employees are excluded from this view.
- **Cross-Household Absence:** When marking an absence for an employee who works at multiple households (as Monthly), prompt to optionally apply the same absence to their other Monthly employments (useful for sick days or personal leave).
- **Holiday Entitlement:** Configure per-Employment rules for either a fixed monthly day count (e.g., 4 days) or a recurrence rule (e.g., "Every Sunday"). Rules are household-specific since different employers may have different arrangements.
- **Balance Tracking:** View the `holidayBalance` for each Monthly Employment directly on the attendance sheet to see how many days are left, used, or carried over for this household.
- **Inactivity Management:** Use "Mark Inactive" and "Mark Active" actions to define Inactivity Periods for long-term absences. Supports back-dating. When marking inactivity, prompt to optionally apply across all of the employee's Monthly employments.
- **Auto-Marking:** Toggle "Auto-mark Absence" for specific Monthly employments to automatically record absences on their scheduled work days based on their recurrence rule.

## UI Requirements
- **Main Attendance Sheet:** A list or grid view showing Monthly Employee Name, Current Status, and their **Running Holiday Balance** for this household. Ad-hoc employees are not shown.
- **Cross-Household Prompt:** When marking absence/inactivity, show option "Apply to all households?" with list of other households where the employee has Monthly employment.
- **Inactivity Actions:** Buttons to "Mark Inactive" and "Mark Active" with a date picker for back-dating the start or end of the period.
- **Holiday Rule Modal:** Interface to set monthly day counts or recurrence patterns, including the **Auto-mark Absence toggle**. Note: These rules are specific to this household.
- **Visual Status:** Distinct visual indicators for Absence (Red), Scheduled Holiday/Off-day (Gray), and Inactive (Amber).
- **History View:** A calendar or list showing past absences and inactivity periods for an employee at this household.

## Configuration
- shell: true
