export function formatCurrencyVND(amount) {
    // Create a new instance of Intl.NumberFormat for Vietnamese locale
    const formatter = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
      minimumFractionDigits: 0 // Ensure no decimal points are shown
    });
  
    // Format the amount
    return formatter.format(amount)
  }


  