import data from '@/../product/sections/landing-page/data.json'
import { LandingPage } from './components/LandingPage'

export default function LandingPagePreview() {
  return (
    <LandingPage
      hero={data.hero}
      problems={data.problems}
      features={data.features}
      testimonials={data.testimonials}
      pricing={data.pricing}
      navigation={data.navigation}
      stickyCta={data.stickyCta}
      footer={data.footer}
      onNavigate={(href) => console.log('Navigate to:', href)}
      onGetStarted={() => console.log('Get started clicked')}
      onLogin={() => console.log('Login clicked')}
      onSignUp={() => console.log('Sign up clicked')}
    />
  )
}
