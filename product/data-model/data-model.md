# Data Model

## Entities

### Household
The primary organizational unit representing a home or family. It serves as the container for all staff, users, and records.

### User
An employer, administrator, or family member who has access to manage the household's staff and records.

### Employee
A domestic staff member (e.g., maid, cook, driver) employed by the household. Contains personal details, role, and current employment status.

### AttendanceRecord
A daily record tracking whether an employee was present or absent on a specific date.

### Payment
A financial transaction involving an employee. This handles all money movements including paying Salaries, giving Advances, awarding Bonuses, and receiving Repayments from employees.

### HolidayRule
A rule defining recurring off-days for an employee (e.g., "Every Sunday", "First Monday of month") to automate the expected attendance schedule.

## Relationships

- Household has many Users
- Household has many Employees
- User belongs to a Household
- Employee belongs to a Household
- Employee has many AttendanceRecords
- Employee has many Payments
- Employee has many HolidayRules
