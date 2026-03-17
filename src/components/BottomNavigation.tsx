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
    <div className="fixed bottom-0 left-0 w-full max-w-[402px] h-[92px] bg-[#F5F2ED] px-[21px] pt-3 pb-[21px] border-t border-[#D1CCC5]">
      <div className="flex w-full h-[62px] bg-white border-[3px] border-[#2D2A26] p-1">
        {tabs.map((tab) => {
          const Icon = tab.icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex flex-col items-center justify-center gap-1 h-full flex-1 transition-colors ${isActive ? 'bg-[#2D2A26]' : 'hover:bg-[#F5F2ED]'
                }`}
            >
              <Icon className={`w-[18px] h-[18px] ${isActive ? 'text-[#F5F2ED]' : 'text-[#B5B0A8]'}`} />
              <span className={`text-[10px] font-bold tracking-[0.5px] ${isActive ? 'text-[#F5F2ED]' : 'text-[#B5B0A8]'}`}>
                {tab.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
