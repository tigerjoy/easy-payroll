import data from '@/../product/sections/user-authentication/data.json'
import { UserAuthentication } from './components/UserAuthentication'

export default function UserAuthenticationPreview() {
  return (
    <UserAuthentication
      authConfig={data.authConfig}
      socialProviders={data.socialProviders}
      loginForm={data.loginForm}
      registerForm={data.registerForm}
      verificationForm={data.verificationForm}
      forgotPasswordForm={data.forgotPasswordForm}
      errorMessages={data.errorMessages}
      currentView="login"
      onLogin={(email, password) => console.log('Login:', email, password)}
      onRegister={(name, email, password) => console.log('Register:', name, email, password)}
      onSocialAuth={(providerId) => console.log('Social auth:', providerId)}
      onVerifyCode={(code) => console.log('Verify code:', code)}
      onResendCode={() => console.log('Resend code')}
      onForgotPassword={(email) => console.log('Forgot password:', email)}
      onResetPassword={(password) => console.log('Reset password:', password)}
      onTabChange={(tab) => console.log('Tab change:', tab)}
      onBack={() => console.log('Back')}
      onNavigate={(href) => console.log('Navigate:', href)}
    />
  )
}
