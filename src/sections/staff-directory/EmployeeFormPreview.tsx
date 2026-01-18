import { useState } from 'react'
import { EmployeeForm } from './components/EmployeeForm'
import type { Employee } from '@/../product/sections/staff-directory/types'

export default function EmployeeFormPreview() {
  const [currentStep, setCurrentStep] = useState(0)
  const [isLinking, setIsLinking] = useState(false)

  // For testing "Link Existing" mode
  const sampleExistingEmployee: Partial<Employee> = {
    name: 'Kavita Bai',
    photo: null,
    phoneNumbers: [{ number: '+91 98100 12345', label: 'Mobile' }],
    addresses: [{ address: '123 MG Road, Bangalore', label: 'Current' }],
    employment: {
      role: 'Housekeeper',
      employmentType: 'monthly',
      status: 'active',
      startDate: '2024-01-18',
      holidayBalance: null,
      currentSalary: null,
      paymentMethod: 'Cash'
    }
  }

  return (
    <div className="space-y-4">
      <div className="max-w-4xl mx-auto px-4 pt-4 flex gap-4">
        <button
          onClick={() => {
            setIsLinking(false)
            setCurrentStep(0)
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${!isLinking ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-600'}`}
        >
          Add New Mode
        </button>
        <button
          onClick={() => {
            setIsLinking(true)
            setCurrentStep(1) // Start at Role step for linked employees
          }}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${isLinking ? 'bg-amber-500 text-white' : 'bg-stone-200 text-stone-600'}`}
        >
          Link Existing Mode
        </button>
      </div>

      <EmployeeForm
        employee={isLinking ? (sampleExistingEmployee as Employee) : undefined}
        currentStep={currentStep}
        isLinkingExisting={isLinking}
        onStepChange={(step) => {
          console.log('Step changed to:', step)
          setCurrentStep(step)
        }}
        onSubmit={(employee) => {
          console.log('Form submitted:', employee)
          alert('Staff member saved! Check console for details.')
        }}
        onCancel={() => {
          console.log('Form cancelled')
          alert('Form cancelled')
        }}
      />
    </div>
  )
}
