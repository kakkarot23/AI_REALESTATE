/* ==========================================================================
   sha_realestates - Main Application Orchestrator & Global Event Handlers
   ========================================================================== */

import { store } from './state.js';
import { renderHeader } from './components/header.js';
import { renderNav } from './components/nav.js';
import { renderPropertyGrid } from './components/propertyCard.js';
import { renderPropertyModal } from './components/propertyModal.js';
import { renderMapComponent, initMapInstance } from './components/mapEngine.js';
import { renderSellerWizard } from './components/sellerWizard.js';
import { renderLoanCalculator } from './components/loanCalculator.js';
import { renderInvestmentTools } from './components/investmentTools.js';
import { renderDocVault } from './components/docVault.js';
import { renderLeaseBuilder } from './components/leaseBuilder.js';
import { renderBrokerCRM } from './components/brokerCrm.js';
import { renderMarketAnalytics } from './components/marketAnalytics.js';
import { renderUserDashboard } from './components/userDashboard.js';
import { renderAIDrawer } from './components/aiDrawer.js';
import { RealtyAIAgent } from './ai/aiAgent.js';
import { formatCurrency } from './utils/formatters.js';

class Application {
  constructor() {
    this.init();
  }

  init() {
    // Subscribe to state changes
    store.subscribe(() => this.render());
    this.render();

    // Attach global window handlers
    window.app = this;
  }

  render() {
    const appElement = document.getElementById('app');
    if (!appElement) return;

    const state = store.getState();
    const activeTab = state.activeTab;

    let mainContent = '';

    switch (activeTab) {
      case 'discovery':
        mainContent = `
          <!-- Hero AI Search Header -->
          <div class="hero-banner glass-panel">
            <span class="badge badge-purple" style="margin-bottom: 0.75rem;">
              <i class="fa-solid fa-wand-magic-sparkles"></i> AI REAL ESTATE SUPER APP
            </span>
            <h1 class="hero-title">Find. Verify. Buy. Sell. Rent. Invest.</h1>
            <p class="hero-subtitle">
              Your AI Real Estate Agent discovers properties, screens title risks, estimates fair market values, calculates loan EMIs, and negotiates transactions.
            </p>

            <div class="ai-search-box">
              <i class="fa-solid fa-robot" style="font-size: 1.25rem; color: var(--accent-purple);"></i>
              <input type="text" id="hero-ai-search" class="ai-search-input" placeholder='Try asking: "Find me a 3 BHK apartment in Kochi under ₹80 lakh near Kakkanad with parking"' onkeypress="if(event.key==='Enter') window.app.handleHeroAISearch()" />
              <button class="btn-ai" onclick="window.app.handleHeroAISearch()">
                <span>Ask AI</span> <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>

          <!-- Filter Category Tabs -->
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.5rem;">
            <div style="display: flex; gap: 0.5rem;">
              ${['All', 'Buy', 'Rent', 'Commercial', 'Residential'].map(cat => `
                <button class="nav-tab ${state.activeCategory === cat ? 'active' : ''}" onclick="window.app.filterCategory('${cat}')">
                  ${cat}
                </button>
              `).join('')}
            </div>

            <div style="font-size: 0.88rem; color: var(--text-secondary);">
              Showing <strong style="color: var(--accent-emerald);">${state.filteredProperties.length}</strong> verified properties
            </div>
          </div>

          ${renderPropertyGrid()}
        `;
        break;

      case 'map':
        mainContent = renderMapComponent();
        break;

      case 'sell':
        mainContent = renderSellerWizard();
        break;

      case 'loans':
        mainContent = renderLoanCalculator();
        break;

      case 'investment':
        mainContent = renderInvestmentTools();
        break;

      case 'doc-vault':
        mainContent = renderDocVault();
        break;

      case 'lease':
        mainContent = renderLeaseBuilder();
        break;

      case 'crm':
        mainContent = renderBrokerCRM();
        break;

      case 'analytics':
        mainContent = renderMarketAnalytics();
        break;

      case 'dashboard':
        mainContent = renderUserDashboard();
        break;

      default:
        mainContent = renderPropertyGrid();
    }

    appElement.innerHTML = `
      ${renderHeader()}
      ${renderNav()}
      
      <main class="main-container">
        ${mainContent}
      </main>

      ${renderPropertyModal()}
      ${renderAIDrawer()}
    `;

    // Initialize Map if map tab active
    if (activeTab === 'map') {
      setTimeout(() => initMapInstance(), 100);
    }
  }

