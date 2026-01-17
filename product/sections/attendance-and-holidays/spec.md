# Attendance & Holidays Specification

## Overview
A comprehensive system for tracking staff presence and managing time off. It allows household managers to record daily attendance, manage various leave types (Paid, Sick, Unpaid, Casual), and configure holidays. The system assumes an admin-driven workflow where requests are handled verbally and recorded by the user.

## User Flows
- **Daily Marking:** default to "Present" for all active staff; user quickly toggles status for exceptions (Absent/Late) or bulk updates the list.
- **Leave Management:** User records leave dates and types for specific employees (no request/approval flow). Supports backdating and editing past records.
- **Holiday Configuration:** Users can define recurring off-days (e.g., Sundays) and specific public holidays via a settings interface or by clicking dates on the calendar.
- **Review:** Users switch between an aggregate calendar view (showing daily summary) and an employee-specific calendar to view individual history.

## UI Requirements
- **Dashboard/Overview:** Shows today's status list, summary stats (e.g., "3 Present, 1 Absent"), and upcoming holidays/leave.
- **Interactive Calendar:**
  - Toggle between "All Staff" (aggregate counts) and individual employee views.
  - Click on dates to add holidays or detailed attendance records.
- **Attendance Sheet/List:** A list view for quick daily marking with "Mark All Present" shortcut.
- **Leave/Holiday Modal:** Form to add leave ranges or define holiday details.
- **Visual Indicators:** distinct colors/icons for different statuses (Present, Absent, Sick, Holiday).

## Configuration
- shell: true
