/* ==========================================================================
   sha_realestates - AI Property Listing Generator (Seller Hub)
   ========================================================================== */

import { store } from '../state.js';

export function renderSellerWizard() {
  return `
    <div style="max-width: 1100px; margin: 0 auto;">
      
      <!-- Banner -->
      <div class="glass-panel hero-banner" style="padding: 2.5rem; margin-bottom: 2rem;">
        <span class="badge badge-purple" style="margin-bottom: 0.75rem;">
          <i class="fa-solid fa-wand-magic-sparkles"></i> AI LISTING GENERATOR
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 0.5rem;">
          Sell or Lease Property with AI Automation
        </h2>
        <p style="color: var(--text-secondary); max-width: 650px;">
          Upload your property details and photographs. Realty AI will instantly compose high-converting titles, descriptions, valuation bounds, and virtual staging previews.
        </p>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
        
        <!-- Seller Input Form -->
        <div class="glass-panel" style="padding: 2rem;">
          <h3 style="font-size: 1.25rem; font-weight: 700; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-pen-to-square" style="color: var(--accent-emerald);"></i> 1. Property Details
          </h3>

          <div style="display: flex; flex-direction: column; gap: 1rem;">
            <div>
              <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Property Title / Name</label>
              <input type="text" id="seller-title" class="glass-input" style="width: 100%;" placeholder="e.g. 3 BHK Luxury Apartment near Kakkanad" value="3 BHK Luxury Apartment in Kakkanad" />
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Category</label>
                <select id="seller-type" class="glass-input" style="width: 100%;">
                  <option value="Residential">Residential Apartment</option>
                  <option value="Villa">Luxury Villa</option>
                  <option value="Commercial">Commercial Office</option>
                  <option value="Plot">Residential Land / Plot</option>
                </select>
              </div>

              <div>
                <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">City & Location</label>
                <input type="text" id="seller-location" class="glass-input" style="width: 100%;" value="Kakkanad, Kochi" />
              </div>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 1rem;">
              <div>
                <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Area (sq.ft)</label>
                <input type="number" id="seller-area" class="glass-input" style="width: 100%;" value="1850" />
              </div>
              <div>
                <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Bedrooms</label>
                <input type="number" id="seller-beds" class="glass-input" style="width: 100%;" value="3" />
              </div>
              <div>
                <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Expected Price (₹)</label>
                <input type="number" id="seller-price" class="glass-input" style="width: 100%;" value="8500000" />
              </div>
            </div>

            <!-- Upload Dropzone -->
            <div style="border: 2px dashed var(--border-color); border-radius: var(--radius-sm); padding: 1.5rem; text-align: center; background: var(--bg-tertiary); cursor: pointer; transition: all 0.2s ease;">
              <i class="fa-solid fa-cloud-arrow-up" style="font-size: 2rem; color: var(--accent-emerald); margin-bottom: 0.5rem;"></i>
              <div style="font-size: 0.9rem; font-weight: 600;">Drag & Drop Property Photos or Floor Plans</div>
              <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.25rem;">Supports JPG, PNG, WEBP (Max 25MB)</div>
            </div>

            <button class="btn-ai" style="padding: 0.85rem; justify-content: center; font-size: 1rem; margin-top: 0.5rem;" onclick="window.app.generateAIListing()">
              <i class="fa-solid fa-wand-magic-sparkles"></i> Generate AI Listing Package
            </button>
          </div>
        </div>

        <!-- AI Output & Preview Panel -->
        <div class="glass-panel" style="padding: 2rem; display: flex; flex-direction: column; gap: 1.25rem;" id="ai-listing-output">
          <h3 style="font-size: 1.25rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem;">
            <i class="fa-solid fa-sparkles" style="color: var(--accent-purple);"></i> 2. AI Marketing Package Preview
          </h3>

          <div style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--accent-purple); font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem;">AI Suggested Title</div>
            <h4 style="font-size: 1.1rem; font-weight: 700; color: var(--text-primary);">Sunlit 3 BHK Smart Living Apartment | 1.5 km to InfoPark Kakkanad</h4>
          </div>

          <div style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700; text-transform: uppercase; margin-bottom: 0.25rem;">AI Price Intelligence Recommendation</div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.35rem;">
              <div>
                <div style="font-size: 0.8rem; color: var(--text-muted);">Recommended Asking</div>
                <strong style="font-size: 1.2rem; color: var(--accent-emerald);">₹82 Lakh – ₹86 Lakh</strong>
              </div>
              <span class="badge badge-emerald">Optimal Listing Window</span>
            </div>
          </div>

          <div style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div style="font-size: 0.75rem; color: var(--accent-cyan); font-weight: 700; text-transform: uppercase; margin-bottom: 0.35rem;">Target Buyer Persona</div>
            <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.45;">
              IT Managers, Tech Couples, and NRI Real Estate Investors seeking high-rental yield property close to SmartCity Kochi.
            </p>
          </div>

          <!-- Virtual Staging Preview Toggle -->
          <div style="background: var(--bg-secondary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.75rem;">
              <span style="font-size: 0.85rem; font-weight: 600;">AI Virtual Staging Preview</span>
              <span class="badge badge-purple">Disclosed AI Generated</span>
            </div>

            <div style="position: relative; height: 160px; border-radius: var(--radius-sm); overflow: hidden;">
              <img src="assets/images/apartment_kakkanad_1787985260634.jpg" style="width: 100%; height: 100%; object-fit: cover;" />
              <div style="position: absolute; bottom: 0.5rem; left: 0.5rem; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); padding: 0.2rem 0.6rem; border-radius: 4px; font-size: 0.75rem; color: white;">
                ✨ Staged with Italian Leather Sofa & Warm Recessed Lighting
              </div>
            </div>
          </div>

          <button class="btn-primary" style="padding: 0.85rem; justify-content: center;" onclick="window.app.publishListing()">
            <i class="fa-solid fa-rocket"></i> Publish Verified Listing
          </button>

        </div>

      </div>
    </div>
  `;
}
