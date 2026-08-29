/* ==========================================================================
   sha_realestates - Broker CRM & Lead Management Pipeline
   ========================================================================== */

export function renderBrokerCRM() {
  const columns = [
    { title: 'New Leads', color: 'var(--accent-cyan)', count: 3 },
    { title: 'Site Visit', color: 'var(--accent-gold)', count: 2 },
    { title: 'Negotiation', color: 'var(--accent-purple)', count: 1 },
    { title: 'Agreement / Closed', color: 'var(--accent-emerald)', count: 4 }
  ];

  const leads = [
    { id: 'lead-1', name: 'Rahul Sharma', budget: '₹85 Lakh', area: 'Kakkanad', score: 94, stage: 'New Leads', status: 'High Intent' },
    { id: 'lead-2', name: 'Anjali Verma', budget: '₹1.8 Cr', area: 'Marine Drive', score: 91, stage: 'Site Visit', status: 'Tomorrow 4 PM' },
    { id: 'lead-3', name: 'Dr. Suresh Kumar', budget: '₹4.5 Cr', area: 'MG Road', score: 88, stage: 'Negotiation', status: 'Counter Offer' },
    { id: 'lead-4', name: 'Mathew Varghese', budget: '₹1.2 Cr', area: 'Kazhakkoottam', score: 96, stage: 'Agreement / Closed', status: 'Token Paid' }
  ];

  return `
    <div style="max-width: 1280px; margin: 0 auto;">
      
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 2rem;">
        <div>
          <span class="badge badge-purple" style="margin-bottom: 0.5rem;">BROKER DASHBOARD</span>
          <h2 style="font-size: 2rem; font-weight: 800; color: white;">AI Lead Pipeline & CRM</h2>
        </div>

        <button class="btn-primary" onclick="alert('New lead entry form opened')">
          <i class="fa-solid fa-plus"></i> Add New Lead
        </button>
      </div>

      <!-- Kanban Columns Grid -->
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 1.5rem;">
        ${columns.map(col => `
          <div class="glass-panel" style="padding: 1.25rem; min-height: 500px; display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; padding-bottom: 0.75rem; border-bottom: 1px solid var(--border-color);">
              <h3 style="font-size: 1rem; font-weight: 700; color: ${col.color};">${col.title}</h3>
              <span class="badge" style="background: rgba(255,255,255,0.08); color: var(--text-primary);">${col.count}</span>
            </div>

            <div style="display: flex; flex-direction: column; gap: 1rem;">
              ${leads.filter(l => l.stage === col.title).map(lead => `
                <div style="background: var(--bg-secondary); padding: 1rem; border-radius: var(--radius-sm); border: 1px solid var(--border-color); cursor: pointer; transition: all 0.2s ease;" onclick="alert('Lead details for ${lead.name}')">
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.35rem;">
                    <strong style="font-size: 0.95rem; color: var(--text-primary);">${lead.name}</strong>
                    <span style="font-size: 0.75rem; color: var(--accent-emerald); font-weight: 700;">${lead.score}% AI Match</span>
                  </div>
                  <div style="font-size: 0.82rem; color: var(--text-secondary);">Looking for: ${lead.area} (${lead.budget})</div>
                  <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 0.75rem; font-size: 0.75rem;">
                    <span style="color: var(--accent-gold);"><i class="fa-solid fa-clock"></i> ${lead.status}</span>
                    <button class="btn-secondary" style="padding: 0.2rem 0.5rem; font-size: 0.75rem;" onclick="event.stopPropagation(); alert('AI Draft Message copied for ${lead.name}')">
                      <i class="fa-solid fa-robot"></i> AI Follow-up
                    </button>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        `).join('')}
      </div>

    </div>
  `;
}
