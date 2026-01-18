import { useState } from 'react'
import data from '@/../product/sections/attendance-and-holidays/data.json'
import { AttendanceDashboard } from './components/AttendanceDashboard'
import type {
  AttendanceEmployment,
  AbsenceRecord,
  InactivityPeriod,
  HolidayRule,
  PublicHoliday,
} from '@/../product/sections/attendance-and-holidays/types'

export default function AttendanceDashboardPreview() {
  const [currentDate, setCurrentDate] = useState(
    data.selectedDate || new Date().toISOString().split('T')[0]
  )
  const [absenceRecords, setAbsenceRecords] = useState<AbsenceRecord[]>(
    data.absenceRecords as AbsenceRecord[]
  )
  const [inactivityPeriods, setInactivityPeriods] = useState<InactivityPeriod[]>(
    data.inactivityPeriods as InactivityPeriod[]
  )
  const [publicHolidays, setPublicHolidays] = useState<PublicHoliday[]>(
    data.publicHolidays as PublicHoliday[]
  )

  return (
    <AttendanceDashboard
      employments={data.employments as AttendanceEmployment[]}
      absenceRecords={absenceRecords}
      inactivityPeriods={inactivityPeriods}
      holidayRules={data.holidayRules as HolidayRule[]}
      publicHolidays={publicHolidays}
      selectedDate={currentDate}
      onDateChange={setCurrentDate}
      onAddAbsence={(employmentId, date, reason, applyToOtherHouseholds) => {
        console.log('Add absence:', { employmentId, date, reason, applyToOtherHouseholds })
        const newRecord: AbsenceRecord = {
          id: `abs-${Date.now()}`,
          employmentId,
          date,
          reason,
          appliedToOtherHouseholds: applyToOtherHouseholds || false,
        }
        setAbsenceRecords([...absenceRecords, newRecord])
      }}
      onUpdateAbsence={(absenceId, updates) => {
        console.log('Update absence:', absenceId, updates)
        setAbsenceRecords(
          absenceRecords.map((a) => (a.id === absenceId ? { ...a, ...updates } : a))
        )
      }}
      onRemoveAbsence={(absenceId) => {
        console.log('Remove absence:', absenceId)
        setAbsenceRecords(absenceRecords.filter((a) => a.id !== absenceId))
      }}
      onMarkInactive={(employmentId, startDate, reason, applyToOtherHouseholds) => {
        console.log('Mark inactive:', { employmentId, startDate, reason, applyToOtherHouseholds })
        const newPeriod: InactivityPeriod = {
          id: `inact-${Date.now()}`,
          employmentId,
          startDate,
          reason,
          appliedToOtherHouseholds: applyToOtherHouseholds || false,
        }
        setInactivityPeriods([...inactivityPeriods, newPeriod])
      }}
      onMarkActive={(employmentId, endDate) => {
        console.log('Mark active:', { employmentId, endDate })
        setInactivityPeriods(
          inactivityPeriods.map((ip) =>
            ip.employmentId === employmentId && !ip.endDate
              ? { ...ip, endDate }
              : ip
          )
        )
      }}
      onAddPublicHoliday={(date, name) => {
        console.log('Add public holiday:', { date, name })
        const newHoliday: PublicHoliday = {
          id: `hol-${Date.now()}`,
          date,
          name,
        }
        setPublicHolidays([...publicHolidays, newHoliday])
      }}
      onRemovePublicHoliday={(holidayId) => {
        console.log('Remove public holiday:', holidayId)
        setPublicHolidays(publicHolidays.filter((h) => h.id !== holidayId))
      }}
    />
  )
}
