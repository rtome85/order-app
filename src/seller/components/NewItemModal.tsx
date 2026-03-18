import { useState } from 'react'
import { Camera, Check } from 'lucide-react'
import type { SellerMenuItem } from '../types'

type NewItemCategory = 'BURGERS' | 'BEER' | 'SIDES' | 'DRINKS'

const CATEGORIES: NewItemCategory[] = ['BURGERS', 'BEER', 'SIDES', 'DRINKS']

interface NewItemModalProps {
  isOpen: boolean
  onClose: () => void
  onSave: (item: Omit<SellerMenuItem, 'id'>) => void
}

export function NewItemModal({ isOpen, onClose, onSave }: NewItemModalProps) {
  const [category, setCategory] = useState<NewItemCategory>('BURGERS')
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [available, setAvailable] = useState(true)

  if (!isOpen) return null

  function handleSave() {
    if (!name.trim()) return
    onSave({ name, price: `$${price}`, category, available })
    setName('')
    setDescription('')
    setPrice('')
    setCategory('BURGERS')
    setAvailable(true)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-end max-w-[402px] mx-auto">
      <div className="absolute inset-0 bg-primary/45" onClick={onClose} />
      <div className="relative flex flex-col gap-4 bg-surface-card border-[3px] border-border-strong px-6 pt-4 pb-9 animate-slide-up">
        <div className="flex justify-center pb-2">
          <div className="w-9 h-1 bg-border" />
        </div>

        <h2 className="text-[20px] font-extrabold text-primary tracking-[0.5px]">ADD NEW ITEM</h2>

        <div className="flex gap-[6px]">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              aria-pressed={category === cat}
              onClick={() => setCategory(cat)}
              className={`px-[14px] py-2 ${category === cat ? 'bg-primary' : 'border-2 border-border-strong'}`}
            >
              <span className={`text-[11px] font-bold tracking-[0.8px] ${category === cat ? 'text-surface' : 'text-primary'}`}>
                {cat}
              </span>
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 h-24 bg-surface border-2 border-border">
          <Camera className="w-6 h-6 text-disabled" />
          <span className="text-[11px] font-semibold text-disabled tracking-[1px]">TAP TO ADD PHOTO</span>
        </div>

        <div className="flex flex-col gap-3">
          <label className="text-[11px] font-bold text-muted tracking-[1.5px]">ITEM NAME</label>
          <div className="flex items-center px-[14px] py-3 bg-surface border-2 border-border-strong">
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. Double Smash Burger"
              className="flex-1 bg-transparent text-[15px] font-medium text-primary placeholder:text-disabled outline-none"
            />
          </div>

          <label className="text-[11px] font-bold text-muted tracking-[1.5px]">DESCRIPTION</label>
          <div className="flex items-center px-[14px] py-3 bg-surface border-2 border-border-strong">
            <input
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Short description of the item..."
              className="flex-1 bg-transparent text-[15px] font-medium text-primary placeholder:text-disabled outline-none"
            />
          </div>

          <label className="text-[11px] font-bold text-muted tracking-[1.5px]">PRICE</label>
          <div className="flex items-center gap-1 px-[14px] py-3 bg-surface border-2 border-accent">
            <span className="text-[15px] font-bold text-primary">$</span>
            <input
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="0.00"
              inputMode="decimal"
              className="flex-1 bg-transparent text-[15px] font-medium text-primary placeholder:text-disabled outline-none"
            />
          </div>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-[13px] font-semibold text-primary">AVAILABLE IN MENU</span>
          <button
            onClick={() => setAvailable(v => !v)}
            className={`flex items-center gap-1.5 px-[10px] py-[5px] ${available ? 'bg-[#7A9B76]' : 'bg-muted'}`}
          >
            <div className="w-2 h-2 bg-white" />
            <span className="text-[11px] font-bold text-white tracking-[0.5px]">{available ? 'ON' : 'OFF'}</span>
          </button>
        </div>

        <button
          onClick={handleSave}
          className="flex items-center justify-center gap-2 w-full py-[14px] bg-accent"
        >
          <Check className="w-4 h-4 text-white" />
          <span className="text-[14px] font-bold text-white tracking-[0.5px]">SAVE ITEM</span>
        </button>

        <button onClick={onClose} className="text-center">
          <span className="text-[13px] font-semibold text-muted tracking-[0.5px]">CANCEL</span>
        </button>
      </div>
    </div>
  )
}
