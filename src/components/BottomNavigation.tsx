import type { LucideIcon } from 'lucide-react'

interface Tab {
  id: string
  icon: LucideIcon
  label: string
}

interface BottomNavigationProps {
  tabs: Tab[]
  activeTab: string
  onTabChange: (tabId: string) => void
}

export function BottomNavigation({ tabs, activeTab, onTabChange }: BottomNavigationProps) {
  return (
    <div className="fixed bottom-0 left-0 w-full max-w-[402px] h-[92px] bg-surface px-[21px] pt-3 pb-[21px] border-t border-border">
      <div className="flex w-full h-[62px] bg-surface-card border-[3px] border-border-strong p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 h-full flex-1 transition-colors ${isActive ? 'bg-primary' : 'hover:bg-surface'
                }`}
            >
              <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-surface' : 'text-disabled'}`} />
              <span className={`text-[10px] font-bold tracking-[0.5px] ${isActive ? 'text-surface' : 'text-disabled'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
