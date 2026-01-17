// =============================================================================
// Data Types
// =============================================================================

export type LeaveType = 'sick' | 'casual' | 'paid' | 'unpaid' | 'other'
export type HolidayType = 'public' | 'festival' | 'other'

export interface Employee {
  id: string
  name: string
  role: string
  avatar: string
  status: 'active' | 'inactive'
  joiningDate: string
}

export interface LeaveRecord {
  id: string
  employeeId: string
  date: string
  type: LeaveType
  notes?: string
}

export interface Holiday {
  id: string
  date: string
  name: string
  type: HolidayType
}

export interface HolidayRule {
  employeeId: string
  dayOfWeek: number // 0 = Sunday, 1 = Monday, etc.
  type: 'weekly_off'
}

// =============================================================================
// Component Props
// =============================================================================

export interface AttendanceAndHolidaysProps {
  /** List of active employees to track attendance for */
  employees: Employee[]

  /**
   * List of leave exceptions.
   * If a date is NOT in this list and NOT a holiday/off-day,
   * the employee is assumed PRESENT.
   */
  leaveRecords: LeaveRecord[]

  /** Public holidays applicable to everyone */
  holidays: Holiday[]

  /** Recurring weekly off rules (e.g. Sundays) */
  holidayRules: HolidayRule[]

  /** Selected date for the daily view */
  selectedDate?: string

  /** Called when user marks an employee as absent/leave for a specific date */
  onAddLeaveRecord?: (record: Omit<LeaveRecord, 'id'>) => void

  /** Called when user updates an existing leave record (e.g. changing type) */
  onUpdateLeaveRecord?: (id: string, updates: Partial<LeaveRecord>) => void

  /** Called when user removes a leave record (marking them as Present again) */
  onRemoveLeaveRecord?: (id: string) => void

  /** Called when user adds a new public holiday */
  onAddHoliday?: (holiday: Omit<Holiday, 'id'>) => void

  /** Called when user removes a public holiday */
  onRemoveHoliday?: (id: string) => void

  /** Called when user navigates to a different month/day */
  onDateChange?: (date: string) => void
}
