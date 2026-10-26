export type TeamMember = {
  name: string;
  role: string;
  image: string;
  linkedIn?: string;
  focus?: "center" | "bottom";
};

export const team: TeamMember[] = [
  {
    name: "Owen Barrett",
    role: "Co-Founder and CEO",
    image: "/about/owen.jpg",
    linkedIn: "https://www.linkedin.com/in/owenmadsenbarrett/",
  },
  {
    name: "Earl Mohler",
    role: "Co-Founder and CTO",
    image: "/about/earl.jpg",
    linkedIn: "https://www.linkedin.com/in/earl-mohler/",
  },
  {
    name: "Justin Piotroski",
    role: "Chief Operating Officer",
    image: "/about/justin.png",
    linkedIn: "https://www.linkedin.com/in/justinpiotroski/",
  },
  {
    name: "David Perloe",
    role: "Director, Affordable Housing",
    image: "/about/david.png",
  },
  {
    name: "Angie Marks",
    role: "Director of Project Management",
    image: "/about/angie.jpg",
  },
  {
    name: "Brenton Schultz",
    role: "Director, Electrical Review & Quality Assurance",
    image: "/about/brenton.jpg",
    focus: "bottom",
  },
  {
    name: "Elisabetta Liumbruno",
    role: "Director, Electrical Design",
    image: "/about/elisabetta.jpg",
  },
  {
    name: "Brent Crangle",
    role: "Director, Revenue Operations",
    image: "/about/brent.jpg",
  },
  {
    name: "Amanda Weatherford",
    role: "Director, Interconnection and Grid Integration",
    image: "/about/amanda.jpg",
  },
  {
    name: "Ruby Cantu",
    role: "Electrical Designer",
    image: "/about/ruby.jpg",
  },
  {
    name: "Jasmine Novela",
    role: "Project Manager",
    image: "/about/jasmine.jpg",
  },
  {
    name: "Aran Lucas",
    role: "Finance Operations Analyst",
    image: "/about/aran.png",
  },
  {
    name: "Heather Lee Thorsby",
    role: "Project Coordinator",
    image: "/about/heather.png",
  },
  {
    name: "Keegan Acker",
    role: "Business Development Manager",
    image: "/about/keegan.jpg",
  },
  {
    name: "Brittany Rayner",
    role: "Sr. Project Manager",
    image: "/about/brittany.jpg",
  },
];
