import data from '@/../product/sections/staff-directory/data.json'
import { StaffDirectory } from './components/StaffDirectory'

export default function StaffDirectoryPreview() {
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
          summary={data.summary}
          employees={data.employees}
          onView={(id) => console.log('View employee:', id)}
          onEdit={(id) => console.log('Edit employee:', id)}
          onArchive={(id) => console.log('Archive employee:', id)}
          onRestore={(id) => console.log('Restore employee:', id)}
          onCreate={() => console.log('Create new employee')}
          onExport={(format) => console.log('Export as:', format)}
          onSearch={(query) => console.log('Search:', query)}
          onFilterStatus={(status) => console.log('Filter status:', status)}
          onFilterRole={(role) => console.log('Filter role:', role)}
        />
      </div>
    </>
  )
}
