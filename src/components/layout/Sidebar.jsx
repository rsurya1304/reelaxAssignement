import logo from '../../assets/icons/reelax-logo.svg'
import { navItems } from '../../utils/constants'
import NavItem from '../navigation/NavItem'

export default function Sidebar({ activeItem, onItemChange }) {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-ink-200 bg-white p-5">
      <div className="mb-8 flex items-center gap-3">
        <img alt="Reelax" className="h-10 w-10" src={logo} />
        <div>
          <p className="text-sm font-extrabold text-ink-900">Reelax</p>
          <p className="text-xs font-medium text-ink-500">Checkout</p>
        </div>
      </div>

      <nav aria-label="Sidebar navigation" className="space-y-1">
        {navItems.map((item) => (
          <NavItem active={activeItem === item.id} key={item.id} onClick={() => onItemChange(item.id)}>
            {item.label}
          </NavItem>
        ))}
      </nav>
    </aside>
  )
}
