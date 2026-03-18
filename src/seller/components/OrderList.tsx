import { OrderCard } from './OrderCard'
import type { SellerOrder } from '../types'
import type { FilterValue } from './FilterTabs'

interface OrderListProps {
  orders: SellerOrder[]
  filter: FilterValue
  onAdvance: (id: string) => void
}

export function OrderList({ orders, filter, onAdvance }: OrderListProps) {
  const filtered = filter === 'ALL' ? orders : orders.filter(o => o.status === filter)

  if (filtered.length === 0) {
    return (
      <div className="flex items-center justify-center py-12">
        <span className="text-sm text-muted">No orders</span>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-3">
      {filtered.map(order => (
        <OrderCard key={order.id} order={order} onAdvance={onAdvance} />
      ))}
    </div>
  )
}
