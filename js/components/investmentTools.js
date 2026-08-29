/* ==========================================================================
   sha_realestates - Property Investment & Rental Yield Analyzer
   ========================================================================== */

import { formatCurrency } from '../utils/formatters.js';

export function renderInvestmentTools() {
  return `
    <div style="max-width: 1100px; margin: 0 auto;">
      
      <div class="glass-panel hero-banner" style="padding: 2.5rem; margin-bottom: 2rem;">
        <span class="badge badge-gold" style="margin-bottom: 0.75rem;">
          <i class="fa-solid fa-chart-line"></i> INVESTMENT INTELLIGENCE
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 0.5rem;">
          Real Estate ROI & Rental Yield Analyzer
        </h2>
        <p style="color: var(--text-secondary); max-width: 650px;">
          Evaluate cash flows, gross/net rental yields, vacancy assumptions, and 5-year capital appreciation scenarios.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        
        <!-- Inputs -->
        <div class="glass-panel" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-calculator" style="color: var(--accent-gold);"></i> Investment Inputs
          </h3>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Total Purchase Price (₹)</label>
            <input type="number" id="invest-price" class="glass-input" style="width: 100%;" value="7500000" oninput="window.app.updateInvestmentCalc()" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Expected Monthly Rent (₹)</label>
            <input type="number" id="invest-rent" class="glass-input" style="width: 100%;" value="35000" oninput="window.app.updateInvestmentCalc()" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Annual Expenses (Taxes, Maintenance) (₹)</label>
            <input type="number" id="invest-expenses" class="glass-input" style="width: 100%;" value="80000" oninput="window.app.updateInvestmentCalc()" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Projected Annual Capital Growth (%)</label>
            <input type="number" id="invest-growth" class="glass-input" style="width: 100%;" value="6.5" step="0.5" oninput="window.app.updateInvestmentCalc()" />
          </div>
        </div>

        <!-- Calculated Metrics Card -->
        <div class="glass-panel" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-coins" style="color: var(--accent-emerald);"></i> Yield & Returns Breakdown
          </h3>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); text-align: center;">
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Gross Rental Yield</div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent-emerald); margin: 0.25rem 0;" id="calc-gross-yield">5.60%</div>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">₹4.20 Lakh / Year</span>
            </div>

            <div style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); text-align: center;">
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Net Rental Yield</div>
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent-cyan); margin: 0.25rem 0;" id="calc-net-yield">4.53%</div>
              <span style="font-size: 0.75rem; color: var(--text-secondary);">After Taxes & Maintenance</span>
            </div>
          </div>

          <div style="background: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
              <span style="font-size: 0.88rem; color: var(--text-secondary);">Projected 5-Year Property Value</span>
              <strong style="font-size: 1.2rem; color: var(--accent-emerald);" id="calc-5yr-val">₹1,02,75,620</strong>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span style="font-size: 0.88rem; color: var(--text-secondary);">Estimated Total 5-Year Capital Gain</span>
              <strong style="font-size: 1.2rem; color: var(--accent-gold);" id="calc-5yr-gain">+₹27,75,620 (+37.0%)</strong>
            </div>
          </div>

          <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
            <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;"><i class="fa-solid fa-lightbulb" style="color: var(--accent-gold);"></i> AI Investment Verdict</strong>
            This property falls into the top 15th percentile for rental yield stability in Kakkanad IT Corridor. Highly recommended for 5+ year holding period.
          </div>

        </div>

      </div>
    </div>
  `;
}
