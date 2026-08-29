/* ==========================================================================
   sha_realestates - Home Loan & Finance EMI Calculator Component
   ========================================================================== */

import { formatCurrency } from '../utils/formatters.js';
import { store } from '../state.js';

export function renderLoanCalculator() {
  const state = store.getState();

  return `
    <div style="max-width: 1100px; margin: 0 auto;">
      
      <div class="glass-panel hero-banner" style="padding: 2.5rem; margin-bottom: 2rem;">
        <span class="badge badge-emerald" style="margin-bottom: 0.75rem;">
          <i class="fa-solid fa-calculator"></i> HOME LOAN INTELLIGENCE
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 0.5rem;">
          Instant Home Loan & EMI Affordability Calculator
        </h2>
        <p style="color: var(--text-secondary); max-width: 650px;">
          Calculate monthly EMIs, registration fees, total interest outflow, and compare partner bank rates across India.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        
        <!-- Controls Panel -->
        <div class="glass-panel" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-sliders" style="color: var(--accent-emerald);"></i> Loan Parameters
          </h3>

          <!-- Property Price Slider -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
              <span style="color: var(--text-secondary);">Property Price</span>
              <strong style="color: var(--accent-emerald); font-size: 1.1rem;" id="lbl-prop-price">₹80,00,000</strong>
            </div>
            <input type="range" min="1000000" max="50000000" step="500000" value="8000000" id="slider-price" style="width: 100%; cursor: pointer;" oninput="window.app.updateLoanCalc()" />
          </div>

          <!-- Down Payment Slider -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
              <span style="color: var(--text-secondary);">Down Payment (%)</span>
              <strong style="color: var(--accent-cyan); font-size: 1.1rem;" id="lbl-down-pct">20% (₹16,00,000)</strong>
            </div>
            <input type="range" min="10" max="50" step="5" value="20" id="slider-down" style="width: 100%; cursor: pointer;" oninput="window.app.updateLoanCalc()" />
          </div>

          <!-- Interest Rate Slider -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
              <span style="color: var(--text-secondary);">Interest Rate (p.a.)</span>
              <strong style="color: var(--accent-gold); font-size: 1.1rem;" id="lbl-interest-rate">8.50%</strong>
            </div>
            <input type="range" min="7.0" max="12.0" step="0.1" value="8.5" id="slider-rate" style="width: 100%; cursor: pointer;" oninput="window.app.updateLoanCalc()" />
          </div>

          <!-- Loan Tenure Slider -->
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.9rem; margin-bottom: 0.5rem;">
              <span style="color: var(--text-secondary);">Tenure (Years)</span>
              <strong style="color: var(--accent-purple); font-size: 1.1rem;" id="lbl-tenure">20 Years</strong>
            </div>
            <input type="range" min="5" max="30" step="1" value="20" id="slider-tenure" style="width: 100%; cursor: pointer;" oninput="window.app.updateLoanCalc()" />
          </div>

        </div>

        <!-- Calculated Summary & Chart -->
        <div class="glass-panel" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.5rem;">
          <h3 style="font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-chart-pie" style="color: var(--accent-cyan);"></i> Repayment Breakdown
          </h3>

          <div style="background: var(--bg-secondary); padding: 1.5rem; border-radius: var(--radius-md); border: 1px solid var(--border-color); text-align: center;">
            <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Monthly EMI Payment</div>
            <div style="font-size: 2.5rem; font-weight: 800; color: var(--accent-emerald); margin: 0.25rem 0;" id="calculated-emi">₹55,528/mo</div>
            <span class="badge badge-emerald">Eligible for Tax Exemption under Sec 24B</span>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
            <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.88rem;">
              <span style="color: var(--text-muted); display: block;">Principal Loan Amount</span>
              <strong style="font-size: 1.1rem; color: var(--text-primary);" id="lbl-principal">₹64,00,000</strong>
            </div>
            <div style="background: var(--bg-tertiary); padding: 1rem; border-radius: var(--radius-sm); font-size: 0.88rem;">
              <span style="color: var(--text-muted); display: block;">Total Interest Payable</span>
              <strong style="font-size: 1.1rem; color: var(--accent-gold);" id="lbl-total-interest">₹69,26,720</strong>
            </div>
          </div>

          <!-- Partner Banks Offer Grid -->
          <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
            <div style="font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); margin-bottom: 0.75rem;">
              Pre-Approved Lenders & Rates
            </div>
            
            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0.85rem; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.85rem;">
                <span style="font-weight: 600;">State Bank of India (SBI)</span>
                <strong style="color: var(--accent-emerald);">8.50% p.a.</strong>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0.85rem; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.85rem;">
                <span style="font-weight: 600;">HDFC Bank Home Loans</span>
                <strong style="color: var(--accent-emerald);">8.55% p.a.</strong>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.65rem 0.85rem; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.85rem;">
                <span style="font-weight: 600;">ICICI Bank Realty Finance</span>
                <strong style="color: var(--accent-emerald);">8.60% p.a.</strong>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  `;
}
