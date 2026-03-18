import type { SellerOrderStatus } from '../types'

type FilterValue = 'ALL' | SellerOrderStatus

interface FilterTabsProps {
  active: FilterValue
  onChange: (filter: FilterValue) => void
}

const FILTERS: FilterValue[] = ['ALL', 'new', 'preparing', 'ready']
const LABELS: Record<FilterValue, string> = {
  ALL: 'ALL',
  new: 'NEW',
  preparing: 'PREPARING',
  ready: 'READY',
}

export function FilterTabs({ active, onChange }: FilterTabsProps) {
  return (
    <div className="flex gap-2 w-full">
      {FILTERS.map((filter) => (
        <button
          key={filter}
          aria-pressed={active === filter}
          onClick={() => onChange(filter)}
          className={`flex items-center justify-center px-3 py-2 ${
            active === filter
              ? 'bg-primary'
              : 'bg-transparent border-2 border-border-strong'
          }`}
        >
          <span className={`text-xs font-bold tracking-[1px] ${
            active === filter ? 'text-surface' : 'text-primary'
          }`}>
            {LABELS[filter]}
          </span>
        </button>
      ))}
    </div>
  )
}

export type { FilterValue }
