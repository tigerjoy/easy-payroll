import data from '@/../product/sections/payroll-and-finance/data.json'
import { ReceiptGallery } from './components/ReceiptComponents'

export default function ReceiptGalleryPreview() {
  // Find a ledger entry with receipts for preview
  const entryWithReceipts = data.ledger.find(entry => entry.receipts && entry.receipts.length > 0)
  const receipts = entryWithReceipts?.receipts || []

  return (
    <ReceiptGallery
      receipts={receipts}
      transactionReference={entryWithReceipts?.reference || 'Sample Transaction'}
      onClose={() => console.log('Close gallery')}
      onDelete={(receiptId) => console.log('Delete receipt:', receiptId)}
      onUpload={(file) => console.log('Upload receipt:', file.name)}
    />
  )
}
