import data from '@/../product/sections/onboarding-and-setup/data.json'
import type { OnboardingConfig, OnboardingStep, OnboardingPresets } from '@/../product/sections/onboarding-and-setup/types'
import { OnboardingWizard } from './components/OnboardingWizard'

export default function OnboardingWizardPreview() {
  return (
    <OnboardingWizard
      config={data.config as OnboardingConfig}
      steps={data.steps as OnboardingStep[]}
      presets={data.presets as OnboardingPresets}
      onNextStep={(stepId, stepData) => console.log('Next step:', stepId, stepData)}
      onSkipStep={(stepId) => console.log('Skip step:', stepId)}
      onPreviousStep={() => console.log('Previous step')}
      onComplete={() => console.log('Onboarding complete!')}
      onSaveProgress={(stepId, stepData) => console.log('Save progress:', stepId, stepData)}
    />
  )
}
