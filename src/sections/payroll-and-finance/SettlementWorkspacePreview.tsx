import data from '@/../product/sections/payroll-and-finance/data.json'
import type { SettlementItem } from '@/../product/sections/payroll-and-finance/types'
import { SettlementWorkspace } from './components/SettlementWorkspace'

export default function SettlementWorkspacePreview() {
  return (
    <SettlementWorkspace
      items={data.settlementWorkspace as SettlementItem[]}
      onSettleAbsence={(employmentId, decision) =>
        console.log('Settle absence:', employmentId, decision)
      }
      onSettleUnusedLeave={(employmentId, decision) =>
        console.log('Settle unused leave:', employmentId, decision)
      }
      onClose={() => console.log('Close workspace')}
    />
  )
}
