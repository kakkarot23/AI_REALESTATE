/* ==========================================================================
   sha_realestates - Property Dataset (Kerala & India Real Estate)
   ========================================================================== */

export const INITIAL_PROPERTIES = [
  {
    id: 'prop-101',
    title: 'Waterfront Luxury Villa in Marine Drive',
    propertyType: 'Residential',
    subType: 'Villa',
    listingType: 'Buy',
    askingPrice: 18500000, // ₹1.85 Cr
    estimatedValuationRange: { min: 17800000, max: 19200000 },
    valuationStatus: 'Fair Price',
    city: 'Kochi',
    locationName: 'Marine Drive, Ernakulam',
    coordinates: [9.9790, 76.2760],
    areaSqFt: 3450,
    bedrooms: 4,
    bathrooms: 5,
    parkingSpaces: 2,
    floor: 'Ground + 1',
    ageYears: 2,
    possession: 'Immediate',
    furnishedStatus: 'Fully Furnished',
    
    // Images & Media
    images: [
      'assets/images/luxury_villa_kochi_1787985237839.jpg',
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80'
    ],
    has360Tour: true,
    hasVideo: true,

    // Location Intelligence Scores (0-100)
    locationScore: {
      overall: 94,
      connectivity: 96,
      schools: 92,
      healthcare: 95,
      shopping: 94,
      employment: 91,
      rentalDemand: 93,
      futureGrowth: 95
    },

    // AI Risk Screening Engine
    riskScore: {
      overall: 'LOW',
      ownershipDoc: 'GREEN',
      docCompleteness: 'GREEN',
      priceAnomaly: 'GREEN',
      listingAuthenticity: 'GREEN',
      duplicateListing: 'GREEN',
      locationRisk: 'GREEN',
      mortgageIndicator: 'GREEN'
    },

    // Uploaded Documents Status
    documents: [
      { name: 'Registered Sale Deed', status: 'VERIFIED', flag: null },
      { name: 'Encumbrance Certificate (15 Yrs)', status: 'VERIFIED', flag: null },
      { name: 'Kochi Municipal Building Permit', status: 'VERIFIED', flag: null },
      { name: 'Land Tax Receipt 2026', status: 'VERIFIED', flag: null },
      { name: 'Occupancy Certificate', status: 'VERIFIED', flag: null }
    ],

    // Investment Yield Metrics
    investment: {
      expectedMonthlyRent: 75000,
      grossRentalYield: 4.86,
      netRentalYield: 4.10,
      projected5YrAppreciation: 32, // +32%
      loanEligible: true
    },

    seller: {
      name: 'K. R. Menon',
      role: 'Owner',
      phone: '+91 98470 12345',
      verified: true
    },
    
    aiPassportId: 'RE-IND-KOC-00101',
    description: 'Ultra-luxurious 4 BHK waterfront villa overlooking the serene backwaters of Marine Drive Kochi. Features private infinity pool, teak interior joinery, automated home lighting, and 24/7 security.'
  },
  {
    id: 'prop-102',
    title: 'Contemporary 3 BHK Smart Apartment',
    propertyType: 'Residential',
    subType: 'Apartment',
    listingType: 'Buy',
    askingPrice: 8200000, // ₹82 Lakh
    estimatedValuationRange: { min: 7900000, max: 8450000 },
    valuationStatus: 'Great Deal',
    city: 'Kochi',
    locationName: 'Near InfoPark, Kakkanad',
    coordinates: [10.0159, 76.3621],
    areaSqFt: 1780,
    bedrooms: 3,
    bathrooms: 3,
    parkingSpaces: 1,
    floor: '8th of 18',
    ageYears: 1,
    possession: 'Ready to Move',
    furnishedStatus: 'Semi Furnished',

    images: [
      'assets/images/apartment_kakkanad_1787985260634.jpg',
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    has360Tour: true,
    hasVideo: false,

    locationScore: {
      overall: 92,
      connectivity: 91,
      schools: 90,
      healthcare: 89,
      shopping: 88,
      employment: 98, // High IT hub proximity
      rentalDemand: 96,
      futureGrowth: 94
    },

    riskScore: {
      overall: 'LOW',
      ownershipDoc: 'GREEN',
      docCompleteness: 'GREEN',
      priceAnomaly: 'GREEN',
      listingAuthenticity: 'GREEN',
      duplicateListing: 'GREEN',
      locationRisk: 'GREEN',
      mortgageIndicator: 'GREEN'
    },

    documents: [
      { name: 'Builder Sale Agreement', status: 'VERIFIED', flag: null },
      { name: 'RERA Registration Certificate', status: 'VERIFIED', flag: null },
      { name: 'Fire & Safety Clearance', status: 'VERIFIED', flag: null },
      { name: 'Property Tax Token', status: 'VERIFIED', flag: null }
    ],

    investment: {
      expectedMonthlyRent: 38000,
      grossRentalYield: 5.56,
      netRentalYield: 4.80,
      projected5YrAppreciation: 38,
      loanEligible: true
    },

    seller: {
      name: 'Asset Homes Realty',
      role: 'Developer',
      phone: '+91 99950 67890',
      verified: true
    },

    aiPassportId: 'RE-IND-KOC-00102',
    description: 'High rental yield 3 BHK luxury apartment situated 1.5 km from InfoPark Phase 1 & SmartCity Kakkanad. Ideal for IT professionals and high-return real estate investors.'
  },
  {
    id: 'prop-103',
    title: 'Grade A Commercial Office Building',
    propertyType: 'Commercial',
    subType: 'Office Space',
    listingType: 'Buy',
    askingPrice: 42000000, // ₹4.2 Cr
    estimatedValuationRange: { min: 40000000, max: 43500000 },
    valuationStatus: 'Fair Price',
    city: 'Kochi',
    locationName: 'MG Road, Commercial Center',
    coordinates: [9.9674, 76.2870],
    areaSqFt: 5200,
    bedrooms: 0,
    bathrooms: 4,
    parkingSpaces: 6,
    floor: '3rd & 4th Floors',
    ageYears: 3,
    possession: 'Immediate',
    furnishedStatus: 'Plug & Play Office',

    images: [
      'assets/images/commercial_office_1787985288113.jpg',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80'
    ],
    has360Tour: true,
    hasVideo: true,

    locationScore: {
      overall: 95,
      connectivity: 98,
      schools: 82,
      healthcare: 96,
      shopping: 97,
      employment: 95,
      rentalDemand: 94,
      futureGrowth: 89
    },

    riskScore: {
      overall: 'LOW',
      ownershipDoc: 'GREEN',
      docCompleteness: 'GREEN',
      priceAnomaly: 'GREEN',
      listingAuthenticity: 'GREEN',
      duplicateListing: 'GREEN',
      locationRisk: 'GREEN',
      mortgageIndicator: 'GREEN'
    },

    documents: [
      { name: 'Commercial Title Deed', status: 'VERIFIED', flag: null },
      { name: 'Commercial Building License', status: 'VERIFIED', flag: null },
      { name: 'KSEB Commercial Power Permit', status: 'VERIFIED', flag: null }
    ],

    investment: {
      expectedMonthlyRent: 240000,
      grossRentalYield: 6.85,
      netRentalYield: 6.10,
      projected5YrAppreciation: 25,
      loanEligible: true
    },

    seller: {
      name: 'Skyline Commercial Properties',
      role: 'Broker',
      phone: '+91 94471 99887',
      verified: true
    },

    aiPassportId: 'RE-IND-KOC-00103',
    description: 'Prime MG Road commercial plug-and-play office floor with 60 workstations, 3 executive conference rooms, cafeteria, and private elevator access.'
  },
  {
    id: 'prop-104',
    title: 'Modern Eco Villa in Technopark Corridor',
    propertyType: 'Residential',
    subType: 'Villa',
    listingType: 'Buy',
    askingPrice: 12500000, // ₹1.25 Cr
    estimatedValuationRange: { min: 11900000, max: 12800000 },
    valuationStatus: 'Fair Price',
    city: 'Trivandrum',
    locationName: 'Kazhakkoottam, Technopark',
    coordinates: [8.5581, 76.8812],
    areaSqFt: 2400,
    bedrooms: 3,
    bathrooms: 4,
    parkingSpaces: 2,
    floor: 'G + 1',
    ageYears: 0, // New Construction
    possession: 'Under Construction',
    furnishedStatus: 'Unfurnished',

    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'
    ],
    has360Tour: true,
    hasVideo: true,

    locationScore: {
      overall: 91,
      connectivity: 93,
      schools: 91,
      healthcare: 90,
      shopping: 88,
      employment: 96,
      rentalDemand: 91,
      futureGrowth: 95
    },

    riskScore: {
      overall: 'MEDIUM',
      ownershipDoc: 'GREEN',
      docCompleteness: 'YELLOW', // Pending occupancy certificate
      priceAnomaly: 'GREEN',
      listingAuthenticity: 'GREEN',
      duplicateListing: 'GREEN',
      locationRisk: 'GREEN',
      mortgageIndicator: 'GREEN'
    },

    documents: [
      { name: 'Panchayat Approved Plan', status: 'VERIFIED', flag: null },
      { name: 'Title Deed (Clear Title)', status: 'VERIFIED', flag: null },
      { name: 'Occupancy Certificate', status: 'PENDING', flag: 'Construction in final stage' }
    ],

    investment: {
      expectedMonthlyRent: 48000,
      grossRentalYield: 4.60,
      netRentalYield: 3.90,
      projected5YrAppreciation: 35,
      loanEligible: true
    },

    seller: {
      name: 'Trivandrum Heights',
      role: 'Developer',
      phone: '+91 97460 33221',
      verified: true
    },

    aiPassportId: 'RE-IND-TRV-00104',
    description: 'Solar-powered eco villa with rainwater harvesting, private garden, EV charging station, located 2 km from Technopark Phase 3 Trivandrum.'
  },
  {
    id: 'prop-105',
    title: 'Luxury 2 BHK Apartment for Rent',
    propertyType: 'Residential',
    subType: 'Apartment',
    listingType: 'Rent',
    askingPrice: 32000, // ₹32,000/month
    estimatedValuationRange: { min: 30000, max: 35000 },
    valuationStatus: 'Fair Rent',
    city: 'Kochi',
    locationName: 'Edappally Metro Station',
    coordinates: [10.0261, 76.3125],
    areaSqFt: 1250,
    bedrooms: 2,
    bathrooms: 2,
    parkingSpaces: 1,
    floor: '5th of 14',
    ageYears: 3,
    possession: 'Immediate',
    furnishedStatus: 'Fully Furnished',

    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    has360Tour: false,
    hasVideo: true,

    locationScore: {
      overall: 93,
      connectivity: 99, // Metro proximity
      schools: 92,
      healthcare: 94,
      shopping: 98, // Lulu Mall 500m
      employment: 88,
      rentalDemand: 97,
      futureGrowth: 90
    },

    riskScore: {
      overall: 'LOW',
      ownershipDoc: 'GREEN',
      docCompleteness: 'GREEN',
      priceAnomaly: 'GREEN',
      listingAuthenticity: 'GREEN',
      duplicateListing: 'GREEN',
      locationRisk: 'GREEN',
      mortgageIndicator: 'GREEN'
    },

    documents: [
      { name: 'Owner Identity Verified', status: 'VERIFIED', flag: null },
      { name: 'Standard Lease Agreement Draft', status: 'VERIFIED', flag: null }
    ],

    investment: {
      expectedMonthlyRent: 32000,
      grossRentalYield: 0,
      netRentalYield: 0,
      projected5YrAppreciation: 0,
      loanEligible: false
    },

    seller: {
      name: 'Sabu Thomas',
      role: 'Landlord',
      phone: '+91 98951 11223',
      verified: true
    },

    aiPassportId: 'RE-IND-KOC-00105',
    description: 'Fully furnished 2 BHK apartment featuring modular kitchen, split ACs, high-speed WiFi setup, situated 400m from Edappally Metro Station and Lulu Mall.'
  }
];
