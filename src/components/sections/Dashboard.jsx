import Analytics from './Analytics'
import StatsSection from './StatsSection'
import TableSection from './TableSection'

export default function Dashboard() {
  return (
    <div>
      <StatsSection />
      <div className="grid grid-cols-1 gap-3 lg:grid-cols-[minmax(0,1.38fr)_minmax(300px,0.72fr)]">
        <TableSection />
        <Analytics />
      </div>
    </div>
  )
}
