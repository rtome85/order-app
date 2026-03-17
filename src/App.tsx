import { useState } from 'react'
import { Signal, Wifi, Battery, ShoppingCart, Utensils, Receipt, User } from 'lucide-react'
import { MenuItem } from './components/MenuItem'
import { BottomNavigation } from './components/BottomNavigation'
import type { MenuItem as MenuItemType } from './types'
import './App.css'

const burgers: MenuItemType[] = [
  { id: '1', name: 'SMASH BURGER', description: 'Double beef patty, cheddar, pickles, house sauce', price: '$12' },
  { id: '2', name: 'DOUBLE STACK', description: 'Two patties, bacon, American cheese, caramelized onions', price: '$14' },
  { id: '3', name: 'CRISPY CHICKEN', description: 'Fried chicken breast, coleslaw, pickled jalapeños, aioli', price: '$11' },
]

const beers: MenuItemType[] = [
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


function Header() {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-[42px] font-extrabold text-[#2D2A26] tracking-[-2px] leading-[0.9]">ORDER</h1>
      <div className="relative w-[46px] h-[46px]">
        <div className="flex items-center justify-center w-11 h-11 border-2 border-[#2D2A26] rounded-none">
          <ShoppingCart className="w-[22px] h-[22px] text-[#2D2A26]" />
        </div>
        <div className="absolute -top-1 left-7 flex items-center justify-center w-[18px] h-[18px] bg-[#C4634E]">
          <span className="text-[10px] font-bold text-white">0</span>
        </div>
      </div>
    </div>
  )
}

function CategoryTabs({ active, onChange }: { active: string; onChange: (cat: string) => void }) {
  return (
    <div className="flex gap-2 w-full">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex items-center justify-center px-3.5 py-2 ${active === cat
            ? 'bg-[#2D2A26]'
            : 'bg-transparent border-2 border-[#2D2A26]'
            }`}
        >
          <span className={`text-xs font-bold tracking-[1px] ${active === cat ? 'text-[#F5F2ED]' : 'text-[#2D2A26]'
            }`}>
            {cat}
          </span>
        </button>
      ))}
    </div>
  )
}

function MenuSection({ title, items }: { title: string; items: MenuItemType[] }) {
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

function App() {
  const [activeCategory, setActiveCategory] = useState('ALL')
  const [activeTab, setActiveTab] = useState('MENU')

  return (
    <div className="flex flex-col h-[900px] bg-[#F5F2ED] overflow-hidden pt-6">
      <div className="flex flex-col gap-6 px-6 pb-6">
        <Header />
        <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
      </div>

      <div className="flex-1 overflow-y-auto px-6 pb-[120px] flex flex-col gap-6">
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
