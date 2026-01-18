# Staff Directory Specification

## Overview
A centralized hub for managing household staff within the current household context. Users can add new employees or link existing ones from other households they belong to, avoiding duplicate data entry. The directory displays staff in both card grid and table views, with full profile details on dedicated pages. Supports custom properties and notes for flexible record-keeping.

## User Flows
- View all staff in the current household in a card grid or table view (toggle between views)
- Search and filter staff by name, role, employment type, or other criteria
- **Add Staff Entry Points**: The "Add Staff" button provides a dropdown menu with two options:
    - **Create New**: Starts the blank wizard for a completely new employee.
    - **Link Existing**: Opens a selection flow to import a staff member from another household.
- **Link Existing Employee Flow**:
    - Displays a list of employees from all other households the user belongs to.
    - User can search this list by **name, phone number, or role**.
    - Selecting an employee links their existing Core Profile (name, photo, phone, address) to the current household.
    - Updates to the Core Profile in any household will reflect everywhere (Shared Data).
    - User then proceeds to configure **Employment Details** (Role, Salary, Start Date) specific to the current household.
- **Add New Staff Flow**: Multi-step wizard (Basic Info → Role → Documents → Salary → Custom Fields).
- **Employment Management**: Start Date is required. **Employment Type** (Monthly or Ad-hoc) determines tracking.
- View a staff member's full profile on a dedicated detail page.
- Edit staff details (Core profile edits affect all households; Employment edits are local).
- Archive an employment (soft delete from current household).
- Upload, preview, and categorize documents.
- Export staff list to CSV or PDF.
- Add custom properties and notes.

## UI Requirements
- Dashboard summary cards showing total staff count and roles breakdown.
- Toggle control to switch between card grid and table views.
- **Add Staff Button**: Primary action with a split button or dropdown menu ("Add New", "Link Existing").
- **Link Existing Modal**:
    - List view of candidate employees.
    - Search bar filtering by name, phone, etc.
    - Visual indicator that these are existing profiles.
- **Wizard Integration**: The "Link Existing" flow transitions into the standard wizard starting at the **Role** step (skipping Basic Info, or showing it as read-only/confirmable).
- **Shared Data Indicator**: UI banner or tooltip explaining that Basic Info changes are global across households.
- Card grid displays photo, name, role, holiday balance, employment type.
- Table view shows key columns including employment status.
- Employment Type selector (Monthly/Ad-hoc).
- Document management, Custom properties, Notes.
- Archive confirmation.

## Configuration
- shell: true
