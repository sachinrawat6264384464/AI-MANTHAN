/* ── AI MANTHAN 2.0 — the 12 confirmed problem domains ──────────────
   Data-driven architecture:
     • `domains`     → the 12 confirmed categories (Tracks section grid)
     • `statements`  → per-domain problem statements. NOT PROVIDED YET —
       every domain starts with an empty array. Plug real PS in later by
       appending { title, description } objects to the matching domain's
       `statements` array — the /problem-statements page renders them
       automatically with zero component changes. Nothing is fabricated. */

export const domains = [
  {
    id: 'healthcare',
    number: '01',
    label: 'AI for Healthcare & Medical Services',
    shortLabel: 'Healthcare',
    icon: 'medical_services',
    accent: 'emerald',
    blurb: 'Smarter diagnosis, patient support and medical access.',
    statements: [],
  },
  {
    id: 'women-safety',
    number: '02',
    label: 'AI for Women Safety (Safety & Security)',
    shortLabel: 'Women Safety',
    icon: 'shield_person',
    accent: 'pink',
    blurb: 'Safety & security tools that protect and empower.',
    statements: [],
  },
  {
    id: 'smart-governance',
    number: '03',
    label: 'AI for Smart Governance',
    shortLabel: 'Smart Governance',
    icon: 'account_balance',
    accent: 'azure',
    blurb: 'Transparent, responsive, citizen-first public systems.',
    statements: [],
  },
  {
    id: 'agriculture',
    number: '04',
    label: 'AI for Agriculture',
    shortLabel: 'Agriculture',
    icon: 'agriculture',
    accent: 'lime',
    blurb: 'Data-driven farming, yield and agri-supply intelligence.',
    statements: [],
  },
  {
    id: 'rural-education',
    number: '05',
    label: 'AI for Rural Education (Education & Learning)',
    shortLabel: 'Rural Education',
    icon: 'school',
    accent: 'amber',
    blurb: 'Education & learning for every learner, everywhere.',
    statements: [],
  },
  {
    id: 'disaster-management',
    number: '06',
    label: 'AI for Disaster Management',
    shortLabel: 'Disaster Mgmt',
    icon: 'emergency',
    accent: 'orange',
    blurb: 'Early warning, response and resilience systems.',
    statements: [],
  },
  {
    id: 'smart-cities',
    number: '07',
    label: 'AI for Smart Cities (Urban Development & Infrastructure)',
    shortLabel: 'Smart Cities',
    icon: 'location_city',
    accent: 'azure',
    blurb: 'Urban development & infrastructure, intelligently run.',
    statements: [],
  },
  {
    id: 'clean-india',
    number: '08',
    label: 'AI for Clean India (Swachh Bharat Initiative)',
    shortLabel: 'Clean India',
    icon: 'delete_sweep',
    accent: 'green',
    blurb: 'Swachh Bharat initiative powered by AI.',
    statements: [],
  },
  {
    id: 'career-development',
    number: '09',
    label: 'AI for Career Development',
    shortLabel: 'Career Growth',
    icon: 'trending_up',
    accent: 'sky',
    blurb: 'Guiding students and professionals to the right futures.',
    statements: [],
  },
  {
    id: 'tourism',
    number: '10',
    label: 'AI for Tourism',
    shortLabel: 'Tourism',
    icon: 'tour',
    accent: 'indigo',
    blurb: 'Smart travel experiences and destination intelligence.',
    statements: [],
  },
  {
    id: 'food-redistribution',
    number: '11',
    label: 'AI for Food Redistribution',
    shortLabel: 'Food Redist.',
    icon: 'restaurant',
    accent: 'orange',
    blurb: 'Reducing waste, connecting surplus to those in need.',
    statements: [],
  },
  {
    id: 'urban-monitoring',
    number: '12',
    label: 'AI for Urban Monitoring',
    shortLabel: 'Urban Monitor',
    icon: 'remove_red_eye',
    accent: 'indigo',
    blurb: 'Real-time city pulse and infrastructure monitoring.',
    statements: [],
  },
  {
    id: 'open-innovation',
    number: '13',
    label: 'Open Innovation Track',
    shortLabel: 'Open Innov.',
    icon: 'lightbulb',
    accent: 'amber',
    blurb: 'Bring your own bold AI idea — no boundaries.',
    statements: [],
  },
]

export const tracks = domains

/* Kept for compatibility with any legacy consumer. */
export const trackFilters = domains.map((t) => ({ id: t.id, label: t.label }))

