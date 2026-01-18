import { useState } from 'react'
import data from '@/../product/sections/attendance-and-holidays/data.json'
import { InactivityModal } from './components/InactivityModal'
import type { Employee } from '@/../product/sections/attendance-and-holidays/types'

export default function InactivityModalPreview() {
  const [isOpen, setIsOpen] = useState(true)

  // Create a mix of active and inactive employees for demo
  const employees: Employee[] = data.employments.map((emp, i) => ({
    ...emp,
    status: i === 1 ? 'inactive' : 'active', // Make second employee inactive for demo
  })) as Employee[]

  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(employees[0])

  const handleMarkInactive = (startDate: string, reason?: string) => {
    console.log('Mark inactive:', selectedEmployee.name, { startDate, reason })
  }

  const handleMarkActive = (endDate: string) => {
    console.log('Mark active:', selectedEmployee.name, { endDate })
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 p-8">
      {/* Employee selector for demo */}
      <div className="max-w-md mx-auto mb-8">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
          Inactivity Modal Preview
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Mark employees as inactive (for long-term absences) or reactivate them with back-dating support.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-stone-900 rounded-xl p-4 border border-stone-200 dark:border-stone-800">
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
              Select Employee
            </label>
            <select
              value={selectedEmployee.id}
              onChange={(e) => {
                const emp = employees.find(emp => emp.id === e.target.value)
                if (emp) setSelectedEmployee(emp)
              }}
              className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-200"
            >
              {employees.map(emp => (
                <option key={emp.id} value={emp.id}>
                  {emp.name} - {emp.role} ({emp.status})
                </option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-3 p-4 bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800">
            <img
              src={selectedEmployee.avatar || undefined}
              alt={selectedEmployee.name}
              className={`w-12 h-12 rounded-full object-cover ${selectedEmployee.status === 'inactive' ? 'grayscale' : ''}`}
            />
            <div className="flex-1">
              <p className="font-semibold text-stone-900 dark:text-white">{selectedEmployee.name}</p>
              <p className="text-sm text-stone-500">{selectedEmployee.role}</p>
            </div>
            <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
              selectedEmployee.status === 'inactive'
                ? 'bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400'
                : 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400'
            }`}>
              {selectedEmployee.status}
            </span>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className={`w-full px-4 py-3 rounded-xl font-semibold shadow-lg transition-all ${
              selectedEmployee.status === 'inactive'
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                : 'bg-amber-600 hover:bg-amber-700 text-white shadow-amber-600/20'
            }`}
          >
            {selectedEmployee.status === 'inactive' ? 'Open Mark Active Modal' : 'Open Mark Inactive Modal'}
          </button>
        </div>
      </div>

      {/* Modal */}
      <InactivityModal
        employee={selectedEmployee}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onMarkInactive={handleMarkInactive}
        onMarkActive={handleMarkActive}
      />
    </div>
  )
}
