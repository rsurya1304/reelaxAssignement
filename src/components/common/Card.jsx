import { cn } from '../../utils/helpers'

export default function Card({ children, className, as: Component = 'section', ...props }) {
  return (
    <Component className={cn('surface', className)} {...props}>
      {children}
    </Component>
  )
}
