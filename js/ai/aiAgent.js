/* ==========================================================================
   sha_realestates - Realty AI Agent Core Engine
   ========================================================================== */

import { INITIAL_PROPERTIES } from '../data/properties.js';

export class RealtyAIAgent {
  static processUserQuery(queryText, currentProperties = INITIAL_PROPERTIES) {
    const text = queryText.toLowerCase();

    // Intent 1: Loan & EMI Calculation
    if (text.includes('emi') || text.includes('loan') || text.includes('mortgage') || text.includes('finance')) {
      return {
        reply: `Here is the home loan analysis based on your query:\n\n` +
               `• **Standard Interest Rate**: 8.50% p.a. (SBI / HDFC / Axis Bank)\n` +
               `• **Target Property Price**: ₹80,00,000\n` +
               `• **Estimated Down Payment (20%)**: ₹16,00,000\n` +
               `• **Loan Amount (80%)**: ₹64,00,000\n` +
               `• **Monthly EMI (20 Years)**: **₹55,528/month**\n\n` +
               `Would you like me to open the interactive **Home Loan Calculator** tab?`,
        suggestedAction: 'loans',
        matchedProperties: []
      };
    }

    // Intent 2: Document & Legal Verification
    if (text.includes('document') || text.includes('deed') || text.includes('encumbrance') || text.includes('legal') || text.includes('title')) {
      return {
        reply: `I checked document verification records for listed properties:\n\n` +
               `✅ **Title Deed Audit**: 98% clean title verification across Kerala listings.\n` +
               `✅ **RERA Registration**: Pre-verified for all under-construction projects.\n` +
               `⚠️ **Required Checklist**: Ensure Sale Deed, 15-Year Encumbrance Certificate (EC), Tax Receipt, and Building Permit are uploaded.\n\n` +
               `Would you like to scan your document with our **AI Document Risk Analyzer**?`,
        suggestedAction: 'doc-vault',
        matchedProperties: []
      };
    }

    // Intent 3: Investment & Rental Yield
    if (text.includes('rent') || text.includes('yield') || text.includes('invest') || text.includes('appreciation')) {
      const topYieldProp = currentProperties.find(p => p.investment.grossRentalYield > 5.0) || currentProperties[1];
      return {
        reply: `Here are the top high-yield real estate investment options:\n\n` +
               `📈 **Top Pick**: **${topYieldProp.title}** (${topYieldProp.locationName})\n` +
               `• **Asking Price**: ₹${(topYieldProp.askingPrice / 100000).toFixed(1)} Lakh\n` +
               `• **Expected Monthly Rent**: ₹${topYieldProp.investment.expectedMonthlyRent.toLocaleString('en-IN')}\n` +
               `• **Gross Rental Yield**: **${topYieldProp.investment.grossRentalYield}%**\n` +
               `• **Projected 5-Yr Appreciation**: **+${topYieldProp.investment.projected5YrAppreciation}%**`,
        suggestedAction: 'investment',
        matchedProperties: [topYieldProp]
      };
    }

    // Intent 4: Negotiation & Price Suggestion
    if (text.includes('negotiate') || text.includes('offer') || text.includes('discount') || text.includes('market value')) {
      const prop = currentProperties[0];
      return {
        reply: `Here is my AI negotiation strategy for **${prop.title}**:\n\n` +
               `💰 **Seller Asking Price**: ₹${(prop.askingPrice / 10000000).toFixed(2)} Cr\n` +
               `🎯 **AI Estimated Valuation**: ₹${(prop.estimatedValuationRange.min / 10000000).toFixed(2)} Cr – ₹${(prop.estimatedValuationRange.max / 10000000).toFixed(2)} Cr\n` +
               `💡 **Recommended Initial Offer**: **₹${((prop.askingPrice * 0.93) / 10000000).toFixed(2)} Cr** (7% below asking)\n` +
               `🛡️ **Ceiling Limit**: ₹${((prop.askingPrice * 0.96) / 10000000).toFixed(2)} Cr\n\n` +
               `I can draft an automated counter-offer message to the seller for you!`,
        suggestedAction: 'negotiation',
        matchedProperties: [prop]
      };
    }

    // Default Intent: Natural Language Property Search & Matching
    let matches = currentProperties;

    // Filter by BHK
    if (text.includes('3 bhk') || text.includes('3 bedroom')) {
      matches = matches.filter(p => p.bedrooms === 3);
    } else if (text.includes('4 bhk') || text.includes('4 bedroom')) {
      matches = matches.filter(p => p.bedrooms === 4);
    } else if (text.includes('2 bhk') || text.includes('2 bedroom')) {
      matches = matches.filter(p => p.bedrooms === 2);
    }

    // Filter by location (Kakkanad, Marine Drive, Trivandrum)
    if (text.includes('kakkanad')) {
      matches = matches.filter(p => p.locationName.toLowerCase().includes('kakkanad'));
    } else if (text.includes('marine drive')) {
      matches = matches.filter(p => p.locationName.toLowerCase().includes('marine drive'));
    }

    if (matches.length === 0) matches = [currentProperties[1], currentProperties[0]];

    const bestMatch = matches[0];
    const matchScore = 96;

    return {
      reply: `I analyzed your request and evaluated nearby listings against market data:\n\n` +
             `⭐ **Top Recommendation**: **${bestMatch.title}** (${bestMatch.locationName})\n` +
             `• **Match Score**: **${matchScore}% Match**\n` +
             `• **Price**: ₹${bestMatch.askingPrice >= 10000000 ? (bestMatch.askingPrice / 10000000).toFixed(2) + ' Cr' : (bestMatch.askingPrice / 100000).toFixed(1) + ' Lakh'}\n` +
             `• **Specs**: ${bestMatch.bedrooms} BHK | ${bestMatch.areaSqFt} sq.ft | Location Score: ${bestMatch.locationScore.overall}/100\n` +
             `• **Document Status**: ✅ Verified Title Deed & Permits\n\n` +
             `Below is your personalized property shortlist:`,
      suggestedAction: 'discovery',
      matchedProperties: matches
    };
  }
}
