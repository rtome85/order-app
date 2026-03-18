import { useEffect } from 'react'
import { MapPin, CreditCard, Hourglass, ArrowRight } from 'lucide-react'

interface PlaceOrderProps {
  open: boolean
  onClose: () => void
  itemCount: number
  total: number
}

export function PlaceOrder({ open, onClose, itemCount, total }: PlaceOrderProps) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end max-w-[402px] mx-auto">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />

      <div className="relative w-full bg-surface-card border-t-[3px] border-x-[3px] border-border-strong flex flex-col gap-5 px-6 pt-4 pb-9 animate-slide-up">
        {/* Handle */}
        <div className="flex justify-center pt-1">
          <div className="w-9 h-1 bg-border" />
        </div>

        {/* Title */}
        <h2 className="text-[28px] font-extrabold text-primary tracking-[-1px] leading-[0.9]">
          CONFIRM ORDER
        </h2>

        {/* Delivery Address */}
        <div className="flex flex-col gap-2 w-full">
          <span className="text-xs font-bold text-muted tracking-[2px]">DELIVERY ADDRESS</span>
          <div className="flex items-center gap-3 w-full bg-surface p-3.5 border-2 border-border-strong">
            <MapPin className="w-[18px] h-[18px] text-accent flex-shrink-0" />
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-[15px] font-bold text-primary">123 Brewery Lane</span>
              <span className="text-[13px] font-medium text-secondary">Melbourne VIC 3000</span>
            </div>
            <button className="px-2.5 py-1.5 border-2 border-border-strong text-[11px] font-bold text-primary tracking-[1px]">
              EDIT
            </button>
          </div>
        </div>

        {/* Payment */}
        <div className="flex flex-col gap-2 w-full">
          <span className="text-xs font-bold text-muted tracking-[2px]">PAYMENT</span>
          <div className="flex items-center gap-3 w-full bg-surface p-3.5 border-2 border-border-strong">
            <CreditCard className="w-[18px] h-[18px] text-primary flex-shrink-0" />
            <div className="flex flex-col gap-0.5 flex-1">
              <span className="text-[15px] font-bold text-primary">&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; 4242</span>
              <span className="text-xs font-medium text-secondary">VISA DEBIT</span>
            </div>
            <button className="px-2.5 py-1.5 border-2 border-border-strong text-[11px] font-bold text-primary tracking-[1px]">
              EDIT
            </button>
          </div>
        </div>

        {/* Summary */}
        <div className="flex items-center justify-between w-full bg-primary p-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-xs font-bold text-muted tracking-[1px]">{itemCount} ITEMS</span>
            <span className="text-[26px] font-extrabold text-white leading-[0.9]">${total.toFixed(2)}</span>
          </div>
          <div className="flex items-center gap-1.5 border-2 border-success px-3 py-2">
            <Hourglass className="w-3.5 h-3.5 text-success" />
            <span className="text-xs font-bold text-success tracking-[0.5px]">~20-25 MIN</span>
          </div>
        </div>

        {/* CTA */}
        <button className="flex items-center justify-center gap-3 w-full py-4 bg-accent border-[3px] border-border-strong">
          <span className="text-lg font-extrabold text-white tracking-[1px]">CONFIRM &amp; PAY</span>
          <ArrowRight className="w-[18px] h-[18px] text-white" />
        </button>

        {/* Cancel */}
        <button onClick={onClose} className="w-full text-center text-[13px] font-bold text-muted tracking-[1px]">
          CANCEL
        </button>
      </div>
    </div>
  )
}
