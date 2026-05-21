export const navItems = [
  { id: 'billing', label: 'Billing' },
  { id: 'plan', label: 'Plan' },
  { id: 'wallet', label: 'Wallet' },
]

export const billingFields = [
  { id: 'company', label: 'Company Name', placeholder: 'arhijgan' },
  { id: 'email', label: 'Email', placeholder: 'arhijgan.pandey@yahoomail.com', type: 'email' },
  { id: 'gst', label: 'GST Number (Optional)', placeholder: 'GST Number' },
  { id: 'pan', label: 'PAN Number (Optional)', placeholder: 'PAN Number' },
  { id: 'premise', label: 'Premise/House no.', placeholder: 'Premise/House no.' },
  { id: 'street', label: 'Street', placeholder: 'Street' },
]

export const locationFields = [
  { id: 'state', label: 'State', placeholder: 'Select state', type: 'select' },
  { id: 'city', label: 'City', placeholder: 'Select city', type: 'select' },
  { id: 'country', label: 'Country', placeholder: 'India' },
  { id: 'pin', label: 'Pin Code', placeholder: 'Pincode' },
]

export const coupons = [
  { id: 'welcome20', code: 'WELCOME20', description: '20% off your first month', active: true },
  { id: 'annual50', code: 'ANNUAL50', description: '50% off on annual plans', active: false },
]

export const summaryTotals = {
  subtotal: 14000,
  tax: 1079.64,
  total: 16078.64,
}

export const quickStats = [
  { id: 'plan', label: 'Selected plan', value: 'Startup' },
  { id: 'credits', label: 'Credits included', value: '5,000' },
  { id: 'billing', label: 'Billing cycle', value: 'Monthly' },
]
