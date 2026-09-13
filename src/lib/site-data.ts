/**
 * NEXUS GLOBAL / NEXUS ACADEMY — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/nexusacademyjessore/
 *  - Official Assets:
 *      * Logo: logo.jpg (Circular insignia with sunrise orange top, ocean blue bottom, airplane takeoff, stylized 'N' swoosh)
 *  - Headquarters: Nowrin Tower / Pitha Bari Tower, 3rd Floor (Level-3 / 8th Floor), East Side of Laldighi, Beside Kacchi Queen / Backside of Sonali Bank Corporate Branch, Sadar, Jashore - 7400, Bangladesh.
 *  - International Branch: Nexus Group, Shin-Koiwa, Tokyo, Japan (Tokyo Helpline: +81 90 7705 8380)
 *  - Hotlines & WhatsApp: +880 1772-399913 / 01827-167332
 *  - Official Email: nexusglobal2020@gmail.com
 *  - Core Pillars: Connecting The Future · Language Mastery · 100% Visa Guidance · Direct Tokyo Liaison
 *  - Language Academy: Japanese (N5 & N4), German (Goethe A1 Standard), IELTS (Academic & General), Spoken English, Kids English, English Grammar, Malaysian Language
 *  - Study Abroad Specialization: Japan (Study & Work Visas), Germany (Tuition-Free & Ausbildung), Malaysia, UK, Canada, USA, Australia & European Schengen
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
  name: "Nexus Global",
  shortName: "Nexus Global",
  altName: "Nexus Academy",
  acronym: "NG",
  legalName: "Nexus Global Language and Skill Training Centre",
  nativeName: "নেক্সাস গ্লোবাল (ল্যাঙ্গুয়েজ অ্যান্ড স্কিল ট্রেনিং সেন্টার, যশোর)",
  slogan: "Connecting the future.",
  bengaliHeadline: "যশোর থেকে বিশ্বমঞ্চে — আপনার গ্লোবাল ক্যারিয়ার ও ল্যাঙ্গুয়েজ পার্টনার",
  bengaliSubheadline:
    "জাপানিজ ভাষা (N5 ও N4 লেভেল), গোয়েথে স্ট্যান্ডার্ড জার্মান ভাষা (A1), IELTS প্রিপারেশন, স্পোকেন ইংলিশ, কিডস ইংলিশ এবং জাপান ও জার্মানিসহ বিশ্বজুড়ে উচ্চশিক্ষা ও ভিসা প্রসেসিং",
  motto: "Connecting The Future",
  secondaryMotto: "The best way to predict the future is to create it.",
  philosophy: "EXPERT INSTRUCTION • 100% VISA GUIDANCE • SMALL BATCH CARE • DIRECT TOKYO SUPPORT",
  tagline:
    "Premier Language and Skill Training Centre in Jashore — Specializing in Japanese (N5/N4), German (Goethe A1), IELTS, Spoken English, Kids English, and Study Abroad in Japan, Germany, Malaysia, UK, Canada & Europe.",
  bio: "Welcome to Nexus Global Jessore! Looking for language courses, study abroad or global career pathways? You're in the right place! 🌍✈️📚",
  category: "Foreign Language School · Skill Training Centre · Educational Consultant",
  origin: "Jashore, Bangladesh",
  presence: "Nowrin Tower, 3rd Floor (Level-3 / 8th Floor), East Side Of Laldighi, Beside Kacchi Queen, Sadar, Jashore",
  email: "nexusglobal2020@gmail.com",
  contactEmail: "nexusglobal2020@gmail.com",
  careerEmail: "nexusglobal2020@gmail.com",
  altEmail: "nexusglobal2020@gmail.com",
  emails: ["nexusglobal2020@gmail.com"],
  phones: ["01772-399913", "01827-167332"],
  whatsapp: "+8801772399913",
  whatsappFormatted: "+880 1772-399913",
  secondaryPhone: "+880 1827-167332",
  tokyoPhone: "+81 90 7705 8380",
  hours: "Saturday – Thursday: 9:00 AM – 8:00 PM (Friday Open for Special Batches & Appointments)",
  established: "2020",
  signOff: "Nexus Global · Connecting the future",

  // Corporate & Branch Offices
  offices: {
    headquarters: {
      name: "Nexus Global Language and Skill Training Centre (Jashore HQ)",
      address:
        "Nowrin Tower / Pitha Bari Tower, 3rd Floor (Level-3 / 8th Floor), East Side of Laldighi, Beside Kacchi Queen / Backside of Sonali Bank Corporate Branch, Sadar, Jashore - 7400, Bangladesh",
      full: "Nowrin Tower, 3rd Floor, East Side of Laldighi, Beside Kacchi Queen, Sadar, Jashore - 7400, Bangladesh",
      short: "Nowrin Tower, East Side of Laldighi, Sadar, Jashore",
      phone: "01772-399913",
      phones: ["01772-399913", "01827-167332"],
      whatsapp: "+8801772399913",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=23.1678,89.2089",
      mapsEmbed:
        "https://maps.google.com/maps?q=Laldighi+Jashore+Bangladesh&z=16&hl=en&output=embed",
    },
    jashore: {
      name: "Nexus Global Jashore Campus",
      address:
        "Nowrin Tower / Pitha Bari Tower, 3rd Floor (Level-3 / 8th Floor), East Side of Laldighi, Beside Kacchi Queen, Sadar, Jashore",
      full: "Nowrin Tower, 3rd Floor, East Side of Laldighi, Beside Kacchi Queen, Sadar, Jashore - 7400, Bangladesh",
      short: "Nowrin Tower, East Side of Laldighi, Sadar, Jashore",
      phone: "01772-399913",
      phones: ["01772-399913", "01827-167332"],
      whatsapp: "+8801772399913",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=23.1678,89.2089",
      mapsEmbed:
        "https://maps.google.com/maps?q=Laldighi+Jashore+Bangladesh&z=16&hl=en&output=embed",
    },
    tokyo: {
      name: "Nexus Group Tokyo Liaison Branch (Japan Desk)",
      address: "Nexus Group, Shin-Koiwa, Katsushika-ku, Tokyo, Japan",
      full: "Nexus Group, Shin-Koiwa, Katsushika-ku, Tokyo, Japan",
      short: "Shin-Koiwa, Tokyo, Japan",
      phone: "+81 90 7705 8380",
      phones: ["+81 90 7705 8380"],
      whatsapp: "+819077058380",
      hours: "Monday – Saturday: 10:00 AM – 7:00 PM (JST)",
      mapsUrl: "https://maps.google.com/?q=Shin-Koiwa+Tokyo+Japan",
      mapsEmbed:
        "https://maps.google.com/maps?q=Shin-Koiwa+Tokyo+Japan&z=15&hl=en&output=embed",
    },
  },

  jashoreOffice: {
    title: "Nexus Global Jashore Headquarters",
    building: "Nowrin Tower / Pitha Bari Tower",
    floor: "3rd Floor (Level-3 / 8th Floor)",
    area: "East Side Of Laldighi, Beside Kacchi Queen",
    city: "Jashore",
    country: "Bangladesh",
    full: "Nowrin Tower, 3rd Floor, East Side Of Laldighi, Beside Kacchi Queen, Sadar, Jashore - 7400, Bangladesh",
    hotlines: ["01772-399913", "01827-167332"],
    whatsapp: "+8801772399913",
    whatsappDisplay: "+880 1772-399913",
    email: "nexusglobal2020@gmail.com",
    mapsUrl: "https://maps.google.com/?q=23.1678,89.2089",
    mapsEmbed:
      "https://maps.google.com/maps?q=Laldighi+Jashore+Bangladesh&z=16&hl=en&output=embed",
  },

  address: {
    building: "Nowrin Tower / Pitha Bari Tower",
    street: "3rd Floor, East Side of Laldighi",
    area: "Beside Kacchi Queen, Backside of Sonali Bank Corporate Branch",
    city: "Jashore",
    postalCode: "7400",
    country: "Bangladesh",
    full: "Nowrin Tower, 3rd Floor, East Side of Laldighi, Beside Kacchi Queen, Sadar, Jashore - 7400, Bangladesh",
    networkNote:
      "Modern AC Classrooms · Audio-Visual Language Lab · Free Books & Materials · Jashore & Tokyo Liaison",
  },

  geo: { lat: 23.1678, lng: 89.2089 },
  mapsUrl: "https://maps.google.com/?q=23.1678,89.2089",
  mapsEmbed:
    "https://maps.google.com/maps?q=Laldighi+Jashore+Bangladesh&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/nexusacademyjessore/",
    facebookPageName: "@nexusacademyjessore",
    facebookVideos: "https://www.facebook.com/nexusacademyjessore/videos",
    facebookReels: "https://www.facebook.com/nexusacademyjessore/reels",
    messenger: "https://m.me/nexusacademyjessore",
    whatsapp: "https://wa.me/8801772399913",
  },

  // Official Facebook Video Reels Provided by User
  featuredReels: [
    {
      id: "2080954189468142",
      title: "Japanese Language N5 Level New Batch",
      bengaliTitle: "জাপানিজ ভাষা N5 লেভেল নতুন ব্যাচে ভর্তি চলছে",
      badge: "🇯🇵 Japan Flagship Track",
      category: "Japanese Language",
      desc: "৩ মাস মেয়াদি জাপানিজ N5 লেভেল প্যাকেজ, প্রতিদিন ২ ঘণ্টা, সপ্তাহে ৬ দিন ক্লাস। ফ্রি বই, দুর্বল শিক্ষার্থীদের স্পেশাল কেয়ার এবং কোর্স শেষে ফ্রি এক্সট্রা ক্লাস সুবিধা সহ ১০০% ভিসা প্রসেসিং সহায়তা।",
      videoUrl: "https://www.facebook.com/reel/2080954189468142/",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F2080954189468142%2F&show_text=false&width=476&t=0",
    },
    {
      id: "1690716941984727",
      title: "German Language A1 Course Launch",
      bengaliTitle: "জার্মান ভাষা A1 লেভেল গোয়েথে স্ট্যান্ডার্ড কোর্স",
      badge: "🇩🇪 Germany Flagship Track",
      category: "German Language",
      desc: "জার্মান ভাষা A1 লেভেল নতুন ব্যাচ। ৩ মাস মেয়াদি, সপ্তাহে ৫ দিন (রবি-বৃহস্পতি, ১০:০০-১২:০০টা) গোয়েথে ইন্সটিটিউট স্ট্যান্ডার্ডে পাঠদান। ফ্রি আউসবিল্ডুং, প্রোফাইল ও জার্মান সিভি তৈরির পূর্ণাঙ্গ গাইডেন্স।",
      videoUrl: "https://www.facebook.com/reel/1690716941984727/",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1690716941984727%2F&show_text=false&width=476&t=0",
    },
    {
      id: "1404649397531884",
      title: "Inside Nexus Academy Jashore Campus",
      bengaliTitle: "যশোরে নেক্সাস গ্লোবাল ল্যাঙ্গুয়েজ সেন্টার ও আধুনিক ক্লাসরুম",
      badge: "🏢 Campus Tour & Facilities",
      category: "Campus & Facilities",
      desc: "যশোরের লালদীঘির পূর্ব পাড়ে নওরিন টাওয়ারের আধুনিক ল্যাঙ্গুয়েজ ল্যাব, অভিজ্ঞ শিক্ষকবৃন্দ, মনোরম পড়ার পরিবেশ এবং বিদেশে উচ্চশিক্ষা ও ক্যারিয়ার গাইডেন্সের একাডেমি পরিদর্শন।",
      videoUrl: "https://www.facebook.com/reel/1404649397531884/",
      embedSrc:
        "https://www.facebook.com/plugins/video.php?height=476&href=https%3A%2F%2Fwww.facebook.com%2Freel%2F1404649397531884%2F&show_text=false&width=476&t=0",
    },
  ],

  stats: [
    { value: "100%", label: "Visa Processing Guidance", badge: "End-to-End Support" },
    { value: "3 Months", label: "Intensive Language Packs", badge: "N5/N4 & Goethe A1" },
    { value: "6 Days/Wk", label: "Japanese Daily Classes", badge: "2 Hours Daily" },
    { value: "2 Hubs", label: "Jashore HQ + Tokyo Branch", badge: "Shin-Koiwa, Tokyo" },
    { value: "FREE", label: "Books & Study Materials", badge: "Zero Extra Material Cost" },
    { value: "1,400+", label: "Community Followers", badge: "Active Engagement" },
  ],

  accreditations: [
    {
      name: "Expert Language Faculty",
      title: "Native & Certified Language Instructors",
      desc: "Specialized teachers for Japanese (JLPT/NAT-TEST N5 & N4), Goethe-Institut standard German (A1), Cambridge-aligned IELTS, and Spoken English.",
    },
    {
      name: "100% Comprehensive Visa Support",
      title: "End-to-End Visa Processing & Documentation",
      desc: "Complete assistance with university/college applications, COE (Certificate of Eligibility) processing for Japan, Ausbildung support for Germany, and mock interview coaching.",
    },
    {
      name: "Special Care for Every Learner",
      title: "Free Extra Classes & Modern Classrooms",
      desc: "Special attention for weaker students, personalized speaking practice, and complimentary revision sessions even after course completion without extra fees.",
    },
    {
      name: "Direct Tokyo Liaison Support",
      title: "Nexus Group Shin-Koiwa, Tokyo, Japan",
      desc: "Our active presence in Tokyo ensures our students receive on-arrival guidance, accommodation assistance, part-time job support, and school coordination in Japan.",
    },
  ],

  verifiedKeyPartners: [
    {
      name: "Top Japanese Language Institutes & Universities",
      country: "Japan",
      note: "Higher education pathway, SSW/TITP work visa programs, COE processing & direct Tokyo liaison in Shin-Koiwa",
    },
    {
      name: "Public Universities & Ausbildung Centers in Germany",
      country: "Germany",
      note: "Tuition-Free Bachelor's & Master's Degrees, Goethe A1 exam pattern, Ausbildung placement & CV preparation",
    },
    {
      name: "Premier Branch Campuses & Universities in Malaysia",
      country: "Malaysia",
      note: "World-Class UK/Australian Branch Campuses (Monash, Nottingham, Taylor's), Fast EMGS Visa & Affordable Living",
    },
    {
      name: "Russell Group & Modern Universities in UK",
      country: "United Kingdom",
      note: "1-Year Master's Degrees, 2-Year Graduate Route PSW, MOI & English Waiver Options",
    },
    {
      name: "Designated Learning Institutions (DLIs) in Canada",
      country: "Canada",
      note: "Public Colleges & Universities with Paid Co-op Internships & up to 3-Year PGWP",
    },
    {
      name: "Accredited Universities in USA & Australia",
      country: "USA & Australia",
      note: "STEM OPT up to 3 years, top-ranked institutions, global alumni network and post-study opportunities",
    },
  ],
} as const;

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  {
    label: "Language Courses",
    to: "/services",
    children: [
      {
        label: "Japanese Language (N5 & N4) 🇯🇵",
        to: "/services",
        badge: "Flagship 3-Mo",
      },
      {
        label: "German Language (Goethe A1) 🇩🇪",
        to: "/services",
        badge: "Ausbildung Prep",
      },
      {
        label: "IELTS Preparation (Academic/General) 🇬🇧",
        to: "/services",
        badge: "Band 7.5+ Target",
      },
      {
        label: "Spoken English & Fluency 🗣️",
        to: "/services",
        badge: "Confidence Building",
      },
      {
        label: "Kids English (Ages 5–14) 🧒",
        to: "/services",
        badge: "Junior Fluency",
      },
      {
        label: "English Grammar & Academic Writing ✍️",
        to: "/services",
        badge: "Core Accuracy",
      },
      {
        label: "Malaysian (Malay) Language Course 🇲🇾",
        to: "/services",
        badge: "Work & Study",
      },
      {
        label: "Free Language Assessment Test",
        to: "/services",
        badge: "Diagnostic Test",
      },
    ],
  },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      {
        label: "Study in Japan 🇯🇵",
        to: "/study-in-{$country}",
        params: { country: "japan" },
        badge: "Tokyo Liaison / SSW",
      },
      {
        label: "Study in Germany 🇩🇪",
        to: "/study-in-{$country}",
        params: { country: "germany" },
        badge: "Tuition-Free / Ausbildung",
      },
      {
        label: "Study in Malaysia 🇲🇾",
        to: "/study-in-{$country}",
        params: { country: "malaysia" },
        badge: "Fast Visa & Affordable",
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
        badge: "World-Class Unis",
      },
      {
        label: "Study in Europe (Schengen) 🇪🇺",
        to: "/destinations",
        badge: "Denmark / Netherlands",
      },
      { label: "View All Destinations (8+)", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "100% Free Profile Assessment", to: "/services", badge: "Zero Fee" },
      { label: "Japan COE & Visa Processing", to: "/services", badge: "Tokyo Office" },
      { label: "Germany University & Ausbildung", to: "/services", badge: "Full Support" },
      { label: "Student & Work Visa Guidance", to: "/services", badge: "SSW / Study" },
      { label: "Embassy Mock Interview Coaching", to: "/services", badge: "1-on-1 Prep" },
      { label: "Pre-Departure & Arrival Care", to: "/services", badge: "Settlement Care" },
    ],
  },
  { label: "Intakes & Batches", to: "/offers" },
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
    slug: "japan",
    name: "Japan",
    flag: "🇯🇵",
    region: "Asia (Top Global Economy)",
    tagline:
      "World-class universities, lucrative part-time work, specified skilled worker (SSW) pathways & direct Nexus Tokyo liaison",
    intro:
      "Japan is a flagship destination at Nexus Global Jashore. We provide end-to-end guidance from Japanese language proficiency (N5 & N4) to Certificate of Eligibility (COE) processing, university/vocational school admission, and direct post-arrival assistance via the Nexus Group branch in Shin-Koiwa, Tokyo.",
    why: [
      "Direct on-ground student reception and settlement care through Nexus Group office in Shin-Koiwa, Tokyo",
      "Official Japanese Language training (N5 & N4 levels) directly at Nexus Global Jashore campus",
      "Permitted to work up to 28 hours per week during term and 40 hours per week during vacations",
      "High part-time wages ensuring students can comfortably cover their living and tuition expenses",
      "Clear transition pathways to full-time engineering, IT, business, and Specified Skilled Worker (SSW/Tokutei Ginou) visas",
      "Extremely safe, high-tech, and disciplined society with immense respect for international scholars",
    ],
    popularFields: [
      "Information Technology & Software Engineering",
      "Robotics, Automotives & Mechanical Engineering",
      "International Business & Hospitality Management",
      "Japanese Language & Cultural Studies",
      "Agricultural Science & Food Processing",
    ],
    avgTuition: "¥600,000 – ¥1,100,000 / year (Varies by Language School or University)",
    avgLiving: "¥60,000 – ¥90,000 / month (Easily covered with part-time job)",
    pswv: "Designated Activities Job Search Visa + Full Work Visa Conversion (SSW / Engineer / Specialist)",
    intakes: "April (Spring), July (Summer), October (Autumn) & January (Winter)",
    scholarships: "MEXT Scholarships, JASSO Honors Grants & Institutional Tuition Reductions",
    topUnis: [
      "University of Tokyo",
      "Kyoto University",
      "Tokyo Institute of Technology",
      "Waseda University",
      "Leading Japanese Language Academies in Tokyo, Osaka & Nagoya",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Flagship Track with Nexus Tokyo Branch Liaison",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe (Schengen)",
    tagline:
      "Tuition-free public universities, Goethe-standard German language preparation & 18-month job seeker visa",
    intro:
      "Germany is one of Europe's top destinations for higher education and dual vocational training (Ausbildung). Nexus Global offers Goethe-Institut standard German A1 preparation, CV formatting, and admissions guidance for tuition-free public universities.",
    why: [
      "Zero or nominal semester fees at almost all public universities across Germany",
      "German Language course (Goethe-Standard A1) conducted directly at Nexus Global Jashore",
      "Comprehensive Ausbildung (Dual Vocational Training) profile preparation and employer guidance",
      "18-month Post-Study Work Residence Permit (Job Seeker Visa) for all degree graduates",
      "Part-time work rights up to 20 hours/week during semester and 40 hours/week during breaks",
      "Unrestricted freedom of travel across all 29 European Schengen member states",
    ],
    popularFields: [
      "Computer Science, Software & Artificial Intelligence",
      "Automotive, Mechanical & Industrial Engineering",
      "Mechatronics & Electrical Engineering",
      "Data Science & International Business Management",
      "Ausbildung in Nursing, IT, Hospitality & Technical Crafts",
    ],
    avgTuition: "€0 – €350 / semester (Public University Semester Contribution Only)",
    avgLiving: "€934 / month (Mandatory Blocked Account Guideline)",
    pswv: "18 Months Post-Study Job Seeker Residence Permit",
    intakes: "Winter Semester (October) & Summer Semester (April)",
    scholarships: "DAAD Scholarships, Deutschlandstipendium & 100% Tuition Waivers",
    topUnis: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "Technical University of Berlin (TU Berlin)",
      "Heidelberg University",
      "Karlsruhe Institute of Technology (KIT)",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Goethe Standard A1 Course & Ausbildung Guidance",
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia (Global Education Hub)",
    tagline:
      "World-class UK/Australian branch campuses, fast EMGS visa processing & affordable high-standard living",
    intro:
      "Malaysia offers globally ranked education hosting renowned international branch campuses (Monash, Nottingham, Southampton) alongside premier national universities. Nexus Global also provides practical Malay language instruction for aspiring candidates.",
    why: [
      "Earn prestigious UK and Australian degrees at 1/3rd the cost via Malaysian campuses",
      "Streamlined EMGS student visa approval with minimal financial complication",
      "Affordable tuition fees and low cost of living in vibrant multicultural cities",
      "Safe, hospitable, and Muslim-friendly society with 100% English-medium teaching",
    ],
    popularFields: [
      "Information Technology, AI & Software Engineering",
      "Business Administration & International Finance",
      "Biotechnology & Pharmacy",
      "Civil & Mechanical Engineering",
    ],
    avgTuition: "$3,500 – $8,000 / year",
    avgLiving: "$350 – $550 / month",
    pswv: "Post-Graduation Internship & Employment Pass Options",
    intakes: "February, July, September & October",
    scholarships: "Malaysian International Scholarship (MIS) & Institutional Merit Awards",
    topUnis: [
      "Universiti Malaya (UM)",
      "Universiti Teknologi Malaysia (UTM)",
      "Monash University Malaysia",
      "University of Nottingham Malaysia",
      "Taylor's University",
      "Sunway University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Fast Visa Processing & Malay Language Foundation",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline:
      "Fast 1-year Master's degrees, 2-year Graduate Route PSW & world-leading academic excellence",
    intro:
      "With Nexus Global's expert counseling and Cambridge-aligned IELTS preparation, Bangladeshi students access top UK institutions offering intensive 1-year Master's degrees, 2-year Graduate Route Post-Study Work Visas, and generous scholarships.",
    why: [
      "1-Year intensive Master's degrees saving substantial tuition and living expenditure",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon degree completion",
      "Medium of Instruction (MOI) options accepted by select partner universities",
      "Comprehensive IELTS preparation (Target Band 7.5+) right at Nexus Global Jashore",
      "Scholarship opportunities up to £4,000 for Bangladeshi applicants",
    ],
    popularFields: [
      "Computer Science & Data Analytics",
      "Business Administration & MBA",
      "Project Management & International Logistics",
      "Public Health & Health Management",
      "Civil & Structural Engineering",
    ],
    avgTuition: "£11,000 – £16,000 / year (after partner bursaries)",
    avgLiving: "£9,207 – £12,000 / year",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January, May & September (Key Intakes)",
    scholarships: "£1,500 – £4,000 International Merit Bursaries",
    topUnis: [
      "University of East London",
      "University of Greenwich",
      "University of Hertfordshire",
      "Coventry University",
      "Birmingham City University",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "IELTS 7.5+ Target & 1-Year Fast Masters",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline:
      "Reputed public DLIs, paid co-op work terms & up to 3-year Post-Graduation Work Permit (PGWP)",
    intro:
      "Canada remains a top choice for Bangladeshi students seeking globally recognized diplomas and degrees, paid co-op internships, and clear post-graduation career opportunities.",
    why: [
      "Designated Learning Institutions (DLIs) offering internationally accredited programs",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for eligible graduates",
      "Paid Co-op programs integrating hands-on Canadian workplace experience into studies",
      "Safe, multicultural, and welcoming communities with strong student support",
    ],
    popularFields: [
      "Software Engineering & Cloud Computing",
      "Business Administration & Project Management",
      "Supply Chain & International Logistics",
      "Healthcare Administration & Nursing",
    ],
    avgTuition: "CAD $15,000 – $26,000 / year",
    avgLiving: "CAD $14,000 – $18,000 / year",
    pswv: "Up to 3 Years (PGWP)",
    intakes: "January (Winter), May (Summer), September (Fall)",
    scholarships: "CAD $2,000 – $8,000 Entrance & Merit Grants",
    topUnis: [
      "University of Windsor",
      "Memorial University of Newfoundland",
      "Conestoga College",
      "Seneca Polytechnic",
      "Fanshawe College",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "usa",
    name: "United States",
    flag: "🇺🇸",
    region: "North America",
    tagline: "World's top research universities, massive scholarships & up to 3-year STEM OPT",
    intro:
      "The USA offers unparalleled academic prestige, immense campus resources, and up to 3 years of STEM OPT (Optional Practical Training) work authorization post-graduation.",
    why: [
      "Home to the majority of top 100 globally ranked universities",
      "Up to 36 months (3 years) of STEM OPT full-time work authorization",
      "Generous institutional assistantships (TA/RA) and tuition fee waivers",
      "Cutting-edge research labs and direct industry recruitment in Silicon Valley and Wall Street",
    ],
    popularFields: [
      "Artificial Intelligence & Computer Science",
      "Data Science & Business Analytics",
      "Mechanical & Electrical Engineering",
      "Biotechnology & Pharmaceutical Sciences",
    ],
    avgTuition: "$18,000 – $32,000 / year",
    avgLiving: "$10,000 – $15,000 / year",
    pswv: "12 Months OPT + 24 Months STEM OPT Extension (Total 3 Years)",
    intakes: "Fall (August) & Spring (January)",
    scholarships: "Merit-based scholarships, Graduate Assistantships (Full Funding)",
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
    tagline: "Group of Eight universities, exceptional living standard & post-study work rights",
    intro:
      "Australia is renowned for academic quality, vibrant student cities, high minimum wages for student jobs, and generous post-study work rights.",
    why: [
      "Internationally recognized qualifications aligned with the Australian Qualifications Framework (AQF)",
      "High minimum wage for part-time student work (up to 48 hours per fortnight)",
      "Post-Study Work rights (Subclass 485) allowing graduates to work full-time",
      "Safe, multicultural environment with sunny climate and beautiful lifestyle",
    ],
    popularFields: [
      "Information Technology & Cybersecurity",
      "Accounting, Finance & Business Analytics",
      "Nursing, Public Health & Medical Laboratory",
      "Civil & Mining Engineering",
    ],
    avgTuition: "AUD $22,000 – $36,000 / year",
    avgLiving: "AUD $20,000 – $25,000 / year",
    pswv: "2 to 4 Years Post-Study Work Visa (Subclass 485)",
    intakes: "February (Semester 1) & July (Semester 2)",
    scholarships: "Destination Australia & 20%–50% University Merit Scholarships",
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
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    region: "Europe (Nordic)",
    tagline:
      "Prestigious Scandinavian universities, innovative teaching & post-study career opportunities",
    intro:
      "Denmark provides world-class higher education in a safe, progressive society with excellent post-study career opportunities in green energy, pharma, and technology.",
    why: [
      "World-class teaching methods emphasizing critical thinking and project collaboration",
      "Safe, progressive, and welcoming Scandinavian lifestyle",
      "Work rights up to 20 hours per week during studies and full-time in summer",
      "Post-study job search residence permit for international graduates",
    ],
    popularFields: [
      "Software Development & IT",
      "Biotechnology & Life Sciences",
      "Renewable Energy & Wind Power Engineering",
      "Global Business & Logistics",
    ],
    avgTuition: "€6,000 – €14,000 / year",
    avgLiving: "€800 – €1,100 / month",
    pswv: "Up to 3 Years Post-Study Work Permit",
    intakes: "September (Autumn) & February (Spring)",
    scholarships: "Danish Government Scholarships & Institutional Tuition Waivers",
    topUnis: [
      "University of Copenhagen",
      "Technical University of Denmark (DTU)",
      "Aarhus University",
      "Aalborg University",
    ],
    withoutIelts: false,
    featured: false,
  },
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "japanese" | "german" | "ielts" | "spoken" | "kids" | "grammar" | "malay";
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
    subtitle: "JLPT / NAT-TEST Preparation for Japan Higher Education & Work Visas (SSW / TITP)",
    category: "japanese",
    icon: "🇯🇵",
    badge: "Official Flagship Track",
    duration: "3 Months Intensive Package (N5 Level)",
    classSchedule: "6 Days a Week, 2 Hours Daily (Morning & Evening Batches)",
    batchType: "Offline Classroom at Jashore HQ with Audio-Visual Practice",
    targetOutcome: "JLPT/NAT N5 Pass & Japan Student/Work Visa Eligibility",
    description:
      "Nexus Global's flagship Japanese Language program in Jashore is structured specifically for students and professionals targeting study abroad (higher education) or employment in Japan (Specified Skilled Worker - SSW / TITP). Taught by proficient instructors, the course provides complete book support free of cost, modern air-conditioned classrooms, special care for weak students, and FREE extra classes post-course without any additional fees. Supported directly by the Nexus Group branch in Shin-Koiwa, Tokyo, Japan for 100% visa guidance and settlement.",
    highlights: [
      "3-month intensive package covering all fundamental Japanese language components",
      "Classes held 6 days a week, 2 hours every day for rapid language acquisition",
      "Complete book and audio-visual materials provided completely FREE of charge",
      "Special individual care for weak learners + FREE extra classes post-course",
      "Comprehensive Hiragana, Katakana, and essential Kanji writing & reading mastery",
      "Weekly authentic mock tests replicating JLPT and NAT-TEST exam conditions",
      "100% visa guidance, COE application support, and direct Tokyo office coordination in Shin-Koiwa",
    ],
    modules: [
      {
        title: "Script Mastery & Phonetics (Hiragana & Katakana)",
        desc: "Complete recognition and writing of all 46 basic Hiragana and Katakana characters, modified sounds (Dakuon/Handakuon), combined sounds (Yoon), and Japanese phonetics.",
      },
      {
        title: "Core Vocabulary & Kanji Foundations",
        desc: "Over 800 essential daily life vocabulary words and 100+ foundational Kanji characters required for the N5 level exam.",
      },
      {
        title: "Grammar Patterns & Sentence Structures",
        desc: "Mastery of Japanese particle usages (wa, ga, o, ni, de, to), verb conjugations (Masu, Te, Nai, Ta forms), adjective inflection, and polite conversational phrases.",
      },
      {
        title: "Listening Comprehension & Conversational Drills",
        desc: "Extensive practice with native Japanese audio dialogues, situational roleplays (train stations, shopping, introductions, job interviews), and pronunciation refinement.",
      },
      {
        title: "JLPT / NAT Mock Exams & Visa Interview Coaching",
        desc: "Timed full-length mock examinations with detailed feedback, script analysis, and embassy/immigration interview preparation.",
      },
    ],
  },
  {
    slug: "german-language",
    title: "German Language Course (Goethe Standard A1)",
    subtitle: "Goethe-Institut Exam Preparation & Germany Study / Ausbildung / Spouse Visa Pathway",
    category: "german",
    icon: "🇩🇪",
    badge: "Europe Flagship Track",
    duration: "3 Months (কোর্সের মেয়াদ: ৩ মাস)",
    classSchedule: "5 Days a Week (Sun to Thu, 10:00 AM – 12:00 PM)",
    batchType: "Offline Interactive Batch at Jashore HQ",
    targetOutcome: "Goethe-Zertifikat A1 & Germany University/Ausbildung Readiness",
    description:
      "Nexus Global's German Language Course in Jashore strictly follows the official Goethe-Institut (Dhaka & Kolkata) syllabus format. Designed for students targeting tuition-free German public universities, dual vocational training (Ausbildung), Opportunity Card (Chancenkarte), or spouse visas. Utilizing standard textbooks Netzwerk Neu A1 (Kursbuch + Übungsbuch) and Grammatik Aktiv A1–B1, students receive PDF class notes, audio/video resources, and free Ausbildung & German CV guidance.",
    highlights: [
      "Follows official Goethe-Institut exam patterns (Lesen, Hören, Schreiben, Sprechen)",
      "Uses standard textbooks: Netzwerk Neu A1 and Grammatik Aktiv A1–B1",
      "5 days a week (Sunday to Thursday, 10:00 AM – 12:00 PM) intensive schedule",
      "Free PDF & class notes provided after every single lecture",
      "Free audio and video listening materials for home practice",
      "Complimentary Ausbildung preparation guidance and German standard CV creation",
      "Guidance for tuition-free public university applications, APS, and blocked account setup",
    ],
    modules: [
      {
        title: "A1 Foundation & Everyday Expressions",
        desc: "Personal introductions, alphabet, numbers, time, greeting etiquette, shopping, ordering food, and polite daily interactions.",
      },
      {
        title: "Grammar Essentials (Grammatik Aktiv A1)",
        desc: "Noun genders (der, die, das), indefinite/definite articles, Akkusativ vs. Nominativ, regular & irregular verb conjugations, and modal verbs.",
      },
      {
        title: "Reading & Writing (Lesen & Schreiben)",
        desc: "Comprehending brief public notices, emails, filling out official forms, and writing short personal letters/notes according to Goethe exam criteria.",
      },
      {
        title: "Listening & Speaking (Hören & Sprechen)",
        desc: "Understanding native announcements, telephone numbers, directions, and participating in 1-on-1 speaking exchanges and question-and-answer rounds.",
      },
      {
        title: "Ausbildung & University Profile Support",
        desc: "Preparation of German-format Lebenslauf (CV), motivation letter guidance, and counseling for tuition-free German universities.",
      },
    ],
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Preparation (Academic & General Training)",
    subtitle: "Structured Band 7.5+ Strategy for Higher Education & Immigration Abroad",
    category: "ielts",
    icon: "🇬🇧",
    badge: "Band 7.5+ Target",
    duration: "2 to 3 Months Comprehensive Training",
    classSchedule: "3 to 4 Days a Week (Morning, Evening & Weekend Batches)",
    batchType: "Interactive Small Batches at Jashore Campus",
    targetOutcome: "IELTS Band 7.0 – 8.0+ in Academic or General Training",
    description:
      "Nexus Global's IELTS Preparation program is tailored for students targeting top universities in the UK, USA, Canada, Australia, and European institutions. Covering all 4 modules (Listening, Reading, Writing, Speaking), the course provides weekly authentic Cambridge mock tests, personalized essay correction, and 1-on-1 speaking test simulations with detailed examiner feedback.",
    highlights: [
      "Comprehensive coverage of both Academic and General Training formats",
      "Strictly limited batch sizes ensuring maximum individual feedback",
      "Weekly full-length mock exams replicating real British Council / IDP test environments",
      "In-depth Task 1 & Task 2 Writing analysis with band descriptor rubric breakdown",
      "1-on-1 Speaking interviews with real-time feedback on fluency, vocabulary, and pronunciation",
      "Access to authentic Cambridge IELTS past test libraries and digital audio resources",
    ],
    modules: [
      {
        title: "Listening Module Mastery",
        desc: "Techniques for predictive listening, keyword spotting, note completion, multiple choice, and tackling diverse British, North American, and Australian accents.",
      },
      {
        title: "Reading Speed & Accuracy",
        desc: "Mastering Skimming & Scanning, True/False/Not Given, Heading Matching, and time-management strategies for lengthy academic passages.",
      },
      {
        title: "Writing Task 1 & Task 2",
        desc: "Data interpretation, graphs, charts, maps, process diagrams, formal letters (General), and structured essay writing with cohesive devices and advanced lexical resources.",
      },
      {
        title: "Speaking Confidence & Fluency",
        desc: "Overcoming hesitation, expanding Part 2 cue card ideas, handling Part 3 abstract discussions, and improving pronunciation and intonation.",
      },
      {
        title: "Full-Length Mock Tests & Score Strategy",
        desc: "Regular exam simulations under timed conditions followed by individualized score diagnostics and remediation sessions.",
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
    duration: "2 Months Active Practice",
    classSchedule: "3 Days a Week (Flexible Morning & Evening Shifts)",
    batchType: "Interactive Activity-Based Batch",
    targetOutcome: "Fluent, Spontaneous & Confident English Communication",
    description:
      "Designed for students, job seekers, and professionals who struggle to speak English fluently despite knowing grammar. Nexus Global's Spoken English program uses immersive conversational exercises, group discussions, debates, and public speaking drills to eliminate hesitation and build natural spontaneity.",
    highlights: [
      "100% English speaking environment from day one",
      "Practical phonetics, pronunciation, and British/American accent awareness",
      "Real-world situation roleplays: interviews, meetings, travel, networking, presentations",
      "Vocabulary building with modern idioms, phrasal verbs, and daily expressions",
      "Overcoming speaking anxiety through guided stage presentations and debates",
    ],
    modules: [
      {
        title: "Breaking Shyness & Ice-breaking",
        desc: "Overcoming fear of making mistakes, self-introductions, body language, and spontaneous conversation starters.",
      },
      {
        title: "Pronunciation & Phonetics Drills",
        desc: "Correct vowel and consonant articulation, word stress, rhythm, and intonation patterns.",
      },
      {
        title: "Situational Roleplays & Everyday Dialogue",
        desc: "Conversations at workplaces, restaurants, airports, university campuses, and telephone etiquette.",
      },
      {
        title: "Debates, Discussions & Public Speaking",
        desc: "Structuring arguments, expressing opinions, agreeing/disagreeing politely, and delivering impromptu speeches.",
      },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids English & Kids Spoken English (Ages 5–14)",
    subtitle: "Fun, Interactive & Foundational English Learning for Young Learners",
    category: "kids",
    icon: "🧒",
    badge: "Junior Fluency Program",
    duration: "3 Months Foundational Program",
    classSchedule: "2 to 3 Days a Week (After-School & Weekend Batches)",
    batchType: "Special Child-Friendly Interactive Batch",
    targetOutcome: "Strong Pronunciation, Vocabulary & Natural English Speaking Habits",
    description:
      "Nexus Global's Kids English program creates a joyful, supportive atmosphere where children (ages 5 to 14) learn English naturally through interactive phonics, storytelling, games, rhymes, and creative dialogue. We build strong linguistic foundations for future academic success and global communication.",
    highlights: [
      "Age-tailored curriculum (Junior Group: 5–8 yrs; Senior Group: 9–14 yrs)",
      "Phonics-based reading and correct English pronunciation habits",
      "Interactive audio-visual cartoons, picture books, and storytelling games",
      "Building confidence in school presentations, recitations, and daily conversation",
      "Gentle, patient, and specially trained teachers who nurture young talent",
    ],
    modules: [
      {
        title: "Phonics & Letter Sounds",
        desc: "Jolly phonics, blending sounds, sight words, and reading short illustrated storybooks.",
      },
      {
        title: "Everyday Vocabulary & Action Words",
        desc: "Colors, animals, family, school items, fruits, professions, and polite conversational phrases.",
      },
      {
        title: "Sentence Building & Storytelling",
        desc: "Constructing simple sentences, describing pictures, cartoon storytelling, and basic grammar in play.",
      },
      {
        title: "Speaking Confidence & Recitation",
        desc: "Poem recitation, self-introduction, show-and-tell activities, and interactive dialogue games.",
      },
    ],
  },
  {
    slug: "english-grammar",
    title: "English Grammar & Academic Writing",
    subtitle: "Master Structural Accuracy, Sentence Mechanics & Professional Writing",
    category: "grammar",
    icon: "✍️",
    badge: "Academic Accuracy",
    duration: "2 Months Systematic Course",
    classSchedule: "3 Days a Week",
    batchType: "Foundational & Academic Batch",
    targetOutcome: "Zero-Grammar Error Writing for Board, University & Competitive Exams",
    description:
      "A systematic course designed to eliminate recurring grammatical mistakes in writing and speech. Covers parts of speech, tenses, subject-verb agreement, right forms of verbs, sentence transformations, clauses, and formal academic paragraph and letter writing.",
    highlights: [
      "Clear, practical rules taught without memorization confusion",
      "Extensive error correction worksheets and weekly diagnostic tests",
      "Crucial for HSC, Degree, Job Exams (BCS/Bank), and IELTS Writing accuracy",
      "Formal email, SOP, and academic essay structuring techniques",
    ],
    modules: [
      {
        title: "Core Mechanics & Parts of Speech",
        desc: "In-depth understanding of nouns, pronouns, verbs, adjectives, prepositions, and conjunctions in context.",
      },
      {
        title: "Tenses & Right Form of Verbs",
        desc: "Mastering all 12 tenses, conditional sentences, passive voice, and common verb errors.",
      },
      {
        title: "Sentence Structure & Transformations",
        desc: "Simple, complex, compound sentences, clause analysis, and modifying phrases.",
      },
      {
        title: "Academic Writing & Correspondence",
        desc: "Paragraph coherence, formal letters, emails, and Statement of Purpose (SOP) drafting.",
      },
    ],
  },
  {
    slug: "malaysian-language",
    title: "Malaysian (Malay) Language Course",
    subtitle: "Practical Spoken Malay for Higher Study & Employment in Malaysia",
    category: "malay",
    icon: "🇲🇾",
    badge: "Work & Study Track",
    duration: "2 Months Practical Course",
    classSchedule: "3 Days a Week",
    batchType: "Practical Spoken Batch",
    targetOutcome: "Conversational Malay for Everyday Life, Study & Work in Malaysia",
    description:
      "Specially designed for students and workers traveling to Malaysia. Teaches essential conversational Bahasa Melayu (Malay) for daily communication, workplace interactions, shopping, directions, and cultural integration.",
    highlights: [
      "Focused on practical spoken communication rather than complex grammar",
      "Essential phrases for airport arrival, accommodation, work, and markets",
      "Taught by instructors familiar with Malaysian workplace and student life",
    ],
    modules: [
      {
        title: "Malay Alphabet & Pronunciation",
        desc: "Vowels, consonants, greetings (Selamat pagi, Selamat petang), and polite etiquette.",
      },
      {
        title: "Essential Numbers & Daily Transactions",
        desc: "Counting, money (Ringgit), shopping dialogues, ordering food, and transport directions.",
      },
      {
        title: "Workplace & Campus Conversation",
        desc: "Communicating with colleagues, supervisors, classmates, and handling emergencies.",
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
    id: "japan-education-visa",
    title: "Japan Higher Education & Work Visa Processing",
    subtitle: "End-to-End Application, COE Documentation & Direct Tokyo Office Care",
    icon: "🇯🇵",
    badge: "Official Flagship Service",
    category: "study-abroad",
    overview:
      "Nexus Global provides comprehensive processing for students and workers aiming for Japan. From selecting accredited Japanese language academies and universities to assembling flawless Certificate of Eligibility (COE) dossiers, embassy visa submissions, and on-ground reception via our branch in Shin-Koiwa, Tokyo.",
    benefits: [
      "Direct coordination with accredited language academies and universities in Tokyo, Osaka, and Nagoya",
      "Thorough COE (Certificate of Eligibility) preparation with meticulous financial document verification",
      "Guidance for both Student Visas and Specified Skilled Worker (SSW/TITP) pathways",
      "On-ground reception, accommodation search, and part-time job guidance through Nexus Group Tokyo",
    ],
    deliverables: [
      "Free profile assessment and university/academy matching",
      "Application assembly, translation, and COE file lodgement",
      "Embassy visa application preparation and mock interviews",
      "Pre-departure flight booking, orientation, and Tokyo office contact handoff",
    ],
    intakeNote: "Key Intakes: April, July, October & January",
  },
  {
    id: "germany-admissions-ausbildung",
    title: "Germany Tuition-Free Admissions & Ausbildung Support",
    subtitle: "Public University Matching, Goethe A1 Prep & Dual Vocational Placement",
    icon: "🇩🇪",
    badge: "Europe Flagship Track",
    category: "study-abroad",
    overview:
      "We assist Bangladeshi students in securing admission to Germany's world-famous tuition-free public universities and dual vocational training (Ausbildung) programs, alongside Goethe-standard German A1 preparation and blocked account guidance.",
    benefits: [
      "Zero tuition fees at public universities for Bachelor's and Master's degrees",
      "Step-by-step guidance for Ausbildung placements in Nursing, IT, Hospitality, and Crafts",
      "APS certification assistance, Uni-Assist processing, and blocked account setup",
      "German-standard CV (Lebenslauf) and motivation letter creation",
    ],
    deliverables: [
      "Course and university shortlisting matched with student CGPA and language proficiency",
      "Direct portal and Uni-Assist application submissions",
      "Blocked account guidance (Expatrio, Fintiba, Coracle) and health insurance",
      "German Embassy consular mock interview coaching",
    ],
    intakeNote: "Winter (October) & Summer (April) Intakes",
  },
  {
    id: "language-academy",
    title: "Nexus Language Academy Training",
    subtitle: "Japanese (N5/N4), German (A1), IELTS, Spoken English & Kids English",
    icon: "🎓",
    badge: "In-House Language School",
    category: "language-courses",
    overview:
      "Our premier language academy in Jashore offers comprehensive instruction across Japanese, German, IELTS, Spoken English, Kids English, and Malaysian language. Featuring modern AC classrooms, complete free books, audio-visual labs, and special care for every student.",
    benefits: [
      "Japanese N5 & N4: 3 months, 6 days a week, 2 hours daily with free books",
      "German A1: Goethe-standard curriculum, 5 days a week with Ausbildung guidance",
      "IELTS Preparation: Target Band 7.5+ with weekly authentic mock tests",
      "Spoken English: Daily conversation drills and confidence building",
      "Kids English: Foundational phonetics and junior fluency for ages 5–14",
      "Free extra classes post-course without any additional fees",
    ],
    deliverables: [
      "Free diagnostic assessment to determine language starting level",
      "Complete textbook, audio tracks, and PDF class notes provided free",
      "Regular mock exams with individual performance feedback",
      "Certificate of course completion and visa interview readiness",
    ],
  },
  {
    id: "visa-counseling",
    title: "Comprehensive Student & Work Visa Guidance",
    subtitle: "100% Transparent Documentation & Embassy Mock Interview Preparation",
    icon: "🛂",
    badge: "100% Guidance Guarantee",
    category: "visa-guidance",
    overview:
      "Navigating visa regulations requires precision. Nexus Global offers dedicated consular counseling for Japan, Germany, Malaysia, UK, Canada, USA, and European Schengen visas. We conduct 1-on-1 embassy mock interview sessions to build student confidence.",
    benefits: [
      "Meticulous verification of academic certificates, financial proofs, and sponsorship documents",
      "Custom Statement of Purpose (SOP) and Study Plan drafting",
      "Realistic consular mock interviews addressing tricky embassy questions",
      "Zero hidden consultation costs with total transparency",
    ],
    deliverables: [
      "Document checklist tailored to specific embassy requirements",
      "Financial documentation and bank solvency structure guidance",
      "Mock interview recording and constructive feedback",
      "Step-by-step visa file compilation and appointment booking",
    ],
  },
  {
    id: "free-profile-assessment",
    title: "100% Free Profile Assessment & Counseling",
    subtitle: "Zero Consultation Fee · Transparent University & Country Strategy",
    icon: "📋",
    badge: "Zero Consultation Charge",
    category: "free-file",
    overview:
      "Before making any financial commitment, students can visit our Jashore campus or submit their documents online for a comprehensive, 100% free profile evaluation. Our senior counselors analyze your CGPA, study gap, budget, and language proficiency to recommend the best global pathway.",
    benefits: [
      "No upfront consultation charge or hidden file opening fees",
      "Realistic assessment of visa probability and eligibility for Japan, Germany, UK, etc.",
      "Clear breakdown of tuition fees, living costs, and part-time work earnings",
      "Personalized roadmap for language training (Japanese/German/IELTS)",
    ],
    deliverables: [
      "Personalized Country & University Roadmap document",
      "Budget estimation sheet including visa, travel, and initial living costs",
      "Recommended language course enrollment plan at Nexus Academy",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Profile Evaluation & Career Goal Alignment",
    bengaliTitle: "ফ্রি প্রোফাইল মূল্যায়ন ও সঠিক দেশ নির্বাচন",
    desc: "Walk in to our Jashore campus at Nowrin Tower or consult online. We review your academic records, English/language readiness, and career goals to select the optimal destination.",
  },
  {
    step: "02",
    title: "Language Mastery at Nexus Academy (Japanese / German / IELTS)",
    bengaliTitle: "নেক্সাস একাডেমিতে ভাষা দক্ষতা অর্জন",
    desc: "Enroll in our intensive Japanese (N5/N4), German (Goethe A1), or IELTS batches with complete free book support, audio-visual practice, and small batch guidance.",
  },
  {
    step: "03",
    title: "Institution Application & Documentation Support",
    bengaliTitle: "বিশ্ববিদ্যালয় / ল্যাঙ্গুয়েজ স্কুল আবেদন ও COE প্রসেসিং",
    desc: "Our counselors submit official applications to partner schools in Japan, universities in Germany/Malaysia/UK, and secure your admission letter or COE (Certificate of Eligibility).",
  },
  {
    step: "04",
    title: "Embassy Visa File Compilation & Mock Interview Prep",
    bengaliTitle: "ভিসা ফাইল প্রস্তুতকরণ ও ১-অন-১ মক ইন্টারভিউ",
    desc: "Complete financial document verification, SOP drafting, and rigorous 1-on-1 embassy mock interview sessions simulating real consular questionings.",
  },
  {
    step: "05",
    title: "Visa Approval, Pre-Departure Briefing & Tokyo Liaison Care",
    bengaliTitle: "ভিসা প্রাপ্তি ও টোকিও অফিসের সার্বিক সহায়তা",
    desc: "Celebrate your visa success! Attend our pre-departure briefing covering flights, accommodation, part-time work rights, and direct contact with our Tokyo branch.",
  },
];

export const testimonials = [
  {
    name: "Tanvir Ahmed",
    destination: "Japan (Higher Education & SSW Track)",
    quote:
      "Nexus Global Jashore-এ জাপানিজ N5 কোর্সে ভর্তি হয়েছিলাম। প্রতিদিন ২ ঘণ্টার ক্লাস এবং ফ্রি বই পেয়ে অনেক উপকার হয়েছে। দুর্বল শিক্ষার্থীদের জন্য স্যাররা আলাদা সময় দেন। আমার জাপান স্টুডেন্ট ভিসা এখন হাতে!",
    course: "Japanese Language N5 Batch",
    batch: "Jashore Campus",
    badge: "Visa Received",
  },
  {
    name: "Sabbir Hossain",
    destination: "Germany (Public University & Ausbildung)",
    quote:
      "জার্মান ভাষা A1 কোর্সে গোয়েথে স্ট্যান্ডার্ডে প্রতিটি ক্লাস নেওয়া হয়। সবচেয়ে ভালো বিষয় হলো ক্লাস শেষে ফ্রি লেকচার নোট ও অডিও ম্যাটেরিয়ালস দেওয়া হয় এবং ফ্রি আউসবিল্ডুং গাইডেন্স পাওয়া যায়।",
    course: "German Language A1 Batch",
    batch: "Jashore Campus",
    badge: "Goethe A1 Qualified",
  },
  {
    name: "Nusrat Jahan",
    destination: "United Kingdom (Master's Degree)",
    quote:
      "নেক্সাস একাডেমির IELTS কোর্সে ৩ মাস প্রস্তুতি নিয়ে আমার স্কোর এসেছে Band 7.5! স্পিকিং টেস্টের ১-অন-১ ফিডব্যাক আমার ভয় দূর করেছিল। যশোর থেকেই আন্তর্জাতিক মানের গাইডেন্স পেয়েছি।",
    course: "IELTS Academic Batch",
    batch: "Jashore Campus",
    badge: "Band 7.5 Scored",
  },
  {
    name: "Farhan Masud",
    destination: "Japan (Tokyo Language Academy)",
    quote:
      "নেক্সাসের সবচেয়ে বড় সুবিধা এদের টোকিওতে শিন-কোইওয়াতে সরাসরি নিজস্ব অফিস আছে। জাপানে নেমে থাকা এবং পার্ট-টাইম কাজের ক্ষেত্রে যে আত্মবিশ্বাস পেয়েছি তা অতুলনীয়।",
    course: "Japanese N5 + Tokyo Liaison Track",
    batch: "Tokyo Liaison",
    badge: "Enrolled in Tokyo",
  },
];

export const faqs = [
  {
    q: "Where is Nexus Global / Nexus Academy located in Jashore?",
    a: "Our head office is centrally located at Nowrin Tower / Pitha Bari Tower, 3rd Floor (Level-3 / 8th Floor), East Side of Laldighi, Beside Kacchi Queen and behind Sonali Bank Corporate Branch, Sadar, Jashore - 7400, Bangladesh.",
  },
  {
    q: "How does the Japanese Language Course (N5 & N4) work at Nexus?",
    a: "Our Japanese course is a 3-month intensive package, conducted 6 days a week, 2 hours every day. All books and audio-visual materials are provided completely FREE. We provide special care for weaker learners, and offer FREE extra revision classes even after course completion without any additional fee. Plus, 100% visa guidance and Tokyo liaison support.",
  },
  {
    q: "What is included in the German Language Course (A1)?",
    a: "The German A1 course runs for 3 months, 5 days a week (Sunday to Thursday, 10:00 AM – 12:00 PM) following Goethe-Institut standard textbooks (Netzwerk Neu A1 and Grammatik Aktiv A1–B1). Students receive free PDF class notes, audio/video materials, free Ausbildung preparation guidance, and German CV creation assistance.",
  },
  {
    q: "Do you offer Spoken English and Kids English courses?",
    a: "Yes! We have dedicated Spoken English courses for adults/students to overcome speaking hesitation, and a specialized Kids English & Kids Spoken English program for children aged 5 to 14 focusing on phonetics, confidence, and foundational grammar.",
  },
  {
    q: "Do you charge any fee for initial profile assessment and counseling?",
    a: "No. Our profile assessment and initial educational counseling are 100% FREE with zero hidden charges. You can bring your academic transcripts to our Jashore campus or send them via WhatsApp (01772-399913).",
  },
  {
    q: "What is the role of your Tokyo, Japan office?",
    a: "Nexus Group operates a branch in Shin-Koiwa, Tokyo, Japan (Helpline: +81 90 7705 8380). It provides direct local liaison support for our students arriving in Japan — including airport pickup coordination, accommodation assistance, part-time job guidance, and school coordination.",
  },
  {
    q: "Which countries do you process for higher education and work visas?",
    a: "Our core study abroad and visa destinations are Japan (Higher education & SSW/work visas), Germany (Tuition-free public universities & Ausbildung), Malaysia, United Kingdom, Canada, USA, Australia, and European Schengen countries.",
  },
  {
    q: "How can I contact Nexus Global Jashore for admission?",
    a: "You can call or WhatsApp our official hotlines at 01772-399913 or 01827-167332, email us at nexusglobal2020@gmail.com, or visit our Facebook page at facebook.com/nexusacademyjessore.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "japanese-n5-package",
    badge: "Most Popular · High Demand",
    date: "Next Batch Starts: 1st of Every Month",
    title: "Japanese Language N5 Special Batch (NAT-TEST / JLPT)",
    description:
      "3-Month intensive package, 6 days a week, 2 hours daily. 100% free books and multimedia audio-visual learning materials. Extra revision classes even after course completion without any additional fees.",
    benefits: [
      "Free complete course books and audio CD materials",
      "Classes 6 days a week (2 hours daily) with native speaker listening drills",
      "Special care for weaker learners with free extra classes",
      "100% Japan student & SSW visa application guidance with Tokyo branch support",
    ],
  },
  {
    id: "german-a1-goethe",
    badge: "Official Goethe Standard",
    date: "Class Schedule: Sun–Thu (10:00 AM – 12:00 PM)",
    title: "German Language Goethe A1 Intake",
    description:
      "Master fundamental German with Netzwerk Neu A1 and Grammatik Aktiv A1–B1. Special focus on Goethe-Zertifikat exam patterns, speaking fluency, and German Ausbildung pathways.",
    benefits: [
      "Goethe-Institut standard curriculum and mock examinations",
      "Free class lecture notes and comprehensive audio practice files",
      "Ausbildung guidance and German-format Europass CV creation",
      "Pathway counseling for 100% tuition-free public German universities",
    ],
  },
  {
    id: "ielts-score-booster",
    badge: "Target Band 7.0+",
    date: "Morning & Evening Batches Open",
    title: "IELTS Academic & General Comprehensive Coaching",
    description:
      "Master Reading, Writing, Listening, and Speaking with certified trainers, weekly full-length mock tests, and 1-on-1 speaking interview sessions to conquer exam anxiety.",
    benefits: [
      "Free authentic Cambridge IELTS test series and study packs",
      "Weekly timed mock exams with individual teacher feedback",
      "1-on-1 speaking test simulations to eliminate hesitation",
      "Free university shortlisting and visa file assessment for UK, Canada & Australia",
    ],
  },
  {
    id: "japan-tokyo-care",
    badge: "Tokyo Liaison Reception",
    date: "April & October Intake Admissions Open",
    title: "Study & Work in Japan with Direct Tokyo Office Care",
    description:
      "Enroll in top Japanese language schools and vocational colleges. Benefit from on-ground arrival care, dormitory assistance, and part-time job guidance from our Shin-Koiwa, Tokyo office.",
    benefits: [
      "Certificate of Eligibility (COE) preparation and document translation",
      "Direct liaison through Nexus Group Tokyo branch (Shin-Koiwa)",
      "Part-time job search advice and ward office registration assistance",
      "Spouse visa eligibility guidance and long-term career planning in Japan",
    ],
  },
  {
    id: "spoken-english-fluency",
    badge: "Career Booster",
    date: "Weekend & Evening Options",
    title: "Spoken English & Presentation Skills Batch",
    description:
      "Designed for university students and job seekers looking to build speaking fluency, overcome stage fear, and excel in corporate and visa consular interviews.",
    benefits: [
      "Daily conversation drills and group debate sessions",
      "Pronunciation and vocabulary enhancement modules",
      "Interview preparation for corporate and embassy screenings",
      "Certificate of Completion upon successful graduation",
    ],
  },
  {
    id: "kids-english-academy",
    badge: "Junior Achievers",
    date: "Special Friday & Saturday Batches",
    title: "Kids Spoken English & Phonics Academy (Ages 5–14)",
    description:
      "Interactive, fun-filled learning environment tailored for school children to build natural English speaking confidence, clear pronunciation, and basic grammar foundation.",
    benefits: [
      "Gamified vocabulary drills, storytelling, and phonics practice",
      "Small batch sizes ensuring individual attention for every child",
      "Friendly audio-visual lab sessions with engaging cartoons and songs",
      "Regular progress reports and parent-teacher consultations",
    ],
  },
];

