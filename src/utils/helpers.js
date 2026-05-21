export function formatCurrency(value) {
  return new Intl.NumberFormat('en-IN', {
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
    style: 'currency',
    currency: 'INR',
  }).format(value)
}

export function cn(...classes) {
  return classes.filter(Boolean).join(' ')
}
