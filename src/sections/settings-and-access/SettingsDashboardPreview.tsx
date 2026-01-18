import data from '@/../product/sections/settings-and-access/data.json'
import type {
  UserProfile,
  Household,
  Member,
  Invitation,
  PermissionsMap
} from '@/../product/sections/settings-and-access/types'
import { SettingsDashboard } from './components/SettingsDashboard'

export default function SettingsDashboardPreview() {
  return (
    <SettingsDashboard
      userProfile={data.userProfile as UserProfile}
      households={data.households as Household[]}
      members={data.members as Member[]}
      invitations={data.invitations as Invitation[]}
      permissions={data.permissions as PermissionsMap}
      onUpdateProfile={(updates) => console.log('Update profile:', updates)}
      onSwitchHousehold={(id) => console.log('Switch household:', id)}
      onCreateHousehold={(name) => console.log('Create household:', name)}
      onRenameHousehold={(id, newName) => console.log('Rename household:', id, newName)}
      onArchiveHousehold={(id) => console.log('Archive household:', id)}
      onInviteMember={(email, role) => console.log('Invite member:', email, role)}
      onChangeMemberRole={(id, role) => console.log('Change role:', id, role)}
      onRemoveMember={(id) => console.log('Remove member:', id)}
      onCancelInvitation={(id) => console.log('Cancel invitation:', id)}
    />
  )
}
