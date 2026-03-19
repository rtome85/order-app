import { useState } from 'react'
import {
  AlarmClock, ToggleRight, Bell, Mail,
  CreditCard, Calendar, AtSign, Lock,
  LogOut, ChevronRight, Pencil,
} from 'lucide-react'

function TogglePill({ on, onToggle }: { on: boolean; onToggle: () => void }) {
  return (
    <button
      onClick={onToggle}
      className={`flex items-center gap-1.5 px-[10px] py-[5px] ${on ? 'bg-[#7A9B76]' : 'bg-surface-placeholder border-2 border-border'}`}
    >
      <span className={`text-[11px] font-bold tracking-[0.5px] ${on ? 'text-white' : 'text-disabled'}`}>
        {on ? 'ON' : 'OFF'}
      </span>
    </button>
  )
}

function SectionLabel({ children }: { children: string }) {
  return (
    <span className="text-[11px] font-bold text-muted tracking-[1.5px]">{children}</span>
  )
}

function NavRow({ icon: Icon, label, value }: { icon: React.ElementType; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 px-4 py-[14px]">
      <Icon className="w-[18px] h-[18px] text-secondary flex-shrink-0" />
      <span className="flex-1 text-[14px] font-semibold text-primary">{label}</span>
      <span className="text-[13px] text-muted">{value}</span>
      <ChevronRight className="w-[14px] h-[14px] text-disabled flex-shrink-0" />
    </div>
  )
}

function Divider() {
  return <div className="h-px bg-surface-placeholder" />
}

export function Settings() {
  const [acceptingOrders, setAcceptingOrders] = useState(true)
  const [newOrderAlerts, setNewOrderAlerts] = useState(true)
  const [dailySummaryEmail, setDailySummaryEmail] = useState(false)

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-[22px] font-extrabold text-primary tracking-[0.5px]">SETTINGS</h1>

      {/* Business card */}
      <div className="flex items-center gap-[14px] bg-surface-card border-[3px] border-border-strong p-4">
        <div className="w-[52px] h-[52px] bg-primary flex items-center justify-center flex-shrink-0">
          <span className="text-[20px] font-extrabold text-surface">LB</span>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          <span className="text-[16px] font-extrabold text-primary">La Brava Burger Co.</span>
          <span className="text-xs font-medium text-muted">Burgers &amp; Craft Beer</span>
          <div className="w-fit px-2 py-1 bg-[#7A9B76]">
            <span className="text-[9px] font-bold text-white tracking-[1px]">OPEN NOW</span>
          </div>
        </div>
        <Pencil className="w-[18px] h-[18px] text-disabled flex-shrink-0" />
      </div>

      {/* Store */}
      <SectionLabel>STORE</SectionLabel>
      <div className="flex flex-col bg-surface-card border-[3px] border-border-strong">
        <NavRow icon={AlarmClock} label="Operating Hours" value="9AM – 10PM" />
        <Divider />
        <div className="flex items-center gap-3 px-4 py-[14px]">
          <ToggleRight className="w-[18px] h-[18px] text-secondary flex-shrink-0" />
          <span className="flex-1 text-[14px] font-semibold text-primary">Accepting Orders</span>
          <TogglePill on={acceptingOrders} onToggle={() => setAcceptingOrders(v => !v)} />
        </div>
      </div>

      {/* Notifications */}
      <SectionLabel>NOTIFICATIONS</SectionLabel>
      <div className="flex flex-col bg-surface-card border-[3px] border-border-strong">
        <div className="flex items-center gap-3 px-4 py-[14px]">
          <Bell className="w-[18px] h-[18px] text-secondary flex-shrink-0" />
          <span className="flex-1 text-[14px] font-semibold text-primary">New Order Alerts</span>
          <TogglePill on={newOrderAlerts} onToggle={() => setNewOrderAlerts(v => !v)} />
        </div>
        <Divider />
        <div className="flex items-center gap-3 px-4 py-[14px]">
          <Mail className="w-[18px] h-[18px] text-secondary flex-shrink-0" />
          <span className="flex-1 text-[14px] font-semibold text-primary">Daily Summary Email</span>
          <TogglePill on={dailySummaryEmail} onToggle={() => setDailySummaryEmail(v => !v)} />
        </div>
      </div>

      {/* Payments */}
      <SectionLabel>PAYMENTS</SectionLabel>
      <div className="flex flex-col bg-surface-card border-[3px] border-border-strong">
        <NavRow icon={CreditCard} label="Payout Account" value="•••• 4521" />
        <Divider />
        <NavRow icon={Calendar} label="Payout Schedule" value="Weekly" />
      </div>

      {/* Account */}
      <SectionLabel>ACCOUNT</SectionLabel>
      <div className="flex flex-col bg-surface-card border-[3px] border-border-strong">
        <NavRow icon={AtSign} label="Email" value="owner@labrava.co" />
        <Divider />
        <NavRow icon={Lock} label="Change Password" value="••••••••" />
      </div>

      {/* Sign out */}
      <button className="flex items-center justify-center gap-2 bg-surface-card border-2 border-accent px-6 py-[14px]">
        <LogOut className="w-4 h-4 text-accent" />
        <span className="text-[13px] font-bold text-accent tracking-[1px]">SIGN OUT</span>
      </button>
    </div>
  )
}
