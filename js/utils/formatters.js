/* ==========================================================================
   sha_realestates - Utility Formatters (Currency, Area, Dates, Scores)
   ========================================================================== */

export function formatCurrency(amount, currency = 'INR') {
  if (amount === undefined || amount === null) return '₹0';

  if (currency === 'USD') {
    const usdAmount = Math.round(amount / 83.5);
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(usdAmount);
  }

  // Indian Rupees Formatting (Lakh & Crore notation)
  if (amount >= 10000000) {
    const crore = (amount / 10000000).toFixed(2);
    return `₹${crore} Cr`;
  } else if (amount >= 100000) {
    const lakh = (amount / 100000).toFixed(1);
    return `₹${lakh} Lakh`;
  } else {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(amount);
  }
}

export function formatArea(sqft) {
  if (!sqft) return '0 sq.ft';
  return `${sqft.toLocaleString('en-IN')} sq.ft`;
}

export function formatPricePerSqFt(price, area) {
  if (!price || !area) return '₹0/sq.ft';
  const perSqft = Math.round(price / area);
  return `₹${perSqft.toLocaleString('en-IN')}/sq.ft`;
}

export function getRiskColorClass(level) {
  switch (level?.toUpperCase()) {
    case 'LOW': return 'badge-emerald';
    case 'MEDIUM': return 'badge-gold';
    case 'HIGH': return 'badge-rose';
    default: return 'badge-emerald';
  }
}
