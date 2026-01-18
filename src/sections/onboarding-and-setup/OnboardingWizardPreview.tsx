import data from '@/../product/sections/onboarding-and-setup/data.json'
import { OnboardingWizard } from './components/OnboardingWizard'

export default function OnboardingWizardPreview() {
  return (
    <OnboardingWizard
      config={data.config}
      steps={data.steps}
      presets={data.presets}
      onNextStep={(stepId, stepData) => console.log('Next step:', stepId, stepData)}
      onSkipStep={(stepId) => console.log('Skip step:', stepId)}
      onPreviousStep={() => console.log('Previous step')}
      onComplete={() => console.log('Onboarding complete!')}
      onSaveProgress={(stepId, stepData) => console.log('Save progress:', stepId, stepData)}
    />
  )
}
