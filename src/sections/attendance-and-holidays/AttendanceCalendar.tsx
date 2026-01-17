import data from '@/../product/sections/attendance-and-holidays/data.json'
import { AttendanceCalendar } from './components/AttendanceCalendar'
import type { LeaveRecord, Holiday } from '@/../product/sections/attendance-and-holidays/types'

export default function AttendanceCalendarPreview() {
  return (
    <AttendanceCalendar
      employees={data.employees as any}
      leaveRecords={data.leaveRecords as LeaveRecord[]}
      holidays={data.holidays as Holiday[]}
      holidayRules={data.holidayRules as any}
      onAddLeaveRecord={(record) => console.log('Add leave record:', record)}
      onUpdateLeaveRecord={(id, updates) => console.log('Update leave record:', id, updates)}
      onRemoveLeaveRecord={(id) => console.log('Remove leave record:', id)}
      onAddHoliday={(holiday) => console.log('Add holiday:', holiday)}
      onRemoveHoliday={(id) => console.log('Remove holiday:', id)}
      onDateChange={(date) => console.log('Date changed:', date)}
    />
  )
}
