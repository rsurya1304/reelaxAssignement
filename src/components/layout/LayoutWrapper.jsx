import { useState } from 'react'
import Header from './Header'
import MobileMenu from './MobileMenu'

export default function LayoutWrapper({ children }) {
  const [activeItem, setActiveItem] = useState('billing')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleItemChange = (item) => {
    setActiveItem(item)
    setIsMenuOpen(false)
  }

  return (
    <div className="page-shell">
      <Header onMenuClick={() => setIsMenuOpen(true)} />
      <MobileMenu
        activeItem={activeItem}
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        onItemChange={handleItemChange}
      />
      <main className="mx-auto w-full max-w-[1024px] px-4 py-4 sm:px-5 lg:py-5">{children}</main>
    </div>
  )
}
