/* ==========================================================================
   sha_realestates - Digital Document Vault & AI OCR Scanner
   ========================================================================== */

import { store } from '../state.js';

export function renderDocVault() {
  const state = store.getState();
  const docs = state.userDocuments;

  return `
    <div style="max-width: 1100px; margin: 0 auto;">
      
      <div class="glass-panel hero-banner" style="padding: 2.5rem; margin-bottom: 2rem;">
        <span class="badge badge-emerald" style="margin-bottom: 0.75rem;">
          <i class="fa-solid fa-vault"></i> SECURE TRANSACTION VAULT
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 0.5rem;">
          Digital Property Document Vault & AI Risk Screening
        </h2>
        <p style="color: var(--text-secondary); max-width: 650px;">
          Store encrypted property deeds, tax tokens, EC certificates, and lease agreements with automated AI OCR extraction and title chain risk checks.
        </p>
      </div>

      <!-- Upload Action Box -->
      <div class="glass-panel" style="padding: 1.5rem; margin-bottom: 2rem; display: flex; align-items: center; justify-content: space-between; border-color: rgba(16, 185, 129, 0.3);">
        <div>
          <h3 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.25rem;">
            <i class="fa-solid fa-file-shield" style="color: var(--accent-emerald);"></i> Upload Legal Document for AI OCR Screening
          </h3>
          <p style="font-size: 0.85rem; color: var(--text-secondary);">
            Extract Survey Numbers, Owner Names, Registration Dates & detect potential title risk flags automatically.
          </p>
        </div>

        <button class="btn-primary" onclick="window.app.triggerDocUpload()">
          <i class="fa-solid fa-arrow-up-from-bracket"></i> Upload Document
        </button>
      </div>

      <!-- Document Table -->
      <div class="glass-panel" style="padding: 1.5rem;">
        <h3 style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <i class="fa-solid fa-folder-closed" style="color: var(--accent-gold);"></i> Vault Documents (${docs.length})
        </h3>

        <div style="display: flex; flex-direction: column; gap: 0.75rem;">
          ${docs.map(doc => `
            <div style="display: flex; align-items: center; justify-content: space-between; padding: 1rem 1.25rem; background: var(--bg-secondary); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
              <div style="display: flex; align-items: center; gap: 1rem;">
                <div style="width: 42px; height: 42px; border-radius: 10px; background: rgba(16, 185, 129, 0.15); display: flex; align-items: center; justify-content: center; color: var(--accent-emerald); font-size: 1.2rem;">
                  <i class="fa-solid fa-file-circle-check"></i>
                </div>
                <div>
                  <h4 style="font-size: 0.95rem; font-weight: 600; color: var(--text-primary);">${doc.name}</h4>
                  <div style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.15rem;">
                    Category: ${doc.type} • Uploaded: ${doc.date}
                  </div>
                </div>
              </div>

              <div style="display: flex; align-items: center; gap: 1rem;">
                <span class="badge ${doc.status === 'VERIFIED' ? 'badge-emerald' : 'badge-gold'}">
                  ${doc.status === 'VERIFIED' ? '✅ Verified & Encrypted' : '⏳ Scanning...'}
                </span>
                <button class="btn-secondary" style="padding: 0.35rem 0.75rem; font-size: 0.8rem;" onclick="window.app.runOCRAnalysis('${doc.name}')">
                  <i class="fa-solid fa-magnifying-glass"></i> AI OCR Scan
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

    </div>
  `;
}
