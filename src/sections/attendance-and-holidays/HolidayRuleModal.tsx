import { useState } from 'react'
import data from '@/../product/sections/attendance-and-holidays/data.json'
import { HolidayRuleModal } from './components/HolidayRuleModal'
import type { Employee, HolidayRule } from '@/../product/sections/attendance-and-holidays/types'
import type { HolidayRuleConfig } from './components/HolidayRuleModal'

export default function HolidayRuleModalPreview() {
  const [isOpen, setIsOpen] = useState(true)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee>(data.employments[0] as Employee)

  const handleSave = (config: HolidayRuleConfig) => {
    console.log('Save holiday rules for', selectedEmployee.name, ':', config)
  }

  return (
    <div className="min-h-screen bg-stone-100 dark:bg-stone-950 p-8">
      {/* Employee selector for demo */}
      <div className="max-w-md mx-auto mb-8">
        <h1 className="text-2xl font-bold text-stone-900 dark:text-white mb-4">
          Holiday Rule Modal Preview
        </h1>
        <p className="text-stone-600 dark:text-stone-400 mb-6">
          Select an employee and open the modal to configure their holiday rules.
        </p>

        <div className="space-y-4">
          <div className="bg-white dark:bg-stone-900 rounded-xl p-4 border border-stone-200 dark:border-stone-800">
            <label className="block text-sm font-medium text-stone-700 dark:text-stone-300 mb-2">
              Select Employee
            </label>
            <select
              value={selectedEmployee.id}
              onChange={(e) => {
                const emp = data.employments.find(emp => emp.id === e.target.value) as Employee
                if (emp) setSelectedEmployee(emp)
              }}
              className="w-full px-3 py-2 bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 rounded-lg text-stone-800 dark:text-stone-200"
            >
              {data.employments.map(emp => (
                <option key={emp.id} value={emp.id}>{emp.name} - {emp.role}</option>
              ))}
            </select>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="w-full px-4 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold shadow-lg shadow-amber-600/20 transition-all"
          >
            Open Holiday Rules Modal
          </button>
        </div>
      </div>

      {/* Modal */}
      <HolidayRuleModal
        employee={selectedEmployee}
        existingRules={data.holidayRules as HolidayRule[]}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onSave={handleSave}
      />
    </div>
  )
}
