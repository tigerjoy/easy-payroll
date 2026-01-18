import data from '@/../product/sections/payroll-and-finance/data.json'
import { SettlementWorkspace } from './components/SettlementWorkspace'

export default function SettlementWorkspacePreview() {
  return (
    <SettlementWorkspace
      items={data.settlementWorkspace}
      onSettleAbsence={(employeeId, decision) =>
        console.log('Settle absence:', employeeId, decision)
      }
      onSettleUnusedLeave={(employeeId, decision) =>
        console.log('Settle unused leave:', employeeId, decision)
      }
      onClose={() => console.log('Close workspace')}
    />
  )
}
