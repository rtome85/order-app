interface StatsRowProps {
  newCount: number
  preparingCount: number
  readyCount: number
}

export function StatsRow({ newCount, preparingCount, readyCount }: StatsRowProps) {
  return (
    <div className="flex gap-2">
      <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-primary p-[14px]">
        <span className="text-[26px] font-extrabold text-surface leading-none">{newCount}</span>
        <span className="text-[9px] font-bold tracking-[1.5px] text-surface">NEW</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-accent p-[14px]">
        <span className="text-[26px] font-extrabold text-white leading-none">{preparingCount}</span>
        <span className="text-[9px] font-bold tracking-[1.5px] text-white">PREPARING</span>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center gap-1 bg-success p-[14px]">
        <span className="text-[26px] font-extrabold text-white leading-none">{readyCount}</span>
        <span className="text-[9px] font-bold tracking-[1.5px] text-white">READY</span>
      </div>
    </div>
  )
}
