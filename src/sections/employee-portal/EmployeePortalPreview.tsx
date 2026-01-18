import { useState } from 'react'
import data from '@/../product/sections/employee-portal/data.json'
import type {
  Employee,
  EmploymentSummary,
  ActivityItem,
  AttendanceSummary,
  MonthlyPaymentSummary
} from '@/../product/sections/employee-portal/types'
import { EmployeePortal } from './components/EmployeePortal'

export default function EmployeePortalPreview() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [isAuthenticating, setIsAuthenticating] = useState(false)
  const [loginError, setLoginError] = useState<string | undefined>()

  const handleLogin = (phone: string) => {
    setIsAuthenticating(true)
    setLoginError(undefined)

    // Simulate auth delay
    setTimeout(() => {
      if (phone.includes('98765')) {
        setIsLoggedIn(true)
      } else {
        setLoginError('Phone number not found. Please check and try again.')
      }
      setIsAuthenticating(false)
    }, 1000)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setLoginError(undefined)
  }

  return (
    <EmployeePortal
      employee={isLoggedIn ? (data.employee as Employee) : undefined}
      employments={isLoggedIn ? (data.employments as EmploymentSummary[]) : []}
      selectedEmploymentId={isLoggedIn ? data.selectedEmploymentId as string : undefined}
      selectedEmploymentDetails={isLoggedIn ? data.selectedEmploymentDetails as any : undefined}
      attendanceSummary={isLoggedIn ? (data.attendanceSummary as AttendanceSummary) : undefined}
      paymentSummary={isLoggedIn ? (data.paymentSummary as MonthlyPaymentSummary) : undefined}
      activity={data.activity as ActivityItem[]}
      isAuthenticating={isAuthenticating}
      loginError={loginError}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onViewActivityDetail={(id) => console.log('View activity:', id)}
    />
  )
}
