export type SiteLink = {
  label: string;
  href?: string;
};

export const navItems: SiteLink[] = [
  { label: "Affordable Housing", href: "/affordable-housing" },
  { label: "Market Rate Housing", href: "/market-rate-housing" },
  { label: "About", href: "/about" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Contact Us", href: "/contact" },
];

export const headerCta = {
  label: "Get a Free Solar NOI Analysis",
  href: "/contact",
};

export const customerLogos = [
  { name: "Jonathan Rose Companies", src: "/homepage/logo-rose.png", width: 361 },
  { name: "Lincoln Avenue Communities", src: "/homepage/logo-lincoln.png", width: 156 },
  { name: "the NRP group", src: "/homepage/logo-nrp.png", width: 53 },
  { name: "Equity Residential", src: "/homepage/logo-equity.png", width: 369 },
  { name: "AvalonBay Communities", src: "/homepage/logo-avalonbay.png", width: 114 },
  { name: "Gorman & Company", src: "/homepage/logo-gorman.png", width: 213 },
];

export const housingColumns = [
  {
    eyebrow: "Affordable Housing",
    title: "Why Affordable Housing Operators Choose Shine",
    points: [
      "Lower utility allowances to increase max net rent and protect against rising utility costs.",
      "Increase gross potential rent (GPR).",
      "Generate enough additional loan proceeds to self-fund your GAP financing.",
      "Get fast, accurate estimates that fit your underwriting timeline.",
      "Work with a single team for all stages, including design, installation, and monitoring.",
    ],
    link: "See how it works for affordable housing",
    href: "/affordable-housing",
  },
  {
    eyebrow: "Market-Rate Housing",
    title: "Why Market-Rate Multifamily Properties Choose Shine",
    points: [
      "Install solar on resident meters to add a new income line through solar leases.",
      "Combine resident solar with common area solar to cut OpEx while increasing NOI.",
      "Work with a single team for the full project lifecycle instead of juggling multiple vendors, reps, and platforms.",
      "Avoid Building Performance Standards penalties and fines.",
      "Roll out a solar program across your portfolio in all 50 states.",
    ],
    link: "See how it works for market rate",
    href: "/market-rate-housing",
  },
];

export const proofPoints = [
  { figure: "40 MW", label: "Built or under construction" },
  { figure: "22 states", label: "Operating in today" },
  { figure: "50 states", label: "Available nationwide" },
];

export const processSteps = [
  {
    n: "1",
    title: "Analysis",
    body: "We evaluate a single property or your full portfolio to identify system size, project costs, potential NOI, and more — for free.",
    image: "/homepage/step-analysis.jpg",
  },
  {
    n: "2",
    title: "Design",
    body: "We engineer around your property's roofs, electrical infrastructure, and unit configuration.",
    image: "/homepage/step-design.jpg",
  },
  {
    n: "3",
    title: "Permitting",
    body: "We manage the plans, permitting, and utility interconnection so the project keeps moving.",
    image: "/homepage/step-permitting.jpg",
  },
  {
    n: "4",
    title: "Installation",
    body: "We build and commission the system with the care an occupied apartment community requires.",
    image: "/homepage/step-installation.jpg",
  },
  {
    n: "5",
    title: "Resident Billing",
    body: "For resident-facing systems, we set up and manage billing, and we help establish solar leases for tenants with no SaaS fees.",
    image: "/homepage/step-billing.jpg",
  },
  {
    n: "6",
    title: "Monitoring",
    body: "We track system performance after commissioning at no additional cost.",
    image: "/homepage/step-monitoring.jpg",
  },
  {
    n: "7",
    title: "Maintenance",
    body: "Our optional long-term maintenance program includes inspections and repairs for the life of the system.",
    image: "/homepage/step-maintenance.jpg",
  },
];

export const comparisonRows = [
  {
    feature: "Portfolio-level analysis",
    shine: "Included",
    others: "Extra cost or additional vendor required",
  },
  {
    feature: "Solar on resident meters (not just common areas)",
    shine: "Standard",
    others: "Not an option",
  },
  {
    feature: "Resident billing & reporting software",
    shine: "Included",
    others: "Additional vendor required with SaaS fees",
  },
  {
    feature: "Ongoing performance monitoring",
    shine: "Included, optional",
    others: "Additional vendor required with SaaS fees",
  },
  {
    feature: "Available nationwide",
    shine: "All 50 states",
    others: "Usually local, sometimes regional",
  },
];

export const projects = [
  {
    owner: "AvalonBay Communities",
    name: "Southlands",
    location: "Aurora, Colorado",
    image: "/homepage/project-southlands.jpg",
    metrics: [
      { value: "1,060 kW", label: "System size" },
      { value: "$246,818", label: "Annual solar NOI" },
      { value: "18.6%", label: "Cash-on-cash return" },
      { value: "$4.25M", label: "Est. property value created" },
    ],
  },
  {
    owner: "Equity Residential",
    name: "Helix",
    location: "Weymouth, Massachusetts",
    image: "/homepage/project-helix.jpg",
    metrics: [
      { value: "332.5 kW", label: "System size" },
      { value: "$131,158", label: "Annual solar NOI" },
      { value: "22.7%", label: "Cash-on-cash return" },
      { value: "$2.13M", label: "Est. property value created" },
    ],
  },
  {
    owner: "AvalonBay Communities",
    name: "RiNo",
    location: "Denver, Colorado",
    image: "/homepage/project-rino.jpg",
    metrics: [
      { value: "602.3 kW", label: "System size" },
      { value: "$154,360", label: "Annual solar NOI" },
      { value: "19.3%", label: "Cash-on-cash return" },
      { value: "$2.51M", label: "Est. property value created" },
    ],
  },
  {
    owner: "",
    name: "NMHC Top 10 Property",
    location: "Boston, Massachusetts",
    image: "/homepage/project-nmhc.jpg",
    metrics: [
      { value: "562.61 kW", label: "System size" },
      { value: "$236,000", label: "Annual solar NOI" },
      { value: "20.25%", label: "Yield on cost" },
      { value: "$3.78M", label: "Est. property value created" },
    ],
  },
  {
    owner: "",
    name: "An Affordable Housing Community",
    location: "Miami, Florida",
    image: "/homepage/project-miami.jpg",
    metrics: [
      { value: "8,995.03 kW", label: "System size" },
      { value: "$164,200", label: "Annual solar NOI" },
      { value: "61.65%", label: "Yield on cost" },
      { value: "$3.03M", label: "Est. property value created" },
    ],
  },
];

export const faqs = [
  {
    question: "How does solar help affordable housing communities increase rent?",
    answer:
      "Solar helps to offset tenants' electric use. With Shine, each tenant has a small solar array interconnected to their meter. This design approach allows owners to reduce utility allowances through energy consumption model UA methodology. By lowering your property's utility allowance, solar creates room to raise net max rent — dollar for dollar — while your residents' total housing costs stay the same.",
  },
  {
    question: "What's the difference between common area solar and resident (tenant) solar?",
    answer: "Answer coming soon.",
  },
  {
    question: "How do multifamily properties increase NOI with solar?",
    answer: "Answer coming soon.",
  },
  {
    question: "What if I need a new roof?",
    answer: "Answer coming soon.",
  },
  {
    question: "Does Shine offer financing?",
    answer: "Answer coming soon.",
  },
  {
    question: "What is a solar EPC, and does it matter which one I choose?",
    answer: "Answer coming soon.",
  },
];

export const footerColumns: { title: string; links: SiteLink[] }[] = [
  {
    title: "Solutions",
    links: [
      { label: "Affordable Housing Solar", href: "/affordable-housing" },
      { label: "Market-Rate Multifamily Solar", href: "/market-rate-housing" },
      { label: "Tenant Solar" },
      { label: "Solar Billing" },
      { label: "Monitoring & Maintenance" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Shine", href: "/about" },
      { label: "Projects", href: "/projects" },
      { label: "Insights" },
      { label: "Careers" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Solar Calculator", href: "/#calculator" },
      { label: "Free Solar NOI Analysis", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [{ label: "Privacy Policy" }, { label: "Terms of Use" }],
  },
];
