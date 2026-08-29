/* ==========================================================================
   sha_realestates - Location Intelligence & Leaflet Map Engine
   ========================================================================== */

import { store } from '../state.js';
import { formatCurrency } from '../utils/formatters.js';

export function renderMapComponent() {
  const state = store.getState();
  const properties = state.properties;

  return `
    <div style="display: grid; grid-template-columns: 1fr 340px; gap: 1.5rem; height: calc(100vh - 160px); min-height: 550px;">
      <!-- Interactive Leaflet Map Container -->
      <div class="glass-panel" style="position: relative; overflow: hidden; border-radius: var(--radius-md);">
        <div id="leaflet-map" style="width: 100%; height: 100%; z-index: 1;"></div>
        
        <!-- Floating Map Overlay Controls -->
        <div style="position: absolute; top: 1rem; left: 1rem; z-index: 1000; display: flex; gap: 0.5rem; background: rgba(17, 24, 39, 0.85); backdrop-filter: blur(12px); padding: 0.4rem; border-radius: var(--radius-full); border: 1px solid var(--border-color);">
          <button class="nav-tab active" onclick="window.app.toggleMapLayer('properties')">
            <i class="fa-solid fa-house"></i> Properties
          </button>
          <button class="nav-tab" onclick="window.app.toggleMapLayer('price-heatmap')">
            <i class="fa-solid fa-fire" style="color: var(--accent-rose);"></i> Price Heatmap
          </button>
          <button class="nav-tab" onclick="window.app.toggleMapLayer('pois')">
            <i class="fa-solid fa-layer-group" style="color: var(--accent-cyan);"></i> POIs (Metro/IT)
          </button>
        </div>
      </div>

      <!-- Location Intelligence Sidebar Panel -->
      <div class="glass-panel" style="padding: 1.5rem; overflow-y: auto; display: flex; flex-direction: column; gap: 1.25rem;">
        <h3 style="font-size: 1.2rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-compass" style="color: var(--accent-emerald);"></i> Kochi Location Score
        </h3>

        <div style="background: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); text-align: center;">
          <div style="font-size: 0.8rem; color: var(--text-muted); text-transform: uppercase; font-weight: 600;">Overall Location Rating</div>
          <div style="font-size: 2.75rem; font-weight: 800; color: var(--accent-emerald); line-height: 1.1; margin: 0.25rem 0;">91<span style="font-size: 1.2rem; color: var(--text-muted);">/100</span></div>
          <span class="badge badge-emerald">Prime Investment Zone</span>
        </div>

        <div style="display: flex; flex-direction: column; gap: 0.85rem;">
          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
              <span>Connectivity & Metro</span>
              <strong style="color: var(--accent-emerald);">92/100</strong>
            </div>
            <div style="height: 6px; background: var(--bg-secondary); border-radius: 3px; overflow: hidden;">
              <div style="width: 92%; height: 100%; background: var(--accent-emerald);"></div>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
              <span>Employment & IT Hubs</span>
              <strong style="color: var(--accent-cyan);">95/100</strong>
            </div>
            <div style="height: 6px; background: var(--bg-secondary); border-radius: 3px; overflow: hidden;">
              <div style="width: 95%; height: 100%; background: var(--accent-cyan);"></div>
            </div>
          </div>

          <div>
            <div style="display: flex; justify-content: space-between; font-size: 0.85rem; margin-bottom: 0.25rem;">
              <span>Rental Demand</span>
              <strong style="color: var(--accent-gold);">89/100</strong>
            </div>
            <div style="height: 6px; background: var(--bg-secondary); border-radius: 3px; overflow: hidden;">
              <div style="width: 89%; height: 100%; background: var(--accent-gold);"></div>
            </div>
          </div>
        </div>

        <div style="border-top: 1px solid var(--border-color); padding-top: 1rem; font-size: 0.85rem; color: var(--text-secondary);">
          <strong style="color: var(--text-primary); display: block; margin-bottom: 0.35rem;"><i class="fa-solid fa-circle-info" style="color: var(--accent-cyan);"></i> Neighborhood Insights</strong>
          Kakkanad & Marine Drive exhibit the highest demand surge (+4.8% price appreciation quarterly) driven by SmartCity Kochi expansion and Water Metro connectivity.
        </div>
      </div>
    </div>
  `;
}

export function initMapInstance() {
  const mapElement = document.getElementById('leaflet-map');
  if (!mapElement || typeof L === 'undefined') return;

  // Check if map already initialized
  if (window.leafletMapInstance) {
    window.leafletMapInstance.remove();
  }

  // Initialize Leaflet Map centered on Kochi [9.9790, 76.2760]
  const map = L.map('leaflet-map', {
    zoomControl: true,
    scrollWheelZoom: true
  }).setView([9.9950, 76.3200], 12);

  // Dark Tiles Layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 19
  }).addTo(map);

  const state = store.getState();
  const properties = state.properties;

  // Custom Icon Generator
  properties.forEach(p => {
    const priceText = p.askingPrice >= 10000000 
      ? `₹${(p.askingPrice / 10000000).toFixed(2)} Cr`
      : `₹${(p.askingPrice / 100000).toFixed(1)} L`;

    const customIcon = L.divIcon({
      className: 'custom-map-marker',
      html: `
        <div style="background: #10b981; color: white; padding: 4px 8px; border-radius: 14px; font-size: 11px; font-weight: 700; box-shadow: 0 4px 10px rgba(0,0,0,0.4); white-space: nowrap; border: 2px solid white;">
          ${priceText}
        </div>
      `,
      iconSize: [80, 30],
      iconAnchor: [40, 15]
    });

    const popupContent = `
      <div style="width: 220px; font-family: sans-serif;">
        <img src="${p.images[0]}" style="width: 100%; height: 110px; object-fit: cover; border-radius: 8px; margin-bottom: 6px;" />
        <strong style="font-size: 13px; color: #0f172a; display: block; line-height: 1.2; margin-bottom: 4px;">${p.title}</strong>
        <div style="color: #059669; font-weight: 800; font-size: 14px; margin-bottom: 6px;">${priceText}</div>
        <button style="width: 100%; background: #10b981; color: white; border: none; padding: 6px; border-radius: 6px; font-weight: 600; cursor: pointer; font-size: 12px;" onclick="window.app.openPropertyModal('${p.id}')">
          View Property Passport
        </button>
      </div>
    `;

    L.marker(p.coordinates, { icon: customIcon })
      .addTo(map)
      .bindPopup(popupContent);
  });

  window.leafletMapInstance = map;
}
