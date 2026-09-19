/**
 * EDU GLOBAL — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/edugbl/ (@edugbl)
 *  - Official Brand Assets (C:\Users\Majed\Downloads\New asset):
 *      * Logo: logo.jpg (Circular Royal Blue Badge with Cap & Pencil)
 *      * Banner: banner.png ('One stop Solution to Your Journey of Higher Education')
 *          Featuring 10 Destinations: Europe, New Zealand, Australia, UK, USA, Canada, South Korea, Japan, Finland, Ireland
 *          Call to Action: 'INBOX US TO KNOW MORE'
 *  - Headquarters: Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh.
 *  - Landmarks: Opposite Unimart, Near Old 15 Bus Stand, Satmasjid Road, Dhanmondi.
 *  - Hotlines: +880 1901-402990 · +880 1901-402992
 *  - Official Emails: info@eduglobal.support · eduglobalgogl@gmail.com
 *  - Official Website: http://eduglobal.support/ (www.eduglobal.support)
 *  - Instagram: @eduglobal1987 (https://www.instagram.com/eduglobal1987)
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
  name: "EDU Global",
  shortName: "EDU Global",
  altName: "EDU Global Bangladesh",
  acronym: "EDUGBL",
  legalName: "EDU Global — Overseas Higher Education Consultancy & Language Academy",
  nativeName: "ইডিইউ গ্লোবাল",
  slogan: "One stop Solution to Your Journey of Higher Education",
  tagline: "Your Gateway to the World",
  motto: "100% Admission Guidance · Visa & Scholarship Support · Free Bank Support Offer",
  secondaryMotto: "Study Gap Accepted · Low CGPA Welcomed · Without IELTS / MOI Options",
  bengaliHeadline: "ইউরোপ, ইউকে, আমেরিকা, কানাডা, অস্ট্রেলিয়া ও জাপানে উচ্চশিক্ষা ও ভাষা প্রশিক্ষণে আপনার বিশ্বস্ত প্রতিষ্ঠান !",
  bengaliSubheadline:
    "ইডিইউ গ্লোবাল (ধানমন্ডি, ঢাকা): ১০০% অ্যাডমিশন গাইডেন্স, ভিসা ও স্কলারশিপ সাপোর্ট, ফ্রি ব্যাংক সাপোর্ট সুবিধা, স্টাডি গ্যাপ গ্রহণযোগ্যতা এবং প্রফেশনাল IELTS, স্পোকেন ইংলিশ ও কিডস ইংলিশ প্রোগ্রাম।",
  philosophy: "STUDENT-FIRST ADVISORY · 100% ADMISSION GUIDANCE · VISA & SCHOLARSHIP SUPPORT · ZERO HIDDEN CHARGES",
  bio: "Helping Bangladeshi students achieve their dreams of studying in top universities across Europe, Italy, America, UK, Canada, Australia & Japan. 100% Admission Guidance | Visa & Scholarship Support | Dhanmondi, Dhaka 🎓✈️🌍",
  category: "Higher Education Consultancy · IELTS Academy · Student Visa Advisory",
  origin: "Dhanmondi, Dhaka, Bangladesh",
  presence: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh",
  email: "info@eduglobal.support",
  contactEmail: "eduglobalgogl@gmail.com",
  careerEmail: "info@eduglobal.support",
  altEmail: "eduglobalgogl@gmail.com",
  emails: ["info@eduglobal.support", "eduglobalgogl@gmail.com"],
  phones: ["01901-402990", "01901-402992", "+880 1901-402990", "+880 1901-402992"],
  whatsapp: "+8801901402990",
  whatsappFormatted: "+880 1901-402990",
  secondaryPhone: "01901-402992",
  landline: "+880 1901-402990",
  hours: "Saturday – Thursday: 10:00 AM – 7:00 PM (Friday Open for Scheduled Consultations & Seminars)",
  established: "Verified Education Consultancy",
  signOff: "EDU Global · Your Gateway to the World",
  specialOffer: "First 20 Students Free Bank Support Offer for Upcoming Intakes",

  offices: {
    headquarters: {
      name: "EDU Global (Dhanmondi HQ)",
      address: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh",
      full: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh (Opposite Unimart, Old 15 Bus Stand)",
      short: "Satmasjid Road, Dhanmondi, Dhaka",
      phone: "+880 1901-402990",
      phones: ["+880 1901-402990", "+880 1901-402992"],
      whatsapp: "+8801901402990",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka&z=16&hl=en&output=embed",
    },
    dhaka: {
      name: "Dhanmondi Main Office",
      address: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209",
      full: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209",
      short: "Road 8/A, Dhanmondi, Dhaka",
      phone: "+880 1901-402992",
      phones: ["+880 1901-402990", "+880 1901-402992"],
      whatsapp: "+8801901402990",
      hours: "Saturday – Thursday: 10:00 AM – 7:00 PM",
      mapsUrl: "https://maps.google.com/?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka&z=16&hl=en&output=embed",
    },
    international: {
      name: "EDU Global International Liaison",
      address: "Global Student Admissions & Institutional Network (UK, Japan, Europe & UAE)",
      full: "Global Institutional Partner Desks: UK, Europe, Japan, Canada, Australia & UAE",
      short: "Global Institutional Network",
      phone: "+880 1901-402990",
      phones: ["info@eduglobal.support"],
      whatsapp: "+8801901402990",
      hours: "Monday – Friday: 9:00 AM – 6:00 PM GMT",
      mapsUrl: "https://maps.google.com/?q=Dhanmondi+Dhaka+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Dhanmondi+Dhaka&z=15&hl=en&output=embed",
    },
  },

  campusOffice: {
    title: "EDU Global Head Office",
    building: "Keari Plaza",
    floor: "4th Floor (Lift-3)",
    area: "Plot No- 83, Road No- 8/A, Satmasjid Road",
    city: "Dhaka",
    postalCode: "1209",
    country: "Bangladesh",
    full: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh",
    hotlines: ["+880 1901-402990", "+880 1901-402992"],
    whatsapp: "+8801901402990",
    whatsappDisplay: "+880 1901-402990",
    email: "info@eduglobal.support",
    mapsUrl: "https://maps.google.com/?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka+Bangladesh",
    mapsEmbed: "https://maps.google.com/maps?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka&z=16&hl=en&output=embed",
  },

  address: {
    building: "Keari Plaza",
    street: "Plot No- 83, Road No- 8/A, Satmasjid Road",
    area: "Dhanmondi R/A (ধানমন্ডি ৮/এ)",
    city: "Dhaka",
    postalCode: "1209",
    country: "Bangladesh",
    full: "Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh",
    networkNote: "Opposite Unimart · Near Old 15 Bus Stand · Satmasjid Road, Dhanmondi, Dhaka",
  },

  geo: { lat: 23.7505, lng: 90.3735 },
  mapsUrl: "https://maps.google.com/?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka+Bangladesh",
  mapsEmbed: "https://maps.google.com/maps?q=Keari+Plaza+Satmasjid+Road+Dhanmondi+Dhaka&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/edugbl/",
    facebookPageName: "EDU Global",
    facebookVideos: "https://www.facebook.com/edugbl/videos/",
    facebookReels: "https://www.facebook.com/edugbl/reels/",
    instagram: "https://www.instagram.com/eduglobal1987",
    linkedin: "https://www.facebook.com/edugbl/",
    youtube: "https://www.facebook.com/edugbl/",
    messenger: "https://m.me/edugbl",
    whatsapp: "https://wa.me/8801901402990",
  },

  // 3 Verified Facebook Video Reels provided directly by user
  featuredReels: [
    {
      id: "reel-1659720015565435",
      badge: "🎉 Europe & UK Visa Success",
      tag: "Masterclass (16:9)",
      orientation: "landscape" as const,
      aspectRatio: "16/9",
      title: "Europe & UK Student Visa Success & Admission Masterclass",
      bengaliTitle: "ইউরোপ ও ইউকে স্টুডেন্ট ভিসা সাকসেস ও অ্যাডমিশন গাইডলাইন",
      desc: "Real student visa celebrations, university offer letters, and end-to-end documentation breakdown by EDU Global Dhanmondi counselors.",
      bengaliDesc: "ইডিইউ গ্লোবাল-এর মাধ্যমে শিক্ষার্থীদের সফল ভিসা প্রাপ্তি, স্কলারশিপ ও স্টাডি অ্যাব্রড প্রক্রিয়ার বাস্তব অভিজ্ঞতা ও ভিসা ডকুমেন্টেশন গাইড।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1659720015565435%2F&show_text=false&width=560&t=0",
      videoUrl: "https://www.facebook.com/reel/1659720015565435/",
      width: 560,
      height: 314,
    },
    {
      id: "reel-1597071948762077",
      badge: "✈️ Cyprus & Europe Bank Support",
      tag: "Featured Reel (9:16)",
      orientation: "portrait" as const,
      aspectRatio: "9/16",
      title: "Cyprus & Europe Visa Success with Free Bank Support Offer",
      bengaliTitle: "সাইপ্রাস ও ইউরোপে ভিসা সাকসেস এবং ফ্রি ব্যাংক সাপোর্ট অফার",
      desc: "Affordable European study pathways, low tuition starting from €2,500, MOI acceptance, and Free Bank Support for the first 20 applicants.",
      bengaliDesc: "সাইপ্রাস এবং ইউরোপিয়ান দেশগুলোতে স্বল্প টিউশন ফি, MOI দিয়ে অ্যাডমিশন ও প্রথম ২০ জন শিক্ষার্থীর জন্য ফ্রি ব্যাংক সাপোর্ট সুবিধা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1597071948762077%2F&show_text=false&width=267&t=0",
      videoUrl: "https://www.facebook.com/reel/1597071948762077/",
      width: 267,
      height: 476,
    },
    {
      id: "reel-916923537804834",
      badge: "🗣️ IELTS & Global Scholarships",
      tag: "IELTS Strategy (16:9)",
      orientation: "landscape" as const,
      aspectRatio: "16/9",
      title: "IELTS Band 7.5+ Strategy, Spoken Fluency & Global Scholarships",
      bengaliTitle: "IELTS প্রস্তুতি, স্পোকেন ইংলিশ ও উচ্চশিক্ষা স্কলারশিপ",
      desc: "Overcoming speaking barriers, mastering Cambridge authentic modules, and securing high-value scholarships across Europe & Asia.",
      bengaliDesc: "IELTS-এ কাঙ্ক্ষিত ব্যান্ড স্কোর অর্জন, স্পোকেন ইংলিশের জড়তা দূরীকরণ এবং বিদেশে স্কলারশিপ নিয়ে উচ্চশিক্ষার সঠিক দিকনির্দেশনা।",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F916923537804834%2F&show_text=false&width=560&t=0",
      videoUrl: "https://www.facebook.com/reel/916923537804834/",
      width: 560,
      height: 314,
    },
  ],

  bannerUSPs: [
    {
      title: "100% Admission Guidance",
      bengali: "১০০% অ্যাডমিশন গাইডেন্স",
      desc: "Direct official university representations and confirmed offer letter processing across UK, USA, Canada, Australia, Europe & Asia.",
      icon: "🎓",
    },
    {
      title: "Free Bank Support Offer",
      bengali: "ফ্রি ব্যাংক সাপোর্ট সুবিধা",
      desc: "Special promotional financial support for early applicants (first 20 students) targeting Cyprus, Europe & upcoming intakes.",
      icon: "🏛️",
    },
    {
      title: "Long Study Gap Accepted",
      bengali: "দীর্ঘ স্টাডি গ্যাপ গ্রহণযোগ্য",
      desc: "Study gap justification with credible job experience and professional documentation for higher study visas.",
      icon: "📊",
    },
    {
      title: "Low CGPA Solutions (Down to 2.5)",
      bengali: "কম সিজিপিএ (~২.৫) হলেও সুযোগ",
      desc: "Specialized admissions for students with GPA down to 2.5 in recognized European & Asian institutions.",
      icon: "🎯",
    },
    {
      title: "Without IELTS & MOI Options",
      bengali: "IELTS ছাড়া বা MOI দিয়ে আবেদন",
      desc: "Medium of Instruction (MOI) acceptance in Cyprus, Greece, Malta, Malaysia, and select UK/Europe universities.",
      icon: "🌐",
    },
    {
      title: "Visa Assistance & Mock Interviews",
      bengali: "নিখুঁত ভিসা প্রসেসিং ও মক ইন্টারভিউ",
      desc: "Rigorous visa file auditing, embassy interview coaching, and zero hidden file assessment charges.",
      icon: "🛡️",
    },
  ],

  stats: [
    { value: "100%", label: "Admission Guidance", badge: "Direct University Ties" },
    { value: "10+", label: "Banner Destinations", badge: "UK, USA, Aus, Europe, Asia" },
    { value: "2.5+", label: "CGPA Accepted", badge: "Inclusive Admissions" },
    { value: "1st 20", label: "Free Bank Support", badge: "Special Promo" },
    { value: "Dhanmondi", label: "Dhaka HQ", badge: "Keari Plaza, Road 8/A" },
    { value: "0 BDT", label: "Initial Assessment", badge: "Completely Free" },
  ],

  accreditations: [
    {
      name: "Global University Partnerships",
      title: "Official Representative & Direct Ties",
      desc: "Direct admission representation including Canterbury Christ Church University (UK), top institutions across USA, Canada, Australia, Cyprus, Greece, Italy, Finland, Ireland, Japan, South Korea & Malaysia.",
    },
    {
      name: "British Council & IDP Aligned IELTS",
      title: "Certified Language Instructors",
      desc: "Comprehensive IELTS preparation covering Listening, Reading, Writing, and Speaking with authentic Cambridge materials and band boosting mock tests.",
    },
    {
      name: "Dedicated Spouse & Family Relocation Desk",
      title: "Dependent Visa Advisory",
      desc: "Expert guidance for students desiring to relocate with family under legal post-study and dependent visa frameworks.",
    },
    {
      name: "Transparent Financial & Visa Guidance",
      title: "Zero Hidden Costs",
      desc: "Complete financial statement guidance, genuine sponsor document vetting, and Embassy mock interview preparation.",
    },
  ],

  verifiedKeyPartners: [
    {
      name: "Canterbury Christ Church University (UK)",
      country: "United Kingdom",
      note: "Official partner university: 1-Year Masters, Graduate Route PSW, scholarship bursaries & high visa success",
    },
    {
      name: "European Partner Universities (Cyprus, Greece, Italy)",
      country: "Europe (Schengen & EU)",
      note: "Low tuition fees, Medium of Instruction (MOI) accepted, free bank support offer, and up to 100% regional scholarships in Italy",
    },
    {
      name: "Leading Universities in the United States & Canada",
      country: "USA & Canada",
      note: "STEM programs with 3-Year OPT in USA, Post-Graduation Work Permit (PGWP) up to 3 years in Canada & admission support",
    },
    {
      name: "Top Institutions in Australia & New Zealand",
      country: "Australia & New Zealand",
      note: "Post-study work visas up to 4-5 years, spouse full-time work rights, and high minimum wage earnings",
    },
    {
      name: "Nordic Universities in Finland",
      country: "Finland",
      note: "World-class education, 30 hrs/week student work rights, 2-year post-study job seeker visa & PR pathways",
    },
    {
      name: "Tech & Business Universities in Ireland",
      country: "Ireland",
      note: "Silicon Valley of Europe, 2-Year Third Level Graduate Scheme (stay-back option) & tech career prospects",
    },
    {
      name: "Premier Institutions in Japan & South Korea",
      country: "Japan & South Korea",
      note: "Japanese language pathway to university degree, high-tech research, scholarships & generous student work rights",
    },
    {
      name: "Top Universities in Malaysia",
      country: "Malaysia",
      note: "HELP University, MMU, MSU: Budget-friendly tuition, UK/Australian twinning degrees & fast visa processing",
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
        label: "Study in United Kingdom 🇬🇧",
        to: "/study-in-{$country}",
        params: { country: "uk" },
        badge: "Canterbury Christ Church Partner",
      },
      {
        label: "Study in USA 🇺🇸",
        to: "/study-in-{$country}",
        params: { country: "usa" },
        badge: "STEM OPT 3 Yrs",
      },
      {
        label: "Study in Canada 🇨🇦",
        to: "/study-in-{$country}",
        params: { country: "canada" },
        badge: "PGWP & PR Pathways",
      },
      {
        label: "Study in Australia 🇦🇺",
        to: "/study-in-{$country}",
        params: { country: "australia" },
        badge: "Spouse Work Rights",
      },
      {
        label: "Study in New Zealand 🇳🇿",
        to: "/study-in-{$country}",
        params: { country: "new-zealand" },
        badge: "PSW & High Visa Rate",
      },
      {
        label: "Study in Cyprus 🇨🇾",
        to: "/study-in-{$country}",
        params: { country: "cyprus" },
        badge: "Free Bank Support / Low Fees",
      },
      {
        label: "Study in Italy 🇮🇹",
        to: "/study-in-{$country}",
        params: { country: "italy" },
        badge: "100% Scholarships Available",
      },
      {
        label: "Study in Finland 🇫🇮",
        to: "/study-in-{$country}",
        params: { country: "finland" },
        badge: "Happiest Country / 30h Work",
      },
      {
        label: "Study in Ireland 🇮🇪",
        to: "/study-in-{$country}",
        params: { country: "ireland" },
        badge: "Tech Capital / 2-Yr Stayback",
      },
      {
        label: "Study in Japan 🇯🇵",
        to: "/study-in-{$country}",
        params: { country: "japan" },
        badge: "Language to Degree / Jobs",
      },
      {
        label: "Study in South Korea 🇰🇷",
        to: "/study-in-{$country}",
        params: { country: "south-korea" },
        badge: "Tech & Scholarships",
      },
      {
        label: "Study in Malaysia 🇲🇾",
        to: "/study-in-{$country}",
        params: { country: "malaysia" },
        badge: "Twin Degrees / Affordable",
      },
      { label: "View All 10+ Destinations", to: "/destinations", badge: "Global" },
    ],
  },
  {
    label: "Language Courses",
    to: "/services",
    children: [
      {
        label: "IELTS Preparation (Academic & General) 🇬🇧",
        to: "/services",
        badge: "Target Band 7.5+",
      },
      {
        label: "Spoken English & Fluency Program 🗣️",
        to: "/services",
        badge: "Basic to Advance",
      },
      {
        label: "Kids' English & Phonics (Ages 5–14) 🧒",
        to: "/services",
        badge: "Young Learners",
      },
      {
        label: "Japanese Language Course (JLPT N5/N4) 🇯🇵",
        to: "/services",
        badge: "Japan Pathway",
      },
      {
        label: "English Grammar & Writing Foundation 📝",
        to: "/services",
        badge: "Accuracy Drills",
      },
      {
        label: "100% Free Profile Assessment 📋",
        to: "/services",
        badge: "Zero Cost",
      },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "100% University Admission Guidance", to: "/services", badge: "Official Tie-ups" },
      { label: "Student Visa Processing & Guidance", to: "/services", badge: "High Success" },
      { label: "Free Bank Support Consultation", to: "/services", badge: "Special Promo" },
      { label: "Long Study Gap & Low CGPA Solutions", to: "/services", badge: "Gap Analysis" },
      { label: "Without IELTS / MOI Pathway", to: "/services", badge: "Flexible" },
      { label: "Pre-Departure & Accommodation Support", to: "/services", badge: "Full Care" },
    ],
  },
  { label: "Special Offers", to: "/offers" },
  { label: "About Us", to: "/about" },
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
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Fast 1-year Masters, Canterbury Christ Church University partner, 2-year PSW & Part-Time Jobs",
    intro:
      "The UK is one of the premier study destinations represented by EDU Global. As an official partner of Canterbury Christ Church University and numerous top UK institutions, we secure fast-track 1-year Master admissions, 2-year Post-Study Work Visas (PSW), legal 20 hours/week work rights, and options with or without IELTS (MOI accepted in select universities).",
    why: [
      "Official partner with Canterbury Christ Church University and leading UK institutions",
      "1-Year fast-track Master degrees saving significant tuition and living costs",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon graduation",
      "Opportunity to move with spouse/family for eligible research and postgraduate programs",
      "Legal 20 hours per week part-time work rights during study semesters",
      "Long study gap accepted with valid professional experience documentation",
      "University merit scholarships ranging from £1,500 to £5,000",
    ],
    popularFields: [
      "Computer Science, Cyber Security & AI",
      "Business Administration, Management & Global MBA",
      "Public Health & Healthcare Administration",
      "Data Science & Financial Analytics",
      "Civil & Structural Engineering",
    ],
    avgTuition: "£11,000 – £16,500 / year (after partner scholarships)",
    avgLiving: "£9,207 – £12,000 / year (outside London / regional savings)",
    pswv: "2 Years (Graduate Route Visa) / 3 Years for PhD",
    intakes: "January/February, May/June & September/October (Major Intakes)",
    scholarships: "£1,500 – £5,000 University Merit Bursaries & Early Bird Discounts",
    topUnis: [
      "Canterbury Christ Church University (Official Partner)",
      "University of Hertfordshire",
      "Coventry University",
      "University of Greenwich",
      "University of East London",
      "Birmingham City University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Banner Destination · Official University Partner",
  },
  {
    slug: "usa",
    name: "United States of America",
    flag: "🇺🇸",
    region: "North America",
    tagline: "World's top ranked universities, 3-Year STEM OPT work authorization & generous scholarships",
    intro:
      "EDU Global assists ambitious students in securing admissions and F-1 student visas for prestigious universities across the USA. Benefit from generous institutional scholarships, on-campus assistantships, and 36-month STEM OPT work extensions with personalized visa interview preparation at our Dhanmondi office.",
    why: [
      "World leader in academic prestige, cutting-edge research, and industry connections",
      "3-Year STEM OPT (Optional Practical Training) allowing students to work legally in the US",
      "Substantial merit-based tuition waivers and graduate research assistantships (RA/TA)",
      "Dedicated F-1 visa interview preparation and mock consular interviews at EDU Global",
      "Credit transfer and pathway options available for diverse student profiles",
    ],
    popularFields: [
      "Software Engineering & Artificial Intelligence",
      "Data Analytics & Business Intelligence",
      "Biotechnology & Health Sciences",
      "Mechanical & Electrical Engineering",
      "Finance, Fintech & International Business",
    ],
    avgTuition: "$14,000 – $28,000 / year (after scholarship reductions)",
    avgLiving: "$10,000 – $14,000 / year",
    pswv: "Up to 3 Years (12 months standard OPT + 24 months STEM extension)",
    intakes: "Fall (August/September - Main) & Spring (January/February)",
    scholarships: "$3,000 – $15,000 / year Institutional Merit Awards",
    topUnis: [
      "University of South Florida",
      "Arizona State University",
      "University of Texas at Arlington",
      "George Mason University",
      "Illinois State University",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · STEM OPT 3 Years",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Designated Learning Institutions (DLI), paid Co-op terms, PGWP work permits & PR pathways",
    intro:
      "Canada remains a prime target for students seeking permanent settlement and globally recognized credentials. EDU Global manages DLI admissions, Provincial Attestation Letter (PAL) guidance, and study permit filings with high approval rates.",
    why: [
      "Post-Graduation Work Permit (PGWP) up to 3 years post-completion",
      "Hands-on paid Co-op work terms allowing students to gain valuable Canadian industry experience",
      "Straightforward permanent residency (PR) pathways via Express Entry and Provincial Nominee Programs (PNP)",
      "High standard of living, safety, and inclusive multicultural society",
    ],
    popularFields: [
      "Computer Programming & Wireless Networking",
      "Supply Chain & International Logistics",
      "Healthcare Administration & Early Childhood Education",
      "Business & Financial Management",
    ],
    avgTuition: "CAD $15,000 – $24,000 / year",
    avgLiving: "CAD $12,000 – $15,000 / year",
    pswv: "Up to 3 Years Post-Graduation Work Permit (PGWP)",
    intakes: "January (Winter), May (Spring/Summer) & September (Fall - Main)",
    scholarships: "CAD $1,000 – $5,000 Entrance Scholarships",
    topUnis: [
      "Fanshawe College",
      "Seneca Polytechnic",
      "Conestoga College",
      "University of Windsor",
      "Cape Breton University",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · PGWP & PR Pathways",
  },
  {
    slug: "australia",
    name: "Australia",
    flag: "🇦🇺",
    region: "Oceania",
    tagline: "High minimum wage, post-study work visas up to 4-5 years & full spouse work rights",
    intro:
      "Australia offers world-class education, unmatched living standards, and clear post-study employment prospects. EDU Global provides complete Subclass 500 visa filing, Genuine Student (GS) statement preparation, and family visa support.",
    why: [
      "World-class Group of Eight (Go8) and innovative technology universities",
      "Post-Study Work Visa (Subclass 485) ranging from 2 to 4+ years depending on qualification",
      "Opportunity for spouse to accompany student with unrestricted full-time work rights for Masters",
      "High minimum wage globally with legal part-time work privileges",
      "Long study gap accepted with valid employment certificates and taxation proofs",
    ],
    popularFields: [
      "Information & Communication Technology (ICT)",
      "Nursing, Aged Care & Public Health",
      "Accounting & Professional Finance",
      "Civil, Mining & Renewable Energy Engineering",
      "Hospitality & Commercial Cookery",
    ],
    avgTuition: "AUD $22,000 – $36,000 / year",
    avgLiving: "AUD $20,000 – $24,500 / year",
    pswv: "2 to 4+ Years Post-Study Work Stream (Subclass 485)",
    intakes: "February (Semester 1 - Main) & July (Semester 2)",
    scholarships: "20% – 30% International Student Merit Grants",
    topUnis: [
      "Deakin University",
      "RMIT University",
      "Swinburne University of Technology",
      "University of Wollongong",
      "La Trobe University",
      "Western Sydney University",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · Spouse Full Work Rights",
  },
  {
    slug: "new-zealand",
    name: "New Zealand",
    flag: "🇳🇿",
    region: "Oceania",
    tagline: "Top ranked universities, clean green lifestyle, 3-year post-study work visa & high visa success",
    intro:
      "Featured on our official brand banner, New Zealand provides an exceptional standard of living and globally ranked universities. With post-study work visas up to 3 years and legal student work rights, EDU Global makes studying in New Zealand simple and rewarding.",
    why: [
      "All 8 universities ranked in the top 3% globally (QS World Rankings)",
      "Up to 3-Year Post-Study Work Visa (open work rights)",
      "Legal 20 hours per week part-time work during semesters and 40 hours during holidays",
      "Safe, welcoming, and peaceful environment with outstanding quality of life",
      "High visa approval rates with streamlined document verification",
    ],
    popularFields: [
      "Information Technology & Software Development",
      "Agricultural Science & Food Technology",
      "Civil & Construction Engineering",
      "Hospitality & Tourism Management",
      "Business & Project Management",
    ],
    avgTuition: "NZD $24,000 – $35,000 / year",
    avgLiving: "NZD $18,000 – $22,000 / year",
    pswv: "Up to 3 Years Post-Study Work Visa",
    intakes: "February (Semester 1) & July (Semester 2)",
    scholarships: "NZD $2,000 – $10,000 International Student Grants",
    topUnis: [
      "University of Auckland",
      "University of Otago",
      "Victoria University of Wellington",
      "University of Canterbury",
      "Massey University",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · 3-Year PSW Visa",
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe",
    tagline: "Free Bank Support offer, low tuition fees, Medium of Instruction (MOI) accepted & fast visa",
    intro:
      "Cyprus is one of EDU Global's signature European destinations. Benefit from our exclusive promotional offer: 'First 20 Students Free Bank Support', highly affordable tuition fees, fast visa processing, options with or without IELTS (MOI accepted), and simple admission for students with study gaps and GPA down to 2.5.",
    why: [
      "Exclusive Free Bank Support promotional offer for early applicants",
      "Highly affordable tuition fees starting from €2,500 – €3,500 per year",
      "Admission possible without IELTS using Medium of Instruction (MOI) certificate",
      "Study gaps and lower GPA (down to 2.5) accepted with proper documentation",
      "European standard education with credit transfer opportunities across Europe",
      "Fast visa issuance and near 100% approval rate with EDU Global's support",
    ],
    popularFields: [
      "Computer Science & Information Technology",
      "Business Administration & International Management",
      "Hospitality, Tourism & Culinary Arts",
      "Civil & Electrical Engineering",
      "Nursing & Healthcare Studies",
    ],
    avgTuition: "€2,500 – €3,800 / year (Very Affordable)",
    avgLiving: "€350 – €550 / month",
    pswv: "Post-Study Employment & European Transfer Options",
    intakes: "February (Spring) & September/October (Fall - Main)",
    scholarships: "Up to 50% Tuition Fee Scholarships based on academic profile",
    topUnis: [
      "University of Nicosia",
      "European University Cyprus",
      "Cyprus International University",
      "Near East University",
      "Eastern Mediterranean University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official FB Verified · Free Bank Support Offer",
  },
  {
    slug: "finland",
    name: "Finland",
    flag: "🇫🇮",
    region: "Europe (Nordic / Schengen)",
    tagline: "World's happiest country, exceptional innovation, 30 hrs/week student work rights & residence pathways",
    intro:
      "Highlighted on our official banner, Finland offers arguably the finest education system in the world. Finnish universities of applied sciences provide practical, project-based learning with student work permits up to 30 hours per week and a 2-year post-study job seeker visa.",
    why: [
      "Ranked #1 Happiest Country in the world for 7 consecutive years",
      "Legal student work rights up to 30 hours per week during academic terms",
      "Generous 2-Year Post-Study Job Seeker Residence Permit upon graduation",
      "Direct pathway to Permanent Residence (PR) after continuous living and working in Finland",
      "Spouse and children can relocate together with full work and school rights",
    ],
    popularFields: [
      "Information & Communication Technology",
      "International Business & Sustainable Entrepreneurship",
      "Nursing & Social Services",
      "Environmental Engineering & Clean Energy",
    ],
    avgTuition: "€8,000 – €12,000 / year (with 20%-50% merit scholarships)",
    avgLiving: "€700 – €900 / month",
    pswv: "2-Year Post-Study Job Search Residence Permit",
    intakes: "January (Spring) & August/September (Autumn - Main)",
    scholarships: "20% – 50% Early Bird & Academic Merit Reductions",
    topUnis: [
      "Metropolia University of Applied Sciences",
      "Haaga-Helia University of Applied Sciences",
      "LAB University of Applied Sciences",
      "Centria University of Applied Sciences",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · 30 Hrs/Week Work",
  },
  {
    slug: "ireland",
    name: "Ireland",
    flag: "🇮🇪",
    region: "Europe (EU)",
    tagline: "Silicon Valley of Europe, 2-year stay back option, English speaking EU nation & top tech jobs",
    intro:
      "Featured on the official EDU Global banner, Ireland is Europe's premier technology and finance hub. As the only English-speaking country in the Eurozone, Ireland hosts European headquarters for Google, Apple, Meta, and Pfizer, offering graduates a 2-year Third Level Graduate Scheme (PSW).",
    why: [
      "European headquarters for top tech giants: Google, Meta, Apple, Microsoft, LinkedIn",
      "2-Year Third Level Graduate Scheme (Post-Study Stay-Back) for Master's graduates",
      "Only native English-speaking nation in the European Union",
      "Legal 20 hours/week part-time work during terms and 40 hours during vacations",
      "High post-study employment rate and Critical Skills Employment Permit pathways",
    ],
    popularFields: [
      "Data Analytics, AI & Software Development",
      "Fintech, Accounting & Financial Services",
      "Biotechnology, Pharmaceuticals & Biomedical Engineering",
      "Digital Marketing & International Business",
    ],
    avgTuition: "€10,000 – €16,000 / year (after scholarships)",
    avgLiving: "€800 – €1,200 / month",
    pswv: "2 Years (Third Level Graduate Scheme) for Master's",
    intakes: "September (Autumn - Main) & January (Spring)",
    scholarships: "€1,500 – €4,000 Merit Scholarships & Government of Ireland Awards",
    topUnis: [
      "National College of Ireland (NCI)",
      "Dublin City University (DCU)",
      "Technological University Dublin (TU Dublin)",
      "Griffith College Dublin",
      "University of Galway",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · 2-Year Stay Back",
  },
  {
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia",
    tagline: "Language school to university degree, 28 hrs/week work rights, high technology & career settlement",
    intro:
      "Prominently featured on the EDU Global banner and official Facebook page, Japan is an exceptional study and career destination for Bangladeshi students. Start with intensive Japanese language school programs, progress to Bachelor's or Master's degrees, work 28 hours per week legally, and transition smoothly into Japan's high-demand job market.",
    why: [
      "Clear pathway from Japanese Language School to Degree or Full-time Employment",
      "Legal student work permit of 28 hours per week during school and 40 hours during holidays",
      "High part-time wages (¥1,100 – ¥1,500/hr) easily covering living expenses",
      "High visa approval rates with Certificate of Eligibility (COE) support from EDU Global",
      "Massive demand for bilingual international graduates in IT, engineering, and business in Japan",
    ],
    popularFields: [
      "Japanese Language & Cultural Studies",
      "Information Technology, Robotics & AI",
      "Automotive, Mechanical & Electrical Engineering",
      "International Business & Hospitality",
    ],
    avgTuition: "¥700,000 – ¥1,100,000 / year (Very Affordable)",
    avgLiving: "¥70,000 – ¥100,000 / month",
    pswv: "Direct transition to Engineering/Humanities/International Services Work Visa",
    intakes: "April (Main), July, October & January",
    scholarships: "MEXT Scholarships, JASSO Honors Grants & School Tuition Reductions",
    topUnis: [
      "Tokyo International University",
      "Ritsumeikan Asia Pacific University (APU)",
      "Kyoto University of Advanced Science",
      "Top Japanese Language Academies in Tokyo, Osaka & Nagoya",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Banner Destination · Language to Degree Pathway",
  },
  {
    slug: "south-korea",
    name: "South Korea",
    flag: "🇰🇷",
    region: "Asia",
    tagline: "Global tech superpower, GKS government scholarships, high-tech labs & career opportunities",
    intro:
      "Featured on the EDU Global banner, South Korea is a global hub for technological innovation and academic excellence. With government scholarships (Global Korea Scholarship - GKS), university merit waivers up to 100%, and thriving tech industries like Samsung, Hyundai, and LG, South Korea is a premier choice for ambitious students.",
    why: [
      "Global leader in electronics, artificial intelligence, robotics, and creative media",
      "Global Korea Scholarship (GKS) covering 100% tuition, airfare, and monthly stipend",
      "English-taught Bachelor's and Master's programs available across top universities",
      "Part-time work permissions during studies with high earning potential",
      "Fast-growing demand for international software and engineering talent",
    ],
    popularFields: [
      "Computer Science, AI & Semiconductor Engineering",
      "Business Administration & International Relations",
      "Biotechnology & Chemical Engineering",
      "Media, Design & K-Culture Studies",
    ],
    avgTuition: "$3,500 – $7,000 / semester (substantial scholarship discounts)",
    avgLiving: "$500 – $800 / month",
    pswv: "D-10 Job Search Visa up to 2 Years / E-7 Professional Employment Visa",
    intakes: "March (Spring) & September (Fall - Main)",
    scholarships: "GKS Government Scholarship & 30%–100% University Merit Waivers",
    topUnis: [
      "KAIST (Korea Advanced Institute of Science & Technology)",
      "Yonsei University",
      "Korea University",
      "Hanyang University",
      "Sungkyunkwan University (SKKU)",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Official Banner Destination · High-Tech & Scholarships",
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "Europe (Schengen)",
    tagline: "100% regional DSU scholarships, world's oldest universities, Schengen travel & English programs",
    intro:
      "Verified from EDU Global's Facebook announcements, Italy offers world-renowned public universities, English-taught degrees, and regional DSU government scholarships providing 100% free tuition plus annual stipends up to €7,000. Benefit from Schengen visa mobility and high cultural heritage.",
    why: [
      "Regional DSU / EDISU Government Scholarships offering 100% tuition fee waiver plus cash stipend",
      "Wide range of Bachelor's and Master's degrees taught entirely in English",
      "Freedom of movement across all 29 European Schengen member states",
      "Low living costs in student-friendly cities like Bologna, Milan, Turin, and Rome",
      "1-Year Post-Study Permesso di Soggiorno for job searching across Italy",
    ],
    popularFields: [
      "Architecture, Fashion & Industrial Design",
      "Computer Science & Automation Engineering",
      "Economics, Finance & International Business",
      "Medicine & Surgery (IMAT)",
    ],
    avgTuition: "€1,000 – €3,000 / year (Often 100% Waived with DSU)",
    avgLiving: "€500 – €800 / month",
    pswv: "1-Year Job Search Residence Permit",
    intakes: "September/October (Main Annual Intake)",
    scholarships: "100% DSU Regional Government Scholarships + Annual Stipend",
    topUnis: [
      "Politecnico di Milano",
      "University of Bologna",
      "Sapienza University of Rome",
      "University of Padua",
      "Politecnico di Torino",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official FB Verified · 100% DSU Scholarships",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Asia",
    tagline: "HELP University & MMU ties, UK/Australian twinning degrees, low tuition & fast visa",
    intro:
      "Promoted actively on EDU Global's Facebook page, Malaysia is an exceptionally budget-friendly education hub. Study in partner universities such as HELP University, Multimedia University (MMU), and Management & Science University (MSU) for UK or Australian dual degrees at a fraction of the cost, with no IELTS required options.",
    why: [
      "Direct representations with HELP University, MMU, and premier Malaysian institutions",
      "UK & Australian twinning degree programs: graduate with a foreign degree at 60% lower cost",
      "Affordable tuition fees and low cost of living ($300 – $450/month)",
      "Fast Student Pass (visa) processing with near 100% approval rate",
      "Medium of Instruction (MOI) accepted; no IELTS mandatory in many programs",
    ],
    popularFields: [
      "Information Technology & Cyber Security",
      "Business Administration, Marketing & Finance",
      "Hospitality & Tourism Management",
      "Biomedical Sciences & Psychology",
    ],
    avgTuition: "$3,500 – $6,500 / year",
    avgLiving: "$350 – $500 / month",
    pswv: "Regional Employment & Twinning Transfer Pathways",
    intakes: "January, May, August & October",
    scholarships: "20% – 50% High Achiever & Early Bird Tuition Waivers",
    topUnis: [
      "HELP University (Official Partner)",
      "Multimedia University (MMU)",
      "Management & Science University (MSU)",
      "UCSI University",
      "Taylor's University",
    ],
    withoutIelts: true,
    featured: false,
    specialHighlight: "Official FB Verified · HELP & MMU Partner",
  },
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "ielts" | "spoken" | "kids" | "japanese" | "grammar" | "study-abroad";
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
    title: "IELTS Preparation (Academic & General Training)",
    subtitle: "Master All 4 Modules — Target Band 7.5+ with Cambridge Authentic Materials & Mock Tests",
    category: "ielts",
    icon: "🇬🇧",
    badge: "Target Band 7.5+",
    duration: "2.5 to 3 Months Comprehensive Coaching",
    classSchedule: "Morning, Afternoon, Evening & Weekend Batches (3 Days a Week / 2 Hours Daily)",
    batchType: "Interactive Small Batches at Dhanmondi HQ",
    targetOutcome: "Target Band 7.0 – 8.5+ & Full Admission Readiness",
    description:
      "EDU Global provides premier IELTS preparation for students and professionals in Dhanmondi, Dhaka. Covering Listening, Reading, Writing, and Speaking with authentic Cambridge test materials, individual 1-on-1 speaking evaluations, writing band descriptor analysis, full-length timed mock exams, and customized guidance for students with previous lower scores or visa refusals.",
    highlights: [
      "Small batch size guaranteeing personalized attention and daily individual speaking practice",
      "Comprehensive Cambridge curriculum for both Academic and General Training",
      "Task 1 & Task 2 in-depth writing corrections with Cambridge band descriptor breakdown",
      "One-on-one speaking interview simulations with pronunciation and fluency feedback",
      "Audio lab headphones practice and weekly full-length timed mock examinations",
      "Alternative test guidance (PTE, Duolingo, Oxford ELLT, and MOI waivers) when applicable",
    ],
    modules: [
      {
        title: "Listening Module Excellence",
        desc: "Predictive listening skills, keyword matching, handling fast native accents (British, Australian, North American), and audio lab headphone drills.",
      },
      {
        title: "Reading Speed & Accuracy",
        desc: "Skimming, scanning, True/False/Not Given, Heading Matching, and 60-minute strict time management drills.",
      },
      {
        title: "Writing Task 1 & Task 2",
        desc: "Data interpretation, graph/chart description, formal/semi-formal letters, structured academic essays with advanced cohesive devices.",
      },
      {
        title: "Speaking Fluency & Confidence",
        desc: "Part 1 introductory flow, Part 2 cue card idea generation, Part 3 analytical discussions, and natural intonation improvement.",
      },
      {
        title: "Full-Length Timed Mock Tests",
        desc: "Strict exam simulations under real British Council & IDP conditions followed by diagnostic score reports.",
      },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Communication Fluency",
    subtitle: "Break Speaking Hesitation, Build Natural Fluency & Master Embassy & Job Interviews",
    category: "spoken",
    icon: "🗣️",
    badge: "Basic to Advance",
    duration: "2 Months Practical Interactive Training",
    classSchedule: "Morning, Evening & Weekend Slots (3 Days a Week)",
    batchType: "Activity-Based Speaking Classroom",
    targetOutcome: "Confident, Fluent & Spontaneous English Communication",
    description:
      "Tailored for college students, job seekers, corporate executives, and study abroad applicants who understand grammar but freeze while speaking. Practice real-life conversations, eliminate fear of mistakes, build vocabulary, and excel in embassy visa interviews.",
    highlights: [
      "100% immersive English classroom environment encouraging continuous speech",
      "Pronunciation correction, phonetics drills, and syllable stress awareness",
      "Practical situational roleplays: embassy visa interviews, corporate meetings, airport travel",
      "Rich vocabulary building with modern idioms, phrasal verbs, and conversational connectors",
      "Overcoming stage fright through guided impromptu presentations and debates",
    ],
    modules: [
      {
        title: "Eliminating Hesitation & Fear",
        desc: "Mindset transformation, positive body language, and spontaneous conversation icebreakers.",
      },
      {
        title: "Pronunciation & Phonetics Drills",
        desc: "Correct vowel/consonant articulation, rhythm, syllable stress, and eliminating regional mother tongue influence.",
      },
      {
        title: "Situational Roleplays & Real Dialogues",
        desc: "Simulations of embassy visa interviews, university admission interviews, client meetings, and social networking.",
      },
      {
        title: "Public Speaking & Presentation Courage",
        desc: "Structuring short speeches, presenting viewpoints clearly, debating constructively, and voice modulation.",
      },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids' English & Phonics Academy (Ages 5–14)",
    subtitle: "Fun, Interactive & Phonics-Based English Academy for Young Achievers",
    category: "kids",
    icon: "🧒",
    badge: "Ages 5–14",
    duration: "3 Months Interactive Program",
    classSchedule: "After-School & Weekend Morning / Afternoon Shifts",
    batchType: "Child-Friendly Multimedia Classroom",
    targetOutcome: "Flawless Pronunciation, Strong Reading & Joyful Speaking Confidence",
    description:
      "A joyful, stimulating learning environment in Dhanmondi, Dhaka for children aged 5 to 14. Children absorb English naturally through phonics drills, cartoon storytelling, rhymes, picture vocabulary games, and show-and-tell activities under caring, gentle instructors.",
    highlights: [
      "Age-stratified batches (Junior Group: 5–8 years; Senior Group: 9–14 years)",
      "Phonics-based reading ensuring correct pronunciation habits from childhood",
      "Multimedia audio-visual storytelling, illustrated reading books, and language games",
      "Building stage courage for school recitations, speeches, and daily social interaction",
      "Gentle, patient, and highly trained teachers with regular parent progress updates",
    ],
    modules: [
      {
        title: "Phonics & Sound Blending",
        desc: "Letter sounds, phonemic awareness, sight words, and reading illustrated storybooks with accurate pronunciation.",
      },
      {
        title: "Visual Vocabulary & Action Words",
        desc: "Everyday objects, animals, nature, polite expressions, sentence starters, and descriptive vocabulary.",
      },
      {
        title: "Sentence Formation & Storytelling",
        desc: "Making simple correct sentences, picture narration, cartoon story recaps, and joyful grammar through games.",
      },
      {
        title: "Recitation & Public Speaking Courage",
        desc: "Show-and-tell presentations, poem recitations, roleplays, and building confident stage presence.",
      },
    ],
  },
  {
    slug: "japanese-language-course",
    title: "Japanese Language Course (JLPT N5 & N4)",
    subtitle: "Official Japanese Language Pathway for Studies & Careers in Japan",
    category: "japanese",
    icon: "🇯🇵",
    badge: "Japan Pathway",
    duration: "4 to 6 Months Intensive Training",
    classSchedule: "Morning & Evening Intensive Batches (4 Days a Week)",
    batchType: "Immersive Japanese Cultural & Language Lab",
    targetOutcome: "JLPT N5/N4 Certification & COE Visa Processing Readiness",
    description:
      "Specifically aligned with EDU Global's Japan study program. Master Hiragana, Katakana, essential Kanji, everyday conversational Japanese, and cultural etiquette required for Japanese Language School admissions and student visa COE (Certificate of Eligibility) processing.",
    highlights: [
      "Mastery of Hiragana, Katakana, and 300+ essential Kanji characters",
      "Native and experienced Bangladeshi JLPT certified instructors",
      "Direct pathway to Certificate of Eligibility (COE) and visa sponsorship in Japan",
      "Daily conversational drills for Japanese embassy and school interview readiness",
      "Complete guidance on part-time job rules and living etiquette in Japan",
    ],
    modules: [
      {
        title: "Writing Systems (Hiragana & Katakana)",
        desc: "Writing, reading, and pronunciation drills for all basic Japanese syllabaries and loanwords.",
      },
      {
        title: "Essential Kanji & Vocabulary",
        desc: "Fundamental Kanji radicals, compound words, time expressions, numbers, and basic survival Japanese.",
      },
      {
        title: "Grammar & Sentence Patterns (Minna no Nihongo)",
        desc: "Particles (wa, ga, o, ni, de), polite verb conjugations (Masu form), question patterns, and sentence connectors.",
      },
      {
        title: "Listening & NAT-TEST / JLPT Simulation",
        desc: "Speed listening comprehension and authentic practice test papers to guarantee passing scores.",
      },
    ],
  },
  {
    slug: "english-grammar-foundation",
    title: "English Grammar & Writing Foundation",
    subtitle: "Build Solid Grammatical Accuracy & Eliminate Habitual Writing Errors",
    category: "grammar",
    icon: "📝",
    badge: "Grammar & Structure",
    duration: "1.5 to 2 Months Structured Drills",
    classSchedule: "Flexible Weekday & Weekend Shifts",
    batchType: "Foundational Grammar & Sentence Building Workshop",
    targetOutcome: "Error-Free Sentence Construction & Strong Pre-IELTS Readiness",
    description:
      "Designed specifically for students whose weak grammar holds them back from achieving higher IELTS scores or expressing themselves clearly in academic and professional writing. Master tenses, voice, subject-verb agreement, and complex sentence structures.",
    highlights: [
      "Targeted focus on common grammatical mistakes made by Bangladeshi learners",
      "Mastery of all 12 tenses with practical context and timeline exercises",
      "Complex, compound, and passive sentence structures for IELTS Writing Task 1 & 2",
      "Punctuation, articles, prepositions, and cohesive transition words",
      "Weekly writing checks and personalized diagnostic error correction",
    ],
    modules: [
      {
        title: "Tenses & Timeline Mastery",
        desc: "Understanding past, present, and future nuances with practical writing exercises.",
      },
      {
        title: "Subject-Verb Agreement & Modifiers",
        desc: "Fixing subject-verb mismatches, dangling modifiers, and structural fragmentation.",
      },
      {
        title: "Complex & Compound Sentence Structures",
        desc: "Using subordinating conjunctions, relative clauses, and cohesive linkers for IELTS band 7+ writing.",
      },
      {
        title: "Prepositions, Articles & Punctuation",
        desc: "Eliminating habitual errors with prepositions of time/place, definite/indefinite articles, and comma usage.",
      },
    ],
  },
  {
    slug: "study-abroad-counseling",
    title: "Study Abroad Consultancy & 100% Admission Guidance",
    subtitle: "UK, USA, Australia, Europe, Japan, South Korea & Malaysia Admissions",
    category: "study-abroad",
    icon: "✈️",
    badge: "100% Guidance",
    duration: "Intake-Specific (Upcoming Fall, Spring & Summer Intakes)",
    classSchedule: "Free 1-on-1 Counseling & Transparent Profile Assessment",
    batchType: "Personalized Case Management at Dhanmondi Office",
    targetOutcome: "Confirmed University Offer Letter & Successful Student Visa Approval",
    description:
      "EDU Global delivers end-to-end guidance for higher education across 10+ premier destinations. From university selection, SOP crafting, and scholarship matching to bank solvency guidance, free bank support offers, and mock consular interview prep.",
    highlights: [
      "100% Admission Guidance with direct partner universities across Europe, UK, USA & Asia",
      "Free Bank Support promotional offer for early applicants",
      "Acceptance and justification of long study gaps and low CGPA (down to 2.5)",
      "Alternative language options: PTE, Duolingo, MOI (Medium of Instruction), and low IELTS solutions",
      "100% free profile evaluation with zero hidden file assessment charges",
    ],
    modules: [
      {
        title: "Profile Assessment & University Shortlisting",
        desc: "Matching student grades, budget, gap years, and career goals with accredited global universities.",
      },
      {
        title: "Application & Offer Letter Procurement",
        desc: "Submitting error-free academic dossiers and securing direct conditional and unconditional offer letters.",
      },
      {
        title: "SOP & Financial Portfolio Formulation",
        desc: "Drafting compelling Statements of Purpose and structuring compliant bank solvency statements.",
      },
      {
        title: "Consular Interview & Pre-Departure Briefing",
        desc: "Rigorous 1-on-1 visa interview simulations, flight ticket advice, and accommodation guidance.",
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
    id: "study-abroad-consultancy",
    title: "Global Higher Education & University Admissions",
    subtitle: "100% Admission Guidance across UK, USA, Australia, Canada, Europe, Japan, Korea & Malaysia",
    icon: "✈️",
    badge: "100% Guidance",
    category: "study-abroad",
    overview:
      "EDU Global provides dedicated, personalized student consultancy guiding students toward top universities in Europe, UK, USA, Canada, Australia, Japan, South Korea, and Malaysia. We deliver end-to-end admission guidance, scholarship assistance, and visa processing.",
    benefits: [
      "Official representation and partnerships with top global universities",
      "Assistance with undergraduate, master's, PhD, and credit transfer programs",
      "Long study gap accepted with professional portfolio structuring",
      "Low tuition fee options and maximum international scholarship pursuit",
      "Low CGPA solutions (students with GPA down to 2.5 welcomed in select institutions)",
    ],
    deliverables: [
      "Personalized institution & course shortlisting matrix",
      "Complete application dossier preparation & submission",
      "Confirmed Offer of Acceptance / CAS / I-20 / CoE",
      "Scholarship waiver negotiation and documentation",
    ],
    intakeNote: "Major Intakes: January/February (Spring), May/June (Summer) & September/October (Fall)",
  },
  {
    id: "bank-support-visa-service",
    title: "Free Bank Support & Financial Guidance",
    subtitle: "First 20 Students Free Bank Support Offer for Cyprus & European Intakes",
    icon: "🏛️",
    badge: "Free Bank Support",
    category: "visa-guidance",
    overview:
      "Bank solvency is one of the biggest hurdles for study abroad aspirants. EDU Global offers transparent financial advice and our signature promotional campaign: 'First 20 Students Free Bank Support' for upcoming Cyprus and European university intakes.",
    benefits: [
      "Promotional Free Bank Support for qualifying early applicants",
      "Legitimate sponsor paper authentication and financial audit",
      "Accurate calculation of required tuition + living maintenance funds",
      "Zero hidden service charges and full financial compliance guidance",
    ],
    deliverables: [
      "Financial documentation checklist",
      "Bank statement formulation and audit",
      "Sponsor affidavit and tax document verification",
      "Visa compliance verification report",
    ],
  },
  {
    id: "ielts-coaching-academy",
    title: "IELTS Preparation (Academic & General)",
    subtitle: "Cambridge Authentic Curriculum & Band 7.5+ Strategy with Diagnostic Mock Exams",
    icon: "🇬🇧",
    badge: "Target Band 7.5+",
    category: "language-courses",
    overview:
      "Our premier IELTS program in Dhanmondi, Dhaka covers all 4 modules (Listening, Reading, Writing, Speaking) with small batches, experienced mentors, authentic Cambridge materials, and regular mock exams designed to elevate your band score.",
    benefits: [
      "Small interactive batches ensuring individual speaking practice every day",
      "Detailed Task 1 & Task 2 writing corrections with Cambridge rubric analysis",
      "Authentic headphones listening practice and weekly full mock exams",
      "Guidance for students with low IELTS or alternative tests (PTE, Duolingo, MOI)",
    ],
    deliverables: [
      "Free diagnostic level test and personalized study roadmap",
      "Full course materials and Cambridge authentic practice books",
      "One-on-one speaking interview evaluations with scorecards",
      "Course Completion Certificate",
    ],
  },
  {
    id: "spoken-english-communication",
    title: "Spoken English & Professional Communication",
    subtitle: "Eliminate Hesitation, Gain Fluency & Prepare for Embassy and Job Interviews",
    icon: "🗣️",
    badge: "Basic to Advance",
    category: "language-courses",
    overview:
      "Designed for students, job holders, and visa applicants who need natural spoken fluency. Master everyday dialogues, overcome stage fright, refine your pronunciation, and build confidence in our friendly, activity-based classes.",
    benefits: [
      "100% English speaking atmosphere with supportive, friendly instructors",
      "Phonetics, accent awareness, and correct pronunciation drills",
      "Real-life roleplays for embassy visa interviews, corporate jobs, and meetings",
      "Daily conversational vocabulary, idioms, and speech connectors",
    ],
    deliverables: [
      "Initial fluency level assessment",
      "Interactive speaking roleplay drills & presentations",
      "Embassy & corporate mock interview simulations",
      "Certificate of Spoken English Proficiency",
    ],
  },
  {
    id: "kids-english-phonics-academy",
    title: "Kids' English & Phonics Academy (Ages 5–14)",
    subtitle: "Child-Friendly, Engaging & Phonics-Based Learning for Young Learners",
    icon: "🧒",
    badge: "Ages 5–14",
    category: "language-courses",
    overview:
      "A joyful, stimulating environment at our Dhanmondi Dhaka office where children build solid English pronunciation and communication habits through phonics, cartoon storytelling, vocabulary games, rhymes, and confidence-building activities.",
    benefits: [
      "Phonics-based reading from early childhood for accurate British pronunciation",
      "Multimedia storytelling, colorful worksheets, and educational games",
      "Small groups with patient, nurturing, and gentle teachers",
      "Continuous feedback and milestone reports for parents and guardians",
    ],
    deliverables: [
      "Illustrated phonics workbooks and reading kits",
      "Weekly storytelling, poem recitation & presentation drills",
      "Regular parent-teacher progress evaluations",
      "Certificate of Junior English Achievement",
    ],
  },
  {
    id: "free-profile-assessment-service",
    title: "100% Free Profile Assessment & Career Counseling",
    subtitle: "Zero Consultation Fee · Transparent University Selection & Visa Strategy",
    icon: "📋",
    badge: "100% Free",
    category: "free-file",
    overview:
      "Visit our office at Keari Plaza, 4th Floor (Lift-3), Road 8/A, Satmasjid Road, Dhanmondi, Dhaka or contact us via WhatsApp (+880 1901-402990). Our experienced counselors evaluate your academic records, study gaps, budget, and language proficiency with zero consultation fee.",
    benefits: [
      "100% completely free counseling with zero hidden assessment charges",
      "Honest assessment of study gap acceptability and visa approval probability",
      "Realistic breakdown of tuition fees, living costs, and part-time earnings",
      "Clear, step-by-step roadmap from admission to visa stamping and flight departure",
    ],
    deliverables: [
      "Personalized Country & University Recommendation Sheet",
      "Estimated cost of study and living budget breakdown",
      "Recommended IELTS / Spoken English batch schedule",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Profile Assessment & University Shortlisting",
    bengaliTitle: "ফ্রি প্রোফাইল মূল্যায়ন ও সঠিক বিশ্ববিদ্যালয় নির্বাচন",
    desc: "Visit our Dhanmondi office in Dhaka or connect online. We evaluate your academic background, study gaps, budget, and career goals with zero charges.",
  },
  {
    step: "02",
    title: "Language Preparation or MOI Documentation",
    bengaliTitle: "IELTS/স্পোকেন প্রস্তুতি অথবা MOI সার্টিফিকেট সংগ্রহ",
    desc: "Join our intensive IELTS, Spoken English, or Japanese batches, or prepare Medium of Instruction (MOI) certificates for destinations without IELTS requirements.",
  },
  {
    step: "03",
    title: "University Application & Offer Letter",
    bengaliTitle: "বিশ্ববিদ্যালয়ে আবেদন ও কনফার্মড অফার লেটার গ্রহণ",
    desc: "Our experienced team submits your admission file to partner universities in the UK, Europe, USA, Canada, Australia, Japan, or Malaysia, securing maximum scholarships.",
  },
  {
    step: "04",
    title: "Financial Planning & Free Bank Support",
    bengaliTitle: "ব্যাংক সলভেন্সি ও ফ্রি ব্যাংক সাপোর্ট সুবিধা",
    desc: "We assist with bank solvency statements, sponsor papers, SOP drafting, and our special 'Free Bank Support' offer for early applicants.",
  },
  {
    step: "05",
    title: "Visa Stamping & Pre-Departure Briefing",
    bengaliTitle: "ভিসা সাকসেস, সেলিব্রেশন ও বিমানে সফল উড্ডয়ন",
    desc: "Prepare for consular interviews with 1-on-1 mock sessions, celebrate your visa approval, and attend our pre-departure briefing for accommodation and travel.",
  },
];

export const testimonials = [
  {
    name: "Tanvir Ahmed",
    destination: "Study in United Kingdom (Canterbury Christ Church University)",
    quote:
      "ইডিইউ গ্লোবাল (ধানমন্ডি)-এর মাধ্যমে আমি কেন্টারবেরি ক্রাইস্ট চার্চ ইউনিভার্সিটিতে অ্যাডমিশন ও খুব দ্রুত ভিসা পেয়েছি। তাদের কাউন্সিলিং ছিল শতভাগ স্বচ্ছ এবং কোনোরকম হিডেন চার্জ ছাড়াই পুরো ফাইল প্রসেসিং সম্পন্ন হয়েছে।",
    course: "UK Student Visa + IELTS Preparation",
    batch: "Dhanmondi Dhaka HQ",
    badge: "UK Visa Approved 🇬🇧 · Canterbury Christ Church Uni",
  },
  {
    name: "Farhana Akter",
    destination: "Study in Cyprus (BSc Computer Science)",
    quote:
      "আমার ৩ বছরের স্টাডি গ্যাপ ছিল এবং ব্যাংক স্পন্সর নিয়ে চিন্তায় ছিলাম। ইডিইউ গ্লোবাল টিম তাদের ফ্রি ব্যাংক সাপোর্ট অফারের মাধ্যমে আমার পুরো ফাইল তৈরি করে সাইপ্রাসে অ্যাডমিশন ও ভিসা এনে দিয়েছে। টিউশন ফি-ও অনেক কম।",
    course: "Study in Cyprus + Free Bank Support",
    batch: "Dhanmondi Dhaka HQ",
    badge: "Cyprus Visa Approved 🇨🇾 · Free Bank Support Claimed",
  },
  {
    name: "Kamrul Hasan",
    destination: "Study in Japan (Japanese Language & Degree Pathway)",
    quote:
      "জাপানে যাওয়ার স্বপ্ন ছিল। ইডিইউ গ্লোবাল থেকে জাপানিজ ল্যাঙ্গুয়েজ কোর্স করেছি এবং তারাই আমার COE এবং স্টুডেন্ট ভিসা সম্পূর্ণ প্রসেস করে দিয়েছে। ধানমন্ডি ব্রাঞ্চের স্যারদের ব্যবহার ও গাইডলাইন সত্যিই অসাধারণ।",
    course: "Japanese Language + Japan Student Visa",
    batch: "Dhanmondi Dhaka HQ",
    badge: "Japan Visa Approved 🇯🇵 · COE Received",
  },
  {
    name: "Mst. Sharmin Sultana",
    destination: "Parent of Kids English Student",
    quote:
      "ধানমন্ডিতে ইডিইউ গ্লোবাল-এর কিডস ইংলিশ প্রোগ্রামে আমার ছেলেকে ভর্তি করিয়েছিলাম। ফোনিক্স ভিত্তিক ক্লাস আর শিক্ষিকাদের যত্নশীল আচরণের কারণে ওর ইংরেজির জড়তা কেটে গেছে এবং স্কুলে ও দারুণ ফলাফল করছে।",
    course: "Kids' English & Phonics",
    batch: "Dhanmondi Junior Batch",
    badge: "Satisfied Parent 🧒 · Confident Child",
  },
];

export const faqs = [
  {
    q: "Where is EDU Global located in Dhaka?",
    a: "Our head office is located at Keari Plaza, Plot No- 83, 4th Floor (Lift-3), Road No- 8/A, Satmasjid Road, Dhanmondi, Dhaka - 1209, Bangladesh (Opposite Unimart, near Old 15 Bus Stand).",
  },
  {
    q: "How does the 'Free Bank Support' offer work?",
    a: "EDU Global provides a special promotional Free Bank Support offer for the first 20 students applying for eligible Cyprus and European university intakes, reducing financial burden and simplifying student visa solvency requirements.",
  },
  {
    q: "Can I apply for higher studies abroad with a study gap or low CGPA?",
    a: "Yes! EDU Global welcomes students with study gaps and lower GPAs (down to 2.5). We help you properly document your professional work experience, portfolio, and skills to satisfy university admission criteria.",
  },
  {
    q: "Can I study abroad without IELTS?",
    a: "Yes! For destinations like Cyprus, Greece, Italy, Malaysia, and select universities in the UK, admission and visa processing can be completed using a Medium of Instruction (MOI) certificate from your previous institution.",
  },
  {
    q: "Which destination countries do you process?",
    a: "As featured on our official brand banner, we process admissions for Europe (Cyprus, Greece, Italy, Finland, Ireland), UK, USA, Canada, Australia, New Zealand, Japan, South Korea, and Malaysia.",
  },
  {
    q: "Do you offer language training like IELTS, Spoken English, and Kids English?",
    a: "Yes! At our Dhanmondi campus, we conduct specialized IELTS Preparation (Academic & General), Spoken English Fluency, Kids English & Phonics Academy (ages 5–14), and Japanese Language Courses (JLPT N5/N4).",
  },
  {
    q: "Is the initial profile assessment and counseling free?",
    a: "Yes! Our initial profile assessment and counseling are 100% FREE. We review your transcripts, budget, and study goals with zero hidden file opening charges.",
  },
  {
    q: "How can I contact EDU Global?",
    a: "Call us directly at +880 1901-402990 or +880 1901-402992. You can also chat with us on WhatsApp (+880 1901-402990), email us at info@eduglobal.support / eduglobalgogl@gmail.com, or visit us at Keari Plaza (Lift-3), Road 8/A, Dhanmondi, Dhaka.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "free-bank-support-offer",
    badge: "Exclusive Promo · First 20 Students",
    date: "Upcoming Intakes Enrollment Open",
    title: "First 20 Students Free Bank Support (Cyprus & Europe)",
    description:
      "Take advantage of EDU Global's exclusive promotional campaign offering free bank support assistance for early applicants heading to Cyprus and European institutions.",
    benefits: [
      "Free bank solvency guidance and documentation support",
      "Low tuition fees with installment options",
      "Medium of Instruction (MOI) accepted without IELTS",
      "Fast visa processing with dedicated counselor care",
    ],
  },
  {
    id: "uk-canterbury-partner-intake",
    badge: "UK Official Partner",
    date: "Upcoming Intakes",
    title: "Study in UK: Canterbury Christ Church University & Leading Unis",
    description:
      "Direct admission representation for 1-year Master's programs, 2-year Graduate Route PSW, and family/spouse visa guidance.",
    benefits: [
      "Fast-track offer letter processing through official partnership",
      "1-Year Master's degrees saving time and tuition",
      "Graduate Route 2-Year Post-Study Work Visa (PSW)",
      "Generous international student scholarships up to £5,000",
    ],
  },
  {
    id: "study-gap-low-cgpa-offer",
    badge: "Inclusive Admissions",
    date: "Ongoing Evaluation",
    title: "Study Gap & Low CGPA (Down to 2.5) Admissions",
    description:
      "Do not let your gap years or lower CGPA stop your global education dream. We expertly translate your work experience into credible admission assets.",
    benefits: [
      "Accepted gap from 2 to 8+ years with career documentation",
      "GPA down to 2.5 accepted in recognized institutions",
      "Options with or without IELTS (MOI accepted)",
      "Zero file assessment charges",
    ],
  },
  {
    id: "japan-korea-asia-pathways",
    badge: "Japan & Korea Special",
    date: "April & Upcoming Intakes",
    title: "Study in Japan & South Korea: Language to Degree",
    description:
      "Complete guidance for Japanese language schools and Korean university degrees, with 28 hrs/week legal student work rights.",
    benefits: [
      "JLPT N5/N4 training at our Dhanmondi center",
      "Certificate of Eligibility (COE) and visa documentation",
      "High part-time earning potential in Tokyo and Osaka",
      "GKS and university scholarships in South Korea",
    ],
  },
  {
    id: "ielts-spoken-kids-academy",
    badge: "Fluency & Foundation",
    date: "New Batches Starting Weekly",
    title: "IELTS Prep, Spoken English & Kids' English Academy",
    description:
      "Interactive speaking classes for adults and phonics foundation for children (ages 5–14) at our Dhanmondi Dhaka campus.",
    benefits: [
      "Cambridge authentic IELTS materials & Band 7.5+ strategies",
      "100% conversational classroom to break speaking hesitation",
      "Phonics-based reading and correct pronunciation from childhood",
      "Small batches with friendly, certified mentors",
    ],
  },
];