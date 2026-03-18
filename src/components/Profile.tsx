import {
  Pencil, Bell, MapPin, CreditCard, Star,
  MessageCircle, Info, LogOut, ChevronRight,
  type LucideIcon,
} from 'lucide-react'

interface MenuRow {
  icon: LucideIcon
  iconColor?: string
  label: string
}

function ProfileMenuCard({ rows }: { rows: MenuRow[] }) {
  return (
    <div className="flex flex-col w-full bg-surface-card border-[3px] border-border-strong">
      {rows.map((row, i) => (
        <div key={row.label}>
          {i > 0 && <div className="w-full h-px bg-surface-placeholder" />}
          <button className="flex items-center gap-3 w-full px-4 py-3.5">
            <row.icon className={`w-[18px] h-[18px] flex-shrink-0 ${row.iconColor ?? 'text-primary'}`} />
            <span className="flex-1 text-left text-[15px] font-semibold text-primary">{row.label}</span>
            <ChevronRight className="w-4 h-4 text-disabled" />
          </button>
        </div>
      ))}
    </div>
  )
}

const accountRows: MenuRow[] = [
  { icon: Pencil, label: 'Edit Profile' },
  { icon: Bell, label: 'Notifications' },
  { icon: MapPin, label: 'Saved Addresses', iconColor: 'text-accent' },
]

const paymentRows: MenuRow[] = [
  { icon: CreditCard, label: 'Payment Methods' },
  { icon: Star, label: 'Favourites', iconColor: 'text-accent' },
]

const supportRows: MenuRow[] = [
  { icon: MessageCircle, label: 'Help & FAQ' },
  { icon: Info, label: 'About' },
]

export function Profile() {
  return (
    <>
      <h1 className="text-[42px] font-extrabold text-primary tracking-[-2px] leading-[0.9]">PROFILE</h1>

      {/* Avatar */}
      <div className="flex items-center gap-4 w-full bg-surface-card p-4 border-[3px] border-border-strong">
        <div className="flex items-center justify-center w-[72px] h-[72px] bg-primary flex-shrink-0">
          <span className="text-2xl font-extrabold text-surface">RB</span>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xl font-extrabold text-primary">Roberto Barbosa</span>
          <span className="text-[13px] font-medium text-secondary">roberto@example.com</span>
        </div>
      </div>

      {/* Account */}
      <span className="text-sm font-bold text-muted tracking-[2px]">ACCOUNT</span>
      <ProfileMenuCard rows={accountRows} />

      {/* Payment */}
      <span className="text-sm font-bold text-muted tracking-[2px]">PAYMENT</span>
      <ProfileMenuCard rows={paymentRows} />

      {/* Support */}
      <span className="text-sm font-bold text-muted tracking-[2px]">SUPPORT</span>
      <ProfileMenuCard rows={supportRows} />

      {/* Log Out */}
      <button className="flex items-center justify-center gap-2.5 w-full py-4 border-[3px] border-accent">
        <LogOut className="w-[18px] h-[18px] text-accent" />
        <span className="text-[15px] font-bold text-accent tracking-[1px]">LOG OUT</span>
      </button>
    </>
  )
}
