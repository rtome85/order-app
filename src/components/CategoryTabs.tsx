interface CategoryTabsProps {
  categories: string[]
  active: string
  onChange: (category: string) => void
}

export function CategoryTabs({ categories, active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 w-full">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`flex items-center justify-center px-3.5 py-2 ${
            active === cat
              ? 'bg-[#2D2A26]'
              : 'bg-transparent border-2 border-[#2D2A26]'
          }`}
        >
          <span className={`text-xs font-bold tracking-[1px] ${
            active === cat ? 'text-[#F5F2ED]' : 'text-[#2D2A26]'
          }`}>
            {cat}
          </span>
        </button>
      ))}
    </div>
  )
}