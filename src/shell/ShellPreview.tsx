import { Users, Calendar, Wallet, Settings } from 'lucide-react'
import { AppShell } from './components/AppShell'
import type { NavigationItem } from './components/MainNav'

const navigationItems: NavigationItem[] = [
  { label: 'Staff Directory', href: '/staff', icon: Users, isActive: true },
  { label: 'Attendance & Holidays', href: '/attendance', icon: Calendar },
  { label: 'Payroll & Finance', href: '/payroll', icon: Wallet },
  { label: 'Settings & Access', href: '/settings', icon: Settings },
]

const sampleUser = {
  name: 'Alex Morgan',
  avatarUrl: undefined,
}

const sampleHousehold = {
  name: 'Morgan Residence',
}

export default function ShellPreview() {
  return (
    <>
      {/* Google Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
        rel="stylesheet"
      />

      <AppShell
        navigationItems={navigationItems}
        user={sampleUser}
        household={sampleHousehold}
        onNavigate={(href) => console.log('Navigate to:', href)}
        onLogout={() => console.log('Logout')}
        onSwitchHousehold={() => console.log('Switch household')}
        onAccountSettings={() => console.log('Account settings')}
      >
        <div className="p-8">
          <h1
            className="text-2xl font-bold text-stone-900 dark:text-stone-100 mb-4"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Staff Directory
          </h1>
          <p
            className="text-stone-600 dark:text-stone-400 mb-8"
            style={{ fontFamily: 'Nunito Sans, sans-serif' }}
          >
            Manage your household staff profiles, roles, and contact information.
          </p>

          {/* Placeholder Content */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="bg-white dark:bg-stone-900 rounded-xl border border-stone-200 dark:border-stone-800 p-6"
              >
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-stone-200 dark:bg-stone-700" />
                  <div>
                    <div className="h-4 w-24 bg-stone-200 dark:bg-stone-700 rounded" />
                    <div className="h-3 w-16 bg-stone-100 dark:bg-stone-800 rounded mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AppShell>
    </>
  )
}
