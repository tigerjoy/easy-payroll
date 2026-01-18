# Attendance & Holidays Specification

## Overview
A "present by default" system for tracking household staff attendance and managing holiday entitlements. It focuses on recording exceptions (absences) and tracking a running holiday balance that carries forward month-to-month. The system automatically pauses tracking for employees during defined inactivity periods.

## User Flows
- **Daily Exception Marking:** View a list of all staff (defaulted to present); click to mark an "Absence" for those who didn't show up.
- **Holiday Entitlement:** Configure per-employee rules for either a fixed monthly day count (e.g., 4 days) or a recurrence rule (e.g., "Every Sunday").
- **Balance Tracking:** View the `holidayBalance` for each employee directly on the attendance sheet to see how many days are left, used, or carried over.
- **Inactivity Management:** Use "Mark Inactive" and "Mark Active" actions to define Inactivity Periods for long-term absences. This supports back-dating to ensure records are accurate.
- **Auto-Marking:** Toggle "Auto-mark Absence" for specific employees to automatically record absences on their scheduled work days based on their recurrence rule.

## UI Requirements
- **Main Attendance Sheet:** A list or grid view showing Employee Name, Current Status, and their **Running Holiday Balance**.
- **Inactivity Actions:** Buttons to "Mark Inactive" and "Mark Active" with a date picker for back-dating the start or end of the period.
- **Holiday Rule Modal:** Interface to set monthly day counts or recurrence patterns, including the **Auto-mark Absence toggle**.
- **Visual Status:** Distinct visual indicators for Absence (Red), Scheduled Holiday/Off-day (Gray), and Inactive (Amber).
- **History View:** A calendar or list showing past absences and inactivity periods for an employee.

## Configuration
- shell: true
