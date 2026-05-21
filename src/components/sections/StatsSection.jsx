import { ArrowLeft } from 'lucide-react'

export default function StatsSection() {
  return (
    <div className="mb-3 flex items-center">
      <button className="inline-flex items-center gap-2 text-xs font-semibold text-ink-500 transition hover:text-ink-900" type="button">
        <ArrowLeft className="h-3.5 w-3.5" />
        Back to plans
      </button>
    </div>
  )
}
