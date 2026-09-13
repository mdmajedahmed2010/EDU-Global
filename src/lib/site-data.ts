/**
 * AB STUDY HUB — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/abstudyhub/
 *  - Official Assets:
 *      * Logo: logo.jpg ("Abroad From Bangladesh" · AB Monogram · Graduation Cap)
 *      * Banner: banner.png ("From Chattogram TO THE WORLD" · "Learn Today, Lead Tomorrow, Succeed Anywhere" · East Nasirabad)
 *  - Headquarters: Commerce View Complex, 4th Floor (Exim Bank Building), CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4000, Bangladesh.
 *  - Hotlines & WhatsApp: 01952-566966 / 01515-219546
 *  - Official Digital Contacts:
 *      * Email: abstudyhub@gmail.com / career.abstudyhub@gmail.com
 *      * Website: https://abstudyhub.com/
 *      * Facebook: https://www.facebook.com/abstudyhub/
 *  - Core Pillars: Expert Guidance · Experienced Trainers · Personalized Support · Global Opportunities
 *  - Language Academy: German (A1-B2 Goethe), Danish Language, IELTS Private Batch, Spoken English, Kids English
 *  - Study Abroad Specialization: Germany (Tuition-Free), Denmark, Netherlands, Canada, Spain, Greece, Malaysia, Cyprus, UK & Europe
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
  name: "AB STUDY HUB",
  shortName: "AB Study Hub",
  acronym: "AB",
  legalName: "AB STUDY HUB — Abroad From Bangladesh",
  nativeName: "এবি স্টাডি হাব (বিদেশে উচ্চশিক্ষা ও ল্যাঙ্গুয়েজ একাডেমি)",
  slogan: "Learn Today, Lead Tomorrow, Succeed Anywhere.",
  bengaliHeadline: "চট্টগ্রাম থেকে বিশ্বমঞ্চে আপনার গ্লোবাল এডুকেশন পার্টনার",
  bengaliSubheadline:
    "জার্মানিতে ফ্রি টিউশন পড়াশোনা, Goethe-Institut জার্মান ভাষা কোর্স, ড্যানিশ ভাষা, প্রাইভেট ব্যাচে IELTS এবং কিডস ইংলিশ",
  motto: "From Chattogram TO THE WORLD",
  secondaryMotto: "DREAM • PLAN • ACHIEVE",
  philosophy: "EXPERT GUIDANCE • EXPERIENCED TRAINERS • PERSONALIZED SUPPORT • GLOBAL OPPORTUNITIES",
  tagline:
    "Premier Study Abroad Consultancy & Language Academy in Chattogram — Specializing in Germany (Tuition-Free Universities), Denmark, Netherlands, Canada, Spain, Greece, Malaysia, UK, German Language (A1-B2), Danish, IELTS Private Batch & Kids English.",
  bio: "Your Global Education Partner in Chattogram | Germany Tuition-Free Study, Denmark, Netherlands, German Language (A1-B2), Danish, IELTS Private Batch & Kids English 🎓",
  category: "Educational Consultant · Language Academy · Study Abroad Specialist",
  origin: "Chattogram, Bangladesh",
  presence: "Commerce View Complex, 4th Floor (Exim Bank Building), CDA Avenue, East Nasirabad, Chattogram",
  email: "abstudyhub@gmail.com",
  contactEmail: "abstudyhub@gmail.com",
  careerEmail: "career.abstudyhub@gmail.com",
  altEmail: "career.abstudyhub@gmail.com",
  emails: ["abstudyhub@gmail.com", "career.abstudyhub@gmail.com"],
  phones: ["01952-566966", "01515-219546"],
  whatsapp: "+8801952566966",
  whatsappFormatted: "+880 1952-566966",
  secondaryPhone: "+880 1515-219546",
  hours: "Saturday – Thursday: 10:00 AM – 8:00 PM (Friday Closed / By Prior Appointment)",
  established: "2019",
  signOff: "AB STUDY HUB · From Chattogram TO THE WORLD",

  // Corporate Office details
  offices: {
    headquarters: {
      name: "AB STUDY HUB Corporate Office (Chattogram HQ)",
      address: "Commerce View Complex, 4th Floor (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200, Bangladesh",
      full: "Commerce View Complex, 4th Floor (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200, Bangladesh",
      short: "Commerce View Complex, 191 CDA Avenue, Chattogram",
      phone: "01952-566966",
      phones: ["01952-566966", "01515-219546"],
      whatsapp: "+8801952566966",
      hours: "Saturday – Thursday: 10:00 AM – 8:00 PM (Friday Closed / Appointment Only)",
      mapsUrl: "https://maps.app.goo.gl/NDsm9iS9EUkiicEd8",
      mapsEmbed:
        "https://maps.google.com/maps?q=22.3648438,91.8217693&z=17&hl=en&output=embed",
    },
    chattogram: {
      name: "AB STUDY HUB Corporate Office (Chattogram HQ)",
      address: "Commerce View Complex, 4th Floor (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200, Bangladesh",
      full: "Commerce View Complex, 4th Floor (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200, Bangladesh",
      short: "Commerce View Complex, 191 CDA Avenue, Chattogram",
      phone: "01952-566966",
      phones: ["01952-566966", "01515-219546"],
      whatsapp: "+8801952566966",
      hours: "Saturday – Thursday: 10:00 AM – 8:00 PM (Friday Closed / Appointment Only)",
      mapsUrl: "https://maps.app.goo.gl/NDsm9iS9EUkiicEd8",
      mapsEmbed:
        "https://maps.google.com/maps?q=22.3648438,91.8217693&z=17&hl=en&output=embed",
    },
  },

  chattogramOffice: {
    title: "AB STUDY HUB Corporate Office (Chattogram HQ)",
    building: "Commerce View Complex (Exim Bank Building)",
    floor: "4th Floor",
    area: "East Nasirabad, Panchlaish",
    city: "Chattogram",
    country: "Bangladesh",
    full: "Commerce View Complex, 4th Floor (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200, Bangladesh",
    hotlines: ["01952-566966", "01515-219546"],
    whatsapp: "+8801952566966",
    whatsappDisplay: "+880 1952-566966",
    email: "abstudyhub@gmail.com",
    mapsUrl: "https://maps.app.goo.gl/NDsm9iS9EUkiicEd8",
    mapsEmbed:
      "https://maps.google.com/maps?q=22.3648438,91.8217693&z=17&hl=en&output=embed",
  },

  address: {
    building: "Commerce View Complex (Exim Bank Building)",
    street: "4th Floor, 191 CDA Avenue",
    area: "East Nasirabad, Panchlaish",
    city: "Chattogram",
    postalCode: "4200",
    country: "Bangladesh",
    full: "Commerce View Complex, 4th Floor (Exim Bank Building), 191 CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4200, Bangladesh",
    networkNote: "Expert Guidance · Experienced Trainers · Personalized Support · Global Opportunities",
  },

  geo: { lat: 22.3648438, lng: 91.8217693 },
  mapsUrl: "https://maps.app.goo.gl/NDsm9iS9EUkiicEd8",
  mapsEmbed:
    "https://maps.google.com/maps?q=22.3648438,91.8217693&z=17&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/abstudyhub/",
    facebookPageName: "@abstudyhub",
    facebookVideos: "https://www.facebook.com/abstudyhub/videos",
    facebookReels: "https://www.facebook.com/abstudyhub/reels",
    twitter: "https://x.com/abstudyhub",
    twitterHandle: "@abstudyhub",
    instagram: "https://www.instagram.com/abstudyhub/",
    instagramHandle: "@abstudyhub",
    tiktok: "https://www.tiktok.com/@abstudyhub",
    tiktokHandle: "@abstudyhub",
    youtube: "https://www.youtube.com/@abstudyhub",
    youtubeHandle: "@abstudyhub",
    messenger: "https://m.me/abstudyhub",
    linkedin: "https://www.linkedin.com/company/abstudyhub/",
  },

  stats: [
    { value: "€0", label: "Tuition in Germany", badge: "Public Universities" },
    { value: "10-12", label: "Students Per Batch", badge: "Private Batch Focus" },
    { value: "100%", label: "Free Profile Assessment", badge: "Zero Consultation Fee" },
    { value: "6,000+", label: "Community Followers", badge: "Active Engagement" },
    { value: "A1-B2", label: "German Goethe Prep", badge: "Comprehensive Modules" },
    { value: "6+", label: "Top Destination Nations", badge: "Germany · Denmark · Netherlands" },
  ],

  accreditations: [
    {
      name: "Expert Guidance",
      title: "Direct German & European University Evaluation",
      desc: "Specialized profile matching, Uni-Assist & APS documentation, blocked account setups, and university shortlisting by experienced advisors.",
    },
    {
      name: "Experienced Trainers",
      title: "Certified Language Faculty",
      desc: "Qualified instructors for German (Goethe A1-B2), Danish Language, and Cambridge-aligned IELTS Private Batches.",
    },
    {
      name: "Personalized Support",
      title: "Small Intimate Batches (10–12 Students)",
      desc: "Strictly limited batch sizes ensuring every student receives 1-on-1 speaking time, personal essay correction, and confidence training.",
    },
    {
      name: "Global Opportunities",
      title: "Worldwide Academic Pathways",
      desc: "Pathway programs and direct admissions to top institutions across Germany, Denmark, the Netherlands, Canada, Spain, Greece, and the UK.",
    },
  ],

  verifiedKeyPartners: [
    {
      name: "Public Universities in Germany (TU9 & UAS)",
      country: "Germany",
      note: "Tuition-Free Bachelor's and Master's Degrees, APS Certificate & Blocked Account Guidance, 18-Month Job Seeker Visa",
    },
    {
      name: "Top Scandinavian Universities in Denmark",
      country: "Denmark",
      note: "High Quality European Degrees, Post-Study Work Opportunities & Danish Language Training Support",
    },
    {
      name: "Leading Research Universities in Netherlands",
      country: "Netherlands",
      note: "English-Taught Bachelor's & Master's, High Tech Industry Career Options, 1-Year Zoekjaar Orientation Visa",
    },
    {
      name: "Designated Learning Institutions (DLIs) in Canada",
      country: "Canada",
      note: "Public Colleges & Universities with Paid Co-op Internships & up to 3-Year Post-Graduation Work Permit (PGWP)",
    },
    {
      name: "Russell Group & Leading UK Universities",
      country: "United Kingdom",
      note: "1-Year Master's Degrees, 2-Year Graduate Route PSW, MOI Options & International Scholarships",
    },
    {
      name: "Top Accredited Universities in Spain & Greece",
      country: "Spain & Greece",
      note: "High Visa Success Rate (90%+), Affordable European Living & Schengen Zone Work Pathways",
    },
    {
      name: "Leading Branch Campuses & Universities in Malaysia",
      country: "Malaysia",
      note: "World-Class UK/Australian Branch Campuses, Fast Visa Processing & High-Quality Affordable Degrees",
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
        label: "Study in Germany 🇩🇪",
        to: "/study-in-{$country}",
        params: { country: "germany" },
        badge: "Tuition Free",
      },
      {
        label: "Study in Denmark 🇩🇰",
        to: "/study-in-{$country}",
        params: { country: "denmark" },
        badge: "Language Support",
      },
      {
        label: "Study in UK 🇬🇧",
        to: "/study-in-{$country}",
        params: { country: "uk" },
        badge: "1-Yr Masters / PSW",
      },
      {
        label: "Study in Netherlands 🇳🇱",
        to: "/study-in-{$country}",
        params: { country: "netherlands" },
        badge: "Zoekjaar Visa",
      },
      {
        label: "Study in Spain 🇪🇸",
        to: "/study-in-{$country}",
        params: { country: "spain" },
        badge: "Schengen Dream",
      },
      {
        label: "Study in Greece 🇬🇷",
        to: "/study-in-{$country}",
        params: { country: "greece" },
        badge: "90% Visa Success",
      },
      {
        label: "Study in Malaysia 🇲🇾",
        to: "/study-in-{$country}",
        params: { country: "malaysia" },
        badge: "Top Global Hub",
      },
      {
        label: "Study in Cyprus 🇨🇾",
        to: "/study-in-{$country}",
        params: { country: "cyprus" },
        badge: "Global Future",
      },
      {
        label: "Study in Canada 🇨🇦",
        to: "/study-in-{$country}",
        params: { country: "canada" },
        badge: "PGWP / Co-op",
      },
      {
        label: "Study in Hungary 🇭🇺",
        to: "/study-in-{$country}",
        params: { country: "hungary" },
        badge: "Scholarships",
      },
      { label: "View All Destinations (10+)", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Language Courses",
    to: "/services",
    children: [
      { label: "German Language (A1, A2, B1, B2)", to: "/services", badge: "Goethe Exam" },
      { label: "Danish Language Course", to: "/services", badge: "Denmark Special" },
      { label: "IELTS Course in Private Batch", to: "/services", badge: "Band 7.5+ Target" },
      { label: "Spoken English & Fluency", to: "/services", badge: "Confidence & Accent" },
      { label: "Kids English (Ages 5-14)", to: "/services", badge: "Junior Fluency" },
      { label: "English Grammar & Writing", to: "/services", badge: "Academic Accuracy" },
      { label: "Free Language Assessment", to: "/services", badge: "Diagnostic Test" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "100% Free Profile Assessment", to: "/services", badge: "Zero Fee" },
      { label: "German University Admissions & APS", to: "/services", badge: "Germany Special" },
      { label: "Blocked Account & Insurance Guidance", to: "/services", badge: "Full Support" },
      { label: "Student & Spouse Visa Guidance", to: "/services", badge: "Proven Results" },
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
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe (Powerhouse Economy)",
    tagline:
      "World-renowned tuition-free public universities, 18-month job seeker visa, and Europe's largest economy",
    intro:
      "Germany is the primary flagship destination of AB STUDY HUB. Students from Bangladesh can access world-class higher education at public universities with zero or negligible tuition fees, coupled with Goethe-certified German language preparation (A1 to B2) at our Chattogram academy, APS certification assistance, and blocked account guidance.",
    why: [
      "Zero tuition fees at almost all public universities for Bachelor's and Master's degrees",
      "German Language preparation (A1, A2, B1, B2) directly integrated at AB STUDY HUB Chattogram",
      "Complete guidance for APS verification, Uni-Assist applications, and blocked accounts (Expatrio, Fintiba, Coracle)",
      "18-month Post-Study Work Residence Permit (Job Seeker Visa) for all university graduates",
      "Part-time work rights up to 20 hours/week during semester and 40 hours/week during breaks",
      "Robust engineering, computer science, renewable energy, and business industry with high starting salaries",
      "Unrestricted travel across all 29 Schengen member states",
    ],
    popularFields: [
      "Computer Science & Artificial Intelligence",
      "Automotive, Mechanical & Industrial Engineering",
      "Electrical & Mechatronics Engineering",
      "Data Science & Business Analytics",
      "Renewable Energy & Environmental Sciences",
      "International Business & Management",
    ],
    avgTuition: "€0 – €350 / semester (Public Universities Semester Contribution Only)",
    avgLiving: "€934 / month (Mandatory Blocked Account Guideline)",
    pswv: "18 Months Post-Study Job Seeker Residence Permit",
    intakes: "Winter Semester (October) & Summer Semester (April)",
    scholarships: "DAAD Scholarships, Deutschlandstipendium & Full Tuition Waivers",
    topUnis: [
      "Technical University of Munich (TUM)",
      "RWTH Aachen University",
      "Technical University of Berlin (TU Berlin)",
      "Heidelberg University",
      "Karlsruhe Institute of Technology (KIT)",
      "University of Stuttgart",
      "University of Duisburg-Essen",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Zero Tuition Fees at Public Universities",
  },
  {
    slug: "denmark",
    name: "Denmark",
    flag: "🇩🇰",
    region: "Europe (Nordic)",
    tagline:
      "Prestigious Scandinavian universities, innovative teaching, and dedicated Danish language course at AB Study Hub",
    intro:
      "Featured prominently on our official banner, Denmark provides a high standard of living, progressive society, and world-class universities. AB STUDY HUB offers dedicated Danish language training in Chattogram to prepare students for academic and career integration in Denmark.",
    why: [
      "Dedicated Danish Language training in private batches at AB STUDY HUB Chattogram",
      "World-class teaching methods emphasizing critical thinking and project-based teamwork",
      "Excellent post-study career opportunities in green energy, pharma, shipping, and technology",
      "Safe, progressive, and welcoming Scandinavian lifestyle with high student satisfaction",
      "Opportunity to work up to 20 hours per week during studies and full-time in June, July, and August",
      "Post-study job seeker residence permit for international graduates",
    ],
    popularFields: [
      "Software Development & IT",
      "Biotechnology & Life Sciences",
      "Renewable Energy & Wind Power Engineering",
      "Global Business & Logistics",
      "Architecture & Sustainable Urban Design",
    ],
    avgTuition: "€6,000 – €14,000 / year (Varies by university and program)",
    avgLiving: "€800 – €1,100 / month",
    pswv: "Up to 3 Years Post-Study Work Permit for Graduates",
    intakes: "Autumn (September) & Spring (February)",
    scholarships: "Danish Government Scholarships & Institutional Tuition Waivers",
    topUnis: [
      "University of Copenhagen",
      "Technical University of Denmark (DTU)",
      "Aarhus University",
      "Aalborg University",
      "Copenhagen Business School (CBS)",
      "University of Southern Denmark (SDU)",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Danish Language Course Available at AB Study Hub",
  },
  {
    slug: "netherlands",
    name: "Netherlands",
    flag: "🇳🇱",
    region: "Europe (Schengen)",
    tagline:
      "Europe's premier innovation hub, 2,100+ English-taught programs, and 1-Year Zoekjaar orientation visa",
    intro:
      "The Netherlands offers world-class academic institutions with the highest concentration of English-medium degree programs in continental Europe. AB STUDY HUB guides students through admission, scholarship applications, and the 1-year Zoekjaar post-study visa.",
    why: [
      "Over 95% of the Dutch population speaks English, offering seamless academic and social integration",
      "1-Year Orientation Year (Zoekjaar) visa for graduates to search for jobs without work permit restrictions",
      "Home to major multinational giants (ASML, Philips, Shell, Unilever, Booking.com)",
      "Interactive, collaborative, and problem-solving academic curriculum",
      "Schengen visa mobility across 29 European countries",
    ],
    popularFields: [
      "Data Science & Computer Engineering",
      "International Business & Supply Chain",
      "Water Management & Environmental Tech",
      "Biomedical Engineering",
      "Finance & Economics",
    ],
    avgTuition: "€8,000 – €14,000 / year",
    avgLiving: "€850 – €1,200 / month",
    pswv: "1 Year Orientation Year (Zoekjaar) Residence Permit",
    intakes: "September (Fall) & February (Spring)",
    scholarships: "Holland Scholarship (€5,000) & University Merit Awards",
    topUnis: [
      "University of Amsterdam",
      "Delft University of Technology (TU Delft)",
      "Erasmus University Rotterdam",
      "Eindhoven University of Technology (TU/e)",
      "University of Groningen",
      "Fontys University of Applied Sciences",
    ],
    withoutIelts: false,
    featured: true,
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Reputed public DLIs, paid co-op programs & up to 3-year PGWP",
    intro:
      "Canada remains a prime destination for Bangladeshi students seeking globally accredited qualifications, paid co-op internships, and clear post-graduation immigration pathways.",
    why: [
      "Designated Learning Institutions (DLIs) offering internationally respected diplomas and degrees",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for eligible graduates",
      "Paid Co-op programs integrating real Canadian workplace experience into studies",
      "Spouse open work permit opportunities for eligible Master's and Doctoral students",
      "Safe, multicultural society with supportive international student communities",
    ],
    popularFields: [
      "Software Engineering & Cloud Computing",
      "Business Administration & Project Management",
      "Supply Chain & International Logistics",
      "Healthcare & Nursing Administration",
      "Biotechnology & Health Informatics",
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
      "University of Manitoba",
    ],
    withoutIelts: true,
    featured: true,
  },
  {
    slug: "spain",
    name: "Spain",
    flag: "🇪🇸",
    region: "Europe (Schengen)",
    tagline: "Affordable European degrees, vibrant Mediterranean lifestyle & Schengen mobility",
    intro:
      "Promoted with dedicated campaigns by AB STUDY HUB, Spain offers high-quality European university degrees with very affordable tuition, rich cultural heritage, and unrestricted mobility across the 29 Schengen member states.",
    why: [
      "Affordable tuition fees starting from €1,500/year at top public and accredited universities",
      "Multiple English-taught Bachelor's and Master's programs across Madrid, Barcelona, and Valencia",
      "Low living expenses compared to Western Europe with excellent student discounts",
      "20 hours/week part-time work rights during semester",
      "Post-study residency and career opportunities across the European Union",
    ],
    popularFields: [
      "International Business & Hospitality Management",
      "Renewable Energy & Environmental Sciences",
      "Computer Science & Artificial Intelligence",
      "Biotechnology & Health Sciences",
      "Architecture & Design",
    ],
    avgTuition: "€1,500 – €8,000 / year",
    avgLiving: "€600 – €900 / month",
    pswv: "1 Year Post-Study Job Search Residence Permit",
    intakes: "September/October (Fall) & February (Spring)",
    scholarships: "Spanish Ministry of Education & Institutional Grants",
    topUnis: [
      "University of Barcelona (UB)",
      "Autonomous University of Madrid (UAM)",
      "Complutense University of Madrid",
      "Polytechnic University of Valencia (UPV)",
      "University of Granada",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Destination with Dedicated Facebook Campaign",
  },
  {
    slug: "greece",
    name: "Greece",
    flag: "🇬🇷",
    region: "Europe (Schengen)",
    tagline: "90% visa success rate, historic European academic culture & low cost of living",
    intro:
      "Featured on official AB STUDY HUB promotional flyers, Greece provides an accessible gateway to European education in the Schengen Zone with an exceptional 90%+ visa success rate, English-taught programs, and low living expenses.",
    why: [
      "High visa success rate (90%+) for qualified Bangladeshi students",
      "Extremely affordable tuition fees and European living costs (€450–€700/month)",
      "Schengen Area membership offering visa-free travel across 29 European countries",
      "English-medium undergraduate and postgraduate degrees recognized across Europe",
    ],
    popularFields: [
      "Maritime Studies & Shipping Management",
      "Business Administration & Tourism",
      "Computer Science & Information Technology",
      "Archaeology & European Humanities",
    ],
    avgTuition: "€2,500 – €6,000 / year",
    avgLiving: "€450 – €700 / month",
    pswv: "Post-Study Job Search Visa Options",
    intakes: "September/October & February",
    scholarships: "State Scholarships Foundation (IKY) & University Grants",
    topUnis: [
      "National and Kapodistrian University of Athens",
      "Aristotle University of Thessaloniki",
      "Athens University of Economics and Business",
      "University of Crete",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "90% Visa Success Rate Gateway to Europe",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Russell Group universities, fast 1-year Master's degrees & 2-year Graduate Route PSW",
    intro:
      "With AB STUDY HUB's counseling, students gain access to prestigious UK institutions offering intensive 1-year Master's degrees, 2-year Graduate Route Post-Study Work Visas, and MOI options.",
    why: [
      "Fast 1-year intensive Master's degrees saving considerable time and living costs",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon degree completion",
      "Medium of Instruction (MOI) accepted by select partner universities",
      "Generous scholarship opportunities up to £4,000 for Bangladeshi applicants",
      "Expert CAS file assembly and visa guidance by AB STUDY HUB counselors",
    ],
    popularFields: [
      "Computer Science & Data Science",
      "Business Administration & MBA",
      "Project Management & Supply Chain",
      "Public Health & Health Management",
      "Civil & Structural Engineering",
    ],
    avgTuition: "£11,000 – £16,000 / year (with partner bursaries)",
    avgLiving: "£9,207 – £12,000 / year",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January, May & September (Key Intakes)",
    scholarships: "£1,500 – £4,000 International Merit Bursaries",
    topUnis: [
      "University of East London",
      "University of Greenwich",
      "University of Hertfordshire",
      "Southampton Solent University",
      "Coventry University",
      "Birmingham City University",
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
      "Hungary provides European degrees with exceptionally low living costs, tuition fee waivers through the prestigious Stipendium Hungaricum scholarship, and complete mobility across the Schengen Zone.",
    why: [
      "Stipendium Hungaricum scholarship covers 100% tuition, monthly stipend, dorm, and health insurance",
      "Very affordable self-funded tuition starting from €3,000 per year",
      "Low living cost (€450–€600/month) with vibrant student lifestyle",
      "Complete freedom of travel across the entire Schengen Zone",
    ],
    popularFields: [
      "General Medicine (MBBS) & Dentistry",
      "Computer Science & Software",
      "Business Administration",
      "Mechanical & Civil Engineering",
    ],
    avgTuition: "€3,000 – €6,000 / year",
    avgLiving: "€450 – €650 / month",
    pswv: "9 Months Job-Seeker Residence Permit",
    intakes: "September (Main Intake) & February",
    scholarships: "Stipendium Hungaricum (100% Free) & Merit Discounts",
    topUnis: [
      "University of Debrecen",
      "Eötvös Loránd University (ELTE)",
      "University of Szeged",
      "Budapest University of Technology and Economics",
    ],
    withoutIelts: true,
    featured: false,
  },
  {
    slug: "italy",
    name: "Italy",
    flag: "🇮🇹",
    region: "Europe (Schengen)",
    tagline: "Regional government scholarships (DSU/EDISU), historic universities & low tuition",
    intro:
      "Italy combines centuries of academic heritage with lucrative regional scholarships (such as DSU and EDISU) that can provide tuition-free study along with free accommodation and living stipends.",
    why: [
      "Regional scholarships cover 100% tuition, free university meals, and annual cash stipends",
      "Public university tuition fees based on family income (ISEE Parificato)",
      "Prestigious English-medium Bachelor's and Master's programs",
      "Post-study job search visa and access to Italy's thriving industrial regions",
    ],
    popularFields: [
      "Mechanical & Automotive Engineering",
      "Fashion, Industrial Design & Architecture",
      "Economics & International Finance",
      "Computer Engineering & Data Science",
    ],
    avgTuition: "€1,000 – €3,500 / year (Public Universities)",
    avgLiving: "€500 – €800 / month",
    pswv: "1 Year Post-Study Job Search Residence Permit",
    intakes: "September/October (Main Intake)",
    scholarships: "Regional DSU/EDISU Full Scholarships (Tuition + Cash Stipend)",
    topUnis: [
      "Politecnico di Milano",
      "University of Bologna",
      "Sapienza University of Rome",
      "University of Padua",
      "Politecnico di Torino",
    ],
    withoutIelts: true,
    featured: false,
  },
  {
    slug: "malaysia",
    name: "Malaysia",
    flag: "🇲🇾",
    region: "Southeast Asia (Global Education Hub)",
    tagline: "World-class UK/Australian branch campuses, affordable tuition & fast visa processing",
    intro:
      "Promoted with dedicated flyers by AB STUDY HUB for 2026-2027 intakes, Malaysia is one of Asia's top higher education hubs, hosting prestigious international branch campuses (Monash, Nottingham, Southampton) alongside top-ranked national universities.",
    why: [
      "Earn UK and Australian degrees at 1/3rd the cost via Malaysian branch campuses",
      "EMGS streamlined student visa processing with high approval rates and minimal financial hassle",
      "Affordable tuition fees and low cost of living in Kuala Lumpur and Penang",
      "Safe, multicultural, and Muslim-friendly environment with 100% English-medium teaching",
    ],
    popularFields: [
      "Information Technology, AI & Software Engineering",
      "Business Analytics & Islamic Finance",
      "Biotechnology & Pharmacy",
      "Civil, Mechanical & Petroleum Engineering",
    ],
    avgTuition: "$3,500 – $8,000 / year",
    avgLiving: "$350 – $550 / month",
    pswv: "Post-Graduation Internship & Employment Pass Options",
    intakes: "February, July, September & October",
    scholarships: "Malaysian International Scholarship (MIS) & University Merit Awards",
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
    specialHighlight: "Official 2026-2027 Admission Campaign Destination",
  },
  {
    slug: "cyprus",
    name: "Cyprus",
    flag: "🇨🇾",
    region: "Europe (Mediterranean)",
    tagline: "High visa approval rates, English-medium programs & stepping stone to global careers",
    intro:
      "Actively promoted on AB STUDY HUB's Facebook page, Cyprus offers Mediterranean European higher education with straightforward admission requirements, 100% English-taught degrees, and high visa approval rates.",
    why: [
      "High visa approval rates with streamlined documentation requirements",
      "Affordable tuition packages with automatic merit scholarship reductions",
      "Work rights for international students during academic semesters",
      "High-tech campus facilities and warm Mediterranean lifestyle",
    ],
    popularFields: [
      "Computer Science & Networking",
      "Hospitality & International Tourism Management",
      "Business Administration & Accounting",
      "Civil Engineering",
    ],
    avgTuition: "€3,000 – €6,500 / year",
    avgLiving: "€400 – €650 / month",
    pswv: "Post-Study Employment Permit Options",
    intakes: "February (Spring) & October (Fall)",
    scholarships: "Up to 50% Entrance Merit Scholarships",
    topUnis: [
      "University of Cyprus",
      "Cyprus University of Technology",
      "University of Nicosia",
      "European University Cyprus",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Official Promotional Campaign Destination",
  },
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "german" | "danish" | "ielts" | "spoken" | "kids" | "grammar";
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
    slug: "german-language",
    title: "German Language Course (A1, A2, B1, B2)",
    subtitle: "Goethe-Institut Exam Preparation & Germany Study/Work Visa Pathway",
    category: "german",
    icon: "🇩🇪",
    badge: "Flagship Course",
    duration: "2 to 3 Months per Level (A1 / A2 / B1 / B2)",
    classSchedule: "3 to 4 Days / Week (Morning, Evening & Weekend Batches)",
    batchType: "Private Batch (Strictly 10–12 Students) · Studio & Online",
    targetOutcome: "Goethe-Institut Certificate & Germany University/Visa Readiness",
    description:
      "AB STUDY HUB's German Language Program is the premier German academy in Chattogram. Structured specifically for students targeting tuition-free German universities, Opportunity Card (Chancenkarte) applicants, and spouse visas. Led by experienced Goethe-certified trainers, classes maintain a strict limit of 10–12 students to guarantee interactive speaking practice, grammar mastery, and weekly exam-pattern mock tests.",
    highlights: [
      "Small private batches strictly capped at 10–12 students for maximum individual attention",
      "Complete preparation aligned with official Goethe-Institut exam patterns (Lesen, Hören, Schreiben, Sprechen)",
      "Extensive daily Sprechen (speaking) drills and German conversation pair work",
      "Grammar breakdown simplified: Akkusativ vs. Dativ, verb conjugations, and sentence structures",
      "Interactive German cultural movie sessions, audio dialogues, and real-world scenarios",
      "Regular full-length mock exams with individualized performance evaluation and feedback",
      "Direct integration with Germany university admissions, APS, and blocked account guidance",
    ],
    modules: [
      {
        title: "A1 (Beginner Foundation)",
        desc: "Basic everyday expressions, personal introductions, shopping, numbers, time, basic sentence construction, and pronunciation.",
      },
      {
        title: "A2 (Elementary Communication)",
        desc: "Routine exchanges, past tense (Perfekt/Präteritum), modal verbs, describing background, employment, and immediate environment.",
      },
      {
        title: "B1 (Intermediate Independence)",
        desc: "Complex grammar, expressing opinions, dealing with travel situations, entering university language requirements, Goethe B1 exam drills.",
      },
      {
        title: "B2 (Advanced Competence)",
        desc: "Fluency in complex technical texts, spontaneous discussions, academic writing, and full German university admission criteria.",
      },
    ],
  },
  {
    slug: "danish-language",
    title: "Danish Language Course",
    subtitle: "Language & Cultural Integration for Study & Work in Denmark",
    category: "danish",
    icon: "🇩🇰",
    badge: "Denmark Special",
    duration: "2 Months Intensive",
    classSchedule: "3 Days / Week (Flexible Evening & Weekend Batches)",
    batchType: "Small Batch Offline (East Nasirabad) & Interactive Live Online",
    targetOutcome: "Practical Danish Fluency & Cultural Adaptation for Denmark",
    description:
      "Featured on AB STUDY HUB's official banner, our Danish Language Course equips students and professionals with conversational Danish, authentic pronunciation, and cultural readiness before departing for Denmark. Eliminate language barriers and enhance your employability in the Scandinavian job market.",
    highlights: [
      "Practical daily conversational Danish tailored for students and expats",
      "Pronunciation mastery and phonetic training for challenging Danish vowels and glottal stops (stød)",
      "Essential vocabulary for university life, part-time jobs, public transit, and grocery shopping",
      "Small class format ensuring personal coaching from experienced instructors",
      "Integrated guidance on Denmark university admissions, post-study work permits, and settlement",
    ],
    modules: [
      {
        title: "Danish Phonetics & Greetings",
        desc: "Mastering Danish pronunciation, counting, basic introductions, and everyday courteous expressions.",
      },
      {
        title: "Student & Campus Life Danish",
        desc: "Asking directions, campus interactions, ordering food, banking, and navigating public transportation in Denmark.",
      },
      {
        title: "Workplace & Practical Dialogue",
        desc: "Customer service vocabulary, part-time work interaction, email etiquette, and workplace rights in Denmark.",
      },
      {
        title: "Danish Culture & Integration",
        desc: "Understanding Danish social norms, the concept of Hygge, Danish traditions, and immigration compliance.",
      },
    ],
  },
  {
    slug: "ielts-preparation",
    title: "IELTS Course in Private Batch",
    subtitle: "Academic & General Training with 1-on-1 Speaking & Targeted Band 7.5+",
    category: "ielts",
    icon: "🎯",
    badge: "Private Batch 10-12 Students",
    duration: "2 to 3 Months Intensive",
    classSchedule: "3 Days / Week (Morning, Evening & Weekend Batches)",
    batchType: "Private Batch (Strictly 10–12 Students) · Offline Studio & Online",
    targetOutcome: "Target Band Score 7.0 to 8.5",
    description:
      "AB STUDY HUB's IELTS Course in Private Batch offers an exclusive, high-impact learning environment. Unlike crowded coaching centers, we limit every batch to 10–12 students. Every learner receives individual Speaking mock tests with certified examiners, detailed line-by-line essay corrections for Writing Task 1 & 2, and Cambridge-standard diagnostic evaluations.",
    highlights: [
      "Private batch structure strictly capped at 10–12 students for focused mentor interaction",
      "1-on-1 Speaking mock interviews with individualized band score analytics and pronunciation tips",
      "Task 1 (Academic Reports / Letters) & Task 2 (Essay) evaluation with grammatical and lexical corrections",
      "Proven time-management strategies for Reading passage skimming, scanning, and True/False/Not Given mastery",
      "Audio accent decoding practice (British, American, Australian, and European accents)",
      "Weekly Cambridge-standard full-length mock exams under authentic examination conditions",
      "Special counseling for university admissions in Germany, Denmark, Netherlands, Spain, Greece, Malaysia, UK, and Canada",
    ],
    modules: [
      {
        title: "Listening Module",
        desc: "Predicting missing information, signpost word recognition, multiple choice traps, maps, diagrams, and section 4 academic lectures.",
      },
      {
        title: "Reading Module",
        desc: "Speed-reading techniques, paragraph heading matching, sentence completion, summary completion, handling dense scientific and humanities passages.",
      },
      {
        title: "Writing Module (Task 1 & 2)",
        desc: "Cohesion & coherence, Lexical Resource, grammatical range and accuracy, structured paragraph templates, report data trends, argumentative essays.",
      },
      {
        title: "Speaking Module",
        desc: "Overcoming hesitation, structuring Part 2 cue cards, in-depth Part 3 abstract discussions, natural idiomatic expressions, accent clarity.",
      },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Fluency Programs",
    subtitle: "Speak English Confidently in Any Academic, Professional & Social Setting",
    category: "spoken",
    icon: "🗣️",
    badge: "Confidence & Fluency",
    duration: "2 Months (24 Interactive Sessions)",
    classSchedule: "3 Days / Week (Evening & Weekend Batches)",
    batchType: "Studio Batch (East Nasirabad) & Interactive Online",
    targetOutcome: "Natural Conversational Fluency & Embassy Visa Interview Readiness",
    description:
      "Overcome stage fear, grammatical hesitation, and mother-tongue influence. Our Spoken English program emphasizes real-world conversation, presentation delivery, group debates, and embassy visa interview readiness for students and working professionals.",
    highlights: [
      "Daily extempore speaking sessions, dialogue role-playing, and friendly group debates",
      "Accent neutralization and reduction of regional mother-tongue influence (MTI)",
      "Embassy visa interview simulation and academic presentation confidence techniques",
      "Professional workplace communication, email drafting, meeting etiquette, and formal phone English",
      "Small batch size ensuring maximum speaking opportunities for every student",
    ],
    modules: [
      {
        title: "Overcoming Hesitation & Daily Speech",
        desc: "Breaking the fear barrier, thinking in English without mental translation, and mastering daily greetings and routine descriptions.",
      },
      {
        title: "Vocabulary Expansion & Phrasal Verbs",
        desc: "Active vocabulary for academic discussions, situational phrases, modern idioms, and conversational connectors.",
      },
      {
        title: "Public Speaking & Presentations",
        desc: "Body language, voice modulation, slide presentation delivery, defending points of view, and debate techniques.",
      },
      {
        title: "Embassy Visa Interview Preparation",
        desc: "Mock interview practice for Germany, Denmark, Spain, Canada, and UK student visa appointments with tricky question handling.",
      },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids English & Junior Fluency (Ages 5–14)",
    subtitle: "Joyful English Foundation with Phonics, Storytelling & Speaking Confidence",
    category: "kids",
    icon: "🧒",
    badge: "Ages 5-14 Junior Academy",
    duration: "3 Months Interactive Program",
    classSchedule: "2 to 3 Days / Week (Afternoon & Weekend Batches)",
    batchType: "Child-Friendly Studio at Commerce View Complex, Chattogram",
    targetOutcome: "Foundational English Reading, Phonics, Speaking & Natural Confidence",
    description:
      "Designed specifically for children aged 5 to 14, our Kids English course builds English fluency through joyful storytelling, interactive phonics, pronunciation games, and creative speaking activities in a supportive, friendly environment.",
    highlights: [
      "Fun, child-friendly learning environment with audiovisual storytelling and games",
      "Phonics and syllable breakdown for clear, natural pronunciation and spelling mastery",
      "Creative expression through picture description, show-and-tell, and mini-speeches",
      "Grammar concepts taught naturally through conversational patterns without rote memorization",
      "Regular parent-teacher feedback sessions to track language progress",
    ],
    modules: [
      {
        title: "Phonics & Word Building",
        desc: "Sound-letter associations, vowel blends, reading storybooks with correct pronunciation and intonation.",
      },
      {
        title: "Storytelling & Expressive Speech",
        desc: "Narrating fairy tales, describing daily school activities, expressing feelings, and interactive show-and-tell.",
      },
      {
        title: "Grammar & Creative Sentence Writing",
        desc: "Tenses made easy, parts of speech, constructing colorful sentences, and writing short paragraphs.",
      },
      {
        title: "Public Speaking & Junior Confidence",
        desc: "Reciting poems, role-playing, answering questions confidently, and participating in fun speech activities.",
      },
    ],
  },
  {
    slug: "english-grammar",
    title: "English Grammar & Professional Writing Masterclass",
    subtitle: "Master Academic Writing, SOPs & Complex Grammatical Precision",
    category: "grammar",
    icon: "✍️",
    badge: "Academic Accuracy",
    duration: "1.5 Months Intensive",
    classSchedule: "3 Days / Week",
    batchType: "Offline & Online Batches",
    targetOutcome: "Flawless Academic Essays, SOPs, CVs & Professional Correspondence",
    description:
      "Master the architecture of the English language. This course is essential for university applicants drafting Statements of Purpose (SOPs), researchers writing publication papers, and professionals preparing executive business correspondence.",
    highlights: [
      "Deep dive into complex sentence structures: compound, complex, conditional, and inverted syntax",
      "Eliminating common grammatical blunders: subject-verb agreement, misplaced modifiers, and preposition traps",
      "Step-by-step guidance for writing compelling Statements of Purpose (SOPs) and Motivation Letters",
      "Academic vocabulary and cohesive devices for high-scoring research and university essays",
    ],
    modules: [
      {
        title: "Structural Grammar & Syntax",
        desc: "Clauses, phrases, tenses, passive voice in academic writing, conditionals, and sentence variety.",
      },
      {
        title: "Academic & SOP Writing",
        desc: "Structuring Motivation Letters, academic statement of purpose, writing personal bios, and university email correspondence.",
      },
      {
        title: "Common Errors & Proofreading",
        desc: "Identifying punctuation errors, run-on sentences, parallelism, and professional proofreading strategies.",
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
  highlightBadge?: string;
};

export const services: Service[] = [
  {
    slug: "free-profile-assessment",
    title: "100% Free Profile Assessment & Course Matching",
    summary:
      "Zero-fee, honest evaluation of your academic credentials, GPA, study gaps, and language proficiency to match the ideal universities in Germany, Denmark, Netherlands, Canada, Spain, Greece, Malaysia, and the UK.",
    points: [
      "Comprehensive evaluation of SSC, HSC, Bachelor's, and Master's transcripts",
      "Analysis of study gaps and tailored gap-explanation documentation",
      "Country and university shortlisting according to budget and career goals",
      "Zero consultation charge and 100% transparent guidance",
    ],
    icon: "🎁",
    timeline: "Immediate / Within 24 Hours",
    highlightBadge: "100% Free Assessment",
  },
  {
    slug: "germany-admissions-aps",
    title: "Germany University Admissions & APS Support",
    summary:
      "Specialized end-to-end guidance for German public universities with zero tuition fees, including APS certification verification and Uni-Assist file assembly.",
    points: [
      "Shortlisting tuition-free English and German-taught programs across TU9 & UAS",
      "Complete APS (Akademische Prüfstelle) document assembly and verification support",
      "Uni-Assist portal submission, VPD calculation, and direct university applications",
      "Master's research proposal & curriculum syllabus matching for German credit requirements",
    ],
    icon: "🇩🇪",
    timeline: "Winter & Summer Intakes",
    highlightBadge: "Germany Flagship",
  },
  {
    slug: "blocked-account-insurance",
    title: "Blocked Account & Health Insurance Guidance",
    summary:
      "Step-by-step assistance setting up your German blocked account (Expatrio, Fintiba, Coracle) and statutory health insurance (TK, Barmer, DAK) for visa clearance.",
    points: [
      "Seamless digital setup of official blocked account according to German Embassy norms",
      "Statutory German public/private student health insurance selection and activation",
      "Assistance with bank transfer documentation and fund verification letter",
      "Travel insurance coverage from departure to enrollment",
    ],
    icon: "🏦",
    timeline: "3 to 5 Working Days",
    highlightBadge: "Mandatory Step",
  },
  {
    slug: "language-academy-coaching",
    title: "Language Academy Coaching (German, Danish, IELTS, Kids)",
    summary:
      "In-house language training facility in East Nasirabad, Chattogram offering German (A1-B2 Goethe), Danish Language, IELTS Private Batches, and Kids English.",
    points: [
      "Small private batches strictly limited to 10–12 students",
      "Goethe-Institut certified syllabus for German A1, A2, B1, and B2",
      "Danish Language course for Denmark higher education and work permit integration",
      "Cambridge mock exams and 1-on-1 IELTS speaking interviews with band analytics",
      "Kids English foundation program (Ages 5–14) with phonics and storytelling",
    ],
    icon: "🗣️",
    timeline: "Ongoing Batches",
    highlightBadge: "Private Batch 10-12",
  },
  {
    slug: "visa-filing-mock-interviews",
    title: "Student Visa Guidance & 1-on-1 Mock Interviews",
    summary:
      "Meticulous visa documentation, financial sponsorship validation, and rigorous mock interviews tailored for German, Danish, Spanish, Canadian, and UK embassies.",
    points: [
      "Embassy appointment booking assistance and checklist compliance",
      "Drafting compelling Statements of Purpose (SOP) and Letters of Motivation",
      "Financial proof, bank statement audits, and tax documentation review",
      "1-on-1 simulated embassy mock interviews addressing tough consular queries",
    ],
    icon: "🛂",
    timeline: "4 to 8 Weeks Prior to Intake",
    highlightBadge: "High Visa Success",
  },
  {
    slug: "pre-departure-briefing",
    title: "Pre-Departure Briefing & European Settlement Care",
    summary:
      "Comprehensive orientation covering flight booking, city registration (Anmeldung in Germany), accommodation finding, transit, and part-time work rights.",
    points: [
      "Student housing shortlisting (Studentenwerk, private student dorms, WG flats)",
      "City registration (Anmeldung) and residence permit (Aufenthaltstitel) procedures",
      "Part-time work search guidance (Werkstudent & Mini-job opportunities)",
      "Connecting with senior Bangladeshi student networks in Europe",
    ],
    icon: "✈️",
    timeline: "Prior to Departure",
    highlightBadge: "Arrival Care",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "100% Free Profile Assessment",
    badge: "Step 1: Evaluation",
    text: "Visit our Chattogram office or connect on WhatsApp. Our advisors evaluate your academic transcripts, English/German proficiency, and career goals with zero consultation charge.",
  },
  {
    step: "02",
    title: "Course & University Shortlisting",
    badge: "Step 2: Selection",
    text: "We curate a targeted list of accredited public universities in Germany (tuition-free), Denmark, the Netherlands, Canada, Spain, Greece, or the UK aligned with your profile and intake.",
  },
  {
    step: "03",
    title: "Language Training & APS / Uni-Assist",
    badge: "Step 3: Preparation",
    text: "Join our German (A1-B2 Goethe), Danish, or IELTS Private Batches while our documentation desk compiles your APS certificate, SOP, recommendation letters, and Uni-Assist file.",
  },
  {
    step: "04",
    title: "Offer Letter & Blocked Account Setup",
    badge: "Step 4: Admission",
    text: "Upon securing your university admission letter, we assist in establishing your German blocked account (Expatrio/Fintiba/Coracle) and compulsory student health insurance.",
  },
  {
    step: "05",
    title: "Visa Filing, Mock Prep & Pre-Departure",
    badge: "Step 5: Visa & Fly",
    text: "Rigorous 1-on-1 embassy mock interviews, complete visa dossier assembly, flight booking, student accommodation coordination, and pre-departure settlement briefing.",
  },
];

export const faqs = [
  {
    q: "Is profile assessment at AB STUDY HUB truly 100% free?",
    a: "Yes, absolutely! AB STUDY HUB provides 100% Free Profile Assessment. We evaluate your academic certificates, GPA, study gaps, and eligibility for universities in Germany, Denmark, Netherlands, Canada, Spain, Greece, Malaysia, and UK without any upfront consultation charge.",
  },
  {
    q: "Can I study in Germany with zero tuition fees?",
    a: "Yes! Public universities across almost all German states offer tuition-free education for both domestic and international students. You only pay a minor semester contribution (typically €150–€350/semester) which often includes free local and regional public transportation.",
  },
  {
    q: "What German Language levels are taught at AB STUDY HUB Chattogram?",
    a: "We provide comprehensive German language training covering levels A1, A2, B1, and B2. Our curriculum strictly adheres to the Goethe-Institut examination syllabus and emphasizes active Sprechen (speaking) drills, grammar mastery, and weekly full-length mock tests.",
  },
  {
    q: "Why are your batches called 'Private Batches'?",
    a: "Unlike traditional crowded coaching centers with 30–50 students, AB STUDY HUB limits every German and IELTS batch to strictly 10–12 students. This guarantees that every individual student receives personal mentor attention, regular speaking turns, and thorough evaluation.",
  },
  {
    q: "Do you offer Danish Language courses?",
    a: "Yes! Featured prominently on our official banner, we provide specialized Danish language coaching for students, job applicants, and professionals moving to Denmark, ensuring smooth adaptation and career readiness.",
  },
  {
    q: "Where is the AB STUDY HUB corporate office located?",
    a: "Our corporate headquarters is located at Commerce View Complex, 4th Floor (Exim Bank Building), CDA Avenue, East Nasirabad, Panchlaish, Chattogram-4000, Bangladesh. You are warmly welcome to visit Saturday through Thursday from 10:00 AM to 8:00 PM.",
  },
  {
    q: "What are your official hotline and WhatsApp numbers?",
    a: "You can reach us directly on 01952-566966 (Primary & WhatsApp) and 01515-219546. We are also reachable via email at abstudyhub@gmail.com.",
  },
  {
    q: "What is an APS certificate for Germany and do you assist with it?",
    a: "The APS (Akademische Prüfstelle) certificate is a mandatory document verifying the authenticity of educational credentials for Bangladeshi students applying to Germany. AB STUDY HUB provides complete step-by-step guidance for APS dossier submission and verification.",
  },
];

export const verifiedStudentReviews = [
  {
    name: "Tanzimul Islam",
    course: "M.Sc. Computer Science (Tuition-Free)",
    destination: "TU Munich, Germany",
    rating: 5,
    flag: "🇩🇪",
    highlight: "German Visa Granted & Goethe B1 Passed",
    text: "AB STUDY HUB in East Nasirabad made my dream of studying in Germany a reality. Their Goethe German course and private batch setup with only 10 students allowed me to clear B1 on my first attempt. From Uni-Assist to blocked account setup, their guidance is unmatched in Chattogram!",
  },
  {
    name: "Nusrat Jahan",
    course: "IELTS Private Batch",
    destination: "Band 7.5 Achieved",
    rating: 5,
    flag: "🎯",
    highlight: "Scored Band 7.5 Overall",
    text: "I was struggling with IELTS Speaking and Writing until I joined AB STUDY HUB's private batch. The personal feedback on every essay and regular 1-on-1 speaking mocks gave me the confidence to achieve Band 7.5! Highly recommend to all Chattogram students.",
  },
  {
    name: "Mohammad Kawsar",
    course: "B.Sc. Mechanical Engineering",
    destination: "Aarhus University, Denmark",
    rating: 5,
    flag: "🇩🇰",
    highlight: "Danish Language & Visa Success",
    text: "AB Study Hub is the only consultancy in Chattogram offering authentic Danish language training alongside study abroad processing. The counselors are genuine, transparent, and never make false promises.",
  },
  {
    name: "Farhana Akter",
    course: "Kids English (Parent Review)",
    destination: "Ages 5-14 Junior Program",
    rating: 5,
    flag: "🧒",
    highlight: "Parent of Grade 4 Student",
    text: "Enrolled my 9-year-old daughter in their Kids English program. Within two months, her spoken English hesitation vanished and her school teachers commended her pronunciation. Fantastic teachers and safe environment in Nasirabad.",
  },
  {
    name: "Rashedul Karim",
    course: "M.Sc. Data Science",
    destination: "University of Amsterdam, Netherlands",
    rating: 5,
    flag: "🇳🇱",
    highlight: "Netherlands Admission & Visa",
    text: "The team at AB STUDY HUB handled my Netherlands application with utmost professionalism. They helped me craft an outstanding Motivation Letter and guided me through the entire MVV visa process flawlessly.",
  },
  {
    name: "Shakil Ahmed",
    course: "German Language Course A1 & A2",
    destination: "Goethe Exam Clear",
    rating: 5,
    flag: "🇩🇪",
    highlight: "German A2 Cleared with High Score",
    text: "The German language mentors at AB STUDY HUB are exceptional. The movie sessions, audio listening drills, and grammar shortcuts made German fun and understandable. Best German coaching in Chattogram!",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "germany-winter-intake",
    title: "Germany Winter Semester Intake (Tuition-Free Universities)",
    badge: "Flagship Intake",
    date: "Applications Open: March – July",
    description:
      "Apply for Bachelor's and Master's programs across top public universities in Germany. Zero tuition fees, English and German-taught programs, and full APS document verification support.",
    benefits: [
      "Zero / Free Tuition Fees at German State Universities",
      "Complete APS document auditing & Uni-Assist application filing",
      "German Language course (A1, A2, B1, B2) in small private batches",
      "Assistance with official Blocked Account & German health insurance",
    ],
  },
  {
    id: "german-private-batches",
    title: "New German Language Private Batch (A1 & A2 Goethe Prep)",
    badge: "10-12 Students Limit",
    date: "Enrollment Open for Upcoming Month",
    description:
      "Intensive Goethe-Institut exam preparation batch. Limited strictly to 10–12 students to guarantee daily speaking drills, active listening practice, and personalized feedback.",
    benefits: [
      "Strictly 10–12 students per batch for maximum individual speaking time",
      "Experienced Goethe-certified trainers in Chattogram studio & online",
      "Free study materials, audio dialogues, and grammar cheat sheets",
      "Weekly Goethe-pattern mock exams with detailed score review",
    ],
  },
  {
    id: "ielts-private-batch-intake",
    title: "IELTS Preparation Masterclass (Target Band 7.5+)",
    badge: "Private Coaching",
    date: "New Batches: Morning, Evening & Weekend",
    description:
      "Cambridge-standard IELTS Academic & General Training course. 1-on-1 Speaking mock interviews, task-by-task Writing evaluations, and test-taking strategies.",
    benefits: [
      "1-on-1 Speaking mock tests conducted under official exam settings",
      "Detailed line-by-line essay corrections for Task 1 and Task 2",
      "Speed reading scanning and skimming techniques for complex passages",
      "Complimentary Cambridge practice books and diagnostic tests",
    ],
  },
  {
    id: "denmark-netherlands-drive",
    title: "Denmark & Netherlands European Higher Education Admissions",
    badge: "European Work Rights",
    date: "Autumn & Spring Sessions",
    description:
      "Explore prestigious Scandinavian and Dutch degree programs. Includes Danish language integration, scholarship mapping, and post-study work authorization guidance.",
    benefits: [
      "Danish Language classes available at AB STUDY HUB Chattogram",
      "1-Year Zoekjaar orientation visa support for Dutch graduates",
      "Post-study job seeker visa guidance in Denmark and the EU",
      "Zero profile assessment fees and transparent documentation",
    ],
  },
  {
    id: "kids-spoken-english-batch",
    title: "Kids English & Junior Fluency Program (Ages 5–14)",
    badge: "Weekend & After-School",
    date: "New Term Enrollment Active",
    description:
      "Joyful language foundation for young learners. Phonics, storytelling, vocabulary building, and conversational confidence in our comfortable Nasirabad classrooms.",
    benefits: [
      "Phonics-based pronunciation and reading development",
      "Storytelling, picture descriptions, and public speaking games",
      "Friendly mentors and supportive classroom atmosphere",
      "Regular progress updates and parent consultation sessions",
    ],
  },
];
