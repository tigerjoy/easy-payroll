import data from '@/../product/sections/payroll-and-finance/data.json'
import { PaymentLedger } from './components/PaymentLedger'

export default function PaymentLedgerPreview() {
  return (
    <PaymentLedger
      entries={data.ledger}
      onSearch={(query) => console.log('Search ledger:', query)}
      onViewReceipts={(entryId) => console.log('View receipts:', entryId)}
      onUploadReceipt={(entryId, file) => console.log('Upload receipt:', entryId, file.name)}
    />
  )
}
