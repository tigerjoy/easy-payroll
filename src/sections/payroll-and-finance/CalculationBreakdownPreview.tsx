import data from '@/../product/sections/payroll-and-finance/data.json'
import type { MonthlyPayrollRecord } from '@/../product/sections/payroll-and-finance/types'
import { CalculationBreakdown } from './components/CalculationBreakdown'

export default function CalculationBreakdownPreview() {
  // Use the first payroll record for preview
  const record = data.monthlyPayroll[0] as MonthlyPayrollRecord

  return (
    <CalculationBreakdown
      record={record}
      onClose={() => console.log('Close breakdown')}
    />
  )
}
