/* ==========================================================================
   sha_realestates - Floating AI Copilot Chat Drawer Component
   ========================================================================== */

import { store } from '../state.js';

export function renderAIDrawer() {
  const state = store.getState();
  const history = state.aiChatHistory;

  return `
    <!-- Floating AI Launcher Button -->
    <button class="floating-ai-trigger pulse-glow" onclick="window.app.toggleAIDrawer()" title="Open Realty AI Agent">
      <i class="fa-solid fa-robot"></i>
    </button>

    <!-- AI Drawer Box -->
    <div class="ai-drawer glass-panel" id="ai-drawer-container">
      
      <!-- Drawer Header -->
      <div class="chat-header">
        <div style="display: flex; align-items: center; gap: 0.65rem;">
          <div style="width: 34px; height: 34px; border-radius: 50%; background: linear-gradient(135deg, #6366f1, #8b5cf6); display: flex; align-items: center; justify-content: center; color: white; font-size: 0.95rem;">
            <i class="fa-solid fa-robot"></i>
          </div>
          <div>
            <h4 style="font-size: 0.95rem; font-weight: 700; color: white;">REALTY AI AGENT</h4>
            <span style="font-size: 0.7rem; color: var(--accent-emerald); font-weight: 600; display: flex; align-items: center; gap: 0.25rem;">
              <span style="width: 6px; height: 6px; border-radius: 50%; background: var(--accent-emerald);"></span> Online & Ready
            </span>
          </div>
        </div>

        <button style="background: transparent; border: none; color: var(--text-secondary); cursor: pointer; font-size: 1.1rem;" onclick="window.app.toggleAIDrawer()">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </div>

      <!-- Messages Thread -->
      <div class="chat-messages" id="ai-chat-thread">
        ${history.map(msg => `
          <div class="chat-bubble ${msg.sender === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}">
            ${msg.text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}
            <div style="font-size: 0.65rem; opacity: 0.7; margin-top: 0.35rem; text-align: right;">${msg.timestamp}</div>
          </div>
        `).join('')}
      </div>

      <!-- Quick Action Chips -->
      <div class="chat-quick-actions">
        <button class="quick-chip" onclick="window.app.sendQuickAIQuery('Find me 3 BHK in Kakkanad under ₹80 Lakh')">🏠 3 BHK Kakkanad</button>
        <button class="quick-chip" onclick="window.app.sendQuickAIQuery('Calculate EMI for ₹60 Lakh loan for 20 yrs')">🏦 EMI Calculation</button>
        <button class="quick-chip" onclick="window.app.sendQuickAIQuery('What is the rental yield for Marine Drive Villa?')">📊 Rental Yield</button>
        <button class="quick-chip" onclick="window.app.sendQuickAIQuery('Draft negotiation counter offer for ₹80L apartment')">🤝 Negotiate Strategy</button>
      </div>

      <!-- Input Bar -->
      <div class="chat-input-area">
        <button class="btn-secondary" style="padding: 0.55rem; border-radius: 50%; width: 36px; height: 36px; justify-content: center;" title="Voice Assistant">
          <i class="fa-solid fa-microphone" style="color: var(--accent-purple);"></i>
        </button>
        
        <input type="text" id="ai-drawer-input" class="glass-input" style="flex: 1; border-radius: 20px; font-size: 0.88rem;" placeholder="Ask AI anything about real estate..." onkeypress="if(event.key === 'Enter') window.app.sendAIMessage()" />

        <button class="btn-primary" style="padding: 0.55rem; border-radius: 50%; width: 36px; height: 36px; justify-content: center;" onclick="window.app.sendAIMessage()">
          <i class="fa-solid fa-paper-plane" style="font-size: 0.85rem;"></i>
        </button>
      </div>

    </div>
  `;
}
