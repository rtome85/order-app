import { ShoppingCart } from 'lucide-react'

interface HeaderProps {
  cartCount?: number
}

export function Header({ cartCount = 0 }: HeaderProps) {
  return (
    <div className="flex justify-between items-center w-full">
      <h1 className="text-[42px] font-extrabold text-[#2D2A26] tracking-[-2px] leading-[0.9]">ORDER</h1>
      <div className="relative w-[46px] h-[46px]">
        <div className="flex items-center justify-center w-11 h-11 border-2 border-[#2D2A26] rounded-none">
          <ShoppingCart className="w-[22px] h-[22px] text-[#2D2A26]" />
        </div>
        <div className="absolute -top-1 left-7 flex items-center justify-center w-[18px] h-[18px] bg-[#C4634E]">
          <span className="text-[10px] font-bold text-white">{cartCount}</span>
        </div>
      </div>
    </div>
  )
}