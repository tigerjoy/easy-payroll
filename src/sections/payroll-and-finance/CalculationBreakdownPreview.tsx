import data from '@/../product/sections/payroll-and-finance/data.json'
import { CalculationBreakdown } from './components/CalculationBreakdown'

export default function CalculationBreakdownPreview() {
  // Use the first payroll record for preview
  const record = data.currentPayroll[0]

  return (
    <CalculationBreakdown
      record={record}
      onClose={() => console.log('Close breakdown')}
    />
  )
}
