import { Search } from 'lucide-react'
import { cn } from '../../utils/helpers'

export default function SearchBar({ value, onChange, className }) {
  return (
    <label className={cn('relative block w-full', className)}>
      <span className="sr-only">Search influencers</span>
      <input
        className="h-8 w-full rounded-figma border border-ink-200 bg-white pl-3 pr-9 text-xs font-medium text-ink-800 shadow-sm transition placeholder:text-ink-400 hover:border-ink-300 focus:border-brand focus:ring-0"
        onChange={(event) => onChange(event.target.value)}
        placeholder="Find influencers to collaborate with"
        type="search"
        value={value}
      />
      <Search className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-500" />
    </label>
  )
}
