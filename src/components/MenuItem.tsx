import type { MenuItem as MenuItemType } from '../types'

interface MenuItemProps {
  item: MenuItemType
}

export function MenuItem({ item }: MenuItemProps) {
  return (
    <div className="flex gap-3 w-full bg-white p-4 border-[3px] border-[#2D2A26]">
      <div className="w-20 h-20 bg-[#EBE8E3] flex-shrink-0" />
      <div className="flex flex-col gap-1 w-full">
        <span className="text-base font-extrabold text-[#2D2A26]">{item.name}</span>
        <p className="text-[13px] font-medium text-[#5C5852] leading-[1.4] w-full">
          {item.description}
        </p>
        <div className="flex justify-between items-center w-full mt-1">
          <span className="text-base font-bold text-[#2D2A26]">{item.price}</span>
          <button className="w-8 h-8 flex items-center justify-center border-2 border-[#2D2A26] text-[#2D2A26] font-bold text-lg hover:bg-[#2D2A26] hover:text-white transition-colors">
            +
          </button>
        </div>
      </div>
    </div>
  )
}
