/* ==========================================================================
   sha_realestates - User Dashboard & Personal Property Vault
   ========================================================================== */

import { store } from '../state.js';
import { renderPropertyCard } from './propertyCard.js';

export function renderUserDashboard() {
  const state = store.getState();
  const savedProps = state.properties.filter(p => state.savedPropertyIds.includes(p.id));

  return `
    <div style="max-width: 1100px; margin: 0 auto;">
      
      <!-- Welcome Header -->
      <div class="glass-panel" style="padding: 2rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 1.25rem;">
          <div style="width: 60px; height: 60px; border-radius: 50%; background: linear-gradient(135deg, var(--accent-emerald), var(--accent-cyan)); display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem; font-weight: 800;">
            JN
          </div>
          <div>
            <h2 style="font-size: 1.8rem; font-weight: 800; color: white;">Welcome back, Jayesh Nair</h2>
            <div style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 0.15rem;">
              Verified Buyer Passport • KYC Status: <strong style="color: var(--accent-emerald);">✅ Approved</strong>
            </div>
          </div>
        </div>

        <button class="btn-ai" onclick="window.app.toggleAIDrawer()">
          <i class="fa-solid fa-robot"></i> Open AI Agent
        </button>
      </div>

      <!-- Quick Metrics -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.25rem; margin-bottom: 2rem;">
        <div class="glass-panel" style="padding: 1.25rem; text-align: center;">
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Saved Properties</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-rose); margin-top: 0.25rem;">${savedProps.length}</div>
        </div>

        <div class="glass-panel" style="padding: 1.25rem; text-align: center;">
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Upcoming Visits</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-gold); margin-top: 0.25rem;">1</div>
        </div>

        <div class="glass-panel" style="padding: 1.25rem; text-align: center;">
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Active Negotiations</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-purple); margin-top: 0.25rem;">2</div>
        </div>

        <div class="glass-panel" style="padding: 1.25rem; text-align: center;">
          <div style="font-size: 0.78rem; color: var(--text-muted); font-weight: 600; text-transform: uppercase;">Vault Documents</div>
          <div style="font-size: 1.8rem; font-weight: 800; color: var(--accent-emerald); margin-top: 0.25rem;">${state.userDocuments.length}</div>
        </div>
      </div>

      <!-- Saved Properties Section -->
      <div style="margin-bottom: 2.5rem;">
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 1.25rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-heart" style="color: var(--accent-rose);"></i> Your Saved Properties (${savedProps.length})
        </h3>

        ${savedProps.length > 0 ? `
          <div class="property-grid">
            ${savedProps.map(p => renderPropertyCard(p)).join('')}
          </div>
        ` : `
          <div class="glass-panel" style="padding: 3rem; text-align: center; color: var(--text-muted);">
            No saved properties yet. Click the heart icon on any property to save it to your passport vault.
          </div>
        `}
      </div>

    </div>
  `;
}
