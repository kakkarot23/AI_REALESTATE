/* ==========================================================================
   sha_realestates - Regional Real Estate Market Analytics
   ========================================================================== */

export function renderMarketAnalytics() {
  return `
    <div style="max-width: 1100px; margin: 0 auto;">
      
      <div class="glass-panel hero-banner" style="padding: 2.5rem; margin-bottom: 2rem;">
        <span class="badge badge-emerald" style="margin-bottom: 0.75rem;">
          <i class="fa-solid fa-chart-candlestick"></i> MARKET INTELLIGENCE
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 0.5rem;">
          Kerala & Regional Real Estate Market Analytics
        </h2>
        <p style="color: var(--text-secondary); max-width: 650px;">
          Live price-per-square-foot benchmarks, 3-month growth trends, buyer demand velocity, and inventory metrics across major micro-markets.
        </p>
      </div>

      <!-- Quick Metrics Grid -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 2rem;">
        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Average Price / Sq.Ft</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-emerald); margin: 0.25rem 0;">₹8,450</div>
          <span style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 600;">+4.8% (3 Months)</span>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Rental Demand Index</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-cyan); margin: 0.25rem 0;">HIGH</div>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">94/100 Demand Velocity</span>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Active Inventory</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-gold); margin: 0.25rem 0;">18,472</div>
          <span style="font-size: 0.8rem; color: var(--text-secondary);">Listings Across Kerala</span>
        </div>

        <div class="glass-panel" style="padding: 1.5rem; text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">AI Market Outlook</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-purple); margin: 0.25rem 0;">BULLISH</div>
          <span style="font-size: 0.8rem; color: var(--accent-emerald); font-weight: 600;">High Capital Appreciation</span>
        </div>
      </div>

      <!-- Regional Price Breakdown Table -->
      <div class="glass-panel" style="padding: 1.5rem;">
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem;">
          Micro-Market Price Benchmarks (Kerala & South India)
        </h3>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          <div style="display: flex; justify-content: space-between; padding: 0.85rem 1rem; background: var(--bg-secondary); border-radius: var(--radius-sm); font-size: 0.9rem;">
            <strong>Kochi - Kakkanad IT Corridor</strong>
            <span style="color: var(--accent-emerald); font-weight: 700;">₹5,800 – ₹7,200/sq.ft (+6.2%)</span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 0.85rem 1rem; background: var(--bg-secondary); border-radius: var(--radius-sm); font-size: 0.9rem;">
            <strong>Kochi - Marine Drive Waterfront</strong>
            <span style="color: var(--accent-emerald); font-weight: 700;">₹12,500 – ₹16,000/sq.ft (+5.1%)</span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 0.85rem 1rem; background: var(--bg-secondary); border-radius: var(--radius-sm); font-size: 0.9rem;">
            <strong>Trivandrum - Technopark Kazhakkoottam</strong>
            <span style="color: var(--accent-emerald); font-weight: 700;">₹5,200 – ₹6,800/sq.ft (+5.8%)</span>
          </div>

          <div style="display: flex; justify-content: space-between; padding: 0.85rem 1rem; background: var(--bg-secondary); border-radius: var(--radius-sm); font-size: 0.9rem;">
            <strong>Calicut - Cyberpark & Beach Road</strong>
            <span style="color: var(--accent-emerald); font-weight: 700;">₹4,800 – ₹6,100/sq.ft (+4.2%)</span>
          </div>
        </div>
      </div>

    </div>
  `;
}
