import { useState } from 'react'
import data from '@/../product/sections/staff-directory/data.json'
import type { Summary, Employee } from '@/../product/sections/staff-directory/types'
import { StaffDirectory } from './components/StaffDirectory'
import { EmployeeForm } from './components/EmployeeForm'

export default function StaffDirectoryPreview() {
  const [view, setView] = useState<'list' | 'form'>('list')
  const [currentStep, setCurrentStep] = useState(0)
  const [isLinking, setIsLinking] = useState(false)
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | undefined>(undefined)

  const handleLinkExisting = (id: string) => {
    const existing = data.existingEmployeesFromOtherHouseholds.find(e => e.id === id)
    if (existing) {
      // Create a partial employee object from existing data
      const partialEmployee: any = {
        name: existing.name,
        photo: null,
        status: 'active',
        phoneNumbers: [{ number: existing.phoneNumber, label: 'Mobile' }],
        addresses: [{ address: '', label: 'Current' }], // Initialize empty address
        documents: [],
        customProperties: [],
        notes: [],
        employmentHistory: [],
        salaryHistory: [],
        employment: {
          role: existing.role,
          employmentType: 'monthly',
          status: 'active',
          startDate: new Date().toISOString().split('T')[0],
          holidayBalance: null,
          currentSalary: null,
          paymentMethod: 'Bank Transfer'
        }
      }
      setSelectedEmployee(partialEmployee as Employee)
      setIsLinking(true)
      setCurrentStep(1) // Skip Basic Info step (shared data)
      setView('form')
    }
  }

  const handleCreate = () => {
    setSelectedEmployee(undefined)
    setIsLinking(false)
    setCurrentStep(0)
    setView('form')
  }

  if (view === 'form') {
    return (
      <div style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
        <EmployeeForm
          employee={selectedEmployee}
          currentStep={currentStep}
          isLinkingExisting={isLinking}
          onStepChange={setCurrentStep}
          onSubmit={(emp) => {
            console.log('Submitted:', emp)
            setView('list')
          }}
          onCancel={() => setView('list')}
        />
      </div>
    )
  }

  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />

      <div style={{ fontFamily: 'Nunito Sans, sans-serif' }}>
        <StaffDirectory
          summary={data.summary as Summary}
          employees={data.employees as Employee[]}
          existingEmployeesFromOtherHouseholds={data.existingEmployeesFromOtherHouseholds}
          onView={(id) => console.log('View employee:', id)}
          onEdit={(id) => {
            const emp = data.employees.find(e => e.id === id)
            setSelectedEmployee(emp as Employee)
            setIsLinking(false)
            setCurrentStep(0)
            setView('form')
          }}
          onArchive={(id) => console.log('Archive employee:', id)}
          onRestore={(id) => console.log('Restore employee:', id)}
          onCreate={handleCreate}
          onLinkExisting={handleLinkExisting}
          onExport={(format) => console.log('Export as:', format)}
          onSearch={(query) => console.log('Search:', query)}
          onFilterStatus={(status) => console.log('Filter status:', status)}
          onFilterRole={(role) => console.log('Filter role:', role)}
        />
      </div>
    </>
  )
}
