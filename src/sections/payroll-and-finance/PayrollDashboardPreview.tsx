import data from '@/../product/sections/payroll-and-finance/data.json'
import { PayrollDashboard } from './components/PayrollDashboard'

export default function PayrollDashboardPreview() {
  return (
    <PayrollDashboard
      summary={data.summary}
      currentPayroll={data.currentPayroll}
      advances={data.advances}
      ledger={data.ledger}
      settlementItems={data.settlementWorkspace}
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
