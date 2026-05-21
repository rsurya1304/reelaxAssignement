import { cn } from '../../utils/helpers'

export default function Tabs({ activeTab, onTabChange, tabs }) {
  return (
    <div className="flex items-center gap-1 rounded-figma border border-ink-200 bg-white p-1">
      {tabs.map((tab) => (
        <button
          className={cn(
            'rounded-figma-sm px-3 py-1.5 text-xs font-bold transition',
            activeTab === tab.id ? 'bg-brand text-white shadow-sm' : 'text-ink-500 hover:bg-ink-100 hover:text-ink-800',
          )}
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  )
}
