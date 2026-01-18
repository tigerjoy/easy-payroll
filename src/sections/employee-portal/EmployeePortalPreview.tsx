import { useState } from 'react'
import data from '@/../product/sections/employee-portal/data.json'
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
      staff={isLoggedIn ? data.staff : undefined}
      summary={isLoggedIn ? data.summary : undefined}
      activity={data.activity}
      isAuthenticating={isAuthenticating}
      loginError={loginError}
      onLogin={handleLogin}
      onLogout={handleLogout}
      onViewActivityDetail={(id) => console.log('View activity:', id)}
    />
  )
}
