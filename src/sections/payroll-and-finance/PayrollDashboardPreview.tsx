import data from '@/../product/sections/payroll-and-finance/data.json'
import type {
  MonthlyPayrollRecord,
  AdhocPayment,
  Advance,
  LedgerEntry,
  SettlementItem
} from '@/../product/sections/payroll-and-finance/types'
import { PayrollDashboard } from './components/PayrollDashboard'

export default function PayrollDashboardPreview() {
  return (
    <PayrollDashboard
      summary={data.summary}
      monthlyPayroll={data.monthlyPayroll as MonthlyPayrollRecord[]}
      adhocPayments={data.adhocPayments as AdhocPayment[]}
      advances={data.advances as Advance[]}
      ledger={data.ledger as LedgerEntry[]}
      settlementItems={data.settlementWorkspace as SettlementItem[]}
      onSettleAbsence={(employeeId, decision) => console.log('Settle absence:', employeeId, decision)}
      onSettleUnusedLeave={(employeeId, decision) => console.log('Settle unused leave:', employeeId, decision)}
      onFinalizePayment={(id) => console.log('Finalize payment:', id)}
      onRecordAdvance={(employeeId, amount, notes) => console.log('Record advance:', employeeId, amount, notes)}
      onAddBonus={(employeeId, amount, reason) => console.log('Add bonus:', employeeId, amount, reason)}
      onViewCalculation={(id) => console.log('View calculation:', id)}
      onSearchLedger={(query) => console.log('Search ledger:', query)}
      onUploadReceipt={(ledgerEntryId, file) => console.log('Upload receipt:', ledgerEntryId, file)}
      onDeleteReceipt={(ledgerEntryId, receiptId) => console.log('Delete receipt:', ledgerEntryId, receiptId)}
      onViewReceipts={(ledgerEntryId) => console.log('View receipts:', ledgerEntryId)}
    />
  )
}
