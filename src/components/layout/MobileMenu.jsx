import { X } from 'lucide-react'
import Sidebar from './Sidebar'

export default function MobileMenu({ activeItem, isOpen, onClose, onItemChange }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden" role="dialog" aria-modal="true">
      <button
        aria-label="Close menu overlay"
        className="absolute inset-0 bg-ink-900/35"
        onClick={onClose}
        type="button"
      />
      <div className="relative h-full w-[min(82vw,280px)] bg-white shadow-soft">
        <button
          aria-label="Close navigation"
          className="absolute right-3 top-3 rounded-figma p-2 text-ink-500 transition hover:bg-ink-100 hover:text-ink-900"
          onClick={onClose}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>
        <Sidebar activeItem={activeItem} onItemChange={onItemChange} />
      </div>
    </div>
  )
}
