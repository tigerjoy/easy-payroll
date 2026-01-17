import { useState } from 'react'
import data from '@/../product/sections/staff-directory/data.json'
import { EmployeeForm } from './components/EmployeeForm'

export default function EmployeeFormPreview() {
  const [currentStep, setCurrentStep] = useState(0)

  // For editing, we can use the first employee as sample data
  // Set to undefined to preview "Add New" mode
  const editingEmployee = undefined // data.employees[0]

  return (
    <EmployeeForm
      employee={editingEmployee}
      currentStep={currentStep}
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
  )
}
