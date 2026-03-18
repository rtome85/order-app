import { useState } from 'react'
import { SellerHeader } from './components/SellerHeader'
import { StatsRow } from './components/StatsRow'
import { FilterTabs, type FilterValue } from './components/FilterTabs'
import { OrderList } from './components/OrderList'
import { BottomNavigation } from './components/BottomNavigation'
import type { SellerOrder } from './types'

const initialOrders: SellerOrder[] = [
  {
    id: '1',
    number: '#1043',
    placedAt: '14:45',
    items: [{ name: 'SMASH BURGER', quantity: 2 }, { name: 'HOUSE LAGER', quantity: 1 }],
    status: 'new',
  },
  {
    id: '2',
    number: '#1042',
    placedAt: '14:32',
    items: [{ name: 'CRISPY CHICKEN', quantity: 1 }, { name: 'IPA DRAFT', quantity: 2 }],
    status: 'preparing',
  },
  {
    id: '3',
    number: '#1041',
    placedAt: '14:18',
    items: [{ name: 'DOUBLE STACK', quantity: 1 }],
    status: 'ready',
  },
]

function App() {
  const [orders, setOrders] = useState<SellerOrder[]>(initialOrders)
  const [filter, setFilter] = useState<FilterValue>('ALL')
  const [activeTab, setActiveTab] = useState<'ORDERS' | 'MENU' | 'SETTINGS'>('ORDERS')

  const newCount = orders.filter(o => o.status === 'new').length
  const preparingCount = orders.filter(o => o.status === 'preparing').length
  const readyCount = orders.filter(o => o.status === 'ready').length
  const total = orders.length

  function handleAdvanceOrder(id: string) {
    setOrders(prev => {
      const order = prev.find(o => o.id === id)
      if (!order) return prev
      if (order.status === 'ready') return prev.filter(o => o.id !== id)
      const next: 'preparing' | 'ready' = order.status === 'new' ? 'preparing' : 'ready'
      return prev.map(o => o.id === id ? { ...o, status: next } : o)
    })
  }

  const subtitle = `${total} order${total !== 1 ? 's' : ''} · ${newCount} new`

  return (
    <div className="relative flex flex-col h-dvh bg-surface overflow-hidden">
      {activeTab === 'ORDERS' && (
        <>
          <div className="fixed top-0 left-0 max-w-[402px] w-full bg-surface z-10 pt-6">
            <div className="flex flex-col gap-4 px-6 pb-4">
              <SellerHeader subtitle={subtitle} />
              <StatsRow newCount={newCount} preparingCount={preparingCount} readyCount={readyCount} />
              <FilterTabs active={filter} onChange={setFilter} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pt-[240px] pb-[120px]">
            <OrderList orders={orders} filter={filter} onAdvance={handleAdvanceOrder} />
          </div>
        </>
      )}

      {activeTab === 'MENU' && (
        <div className="flex-1 flex items-center justify-center">
          <span className="text-muted text-sm">Menu management coming soon</span>
        </div>
      )}

      {activeTab === 'SETTINGS' && (
        <div className="flex-1 flex items-center justify-center">
          <span className="text-muted text-sm">Settings coming soon</span>
        </div>
      )}

      <BottomNavigation activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

export default App
