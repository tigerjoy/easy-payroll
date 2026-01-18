// =============================================================================
// Core Entities
// =============================================================================

export interface User {
  id: string
  name: string
  email: string
  avatarUrl: string | null
  authProvider: 'email' | 'google' | 'facebook'
  isEmailVerified: boolean
  createdAt: string
  updatedAt: string
}

export interface Household {
  id: string
  name: string
  status: 'active' | 'archived'
  createdAt: string
  updatedAt: string
}

export interface Member {
  id: string
  userId: string
  householdId: string
  role: 'Admin' | 'Member'
  joinedAt: string
}

export interface Invitation {
  id: string
  householdId: string
  email: string
  role: 'Admin' | 'Member'
  status: 'pending' | 'accepted' | 'expired'
  sentAt: string
  expiresAt: string
}

// =============================================================================
// Employee Management
// =============================================================================

export interface Employee {
  id: string
  householdId: string
  name: string
  photo: string | null
  status: 'active' | 'archived'
  startDate: string
  holidayBalance: number
  phoneNumbers: PhoneNumber[]
  addresses: Address[]
  employmentHistory: EmploymentRecord[]
  salaryHistory: SalaryRecord[]
  documents: Document[]
  customProperties: CustomProperty[]
  notes: Note[]
  createdAt: string
  updatedAt: string
}

export interface PhoneNumber {
  number: string
  label: string
}

export interface Address {
  address: string
  label: string
}

export interface EmploymentRecord {
  role: string
  department: string
  startDate: string
  endDate: string | null
}

export interface SalaryRecord {
  amount: number
  paymentMethod: 'Cash' | 'Bank Transfer' | 'UPI' | 'Cheque'
  effectiveDate: string
}

export interface Document {
  name: string
  url: string
  category: 'ID' | 'Contract' | 'Certificate'
  uploadedAt: string
}

export interface CustomProperty {
  name: string
  value: string
}

export interface Note {
  content: string
  createdAt: string
}

// =============================================================================
// Attendance & Holidays
// =============================================================================

export type LeaveType = 'sick' | 'casual' | 'paid' | 'unpaid' | 'other'

export interface AttendanceRecord {
  id: string
  employeeId: string
  date: string
  type: LeaveType
  notes?: string
  createdAt: string
}

export interface InactivityPeriod {
  id: string
  employeeId: string
  startDate: string
  endDate?: string
  reason?: string
  createdAt: string
}

export type HolidayRuleType = 'fixed' | 'recurring'

export interface HolidayRule {
  id: string
  employeeId: string
  type: HolidayRuleType
  monthlyAllowance?: number
  weeklyOffDays?: number[]
  autoMarkAbsence: boolean
  createdAt: string
}

export interface PublicHoliday {
  id: string
  householdId: string
  date: string
  name: string
  type: 'public' | 'festival' | 'other'
}

// =============================================================================
// Payroll & Finance
// =============================================================================

export type PayrollItemType = 'Salary' | 'Advance' | 'Bonus' | 'Penalty' | 'Encashment'

export interface PayrollItem {
  id: string
  employeeId: string
  date: string
  type: PayrollItemType
  amount: number
  status: 'Pending' | 'Paid' | 'Cancelled'
  reference?: string
  receipts?: PaymentReceipt[]
  createdAt: string
}

export interface PaymentReceipt {
  id: string
  url: string
  fileName: string
  fileType: 'image' | 'pdf'
  uploadedAt: string
}

export interface Advance {
  id: string
  employeeId: string
  amount: number
  date: string
  repaidAmount: number
  status: 'active' | 'repaid' | 'cancelled'
  createdAt: string
}
