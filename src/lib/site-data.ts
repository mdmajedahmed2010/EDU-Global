/**
 * RANS Scholarships — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/ransscholarships/
 *  - Official Assets: log.jpg (Red "RANS" + Graduation Cap + Airplane takeoff + Navy "Scholarships")
 *  - Official Banner: banner.jpg ("Let us make your DREAM TO STUDY ABROAD" · Since 2017 · 10 Year's Experience · Member of FECAS · Sylhet)
 *  - Headquarters: 425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh.
 *  - Hotlines & WhatsApp: 01772-063911 / 01925-772171
 *  - Official Digital Contacts:
 *      * Email: rans.scholarships@gmail.com
 *      * Website: http://rans-scholarships.com/
 *      * Facebook: https://www.facebook.com/ransscholarships/
 *  - Accreditations: Member of FECAS (Foreign Education Consultancy Association of Bangladesh) & FACD-CAB
 */

export type NavChild = {
  label: string;
  to: string;
  params?: Record<string, string>;
  badge?: string;
};
export type NavItem = {
  label: string;
  to: string;
  params?: Record<string, string>;
  children?: NavChild[];
};

export const company = {
  name: "RANS Scholarships",
  shortName: "RANS",
  acronym: "RANS",
  legalName: "RANS Scholarships — Study Abroad & Language Academy",
  nativeName: "র‌্যান্স স্কলারশিপস (বিদেশে উচ্চশিক্ষা ও ল্যাঙ্গুয়েজ একাডেমি)",
  slogan: "Let us make your DREAM TO STUDY ABROAD",
  bengaliHeadline: "বিদেশে উচ্চশিক্ষা ও স্কলারশিপের বিশ্বস্ত ঠিকানা",
  bengaliSubheadline:
    "ফিনল্যান্ডসহ ইউরোপ, কানাডা, ইউকে ও ইউএসএ-তে ১০০% ফ্রি ফাইল ওপেনিং, স্কলারশিপ সহায়তা, IELTS, Spoken English ও Kids English",
  motto: "Empowering Dreams, Bridging Cultures · Learn, Explore, Thrive!",
  philosophy: "ACCESSIBILITY • EXCELLENCE • INTEGRITY • SCHOLARSHIP SUPPORT",
  tagline:
    "Official Study Abroad & Language Academy in Sylhet — 100% Free File Opening, direct admissions, scholarship support, IELTS, Spoken English & Kids English for Finland, Canada, USA, UK, Hungary, Netherlands, Italy & Romania.",
  bio: "Study Abroad Consultancy & Language Academy | Finland January 2027 Intake, 100% Free File Opening, IELTS, Spoken English & Kids English 🎓",
  category: "Educational Consultant · Language Academy · Scholarship Advisor",
  established: "2017",
  experienceYears: "10",
  experienceBadge: "10 Year's Experience (Since 2017)",
  origin: "Sylhet, Bangladesh",
  presence: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet",
  email: "rans.scholarships@gmail.com",
  contactEmail: "rans.scholarships@gmail.com",
  altEmail: "rans.scholarships@gmail.com",
  emails: ["rans.scholarships@gmail.com"],
  phones: ["01772-063911", "01925-772171"],
  whatsapp: "+8801772063911",
  whatsappFormatted: "+880 1772-063911",
  secondaryPhone: "+880 1925-772171",
  hours: "Open Saturday – Thursday: 10:00 AM – 7:30 PM (Friday Closed / Appointment Only)",
  signOff: "RANS Scholarships · Let us make your DREAM TO STUDY ABROAD",

  // Primary Sylhet Corporate Office
  offices: {
    headquarters: {
      name: "RANS Scholarships Corporate Office",
      address: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
      full: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet-3100, Bangladesh",
      phone: "01772-063911",
      phones: ["01772-063911", "01925-772171"],
      whatsapp: "+8801772063911",
      hours: "Saturday – Thursday: 10:00 AM – 7:30 PM",
      mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
      mapsEmbed:
        "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
    },
    sylhet: {
      name: "RANS Scholarships Corporate Office",
      address: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
      full: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet-3100, Bangladesh",
      phone: "01772-063911",
      phones: ["01772-063911", "01925-772171"],
      whatsapp: "+8801772063911",
      hours: "Saturday – Thursday: 10:00 AM – 7:30 PM",
      mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
      mapsEmbed:
        "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
    },
    // Backward compatibility for dual-office structures if referenced
    dhaka: {
      name: "RANS Scholarships Corporate Office (Sylhet HQ)",
      address: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
      full: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
      phone: "01772-063911",
      phones: ["01772-063911", "01925-772171"],
      whatsapp: "+8801772063911",
      hours: "Saturday – Thursday: 10:00 AM – 7:30 PM",
      mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
      mapsEmbed:
        "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
    },
    london: {
      name: "Global Admissions & European Coordination Desk",
      address: "Representing Top Universities Across Finland, UK & Europe",
      full: "Global Higher Education Admissions & European Liaison",
      phone: "01772-063911",
      phones: ["01772-063911", "01925-772171"],
      whatsapp: "+8801772063911",
      hours: "Monday – Friday: 10:00 AM – 6:00 PM",
      mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
      mapsEmbed:
        "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
    },
  },

  sylhetOffice: {
    title: "RANS Scholarships Corporate Office (Sylhet)",
    building: "Rang Mohol Tower",
    floor: "4th Floor (Lift: 3), Suite 425",
    area: "Bandar Bazar",
    city: "Sylhet",
    country: "Bangladesh",
    full: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
    hotlines: ["01772-063911", "01925-772171"],
    whatsapp: "+8801772063911",
    whatsappDisplay: "+880 1772-063911",
    email: "rans.scholarships@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
    mapsEmbed:
      "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
  },

  // Fallback alias for existing references
  dhakaOffice: {
    title: "RANS Scholarships Corporate Office",
    house: "Suite 425 (Lift: 3)",
    block: "Rang Mohol Tower",
    area: "Bandar Bazar",
    city: "Sylhet",
    country: "Bangladesh",
    full: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
    hotlines: ["01772-063911", "01925-772171"],
    whatsapp: "+8801772063911",
    whatsappDisplay: "+880 1772-063911",
    email: "rans.scholarships@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
    mapsEmbed:
      "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
  },

  londonOffice: {
    title: "International Admissions & European Desk",
    street: "European & Global University Network",
    postalCode: "Sylhet-Europe Liaison",
    city: "Sylhet",
    country: "Bangladesh",
    full: "European University Admissions Desk · RANS Scholarships, Sylhet",
    hotlines: ["01772-063911"],
    whatsapp: "+8801772063911",
    whatsappDisplay: "+880 1772-063911",
    email: "rans.scholarships@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
    mapsEmbed:
      "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",
  },

  address: {
    building: "Rang Mohol Tower",
    street: "425 (Lift: 3), Bandar Bazar",
    area: "Bandar Bazar",
    city: "Sylhet",
    postalCode: "3100",
    country: "Bangladesh",
    full: "425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh",
    networkNote: "10 Year's Experience (Since 2017) · Member of FECAS & FACD-CAB",
  },

  geo: { lat: 24.8903, lng: 91.8687 },
  mapsUrl: "https://maps.google.com/?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet",
  mapsEmbed:
    "https://maps.google.com/maps?q=Rang+Mohol+Tower+Bandar+Bazar+Sylhet&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/ransscholarships/",
    facebookPageName: "@ransscholarships",
    facebookVideos: "https://www.facebook.com/ransscholarships/videos",
    facebookReels: "https://www.facebook.com/ransscholarships/reels",
    twitter: "https://x.com/ransscholarships",
    twitterHandle: "@ransscholarships",
    instagram: "https://www.instagram.com/ransscholarships/",
    instagramHandle: "@ransscholarships",
    tiktok: "https://www.tiktok.com/@ransscholarships",
    tiktokHandle: "@ransscholarships",
    youtube: "https://www.youtube.com/@ransscholarships",
    youtubeHandle: "@ransscholarships",
    messenger: "https://m.me/ransscholarships",
    linkedin: "https://www.linkedin.com/company/ransscholarships/",
  },

  stats: [
    { value: "10+", label: "Years Experience", badge: "Since 2017" },
    { value: "100%", label: "Free File Opening", badge: "Zero Hidden Fees" },
    { value: "FECAS", label: "Registered Member", badge: "Govt. Approved" },
    { value: "Jan 2027", label: "Finland Joint Application", badge: "Joint App 31 Aug-10 Sep" },
    { value: "500+", label: "Successful Visa Grants", badge: "Proven Track Record" },
    { value: "8+", label: "Top Destination Nations", badge: "Finland · Canada · UK · USA" },
  ],

  accreditations: [
    {
      name: "FECAS",
      title: "Foreign Education Consultancy Association of Bangladesh",
      desc: "Proud registered member adhering to ethical counseling, authentic documentation, and transparent student representation.",
    },
    {
      name: "FACD-CAB",
      title: "Foreign Admission & Career Development Consultants Association",
      desc: "Recognized national body maintaining high professional standards for overseas student recruitment and visa guidance.",
    },
    {
      name: "10 Year's Experience",
      title: "Established Since 2017 in Sylhet",
      desc: "Over a decade of dedicated educational advisory and scholarship guidance helping thousands of students reach top global universities.",
    },
  ],

  verifiedKeyPartners: [
    {
      name: "Top Universities of Applied Sciences (UAS) in Finland",
      country: "Finland",
      note: "Joint Application (31 Aug – 10 Sep 2026), Rolling Admissions without Entrance Exam, Spouse & Child Permitted",
    },
    {
      name: "Designated Learning Institutions (DLIs) in Canada",
      country: "Canada",
      note: "Public Colleges & Universities with Paid Co-op Internships & up to 3-Year PGWP",
    },
    {
      name: "Russell Group & Leading UK Universities",
      country: "United Kingdom",
      note: "1-Year Master's Degrees, 2-Year Graduate Route PSW, MOI Options & Up to £4,000 Bursaries",
    },
    {
      name: "Accredited Universities in USA",
      country: "USA",
      note: "STEM OPT 3-Year Extensions, High Acceptance Rates & Dedicated F-1 Visa Mock Interviews",
    },
    {
      name: "Hungarian Public Universities (Stipendium Hungaricum)",
      country: "Hungary",
      note: "Schengen Mobility, Low Living Costs, European Standard Degrees & Full/Partial Scholarships",
    },
    {
      name: "Public Universities in Netherlands & Italy",
      country: "Netherlands & Italy",
      note: "English-Taught Bachelor's & Master's, Regional Scholarships (EDISU/DSU) & Zoekjaar Visa",
    },
    {
      name: "Accredited Romanian Universities",
      country: "Romania",
      note: "Affordable Medical and Technical Degrees with Full European Recognition",
    },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      {
        label: "Study in Finland 🇫🇮",
        to: "/study-in-{$country}",
        params: { country: "finland" },
        badge: "Jan 2027 Joint App",
      },
      {
        label: "Study in Canada 🇨🇦",
        to: "/study-in-{$country}",
        params: { country: "canada" },
        badge: "PGWP / Co-op",
      },
      {
        label: "Study in USA 🇺🇸",
        to: "/study-in-{$country}",
        params: { country: "usa" },
        badge: "STEM OPT",
      },
      {
        label: "Study in UK 🇬🇧",
        to: "/study-in-{$country}",
        params: { country: "uk" },
        badge: "1-Yr Masters / PSW",
      },
      {
        label: "Study in Hungary 🇭🇺",
        to: "/study-in-{$country}",
        params: { country: "hungary" },
        badge: "Scholarships",
      },
      {
        label: "Study in Netherlands 🇳🇱",
        to: "/study-in-{$country}",
        params: { country: "netherlands" },
        badge: "High Tech",
      },
      {
        label: "Study in Italy 🇮🇹",
        to: "/study-in-{$country}",
        params: { country: "italy" },
        badge: "Regional Grants",
      },
      {
        label: "Study in Romania 🇷🇴",
        to: "/study-in-{$country}",
        params: { country: "romania" },
        badge: "Affordable EU",
      },
      { label: "View All Destinations (8+)", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Language Courses",
    to: "/services",
    children: [
      { label: "IELTS Preparation", to: "/services", badge: "Band 7.5+ Target" },
      { label: "Spoken English", to: "/services", badge: "Fluency & Accent" },
      { label: "Kids English & Spoken", to: "/services", badge: "Ages 5-14" },
      { label: "English Grammar & Writing", to: "/services", badge: "Professional" },
      { label: "100% Free Assessment", to: "/services", badge: "Free Diagnostic" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "100% Free File Opening", to: "/services", badge: "Official Offer" },
      { label: "Scholarship Assistance", to: "/services", badge: "Tuition Waivers" },
      { label: "Student & Spouse Visa", to: "/services", badge: "Full Support" },
      { label: "Embassy Mock Interview", to: "/services", badge: "1-on-1 Prep" },
      { label: "Pre-Departure Briefing", to: "/services", badge: "Arrival Care" },
    ],
  },
  { label: "Official Reels & Videos", to: "/videos", badge: "Expo Reels" },
  { label: "Intakes & Offers", to: "/offers" },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

export type Destination = {
  slug: string;
  name: string;
  flag: string;
  region: string;
  tagline: string;
  intro: string;
  why: string[];
  popularFields: string[];
  avgTuition: string;
  avgLiving: string;
  pswv: string;
  intakes: string;
  scholarships: string;
  topUnis: string[];
  withoutIelts: boolean;
  featured?: boolean;
  specialHighlight?: string;
};

export const destinations: Destination[] = [
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe (Nordic)",
    tagline:
      "World #1 education, January 2027 Joint Application, rolling admissions & family relocation",
    intro:
      "Finland is the primary specialization of RANS Scholarships. As showcased at our Finland Education Expo at Hotel Nirvana Inn, Sylhet, students can apply with or without IELTS (via university entrance exams), bring spouse and children with work and schooling rights, and secure a 2-year post-study residence permit.",
    why: [
      "January 2027 Joint Application open from 31 August to 10 September 2026 (Apply up to 6 UAS programs)",
      "Rolling Admission options available without entrance examination for qualified applicants",
      "Opportunity to apply without IELTS if passing university entrance exam or with PTE, TOEFL, Oxford ELLT",
      "Spouse gets full working rights and dependent children receive 100% free world-class schooling",
      "2-Year post-study job seeker residence permit for all university graduates",
      "World's happiest nation with zero corruption, safe society, and high student part-time wages (up to 30 hrs/week)",
    ],
    popularFields: [
      "Artificial Intelligence & Software Engineering",
      "International Business & Supply Chain",
      "Nursing & Healthcare Management",
      "Sustainable Energy & Environmental Tech",
      "Tourism & Hospitality Management",
    ],
    avgTuition: "€8,000 – €12,000 / year (Early Bird waivers available)",
    avgLiving: "€700 – €900 / month",
    pswv: "Up to 2 Years Post-Study Residence Permit",
    intakes: "January 2027 Joint Application (31 Aug – 10 Sep 2026) & Autumn Intake",
    scholarships: "20% – 50% Early Bird & Academic Merit Waivers",
    topUnis: [
      "Centria University of Applied Sciences",
      "Metropolia University of Applied Sciences",
      "Vaasa University of Applied Sciences (VAMK)",
      "Satakunta University of Applied Sciences (SAMK)",
      "LUT University",
      "Aalto University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "January 2027 Joint Application 31 Aug–10 Sep 2026",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Reputed public DLIs, paid co-op programs & up to 3-year PGWP",
    intro:
      "Canada remains a top choice for Bangladeshi students seeking globally recognized qualifications, paid co-op internships, and clear post-graduation immigration pathways.",
    why: [
      "Designated Learning Institutions (DLIs) offering world-class academic standards",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for degree and diploma holders",
      "Paid Co-op programs integrating hands-on Canadian workplace experience",
      "Spouse open work permit opportunities for eligible Master's/Doctoral programs",
      "Safe, multicultural environment with high student satisfaction",
    ],
    popularFields: [
      "Software Engineering & IT",
      "Business Administration",
      "Supply Chain & Logistics",
      "Healthcare & Nursing",
      "Biotechnology",
    ],
    avgTuition: "CAD $15,000 – $26,000 / year",
    avgLiving: "CAD $14,000 – $18,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "January (Winter), May (Summer), September (Fall)",
    scholarships: "CAD $2,000 – $8,000 Entrance & Merit Grants",
    topUnis: [
      "University of Windsor",
      "Memorial University",
      "Conestoga College",
      "Seneca Polytechnic",
      "Fanshawe College",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "usa",
    name: "USA",
    flag: "🇺🇸",
    region: "North America",
    tagline: "World-leading research universities with up to 3-year STEM OPT work rights",
    intro:
      "The USA offers unparalleled academic variety, thousands of accredited colleges, and up to 36 months of STEM OPT work authorization for science, technology, and engineering graduates.",
    why: [
      "Access to Tier-1 research labs and 4,000+ accredited universities",
      "3-year STEM OPT work rights for technology, computing, and engineering graduates",
      "Graduate Assistantships (TA/RA) with tuition waivers and monthly stipends",
      "Thorough 1-on-1 F-1 visa mock interview coaching by RANS Scholarships advisors",
    ],
    popularFields: [
      "Computer Science & AI",
      "Data Analytics",
      "Electrical Engineering",
      "FinTech & Business Analytics",
      "Biomedical Engineering",
    ],
    avgTuition: "$14,000 – $32,000 / year",
    avgLiving: "$10,000 – $14,000 / year",
    pswv: "1 Year Standard / 3 Years (STEM OPT)",
    intakes: "Fall (August/September) & Spring (January)",
    scholarships: "$3,000 to Full Tuition Waivers + Assistantships",
    topUnis: [
      "Arizona State University",
      "University of North Texas",
      "University of South Florida",
      "Purdue University",
      "Georgia State University",
    ],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Russell Group universities, 1-year Master's, 2-Year PSW & MOI pathways",
    intro:
      "With RANS Scholarships' guidance, students gain access to leading UK institutions offering fast 1-year Master's degrees, 2-year Graduate Route Post-Study Work Visas, and MOI options without IELTS.",
    why: [
      "Medium of Instruction (MOI) accepted for eligible graduates without IELTS",
      "Fast 1-year intensive Master's and 3-year Bachelor's degrees saving time and living costs",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon graduation",
      "Generous scholarship opportunities up to £4,000 for Bangladeshi applicants",
      "100% Free File Opening charge with RANS Scholarships",
    ],
    popularFields: [
      "Computer Science & AI",
      "Business Administration & MBA",
      "Data Analytics & IT",
      "Public Health & Nursing",
      "Civil & Mechanical Engineering",
    ],
    avgTuition: "£11,000 – £16,000 / year (with partner bursaries)",
    avgLiving: "£9,207 – £12,000 / year (outside/inside London standard)",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January, May & September (Key Intakes)",
    scholarships: "£1,500 – £4,000 International Merit Bursaries",
    topUnis: [
      "University of East London",
      "University of Greenwich",
      "University of Hertfordshire",
      "Southampton Solent University",
      "Coventry University",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "hungary",
    name: "Hungary",
    flag: "🇭🇺",
    region: "Europe (Schengen)",
    tagline: "Stipendium Hungaricum scholarships, affordable European living & Schengen access",
    intro:
      "Hungary provides world-class European degrees with exceptionally low living costs, tuition fee waivers through Stipendium Hungaricum, and complete mobility across the 29 Schengen member states.",
    why: [
      "Stipendium Hungaricum scholarship covers 100% tuition, monthly stipend, dorm and health insurance",
      "Very affordable self-funded tuition fees starting around €3,000 to €4,500 per year",
      "Low living cost (€450–€600/month) with great student lifestyle in Budapest and Debrecen",
      "Unrestricted travel across the entire Schengen Zone",
    ],
    popularFields: [
      "General Medicine & Dentistry",
      "Computer Science",
      "Business Management",
      "Engineering",
      "Agricultural Sciences",
    ],
    avgTuition: "€3,000 – €6,000 / year",
    avgLiving: "€450 – €650 / month",
    pswv: "9 Months Job-Seeker Residence Permit",
    intakes: "September (Main Intake) & February",
    scholarships: "Stipendium Hungaricum (100% Free) & Institutional Waivers",
    topUnis: [
      "University of Debrecen",
      "Eötvös Loránd University (ELTE)",
      "University of Szeged",
      "Budapest University of Technology and Economics",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "Europe (Schengen)",
    tagline:
      "Europe's innovation hub, 100% English-medium degrees & 1-Year Zoekjaar orientation visa",
    intro:
      "The Netherlands is renowned for academic innovation and practical education. Over 95% of the Dutch population speaks English, offering an effortless transition for Bangladeshi students.",
    why: [
      "1-Year Orientation Year (Zoekjaar) visa for graduates to work without work permit restrictions",
      "Hundreds of English-taught programs across research universities and universities of applied sciences",
      "Europe's premier tech hub (headquarters to ASML, Philips, Booking.com)",
      "High employability and career growth across the European Union",
    ],
    popularFields: [
      "Data Science & AI",
      "International Business",
      "Logistics & Supply Chain",
      "Biomedical Engineering",
      "Water Management",
    ],
    avgTuition: "€8,000 – €14,000 / year",
    avgLiving: "€850 – €1,100 / month",
    pswv: "1 Year Orientation Year (Zoekjaar) Visa",
    intakes: "September & February",
    scholarships: "Holland Scholarship (€5,000) & University Merit Awards",
    topUnis: [
      "University of Amsterdam",
      "Delft University of Technology",
      "Erasmus University Rotterdam",
      "Fontys University of Applied Sciences",
    ],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "Europe (Schengen)",
    tagline: "Regional government scholarships (EDISU/DSU), historic universities & low tuition",
    intro:
      "Italy combines centuries of academic heritage with lucrative regional scholarships (such as DSU, EDISU, and LazioDisco) that can provide tuition-free study along with free accommodation and living stipends.",
    why: [
      "Regional scholarships cover 100% tuition, free student meal cards, and annual cash stipends (up to €7,000)",
      "Public university tuition fees based on family income (ISEE Parificato)",
      "Prestigious English-medium Bachelor's and Master's programs",
      "Post-study job search visa and access to Italy's thriving industrial north",
    ],
    popularFields: [
      "Automotive & Mechanical Engineering",
      "Fashion & Industrial Design",
      "Architecture",
      "Economics & Finance",
      "Computer Engineering",
    ],
    avgTuition: "€1,000 – €3,500 / year (Public universities)",
    avgLiving: "€500 – €800 / month",
    pswv: "1 Year Post-Study Job Search Residence Permit",
    intakes: "September/October (Main Intake)",
    scholarships: "Regional DSU/EDISU Full Scholarships (Tuition + Stipend)",
    topUnis: [
      "Politecnico di Milano",
      "University of Bologna",
      "Sapienza University of Rome",
      "University of Padua",
      "Politecnico di Torino",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "romania",
    name: "Romania",
    flag: "🇷🇴",
    region: "Europe (EU)",
    tagline: "Affordable medical & technical degrees, simple entry criteria & European recognition",
    intro:
      "Romania offers an accessible, high-value European education pathway, particularly celebrated for English-taught Medicine, Dentistry, Pharmacy, and Computer Engineering degrees recognized across the EU.",
    why: [
      "Direct European standard degrees recognized throughout the European Union and WHO",
      "Affordable tuition fees from €2,500 to €5,000 per year",
      "Low cost of living starting around €400 to €550 per month",
      "Simplified admission and visa processes through RANS Scholarships",
    ],
    popularFields: [
      "General Medicine (MBBS)",
      "Dentistry",
      "Computer Science",
      "Civil Engineering",
      "International Business",
    ],
    avgTuition: "€2,500 – €5,000 / year",
    avgLiving: "€400 – €550 / month",
    pswv: "European Work and Career Placement",
    intakes: "October (Autumn Intake)",
    scholarships: "Romanian Government Bilateral Scholarships & Merit Discounts",
    topUnis: [
      "University of Bucharest",
      "Babeș-Bolyai University",
      "Carol Davila University of Medicine",
      "Technical University of Cluj-Napoca",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe (Schengen)",
    tagline: "Free & low-tuition public universities in Europe's powerhouse economy",
    intro:
      "Germany offers zero or negligible tuition at public universities for English-taught Master's degrees, coupled with an 18-month post-study job seeker visa.",
    why: [
      "Zero tuition fees at public universities (only modest semester contribution)",
      "High global standing in engineering, technology, and applied sciences",
      "18-month post-study job search residence permit upon graduation",
      "Schengen mobility covering 29 European countries",
    ],
    popularFields: [
      "Automotive & Mechanical Engineering",
      "Data Science & Software",
      "Renewable Energy",
      "International Business",
    ],
    avgTuition: "€0 – €3,000 / year (Public)",
    avgLiving: "€934 / month (Blocked Account Requirement)",
    pswv: "18 Months Job-Seeker Residence Permit",
    intakes: "October (Winter) & April (Summer)",
    scholarships: "DAAD Scholarships & University Merit Waivers",
    topUnis: ["TU Munich", "RWTH Aachen", "TU Berlin", "Heidelberg University"],
    withoutIelts: false,
    featured: false,
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    tagline: "Affordable English-taught European degrees with high visa grant success",
    intro:
      "Cyprus provides an exceptionally accessible European degree pathway with low tuition fees, reasonable living costs, and swift visa processing.",
    why: [
      "High student visa grant ratio with straightforward document requirements",
      "English-medium curriculum across modern private and state-recognized universities",
      "Affordable tuition fees starting around €3,000 to €4,500 per year",
      "Safe, student-friendly Mediterranean environment",
    ],
    popularFields: [
      "Business Administration",
      "Hospitality & Tourism",
      "Computer Science",
      "Information Technology",
    ],
    avgTuition: "€3,000 – €5,000 / year",
    avgLiving: "€400 – €650 / month",
    pswv: "Post-graduate job search & European transfer options",
    intakes: "February (Spring) & October (Autumn)",
    scholarships: "Up to 50% Tuition Fee Reductions",
    topUnis: ["University of Nicosia", "European University Cyprus", "Near East University"],
    withoutIelts: true,
    featured: false,
  },
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "ielts" | "spoken" | "kids" | "grammar";
  icon: string;
  badge: string;
  duration: string;
  classSchedule: string;
  batchType: string;
  targetOutcome: string;
  description: string;
  highlights: string[];
  modules: { title: string; desc: string }[];
};

export const courses: Course[] = [
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation Masterclass",
    subtitle: "Academic & General Training for Band 7.0+ Target",
    category: "ielts",
    icon: "🎯",
    badge: "Band 7.5+ Target",
    duration: "2 to 3 Months Intensive",
    classSchedule: "3 Days / Week (Morning, Evening & Weekend Batches)",
    batchType: "Offline (Sylhet Bandar Bazar) & Interactive Online",
    targetOutcome: "Target Band Score 7.0 to 8.5",
    description:
      "RANS Scholarships' IELTS program is specifically designed for students aspiring to study in Finland, Canada, the UK, the USA, and Europe. Led by experienced certified trainers, we provide rigorous training across all 4 modules with weekly Cambridge-standard mock exams.",
    highlights: [
      "1-on-1 Speaking mock interviews with individualized band score analytics",
      "Task 1 & Task 2 Writing evaluation with grammatical and lexical feedback",
      "Proven strategies for Reading passage scanning and True/False/Not Given mastery",
      "Audio accent decoding practice (British, Australian, American, European accents)",
      "Weekly full-length mock tests under authentic exam hall conditions with free retakes",
      "Comprehensive British Council & IDP aligned study resources and practice sheets",
      "Special guidance for students applying for Finland January 2027 intake",
    ],
    modules: [
      {
        title: "Listening Mastery",
        desc: "Predicting answers, signpost words, section-wise traps, note completion and multiple choice precision.",
      },
      {
        title: "Academic & General Reading",
        desc: "Skimming, scanning, heading matching, summary completion, handling complex academic passages.",
      },
      {
        title: "Task 1 & 2 Writing",
        desc: "Report & graph structures, argumentative essay coherence, cohesive devices, Lexical Resource, grammatical precision.",
      },
      {
        title: "Fluency Speaking",
        desc: "Overcoming hesitation, cue card structure, Part 3 deep discussions, natural pronunciation, idiomatic fluency.",
      },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Fluency Programs",
    subtitle: "Speak English Confidently in Any Academic, Professional & Social Setting",
    category: "spoken",
    icon: "🗣️",
    badge: "Career & Visa Booster",
    duration: "2 Months (24 Interactive Sessions)",
    classSchedule: "3 Days / Week (Evening & Flexible Batches)",
    batchType: "Offline (Rang Mohol Tower) & Online Batches",
    targetOutcome: "Natural Conversational Fluency & Embassy Interview Confidence",
    description:
      "Eliminate hesitation, grammatical fear, and mother-tongue influence. Our Spoken English program emphasizes practical daily conversations, pronunciation refinement, presentation delivery, and embassy visa interview readiness.",
    highlights: [
      "Daily extempore speaking sessions, pair talks, and friendly group debates",
      "Accent neutralization and reduction of regional mother-tongue influence (MTI)",
      "Embassy visa interview simulation and job interview confidence techniques",
      "Professional workplace communication, meeting etiquette, and formal telephone English",
      "Small batch sizes ensuring maximum speaking time for every individual student",
    ],
    modules: [
      {
        title: "Fluency Foundations",
        desc: "Breaking mental blocks, thinking in English, conversational starters, overcoming stage fright.",
      },
      {
        title: "Pronunciation & Phonetics",
        desc: "Vowel/consonant sounds, syllable stress, intonation patterns, clear speech articulation.",
      },
      {
        title: "Everyday Dialogues & Presentation",
        desc: "Ordering food, traveling abroad, airport procedures, public speaking, academic debates.",
      },
      {
        title: "Embassy Visa Mock Drills",
        desc: "Answering tough consular questions, confident body language, clear academic explanations.",
      },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids English & Kids Spoken Foundation",
    subtitle: "Fun, Creative & Engaging English Learning for Young Learners (Ages 5-14)",
    category: "kids",
    icon: "🎨",
    badge: "Ages 5–14 Years",
    duration: "3 Months (Continuous Batches)",
    classSchedule: "2 to 3 Days / Week (Weekend & After-School Hours)",
    batchType: "Offline (Sylhet Safe Classroom) & Online",
    targetOutcome: "Strong Early English Foundation, Reading Habit & Fear-Free Spoken Confidence",
    description:
      "Designed specifically for children aged 5 to 14, RANS Scholarships makes language learning joyful, engaging, and organic. Through animated storytelling, interactive games, phonics, and role-play, children develop spontaneous English communication without fear.",
    highlights: [
      "Activity-based learning: educational games, cartoons, rhymes, and interactive drama",
      "Phonics-first approach ensuring accurate native pronunciation from childhood",
      "Building rich English vocabulary through visual flashcards, games, and real objects",
      "Encouraging public speaking confidence through friendly show-and-tell activities",
      "Caring, safe, air-conditioned classroom environment at Rang Mohol Tower, Sylhet",
      "Regular progress updates and parent-teacher feedback sessions",
    ],
    modules: [
      {
        title: "Phonics & Sound Magic",
        desc: "Letter-sound connection, blending, digraphs, early sight words, spelling tricks.",
      },
      {
        title: "Storytelling & Drama",
        desc: "Engaging children's storybooks, character role-playing, puppet shows, creative imagination.",
      },
      {
        title: "Vocabulary Playground",
        desc: "Everyday objects, manners, colors, animals, basic descriptive sentences.",
      },
      {
        title: "Show & Tell Speaking",
        desc: "Mini presentations, expressing emotions, friendly conversations with peers.",
      },
    ],
  },
  {
    slug: "english-grammar",
    title: "English Grammar & Professional Communication",
    subtitle: "Master Grammar Rules, Accurate Writing & Formal Correspondence",
    category: "grammar",
    icon: "✍️",
    badge: "Foundation & Writing",
    duration: "2 Months Intensive",
    classSchedule: "3 Days / Week",
    batchType: "Offline (Sylhet) & Online",
    targetOutcome:
      "Error-Free Writing, SOP Drafting Skills & Professional Corporate Correspondence",
    description:
      "A structured course covering fundamental to advanced English grammar, syntax, sentence structuring, and formal writing. Ideal for students preparing for academic SOPs and working professionals seeking polished business communication.",
    highlights: [
      "Demystifying complex tenses, subject-verb agreement, and prepositions",
      "Sentence structuring: compound, complex, and advanced academic sentences",
      "Academic SOP, CV, and motivational letter drafting essentials",
      "Professional corporate email writing and formal report structuring",
    ],
    modules: [
      {
        title: "Core Grammar Mastery",
        desc: "Tenses, parts of speech, voice change, narrative style, conditional sentences.",
      },
      {
        title: "Sentence Mechanics",
        desc: "Punctuation precision, clauses, modifiers, eliminating common Bangladeshi errors.",
      },
      {
        title: "Academic Writing Skills",
        desc: "Paragraph structuring, linking ideas, formal academic tone, paraphrasing.",
      },
      {
        title: "Business Correspondence",
        desc: "Formal emails, meeting summaries, cover letters, Statement of Purpose (SOP).",
      },
    ],
  },
];

export type Service = {
  slug: string;
  title: string;
  summary: string;
  points: string[];
  icon: string;
  timeline: string;
  guarantee: string;
  highlightBadge?: string;
};

export const services: Service[] = [
  {
    slug: "free-file-opening",
    title: "100% Free File Opening & Profile Assessment",
    summary:
      "Unlike conventional agencies that demand heavy upfront fees, RANS Scholarships offers 100% Free File Opening. Our experienced counselors evaluate your academic certificates, GPA, study gaps, and financial budget with complete transparency.",
    points: [
      "Zero file opening charge — 100% free preliminary document evaluation",
      "Honest guidance on study gap acceptability for Finland, UK, Canada & Europe",
      "Country matching based on your budget, IELTS/English level & scholarship goals",
      "No hidden fees or unexpected charges throughout the initial admission process",
    ],
    icon: "🎁",
    timeline: "Instant Evaluation in 24–48 Hours",
    guarantee: "100% Free File Opening",
    highlightBadge: "Special Offer",
  },
  {
    slug: "study-abroad-admissions",
    title: "Global Higher Education Admissions & University Matching",
    summary:
      "Specialized admissions support for Finland (January 2027 Joint Application 31 Aug–10 Sep 2026 & Rolling Admissions), Canada (DLIs), the USA (STEM OPT), the UK, Hungary, the Netherlands, Italy, and Romania.",
    points: [
      "Direct portal application up to 6 universities under single application for Finland",
      "Guidance on admissions without IELTS via university entrance exams or PTE/TOEFL/Oxford ELLT",
      "Professional Statement of Purpose (SOP) & recommendation letter review",
      "Assistance for married applicants: spouse work rights & child schooling in Finland",
    ],
    icon: "🎓",
    timeline: "Offers in 2 to 4 Weeks",
    guarantee: "Official Partner Representation",
    highlightBadge: "Core Specialization",
  },
  {
    slug: "scholarship-assistance",
    title: "Scholarship Matching & Financial Aid Support",
    summary:
      "True to our name, RANS Scholarships actively searches, matches, and applies for merit-based tuition waivers, early bird discounts, and government grants across Finland, Hungary (Stipendium Hungaricum), Italy (EDISU/DSU), and the UK.",
    points: [
      "Early Bird 20%–50% tuition fee discounts for Finnish Universities of Applied Sciences",
      "100% Free tuition and living stipend applications for Hungary Stipendium Hungaricum",
      "Regional scholarships in Italy (DSU/EDISU) providing full tuition and annual stipends",
      "Merit-based international student bursaries in the UK and Canada",
    ],
    icon: "💰",
    timeline: "Submitted along with University Application",
    guarantee: "Maximum Financial Relief",
    highlightBadge: "Scholarship Support",
  },
  {
    slug: "ielts-academy",
    title: "IELTS Preparation Academy (Academic & General)",
    summary:
      "Band 7.0–8.5 targeted coaching by certified instructors at our modern Sylhet Bandar Bazar facility or interactive online batches. Features weekly Cambridge mock tests, Speaking Club, and writing evaluations.",
    points: [
      "Weekly complete mock tests simulating authentic British Council / IDP test halls",
      "1-on-1 speaking practice with instant band score feedback and pronunciation correction",
      "Task 1 & Task 2 writing analysis with grammar, coherence, and vocabulary correction",
      "Dedicated Speaking Club sessions to build natural conversational speed",
    ],
    icon: "🎯",
    timeline: "2 to 3 Months Intensive Batches",
    guarantee: "Band 7.0+ Target Guidance",
    highlightBadge: "Language Academy",
  },
  {
    slug: "spoken-english-fluency",
    title: "Spoken English & English Fluency Programs",
    summary:
      "Speak English clearly, spontaneously, and without fear. Designed for students, professionals, and job seekers in Sylhet looking to master natural fluency, accent neutralization, and embassy interview confidence.",
    points: [
      "Impromptu speaking, everyday real-world dialogues, and group discussions",
      "Accent refinement and elimination of regional mother-tongue hesitation",
      "Embassy visa interview Q&A drills simulating consular officer interviews",
      "Corporate business email writing and presentation delivery",
    ],
    icon: "🗣️",
    timeline: "2 Months (24 Live Sessions)",
    guarantee: "Confidence & Fluency",
    highlightBadge: "Practical Fluency",
  },
  {
    slug: "kids-english-academy",
    title: "Kids English & Kids Spoken Foundation (Ages 5–14)",
    summary:
      "Joyful, creative, and fear-free English language development for young children. Building early English pronunciation, reading habits, and speaking confidence through phonics, storytelling, and educational games.",
    points: [
      "Phonics-first curriculum for accurate English pronunciation from childhood",
      "Fun storytelling, animated learning, educational games, and vocabulary flashcards",
      "Show-and-tell activities building early public speaking confidence",
      "Safe, caring air-conditioned classroom environment at Rang Mohol Tower, Sylhet",
    ],
    icon: "🎨",
    timeline: "3 Months Interactive Batches",
    guarantee: "Child-Centric Fun Learning",
    highlightBadge: "Kids Academy",
  },
  {
    slug: "visa-guidance-mock",
    title: "Student & Spouse Visa Guidance & Embassy Mock Interviews",
    summary:
      "RANS Scholarships boasts a proven track record of successful visa approvals. We provide end-to-end documentation audit, financial solvency verification, VFS appointment booking, and rigorous 1-on-1 embassy mock interviews.",
    points: [
      "Thorough financial documentation check and bank solvency audit according to embassy standards",
      "Specialized spouse and child accompanying visa filing for Finland and European destinations",
      "1-on-1 embassy mock interviews simulating real consular questions to eliminate nervousness",
      "VFS Global, embassy appointment scheduling and biometrics coordination",
    ],
    icon: "🛂",
    timeline: "Timely Submission Aligned with Embassy Slots",
    guarantee: "100% Document Verification",
    highlightBadge: "High Visa Success",
  },
  {
    slug: "pre-departure-logistics",
    title: "Pre-Departure Briefing & Student Settlement Support",
    summary:
      "Our care continues after visa approval. We assist students with student-rate airfare bookings, luggage allowance optimization, foreign exchange (Forex file) guidance, student accommodation search, and airport pick-up.",
    points: [
      "Student discounted air ticketing assistance with extra baggage allowance",
      "Student housing, apartment, and university dorm booking guidance",
      "Student bank file opening and international currency card advice",
      "Post-landing orientation and student network connection in Finland and Europe",
    ],
    icon: "✈️",
    timeline: "Immediate upon visa grant",
    guarantee: "Complete Arrival Care",
    highlightBadge: "Post-Visa Care",
  },
];

export type FacebookReel = {
  id: string;
  title: string;
  reelUrl: string;
  embedUrl: string;
  category: "Student Feedback" | "Study in Finland" | "Language Academy" | "Visa Success";
  badge: string;
  summary: string;
  bulletPoints: string[];
  posterUrl?: string;
  views?: string;
  duration?: string;
};

export const verifiedFacebookReels: FacebookReel[] = [
  {
    id: "reel-1-finland-expo-feedback",
    title: "Finland Education Expo 2026 — Student Feedback & Real Experience",
    reelUrl: "https://www.facebook.com/reel/1841170827056197/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1841170827056197%2F&show_text=false&width=267&t=0",
    category: "Student Feedback",
    badge: "Expo Feedback",
    views: "500+ Views",
    duration: "0:58",
    posterUrl: "/banner.jpg",
    summary:
      "Real student and guardian feedback captured live at the 2-day Finland Education Expo organized by RANS Scholarships at Hotel Nirvana Inn, Sylhet. Students express great confidence in applying for Finland January 2027 intake with 100% Free File Opening.",
    bulletPoints: [
      "Recorded live at Hotel Nirvana Inn, Sylhet during Finland Education Expo",
      "Direct student feedback on transparent counseling and scholarship guidance",
      "Clear explanation of Finland January 2027 intake admission requirements",
      "100% Free File Opening benefit appreciated by attendees",
    ],
  },
  {
    id: "reel-2-finland-intake-roadmap",
    title: "Finland January 2027 Intake Guidance & Visa Success Roadmap",
    reelUrl: "https://www.facebook.com/reel/1564254805432888/",
    embedUrl:
      "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1564254805432888%2F&show_text=false&width=267&t=0",
    category: "Study in Finland",
    badge: "Intake Roadmap",
    views: "750+ Views",
    duration: "1:15",
    posterUrl: "/banner.jpg",
    summary:
      "Expert breakdown of the upcoming Finland January 2027 Joint Application (31 Aug – 10 Sep 2026), rolling admission options without entrance exam, spouse and dependent family relocation, and embassy file preparation.",
    bulletPoints: [
      "Finland January 2027 Joint Application: 31 August to 10 September 2026",
      "Rolling admissions available without entrance exam for qualified applicants",
      "Spouse work permit and children's free education policy explained",
      "RANS Scholarships' personalized 1-on-1 counseling at Rang Mohol Tower, Sylhet",
    ],
  },
];

export const verifiedStudentReviews = [
  {
    name: "Tanzim Ahmed",
    course: "BSc in Information Technology",
    destination: "Centria UAS, Finland",
    country: "Finland",
    flag: "🇫🇮",
    rating: 5,
    highlight: "Finland January Intake Success!",
    text: "Attended the Finland Education Expo by RANS Scholarships at Hotel Nirvana Inn, Sylhet. Their counselor helped me apply for Finland with zero file opening fee! Got my admission and visa smoothly. RANS Scholarships is the best in Sylhet for Finland!",
  },
  {
    name: "Sumaiya Akther",
    course: "IELTS Preparation Masterclass",
    destination: "Scored Band 7.5",
    country: "Language Academy",
    flag: "🎯",
    rating: 5,
    highlight: "Band 7.5 in 2 Months",
    text: "Joined the IELTS masterclass at RANS Scholarships Bandar Bazar campus. The weekly mock tests and speaking feedback helped me jump from Band 6.0 to 7.5! Highly recommend their certified instructors.",
  },
  {
    name: "Kawsar Mahmud & Family",
    course: "Master's Degree & Family Visa",
    destination: "Metropolia UAS, Finland",
    country: "Finland",
    flag: "🇫🇮",
    rating: 5,
    highlight: "Student + Spouse + Child Visa Approved",
    text: "Applying for Finland with my wife and child felt overwhelming until I consulted RANS Scholarships. Their documentation team prepared our files meticulously. All three visas were granted! RANS is 100% transparent and reliable.",
  },
  {
    name: "Shamima Begum (Guardian)",
    course: "Kids English Program",
    destination: "Young Learners Academy",
    country: "Language Academy",
    flag: "🎨",
    rating: 5,
    highlight: "Wonderful Kids English Class",
    text: "My 9-year-old son was very hesitant to speak in English. After 2 months in RANS Scholarships' Kids English batch at Rang Mohol Tower, his pronunciation and speaking confidence have grown tremendously. The teachers are very caring!",
  },
  {
    name: "Fahim Chowdhury",
    course: "Postgraduate Degree in Computing",
    destination: "UK University Partner",
    country: "United Kingdom",
    flag: "🇬🇧",
    rating: 5,
    highlight: "Fast CAS & £3,000 Scholarship",
    text: "RANS Scholarships secured my UK admission with an international merit scholarship of £3,000 and zero file opening charges. Their mock interview session was exactly like the real embassy interview.",
  },
  {
    name: "Md. Abdul Moktadir Fahad",
    course: "Community Endorsement",
    destination: "Organizing Secretary, Rang Mohol Tower",
    country: "Sylhet",
    flag: "🏢",
    rating: 5,
    highlight: "Trusted Educational Institution",
    text: "RANS Scholarships has been operating with high reputation and integrity on the 4th floor of Rang Mohol Tower, Bandar Bazar, Sylhet since 2017. Their dedication to student welfare, free counseling, and transparent processing is exemplary.",
  },
];

export const faqs = [
  {
    q: "Where is the RANS Scholarships office located?",
    a: "Our corporate office is located at 425 Rang Mohol Tower (Lift: 3), Bandar Bazar, Sylhet, Bangladesh. We are easily accessible from all parts of Sylhet division.",
  },
  {
    q: "How can I contact RANS Scholarships directly?",
    a: "You can call or WhatsApp us at 01772-063911 or call our secondary hotline 01925-772171. You can also email us at rans.scholarships@gmail.com or visit our office Saturday to Thursday from 10:00 AM to 7:30 PM.",
  },
  {
    q: "Is RANS Scholarships a member of FECAS?",
    a: "Yes! RANS Scholarships is a proud registered member of FECAS (Foreign Education Consultancy Association of Bangladesh) and FACD-CAB, ensuring ethical, government-recognized, and trustworthy student consultancy.",
  },
  {
    q: "Do you charge any file opening fee?",
    a: "No! RANS Scholarships offers a 100% Free File Opening service. Initial profile evaluation, university selection, and consultation have zero upfront charges.",
  },
  {
    q: "Can I apply to Finland without IELTS?",
    a: "Yes! Many Universities of Applied Sciences (UAS) in Finland allow eligible applicants to take the Finnish university entrance examination without needing an IELTS score. Furthermore, alternative tests such as PTE, TOEFL, and Oxford ELLT are widely accepted.",
  },
  {
    q: "When is the next Finland intake?",
    a: "The January 2027 intake Joint Application period runs from 31 August to 10 September 2026. Rolling admissions with no entrance exams are also available for select programs. Contact us today to assess your profile early!",
  },
  {
    q: "Can I bring my spouse and children to Finland while studying?",
    a: "Yes! Finland has one of the most generous family relocation policies in the world. Your spouse is entitled to full working rights, and your dependent children receive 100% free world-standard schooling.",
  },
  {
    q: "What language training courses do you offer in Sylhet?",
    a: "We offer: 1) IELTS Preparation (Academic & General Training with weekly Cambridge mock tests), 2) Spoken English & Fluency Programs, 3) Kids English & Junior Academy for children aged 5–14, and 4) English Grammar & Professional Communication.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "100% Free Profile Assessment",
    text: "Visit our Sylhet Bandar Bazar office or connect via WhatsApp (+880 1772-063911). Our senior counselors evaluate your academic certificates, GPA, study gaps, and goals with zero file fees.",
    badge: "Step 1",
  },
  {
    step: "02",
    title: "Destination & Scholarship Matching",
    text: "We shortlist ideal universities across Finland, Canada, the UK, the USA, Hungary, or Europe tailored to your budget and scholarship opportunities.",
    badge: "Step 2",
  },
  {
    step: "03",
    title: "Application & Offer Letter",
    text: "Our admissions team prepares your academic paperwork, refines your Statement of Purpose (SOP), and submits direct applications (up to 6 programs for Finland under one application).",
    badge: "Step 3",
  },
  {
    step: "04",
    title: "Scholarship Confirmation & Tuition",
    text: "We guide you in securing early bird tuition discounts, merit scholarships, and completing tuition deposits with complete safety and transparency.",
    badge: "Step 4",
  },
  {
    step: "05",
    title: "Visa Lodgement & Embassy Mock Interview",
    text: "Our visa specialists organize your embassy documentation, conduct 1-on-1 embassy mock interviews, and assist with family/spouse visa applications.",
    badge: "Step 5",
  },
  {
    step: "06",
    title: "Pre-Departure & Arrival Assistance",
    text: "We assist with student airfare discounts, luggage allowances, student bank files, accommodation searches, and airport arrival coordination.",
    badge: "Step 6",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "finland-jan-2027",
    badge: "Joint Application 31 Aug-10 Sep",
    date: "January 2027 Intake",
    title: "Finland Higher Education Drive — January 2027 Intake",
    description:
      "Specialized admissions drive for Finnish Universities of Applied Sciences (UAS). Apply to up to 6 degree programs under a single application with options for study with or without IELTS, rolling admissions with no entrance exams, and spouse/child relocation.",
    benefits: [
      "100% Free File Opening with RANS Scholarships",
      "Early Bird 20% to 50% tuition fee discounts",
      "Spouse full work rights & children free schooling",
      "2-Year post-study residence permit upon graduation",
    ],
  },
  {
    id: "free-file-opening-offer",
    badge: "Special Offer",
    date: "Limited Time Promotion",
    title: "100% Free File Opening Service (Zero Hidden Charges)",
    description:
      "Take advantage of RANS Scholarships' official promotional offer! Get your complete academic background, GPA, and study gaps evaluated by senior education advisors without paying any file opening charge.",
    benefits: [
      "No upfront file opening charges",
      "Honest country matching based on your budget",
      "Detailed gap analysis and SOP guidelines",
      "Direct consultation with experienced counselors at Rang Mohol Tower, Sylhet",
    ],
  },
  {
    id: "ielts-batch",
    badge: "Language Academy",
    date: "New Batches Starting Every Week",
    title: "IELTS Preparation Masterclass (Target Band 7.5+)",
    description:
      "Join our intensive offline batches at Rang Mohol Tower, Bandar Bazar, Sylhet or live interactive online sessions. Features small batch sizes, weekly Cambridge-standard mock exams, and personalized 1-on-1 speaking practice.",
    benefits: [
      "Free diagnostic test and personalized study roadmap",
      "Weekly full-length mock tests with real Cambridge scoring criteria",
      "Individual 1-on-1 speaking evaluations with band score breakdown",
      "Comprehensive IDP & British Council aligned question bank",
    ],
  },
  {
    id: "kids-english",
    badge: "Junior Academy (Ages 5-14)",
    date: "Admissions Ongoing",
    title: "Kids English & Kids Spoken Foundation Program",
    description:
      "Creative, joyful, and fear-free English language development for young children in Sylhet. Activity-based learning, phonics, storytelling, and role-play in a caring, safe environment.",
    benefits: [
      "Phonics-first curriculum for authentic pronunciation",
      "Show-and-tell activities building early public speaking confidence",
      "Fun storytelling, educational games, and vocabulary flashcards",
      "Safe, caring air-conditioned classrooms at Rang Mohol Tower, Sylhet",
    ],
  },
  {
    id: "hungary-scholarship",
    badge: "100% Free Scholarship",
    date: "September Intake",
    title: "Study in Hungary — Stipendium Hungaricum Full Scholarship",
    description:
      "Apply for the prestigious Stipendium Hungaricum government scholarship covering 100% tuition fees, monthly living stipends, free accommodation, and medical insurance in the heart of Europe.",
    benefits: [
      "100% Tuition fee waiver + monthly living stipend",
      "Free dormitory housing or accommodation allowance",
      "Full medical health insurance in the European Union",
      "Schengen mobility covering 29 European countries",
    ],
  },
  {
    id: "canada-dli",
    badge: "PGWP & Co-op",
    date: "Jan, May & Sep Intakes",
    title: "Study in Canada — Top DLIs & Paid Co-op Programs",
    description:
      "Enroll in renowned Canadian public universities and colleges. Benefit from hands-on co-op internships and up to 3 years Post-Graduation Work Permit (PGWP).",
    benefits: [
      "Admission to Designated Learning Institutions (DLIs) nationwide",
      "CAD $2,000 to $8,000 entrance scholarship guidance",
      "Spouse open work permit filing for eligible Master's degrees",
      "Transparent GIC account opening and visa file submission",
    ],
  },
];
