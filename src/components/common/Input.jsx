import { ChevronDown } from 'lucide-react'
import { cn } from '../../utils/helpers'

export default function Input({ className, id, label, type = 'text', ...props }) {
  const isSelect = type === 'select'

  return (
    <label className="block" htmlFor={id}>
      <span className="mb-1.5 block text-[11px] font-semibold leading-none text-ink-700">{label}</span>
      <span className="relative block">
        <input
          className={cn(
            'h-9 w-full rounded-figma-sm border border-ink-200 bg-ink-50 px-3 text-xs font-medium text-ink-700 transition placeholder:text-ink-400 hover:border-ink-300 focus:border-brand focus:bg-white focus:ring-0',
            isSelect && 'cursor-pointer pr-9',
            className,
          )}
          id={id}
          readOnly={isSelect}
          type={isSelect ? 'text' : type}
          {...props}
        />
        {isSelect ? (
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-ink-400" />
        ) : null}
      </span>
    </label>
  )
}
