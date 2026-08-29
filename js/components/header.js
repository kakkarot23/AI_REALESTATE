/* ==========================================================================
   sha_realestates - Header Component (Role Switcher, Currency Toggle, AI Launcher)
   ========================================================================== */

import { store } from '../state.js';
import { formatCurrency } from '../utils/formatters.js';

export function renderHeader() {
  const state = store.getState();
  const savedCount = state.savedPropertyIds.length;
  const unreadCount = state.notifications.filter(n => n.unread).length;

  return `
    <header class="app-header glass-header">
      <div class="brand-logo" onclick="window.app.navigateToTab('discovery')" style="cursor: pointer;">
        <div class="brand-icon">
          <i class="fa-solid fa-building-user"></i>
        </div>
        <div class="brand-text">
          sha_<span>realestates</span>
          <span style="font-size: 0.65rem; display: block; color: var(--accent-cyan); font-weight: 500; letter-spacing: 0.05em; margin-top: -3px;">
            AI REAL ESTATE SUPER APP
          </span>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 1rem;">
        <!-- Currency Toggle -->
        <button class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.85rem;" onclick="window.app.toggleCurrency()">
          <i class="fa-solid fa-coins" style="color: var(--accent-gold);"></i>
          <span>${state.currency}</span>
        </button>

        <!-- User Role Switcher -->
        <div style="position: relative;">
          <select class="glass-input" style="padding: 0.4rem 0.85rem; font-size: 0.85rem; border-radius: 20px; cursor: pointer;" onchange="window.app.setUserRole(this.value)">
            <option value="buyer" ${state.userRole === 'buyer' ? 'selected' : ''}>👤 Buyer View</option>
            <option value="seller" ${state.userRole === 'seller' ? 'selected' : ''}>💵 Seller View</option>
            <option value="broker" ${state.userRole === 'broker' ? 'selected' : ''}>🤝 Broker CRM</option>
            <option value="admin" ${state.userRole === 'admin' ? 'selected' : ''}>📊 Admin View</option>
          </select>
        </div>

        <!-- Saved Properties Badge -->
        <button class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.85rem;" onclick="window.app.navigateToTab('dashboard')">
          <i class="fa-solid fa-heart" style="color: var(--accent-rose);"></i>
          <span>Saved (${savedCount})</span>
        </button>

        <!-- Notifications -->
        <button class="btn-secondary" style="padding: 0.4rem 0.85rem; font-size: 0.85rem; position: relative;" onclick="window.app.toggleNotifications()">
          <i class="fa-solid fa-bell"></i>
          ${unreadCount > 0 ? `<span style="position: absolute; top: -4px; right: -4px; width: 16px; height: 16px; background: var(--accent-rose); border-radius: 50%; font-size: 0.65rem; color: white; display: flex; align-items: center; justify-content: center; font-weight: 700;">${unreadCount}</span>` : ''}
        </button>

        <!-- AI Copilot Launcher -->
        <button class="btn-ai" onclick="window.app.toggleAIDrawer()">
          <i class="fa-solid fa-robot"></i>
          <span>Ask Realty AI</span>
        </button>
      </div>
    </header>
  `;
}
