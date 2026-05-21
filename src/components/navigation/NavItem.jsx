import { cn } from '../../utils/helpers'

export default function NavItem({ active, children, onClick }) {
  return (
    <button
      className={cn(
        'w-full rounded-figma px-3 py-2 text-left text-sm font-semibold transition',
        active ? 'bg-brand text-white' : 'text-ink-600 hover:bg-ink-100 hover:text-ink-900',
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}
