/* ==========================================================================
   sha_realestates - Digital Lease Builder & E-Signature Workflow
   ========================================================================== */

export function renderLeaseBuilder() {
  return `
    <div style="max-width: 1000px; margin: 0 auto;">
      
      <div class="glass-panel hero-banner" style="padding: 2.5rem; margin-bottom: 2rem;">
        <span class="badge badge-cyan" style="margin-bottom: 0.75rem;">
          <i class="fa-solid fa-file-signature"></i> LEASE WORKFLOW
        </span>
        <h2 style="font-size: 2.2rem; font-weight: 800; color: white; margin-bottom: 0.5rem;">
          Digital Rental & Commercial Lease Agreement Builder
        </h2>
        <p style="color: var(--text-secondary); max-width: 650px;">
          Draft jurisdiction-compliant lease contracts, configure deposit terms, maintenance clauses, and execute digital e-signatures.
        </p>
      </div>

      <div class="glass-panel" style="padding: 2rem;">
        <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
          <div style="display: flex; align-items: center; gap: 0.75rem;">
            <span style="width: 32px; height: 32px; border-radius: 50%; background: var(--accent-emerald); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700;">1</span>
            <strong style="font-size: 1.05rem;">Landlord & Tenant Details</strong>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem; opacity: 0.5;">
            <span style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-tertiary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700;">2</span>
            <span>Rent & Deposit</span>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem; opacity: 0.5;">
            <span style="width: 32px; height: 32px; border-radius: 50%; background: var(--bg-tertiary); color: white; display: flex; align-items: center; justify-content: center; font-weight: 700;">3</span>
            <span>E-Signature</span>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; margin-bottom: 1.5rem;">
          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Landlord Name</label>
            <input type="text" class="glass-input" style="width: 100%;" value="Sabu Thomas" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Tenant Name</label>
            <input type="text" class="glass-input" style="width: 100%;" value="Jayesh Nair" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Monthly Rent Amount (₹)</label>
            <input type="number" class="glass-input" style="width: 100%;" value="32000" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Security Deposit Amount (₹)</label>
            <input type="number" class="glass-input" style="width: 100%;" value="100000" />
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Lease Duration</label>
            <select class="glass-input" style="width: 100%;">
              <option value="11">11 Months (Standard Kerala Lease)</option>
              <option value="24">24 Months</option>
              <option value="36">36 Months Commercial Lease</option>
            </select>
          </div>

          <div>
            <label style="font-size: 0.85rem; color: var(--text-secondary); display: block; margin-bottom: 0.35rem;">Maintenance Responsibility</label>
            <select class="glass-input" style="width: 100%;">
              <option value="tenant">Tenant pays society maintenance</option>
              <option value="landlord">Included in monthly rent</option>
            </select>
          </div>
        </div>

        <div style="background: var(--bg-tertiary); padding: 1.25rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); margin-bottom: 1.5rem; font-size: 0.85rem; color: var(--text-secondary);">
          <strong style="color: var(--text-primary); display: block; margin-bottom: 0.25rem;"><i class="fa-solid fa-gavel" style="color: var(--accent-emerald);"></i> Automated Legal Clause Generation</strong>
          This agreement includes standard Indian Stamp Act clauses, lock-in period definitions, notice period (2 months), and annual rent escalation limit (5-10%).
        </div>

        <button class="btn-primary" style="padding: 0.85rem 1.5rem;" onclick="window.app.generateLeaseContract()">
          <i class="fa-solid fa-file-contract"></i> Generate Digital Lease Contract
        </button>
      </div>

    </div>
  `;
}
