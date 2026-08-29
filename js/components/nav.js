/* ==========================================================================
   sha_realestates - Module Navigation Tabs
   ========================================================================== */

import { store } from '../state.js';

export function renderNav() {
  const state = store.getState();
  const active = state.activeTab;

  const tabs = [
    { id: 'discovery', label: '🏠 Discovery', badge: null },
    { id: 'map', label: '📍 Location Intelligence & Map', badge: 'Map' },
    { id: 'sell', label: '💵 AI Listing Generator', badge: 'AI' },
    { id: 'loans', label: '🏦 Home Loans & EMI', badge: null },
    { id: 'investment', label: '📊 Investment Yield', badge: 'ROI' },
    { id: 'lease', label: '📄 Digital Lease Builder', badge: null },
    { id: 'doc-vault', label: '🔐 Document Vault & OCR', badge: 'KYC' },
    { id: 'crm', label: '🤝 Broker CRM', badge: 'Leads' },
    { id: 'analytics', label: '📈 Market Analytics', badge: 'Live' },
    { id: 'dashboard', label: '👤 My Vault', badge: null }
  ];

  return `
    <div style="padding: 1rem 2rem 0; background: var(--bg-primary);">
      <div class="module-nav">
        ${tabs.map(tab => `
          <button class="nav-tab ${active === tab.id ? 'active' : ''}" onclick="window.app.navigateToTab('${tab.id}')">
            <span>${tab.label}</span>
            ${tab.badge ? `<span style="font-size: 0.65rem; background: rgba(255,255,255,0.2); padding: 0.1rem 0.4rem; border-radius: 10px;">${tab.badge}</span>` : ''}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}
