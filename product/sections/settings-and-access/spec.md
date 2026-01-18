# Settings & Access Specification

## Overview
The control center for managing your HomeStaff account and collaborative environments. It allows users to manage multiple households, invite family members or stakeholders with specific roles, and configure administrative restrictions.

## User Flows
- **Household Management:** Create new households, switch between them, or rename existing ones.
- **Archive Household:** Admins can archive a household to remove it from active use while preserving its data. Households cannot be permanently deleted.
- **Member Invitations:** Invite others via email. If the user exists, they are added immediately; otherwise, a pending invitation link is generated.
- **Role Assignment:** Assign roles (Admin or Member) to household participants.
- **Access Control:** Admins manage who has access to sensitive sections like Payroll & Finance and can manage other members.
- **Personal Profile:** Update user name, email, and security settings.

## UI Requirements
- **Household Switcher/List:** A clear list of households the user belongs to with "Create New" and "Edit" actions.
- **Members Table:** Displays name, email, role, and status (Active/Pending) with actions to "Change Role" or "Remove Member".
- **Invite Modal:** Simple form for email address and role selection.
- **Permissions Overview:** Visual indicators showing that Admins have full access (Payroll, Members, Archive) while Members have restricted access.

## Configuration
- shell: true
