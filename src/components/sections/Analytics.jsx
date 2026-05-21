import { CreditCard, Radio, ShieldCheck, Tag } from 'lucide-react'
import { useState } from 'react'
import { coupons, summaryTotals } from '../../utils/constants'
import { cn, formatCurrency } from '../../utils/helpers'
import Button from '../common/Button'
import Card from '../common/Card'

export default function Analytics() {
  const [activeCoupon, setActiveCoupon] = useState('welcome20')

  return (
    <Card className="p-5">
      <h2 className="font-heading text-lg font-bold text-ink-900">Order Summary</h2>

      <div className="mt-4 rounded-figma border border-ink-200 bg-white p-4">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="font-heading text-2xl font-extrabold tracking-normal text-ink-950">₹4,999</p>
            <p className="mt-1 text-[11px] font-semibold text-ink-500">Includes 5,000 credits/mo.</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-brand">Selected plan</p>
            <p className="mt-1 text-sm font-extrabold text-ink-900">Startup</p>
          </div>
        </div>
      </div>

      <button
        className="mt-3 inline-flex h-9 w-full items-center justify-center gap-2 rounded-full border border-brand-100 bg-brand-50 text-xs font-bold text-brand transition hover:bg-brand-100"
        type="button"
      >
        <ShieldCheck className="h-4 w-4" />
        Upgrade to Growth Plan
      </button>

      <div className="mt-4 space-y-3 rounded-figma border border-ink-200 bg-white p-4">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-figma bg-brand-50 text-brand">
              <CreditCard className="h-4 w-4" />
            </span>
            <div>
              <p className="text-xs font-extrabold text-ink-900">Wallet Balance</p>
              <p className="text-[11px] font-semibold text-ink-500">₹500.00 available</p>
            </div>
          </div>
          <button className="text-xs font-extrabold text-brand transition hover:text-brand-700" type="button">
            Apply
          </button>
        </div>

        <div className="border-t border-ink-200 pt-3">
          <div className="mb-3 flex items-center gap-2">
            <Tag className="h-4 w-4 text-ink-500" />
            <p className="text-xs font-extrabold text-ink-900">Apply Coupon</p>
          </div>

          <input
            className="mb-3 h-9 w-full rounded-figma-sm border border-ink-200 bg-white px-3 text-xs font-medium placeholder:text-ink-400 focus:border-brand focus:ring-0"
            placeholder="Enter coupon code"
            type="text"
          />

          <div className="space-y-2">
            {coupons.map((coupon) => (
              <button
                className={cn(
                  'flex w-full items-center justify-between rounded-figma-sm border p-3 text-left transition',
                  activeCoupon === coupon.id ? 'border-brand bg-brand-50/60' : 'border-ink-200 hover:border-brand-200',
                )}
                key={coupon.id}
                onClick={() => setActiveCoupon(coupon.id)}
                type="button"
              >
                <span>
                  <span className="block text-xs font-extrabold text-ink-900">{coupon.code}</span>
                  <span className="text-[11px] font-medium text-ink-500">{coupon.description}</span>
                </span>
                <Radio className={cn('h-4 w-4', activeCoupon === coupon.id ? 'text-brand' : 'text-ink-300')} />
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3 text-xs font-semibold">
        <div className="flex items-center justify-between text-ink-600">
          <span>Subtotal</span>
          <span>{formatCurrency(summaryTotals.subtotal)}</span>
        </div>
        <div className="flex items-center justify-between text-ink-600">
          <span>Tax (18% GST)</span>
          <span>{formatCurrency(summaryTotals.tax)}</span>
        </div>
        <div className="flex items-center justify-between border-t border-ink-200 pt-4">
          <span className="text-sm font-extrabold text-ink-900">Total due today</span>
          <span className="font-heading text-2xl font-extrabold text-brand">{formatCurrency(summaryTotals.total)}</span>
        </div>
      </div>

      <Button className="mt-5 w-full">Proceed to Payment</Button>
    </Card>
  )
}
