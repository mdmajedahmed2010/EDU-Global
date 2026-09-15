/**
 * ACADEMIAZ — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/AcademiaZRajshahi (@AcademiaZRajshahi)
 *  - Official Brand Assets:
 *      * Logo: logo.jpg (Circular insignia with Navy & Gold intertwined AZ, graduation cap, star and open book, "ACADEMIAZ · LEARN · GROW · ACHIEVE")
 *      * Banner: banner.jpg (Mount Fuji, Cherry Blossoms, Japanese Pagoda, "ACADEMIAZ - JAPANESE LANGUAGE TRAINING & VISA CONSULTANCY - Your Gateway to Japan - Kadirgonj, Rajshahi")
 *  - Headquarters: Kadirganj, Greater Road (Lane beside Ma Photostat, East side of the mosque), Rajshahi - 6000, Bangladesh.
 *  - Core Taglines:
 *      * "Learn · Grow · Achieve"
 *      * "Your Gateway to Japan"
 *      * "স্বপ্ন নয়, পরিকল্পনা হোক সঠিক – আমরা আছি আপনার জাপান যাত্রার বিশ্বস্ত সঙ্গী !"
 *  - Brand Hallmarks:
 *      * "জাপান থেকে পরিচালিত" (Japan Based & Managed)
 *      * "বিশ্বস্ত, নির্ভরযোগ্য, ১০০% জাপান স্ট্যান্ডার্ড সেবা"
 *      * "অভিজ্ঞ ও দক্ষ টিম · আন্তরিক সহায়তা এবং গাইডলাইন · আপনার সাফল্যই আমাদের অগ্রাধিকার"
 *  - Hotlines & WhatsApp: 01518-951062 / 01632-372232
 *  - Official Email: academiazrajshahi@gmail.com
 *  - Core Offerings:
 *      * Japanese Language Course (N5 & N4 Levels, JLPT, JFT-Basic, NAT-TEST)
 *      * Student Visa Guidance (Complete Study in Japan, COE processing, Language Schools & Universities)
 *      * TITP & SSW Preparation (Support for Technical Intern & Specified Skilled Worker in Japan)
 *      * Documentation & Application Support (Accurate, Fast & Reliable Service)
 *      * IELTS Preparation (Academic & General Training)
 *      * Spoken English & Communication Fluency
 *      * Kids English & Kids Spoken English (Ages 5–14)
 *      * Global Study Abroad (Germany, UK, USA, Canada, Australia, Malaysia & Europe)
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
  name: "AcademiaZ",
  shortName: "AcademiaZ",
  altName: "AcademiaZ Rajshahi",
  acronym: "AZ",
  legalName: "AcademiaZ Japanese Language Training & Visa Consultancy",
  nativeName: "একাডেমিয়া জেড (জাপানিজ ল্যাঙ্গুয়েজ ট্রেইনিং অ্যান্ড ভিসা কনসালটেন্সি, রাজশাহী)",
  slogan: "Learn · Grow · Achieve",
  bengaliHeadline: "স্বপ্ন নয়, পরিকল্পনা হোক সঠিক – আমরা আছি আপনার জাপান যাত্রার বিশ্বস্ত সঙ্গী !",
  bengaliSubheadline:
    "জাপান থেকে পরিচালিত ১০০% জাপান স্ট্যান্ডার্ড সেবা: জাপানি ভাষা কোর্স (N5-N4), স্টুডেন্ট ভিসা গাইডলাইন, TITP ও SSW প্রস্তুতি, IELTS, স্পোকেন ইংলিশ এবং নির্ভুল অ্যাপ্লিকেশন ও ডকুমেনটেশন সাপোর্ট।",
  motto: "Learn · Grow · Achieve",
  secondaryMotto: "Your Gateway to Japan",
  philosophy: "JAPAN BASED & MANAGED • 100% JAPAN STANDARD • TRUSTED & RELIABLE • STUDENT-FIRST SUCCESS",
  tagline:
    "Premier Japanese Language Training & Visa Consultancy in Kadirganj, Rajshahi — Japan Based & Managed, specializing in JLPT (N5–N4), Student Visas, TITP & SSW Work Visas, IELTS, Spoken English, Kids English, and Worldwide Higher Education.",
  bio: "Welcome to AcademiaZ Rajshahi! Japanese Language Training & Global Visa Consultancy operated and managed directly from Japan. Kadirganj, Greater Road, Rajshahi. 🇯🇵✈️📚",
  category: "Japanese Language School · Study in Japan Consultant · Global Visa Agency",
  origin: "Rajshahi, Bangladesh",
  presence: "Kadirganj, Greater Road (Lane beside Ma Photostat, east side of mosque), Rajshahi - 6000, Bangladesh",
  email: "academiazrajshahi@gmail.com",
  contactEmail: "academiazrajshahi@gmail.com",
  careerEmail: "academiazrajshahi@gmail.com",
  altEmail: "academiazrajshahi@gmail.com",
  emails: ["academiazrajshahi@gmail.com"],
  phones: ["01518-951062", "01632-372232"],
  whatsapp: "+8801518951062",
  whatsappFormatted: "01518-951062",
  secondaryPhone: "01632-372232",
  japanLiaisonNote: "Direct liaison & operation management in Japan",
  hours: "Saturday – Thursday: 9:00 AM – 8:00 PM (Friday Open for Special Batches & Appointments)",
  established: "2022",
  signOff: "AcademiaZ · Learn · Grow · Achieve",

  // Corporate & Branch Offices
  offices: {
    headquarters: {
      name: "AcademiaZ Rajshahi Campus (Headquarters)",
      address:
        "Kadirganj, Greater Road (Lane beside Ma Photostat, East side of the mosque), Rajshahi - 6000, Bangladesh",
      full: "Kadirganj, Greater Road (Lane beside Ma Photostat), Rajshahi - 6000, Bangladesh",
      short: "Kadirganj, Greater Road, Rajshahi",
      phone: "01518-951062",
      phones: ["01518-951062", "01632-372232"],
      whatsapp: "+8801518951062",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=Kadirganj+Rajshahi+Bangladesh",
      mapsEmbed:
        "https://maps.google.com/maps?q=Kadirganj+Greater+Road+Rajshahi+Bangladesh&z=16&hl=en&output=embed",
    },
    rajshahi: {
      name: "AcademiaZ Rajshahi Campus",
      address:
        "Kadirganj, Greater Road (Lane beside Ma Photostat, East side of the mosque), Rajshahi - 6000, Bangladesh",
      full: "Kadirganj, Greater Road (Lane beside Ma Photostat), Rajshahi - 6000, Bangladesh",
      short: "Kadirganj, Greater Road, Rajshahi",
      phone: "01518-951062",
      phones: ["01518-951062", "01632-372232"],
      whatsapp: "+8801518951062",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=Kadirganj+Rajshahi+Bangladesh",
      mapsEmbed:
        "https://maps.google.com/maps?q=Kadirganj+Greater+Road+Rajshahi+Bangladesh&z=16&hl=en&output=embed",
    },
    japanDesk: {
      name: "AcademiaZ Japan Management Desk",
      address: "Tokyo, Japan (Direct Operation & Institutional Coordination)",
      full: "Japan Based & Managed Institutional Liaison, Tokyo, Japan",
      short: "Tokyo, Japan",
      phone: "01518-951062 (Via Rajshahi Center)",
      phones: ["01518-951062"],
      whatsapp: "+8801518951062",
      hours: "Monday – Saturday: 10:00 AM – 7:00 PM (JST)",
      mapsUrl: "https://maps.google.com/?q=Tokyo+Japan",
      mapsEmbed:
        "https://maps.google.com/maps?q=Tokyo+Japan&z=12&hl=en&output=embed",
    },
    international: {
      name: "AcademiaZ Japan Operational Liaison & Direct Management",
      address: "Tokyo & Kanto Region, Japan (Direct Institutional Oversight)",
      full: "Japan Based & Managed Institutional Liaison, Tokyo, Japan",
      short: "Tokyo, Japan",
      phone: "01518-951062 (Rajshahi Coordination Line)",
      phones: ["01518-951062", "01632-372232"],
      whatsapp: "+8801518951062",
      hours: "Monday – Saturday: 10:00 AM – 7:00 PM (JST)",
      mapsUrl: "https://maps.google.com/?q=Tokyo+Japan",
      mapsEmbed:
        "https://maps.google.com/maps?q=Tokyo+Japan&z=12&hl=en&output=embed",
    },
  },

  rajshahiOffice: {
    title: "AcademiaZ Rajshahi Headquarters",
    building: "Greater Road Center (Lane beside Ma Photostat)",
    floor: "Dedicated Training & Consultation Suites",
    area: "Kadirganj (East Side of the Mosque)",
    city: "Rajshahi",
    postalCode: "6000",
    country: "Bangladesh",
    full: "Kadirganj, Greater Road (Lane beside Ma Photostat, East side of the mosque), Rajshahi - 6000, Bangladesh",
    hotlines: ["01518-951062", "01632-372232"],
    whatsapp: "+8801518951062",
    whatsappDisplay: "01518-951062",
    email: "academiazrajshahi@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Kadirganj+Rajshahi+Bangladesh",
    mapsEmbed:
      "https://maps.google.com/maps?q=Kadirganj+Greater+Road+Rajshahi+Bangladesh&z=16&hl=en&output=embed",
  },

  address: {
    building: "Greater Road Center (Lane beside Ma Photostat)",
    street: "Greater Road, Kadirganj",
    area: "Beside Ma Photostat, East Side of Mosque",
    city: "Rajshahi",
    postalCode: "6000",
    country: "Bangladesh",
    full: "Kadirganj, Greater Road (Lane beside Ma Photostat, East side of the mosque), Rajshahi - 6000, Bangladesh",
    networkNote:
      "Japan Based & Managed · 100% Japan Standard Training · Experienced Faculty · Kadirganj, Rajshahi Campus",
  },

  geo: { lat: 24.3745, lng: 88.6042 },
  mapsUrl: "https://maps.google.com/?q=Kadirganj+Rajshahi+Bangladesh",
  mapsEmbed:
    "https://maps.google.com/maps?q=Kadirganj+Greater+Road+Rajshahi+Bangladesh&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/AcademiaZRajshahi",
    facebookPageName: "@AcademiaZRajshahi",
    facebookVideos: "https://www.facebook.com/AcademiaZRajshahi/videos",
    facebookReels: "https://www.facebook.com/AcademiaZRajshahi/reels",
    instagram: "https://www.facebook.com/AcademiaZRajshahi",
    linkedin: "https://www.facebook.com/AcademiaZRajshahi",
    youtube: "https://www.facebook.com/AcademiaZRajshahi/videos",
    messenger: "https://m.me/AcademiaZRajshahi",
    whatsapp: "https://wa.me/8801518951062",
  },

  featuredReels: [
    {
      id: "reel-1",
      badge: "🇯🇵 Japanese N5/N4 Batch",
      title: "জাপানি ভাষা N5 ও N4 ক্লাসরুম স্পিকিং সেশন",
      desc: "কাদিরগঞ্জ, রাজশাহী ক্যাম্পাসে সরাসরি জাপানি ভাষার বর্ণমালা, কাঞ্জি ও অডিও লিসেনিং প্র্যাকটিস। ১০০% জাপান স্ট্যান্ডার্ড সিলেবাস ও জাপান থেকে পরিচালিত গাইডলাইন।",
      embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAcademiaZRajshahi%2Fvideos&show_text=false&width=380&t=0",
      videoUrl: "https://www.facebook.com/AcademiaZRajshahi/videos",
    },
    {
      id: "reel-2",
      badge: "✈️ Study in Japan & COE",
      title: "জাপান স্টুডেন্ট ভিসা ও স্পেশিফাইড স্কিল্ড ওয়ার্কার (SSW)",
      desc: "জাপানে উচ্চশিক্ষা ও ক্যারিয়ার গড়ার স্বপ্ন বাস্তবায়নে সঠিক প্ল্যানিং, COE আবেদন এবং ইন্টারভিউ প্রস্তুতির বিস্তারিত তথ্য সেশন।",
      embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAcademiaZRajshahi%2Fvideos&show_text=false&width=380&t=0",
      videoUrl: "https://www.facebook.com/AcademiaZRajshahi/videos",
    },
    {
      id: "reel-3",
      badge: "🗣️ Kids & Spoken English",
      title: "কিডস ইংলিশ ও আইইএলটিএস প্রস্তুতি ক্লাস",
      desc: "ছোটদের জন্য আকর্ষণীয় ফোনেটিক্স ও স্পোকেন ড্রিলস এবং বড়দের জন্য কেমব্রিজ স্ট্যান্ডার্ড ব্যান্ড ৭.৫+ আইইএলটিএস মক টেস্ট ও ওয়ান-টু-ওয়ান গাইডেন্স।",
      embedSrc: "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2FAcademiaZRajshahi%2Fvideos&show_text=false&width=380&t=0",
      videoUrl: "https://www.facebook.com/AcademiaZRajshahi/videos",
    },
  ],

  stats: [
    { value: "100%", label: "Japan Standard Service", badge: "জাপান থেকে পরিচালিত" },
    { value: "N5 & N4", label: "Japanese Course Tracks", badge: "Basic to Advanced" },
    { value: "SSW / TITP", label: "Japan Career Pathways", badge: "Work in Japan" },
    { value: "Kadirganj", label: "Rajshahi Prime Campus", badge: "Greater Road" },
    { value: "100%", label: "Visa Documentation Support", badge: "Accurate & Reliable" },
    { value: "Band 7.5+", label: "IELTS Target Score", badge: "Academic & General" },
  ],

  accreditations: [
    {
      name: "Japan Based & Managed",
      title: "Direct Operational Management from Japan",
      desc: "Managed directly with Japanese standards, ensuring verified information, genuine curriculum, and direct coordination with Japanese educational institutions.",
    },
    {
      name: "Experienced & Certified Instructors",
      title: "Native & JLPT Certified Faculty",
      desc: "Specialized language trainers for Japanese (JLPT/NAT-TEST/JFT-Basic), IELTS examiners' rubrics, Spoken English, and Kids English phonetics.",
    },
    {
      name: "100% Comprehensive Visa Guidance",
      title: "COE Processing, Embassy Prep & Documentation",
      desc: "Complete assistance with Certificate of Eligibility (COE) for Japan, university and language school matching, and 1-on-1 consular interview coaching.",
    },
    {
      name: "Student-First Mentorship",
      title: "আপনার সাফল্যই আমাদের অগ্রাধিকার",
      desc: "Personalized care for every learner, small interactive batches, continuous feedback, and dedicated post-visa arrival assistance.",
    },
  ],

  verifiedKeyPartners: [
    {
      name: "Leading Japanese Language Academies & Universities",
      country: "Japan",
      note: "Top language institutes in Tokyo, Osaka, Nagoya, Fukuoka, and Kyoto with April, July, October & January intakes",
    },
    {
      name: "TITP & SSW Technical Training Organizations",
      country: "Japan",
      note: "Specified Skilled Worker (SSW Category 1 & 2) and Technical Intern Training Program employer connections",
    },
    {
      name: "Public Universities & Colleges in Germany",
      country: "Germany",
      note: "Tuition-free Bachelor's and Master's degrees, Ausbildung guidance, and student visa support",
    },
    {
      name: "Premier Universities in UK & Australia",
      country: "UK & Australia",
      note: "Fast 1-year Master's, 2-year Graduate Route PSW, and Cambridge-aligned IELTS preparation",
    },
    {
      name: "Accredited Institutions in Canada & USA",
      country: "Canada & USA",
      note: "Public colleges, paid co-op internships, PGWP, and STEM OPT research universities",
    },
    {
      name: "Global Branch Campuses in Malaysia",
      country: "Malaysia",
      note: "International branch campuses (Monash, Nottingham), fast EMGS visa, and affordable tuition",
    },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Courses & Academy",
    to: "/services",
    children: [
      {
        label: "Japanese Language Course (N5 & N4) 🇯🇵",
        to: "/services",
        badge: "Basic to Advanced",
      },
      {
        label: "Student Visa Guidance (Study in Japan) 🎓",
        to: "/services",
        badge: "COE & Admission",
      },
      {
        label: "TITP & SSW Preparation (Work in Japan) 💼",
        to: "/services",
        badge: "Career Support",
      },
      {
        label: "Documentation & Application Support 📋",
        to: "/services",
        badge: "Fast & Reliable",
      },
      {
        label: "IELTS Preparation (Academic/General) 🇬🇧",
        to: "/services",
        badge: "Band 7.5+ Target",
      },
      {
        label: "Spoken English & Communication 🗣️",
        to: "/services",
        badge: "Fluency & Confidence",
      },
      {
        label: "Kids English (Ages 5–14) 🧒",
        to: "/services",
        badge: "Junior Fluency",
      },
      {
        label: "Free Assessment & Consultation 📝",
        to: "/services",
        badge: "100% Free",
      },
    ],
  },
  {
    label: "Study in Japan & Abroad",
    to: "/destinations",
    children: [
      {
        label: "Study in Japan 🇯🇵",
        to: "/study-in-{$country}",
        params: { country: "japan" },
        badge: "Flagship Track",
      },
      {
        label: "Study in Germany 🇩🇪",
        to: "/study-in-{$country}",
        params: { country: "germany" },
        badge: "Tuition-Free",
      },
      {
        label: "Study in UK 🇬🇧",
        to: "/study-in-{$country}",
        params: { country: "uk" },
        badge: "1-Yr Masters / PSW",
      },
      {
        label: "Study in Canada 🇨🇦",
        to: "/study-in-{$country}",
        params: { country: "canada" },
        badge: "PGWP & Co-op",
      },
      {
        label: "Study in USA 🇺🇸",
        to: "/study-in-{$country}",
        params: { country: "usa" },
        badge: "STEM OPT 3 Yrs",
      },
      {
        label: "Study in Australia 🇦🇺",
        to: "/study-in-{$country}",
        params: { country: "australia" },
        badge: "Top Universities",
      },
      {
        label: "Study in Malaysia 🇲🇾",
        to: "/study-in-{$country}",
        params: { country: "malaysia" },
        badge: "Affordable & Fast",
      },
      { label: "View All Destinations", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "Japanese Language (N5–N4)", to: "/services", badge: "JLPT / JFT" },
      { label: "Student Visa for Japan", to: "/services", badge: "100% Guidance" },
      { label: "TITP & SSW Career Guidance", to: "/services", badge: "Job Support" },
      { label: "IELTS & English Programs", to: "/services", badge: "All Levels" },
      { label: "Documentation & SOP Support", to: "/services", badge: "Accurate" },
      { label: "Free Profile Assessment", to: "/services", badge: "Zero Fee" },
    ],
  },
  { label: "Upcoming Batches", to: "/offers" },
  { label: "About AcademiaZ", to: "/about" },
  { label: "Contact & Location", to: "/contact" },
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
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia (Top Global Economy)",
    tagline:
      "World-class universities, lucrative part-time earnings, SSW/TITP career pathways & 100% Japan standard guidance from Rajshahi",
    intro:
      "Japan is the flagship destination at AcademiaZ Rajshahi. Operated and managed directly from Japan, we provide complete, transparent guidance from Japanese language mastery (N5 & N4) to Certificate of Eligibility (COE) processing, language school and university admission, and post-arrival settlement support.",
    why: [
      "Operated and managed directly from Japan (জাপান থেকে পরিচালিত ১০০% জাপান স্ট্যান্ডার্ড সেবা)",
      "Comprehensive Japanese Language training (JLPT / NAT-TEST / JFT-Basic) at our Kadirganj, Rajshahi campus",
      "Permitted to work up to 28 hours per week during academic semesters and 40 hours per week during vacations",
      "High part-time wages allowing students to comfortably bear living expenses and tuition fees",
      "Clear career transition pathways to full-time engineering, business, and Specified Skilled Worker (SSW 1 & 2) visas",
      "Safe, technologically advanced, and welcoming society with immense respect for disciplined international scholars",
    ],
    popularFields: [
      "Information Technology & Software Engineering",
      "Robotics, Automotives & Mechanical Engineering",
      "International Business & Hospitality Management",
      "Japanese Language & Cultural Studies",
      "Agricultural Technology & Food Processing",
    ],
    avgTuition: "¥600,000 – ¥1,100,000 / year (Varies by Language Academy or University)",
    avgLiving: "¥60,000 – ¥90,000 / month (Easily covered with student part-time wages)",
    pswv: "Designated Activities Job Search Visa + Conversion to SSW / Technical / Specialist Work Visa",
    intakes: "April (Spring), July (Summer), October (Autumn) & January (Winter)",
    scholarships: "MEXT Scholarships, JASSO Honors Grants & Institutional Tuition Reductions",
    topUnis: [
      "University of Tokyo",
      "Kyoto University",
      "Tokyo Institute of Technology",
      "Waseda University",
      "Top Accredited Japanese Language Academies in Tokyo, Osaka, Nagoya & Fukuoka",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Flagship Track · Japan Based & Managed",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe (Schengen)",
    tagline:
      "Tuition-free public universities, dual vocational training (Ausbildung) & 18-month post-study work rights",
    intro:
      "Germany offers world-renowned tuition-free higher education and practical vocational training (Ausbildung). AcademiaZ assists students with admissions, blocked accounts, and visa documentation.",
    why: [
      "Zero tuition fees at public universities across Germany for Bachelor's and Master's degrees",
      "Opportunities for paid dual vocational training (Ausbildung) in healthcare, IT, and engineering",
      "18-month Post-Study Work Residence Permit (Job Seeker Visa) for all university graduates",
      "Part-time work rights up to 20 hours/week during semesters and 40 hours/week during vacations",
      "Unrestricted travel across all 29 European Schengen member states",
    ],
    popularFields: [
      "Computer Science & Artificial Intelligence",
      "Mechanical, Automotive & Industrial Engineering",
      "Data Science & International Business",
      "Ausbildung in Nursing, Hospitality & IT",
    ],
    avgTuition: "€0 – €350 / semester (Public University Semester Contribution Only)",
    avgLiving: "€934 / month (Blocked Account Guideline)",
    pswv: "18 Months Post-Study Job Seeker Residence Permit",
    intakes: "Winter Semester (October) & Summer Semester (April)",
    scholarships: "DAAD Scholarships, Deutschlandstipendium & Tuition Waivers",
    topUnis: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "TU Berlin",
      "Heidelberg University",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Tuition-Free Degrees & Ausbildung Support",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline:
      "Fast 1-year Master's degrees, 2-year Graduate Route PSW & Cambridge-aligned IELTS preparation",
    intro:
      "With AcademiaZ's structured counseling and IELTS coaching, students access prestigious UK institutions with accelerated 1-year Master's programs, 2-year post-study work rights, and merit scholarships.",
    why: [
      "1-Year intensive Master's degrees significantly saving tuition and living expenses",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon graduation",
      "Comprehensive IELTS preparation (Target Band 7.5+) right at our Rajshahi campus",
      "Generous international scholarships ranging from £1,500 to £4,000",
    ],
    popularFields: [
      "Computer Science & Cyber Security",
      "Business Administration & Global MBA",
      "Public Health & Healthcare Management",
      "Civil & Environmental Engineering",
    ],
    avgTuition: "£11,000 – £16,000 / year (after partner scholarships)",
    avgLiving: "£9,207 – £12,000 / year",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January, May & September (Key Intakes)",
    scholarships: "£1,500 – £4,000 International Merit Bursaries",
    topUnis: [
      "University of Hertfordshire",
      "Coventry University",
      "University of East London",
      "University of Greenwich",
      "Birmingham City University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "1-Year Fast Masters & IELTS Band 7.5+ Target",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline:
      "Reputed public DLIs, paid co-op work terms & up to 3-year Post-Graduation Work Permit (PGWP)",
    intro:
      "Canada remains a prime global education destination offering hands-on college diplomas, bachelor's and master's degrees, and post-graduation work opportunities.",
    why: [
      "Accredited Designated Learning Institutions (DLIs) with paid co-op internships",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for eligible graduates",
      "Safe, multicultural cities with high quality of life and student support",
    ],
    popularFields: [
      "Software Engineering & Cloud Computing",
      "Business Analytics & Project Management",
      "Health Administration & Nursing",
      "Supply Chain & International Logistics",
    ],
    avgTuition: "CAD $15,000 – $26,000 / year",
    avgLiving: "CAD $14,000 – $18,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "January (Winter), May (Summer), September (Fall)",
    scholarships: "CAD $2,000 – $8,000 Entrance & Merit Grants",
    topUnis: [
      "University of Windsor",
      "Memorial University of Newfoundland",
      "Seneca Polytechnic",
      "Fanshawe College",
      "Conestoga College",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    tagline: "World-renowned research universities, generous assistantships & up to 3-year STEM OPT",
    intro:
      "The USA offers unmatched academic prestige, research resources, and up to 3 years of STEM OPT full-time work authorization post-graduation.",
    why: [
      "Home to top-ranked global institutions and innovation hubs",
      "Up to 36 months (3 years) of STEM OPT full-time work authorization",
      "Graduate assistantships (TA/RA) and tuition waiver possibilities",
    ],
    popularFields: [
      "Artificial Intelligence & Computer Science",
      "Data Science & Business Analytics",
      "Electrical & Mechanical Engineering",
      "Biotechnology & Pharmaceutical Sciences",
    ],
    avgTuition: "$18,000 – $32,000 / year",
    avgLiving: "$10,000 – $15,000 / year",
    pswv: "12 Months OPT + 24 Months STEM OPT Extension (Total 3 Years)",
    intakes: "Fall (August) & Spring (January)",
    scholarships: "Merit-based scholarships & Graduate Assistantships",
    topUnis: [
      "Arizona State University",
      "University of Texas at Arlington",
      "University of South Florida",
      "Illinois Institute of Technology",
    ],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "Group of Eight universities, exceptional living standards & post-study work rights",
    intro:
      "Australia is celebrated for high educational standards, sunny lifestyles, high minimum wages for student jobs, and generous post-study work visas.",
    why: [
      "Internationally recognized qualifications under the Australian Qualifications Framework (AQF)",
      "High minimum hourly wages for part-time work during studies",
      "Post-Study Work rights (Subclass 485) allowing full-time employment",
      "Safe, multicultural environment with excellent student welfare services",
    ],
    popularFields: [
      "Information Technology & Cybersecurity",
      "Accounting, Finance & Business Analytics",
      "Nursing & Public Health",
      "Civil & Mining Engineering",
    ],
    avgTuition: "AUD $22,000 – $36,000 / year",
    avgLiving: "AUD $20,000 – $25,000 / year",
    pswv: "2 to 4 Years Post-Study Work Visa (Subclass 485)",
    intakes: "February (Semester 1) & July (Semester 2)",
    scholarships: "20%–50% University Merit Scholarships",
    topUnis: [
      "University of Melbourne",
      "University of Sydney",
      "Monash University",
      "Deakin University",
      "RMIT University",
    ],
    withoutIelts: false,
    featured: false,
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia",
    tagline: "UK/Australian branch campuses, streamlined EMGS visa & affordable modern living",
    intro:
      "Malaysia delivers high-quality British and Australian degrees through accredited branch campuses at a fraction of Western costs, with rapid visa approvals.",
    why: [
      "Earn UK and Australian degrees (Monash, Nottingham) at 1/3rd the cost",
      "Streamlined EMGS student visa approval with straightforward procedures",
      "Affordable tuition fees and low cost of living in vibrant multicultural cities",
    ],
    popularFields: [
      "Information Technology & AI",
      "Business Administration & International Finance",
      "Biotechnology & Pharmacy",
    ],
    avgTuition: "$3,500 – $8,000 / year",
    avgLiving: "$350 – $550 / month",
    pswv: "Post-Graduation Internship & Employment Pass Options",
    intakes: "February, July, September & October",
    scholarships: "Malaysian International Scholarship (MIS) & Institutional Awards",
    topUnis: [
      "Universiti Malaya (UM)",
      "Universiti Teknologi Malaysia (UTM)",
      "Monash University Malaysia",
      "Taylor's University",
    ],
    withoutIelts: true,
    featured: false,
  },
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "japanese" | "japan-visa" | "titp-ssw" | "ielts" | "spoken" | "kids" | "documentation";
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
    slug: "japanese-language",
    title: "Japanese Language Course (N5 & N4 Levels)",
    subtitle: "From Basic to Advanced Level — JLPT, JFT-Basic & NAT-TEST Preparation",
    category: "japanese",
    icon: "🇯🇵",
    badge: "Official Flagship Course",
    duration: "3 to 4 Months Intensive Program (N5 Level) / 3 Months (N4 Level)",
    classSchedule: "Morning, Afternoon & Evening Batches (2 Hours Daily, 5-6 Days a Week)",
    batchType: "Offline Classroom at Kadirganj Rajshahi Campus with Audio-Visual Drills",
    targetOutcome: "JLPT / JFT-Basic / NAT-TEST Pass & Japan Visa Eligibility",
    description:
      "AcademiaZ's flagship Japanese Language program in Kadirganj, Rajshahi is designed specifically for students and professionals targeting study abroad or skilled careers in Japan. Operated and managed directly from Japan (জাপান থেকে পরিচালিত), the course covers complete script mastery (Hiragana & Katakana), foundational to intermediate Kanji, authentic Minna no Nihongo curriculum, real-life conversational drills, and continuous mock testing to guarantee exam success.",
    highlights: [
      "Operated and managed directly from Japan with 100% Japan standard methodology",
      "Complete Hiragana, Katakana, and essential Kanji writing & reading mastery",
      "From basic to advanced level training covering JLPT N5, N4, and JFT-Basic standards",
      "Experienced & certified language instructors with native-level pronunciation guidance",
      "Authentic Minna no Nihongo curriculum with audio-visual listening drills",
      "Weekly timed mock exams replicating JLPT and NAT-TEST examination patterns",
      "Direct pathway to Japan student visa and TITP/SSW work visa documentation",
    ],
    modules: [
      {
        title: "Japanese Writing Systems (Hiragana & Katakana)",
        desc: "Complete recognition and writing of all 46 basic Hiragana and Katakana characters, Dakuon, Handakuon, Yoon combined sounds, and stroke orders.",
      },
      {
        title: "Kanji Foundations & Core Vocabulary",
        desc: "Over 800 essential daily life vocabulary words and 100+ high-frequency Kanji characters required for JLPT N5 level.",
      },
      {
        title: "Grammar Patterns & Conversational Structures",
        desc: "Mastery of Japanese particles (wa, ga, o, ni, de, to), verb conjugations (Masu, Te, Nai, Ta forms), adjective inflections, and polite forms.",
      },
      {
        title: "Listening Comprehension & Speaking Drills",
        desc: "Audio listening drills, dialogue roleplays (train stations, shopping, self-introduction, job interviews), and pronunciation refinement.",
      },
      {
        title: "JLPT / JFT / NAT Mock Exams & Interview Coaching",
        desc: "Full-length timed mock tests with detailed scoring diagnostics and embassy/immigration interview preparation.",
      },
    ],
  },
  {
    slug: "student-visa-guidance",
    title: "Student Visa Guidance (Study in Japan)",
    subtitle: "Complete Guidance for Higher Education & Japanese Language Schools",
    category: "japan-visa",
    icon: "🎓",
    badge: "100% Visa Guidance",
    duration: "Intake Specific (April, July, October & January Intakes)",
    classSchedule: "Personalized Counseling & Document Review Sessions",
    batchType: "One-on-One Dedicated Case Officer Support",
    targetOutcome: "Secured Admission, COE Issuance & Japanese Student Visa Approval",
    description:
      "Complete end-to-end guidance for students aspiring to study in Japan. We assist in selecting accredited Japanese language academies and universities in Tokyo, Osaka, Nagoya, Fukuoka, and Kyoto, assembling immaculate Certificate of Eligibility (COE) files, ensuring compliant financial sponsorship documentation, and conducting realistic embassy mock interviews.",
    highlights: [
      "Personalized university and language school matching based on student academic profile and budget",
      "Full COE (Certificate of Eligibility) preparation with meticulous documentation verification",
      "Guidance for financial sponsorship, bank solvency, and family income certificates",
      "One-on-one Japanese Embassy consular interview preparation and mock sessions",
      "Pre-departure briefing covering air ticketing, baggage guidelines, and Japan arrival procedures",
      "Post-arrival guidance in Japan regarding ward office registration and part-time work rights",
    ],
    modules: [
      {
        title: "Profile Assessment & Institution Selection",
        desc: "Evaluating academic transcripts, study gap, and selecting accredited language schools or universities in Japan.",
      },
      {
        title: "COE Dossier Assembly & Translation",
        desc: "Compiling all required educational certificates, Japanese translations, and sponsor financial documentation.",
      },
      {
        title: "Immigration Submission & Follow-up",
        desc: "Coordinating with Japanese immigration authorities and schools until official COE approval.",
      },
      {
        title: "Embassy Visa File Submission & Mock Interviews",
        desc: "Preparing the visa application file and conducting intensive question-and-answer mock interviews.",
      },
      {
        title: "Pre-Departure & Japan Settlement Briefing",
        desc: "Comprehensive guidance on flight booking, accommodation options, ward office procedures, and part-time job rules.",
      },
    ],
  },
  {
    slug: "titp-ssw-preparation",
    title: "TITP & SSW Preparation (Work in Japan)",
    subtitle: "Specified Skilled Worker & Technical Intern Training Support for Japan",
    category: "titp-ssw",
    icon: "💼",
    badge: "Career in Japan",
    duration: "3 to 6 Months Comprehensive Preparation",
    classSchedule: "Intensive Language & Skills Testing Coaching",
    batchType: "Skill-Focused Career Batch",
    targetOutcome: "JFT-Basic / JLPT N4 Qualification & SSW Skill Test Readiness",
    description:
      "Support for skilled workers and professionals targeting employment in Japan under the Specified Skilled Worker (SSW - 特定技能) and Technical Intern Training Program (TITP) pathways. AcademiaZ provides targeted Japanese language preparation (JFT-Basic A2 / JLPT N4), trade skill test orientation (caregiving, food service, construction, agriculture, etc.), and complete visa documentation.",
    highlights: [
      "Focused coaching for JFT-Basic A2 and JLPT N4 required for SSW visa qualification",
      "Orientation for industry-specific skill evaluation tests (Nursing Care, Food Service, Hospitality, Agriculture)",
      "Resume (Rirekisho) writing in Japanese format and interview coaching for Japanese employers",
      "Transparent guidance on Japanese labor standards, minimum wages, and employment contracts",
      "Direct coordination and documentation support under official Japan standards",
    ],
    modules: [
      {
        title: "JFT-Basic & Practical Japanese Language",
        desc: "Intensive study targeting the JFT-Basic exam, emphasizing everyday workplace communication and situational dialogues.",
      },
      {
        title: "Industry Skill Test Orientation",
        desc: "Understanding trade skill test syllabus and past test formats across key SSW sectors.",
      },
      {
        title: "Japanese Resume & Employer Interview Prep",
        desc: "Formatting Japanese resumes, mastering polite business Japanese (Keigo basics), and practicing video interview techniques.",
      },
      {
        title: "Visa Contract & Embassy Processing",
        desc: "Verification of employment contracts, COE issuance for SSW, and visa stamping assistance.",
      },
    ],
  },
  {
    slug: "documentation-application-support",
    title: "Documentation & Application Support",
    subtitle: "Accurate, Fast & Reliable Service for All Study & Visa Applications",
    category: "documentation",
    icon: "📋",
    badge: "Accurate & Reliable",
    duration: "Continuous Assistance Throughout Application Cycle",
    classSchedule: "Walk-in & Scheduled Document Review Sessions",
    batchType: "Dedicated Documentation Desk at Rajshahi Campus",
    targetOutcome: "Flawless, Embassy-Compliant Application Dossier",
    description:
      "Documentation is the single most decisive factor in visa approval. AcademiaZ provides meticulous, fast, and accurate documentation services including official translations, Statement of Purpose (SOP) writing, study plan formulation, affidavit vetting, and application file audits.",
    highlights: [
      "Accurate translation of Bengali certificates, deeds, and official documents into Japanese and English",
      "Personalized Statement of Purpose (SOP) and Study Plan drafting tailored to student aspirations",
      "Comprehensive verification of financial documents, income taxes, and bank solvency statements",
      "Strict zero-error policy preventing costly delays or visa refusals due to clerical discrepancies",
    ],
    modules: [
      {
        title: "Document Audit & Gap Analysis",
        desc: "Reviewing all academic, financial, and personal papers to identify any missing elements or discrepancies.",
      },
      {
        title: "Professional Translation & Notarization",
        desc: "Accurate translations aligned with Japanese immigration and international embassy standards.",
      },
      {
        title: "SOP & Study Plan Formulation",
        desc: "Drafting compelling, authentic academic statements of purpose reflecting genuine student motivation.",
      },
      {
        title: "Final File Compilation & Lodgement",
        desc: "Packaging the complete dossier in precise embassy-mandated order for smooth processing.",
      },
    ],
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation (Academic & General Training)",
    subtitle: "Comprehensive Band 7.5+ Strategy for Study Abroad & Global Migration",
    category: "ielts",
    icon: "🇬🇧",
    badge: "Band 7.5+ Target",
    duration: "2 to 3 Months Intensive Coaching",
    classSchedule: "Morning, Evening & Weekend Batches (3-4 Days a Week)",
    batchType: "Interactive Small Batch at Kadirganj Campus",
    targetOutcome: "Target Band 7.0 – 8.0+ in Academic or General Training",
    description:
      "AcademiaZ's IELTS Preparation program in Rajshahi provides complete mastery across all 4 modules (Listening, Reading, Writing, Speaking). Tailored for students aspiring for higher education in the UK, USA, Canada, Australia, and European institutions, with weekly Cambridge mock tests, individualized essay evaluations, and 1-on-1 speaking interview simulations.",
    highlights: [
      "Comprehensive coverage of both Academic and General Training formats",
      "Small batch sizes ensuring personalized attention and individual speaking feedback",
      "Weekly authentic full-length mock exams replicating real British Council / IDP test environments",
      "In-depth Task 1 & Task 2 Writing analysis with examiner band descriptor breakdowns",
      "1-on-1 Speaking interviews with real-time feedback on fluency, lexical resource, and pronunciation",
      "Access to authentic Cambridge IELTS past test materials and listening audio library",
    ],
    modules: [
      {
        title: "Listening Module Mastery",
        desc: "Predictive listening techniques, keyword spotting, note completion, multiple choice, and tackling diverse accents.",
      },
      {
        title: "Reading Speed & Accuracy",
        desc: "Mastering Skimming & Scanning, True/False/Not Given, Heading Matching, and time-management strategies.",
      },
      {
        title: "Writing Task 1 & Task 2",
        desc: "Data interpretation (graphs, charts, processes), formal letters, and structured essay writing with cohesive devices.",
      },
      {
        title: "Speaking Confidence & Fluency",
        desc: "Overcoming hesitation, expanding Part 2 cue cards, handling Part 3 abstract discussions, and intonation improvement.",
      },
      {
        title: "Full-Length Mock Tests & Diagnostic Review",
        desc: "Timed exam simulations followed by personalized score breakdown and targeted improvement plans.",
      },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Communication Fluency",
    subtitle: "Overcome Shyness, Speak Confidently & Master Real-World English",
    category: "spoken",
    icon: "🗣️",
    badge: "Fluency & Confidence",
    duration: "2 Months Active Practice Program",
    classSchedule: "Flexible Morning, Afternoon & Evening Batches",
    batchType: "Activity-Based Interactive Batch",
    targetOutcome: "Spontaneous, Confident & Fluent English Speaking",
    description:
      "Designed for students, job seekers, and working professionals in Rajshahi who hesitate to speak English despite knowing grammar. Our Spoken English program creates an engaging, pressure-free speaking environment with group discussions, situational roleplays, public speaking exercises, and pronunciation refinement.",
    highlights: [
      "100% English speaking classroom atmosphere to build natural speaking habits",
      "Practical phonetics, pronunciation, and British/American accent awareness",
      "Real-world situation roleplays: job interviews, corporate meetings, travel, presentations",
      "Vocabulary enrichment with modern idioms, phrases, and conversational connectors",
      "Overcoming speaking anxiety through guided presentations and group debates",
    ],
    modules: [
      {
        title: "Breaking Hesitation & Confidence Building",
        desc: "Overcoming fear of speaking, positive body language, and spontaneous conversation starters.",
      },
      {
        title: "Pronunciation & Phonetics Drills",
        desc: "Correct vowel and consonant articulation, word stress, rhythm, and natural sentence intonation.",
      },
      {
        title: "Situational Roleplays & Real-Life Dialogue",
        desc: "Conversations for professional workplaces, interviews, social gatherings, and airport travel.",
      },
      {
        title: "Public Speaking, Debates & Presentations",
        desc: "Structuring viewpoints, polite agreements/disagreements, and delivering impromptu stage speeches.",
      },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids English & Young Learners Program (Ages 5–14)",
    subtitle: "Fun, Interactive & Foundational English Learning for Children",
    category: "kids",
    icon: "🧒",
    badge: "Junior Fluency",
    duration: "3 Months Foundational Program",
    classSchedule: "After-School & Weekend Batches",
    batchType: "Child-Friendly Interactive Learning Batch",
    targetOutcome: "Accurate Pronunciation, Rich Vocabulary & Natural Speaking Habits",
    description:
      "A joyful, nurturing English learning environment for young learners (ages 5 to 14) in Rajshahi. Children learn English naturally through interactive phonics, storytelling, educational cartoons, rhymes, and vocabulary games, building solid foundations for future academic excellence.",
    highlights: [
      "Age-tailored groups (Junior Group: 5–8 yrs; Senior Group: 9–14 yrs)",
      "Phonics-based reading and correct English pronunciation habits from early age",
      "Interactive audio-visual storytelling, illustrated books, and vocabulary games",
      "Building confidence in school recitations, presentations, and daily dialogue",
      "Gentle, patient, and specially trained instructors who make learning fun",
    ],
    modules: [
      {
        title: "Phonics & Letter Sounds",
        desc: "Jolly phonics, sound blending, sight words, and reading illustrated storybooks.",
      },
      {
        title: "Everyday Vocabulary & Action Words",
        desc: "Colors, animals, family, school objects, fruits, polite social phrases, and descriptive words.",
      },
      {
        title: "Sentence Building & Storytelling",
        desc: "Forming simple sentences, picture descriptions, cartoon story narration, and play-based grammar.",
      },
      {
        title: "Speaking Confidence & Recitations",
        desc: "Rhymes, self-introductions, show-and-tell activities, and interactive dialogue games.",
      },
    ],
  },
];

export type Service = {
  id: string;
  title: string;
  subtitle: string;
  icon: string;
  badge: string;
  category: "study-abroad" | "language-courses" | "visa-guidance" | "free-file";
  overview: string;
  benefits: string[];
  deliverables: string[];
  intakeNote?: string;
  destinationLink?: string;
};

export const services: Service[] = [
  {
    id: "japanese-language-training",
    title: "Japanese Language Course (N5 & N4)",
    subtitle: "JLPT, JFT-Basic & NAT-TEST Preparation with 100% Japan Standard",
    icon: "🇯🇵",
    badge: "Official Flagship Course",
    category: "language-courses",
    overview:
      "AcademiaZ provides intensive Japanese language training in Kadirganj, Rajshahi. Managed directly from Japan, our courses follow the official Minna no Nihongo syllabus with comprehensive Hiragana, Katakana, and Kanji coverage, audio listening drills, and authentic mock tests.",
    benefits: [
      "Operated and managed directly from Japan with authentic Japanese teaching methodology",
      "Covers JLPT N5, N4, and JFT-Basic standards for study and work visa qualification",
      "Small batch sizes ensuring individual attention and speaking practice for every student",
      "Complete study materials, audio tracks, and weekly exam simulations provided",
    ],
    deliverables: [
      "Full script mastery (Hiragana, Katakana & 100+ Kanji for N5)",
      "Weekly timed mock exams with detailed instructor feedback",
      "Certificate of Course Completion",
      "Direct pathway guidance to Japan Student Visa and SSW/TITP programs",
    ],
  },
  {
    id: "study-in-japan-visas",
    title: "Student Visa Guidance (Study in Japan)",
    subtitle: "Complete Guidance for Higher Education & Japanese Language Schools",
    icon: "🎓",
    badge: "Flagship Visa Track",
    category: "study-abroad",
    overview:
      "End-to-end consultancy for students wishing to pursue language school, bachelor's, or master's degrees in Japan. We coordinate directly with accredited institutions across Tokyo, Osaka, Nagoya, and Fukuoka, assembling foolproof COE files and providing consular interview prep.",
    benefits: [
      "Direct liaison with top Japanese language schools and universities across major cities",
      "Flawless COE (Certificate of Eligibility) preparation with rigorous documentation checks",
      "Permitted part-time work rights up to 28 hours per week with attractive earnings",
      "One-on-one Japanese Embassy consular interview coaching",
    ],
    deliverables: [
      "Free profile assessment and language school matching",
      "COE application dossier compilation and submission",
      "Visa file submission guidance and embassy mock interview sessions",
      "Pre-departure orientation and Japan settlement guidelines",
    ],
    intakeNote: "Key Intakes: April, July, October & January",
  },
  {
    id: "titp-ssw-career-visas",
    title: "TITP & SSW Preparation (Work in Japan)",
    subtitle: "Specified Skilled Worker & Technical Intern Support for Work in Japan",
    icon: "💼",
    badge: "Work in Japan",
    category: "visa-guidance",
    overview:
      "Comprehensive preparation for skilled professionals seeking employment in Japan under the Specified Skilled Worker (SSW 1 & 2) and Technical Intern Training Program (TITP). We provide JFT-Basic A2 / JLPT N4 training, trade test guidance, and contract documentation.",
    benefits: [
      "Targeted language preparation for JFT-Basic A2 and JLPT N4 required for SSW visas",
      "Guidance across in-demand sectors: Nursing Care, Food Service, Hospitality, Agriculture",
      "Japanese resume (Rirekisho) writing and video interview preparation with Japanese employers",
      "Clear, transparent procedures strictly adhering to Japanese labor standards",
    ],
    deliverables: [
      "JFT-Basic / JLPT N4 exam qualification preparation",
      "Trade test orientation and study materials",
      "Employer interview coaching in Japanese",
      "Visa contract verification and embassy processing support",
    ],
  },
  {
    id: "documentation-application-support",
    title: "Documentation & Application Support",
    subtitle: "Accurate, Fast & Reliable Service for Study & Visa Applications",
    icon: "📋",
    badge: "Accurate & Fast",
    category: "visa-guidance",
    overview:
      "Professional documentation services ensuring zero-error submission. We provide certified translations, personalized Statement of Purpose (SOP) writing, study plans, financial sponsorship structuring, and application dossier verification.",
    benefits: [
      "Accurate translation of certificates and official documents into Japanese and English",
      "Personalized Statement of Purpose (SOP) and Study Plan drafting",
      "Meticulous verification of bank solvency and sponsorship affidavits",
      "Zero-defect packaging meeting strict embassy requirements",
    ],
    deliverables: [
      "Certified translations and notarized copies",
      "Custom Statement of Purpose (SOP)",
      "Financial documentation checklist and verification report",
      "Complete organized visa submission file",
    ],
  },
  {
    id: "ielts-english-academy",
    title: "IELTS & English Language Programs",
    subtitle: "IELTS Preparation (Academic/General), Spoken English & Kids English",
    icon: "🗣️",
    badge: "Comprehensive English Hub",
    category: "language-courses",
    overview:
      "AcademiaZ's English Language Academy in Rajshahi provides Cambridge-aligned IELTS coaching targeting Band 7.5+, Spoken English for career and interview fluency, and engaging Kids English for children ages 5 to 14.",
    benefits: [
      "IELTS Coaching: Complete 4-module training with weekly authentic mock tests",
      "Spoken English: Daily conversation drills to eliminate hesitation and build confidence",
      "Kids English: Joyful phonetics, storytelling, and vocabulary building for young learners",
      "Experienced faculty providing individual diagnostic feedback",
    ],
    deliverables: [
      "Free diagnostic language level test",
      "Complete study materials and Cambridge audio resources",
      "One-on-one speaking interview evaluations",
      "Course Certificate of Completion",
    ],
  },
  {
    id: "free-profile-assessment",
    title: "100% Free Profile Assessment & Counseling",
    subtitle: "Zero Consultation Fee · Transparent University & Country Strategy",
    icon: "📝",
    badge: "100% Free Consultation",
    category: "free-file",
    overview:
      "Visit our Rajshahi campus at Kadirganj or connect online for a comprehensive, 100% free profile evaluation. Our counselors evaluate your academic transcripts, budget, and career goals to recommend the best Japan or global pathway.",
    benefits: [
      "Completely free consultation with zero upfront charges or hidden file fees",
      "Realistic assessment of Japan Student Visa, SSW, or global study abroad eligibility",
      "Transparent breakdown of language course durations, tuition fees, and living costs",
      "Step-by-step personalized roadmap to success",
    ],
    deliverables: [
      "Personalized Study & Visa Roadmap",
      "Estimated cost breakdown sheet (tuition, living, visa fees)",
      "Recommended course enrollment plan at AcademiaZ Rajshahi",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Profile Evaluation & Career Planning",
    bengaliTitle: "ফ্রি প্রোফাইল মূল্যায়ন ও সঠিক পরিকল্পনা",
    desc: "Visit our Kadirganj, Rajshahi office or consult online. We analyze your academic background, career goals, and budget to formulate a realistic study or work visa roadmap.",
  },
  {
    step: "02",
    title: "Language Mastery (Japanese N5-N4 / IELTS / Spoken)",
    bengaliTitle: "একাডেমিয়া জেড-এ ভাষা দক্ষতা অর্জন",
    desc: "Enroll in our Japanese Language (N5 & N4), IELTS, or Spoken English batches with authentic curriculum, audio-visual drills, and small-batch mentorship.",
  },
  {
    step: "03",
    title: "Institution Admission & COE Processing",
    bengaliTitle: "ল্যাঙ্গুয়েজ স্কুল/বিশ্ববিদ্যালয় ভর্তি ও COE প্রসেসিং",
    desc: "Our counselors submit official applications to accredited Japanese language academies and universities, securing your admission letter and Certificate of Eligibility (COE).",
  },
  {
    step: "04",
    title: "Visa File Compilation & Embassy Mock Interview",
    bengaliTitle: "ভিসা ফাইল প্রস্তুত ও ১-অন-১ মক ইন্টারভিউ",
    desc: "Complete documentation support, financial verification, SOP preparation, and intensive one-on-one embassy mock interview training.",
  },
  {
    step: "05",
    title: "Visa Approval, Pre-Departure & Japan Guidance",
    bengaliTitle: "ভিসা প্রাপ্তি ও জাপানে সফল আগমন",
    desc: "Celebrate your visa success! Receive comprehensive pre-departure briefing on flights, accommodation, ward office registration, and part-time job guidance in Japan.",
  },
];

export const testimonials = [
  {
    name: "Mohammad Arifur Rahman",
    destination: "Japan (Tokyo Language Academy)",
    quote:
      "AcademiaZ Rajshahi-তে জাপানিজ N5 কোর্সে ভর্তি হয়েছিলাম। স্যারদের আন্তরিক পাঠদান এবং সাপ্তাহিক মক টেস্টের কারণে প্রথমবারেই JLPT পাস করি। কাদিরগঞ্জ অফিস থেকে COE ও ভিসা প্রসেসিং পেয়েছি নির্ভুলভাবে। এখন আমি টোকিওতে পড়াশোনা করছি!",
    course: "Japanese Language N5 & Student Visa",
    batch: "Rajshahi Campus",
    badge: "Visa Received 🇯🇵",
  },
  {
    name: "Sharmin Sultana",
    destination: "Japan (Specified Skilled Worker - SSW)",
    quote:
      "জাপানে ক্যারিয়ার গড়ার জন্য AcademiaZ-এর চেয়ে বিশ্বস্ত প্রতিষ্ঠান রাজশাহীতে আর নেই। এদের পুরো সিস্টেম জাপান থেকে পরিচালিত হওয়ায় সঠিক তথ্য পেয়েছি। JFT-Basic পাস করে আমি এখন জাপানে কাজের ভিসায় যাচ্ছি।",
    course: "JFT-Basic & SSW Preparation",
    batch: "Rajshahi Campus",
    badge: "SSW Visa Approved",
  },
  {
    name: "Tanvir Hasan",
    destination: "United Kingdom (Master's Program)",
    quote:
      "AcademiaZ-এর IELTS কোর্সে প্রস্তুতি নিয়ে আমার ওভারঅল স্কোর এসেছে Band 7.5! স্পিকিং টেস্টের ১-অন-১ ফিডব্যাক আমার জড়তা পুরোপুরি দূর করেছিল। রাজশাহীতে বিশ্বমানের গাইডেন্স পেয়েছি।",
    course: "IELTS Academic Batch",
    batch: "Rajshahi Campus",
    badge: "Band 7.5 Scored",
  },
  {
    name: "Farhana Akter",
    destination: "Parent of Kids English Student",
    quote:
      "আমার মেয়ের বয়স ৮ বছর। AcademiaZ-এর কিডস ইংলিশ কোর্সে ভর্তি করানোর পর তার ইংরেজি বলার ভয় কেটে গেছে। শিক্ষকরা অত্যন্ত ধৈর্যশীল এবং গল্পের ছলে সঠিক উচ্চারণ শেখান।",
    course: "Kids English & Phonics",
    batch: "Junior Batch",
    badge: "Happy Guardian",
  },
];

export const faqs = [
  {
    q: "Where is AcademiaZ located in Rajshahi?",
    a: "AcademiaZ is located at Kadirganj, Greater Road (Lane beside Ma Photostat, east side of the mosque), Rajshahi - 6000, Bangladesh. You can easily reach us via Greater Road or Kadirganj.",
  },
  {
    q: "What makes AcademiaZ different from other consultancies?",
    a: "AcademiaZ is operated and managed directly from Japan (জাপান থেকে পরিচালিত), ensuring 100% Japan standard language training, direct connection with accredited Japanese institutions, and zero unverified promises. We offer authentic JLPT N5-N4, SSW, TITP, IELTS, and Spoken English all under one roof in Rajshahi.",
  },
  {
    q: "What is the duration and schedule of the Japanese Language Course?",
    a: "Our Japanese Language N5 package runs for 3 to 4 months with classes 5 to 6 days a week (2 hours daily). We offer morning, afternoon, and evening shifts to accommodate students and working professionals. All study materials, Kanji sheets, and audio files are provided.",
  },
  {
    q: "What are the intakes for studying in Japan?",
    a: "Japan has 4 major intakes every year: April (Spring - primary intake, up to 2-year course), July (Summer - 1 year 9 months), October (Autumn - 1 year 6 months), and January (Winter - 1 year 3 months). Applications must be started 5 to 6 months prior to the intake.",
  },
  {
    q: "Can I work in Japan while studying on a Student Visa?",
    a: "Yes! International students in Japan are legally permitted to work up to 28 hours per week during academic semesters and up to 40 hours per week during official vacation periods. Part-time wages in Japan are attractive and comfortably cover student living expenses.",
  },
  {
    q: "What are the TITP and SSW programs?",
    a: "SSW (Specified Skilled Worker - 特定技能) allows individuals with Japanese language skills (JFT-Basic A2 or JLPT N4) and relevant trade skills to work full-time in Japan with competitive salaries. TITP (Technical Intern Training Program) focuses on technical internships. AcademiaZ provides language and skill test coaching for both.",
  },
  {
    q: "Do you offer IELTS, Spoken English, and Kids English courses?",
    a: "Yes! We provide comprehensive IELTS preparation (Academic & General) targeting Band 7.5+, Spoken English fluency courses for university students and job seekers, and a specialized interactive Kids English program for children aged 5 to 14.",
  },
  {
    q: "Do you charge any fee for initial consultation and profile evaluation?",
    a: "No. Our profile evaluation and counseling sessions are 100% FREE with zero obligation and zero hidden charges. You can visit our Kadirganj office or contact us on WhatsApp (01518-951062).",
  },
  {
    q: "How can I contact AcademiaZ Rajshahi?",
    a: "You can call or WhatsApp our official numbers at 01518-951062 or 01632-372232, message us on Facebook at facebook.com/AcademiaZRajshahi, or visit our office at Kadirganj, Greater Road, Rajshahi.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "japanese-n5-batch",
    badge: "Most Popular · Japan Track",
    date: "New Batch Starts: 1st & 15th of Every Month",
    title: "Japanese Language Course (N5 & N4 Levels) — New Intake",
    description:
      "Intensive 3-month package covering Hiragana, Katakana, 100+ Kanji, grammar patterns, audio listening, and weekly mock exams for JLPT and JFT-Basic qualification.",
    benefits: [
      "Operated and managed directly from Japan with 100% Japan standard curriculum",
      "Morning, afternoon, and evening batch options (2 hours daily)",
      "Small batch sizes ensuring individual speaking and listening practice",
      "Direct guidance for Japan Student Visa and SSW/TITP work programs",
    ],
  },
  {
    id: "japan-student-visa-intake",
    badge: "April & October Intakes Open",
    date: "Admissions Ongoing",
    title: "Study in Japan — Language Schools & University Admissions",
    description:
      "Complete application and COE (Certificate of Eligibility) processing for top Japanese language academies and universities in Tokyo, Osaka, Nagoya, and Fukuoka.",
    benefits: [
      "Accredited institution shortlisting matching your academic background",
      "Immaculate COE documentation and certified translations",
      "One-on-one consular interview coaching for the Embassy of Japan",
      "Pre-departure guidance and post-arrival support in Japan",
    ],
  },
  {
    id: "titp-ssw-career-batch",
    badge: "Career in Japan",
    date: "Enrollment Open",
    title: "TITP & SSW Preparation (Specified Skilled Worker)",
    description:
      "JFT-Basic A2 and JLPT N4 language training combined with trade skill evaluation orientation for nursing care, hospitality, food service, and agriculture.",
    benefits: [
      "Structured syllabus designed specifically for JFT-Basic exam pass",
      "Japanese resume preparation and video interview coaching",
      "Direct coordination adhering to Japanese labor standards",
      "Transparent process with zero false promises",
    ],
  },
  {
    id: "ielts-score-booster",
    badge: "Target Band 7.5+",
    date: "Regular & Weekend Batches",
    title: "IELTS Academic & General Comprehensive Coaching",
    description:
      "Master Reading, Writing, Listening, and Speaking with certified instructors, weekly full-length Cambridge mock exams, and personalized 1-on-1 speaking interview sessions.",
    benefits: [
      "Authentic Cambridge IELTS practice libraries and audio resources",
      "Detailed Task 1 and Task 2 writing correction with band feedback",
      "One-on-one speaking interview simulations to eliminate anxiety",
      "Free profile assessment for higher education in the UK, Canada, USA & Australia",
    ],
  },
  {
    id: "spoken-english-fluency",
    badge: "Career & Confidence",
    date: "Evening & Weekend Shifts",
    title: "Spoken English & Communication Fluency Batch",
    description:
      "Break hesitation, master practical everyday dialogue, and speak English with confidence in presentations, job interviews, and corporate environments.",
    benefits: [
      "100% English speaking environment with real-world roleplays",
      "Pronunciation correction and British/American accent awareness",
      "Public speaking and group debate sessions",
      "Certificate of Course Completion",
    ],
  },
  {
    id: "kids-english-academy",
    badge: "Ages 5–14 · Junior Achievers",
    date: "Special Weekend & After-School Batches",
    title: "Kids English & Phonics Academy",
    description:
      "Fun, interactive English learning for children with phonics, cartoon storytelling, vocabulary games, rhymes, and foundational sentence building.",
    benefits: [
      "Child-friendly interactive classrooms with engaging audio-visuals",
      "Correct pronunciation and reading habits from early age",
      "Small groups with patient and caring instructors",
      "Regular progress updates for parents and guardians",
    ],
  },
];