  // Navigation Handlers
  navigateToTab(tabId) {
    store.setActiveTab(tabId);
  }

  filterCategory(category) {
    store.setCategory(category);
  }

  toggleFavorite(propertyId) {
    store.toggleFavorite(propertyId);
    this.showToast('Property updated in your Passport Saved list!');
  }

  toggleCurrency() {
    store.toggleCurrency();
  }

  setUserRole(role) {
    store.setUserRole(role);
    if (role === 'broker') store.setActiveTab('crm');
    else if (role === 'seller') store.setActiveTab('sell');
    else store.setActiveTab('discovery');
  }

  // Modal Handlers
  openPropertyModal(propertyId) {
    const prop = store.getState().properties.find(p => p.id === propertyId);
    if (prop) store.setSelectedProperty(prop);
  }

  closePropertyModal() {
    store.setSelectedProperty(null);
  }

  // AI Drawer Handlers
  toggleAIDrawer() {
    const container = document.getElementById('ai-drawer-container');
    if (container) container.classList.toggle('active');
  }

  sendAIMessage() {
    const input = document.getElementById('ai-drawer-input');
    if (!input || !input.value.trim()) return;

    const userText = input.value.trim();
    input.value = '';

    store.addAIChatMessage({
      id: Date.now(),
      sender: 'user',
      text: userText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    });

    // Simulate AI response processing
    setTimeout(() => {
      const response = RealtyAIAgent.processUserQuery(userText, store.getState().properties);

      store.addAIChatMessage({
        id: Date.now() + 1,
        sender: 'ai',
        text: response.reply,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      });

      if (response.suggestedAction && response.suggestedAction !== 'discovery') {
        store.setActiveTab(response.suggestedAction);
      }
    }, 600);
  }

  sendQuickAIQuery(text) {
    const input = document.getElementById('ai-drawer-input');
    if (input) {
      input.value = text;
      this.sendAIMessage();
    }
  }

  handleHeroAISearch() {
    const input = document.getElementById('hero-ai-search');
    if (!input || !input.value.trim()) return;

    const query = input.value.trim();
    this.toggleAIDrawer();
    this.sendQuickAIQuery(query);
  }

  // Site Visit Scheduler
  scheduleSiteVisit(propertyId) {
    this.closePropertyModal();
    this.showToast('✅ Site Visit Scheduled! Our agent will contact you shortly.');
  }

  startAINegotiation(propertyId) {
    this.closePropertyModal();
    this.toggleAIDrawer();
    this.sendQuickAIQuery('Help me negotiate a 7% discount for this property');
  }

  calculateLoanForProperty(propertyId) {
    this.closePropertyModal();
    store.setActiveTab('loans');
  }

