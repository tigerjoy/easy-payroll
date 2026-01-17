import data from '@/../product/sections/staff-directory/data.json'
import { EmployeeDetail } from './components/EmployeeDetail'

export default function EmployeeDetailPreview() {
  // Use the first employee with the most data (Lakshmi Devi has notes, custom properties, etc.)
  const employee = data.employees[0]

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
          employee={employee}
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
