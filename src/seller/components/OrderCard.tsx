import { Play, Check, CircleCheck } from 'lucide-react'
import type { SellerOrder } from '../types'

interface OrderCardProps {
  order: SellerOrder
  onAdvance: (id: string) => void
}

const ACTION_CONFIG = {
  new: {
    label: 'START PREPARING',
    Icon: Play,
    className: 'bg-primary text-surface',
  },
  preparing: {
    label: 'MARK READY',
    Icon: Check,
    className: 'bg-accent text-white',
  },
  ready: {
    label: 'SERVED',
    Icon: CircleCheck,
    className: 'bg-success text-white',
  },
}

export function OrderCard({ order, onAdvance }: OrderCardProps) {
  const { label, Icon, className } = ACTION_CONFIG[order.status]
  const total = order.items.reduce((sum, item) => sum + item.quantity, 0)
  const price = `$${(total * 12).toFixed(2)}`

  return (
    <div className="border-[3px] border-border-strong bg-surface-card p-4 flex flex-col gap-3">
      <div className="flex items-center justify-between">
        <span className="text-base font-bold text-primary">{order.number}</span>
        <span className="text-xs text-muted">{order.placedAt}</span>
      </div>
      <div className="flex flex-col gap-1">
        {order.items.map((item, i) => (
          <span key={i} className="text-[13px] font-medium text-secondary">
            {item.name} × {item.quantity}
          </span>
        ))}
      </div>
      <div className="h-px bg-border" />
      <div className="flex items-center justify-between">
        <span className="text-[18px] font-extrabold text-primary">{price}</span>
        <button
          onClick={() => onAdvance(order.id)}
          className={`flex items-center gap-2 px-4 py-2 font-bold text-xs tracking-[1px] ${className}`}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      </div>
    </div>
  )
}
