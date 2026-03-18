import { ClipboardList, Utensils, Settings } from 'lucide-react'

type SellerTab = 'ORDERS' | 'MENU' | 'SETTINGS'

interface BottomNavigationProps {
  activeTab: SellerTab
  onTabChange: (tab: SellerTab) => void
}

const TABS: { id: SellerTab; Icon: typeof ClipboardList; label: string }[] = [
  { id: 'ORDERS', Icon: ClipboardList, label: 'ORDERS' },
  { id: 'MENU', Icon: Utensils, label: 'MENU' },
  { id: 'SETTINGS', Icon: Settings, label: 'SETTINGS' },
]

export function BottomNavigation({ activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full max-w-[402px] h-[92px] bg-surface px-[21px] pt-3 pb-[21px] border-t border-border">
      <div className="flex w-full h-[62px] bg-surface-card border-[3px] border-border-strong p-1">
        {TABS.map(({ id, Icon, label }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className={`flex flex-col items-center justify-center gap-1 h-full flex-1 transition-colors ${
                isActive ? 'bg-primary' : 'hover:bg-surface'
              }`}
            >
              <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-surface' : 'text-disabled'}`} />
              <span className={`text-[10px] font-bold tracking-[0.5px] ${isActive ? 'text-surface' : 'text-disabled'}`}>
                {label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
