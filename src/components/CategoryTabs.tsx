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
              ? 'bg-primary'
              : 'bg-transparent border-2 border-border-strong'
          }`}
        >
          <span className={`text-xs font-bold tracking-[1px] ${
            active === cat ? 'text-surface' : 'text-primary'
          }`}>
            {cat}
          </span>
        </button>
      ))}
    </div>
  )
}
