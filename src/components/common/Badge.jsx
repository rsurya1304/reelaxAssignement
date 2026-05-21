import { cn } from '../../utils/helpers'

const styles = {
  blue: 'bg-brand-50 text-brand',
  green: 'bg-success-50 text-success-700',
  amber: 'bg-warning-50 text-warning-600',
  gray: 'bg-ink-100 text-ink-600',
}

export default function Badge({ children, className, tone = 'blue' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-2.5 py-1 text-[11px] font-bold leading-none',
        styles[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
