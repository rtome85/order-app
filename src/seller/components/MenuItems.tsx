import { Plus, Pencil } from 'lucide-react'
import type { SellerMenuItem } from '../types'

const CATEGORIES = ['ALL', 'BURGERS', 'BEER', 'SIDES']

interface MenuItemsProps {
  items: SellerMenuItem[]
  activeCategory: string
  onCategoryChange: (cat: string) => void
  onAddItem: () => void
  onEditItem: (item: SellerMenuItem) => void
}

export function MenuItems({ items, activeCategory, onCategoryChange, onAddItem, onEditItem }: MenuItemsProps) {
  const filtered = activeCategory === 'ALL' ? items : items.filter(i => i.category === activeCategory)
  const hiddenCount = items.filter(i => !i.available).length

  return (
    <div className="flex flex-col gap-[14px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-[3px]">
          <h2 className="text-[22px] font-extrabold text-primary tracking-[0.5px]">MENU ITEMS</h2>
          <p className="text-xs text-muted">{items.length} items · {hiddenCount} hidden</p>
        </div>
        <button
          onClick={onAddItem}
          className="flex items-center gap-[6px] bg-accent px-4 py-[10px]"
        >
          <Plus className="w-[14px] h-[14px] text-white" />
          <span className="text-[11px] font-bold text-white tracking-[0.5px]">ADD ITEM</span>
        </button>
      </div>

      <div className="flex gap-[6px]">
        {CATEGORIES.map(cat => (
          <button
            key={cat}
            aria-pressed={activeCategory === cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-[14px] py-2 ${activeCategory === cat ? 'bg-primary' : 'border-2 border-border-strong'}`}
          >
            <span className={`text-[11px] font-bold tracking-[1px] ${activeCategory === cat ? 'text-surface' : 'text-primary'}`}>
              {cat}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-[14px]">
        {filtered.map(item => (
          <div
            key={item.id}
            className={`flex items-center gap-3 p-[14px] w-full ${
              item.available
                ? 'bg-surface-card border-[3px] border-border-strong'
                : 'bg-surface border-[3px] border-border opacity-70'
            }`}
          >
            <div className={`w-[60px] h-[60px] flex-shrink-0 ${item.available ? 'bg-surface-placeholder' : 'bg-disabled'}`} />
            <div className="flex flex-col gap-[5px] flex-1">
              <span className={`text-[15px] font-extrabold ${item.available ? 'text-primary' : 'text-muted'}`}>
                {item.name}
              </span>
              <div className="flex items-center gap-2">
                <span className={`text-[13px] font-bold ${item.available ? 'text-accent' : 'text-disabled'}`}>
                  {item.price}
                </span>
                <div className={`px-2 py-[3px] ${item.available ? 'bg-surface-placeholder' : 'bg-border'}`}>
                  <span className={`text-[9px] font-bold tracking-[0.5px] ${item.available ? 'text-secondary' : 'text-disabled'}`}>
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-end gap-2">
              {item.available ? (
                <div className="px-2 py-1 bg-success">
                  <span className="text-[9px] font-bold text-white tracking-[1px]">LIVE</span>
                </div>
              ) : (
                <div className="px-2 py-1 bg-surface-placeholder border border-border">
                  <span className="text-[9px] font-bold text-disabled tracking-[1px]">HIDDEN</span>
                </div>
              )}
              <button onClick={() => onEditItem(item)}>
                <Pencil className={`w-4 h-4 ${item.available ? 'text-muted' : 'text-disabled'}`} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
