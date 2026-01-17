# Staff Directory Specification

## Overview
A centralized hub for managing household staff profiles. Users can add, edit, and archive employee records with a multi-step wizard. The directory displays staff in both card grid and table views, with full profile details on dedicated pages. Supports custom properties and notes for flexible record-keeping.

## User Flows
- View all staff in a card grid or table view (toggle between views)
- Search and filter staff by name, role, or other criteria
- Add a new staff member via a multi-step wizard (Basic Info → Role → Documents → Salary → Custom Fields)
- View a staff member's full profile on a dedicated detail page
- Edit staff details using the same multi-step wizard
- Archive a staff member (soft delete, data preserved)
- Upload, preview, and categorize documents (ID proofs, contracts, certificates)
- Export staff list to CSV or PDF
- Add custom properties to employee profiles (user-defined fields)
- Add and edit notes for each employee

## UI Requirements
- Dashboard summary cards showing total staff count and roles breakdown
- Toggle control to switch between card grid and table views
- Card grid displays photo, name, role, and key contact info
- Table view shows columns for name, role, phone, start date, status
- Multi-step form wizard with progress indicator
- Document management with file upload, inline preview, and type categories
- Custom properties section with ability to define field name and value
- Notes section on profile page with timestamped entries
- Archive confirmation dialog before soft-deleting

## Configuration
- shell: true
