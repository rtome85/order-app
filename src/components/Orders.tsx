import { useState } from 'react'
import type { Order, OrderStatus } from '../types'

const statusStyles: Record<OrderStatus, string> = {
  preparing: 'bg-accent text-white',
  ready: 'bg-success text-white',
  delivered: 'bg-surface-placeholder text-muted',
}

const statusLabels: Record<OrderStatus, string> = {
  preparing: 'PREPARING',
  ready: 'READY',
  delivered: 'DELIVERED',
}

const filters = ['ALL', 'ACTIVE', 'COMPLETED'] as const

function OrderCard({ order }: { order: Order }) {
  return (
    <div className="flex flex-col gap-2.5 w-full bg-surface-card p-4 border-[3px] border-border-strong">
      <div className="flex justify-between items-center w-full">
        <span className="text-[15px] font-extrabold text-primary">{order.number}</span>
        <span className={`px-2 py-1 text-[11px] font-bold tracking-[0.5px] ${statusStyles[order.status]}`}>
          {statusLabels[order.status]}
        </span>
      </div>
      <span className="text-xs font-medium text-muted">{order.date}</span>
      <span className="text-[13px] font-medium text-secondary">{order.items}</span>
      <div className="w-full h-px bg-border" />
      <div className="flex justify-between items-center w-full">
        <span className="text-lg font-extrabold text-primary">{order.total}</span>
        <button className="px-3.5 py-2 border-2 border-border-strong text-[11px] font-bold text-primary tracking-[1px]">
          REORDER
        </button>
      </div>
    </div>
  )
}

interface OrdersProps {
  orders: Order[]
}

export function Orders({ orders }: OrdersProps) {
  const [activeFilter, setActiveFilter] = useState<string>('ALL')

  const filtered = orders.filter((order) => {
    if (activeFilter === 'ALL') return true
    if (activeFilter === 'ACTIVE') return order.status === 'preparing' || order.status === 'ready'
    return order.status === 'delivered'
  })

  return (
    <>
      <h1 className="text-[42px] font-extrabold text-primary tracking-[-2px] leading-[0.9]">ORDERS</h1>

      <div className="flex gap-2 w-full">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`flex items-center justify-center px-3.5 py-2 ${
              activeFilter === filter
                ? 'bg-primary'
                : 'bg-transparent border-2 border-border-strong'
            }`}
          >
            <span className={`text-xs font-bold tracking-[1px] ${
              activeFilter === filter ? 'text-surface' : 'text-primary'
            }`}>
              {filter}
            </span>
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        {filtered.map((order) => (
          <OrderCard key={order.id} order={order} />
        ))}
      </div>
    </>
  )
}
