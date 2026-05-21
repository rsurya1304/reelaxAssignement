import { cn } from '../../utils/helpers'

const variants = {
  primary: 'bg-brand text-white hover:bg-brand-600 shadow-[0_8px_18px_rgba(37,99,235,0.18)]',
  secondary: 'border border-ink-200 bg-white text-ink-700 hover:border-brand-200 hover:text-brand',
  ghost: 'bg-transparent text-ink-700 hover:bg-ink-100',
  subtle: 'bg-brand-50 text-brand hover:bg-brand-100',
}

export default function Button({
  children,
  className,
  icon: Icon,
  iconPosition = 'left',
  type = 'button',
  variant = 'primary',
  ...props
}) {
  return (
    <button
      className={cn(
        'inline-flex min-h-9 items-center justify-center gap-2 rounded-figma px-4 py-2 text-sm font-semibold transition duration-200 disabled:cursor-not-allowed disabled:opacity-60',
        variants[variant],
        className,
      )}
      type={type}
      {...props}
    >
      {Icon && iconPosition === 'left' ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
      <span>{children}</span>
      {Icon && iconPosition === 'right' ? <Icon className="h-4 w-4" aria-hidden="true" /> : null}
    </button>
  )
}
