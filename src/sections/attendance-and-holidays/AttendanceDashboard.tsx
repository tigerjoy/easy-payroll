import { useState } from 'react'
import data from '@/../product/sections/attendance-and-holidays/data.json'
import { AttendanceDashboard } from './components/AttendanceDashboard'
import type { LeaveRecord, Holiday } from '@/../product/sections/attendance-and-holidays/types'

export default function AttendanceDashboardPreview() {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0])
  const [leaves, setLeaves] = useState<LeaveRecord[]>(data.leaveRecords as LeaveRecord[])
  const [holidays, setHolidays] = useState<Holiday[]>(data.holidays as Holiday[])

  return (
    <AttendanceDashboard
      employees={data.employees as any[]}
      leaveRecords={leaves}
      holidays={holidays}
      holidayRules={data.holidayRules as any[]}
      selectedDate={currentDate}
      onDateChange={setCurrentDate}
      onAddLeaveRecord={(record) => {
        console.log('Add leave:', record)
        const newRecord = { ...record, id: `lv-${Date.now()}` }
        setLeaves([...leaves, newRecord])
      }}
      onUpdateLeaveRecord={(id, updates) => {
        console.log('Update leave:', id, updates)
        setLeaves(leaves.map(l => l.id === id ? { ...l, ...updates } : l))
      }}
      onRemoveLeaveRecord={(id) => {
        console.log('Remove leave:', id)
        setLeaves(leaves.filter(l => l.id !== id))
      }}
      onAddHoliday={(holiday) => {
        console.log('Add holiday:', holiday)
        setHolidays([...holidays, { ...holiday, id: `hol-${Date.now()}` }])
      }}
      onRemoveHoliday={(id) => {
        console.log('Remove holiday:', id)
        setHolidays(holidays.filter(h => h.id !== id))
      }}
    />
  )
}
