import { Bell, Menu, MoreHorizontal, Plus, Upload } from 'lucide-react'
import { useState } from 'react'
import Button from '../common/Button'
import SearchBar from '../common/SearchBar'

export default function Header({ onMenuClick }) {
  const [query, setQuery] = useState('')

  return (
    <header className="sticky top-0 z-30 border-b border-ink-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-12 max-w-[1024px] items-center gap-3 px-4 sm:px-5">
        <button
          aria-label="Open navigation"
          className="rounded-figma p-2 text-ink-600 transition hover:bg-ink-100 lg:hidden"
          onClick={onMenuClick}
          type="button"
        >
          <Menu className="h-5 w-5" />
        </button>

        <SearchBar className="max-w-[370px] flex-1" onChange={setQuery} value={query} />

        <div className="ml-auto hidden items-center gap-2 sm:flex">
          <Button className="min-h-8 px-3 py-1.5 text-xs" icon={Upload} variant="subtle">
            Upload
          </Button>
          <Button className="min-h-8 px-3 py-1.5 text-xs" icon={Plus}>
            Create
          </Button>
        </div>

        <button
          aria-label="Notifications"
          className="hidden rounded-full p-2 text-ink-500 transition hover:bg-ink-100 hover:text-ink-800 xs:inline-flex"
          type="button"
        >
          <Bell className="h-4 w-4" />
        </button>
        <button
          aria-label="More options"
          className="rounded-full p-2 text-ink-500 transition hover:bg-ink-100 hover:text-ink-800"
          type="button"
        >
          <MoreHorizontal className="h-4 w-4" />
        </button>
      </div>
    </header>
  )
}
