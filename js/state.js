/* ==========================================================================
   sha_realestates - Application State Store & Event Listener Subscription
   ========================================================================== */

import { INITIAL_PROPERTIES } from './data/properties.js';

class StateStore {
  constructor() {
    this.state = {
      properties: INITIAL_PROPERTIES,
      filteredProperties: INITIAL_PROPERTIES,
      activeTab: 'discovery', // discovery, map, ai-agent, sell, loans, investment, lease, doc-vault, crm, analytics, dashboard
      activeCategory: 'All', // All, Buy, Rent, Commercial, Projects, Land
      currency: 'INR', // INR, USD
      userRole: 'buyer', // buyer, seller, broker, admin
      selectedProperty: null,
      savedPropertyIds: ['prop-101'],
      searchQuery: '',
      filters: {
        minPrice: 0,
        maxPrice: 50000000,
        bedrooms: 'any',
        city: 'All'
      },
      aiChatHistory: [
        {
          id: 1,
          sender: 'ai',
          text: 'Hello Jayesh! I am your AI Real Estate Agent. How can I assist you today? You can ask me to find properties, calculate EMIs, evaluate rental yield, check title documents, or suggest negotiation offers!',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ],
      userDocuments: [
        { id: 'doc-1', name: 'Identity Proof (Aadhaar/Passport)', status: 'VERIFIED', type: 'KYC', date: '2026-08-20' },
        { id: 'doc-2', name: 'Income Tax Return (ITR-V 2025-26)', status: 'VERIFIED', type: 'Financial', date: '2026-08-22' }
      ],
      notifications: [
        { id: 1, text: 'AI Property Match: 94% match found in Kakkanad!', time: '10 mins ago', unread: true },
        { id: 2, text: 'Site visit confirmed for Villa in Marine Drive tomorrow 4:00 PM', time: '1 hour ago', unread: true }
      ]
    };

    this.listeners = [];
  }

  getState() {
    return this.state;
  }

  setState(newState) {
    this.state = { ...this.state, ...newState };
    this.notify();
  }

  subscribe(listener) {
    this.listeners.push(listener);
    return () => {
      this.listeners = this.listeners.filter(l => l !== listener);
    };
  }

  notify() {
    this.listeners.forEach(listener => listener(this.state));
  }

  // Helper Actions
  setActiveTab(tab) {
    this.setState({ activeTab: tab });
  }

  setCategory(category) {
    let filtered = this.state.properties;
    if (category !== 'All') {
      if (category === 'Buy' || category === 'Rent') {
        filtered = filtered.filter(p => p.listingType === category);
      } else if (category === 'Commercial' || category === 'Residential') {
        filtered = filtered.filter(p => p.propertyType === category);
      }
    }
    this.setState({ activeCategory: category, filteredProperties: filtered });
  }

  toggleFavorite(propertyId) {
    const saved = [...this.state.savedPropertyIds];
    const index = saved.indexOf(propertyId);
    if (index > -1) {
      saved.splice(index, 1);
    } else {
      saved.push(propertyId);
    }
    this.setState({ savedPropertyIds: saved });
  }

  toggleCurrency() {
    const nextCurrency = this.state.currency === 'INR' ? 'USD' : 'INR';
    this.setState({ currency: nextCurrency });
  }

  setUserRole(role) {
    this.setState({ userRole: role });
  }

  setSelectedProperty(property) {
    this.setState({ selectedProperty: property });
  }

  addAIChatMessage(message) {
    const chat = [...this.state.aiChatHistory, message];
    this.setState({ aiChatHistory: chat });
  }

  addDocument(doc) {
    const docs = [doc, ...this.state.userDocuments];
    this.setState({ userDocuments: docs });
  }
}

export const store = new StateStore();
