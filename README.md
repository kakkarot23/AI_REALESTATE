# 🏠 sha_realestates — AI Real Estate Operating System

<div align="center">

![sha_realestates Banner](assets/images/luxury_villa_kochi_1787985237839.jpg)

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-Visit_App-10b981?style=for-the-badge)](http://localhost:5500)
[![GitHub Repo](https://img.shields.io/badge/GitHub-AI__REALESTATE-181717?style=for-the-badge&logo=github)](https://github.com/kakkarot23/AI_REALESTATEREOI)
[![MIT License](https://img.shields.io/badge/License-MIT-6366f1?style=for-the-badge)](LICENSE)
[![AI Powered](https://img.shields.io/badge/AI-Powered-8b5cf6?style=for-the-badge&logo=openai)](https://github.com/kakkarot23/AI_REALESTATEREOI)

**One platform to discover, verify, buy, sell, rent, lease, finance, negotiate, document, and manage properties — with an AI real-estate agent orchestrating the entire workflow.**

> *"Find. Verify. Buy. Sell. Rent. Invest — Your AI Real Estate Agent Does the Work."*

</div>

---

## 📋 Table of Contents

- [✨ Overview](#-overview)
- [🌟 Key Features](#-key-features)
- [📸 Interface Screenshots](#-interface-screenshots)
- [🤖 AI Real Estate Agent](#-ai-real-estate-agent)
- [🏗️ Project Architecture](#-project-architecture)
- [📁 File Structure](#-file-structure)
- [🚀 Getting Started](#-getting-started)
- [📊 Module Breakdown](#-module-breakdown)
- [🗺️ Supported Property Types](#️-supported-property-types)
- [👥 User Roles](#-user-roles)
- [🔐 Security Features](#-security-features)
- [💰 Business Model](#-business-model)
- [🌍 Roadmap](#-roadmap)

---

## ✨ Overview

**sha_realestates** is a full-stack **AI Operating System for Real Estate** — not merely a property listing website, but a complete end-to-end platform:

```
Discover → Analyze → Verify → Negotiate → Finance → Agreement → Transact → Manage
```

Built with vanilla HTML, CSS, and JavaScript ES Modules with zero build dependencies — works directly from a browser with a simple Python HTTP server or any web server.

---

## 🌟 Key Features

| Feature | Description |
|---|---|
| 🤖 **AI Realty Agent** | Natural language property search & multi-intent conversational AI |
| 🏷️ **AI Property Passport** | Verified digital identity for every property listing |
| 📍 **Location Intelligence** | Interactive Leaflet map with 7-factor neighborhood scoring |
| 💰 **AI Price Intelligence** | Asking price vs AI-estimated fair market value range |
| 📸 **AI Listing Generator** | Auto-generate high-converting titles, descriptions & buyer personas |
| 🏦 **Home Loan Calculator** | Dynamic EMI calculator with partner bank rate comparison |
| 📊 **Investment Analyzer** | Gross/Net rental yield, 5-year capital appreciation projections |
| 🤝 **Negotiation Assistant** | AI counter-offer strategy & seller message drafts |
| 📄 **Lease Builder** | Digital rental agreement with e-signature workflow |
| 🔐 **Document Vault** | Encrypted property document storage with AI OCR screening |
| 🚨 **Risk Engine** | AI property risk scoring across 7 fraud/title indicators |
| 🏢 **Broker CRM** | Kanban lead pipeline with AI-powered follow-ups |
| 📈 **Market Analytics** | Regional price benchmarks and demand/supply intelligence |
| 👤 **User Dashboard** | Personal passport vault, saved properties & AI recommendations |

---

## 📸 Interface Screenshots

### 🏠 1. Property Discovery — Main Dashboard

The discovery page with an AI-powered conversational search bar, category filters, and property cards with verified AI Passport badges.

![Property Discovery](assets/images/apartment_kakkanad_1787985260634.jpg)

> **What you can do:**
> - Natural language AI search: *"Find me a 3 BHK apartment in Kochi under ₹80 lakh near Kakkanad"*
> - Filter by: All | Buy | Rent | Commercial | Residential
> - View property cards with Price, Location Score, Risk Level, and AI Match %
> - Toggle ♥ Favorite to save properties to your Passport Vault

---

### 🔐 2. AI Property Passport Modal

Clicking **View Passport** on any property card opens the full AI Property Passport with complete metrics.

> **Information displayed:**
> - 📸 Photo gallery + 360° Virtual Tour badge
> - 🔑 AI Passport ID (e.g., `RE-IND-KOC-00101`)
> - 💰 **Seller Asking Price** vs **AI Estimated Market Value Range**
> - 📍 **Location Intelligence Score** — 7-factor breakdown with progress bars
> - 🚨 **AI Risk Screening Engine** — Title Ownership, Document Audit, Listing Authenticity
> - 📄 **Verified Document Checklist** — Sale Deed, EC Certificate, Building Permit, Tax Receipt
> - ⚡ **Action Buttons**: Schedule Site Visit | Negotiate with AI | Calculate Loan EMI

---

### 🤖 3. Realty AI Agent — Conversational Copilot

The floating AI Agent drawer handles natural language queries with markdown-rendered responses and quick-action chips.

> **Example Queries:**
> ```
> "Find me 3 BHK in Kakkanad under ₹80 Lakh"
> "Calculate EMI for ₹60 Lakh loan for 20 yrs"
> "What is the rental yield for Marine Drive Villa?"
> "Draft negotiation counter offer for ₹80L apartment"
> ```
>
> **AI Agent can:**
> - Search and rank properties by match score (0–100%)
> - Calculate EMI & loan eligibility breakdown
> - Analyze rental yield and capital appreciation
> - Draft offer/negotiation messages to sellers
> - Detect missing title documents and flag risks

---

### 📍 4. Location Intelligence & Interactive Map

Interactive Leaflet.js map centered on Kochi, Kerala with custom property price markers, layer toggles, and neighborhood scoring.

![Commercial Property](assets/images/commercial_office_1787985288113.jpg)

> **Map Features:**
> - 🏠 Property markers showing price labels (₹1.85 Cr, ₹82L, ₹4.2 Cr)
> - 🔥 Price Heatmap layer toggle
> - 📍 POI layers (Metro Stations, IT Parks, Hospitals, Schools)
> - Clickable popups with thumbnail, price, and "View Property Passport" CTA
> - Location Score sidebar: Kochi overall **91/100**
>   - Connectivity & Metro: **92/100**
>   - Employment & IT Hubs: **95/100**
>   - Rental Demand: **89/100**

---

### 💵 5. AI Property Listing Generator (Seller Hub)

Intelligent seller wizard for creating high-converting property listings with AI-generated marketing content.

> **Seller inputs:**
> - Property Title, Category, Location, Area (sq.ft), Bedrooms, Expected Price
> - Upload Photos / Floor Plans (drag & drop)
>
> **AI Output Package:**
> - ✅ SEO-optimized listing title
> - ✅ AI Recommended Price Range (e.g., *₹82 Lakh – ₹86 Lakh*)
> - ✅ Target Buyer Persona (*"IT Managers, Tech Couples, and NRI Investors..."*)
> - ✅ Virtual Staging Preview with AI disclosure badge
> - ✅ One-click **Publish Verified Listing** to marketplace

---

### 🏦 6. Home Loan & EMI Calculator

Dynamic loan calculator with real-time slider updates and partner bank comparison.

> **Interactive Controls:**
> | Slider | Range | Default |
> |---|---|---|
> | Property Price | ₹10L – ₹5 Cr | ₹80,00,000 |
> | Down Payment | 10% – 50% | 20% |
> | Interest Rate | 7.0% – 12.0% | 8.5% p.a. |
> | Tenure | 5 – 30 Years | 20 Years |
>
> **Instant Calculations:**
> - 📊 **Monthly EMI** (e.g., ₹55,528/month)
> - 📊 **Principal Loan Amount** (₹64,00,000)
> - 📊 **Total Interest Payable** (₹69,26,720)
> - 🏦 **Partner Bank Rates**: SBI 8.50% | HDFC 8.55% | ICICI 8.60%

---

### 📊 7. Investment Yield Analyzer

Rental yield and ROI calculator with 5-year capital appreciation scenarios.

> **Key Metrics:**
> - 📈 **Gross Rental Yield**: 5.60% (₹4.20 Lakh/year)
> - 📈 **Net Rental Yield**: 4.53% (after taxes & maintenance)
> - 🏠 **5-Year Projected Value**: ₹1,02,75,620
> - 💹 **5-Year Capital Gain**: +₹27,75,620 (+37.0%)
>
> **AI Investment Verdict:**
> *"Top 15th percentile for rental yield stability in Kakkanad IT Corridor. Highly recommended for 5+ year holding period."*

---

### 📄 8. Digital Lease Builder

Step-by-step digital rental/commercial lease agreement generator with e-signature workflow.

> **Workflow:**
> ```
> Step 1: Landlord & Tenant Details
>     ↓
> Step 2: Rent, Deposit & Duration (11 Months / 24 Months / 36 Months)
>     ↓
> Step 3: Digital E-Signature & Agreement Vault
> ```
>
> **Auto-generated Legal Clauses:**
> - Indian Stamp Act compliance
> - Lock-in period definitions
> - 2-month notice period
> - Annual rent escalation limit (5–10%)

---

### 🔐 9. Document Vault & AI OCR Scanner

Encrypted property document storage with AI-powered OCR text extraction and title chain risk screening.

> **Supported Document Types:**
>
> | Document | Supported |
> |---|---|
> | Registered Sale Deed | ✅ |
> | Encumbrance Certificate (EC) | ✅ |
> | Building Approval Plan | ✅ |
> | Occupancy / Completion Certificate | ✅ |
> | Land Tax Receipt | ✅ |
> | KYC / Identity Proof | ✅ |
> | Income Tax Return (ITR-V) | ✅ |
>
> **AI OCR Output:**
> ```
> ✅ Title Chain Verified (1998 – 2026)
> ✅ Encumbrance Free
> ✅ Survey No: 412/9B Kochi
> ⚠️ Recommendation: Standard registration stamp duty clearance
> ```

---

### 🤝 10. Broker CRM & Lead Pipeline

Kanban board for broker lead management with AI-powered scoring and automated follow-up messages.

> **Pipeline Stages:**
> ```
> New Leads → Site Visit → Negotiation → Agreement / Closed
> ```
>
> **AI CRM Features:**
> - 🎯 AI Lead Match Score (0–100%)
> - 📩 AI-drafted follow-up message templates
> - ⏰ Automated reminders & status indicators
> - 📊 Lead details: Name, Budget, Area preference, Status

---

### 📈 11. Market Analytics Dashboard

Regional real estate market intelligence with live price benchmarks and AI outlook indicator.

> **Kerala Market Stats:**
>
> | Metric | Value |
> |---|---|
> | Average Price/Sq.Ft | ₹8,450 |
> | 3-Month Growth | +4.8% |
> | Rental Demand Index | 94/100 (HIGH) |
> | Active Inventory | 18,472 listings |
> | AI Market Outlook | 🟢 BULLISH |
>
> **Micro-Market Benchmarks:**
> | Location | Price Range | Growth |
> |---|---|---|
> | Kakkanad IT Corridor | ₹5,800 – ₹7,200/sq.ft | +6.2% |
> | Marine Drive Waterfront | ₹12,500 – ₹16,000/sq.ft | +5.1% |
> | Trivandrum Technopark | ₹5,200 – ₹6,800/sq.ft | +5.8% |
> | Calicut Cyberpark | ₹4,800 – ₹6,100/sq.ft | +4.2% |

---

### 👤 12. My Vault — User Dashboard

Personal property passport dashboard for buyers to track saved listings, upcoming visits, and AI recommendations.

> **Dashboard Cards:**
> - ❤️ Saved Properties count
> - 📅 Upcoming Site Visits
> - 🔄 Active Negotiations
> - 📁 Vault Documents count
>
> **AI Recommendations Panel:**
> ```
> 🏠 3 BHK Kakkanad            ₹82L    Match: 96%
> 🏠 Villa Marine Drive        ₹1.85Cr Match: 91%
> 🏠 Commercial MG Road        ₹4.2Cr  Match: 88%
> ```

---

## 🤖 AI Real Estate Agent

The Realty AI Agent supports **multi-intent natural language queries**:

```
User: "Find me a 3 BHK apartment in Kochi under ₹80 lakh near Kakkanad with parking"
AI  : Searches + scores + recommends with match % breakdown

User: "Calculate EMI for ₹60 lakh home loan for 20 years"
AI  : Returns monthly EMI, total interest, repayment schedule

User: "Is the Marine Drive Villa a good investment?"
AI  : Returns rental yield, 5-yr appreciation estimate, vacancy assumptions

User: "How should I negotiate this property at ₹1 crore?"
AI  : Returns suggested initial offer, negotiation ceiling, and draft message

User: "What documents should I check before buying?"
AI  : Returns document checklist + risk flag summary
```

### AI Agent Architecture

```
USER
 ↓
AI REAL ESTATE ORCHESTRATOR (RealtyAIAgent.processUserQuery)
 ↓
 ┌──────────────┬───────────────┬───────────────┐
 ↓              ↓               ↓               ↓
SEARCH AI    PRICE AI     DOCUMENT AI   INVESTMENT AI
 ↓              ↓               ↓               ↓
MAP AI     NEGOTIATION AI  LEGAL AI      LOAN AI
 └──────────────┴───────────────┴───────────────┘
                      ↓
              RESPONSE RENDERING
```

---

## 🏗️ Project Architecture

```
sha_realestates/
├── index.html                    — SPA entry point
├── css/
│   ├── main.css                  — Design system, color tokens, animations
│   └── components.css            — Component layouts, cards, modals, drawers
├── js/
│   ├── app.js                    — Application orchestrator & router
│   ├── state.js                  — Global state store (pub/sub pattern)
│   ├── ai/
│   │   └── aiAgent.js            — AI query intent classifier & response engine
│   ├── data/
│   │   └── properties.js         — Kerala property dataset (5 listings)
│   ├── utils/
│   │   └── formatters.js         — INR/USD currency, area, risk color formatters
│   └── components/
│       ├── header.js             — App header: currency toggle, role switcher, notifications
│       ├── nav.js                — Module navigation tabs
│       ├── propertyCard.js       — Property card & grid renderer
│       ├── propertyModal.js      — AI Property Passport detail modal
│       ├── mapEngine.js          — Leaflet.js map integration
│       ├── sellerWizard.js       — AI Listing Generator (Seller Hub)
│       ├── loanCalculator.js     — Home Loan & EMI Calculator
│       ├── investmentTools.js    — Investment Yield Analyzer
│       ├── leaseBuilder.js       — Digital Lease Agreement Builder
│       ├── docVault.js           — Document Vault & AI OCR Scanner
│       ├── brokerCrm.js          — Broker Kanban CRM
│       ├── marketAnalytics.js    — Market Intelligence Dashboard
│       ├── userDashboard.js      — User Passport Vault & Dashboard
│       └── aiDrawer.js           — Floating AI Chat Drawer
└── assets/
    └── images/
        ├── luxury_villa_kochi_*.jpg
        ├── apartment_kakkanad_*.jpg
        └── commercial_office_*.jpg
```

---

## 🚀 Getting Started

### Prerequisites
- Python 3.x (for local dev server) OR any static file server

### Run Locally

```bash
# Clone the repository
git clone https://github.com/kakkarot23/AI_REALESTATEREOI.git
cd AI_REALESTATEREOI

# Serve with Python (no build step needed!)
python -m http.server 5500

# Open in browser
http://localhost:5500
```

> ✅ No npm, no build tools, no framework — pure HTML + CSS + ES6 Modules.

---

## 📊 Module Breakdown

| Module | Tab Label | Description |
|---|---|---|
| `discovery` | 🏠 Discovery | Property grid, hero AI search, category filters |
| `map` | 📍 Location Intelligence | Leaflet map with markers, heatmaps, location scores |
| `sell` | 💵 AI Listing Generator | Seller listing wizard with AI content generation |
| `loans` | 🏦 Home Loans & EMI | Dynamic EMI calculator with bank comparison |
| `investment` | 📊 Investment Yield | Rental yield & capital appreciation projections |
| `lease` | 📄 Digital Lease Builder | Lease agreement workflow & e-signature |
| `doc-vault` | 🔐 Document Vault | Encrypted vault with AI OCR screening |
| `crm` | 🤝 Broker CRM | Kanban pipeline with AI lead scoring |
| `analytics` | 📈 Market Analytics | Kerala real estate market intelligence |
| `dashboard` | 👤 My Vault | Personal dashboard, saved properties, AI picks |

---

## 🗺️ Supported Property Types

### Residential
- Apartment • Villa • Independent House • Duplex • Studio
- Penthouse • Row House • Farmhouse • Plot

### Commercial
- Office • Shop • Showroom • Warehouse • Hotel
- Co-working Space • Restaurant Space • Commercial Land

### Special
- Agricultural Land • Resort Property • Development Land
- Under-Construction Projects • New Builder Projects

---

## 👥 User Roles

| Role | Primary Actions |
|---|---|
| 🛒 **Buyer** | Search → Compare → Visit → Offer → Buy |
| 💵 **Seller** | List → Verify → Market → Negotiate → Sell |
| 🔑 **Tenant** | Search → Visit → Apply → Lease → Pay Rent |
| 🏘️ **Landlord** | List → Screen → Lease → Collect Rent → Manage |
| 🤝 **Broker** | Leads → Listings → Visits → Negotiation → Commission |
| 🏗️ **Builder** | Projects → Inventory → Leads → Sales |
| ⚖️ **Lawyer** | Document Review → Due Diligence → Agreement |
| 🛡️ **Admin** | Platform → Users → Listings → Verification → Analytics |

---

## 🔐 Security Features

- 🔒 Encrypted document storage simulation
- ✅ AI document authenticity screening (not legal certification)
- 🚨 Anti-fraud risk flags on 7 indicators
- 👤 Digital KYC verification workflow
- 📜 Audit-trail ready architecture
- 🔑 Role-based UI views (Buyer / Seller / Broker / Admin)

---

## 💰 Business Model

| Revenue Stream | Description |
|---|---|
| 🤝 Brokerage | Commission on completed transactions |
| ⭐ Premium Listings | Basic / Featured / Premium / Ultra Premium |
| 📱 Broker Subscription | Free / ₹999/mo / ₹2,999/mo / Enterprise |
| 🏗️ Developer Portal | Project SaaS for builders |
| 🤖 AI Subscription | Free AI / Pro AI / Investor AI / Broker AI |
| 🔍 Verification Fees | Property/document verification services |
| 🏦 Financial Referrals | Home loan & insurance partner revenue |

---

## 🌍 Roadmap

### Phase 1 — Kerala MVP (Current)
- [x] AI Property Discovery & Match Scoring
- [x] Location Intelligence Map (Kochi/Trivandrum/Calicut)
- [x] AI Property Passport with Risk Screening
- [x] Home Loan & Investment Calculators
- [x] Seller AI Listing Generator
- [x] Digital Lease Builder
- [x] Broker CRM Pipeline

### Phase 2 — India Expansion
- [ ] Pan-India city expansion (Bangalore, Mumbai, Delhi, Chennai)
- [ ] Actual RERA API integration for builder project validation
- [ ] Google Maps / Mapbox Pro integration with real heatmaps
- [ ] Real-time property price data feeds

### Phase 3 — AI Operating System
- [ ] Property Digital Twin (3D Model + Documents + Ownership)
- [ ] LLM-powered property document legal analysis
- [ ] Voice AI assistant
- [ ] Mobile PWA (Android + iOS)
- [ ] Payment gateway integration (Razorpay)

---

## 📸 Sample Property Listings

> All listed properties include AI-verified Passport IDs, document status, location scoring, and investment metrics.

| Property | Location | Price | Yield | Risk |
|---|---|---|---|---|
| Waterfront Luxury Villa | Marine Drive, Kochi | ₹1.85 Cr | 4.86% | 🟢 LOW |
| 3 BHK Smart Apartment | Kakkanad, Kochi | ₹82 Lakh | 5.56% | 🟢 LOW |
| Grade A Commercial Office | MG Road, Kochi | ₹4.2 Cr | 6.85% | 🟢 LOW |
| Eco Villa | Technopark, Trivandrum | ₹1.25 Cr | 4.60% | 🟡 MEDIUM |
| 2 BHK Rental Apartment | Edappally Metro, Kochi | ₹32K/mo | — | 🟢 LOW |

---

## 🙏 Credits & Acknowledgements

- **Maps**: [Leaflet.js](https://leafletjs.com/) + [CartoDB Voyager Tiles](https://carto.com/)
- **Icons**: [FontAwesome 6](https://fontawesome.com/)
- **Fonts**: [Google Fonts — Outfit & Inter](https://fonts.google.com/)
- **Property Images**: AI-Generated using Google Deepmind tools
- **Design Inspiration**: Modern Indian PropTech platforms

---

<div align="center">

**Built with ❤️ by [kakkarot23](https://github.com/kakkarot23) — sha_realestates AI Real Estate Operating System**

[![GitHub Stars](https://img.shields.io/github/stars/kakkarot23/AI_REALESTATEREOI?style=social)](https://github.com/kakkarot23/AI_REALESTATEREOI)

</div>
