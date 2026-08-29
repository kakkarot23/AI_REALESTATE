/* ==========================================================================
   sha_realestates - Property Detail Modal & AI Property Passport
   ========================================================================== */

import { store } from '../state.js';
import { formatCurrency, formatArea, formatPricePerSqFt } from '../utils/formatters.js';

export function renderPropertyModal() {
  const state = store.getState();
  const prop = state.selectedProperty;

  if (!prop) return '';

  const formattedAsking = formatCurrency(prop.askingPrice, state.currency);
  const formattedMinVal = formatCurrency(prop.estimatedValuationRange.min, state.currency);
  const formattedMaxVal = formatCurrency(prop.estimatedValuationRange.max, state.currency);

  return `
    <div class="modal-overlay ${prop ? 'active' : ''}" onclick="window.app.closePropertyModal()">
      <div class="modal-container" onclick="event.stopPropagation()">
        
        <!-- Header Gallery & Passport Badge -->
        <div style="position: relative; height: 320px; background: #000; overflow: hidden; border-top-left-radius: var(--radius-lg); border-top-right-radius: var(--radius-lg);">
          <img src="${prop.images[0]}" alt="${prop.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.9;" />
          
          <button style="position: absolute; top: 1.25rem; right: 1.25rem; width: 40px; height: 40px; border-radius: 50%; background: rgba(0,0,0,0.6); backdrop-filter: blur(4px); border: 1px solid rgba(255,255,255,0.2); color: white; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.2rem;" onclick="window.app.closePropertyModal()">
            <i class="fa-solid fa-xmark"></i>
          </button>

          <div style="position: absolute; bottom: 1.25rem; left: 1.5rem; display: flex; gap: 0.75rem; align-items: center;">
            <div class="badge badge-emerald" style="padding: 0.4rem 0.85rem; font-size: 0.85rem; background: rgba(16,185,129,0.9); color: white; border: none; box-shadow: 0 4px 15px rgba(0,0,0,0.4);">
              <i class="fa-solid fa-passport"></i> PASSPORT ID: ${prop.aiPassportId}
            </div>
            ${prop.has360Tour ? `
              <div class="badge badge-cyan" style="padding: 0.4rem 0.85rem; font-size: 0.85rem; background: rgba(6,182,212,0.9); color: white; border: none;">
                <i class="fa-solid fa-vr-cardboard"></i> Interactive 360° Tour Available
              </div>
            ` : ''}
          </div>
        </div>

        <!-- Body Content -->
        <div style="padding: 2rem;">
          
          <!-- Title & Price Bar -->
          <div style="display: flex; align-items: flex-start; justify-content: space-between; gap: 1.5rem; margin-bottom: 1.5rem;">
            <div>
              <h2 style="font-size: 1.8rem; font-weight: 800; color: var(--text-primary); margin-bottom: 0.5rem; line-height: 1.2;">
                ${prop.title}
              </h2>
              <div style="display: flex; align-items: center; gap: 0.5rem; color: var(--text-secondary); font-size: 0.95rem;">
                <i class="fa-solid fa-location-dot" style="color: var(--accent-rose);"></i>
                <span>${prop.locationName}, ${prop.city}</span>
              </div>
            </div>

            <div style="text-align: right;">
              <div style="font-size: 2rem; font-weight: 800; color: var(--accent-emerald); line-height: 1;">
                ${formattedAsking}
              </div>
              <div style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.35rem;">
                ${formatPricePerSqFt(prop.askingPrice, prop.areaSqFt)}
              </div>
            </div>
          </div>

          <!-- Quick Specs Grid -->
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; padding: 1.25rem; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-color); margin-bottom: 2rem;">
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Bedrooms</div>
              <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);"><i class="fa-solid fa-bed" style="color: var(--accent-emerald);"></i> ${prop.bedrooms || 'N/A'}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Bathrooms</div>
              <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);"><i class="fa-solid fa-bath" style="color: var(--accent-cyan);"></i> ${prop.bathrooms || 'N/A'}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Built-up Area</div>
              <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);"><i class="fa-solid fa-ruler-combined" style="color: var(--accent-gold);"></i> ${formatArea(prop.areaSqFt)}</div>
            </div>
            <div>
              <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Possession</div>
              <div style="font-size: 1.2rem; font-weight: 700; color: var(--text-primary);"><i class="fa-solid fa-key" style="color: var(--accent-purple);"></i> ${prop.possession}</div>
            </div>
          </div>

          <!-- AI Price Valuation Intelligence Card -->
          <div class="glass-panel" style="padding: 1.5rem; margin-bottom: 2rem; border-color: rgba(16,185,129,0.3);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <h3 style="font-size: 1.1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-chart-line" style="color: var(--accent-emerald);"></i> AI Price Intelligence Estimate
              </h3>
              <span class="badge badge-emerald">Confidence: 94%</span>
            </div>

            <div style="display: flex; align-items: center; justify-content: space-between; background: var(--bg-secondary); padding: 1rem 1.5rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Seller Asking Price</div>
                <div style="font-size: 1.3rem; font-weight: 700; color: var(--text-primary);">${formattedAsking}</div>
              </div>

              <div style="text-align: center; border-left: 1px solid var(--border-color); border-right: 1px solid var(--border-color); padding: 0 2rem;">
                <div style="font-size: 0.8rem; color: var(--text-muted);">AI Estimated Market Value Range</div>
                <div style="font-size: 1.3rem; font-weight: 800; color: var(--accent-emerald);">${formattedMinVal} – ${formattedMaxVal}</div>
              </div>

              <div style="text-align: right;">
                <div style="font-size: 0.8rem; color: var(--text-muted);">Market Position</div>
                <div style="font-size: 1.1rem; font-weight: 700; color: var(--accent-gold);"><i class="fa-solid fa-circle-check"></i> ${prop.valuationStatus}</div>
              </div>
            </div>
          </div>

          <!-- Location Intelligence Scores (Radar/Progress Bars) -->
          <div style="margin-bottom: 2rem;">
            <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-location-crosshairs" style="color: var(--accent-cyan);"></i> Location Intelligence Score: ${prop.locationScore.overall}/100
            </h3>

            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
              ${Object.entries(prop.locationScore).filter(([key]) => key !== 'overall').map(([key, val]) => `
                <div>
                  <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
                    <span style="text-transform: capitalize; color: var(--text-secondary);">${key.replace(/([A-Z])/g, ' $1')}</span>
                    <span style="font-weight: 700; color: var(--accent-emerald);">${val}/100</span>
                  </div>
                  <div style="height: 6px; background: var(--bg-tertiary); border-radius: 3px; overflow: hidden;">
                    <div style="height: 100%; width: ${val}%; background: linear-gradient(90deg, var(--accent-emerald), var(--accent-cyan));"></div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- AI Risk Engine Screening -->
          <div style="margin-bottom: 2rem; padding: 1.25rem; background: var(--bg-tertiary); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem;">
              <h3 style="font-size: 1.1rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
                <i class="fa-solid fa-shield-halved" style="color: var(--accent-gold);"></i> AI Property Risk Screening Engine
              </h3>
              <span class="badge ${prop.riskScore.overall === 'LOW' ? 'badge-emerald' : 'badge-gold'}">Overall Risk: ${prop.riskScore.overall}</span>
            </div>

            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.85rem;">
              <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
                <span style="color: var(--text-muted); display: block;">Title Ownership</span>
                <strong style="color: #34d399;"><i class="fa-solid fa-circle-check"></i> ${prop.riskScore.ownershipDoc}</strong>
              </div>
              <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
                <span style="color: var(--text-muted); display: block;">Document Audit</span>
                <strong style="color: #34d399;"><i class="fa-solid fa-circle-check"></i> ${prop.riskScore.docCompleteness}</strong>
              </div>
              <div style="background: var(--bg-secondary); padding: 0.75rem; border-radius: var(--radius-sm); font-size: 0.85rem;">
                <span style="color: var(--text-muted); display: block;">Listing Authenticity</span>
                <strong style="color: #34d399;"><i class="fa-solid fa-circle-check"></i> ${prop.riskScore.listingAuthenticity}</strong>
              </div>
            </div>
          </div>

          <!-- Document Vault & Legal Checklist -->
          <div style="margin-bottom: 2.5rem;">
            <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.75rem; display: flex; align-items: center; gap: 0.5rem;">
              <i class="fa-solid fa-file-contract" style="color: var(--accent-purple);"></i> Verified Property Documents
            </h3>

            <div style="display: flex; flex-direction: column; gap: 0.5rem;">
              ${prop.documents.map(doc => `
                <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.75rem 1rem; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color); font-size: 0.9rem;">
                  <div style="display: flex; align-items: center; gap: 0.75rem;">
                    <i class="fa-solid fa-file-pdf" style="color: var(--accent-rose); font-size: 1.1rem;"></i>
                    <span style="font-weight: 500;">${doc.name}</span>
                  </div>
                  <span class="badge ${doc.status === 'VERIFIED' ? 'badge-emerald' : 'badge-gold'}">
                    ${doc.status === 'VERIFIED' ? '<i class="fa-solid fa-check"></i> Verified' : '<i class="fa-solid fa-clock"></i> Pending'}
                  </span>
                </div>
              `).join('')}
            </div>
          </div>

          <!-- Action Buttons Footer -->
          <div style="display: flex; align-items: center; gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--border-color);">
            <button class="btn-primary" style="flex: 1; justify-content: center; padding: 0.85rem;" onclick="window.app.scheduleSiteVisit('${prop.id}')">
              <i class="fa-solid fa-calendar-check"></i> Schedule Site Visit
            </button>

            <button class="btn-ai" style="flex: 1; justify-content: center; padding: 0.85rem;" onclick="window.app.startAINegotiation('${prop.id}')">
              <i class="fa-solid fa-comments-dollar"></i> Negotiate with AI
            </button>

            <button class="btn-secondary" style="padding: 0.85rem 1.25rem;" onclick="window.app.calculateLoanForProperty('${prop.id}')">
              <i class="fa-solid fa-calculator"></i> EMI Loan
            </button>
          </div>

        </div>
      </div>
    </div>
  `;
}
