import { Bell } from 'lucide-react'

interface SellerHeaderProps {
  subtitle: string
}

export function SellerHeader({ subtitle }: SellerHeaderProps) {
  return (
    <div className="flex items-start justify-between">
      <div className="flex flex-col gap-0.5">
        <h1 className="text-[22px] font-extrabold tracking-[0.5px] text-primary leading-tight">
          LIVE ORDERS
        </h1>
        <p className="text-sm text-secondary">{subtitle}</p>
      </div>
      <button className="p-1 -mr-1">
        <Bell className="w-6 h-6 text-primary" />
      </button>
    </div>
  )
}
