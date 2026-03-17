import { MenuItem } from './MenuItem'
import type { MenuItem as MenuItemType } from '../types'

interface MenuSectionProps {
  title: string
  items: MenuItemType[]
}

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <>
      <span className="text-sm font-bold text-[#8C8780] tracking-[2px]">{title}</span>
      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </>
  )
}