  // Interactive Calculator Dynamic Updates
  updateLoanCalc() {
    const price = parseFloat(document.getElementById('slider-price')?.value || 8000000);
    const downPct = parseFloat(document.getElementById('slider-down')?.value || 20);
    const rate = parseFloat(document.getElementById('slider-rate')?.value || 8.5);
    const tenureYrs = parseInt(document.getElementById('slider-tenure')?.value || 20);

    const downAmount = (price * downPct) / 100;
    const principal = price - downAmount;

    // EMI Calculation Formula: P * r * (1+r)^n / ((1+r)^n - 1)
    const monthlyRate = rate / 12 / 100;
    const totalMonths = tenureYrs * 12;
    const emi = Math.round((principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) / (Math.pow(1 + monthlyRate, totalMonths) - 1));
    const totalRepay = emi * totalMonths;
    const totalInterest = totalRepay - principal;

    if (document.getElementById('lbl-prop-price')) document.getElementById('lbl-prop-price').innerText = formatCurrency(price);
    if (document.getElementById('lbl-down-pct')) document.getElementById('lbl-down-pct').innerText = `${downPct}% (${formatCurrency(downAmount)})`;
    if (document.getElementById('lbl-interest-rate')) document.getElementById('lbl-interest-rate').innerText = `${rate.toFixed(2)}%`;
    if (document.getElementById('lbl-tenure')) document.getElementById('lbl-tenure').innerText = `${tenureYrs} Years`;

    if (document.getElementById('calculated-emi')) document.getElementById('calculated-emi').innerText = `₹${emi.toLocaleString('en-IN')}/mo`;
    if (document.getElementById('lbl-principal')) document.getElementById('lbl-principal').innerText = formatCurrency(principal);
    if (document.getElementById('lbl-total-interest')) document.getElementById('lbl-total-interest').innerText = formatCurrency(totalInterest);
  }

  updateInvestmentCalc() {
    const price = parseFloat(document.getElementById('invest-price')?.value || 7500000);
    const rent = parseFloat(document.getElementById('invest-rent')?.value || 35000);
    const expenses = parseFloat(document.getElementById('invest-expenses')?.value || 80000);
    const growth = parseFloat(document.getElementById('invest-growth')?.value || 6.5);

    const annualRent = rent * 12;
    const grossYield = ((annualRent / price) * 100).toFixed(2);
    const netAnnual = annualRent - expenses;
    const netYield = ((netAnnual / price) * 100).toFixed(2);

    const futureVal = Math.round(price * Math.pow(1 + (growth / 100), 5));
    const capitalGain = futureVal - price;

    if (document.getElementById('calc-gross-yield')) document.getElementById('calc-gross-yield').innerText = `${grossYield}%`;
    if (document.getElementById('calc-net-yield')) document.getElementById('calc-net-yield').innerText = `${netYield}%`;
    if (document.getElementById('calc-5yr-val')) document.getElementById('calc-5yr-val').innerText = formatCurrency(futureVal);
    if (document.getElementById('calc-5yr-gain')) document.getElementById('calc-5yr-gain').innerText = `+${formatCurrency(capitalGain)}`;
  }

  // Seller & Document Actions
  generateAIListing() {
    this.showToast('✨ AI Marketing Package Generated Successfully!');
  }

  publishListing() {
    this.showToast('🚀 Property Published to sha_realestates Marketplace!');
    store.setActiveTab('discovery');
  }

  triggerDocUpload() {
    const docName = prompt('Enter document title (e.g. Sale Deed, Encumbrance Certificate):', 'Registered Title Deed 2026');
    if (docName) {
      store.addDocument({
        id: `doc-${Date.now()}`,
        name: docName,
        status: 'VERIFIED',
        type: 'Legal Title',
        date: new Date().toISOString().split('T')[0]
      });
      this.showToast('Document uploaded & encrypted in your Passport Vault!');
    }
  }

  runOCRAnalysis(docName) {
    alert(`AI OCR Result for "${docName}":\n\n✅ Title Chain Verified (1998 - 2026)\n✅ Encumbrance Free\n✅ Survey No: 412/9B Kochi\n⚠️ Recommendation: Standard registration stamp duty clearance.`);
  }

  generateLeaseContract() {
    this.showToast('📄 11-Month Rental Agreement Generated & E-Signed!');
  }

  showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'glass-panel';
    toast.style.cssText = `
      position: fixed; bottom: 2rem; left: 50%; transform: translateX(-50%);
      padding: 0.85rem 1.5rem; background: var(--bg-secondary); border: 1px solid var(--accent-emerald);
      color: white; font-weight: 600; font-size: 0.9rem; border-radius: 30px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.5); z-index: 10000; animation: floatAnimation 3s ease;
    `;
    toast.innerText = message;
    document.body.appendChild(toast);
    setTimeout(() => toast.remove(), 3500);
  }
}

// Instantiate on DOM content loaded
document.addEventListener('DOMContentLoaded', () => {
  new Application();
});
