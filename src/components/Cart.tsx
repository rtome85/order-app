import { ArrowRight } from 'lucide-react'
import type { CartItem } from '../types'

interface CartProps {
  items: CartItem[]
  onUpdateQuantity: (id: string, delta: number) => void
  onClear: () => void
  deliveryFee?: number
}

function CartItemRow({ item, onUpdateQuantity }: { item: CartItem; onUpdateQuantity: (id: string, delta: number) => void }) {
  return (
    <div className="flex gap-3 w-full bg-surface-card p-4 border-[3px] border-border-strong">
      <div className="w-16 h-16 bg-surface-placeholder flex-shrink-0" />
      <div className="flex flex-col gap-2 w-full">
        <span className="text-base font-extrabold text-primary">{item.name}</span>
        <div className="flex justify-between items-center w-full">
          <div className="flex items-center gap-3.5 border-2 border-border-strong px-3 py-1.5">
            <button onClick={() => onUpdateQuantity(item.id, -1)} className="text-base font-bold text-primary">−</button>
            <span className="text-sm font-bold text-primary">{item.quantity}</span>
            <button onClick={() => onUpdateQuantity(item.id, 1)} className="text-base font-bold text-primary">+</button>
          </div>
          <span className="text-lg font-extrabold text-primary">
            ${(item.price * item.quantity).toFixed(2)}
          </span>
        </div>
      </div>
    </div>
  )
}

export function Cart({ items, onUpdateQuantity, onClear, deliveryFee = 2.5 }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const total = subtotal + deliveryFee
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <>
      <div className="flex justify-between items-center w-full">
        <h1 className="text-[42px] font-extrabold text-primary tracking-[-2px] leading-[0.9]">CART</h1>
        <div className="flex items-center gap-3">
          <span className="text-xs font-bold text-muted tracking-[1px]">{itemCount} ITEMS</span>
          <button
            onClick={onClear}
            className="px-2.5 py-1.5 border-2 border-accent text-accent text-[11px] font-bold tracking-[1px]"
          >
            CLEAR
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {items.map((item) => (
          <CartItemRow key={item.id} item={item} onUpdateQuantity={onUpdateQuantity} />
        ))}
      </div>

      <div className="flex flex-col gap-3 bg-surface-card p-4 border-[3px] border-border-strong">
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-muted tracking-[1px]">SUBTOTAL</span>
          <span className="text-sm font-bold text-primary">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-xs font-bold text-muted tracking-[1px]">DELIVERY</span>
          <span className="text-sm font-bold text-primary">${deliveryFee.toFixed(2)}</span>
        </div>
        <div className="w-full h-px bg-border" />
        <div className="flex justify-between items-center">
          <span className="text-lg font-extrabold text-primary">TOTAL</span>
          <span className="text-lg font-extrabold text-accent">${total.toFixed(2)}</span>
        </div>
      </div>

      <button className="flex items-center justify-center gap-3 w-full h-[58px] bg-accent border-[3px] border-border-strong">
        <span className="text-lg font-extrabold text-white tracking-[1px]">PLACE ORDER</span>
        <ArrowRight className="w-[18px] h-[18px] text-white" />
      </button>
    </>
  )
}
