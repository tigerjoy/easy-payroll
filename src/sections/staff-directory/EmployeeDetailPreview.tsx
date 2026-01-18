import data from '@/../product/sections/staff-directory/data.json'
import type { Employee } from '@/../product/sections/staff-directory/types'
import { EmployeeDetail } from './components/EmployeeDetail'

export default function EmployeeDetailPreview() {
  // Use the first employee with the most data (Lakshmi Devi has notes, custom properties, etc.)
  const rawEmployee = data.employees[0] as Employee

  // Transform data structure to match what EmployeeDetail expects
  // EmployeeDetail expects employmentHistory and salaryHistory arrays,
  // but the data has a single employment object
  const employee = {
    ...rawEmployee,
    status: rawEmployee.employment.status,
    holidayBalance: rawEmployee.employment.holidayBalance ?? 0,
    employmentHistory: [
      {
        role: rawEmployee.employment.role,
        department: 'Domestic Staff',
        startDate: rawEmployee.employment.startDate,
        endDate: rawEmployee.employment.endDate ?? null
      }
    ],
    salaryHistory: rawEmployee.employment.currentSalary != null
      ? [
          {
            amount: rawEmployee.employment.currentSalary,
            paymentMethod: rawEmployee.employment.paymentMethod,
            effectiveDate: rawEmployee.employment.startDate
          }
        ]
      : []
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
        <EmployeeDetail
          employee={employee as Employee}
          onEdit={() => console.log('Edit employee')}
          onArchive={() => console.log('Archive employee')}
          onBack={() => console.log('Go back to list')}
          onUploadDocument={(file, category) => console.log('Upload document:', file.name, category)}
          onDeleteDocument={(name) => console.log('Delete document:', name)}
          onAddCustomProperty={(prop) => console.log('Add custom property:', prop)}
          onRemoveCustomProperty={(name) => console.log('Remove custom property:', name)}
          onAddNote={(content) => console.log('Add note:', content)}
          onDeleteNote={(createdAt) => console.log('Delete note:', createdAt)}
        />
      </div>
    </>
  )
}
