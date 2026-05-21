import LayoutWrapper from '../components/layout/LayoutWrapper'
import Dashboard from '../components/sections/Dashboard'

export default function Home() {
  return (
    <LayoutWrapper>
      <p className="mb-2 text-xs font-bold text-brand">Body</p>
      <Dashboard />
    </LayoutWrapper>
  )
}
