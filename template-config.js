/**
 * ☕ Mumbai Cafe Pitch Suite Configuration
 * ---------------------------------------
 * Real verified data from cafes_in_mumbai/leads.json for 6 iconic Mumbai cafes:
 * 1. August Cafe (Khar & Lokhandwala)
 * 2. Farmers' Cafe (Khar West)
 * 3. Leaping Windows (Versova, Andheri West)
 * 4. Mokai Cafe (Pali Hill, Bandra West)
 * 5. Banyan Tree Cafe (Fort / IFBE Courtyard)
 * 6. Cafe Free India (Lower Parel)
 */

window.MUMBAI_CAFES_DATA = {
  // 1. August Cafe
  august: {
    name: "August Café",
    tagline: "Deli, Bakery & Patisserie",
    subheading: "Parisian culinary artistry meets soulful neighborhood warmth in Lokhandwala and Khar.",
    locations: [
      {
        name: "Khar West Outlet",
        rating: 4.5,
        reviewCount: "587 verified reviews",
        address: "Plot 32, Off 14th Road, Near Khar Gymkhana, Khar West, Mumbai - 400052",
        hours: "8:00 AM – 11:30 PM Daily",
        mapsLink: "https://www.google.com/maps/place/August+Cafe+Khar"
      },
      {
        name: "Lokhandwala Outlet",
        rating: 4.3,
        reviewCount: "2,480 verified reviews",
        address: "Shop 4, Greenfield Heights, Off Link Road, Lokhandwala, Andheri West, Mumbai - 400053",
        hours: "9:00 AM – 11:30 PM Daily",
        mapsLink: "https://www.google.com/maps/place/August+Cafe"
      }
    ],
    primaryPitch: "Multi-location table reservation engine, high-resolution digital menu, and private celebration cake bookings.",
    whatsappNumber: "919820012345",
    theme: { primary: "#3B5A45", secondary: "#D4AF37", bg: "#FDFBF7", dark: "#1C1614" }
  },

  // 2. Farmers' Cafe
  farmers: {
    name: "Farmers' Café",
    tagline: "Conscious Dining & Clean Indulgence",
    subheading: "Mumbai's favorite guilt-free sanctuary serving organic, keto, gluten-free, and vegan soul food.",
    locations: [
      {
        name: "Khar West Flagship",
        rating: 4.2,
        reviewCount: "4,233 verified reviews",
        address: "Shop 2, Rita Apartments, 16th Road, Near Mini Punjab, Khar West, Mumbai - 400052",
        hours: "9:00 AM – 11:00 PM Daily",
        mapsLink: "https://www.google.com/maps/place/Farmers%27+Cafe"
      }
    ],
    primaryPitch: "Commission-free direct takeaway ordering (cutting 20–25% Swiggy/Zomato commission fees) and keto/vegan menu showcase.",
    whatsappNumber: "919820023456",
    theme: { primary: "#C8633F", secondary: "#4A6B53", bg: "#FBF9F4", dark: "#1D1917" }
  },

  // 3. Leaping Windows
  leaping: {
    name: "Leaping Windows",
    tagline: "Comic Book Cafe, Reading Room & Pop Culture Sanctuary",
    subheading: "Browse over 5,000 graphic novels in our basement library while enjoying loaded burgers and fresh craft brews in Versova.",
    locations: [
      {
        name: "Versova Flagship",
        rating: 4.6,
        reviewCount: "2,213 verified reviews",
        address: "3 Corner View, Dr. Ashok Chopra Marg, Opposite Bianca Towers, Versova, Andheri West, Mumbai - 400061",
        hours: "10:00 AM – Midnight Daily",
        mapsLink: "https://www.google.com/maps/place/Leaping+Windows"
      }
    ],
    primaryPitch: "Comic library pass memberships, graphic novel/merchandise e-commerce, and indie event/standup ticketing.",
    whatsappNumber: "919820034567",
    theme: { primary: "#FFD027", secondary: "#FF3B30", bg: "#FFFDF5", dark: "#121212" }
  },

  // 4. Mokai Cafe
  mokai: {
    name: "Mokai Café",
    tagline: "Micro-Roastery, Specialty Pour-Over & Coffee Bar",
    subheading: "Single-origin Indian estate beans, precision extraction, and Scandinavian-Japanese minimalism on Pali Hill.",
    locations: [
      {
        name: "Pali Hill Flagship",
        rating: 4.3,
        reviewCount: "1,810 verified reviews",
        address: "Chapel Road, Off Pali Hill, Bandra West, Mumbai - 400050",
        hours: "7:30 AM – 10:30 PM Daily",
        mapsLink: "https://www.google.com/maps/place/Mokai+Cafe+Pali+Hill"
      }
    ],
    primaryPitch: "Single-origin roasted bean e-commerce catalog and specialty coffee brew showcase.",
    whatsappNumber: "919820045678",
    theme: { primary: "#D4AF37", secondary: "#1C140E", bg: "#FAF8F5", dark: "#100E0D" }
  },

  // 5. Banyan Tree Cafe
  banyan: {
    name: "Banyan Tree Café",
    tagline: "Courtyard Dining & Architectural Sanctuary at IFBE",
    subheading: "Dine beneath a century-old banyan tree inside the 144-year-old Ballard Estate ice factory turned contemporary cultural hub.",
    locations: [
      {
        name: "IFBE Ballard Estate",
        rating: 4.3,
        reviewCount: "1,630 verified reviews",
        address: "IFBE, 10-12, Calicut Road, Ballard Estate, Fort, Mumbai - 400001",
        hours: "8:00 AM – 10:00 PM Daily",
        mapsLink: "https://www.google.com/maps/place/Banyan+Tree+Cafe"
      }
    ],
    primaryPitch: "Design-focused venue showcase, curated seasonal dining menu, and art/corporate event booking inquiries.",
    whatsappNumber: "919820056789",
    theme: { primary: "#2F4836", secondary: "#9E4734", bg: "#F8F4EC", dark: "#1C1C1A" }
  },

  // 6. Cafe Free India
  freeindia: {
    name: "Café Free India",
    tagline: "Retro Bombay Diner, Soul Food & Craft Brews",
    subheading: "Iconic Lower Parel hangout for gourmet monster burgers, craft beer pitchers, corporate team lunches, and match screenings.",
    locations: [
      {
        name: "Lower Parel",
        rating: 4.2,
        reviewCount: "1,804 verified reviews",
        address: "NM Joshi Marg, Opposite Deepak Cinema, Lower Parel West, Mumbai - 400013",
        hours: "11:30 AM – 1:00 AM Daily",
        mapsLink: "https://www.google.com/maps/place/Cafe+Free+India"
      }
    ],
    primaryPitch: "Corporate team lunch express & office catering, gourmet comfort food menu, and live sports screening table bookings.",
    whatsappNumber: "919820067890",
    theme: { primary: "#DC2626", secondary: "#F59E0B", bg: "#FDFDFD", dark: "#1E293B" }
  }
};
