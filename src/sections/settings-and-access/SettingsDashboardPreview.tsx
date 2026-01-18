import data from '@/../product/sections/settings-and-access/data.json'
import { SettingsDashboard } from './components/SettingsDashboard'

export default function SettingsDashboardPreview() {
  return (
    <SettingsDashboard
      userProfile={data.userProfile}
      households={data.households}
      members={data.members}
      invitations={data.invitations}
      permissions={data.permissions}
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
