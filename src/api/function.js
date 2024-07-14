export function formatCurrencyVND(amount) {
  // Create a new instance of Intl.NumberFormat for Vietnamese locale
  const formatter = new Intl.NumberFormat('vi-VN', {
    currency: 'VND',
    minimumFractionDigits: 0 // Ensure no decimal points are shown
  })
  const p = formatter.format(amount)

  // Format the amount
  return `${p} VND`
}

