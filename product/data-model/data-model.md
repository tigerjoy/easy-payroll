# Data Model

## Entities

### User
Individual employers or family members who access the platform.

### Household
The primary container representing a home or employer unit. All staff and management logic are scoped to a household.

### Member
A join entity that links a User to a Household. It defines the access level (e.g., Admin or Member) for that specific household.

### Invitation
Tracks pending requests for new users to join a Household via their email address.

### Employee
Domestic staff members managed within a Household. Stores the `startDate` (when attendance tracking begins) and a running `holidayBalance`. Unused holiday entitlements from one month are automatically carried forward to the next, increasing the available balance.

### Attendance Record (Absence)
Records specific dates when an employee was absent. Each absence reduces the `holidayBalance`. The system assumes an employee is "present by default" unless an Absence record exists for a date.

### Inactivity Period
Blocks of time (start and end dates) when an employee is completely inactive (e.g., gone home for a few months). No attendance or absence is tracked during these periods.

### Holiday Rule
Defines the holiday entitlement for an employee. This can be a fixed number of days per month (e.g., 4 days) or a recurrence rule (e.g., "Every Sunday"). Includes a toggle to automatically mark an absence if the employee doesn't show up on a scheduled working day.

### Payroll Item
Financial entries related to an employee's compensation. This includes Base Salary, Advances, Bonuses, and Penalties. Penalties are calculated when "Absence" exceeds the monthly holiday entitlement and the user chooses to settle the difference financially rather than carrying it forward.

## Relationships

- **User** can belong to multiple **Households** (via **Member**).
- **Household** has many **Members**, **Invitations**, and **Employees**.
- **Employee** belongs to one **Household**.
- **Employee** has many **Attendance Records**, **Inactivity Periods**, **Holiday Rules**, and **Payroll Items**.
- **Holiday Rules** and **Attendance Records** update the **Employee's** running `holidayBalance`.
