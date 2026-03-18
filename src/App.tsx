import { useState } from 'react'
import { Utensils, ShoppingCart, Receipt, User } from 'lucide-react'
import { Header } from './components/Header'
import { CategoryTabs } from './components/CategoryTabs'
import { MenuSection } from './components/MenuSection'
import { BottomNavigation } from './components/BottomNavigation'
import { Cart } from './components/Cart'
import { Orders } from './components/Orders'
import { Profile } from './components/Profile'
import type { MenuItem, CartItem, Order } from './types'
import './App.css'

const burgers: MenuItem[] = [
  { id: '1', name: 'SMASH BURGER', description: 'Double beef patty, cheddar, pickles, house sauce', price: '$12' },
  { id: '2', name: 'DOUBLE STACK', description: 'Two patties, bacon, American cheese, caramelized onions', price: '$14' },
  { id: '3', name: 'CRISPY CHICKEN', description: 'Fried chicken breast, coleslaw, pickled jalapeños, aioli', price: '$11' },
]

const beers: MenuItem[] = [
  { id: '4', name: 'HOUSE LAGER', description: 'Crisp and light, brewed in-house. 330ml', price: '$6' },
  { id: '5', name: 'IPA DRAFT', description: 'Hoppy & aromatic, local craft IPA. 400ml', price: '$8' },
]

const initialCart: CartItem[] = [
  { id: '1', name: 'SMASH BURGER', price: 12, quantity: 2 },
  { id: '4', name: 'HOUSE LAGER', price: 6, quantity: 1 },
  { id: '5', name: 'IPA DRAFT', price: 7, quantity: 1 },
]

const navTabs = [
  { id: 'MENU', icon: Utensils, label: 'MENU' },
  { id: 'CART', icon: ShoppingCart, label: 'CART' },
  { id: 'ORDERS', icon: Receipt, label: 'ORDERS' },
  { id: 'PROFILE', icon: User, label: 'PROFILE' },
]

const sampleOrders: Order[] = [
  { id: '1', number: '#1042', date: 'Today, 14:32', items: 'Smash Burger × 2, IPA Draft × 1', total: '$31.00', status: 'preparing' },
  { id: '2', number: '#1038', date: 'Today, 13:15', items: 'Crispy Chicken × 1, House Lager × 2', total: '$25.50', status: 'ready' },
  { id: '3', number: '#1031', date: 'Yesterday, 19:44', items: 'Double Stack × 1, Loaded Fries × 1', total: '$22.00', status: 'delivered' },
  { id: '4', number: '#1024', date: 'Mar 15, 12:30', items: 'Smash Burger × 1, Pale Ale × 2', total: '$25.00', status: 'delivered' },
]

const categories = ['ALL', 'BURGERS', 'BEERS', 'SIDES']

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [activeTab, setActiveTab] = useState('MENU')
  const [cartItems, setCartItems] = useState<CartItem[]>(initialCart)

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  function handleUpdateQuantity(id: string, delta: number) {
    setCartItems(prev =>
      prev
        .map(item => item.id === id ? { ...item, quantity: item.quantity + delta } : item)
        .filter(item => item.quantity > 0)
    )
  }

  function handleClearCart() {
    setCartItems([])
  }

  return (
    <div className="relative flex flex-col h-dvh bg-surface overflow-hidden">
      {activeTab === 'MENU' && (
        <>
          <div className="fixed top-0 left-0 max-w-[402px] w-full bg-surface z-10 pt-6">
            <div className="flex flex-col gap-6 px-6 pb-6">
              <Header cartCount={cartCount} />
              <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
            </div>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pt-[166px] pb-[120px] flex flex-col gap-6">
            <MenuSection title="BURGERS" items={burgers} />
            <MenuSection title="BEERS" items={beers} />
          </div>
        </>
      )}

      {activeTab === 'ORDERS' && (
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-[120px] flex flex-col gap-6">
          <Orders orders={sampleOrders} />
        </div>
      )}

      {activeTab === 'PROFILE' && (
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-[120px] flex flex-col gap-6">
          <Profile />
        </div>
      )}

      {activeTab === 'CART' && (
        <div className="flex-1 overflow-y-auto px-6 pt-6 pb-[120px] flex flex-col gap-6">
          <Cart
            items={cartItems}
            onUpdateQuantity={handleUpdateQuantity}
            onClear={handleClearCart}
          />
        </div>
      )}

      <BottomNavigation
        tabs={navTabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}

export default App
