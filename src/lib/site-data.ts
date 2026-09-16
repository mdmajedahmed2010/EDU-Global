/**
 * KUSHTIA IELTS CARE — Official Verified Brand Data & Knowledge Base
 *
 * Verified from:
 *  - Official Facebook Page: https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/
 *  - Official Brand Assets:
 *      * Logo: logo.jpg (4 Orange droplets in 2x2 grid, bold navy wordmark 'Kushtia IELTS Care')
 *      * Banner: banner.png ('Your Trusted Partner in IELTS Success!', 'a great place to learn',
 *          real classroom, computer audio lab & female students with branded lanyards)
 *  - Headquarters: 169/4, Mahatab Uddin Road (in front of Kashem Clinic), Old Kataikhana More, Kushtia - 7000, Bangladesh.
 *  - Core Slogans / Mottos:
 *      * 'Your Trusted Partner in IELTS Success!'
 *      * 'a great place to learn'
 *  - Core Offerings:
 *      * IELTS Preparation (Academic & General Training, Band 7.5+ Target)
 *      * Computer-Based & Offline Premium Mock Tests (300 BDT per test)
 *      * Spoken English & Communication Fluency
 *      * Kids' English & Phonics Foundation (Ages 5–14)
 *      * Study Abroad & Student Visa Guidance (Portugal, UK, Czech Republic, Canada, Germany, USA, Australia, Europe)
 *      * 100% Free Profile Assessment & Counseling
 *  - Hotlines: 01715-052885 (Call / WhatsApp) · 01805-954731
 *  - Official Email: kushtiaieltscare@gmail.com
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
  name: "Kushtia IELTS Care",
  shortName: "Kushtia IELTS Care",
  altName: "Kushtia IELTS Care",
  acronym: "KIC",
  legalName: "Kushtia IELTS Care — Language Training & Study Abroad Consultancy",
  nativeName: "কুষ্টিয়া আইইএলটিএস কেয়ার",
  slogan: "Your Trusted Partner in IELTS Success!",
  motto: "a great place to learn",
  secondaryMotto: "Your Trusted Partner in IELTS Success!",
  bengaliHeadline: "কুষ্টিয়ায় IELTS প্রস্তুতি, স্পোকেন ইংলিশ এবং স্টাডি অ্যাব্রড-এর বিশ্বস্ত প্রতিষ্ঠান !",
  bengaliSubheadline:
    "আইইএলটিএস কেয়ার: অভিজ্ঞ ইন্সট্রাক্টর, আধুনিক কম্পিউটার ল্যাব, মাত্র ৩০০ টাকায় প্রিমিয়াম মক টেস্ট, স্পোকেন ইংলিশ, কিডস ইংলিশ এবং পর্তুগাল ও ইউরোপ সহ গ্লোবাল স্টুডেন্ট ভিসা সহায়তা।",
  philosophy: "A GREAT PLACE TO LEARN • SMALL BATCH CARE • 300 BDT MOCK TESTS • ETHICAL STUDY ABROAD GUIDANCE",
  tagline:
    "Premier IELTS Preparation, Computer-Based Mock Tests, Spoken English, Kids English & Higher Education Abroad in Kushtia — 169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia.",
  bio: "Welcome to Kushtia IELTS Care! Your trusted partner for IELTS, Spoken English, Computer-Based Mock Tests, and Study Abroad Consultancy in Kushtia. 🎓✈️🗣️",
  category: "IELTS Training Centre · English Language Academy · Study Abroad Consultancy",
  origin: "Kushtia, Bangladesh",
  presence: "169/4, Mahatab Uddin Road (in front of Kashem Clinic), Old Kataikhana More, Kushtia, Bangladesh",
  email: "kushtiaieltscare@gmail.com",
  contactEmail: "kushtiaieltscare@gmail.com",
  careerEmail: "kushtiaieltscare@gmail.com",
  altEmail: "kushtiaieltscare@gmail.com",
  emails: ["kushtiaieltscare@gmail.com"],
  phones: ["01715-052885", "01805-954731"],
  whatsapp: "+8801715052885",
  whatsappFormatted: "01715-052885",
  secondaryPhone: "01805-954731",
  hours: "Saturday – Thursday: 9:00 AM – 8:00 PM (Friday Open for Mock Tests & Scheduled Counseling)",
  established: "2024",
  signOff: "Kushtia IELTS Care · a great place to learn",
  mockTestPrice: "300 BDT",

  offices: {
    headquarters: {
      name: "Kushtia IELTS Care (Main Campus)",
      address: "169/4, Mahatab Uddin Road (in front of Kashem Clinic), Old Kataikhana More, Kushtia - 7000, Bangladesh",
      full: "169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia, Bangladesh",
      short: "Old Kataikhana More, Kushtia",
      phone: "01715-052885",
      phones: ["01715-052885", "01805-954731"],
      whatsapp: "+8801715052885",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=Old+Kataikhana+More+Kushtia+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Old+Kataikhana+More+Kushtia+Bangladesh&z=16&hl=en&output=embed",
    },
    kushtia: {
      name: "Kushtia IELTS Care Campus",
      address: "169/4, Mahatab Uddin Road (in front of Kashem Clinic), Old Kataikhana More, Kushtia - 7000, Bangladesh",
      full: "169/4, Mahatab Uddin Road, Old Kataikhana More, Kushtia, Bangladesh",
      short: "Old Kataikhana More, Kushtia",
      phone: "01715-052885",
      phones: ["01715-052885", "01805-954731"],
      whatsapp: "+8801715052885",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=Old+Kataikhana+More+Kushtia+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Old+Kataikhana+More+Kushtia+Bangladesh&z=16&hl=en&output=embed",
    },
    international: {
      name: "Kushtia IELTS Care Global Study Abroad Desk",
      address: "Portugal, UK & European University Advisory Desk",
      full: "European & Global Higher Education Liaison",
      short: "Europe & Global Desk",
      phone: "01715-052885",
      phones: ["01715-052885", "01805-954731"],
      whatsapp: "+8801715052885",
      hours: "Saturday – Thursday: 9:00 AM – 8:00 PM",
      mapsUrl: "https://maps.google.com/?q=Old+Kataikhana+More+Kushtia+Bangladesh",
      mapsEmbed: "https://maps.google.com/maps?q=Old+Kataikhana+More+Kushtia+Bangladesh&z=16&hl=en&output=embed",
    },
  },

  campusOffice: {
    title: "Kushtia IELTS Care Campus",
    building: "169/4, Mahatab Uddin Road",
    floor: "Dedicated Language Labs & Consultation Suites",
    area: "In front of Kashem Clinic, Old Kataikhana More",
    city: "Kushtia",
    postalCode: "7000",
    country: "Bangladesh",
    full: "169/4, Mahatab Uddin Road, in front of Kashem Clinic, Old Kataikhana More, Kushtia - 7000, Bangladesh",
    hotlines: ["01715-052885", "01805-954731"],
    whatsapp: "+8801715052885",
    whatsappDisplay: "01715-052885",
    email: "kushtiaieltscare@gmail.com",
    mapsUrl: "https://maps.google.com/?q=Old+Kataikhana+More+Kushtia+Bangladesh",
    mapsEmbed: "https://maps.google.com/maps?q=Old+Kataikhana+More+Kushtia+Bangladesh&z=16&hl=en&output=embed",
  },

  address: {
    building: "169/4, Mahatab Uddin Road (in front of Kashem Clinic)",
    street: "Mahatab Uddin Road",
    area: "Old Kataikhana More (পুরাতন কসাইখানা মোড়)",
    city: "Kushtia",
    postalCode: "7000",
    country: "Bangladesh",
    full: "169/4, Mahatab Uddin Road, in front of Kashem Clinic, Old Kataikhana More, Kushtia - 7000, Bangladesh",
    networkNote: "Modern Computer Lab · Library & Audio Facilities · Old Kataikhana More, Kushtia",
  },

  geo: { lat: 23.9015, lng: 89.1205 },
  mapsUrl: "https://maps.google.com/?q=Old+Kataikhana+More+Kushtia+Bangladesh",
  mapsEmbed: "https://maps.google.com/maps?q=Old+Kataikhana+More+Kushtia+Bangladesh&z=16&hl=en&output=embed",

  social: {
    facebook: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    facebookPageName: "Kushtia IELTS Care",
    facebookVideos: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    facebookReels: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    instagram: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    linkedin: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    youtube: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    messenger: "https://m.me/61556387490632",
    whatsapp: "https://wa.me/8801715052885",
  },

  featuredReels: [
    {
      id: "reel-1",
      badge: "🎧 Computer-Based Mock Test",
      title: "কম্পিউটার-বেজড আইইএলটিএস মক টেস্ট সেশন",
      desc: "কুষ্টিয়া আইইএলটিএস কেয়ার ল্যাবে আসল পরীক্ষার পরিবেশে হেডফোন অডিও ড্রিল ও রিয়েল-টাইম টাইমার টেস্ট। ফি মাত্র ৩০০ টাকা।",
      embedSrc: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FKushtia-IELTS-Care-61556387490632%2F&tabs=timeline&width=380&height=476&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
      videoUrl: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    },
    {
      id: "reel-2",
      badge: "🎓 IELTS Academic Batch",
      title: "নতুন আইইএলটিএস ব্যাচ ও স্পিকিং প্র্যাকটিস",
      desc: "ছোট ব্যাচ সাইজ, অভিজ্ঞ মেন্টর ও ওয়ান-টু-ওয়ান স্পিকিং এসেসমেন্ট এর মাধ্যমে কাঙ্ক্ষিত ব্যান্ড স্কোর ৭.৫+ অর্জনের নিশ্চয়তা।",
      embedSrc: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FKushtia-IELTS-Care-61556387490632%2F&tabs=timeline&width=380&height=476&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
      videoUrl: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    },
    {
      id: "reel-3",
      badge: "🇵🇹 Portugal & Study Abroad",
      title: "পর্তুগাল ও ইউরোপে উচ্চশিক্ষা ভিসা সেমিনার",
      desc: "পর্তুগালে ব্যাচেলর, মাস্টার্স ও পিএইচডি অ্যাডমিশন, ফাইল প্রসেসিং এবং স্টুডেন্ট ভিসা সহায়তার বিস্তারিত তথ্য।",
      embedSrc: "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fp%2FKushtia-IELTS-Care-61556387490632%2F&tabs=timeline&width=380&height=476&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId",
      videoUrl: "https://www.facebook.com/p/Kushtia-IELTS-Care-61556387490632/",
    },
  ],

  stats: [
    { value: "300 BDT", label: "IELTS Mock Test Fee", badge: "Computer & Paper" },
    { value: "Band 7.5+", label: "Target IELTS Score", badge: "Academic & General" },
    { value: "30+", label: "Successful Batches", badge: "Continuous Intakes" },
    { value: "Kushtia", label: "Kataikhana More Campus", badge: "Mahatab Uddin Rd" },
    { value: "100%", label: "Individual Student Care", badge: "Small Batch Size" },
    { value: "Portugal & Global", label: "Study Abroad Destinations", badge: "Full Visa Support" },
  ],

  accreditations: [
    {
      name: "Experienced & Caring Instructors",
      title: "Dedicated IELTS & Spoken English Mentors",
      desc: "Experienced trainers dedicated to clearing doubts from basic to advanced levels, focusing on individual student weaknesses.",
    },
    {
      name: "Modern Computer-Based Mock Lab",
      title: "Individual Headset Audio Stations",
      desc: "Modern computer lab equipped with high-fidelity headphones simulating actual British Council and IDP examination environments.",
    },
    {
      name: "Affordable 300 BDT Premium Mocks",
      title: "In-Depth Evaluation & Scoring",
      desc: "Full-length computer-based or paper-based mock exams for just 300 BDT with detailed scorecards and personalized feedback.",
    },
    {
      name: "Ethical Study Abroad Guidance",
      title: "Portugal, UK & European Admissions",
      desc: "Genuine university shortlisting, application support, scholarship advice, and transparent student visa documentation.",
    },
  ],

  verifiedKeyPartners: [
    {
      name: "Leading Universities & Polytechnics in Portugal",
      country: "Portugal",
      note: "Affordable European degrees, post-study residency pathways, and English-taught programs in Lisbon, Porto & Coimbra",
    },
    {
      name: "Institutions in Czech Republic & Central Europe",
      country: "Czech Republic & Europe",
      note: "English-medium Bachelor and Master programs with European Schengen mobility",
    },
    {
      name: "Premier Universities in United Kingdom",
      country: "United Kingdom",
      note: "1-Year Master degrees, 2-Year Graduate Route PSW, and Cambridge-aligned IELTS preparation",
    },
    {
      name: "Accredited Colleges & Universities in Canada",
      country: "Canada",
      note: "Public DLI colleges, paid co-op programs, and Post-Graduation Work Permits (PGWP)",
    },
    {
      name: "Public Universities in Germany",
      country: "Germany",
      note: "Tuition-free public universities, 18-month Job Seeker Visa, and Ausbildung guidance",
    },
    {
      name: "Top Universities in USA & Australia",
      country: "USA & Australia",
      note: "Comprehensive visa processing and high-tier academic placement",
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
        label: "IELTS Preparation (Academic & General) 🇬🇧",
        to: "/services",
        badge: "Band 7.5+ Target",
      },
      {
        label: "Computer-Based IELTS Mock Test (300 BDT) 🎧",
        to: "/services",
        badge: "Just 300 BDT",
      },
      {
        label: "Spoken English & Fluency Program 🗣️",
        to: "/services",
        badge: "Basic to Advance",
      },
      {
        label: "Kids English & Phonics (Ages 5–14) 🧒",
        to: "/services",
        badge: "Junior Fluency",
      },
      {
        label: "English Version Academic Support (Class 3-10) 📚",
        to: "/services",
        badge: "Curriculum Support",
      },
      {
        label: "Free Assessment & Consultation 📝",
        to: "/services",
        badge: "100% Free",
      },
    ],
  },
  {
    label: "Study Abroad",
    to: "/destinations",
    children: [
      {
        label: "Study in Portugal 🇵🇹",
        to: "/study-in-{$country}",
        params: { country: "portugal" },
        badge: "Featured European Track",
      },
      {
        label: "Study in United Kingdom 🇬🇧",
        to: "/study-in-{$country}",
        params: { country: "uk" },
        badge: "1-Yr Masters / PSW",
      },
      {
        label: "Study in Czech Republic 🇨🇿",
        to: "/study-in-{$country}",
        params: { country: "czech-republic" },
        badge: "Schengen Europe",
      },
      {
        label: "Study in Canada 🇨🇦",
        to: "/study-in-{$country}",
        params: { country: "canada" },
        badge: "PGWP & Co-op",
      },
      {
        label: "Study in Germany 🇩🇪",
        to: "/study-in-{$country}",
        params: { country: "germany" },
        badge: "Tuition-Free",
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
      { label: "View All Destinations", to: "/destinations", badge: "Worldwide" },
    ],
  },
  {
    label: "Services",
    to: "/services",
    children: [
      { label: "IELTS Academic & General", to: "/services", badge: "Small Batches" },
      { label: "Computer Mock Test (300 BDT)", to: "/services", badge: "Headphones & Timed" },
      { label: "Spoken English & Fluency", to: "/services", badge: "Confidence Building" },
      { label: "Kids English & Phonics", to: "/services", badge: "Ages 5-14" },
      { label: "Study Abroad Visa Processing", to: "/services", badge: "Portugal & Global" },
      { label: "Free Profile Assessment", to: "/services", badge: "Zero Charge" },
    ],
  },
  { label: "Upcoming Batches", to: "/offers" },
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
    slug: "portugal",
    name: "Portugal",
    flag: "🇵🇹",
    region: "Europe (Schengen Area)",
    tagline: "Affordable tuition, vibrant European culture, English-taught programs & clear post-study pathways",
    intro:
      "Portugal is prominently featured at Kushtia IELTS Care for students seeking high quality, cost-effective European higher education. With low tuition fees, affordable living costs, and Schengen mobility across 29 European countries, Portugal is an ideal gateway for Bachelor, Master, and PhD degrees.",
    why: [
      "Affordable tuition fees compared to traditional Western destinations (€1,500 – €4,000 / year)",
      "Multiple public and polytechnic universities offering English-taught degree programs",
      "Legal part-time work rights up to 20 hours per week during semesters and full-time during holidays",
      "Unrestricted travel freedom across all 29 European Schengen member states",
      "Post-study job seeker visa and pathways to long-term residency in Europe",
      "Safe, welcoming, warm climate and student-friendly lifestyle in Lisbon, Porto, Coimbra, and Braga",
    ],
    popularFields: [
      "Information Technology & Computer Engineering",
      "Business Administration & Global Management",
      "Tourism, Hospitality & Culinary Arts",
      "Renewable Energy & Environmental Sciences",
      "Civil & Mechanical Engineering",
    ],
    avgTuition: "€1,500 – €4,000 / year (Public & Polytechnic Universities)",
    avgLiving: "€450 – €700 / month (Very affordable living costs in Portugal)",
    pswv: "1-Year Post-Study Job Seeker Visa with extension for employment",
    intakes: "September/October (Fall - Main Intake) & February (Spring)",
    scholarships: "Erasmus+ Grants, Government Merit Reductions & Institutional Waivers",
    topUnis: [
      "University of Lisbon",
      "University of Porto",
      "University of Coimbra",
      "Nova University Lisbon",
      "Polytechnic Institute of Porto (IPP)",
      "University of Aveiro",
    ],
    withoutIelts: true,
    featured: true,
    specialHighlight: "Featured European Track · High Visa Success",
  },
  {
    slug: "uk",
    name: "United Kingdom",
    flag: "🇬🇧",
    region: "Europe",
    tagline: "Fast 1-year Master degrees, 2-year Graduate Route PSW & Cambridge-aligned IELTS preparation",
    intro:
      "With Kushtia IELTS Care guidance and intensive Band 7.5+ IELTS preparation, students access prestigious UK universities with accelerated 1-year Master programs and 2-year post-study work permits.",
    why: [
      "1-Year intensive Master degrees significantly saving overall tuition and living expenses",
      "2-Year Graduate Route Post-Study Work Visa (PSW) upon graduation",
      "Comprehensive IELTS preparation (Target Band 7.5+) right at our Kushtia campus",
      "International merit scholarships ranging from £1,500 to £5,000",
    ],
    popularFields: [
      "Computer Science & Cyber Security",
      "Business Administration & Global MBA",
      "Public Health & Healthcare Management",
      "Data Analytics & Finance",
    ],
    avgTuition: "£11,000 – £16,000 / year (after partner scholarships)",
    avgLiving: "£9,207 – £12,000 / year",
    pswv: "2 Years (Graduate Route Visa)",
    intakes: "January, May & September (Key Intakes)",
    scholarships: "£1,500 – £5,000 International Merit Bursaries",
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
    slug: "czech-republic",
    name: "Czech Republic",
    flag: "🇨🇿",
    region: "Central Europe (Schengen)",
    tagline: "Historic European education, affordable living & English-taught programs in Prague and Brno",
    intro:
      "The Czech Republic is a popular European study destination processed by Kushtia IELTS Care, offering affordable English-taught degrees at historic universities, low living expenses, and Schengen visa privileges.",
    why: [
      "Historic European universities renowned for medicine, engineering, and business",
      "Extremely affordable living costs (€400 – €650 / month) for international students",
      "Student visa holders have unrestricted access to the entire European Schengen zone",
      "Post-study work rights and growing multinational tech and manufacturing sectors",
    ],
    popularFields: [
      "Computer Science & Informatics",
      "General Medicine & Dentistry",
      "Business Economics & Finance",
      "Automotive & Industrial Engineering",
    ],
    avgTuition: "€2,500 – €6,000 / year for English-taught degrees",
    avgLiving: "€400 – €650 / month",
    pswv: "9-Month Post-Study Job Seeker Residence Permit",
    intakes: "September/October (Main Intake) & February",
    scholarships: "Government Scholarships for Developing Countries & University Grants",
    topUnis: [
      "Charles University, Prague",
      "Czech Technical University in Prague (CTU)",
      "Masaryk University, Brno",
      "Czech University of Life Sciences Prague (CZU)",
    ],
    withoutIelts: false,
    featured: true,
    specialHighlight: "Central Europe · Affordable Schengen Visa",
  },
  {
    slug: "germany",
    name: "Germany",
    flag: "🇩🇪",
    region: "Europe (Schengen)",
    tagline: "Tuition-free public universities, 18-month job seeker visa & world-class engineering",
    intro:
      "Germany offers tuition-free higher education at public universities. Kushtia IELTS Care assists students with admissions, blocked accounts, and visa documentation.",
    why: [
      "Zero tuition fees at public universities across Germany for Bachelor and Master degrees",
      "18-month Post-Study Work Residence Permit (Job Seeker Visa) for all university graduates",
      "Part-time work rights up to 20 hours/week during semesters and 40 hours/week during vacations",
      "Unrestricted travel across all 29 European Schengen member states",
    ],
    popularFields: [
      "Computer Science & Artificial Intelligence",
      "Mechanical, Automotive & Industrial Engineering",
      "Data Science & International Business",
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
    specialHighlight: "Tuition-Free Public Universities",
  },
  {
    slug: "canada",
    name: "Canada",
    flag: "🇨🇦",
    region: "North America",
    tagline: "Reputed public DLIs, paid co-op work terms & up to 3-year Post-Graduation Work Permit (PGWP)",
    intro:
      "Canada remains a prime global education destination offering hands-on college diplomas, bachelor degrees, and post-graduation work opportunities.",
    why: [
      "Accredited Designated Learning Institutions (DLIs) with paid co-op internships",
      "Up to 3-Year Post-Graduation Work Permit (PGWP) for eligible graduates",
      "Safe, multicultural cities with high quality of life and student support",
    ],
    popularFields: [
      "Software Engineering & Cloud Computing",
      "Business Analytics & Project Management",
      "Health Administration & Nursing",
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
    ],
    popularFields: [
      "Information Technology & Cybersecurity",
      "Accounting, Finance & Business Analytics",
      "Nursing & Public Health",
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
];

export type Course = {
  slug: string;
  title: string;
  subtitle: string;
  category: "ielts" | "mock-test" | "spoken" | "kids" | "study-abroad" | "documentation";
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
    subtitle: "From Basic to Advanced — Target Band 7.5+ Strategy with Cambridge Curriculum",
    category: "ielts",
    icon: "🇬🇧",
    badge: "Flagship Program",
    duration: "2 to 3 Months Intensive Coaching",
    classSchedule: "Morning, Evening & Weekend Batches (2 Hours Daily, 3-5 Days a Week)",
    batchType: "Small Interactive Batch at Old Kataikhana More Campus",
    targetOutcome: "Target Band 7.0 – 8.0+ in Academic or General Training",
    description:
      "Kushtia IELTS Care's premier IELTS training program in Kushtia covers all 4 modules (Listening, Reading, Writing, Speaking). Tailored with small batch sizes, individual doubt-clearing sessions, authentic Cambridge materials, and full-length weekly mock tests to guarantee score excellence.",
    highlights: [
      "Complete mastery of all 4 modules: Listening, Reading, Writing, and Speaking",
      "Small batch size for personalized attention and individual student care",
      "In-depth Task 1 & Task 2 writing evaluation with Cambridge band descriptor analysis",
      "One-on-one speaking interview simulations with actionable pronunciation feedback",
      "Free diagnostic test and study materials provided",
      "Regular full-length mock exams simulating real exam conditions",
    ],
    modules: [
      {
        title: "Listening Module Mastery",
        desc: "Keyword spotting, predictive listening techniques, multiple choice strategies, and diverse international accents in our audio lab.",
      },
      {
        title: "Reading Speed & Precision",
        desc: "Skimming and scanning techniques, True/False/Not Given, Heading Matching, and rigorous 60-minute time management.",
      },
      {
        title: "Writing Task 1 & Task 2",
        desc: "Data interpretation for charts/graphs, formal letters, and structured essay writing with cohesive devices and advanced vocabulary.",
      },
      {
        title: "Speaking Confidence & Fluency",
        desc: "Overcoming hesitation, expanding Part 2 cue cards, handling Part 3 abstract discussions, and intonation improvement.",
      },
      {
        title: "Full-Length Timed Mock Tests",
        desc: "Authentic exam simulations followed by personalized diagnostic score breakdowns.",
      },
    ],
  },
  {
    slug: "computer-based-mock-test",
    title: "Computer-Based & Offline IELTS Mock Test",
    subtitle: "Official Exam Simulation with Individual Headsets — Just 300 BDT per Test",
    category: "mock-test",
    icon: "🎧",
    badge: "Just 300 BDT",
    duration: "Single Session (2 Hours 45 Mins Full Simulation)",
    classSchedule: "Available Daily & on Weekends (Morning & Afternoon Slots)",
    batchType: "Individual Computer Audio Station at Kushtia Campus",
    targetOutcome: "Realistic Band Score Diagnostic & Detailed Error Analysis",
    description:
      "Evaluate your real IELTS exam readiness at Kushtia IELTS Care for just 300 BDT. Our state-of-the-art computer lab features individual audio stations, high-fidelity noise-canceling headphones, official software interface, and comprehensive evaluation by experienced mentors.",
    highlights: [
      "Only 300 BDT per test — most affordable premium mock test in Kushtia",
      "Computer-Based (CDI) and Paper-Based format options available",
      "High-clarity headphones and private testing workstations",
      "Detailed diagnostic scorecard across all 4 modules delivered promptly",
      "One-on-one speaking interview with an experienced IELTS evaluator",
      "Ideal for final preparation before sitting for the British Council or IDP exam",
    ],
    modules: [
      {
        title: "Listening Test Simulation (30 Mins)",
        desc: "Authentic Cambridge audio tracks through high-definition headphones with official timer.",
      },
      {
        title: "Reading Test Simulation (60 Mins)",
        desc: "3 academic/general passages with timer and on-screen navigation identical to real test.",
      },
      {
        title: "Writing Test Simulation (60 Mins)",
        desc: "Task 1 and Task 2 with on-screen word count and keyboard typing.",
      },
      {
        title: "Face-to-Face Speaking Evaluation (11-14 Mins)",
        desc: "1-on-1 interview with senior mentor covering all 3 speaking parts with rubric feedback.",
      },
    ],
  },
  {
    slug: "spoken-english",
    title: "Spoken English & Communication Fluency",
    subtitle: "Overcome Hesitation, Gain Fluency & Speak English with Confidence",
    category: "spoken",
    icon: "🗣️",
    badge: "Basic to Advance",
    duration: "2 Months Practical Training",
    classSchedule: "Morning, Afternoon & Evening Batches (3 Days a Week)",
    batchType: "Activity-Based Interactive Class",
    targetOutcome: "Natural, Spontaneous & Confident English Speaking",
    description:
      "Designed for college students, job seekers, professionals, and freelancers in Kushtia who know English grammar but struggle to speak fluently. Practice real-world conversations, eliminate stage fright, and master corporate presentations.",
    highlights: [
      "100% English speaking classroom atmosphere to build natural conversation habits",
      "Practical phonetics, pronunciation, and accent reduction exercises",
      "Situational roleplays: job interviews, corporate meetings, social discussions",
      "Vocabulary enrichment with modern idioms, phrases, and conversational connectors",
      "Overcoming speaking anxiety through guided presentations and group debates",
    ],
    modules: [
      {
        title: "Breaking Hesitation & Mindset",
        desc: "Overcoming fear of making mistakes, positive body language, and spontaneous conversation starters.",
      },
      {
        title: "Pronunciation & Phonetics Drills",
        desc: "Correct vowel/consonant articulation, syllable stress, rhythm, and natural sentence intonation.",
      },
      {
        title: "Real-Life Dialogue & Roleplays",
        desc: "Office meetings, job interviews, customer interactions, travel, and casual social conversations.",
      },
      {
        title: "Public Speaking & Presentations",
        desc: "Structuring short talks, impromptu speaking, debates, and delivering ideas persuasively.",
      },
    ],
  },
  {
    slug: "kids-english",
    title: "Kids' English & Phonics Foundation (Ages 5–14)",
    subtitle: "Joyful, Interactive & Foundational English Learning for Children",
    category: "kids",
    icon: "🧒",
    badge: "Junior Fluency",
    duration: "3 Months Foundational Program",
    classSchedule: "Special After-School & Weekend Batches",
    batchType: "Child-Friendly Interactive Learning Batch",
    targetOutcome: "Accurate Pronunciation, Rich Vocabulary & Confident Communication",
    description:
      "A warm, engaging environment for young learners (ages 5 to 14) in Kushtia. Children learn English naturally through phonics, storytelling, cartoon videos, rhymes, and vocabulary games, building solid foundations for future success.",
    highlights: [
      "Age-tailored batches (Junior Group: 5–8 yrs; Senior Group: 9–14 yrs)",
      "Phonics-based reading and correct English pronunciation habits from early childhood",
      "Interactive audio-visual storytelling, illustrated books, and educational games",
      "Building natural confidence in school recitations and daily dialogue",
      "Gentle, patient, and specially trained instructors who make learning joyful",
    ],
    modules: [
      {
        title: "Phonics & Letter Sounds",
        desc: "Sound blending, sight words, and reading illustrated storybooks with correct pronunciation.",
      },
      {
        title: "Everyday Vocabulary & Action Words",
        desc: "Colors, animals, family, school objects, polite social phrases, and descriptive words.",
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
  {
    slug: "study-abroad-counseling",
    title: "Study Abroad Counseling & Visa Processing",
    subtitle: "Portugal, UK, Czech Republic, Canada & European Student Visas",
    category: "study-abroad",
    icon: "✈️",
    badge: "Portugal & Global",
    duration: "Intake Specific (Fall, Winter & Spring Intakes)",
    classSchedule: "Free One-on-One Counseling & Document Review",
    batchType: "Personalized Case Guidance",
    targetOutcome: "Secured Admission Offer & Student Visa Approval",
    description:
      "Complete, transparent guidance for higher education abroad. Specializing in Portugal (prominent European pathway), Czech Republic, United Kingdom, Canada, and Germany. We assist in university shortlisting, application filing, SOP writing, and embassy visa preparation.",
    highlights: [
      "Specialized focus on Portugal admissions, public universities, and affordable European study",
      "Transparent documentation verification and SOP / Statement of Purpose drafting",
      "Guidance for bank solvency statements, sponsor papers, and police clearance certificates",
      "One-on-one consular visa interview preparation",
      "Pre-departure orientation and accommodation guidance",
      "100% free profile assessment with zero hidden charges",
    ],
    modules: [
      {
        title: "Profile Assessment & University Shortlisting",
        desc: "Matching student academic qualifications, budget, and career goals with accredited institutions.",
      },
      {
        title: "Application Lodgement & Offer Letter",
        desc: "Compiling academic dossiers and securing confirmed admission letters from partner universities.",
      },
      {
        title: "SOP & Financial Dossier Formulation",
        desc: "Drafting convincing Statements of Purpose and structuring compliant financial sponsorship papers.",
      },
      {
        title: "Embassy Submission & Consular Interview Prep",
        desc: "Full visa file packaging and realistic question-and-answer mock interview coaching.",
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
    id: "ielts-preparation-course",
    title: "IELTS Preparation (Academic & General)",
    subtitle: "Cambridge-Aligned Syllabus & Band 7.5+ Strategy in Kushtia",
    icon: "🇬🇧",
    badge: "Core Program",
    category: "language-courses",
    overview:
      "Kushtia IELTS Care provides intensive IELTS coaching in Old Kataikhana More, Kushtia. Our courses cover all 4 modules (Listening, Reading, Writing, Speaking) with small batch sizes, experienced trainers, and weekly full-length mock tests.",
    benefits: [
      "Comprehensive syllabus covering both Academic and General Training formats",
      "Small batch size ensuring individual speaking practice and daily feedback",
      "Complete study materials, Cambridge practice tests, and audio resources provided",
      "Experienced mentors focused on individual student improvement",
    ],
    deliverables: [
      "Free diagnostic assessment test",
      "Full course curriculum with Task 1 & Task 2 writing evaluations",
      "One-on-one speaking interview evaluations with scorecards",
      "Course Completion Certificate",
    ],
  },
  {
    id: "computer-based-mock-tests",
    title: "Computer-Based & Paper IELTS Mock Test",
    subtitle: "Real Exam Simulation with Headsets for Just 300 BDT",
    icon: "🎧",
    badge: "300 BDT per Test",
    category: "language-courses",
    overview:
      "Sit for an authentic IELTS mock test in our modern computer lab equipped with high-clarity headsets and official software interface for only 300 BDT. Receive detailed diagnostic scorecards and expert feedback.",
    benefits: [
      "Authentic exam environment reducing real test-day anxiety",
      "Individual audio workstation with clear listening headsets",
      "Official timer and test interface for computer-delivered IELTS practice",
      "Thorough speaking evaluation by an experienced instructor",
    ],
    deliverables: [
      "Comprehensive module-by-module score report",
      "Detailed writing feedback with error analysis",
      "One-on-one speaking rubric feedback",
      "Recommendations for target band improvement",
    ],
  },
  {
    id: "spoken-english-fluency",
    title: "Spoken English & Communication Fluency",
    subtitle: "Practical Daily Conversation, Pronunciation & Job Interview Skills",
    icon: "🗣️",
    badge: "Basic to Advance",
    category: "language-courses",
    overview:
      "Our Spoken English program creates an engaging, hesitation-free environment with group discussions, situational roleplays, public speaking, and accent refinement for students, job seekers, and professionals.",
    benefits: [
      "100% English speaking environment with supportive instructors",
      "Practical phonetics, pronunciation correction, and accent awareness",
      "Real-world roleplays for job interviews, office meetings, and travel",
      "Vocabulary enrichment with common idioms and conversational phrases",
    ],
    deliverables: [
      "Free fluency assessment",
      "Daily conversational practice sessions",
      "Mock job interview simulations",
      "Course Completion Certificate",
    ],
  },
  {
    id: "kids-english-phonics",
    title: "Kids' English & Phonics (Ages 5–14)",
    subtitle: "Child-Friendly Foundational English Learning",
    icon: "🧒",
    badge: "Ages 5–14",
    category: "language-courses",
    overview:
      "A fun, interactive English learning program for children in Kushtia. Children build strong pronunciation and reading habits through phonics, cartoon storytelling, vocabulary games, and rhymes.",
    benefits: [
      "Interactive multimedia classrooms with engaging visuals",
      "Phonics-based reading and natural pronunciation from early childhood",
      "Small groups with caring and patient teachers",
      "Regular progress feedback for parents and guardians",
    ],
    deliverables: [
      "Illustrated study worksheets and reading material",
      "Phonics audio-visual practice",
      "Story recitation and presentation activities",
      "Certificate of Achievement",
    ],
  },
  {
    id: "study-in-portugal-europe",
    title: "Study Abroad Consultancy (Portugal & Europe)",
    subtitle: "Affordable Tuition, English-Taught Degrees & Student Visa Guidance",
    icon: "✈️",
    badge: "Portugal & Schengen",
    category: "study-abroad",
    overview:
      "Kushtia IELTS Care provides complete student visa assistance for Portugal, Czech Republic, UK, Canada, Germany, USA, and Australia. We assist with university matching, application processing, SOP writing, and visa filing.",
    benefits: [
      "Specialized track for Portugal universities with affordable tuition fees",
      "Complete assistance with application forms, admission letters, and SOPs",
      "Bank solvency guidance and document verification",
      "Consular interview preparation and mock interviews",
    ],
    deliverables: [
      "Free academic profile assessment",
      "Target institution selection list",
      "SOP drafting and document review checklist",
      "Visa application dossier preparation",
    ],
    intakeNote: "Key Intakes: September/October (Fall) & January/February (Spring)",
  },
  {
    id: "free-profile-assessment",
    title: "100% Free Profile Assessment & Counseling",
    subtitle: "Zero Consultation Fee · Transparent University & Course Strategy",
    icon: "📝",
    badge: "100% Free",
    category: "free-file",
    overview:
      "Visit our campus at Old Kataikhana More, Kushtia or connect on WhatsApp for a completely free profile assessment. Our counselors evaluate your academic transcripts, budget, and language goals.",
    benefits: [
      "Completely free counseling with zero upfront file assessment charges",
      "Realistic evaluation of IELTS target score and study abroad eligibility",
      "Transparent breakdown of course fees and university expenses",
      "Personalized step-by-step roadmap to achieve your goals",
    ],
    deliverables: [
      "Personalized Language & Study Roadmap",
      "Estimated timeline and cost breakdown",
      "Recommended batch schedule at Kushtia IELTS Care",
    ],
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Free Profile Evaluation & Counseling",
    bengaliTitle: "ফ্রি প্রোফাইল মূল্যায়ন ও সঠিক গাইডলাইন",
    desc: "Visit our Old Kataikhana More campus in Kushtia or contact us online. We assess your English proficiency level, target goals, and study abroad aspirations.",
  },
  {
    step: "02",
    title: "Enrollment in IELTS / English Batch",
    bengaliTitle: "আইইএলটিএস বা স্পোকেন ইংলিশ ব্যাচে ভর্তি",
    desc: "Join our small interactive batches with experienced mentors, Cambridge curriculum, audio-visual drills, and personalized student care.",
  },
  {
    step: "03",
    title: "Computer Mock Tests (300 BDT)",
    bengaliTitle: "কম্পিউটার-বেজড মক টেস্ট ও স্কোর অ্যানালাইসিস",
    desc: "Take affordable 300 BDT full-length computer-based or paper mock tests in our modern lab with headsets to diagnose weaknesses and boost confidence.",
  },
  {
    step: "04",
    title: "University Admission & Documentation",
    bengaliTitle: "বিশ্ববিদ্যালয়ে আবেদন ও ফাইল প্রসেসিং",
    desc: "For study abroad aspirants, our team submits applications to partner institutions in Portugal, UK, and Europe, assisting with SOP and documentation.",
  },
  {
    step: "05",
    title: "Visa Success & Final Departure",
    bengaliTitle: "ভিসা প্রাপ্তি ও সফল যাত্রা",
    desc: "Prepare for consular interviews with 1-on-1 mock sessions, celebrate your visa approval, and receive thorough pre-departure travel briefings.",
  },
];

export const testimonials = [
  {
    name: "Md. Ashraful Islam",
    destination: "IELTS Academic (Band 7.5)",
    quote:
      "কুষ্টিয়া আইইএলটিএস কেয়ার-এর নিয়মিত ক্লাস ও ওয়ান-টু-ওয়ান স্পিকিং ফিডব্যাকের কারণে আমি প্রথমবারেই ওভারঅল ব্যান্ড ৭.৫ অর্জন করেছি। এদের ৩০০ টাকার কম্পিউটার মক টেস্টগুলো আসল পরীক্ষার ভয় পুরোপুরি কাটিয়ে দিয়েছিল!",
    course: "IELTS Academic Batch",
    batch: "Kushtia Campus",
    badge: "Scored Band 7.5 🇬🇧",
  },
  {
    name: "Nusrat Jahan",
    destination: "Study in Portugal (Polytechnic of Porto)",
    quote:
      "পর্তুগালে উচ্চশিক্ষার জন্য সঠিক গাইডলাইন পাওয়া কুষ্টিয়ায় কঠিন ছিল। কুষ্টিয়া আইইএলটিএস কেয়ার টিম আমাকে সঠিক সাবজেক্ট সিলেকশন, অ্যাপ্লিকেশন ও ভিসা ফাইলে শতভাগ সহযোগিতা করেছে।",
    course: "IELTS + Study in Portugal",
    batch: "Kushtia Campus",
    badge: "Portugal Visa Approved 🇵🇹",
  },
  {
    name: "Rakibul Hasan",
    destination: "Spoken English & Fluency",
    quote:
      "ইংরেজিতে কথা বলতে আগে খুব ভয় পেতাম। স্পোকেন ইংলিশ কোর্সে স্যারদের ফ্রেন্ডলি অ্যাটিচ্যুড এবং ক্লাসে নিয়মিত রোলপ্লে ও প্রেজেন্টেশনের কারণে এখন আমি আত্মবিশ্বাসের সাথে ইংরেজিতে কথা বলতে পারি।",
    course: "Spoken English Program",
    batch: "Evening Batch",
    badge: "Confident Speaker",
  },
  {
    name: "Mst. Sultana Razia",
    destination: "Parent of Kids English Student",
    quote:
      "আমার ছেলের বয়স ৯ বছর। কুষ্টিয়া আইইএলটিএস কেয়ার-এর কিডস ইংলিশ ক্লাসে ভর্তি করার পর ওর ইংরেজি রিডিং ও সঠিক উচ্চারণে দারুণ পরিবর্তন এসেছে। শিক্ষকরা খুবই যত্নশীল ও আন্তরিক।",
    course: "Kids English & Phonics",
    batch: "Junior Batch",
    badge: "Satisfied Guardian 🧒",
  },
];

export const faqs = [
  {
    q: "Where is Kushtia IELTS Care located?",
    a: "Kushtia IELTS Care is located at 169/4, Mahatab Uddin Road, in front of Kashem Clinic, Old Kataikhana More (পুরাতন কসাইখানা মোড়), Kushtia - 7000, Bangladesh.",
  },
  {
    q: "How much is the IELTS Mock Test fee at Kushtia IELTS Care?",
    a: "Our premium Computer-Based and Paper-Based IELTS Mock Tests cost only 300 BDT per test! This includes a complete 4-module test with individual headsets, on-screen timer, and personalized speaking evaluation.",
  },
  {
    q: "What courses are offered by Kushtia IELTS Care?",
    a: "We offer IELTS Preparation (Academic & General), Computer-Based & Paper Mock Tests, Spoken English & Fluency Programs, Kids English (Ages 5–14), English Version Academic Coaching (Class 3-10), and Study Abroad Visa Processing.",
  },
  {
    q: "Which countries do you process for Study Abroad?",
    a: "We specialize in Portugal (popular European track with affordable tuition), Czech Republic, United Kingdom, Canada, Germany, USA, Australia, and European Schengen countries.",
  },
  {
    q: "What are the batch timings and class schedules?",
    a: "We offer flexible morning, afternoon, evening, and weekend batches to accommodate school, college, university students, and job holders.",
  },
  {
    q: "Why should I choose Kushtia IELTS Care?",
    a: "We provide true 'Basic to Advance' personalized care, small batch sizes ensuring every student gets speaking practice, a modern computer audio lab, highly affordable 300 BDT mock tests, and honest, ethical study abroad consultancy.",
  },
  {
    q: "Is the initial consultation and profile assessment free?",
    a: "Yes! Our profile evaluation and study abroad counseling sessions are 100% FREE with zero file assessment charges. Walk into our office or contact us on WhatsApp.",
  },
  {
    q: "How can I contact or visit Kushtia IELTS Care?",
    a: "You can call or WhatsApp us at 01715-052885 or 01805-954731, message us on Facebook (facebook.com/p/Kushtia-IELTS-Care-61556387490632/), email kushtiaieltscare@gmail.com, or visit us at Old Kataikhana More, Kushtia.",
  },
];

export const upcomingIntakesAndOffers = [
  {
    id: "ielts-new-batch",
    badge: "Popular · Ongoing Enrollment",
    date: "New Batches Start Every Month",
    title: "IELTS Academic & General Comprehensive Coaching",
    description:
      "Target Band 7.5+ intensive package covering all 4 modules with Cambridge curriculum, individual feedback, and weekly mock exams.",
    benefits: [
      "Experienced instructors with personalized focus on weak areas",
      "Morning, afternoon, evening, and weekend batch slots",
      "Small batch size ensuring daily speaking and writing practice",
      "Free diagnostic test and authentic Cambridge study materials",
    ],
  },
  {
    id: "mock-test-special",
    badge: "Just 300 BDT",
    date: "Daily & Weekend Slots Available",
    title: "Computer-Based & Paper IELTS Mock Test Session",
    description:
      "Test your real IELTS exam readiness with authentic timer software, individual high-clarity headsets, and detailed performance breakdown.",
    benefits: [
      "Only 300 BDT per full-length test simulation",
      "Individual audio workstation with noise-canceling headphones",
      "Face-to-face speaking test with an experienced evaluator",
      "Prompt score delivery with error diagnostics",
    ],
  },
  {
    id: "portugal-study-abroad",
    badge: "Portugal & Europe Track",
    date: "Fall & Spring Intakes Open",
    title: "Study in Portugal — Affordable European Degree Programs",
    description:
      "Complete guidance for Bachelor, Master, and PhD admissions in Portugal with English-taught programs and Schengen work rights.",
    benefits: [
      "Affordable tuition fees (€1,500 – €4,000 / year)",
      "University shortlisting and admission application processing",
      "Statement of Purpose (SOP) drafting and financial file compilation",
      "Consular visa interview coaching and pre-departure briefings",
    ],
  },
  {
    id: "spoken-english-batch",
    badge: "Confidence & Career",
    date: "Evening & Weekend Batches",
    title: "Spoken English & Communication Fluency Program",
    description:
      "Break hesitation, overcome stage fright, and build spontaneous English speaking skills for interviews, jobs, and presentations.",
    benefits: [
      "100% English speaking atmosphere with interactive roleplays",
      "Pronunciation drills and practical conversational expressions",
      "Mock job interviews and presentation coaching",
      "Course Certificate of Completion",
    ],
  },
  {
    id: "kids-english-batch",
    badge: "Ages 5–14 · Junior Achievers",
    date: "After-School & Weekend Shifts",
    title: "Kids' English & Phonics Learning Academy",
    description:
      "Fun, engaging English classes for children with phonics, cartoon storytelling, vocabulary games, rhymes, and confidence building.",
    benefits: [
      "Child-friendly interactive classrooms with engaging multimedia",
      "Correct phonics pronunciation habits from an early age",
      "Small groups with gentle and caring teachers",
      "Regular progress updates for parents",
    ],
  },
];