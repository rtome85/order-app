import { useState } from 'react'
import { Utensils, ShoppingCart, Receipt, User } from 'lucide-react'
import { Header } from './components/Header'
import { CategoryTabs } from './components/CategoryTabs'
import { MenuSection } from './components/MenuSection'
import { BottomNavigation } from './components/BottomNavigation'
import type { MenuItem } from './types'
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

const tabs = [
  { id: 'MENU', icon: Utensils, label: 'MENU' },
  { id: 'CART', icon: ShoppingCart, label: 'CART' },
  { id: 'ORDERS', icon: Receipt, label: 'ORDERS' },
  { id: 'PROFILE', icon: User, label: 'PROFILE' },
]

const categories = ['ALL', 'BURGERS', 'BEERS', 'SIDES']

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [activeTab, setActiveTab] = useState('MENU')

  return (
    <div className="relative flex flex-col h-[900px] bg-surface overflow-hidden">
      <div className="fixed top-0 left-0 max-w-[402px] w-full bg-surface z-10 pt-6">
        <div className="flex flex-col gap-6 px-6 pb-6">
          <Header cartCount={0} />
          <CategoryTabs categories={categories} active={activeCategory} onChange={setActiveCategory} />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 pt-[166px] pb-[120px] flex flex-col gap-6">
        <MenuSection title="BURGERS" items={burgers} />
        <MenuSection title="BEERS" items={beers} />
      </div>

      <BottomNavigation
        tabs={tabs}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />
    </div>
  )
}

export default App
