import data from '@/../product/sections/attendance-and-holidays/data.json'
import type {
  AttendanceEmployment,
  AbsenceRecord,
  InactivityPeriod,
  HolidayRule,
  PublicHoliday
} from '@/../product/sections/attendance-and-holidays/types'
import { AttendanceCalendar } from './components/AttendanceCalendar'

export default function AttendanceCalendarPreview() {
  return (
    <AttendanceCalendar
      employments={data.employments as AttendanceEmployment[]}
      absenceRecords={data.absenceRecords as AbsenceRecord[]}
      inactivityPeriods={data.inactivityPeriods as InactivityPeriod[]}
      holidayRules={data.holidayRules as HolidayRule[]}
      publicHolidays={data.publicHolidays as PublicHoliday[]}
      selectedDate={data.selectedDate as string | undefined}
      onAddAbsence={(employmentId, date, reason) => console.log('Add absence:', { employmentId, date, reason })}
      onUpdateAbsence={(id, updates) => console.log('Update absence:', id, updates)}
      onRemoveAbsence={(id) => console.log('Remove absence:', id)}
      onAddPublicHoliday={(date, name) => console.log('Add public holiday:', { date, name })}
      onRemovePublicHoliday={(id) => console.log('Remove public holiday:', id)}
      onDateChange={(date) => console.log('Date changed:', date)}
    />
  )
}
