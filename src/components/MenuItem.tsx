import type { MenuItem as MenuItemType } from '../types'

interface MenuItemProps {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex gap-3 w-full bg-surface-card p-4 border-[3px] border-border-strong">
      <div className="w-20 h-20 bg-surface-placeholder flex-shrink-0" />
      <div className="flex flex-col gap-1 w-full">
        <span className="text-base font-extrabold text-primary">{item.name}</span>
        <p className="text-[13px] font-medium text-secondary leading-[1.4] w-full">
          {item.description}
        </p>
        <div className="flex justify-between items-center w-full mt-1">
          <span className="text-base font-bold text-primary">{item.price}</span>
          <button className="w-8 h-8 flex items-center justify-center border-2 border-border-strong text-primary font-bold text-lg hover:bg-primary hover:text-white transition-colors">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
