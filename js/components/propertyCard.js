/* ==========================================================================
   sha_realestates - Property Card & Property Grid Rendering
   ========================================================================== */

import { store } from '../state.js';
import { formatCurrency, formatArea, getRiskColorClass } from '../utils/formatters.js';

export function renderPropertyCard(property) {
  const state = store.getState();
  const isSaved = state.savedPropertyIds.includes(property.id);
  const formattedPrice = formatCurrency(property.askingPrice, state.currency);

  return `
    <div class="property-card glass-panel" onclick="window.app.openPropertyModal('${property.id}')" style="cursor: pointer;">
      <div class="card-image-wrap">
        <img src="${property.images[0]}" alt="${property.title}" class="card-image" onerror="this.src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80'" />
        
        <div class="card-badges">
          <span class="badge badge-emerald">
            <i class="fa-solid fa-shield-halved"></i> Passport Verified
          </span>
          <span class="badge ${getRiskColorClass(property.riskScore.overall)}">
            Risk: ${property.riskScore.overall}
          </span>
        </div>

        <button class="card-favorite-btn" onclick="event.stopPropagation(); window.app.toggleFavorite('${property.id}')">
          <i class="${isSaved ? 'fa-solid' : 'fa-regular'} fa-heart" style="${isSaved ? 'color: var(--accent-rose);' : ''}"></i>
        </button>

        ${property.has360Tour ? `
          <div style="position: absolute; bottom: 0.75rem; right: 0.75rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); padding: 0.25rem 0.65rem; border-radius: 20px; font-size: 0.75rem; color: white; display: flex; align-items: center; gap: 0.35rem;">
            <i class="fa-solid fa-vr-cardboard" style="color: var(--accent-cyan);"></i> 360° Tour
          </div>
        ` : ''}
      </div>

      <div class="card-body">
        <div style="display: flex; align-items: center; justify-content: space-between;">
          <div class="card-price">${formattedPrice}</div>
          <span style="font-size: 0.75rem; background: rgba(16, 185, 129, 0.12); color: var(--accent-emerald); padding: 0.2rem 0.5rem; border-radius: 4px; font-weight: 600;">
            ${property.valuationStatus}
          </span>
        </div>

        <h3 class="card-title">${property.title}</h3>
        
        <div class="card-location">
          <i class="fa-solid fa-location-dot" style="color: var(--accent-rose);"></i>
          <span>${property.locationName}</span>
        </div>

        <div class="card-specs">
          ${property.bedrooms ? `
            <div class="spec-item">
              <i class="fa-solid fa-bed"></i>
              <span>${property.bedrooms} Beds</span>
            </div>
          ` : ''}
          ${property.bathrooms ? `
            <div class="spec-item">
              <i class="fa-solid fa-bath"></i>
              <span>${property.bathrooms} Baths</span>
            </div>
          ` : ''}
          <div class="spec-item">
            <i class="fa-solid fa-ruler-combined"></i>
            <span>${formatArea(property.areaSqFt)}</span>
          </div>
        </div>

        <div class="card-footer">
          <div style="display: flex; align-items: center; gap: 0.4rem; font-size: 0.82rem; color: var(--accent-gold); font-weight: 600;">
            <i class="fa-solid fa-star"></i>
            <span>Location Score: ${property.locationScore.overall}/100</span>
          </div>
          
          <button class="btn-secondary" style="padding: 0.35rem 0.85rem; font-size: 0.8rem;" onclick="event.stopPropagation(); window.app.openPropertyModal('${property.id}')">
            View Passport <i class="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  `;
}

export function renderPropertyGrid() {
  const state = store.getState();
  const properties = state.filteredProperties;

  if (!properties || properties.length === 0) {
    return `
      <div style="text-align: center; padding: 4rem 2rem; background: var(--bg-glass-card); border-radius: var(--radius-md); border: 1px solid var(--border-color);">
        <i class="fa-solid fa-building-circle-exclamation" style="font-size: 3rem; color: var(--text-muted); margin-bottom: 1rem;"></i>
        <h3 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.5rem;">No properties found</h3>
        <p style="color: var(--text-secondary); max-width: 450px; margin: 0 auto 1.5rem;">Try adjusting your search criteria or ask the Realty AI Agent to expand your location radius.</p>
        <button class="btn-ai" onclick="window.app.toggleAIDrawer()">
          <i class="fa-solid fa-robot"></i> Ask AI to Find Properties
        </button>
      </div>
    `;
  }

  return `
    <div class="property-grid">
      ${properties.map(p => renderPropertyCard(p)).join('')}
    </div>
  `;
}
