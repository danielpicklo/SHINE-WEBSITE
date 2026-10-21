import type { LucideIcon } from "lucide-react";
import { DollarSign, Landmark, Pencil, Shield, TrendingUp, Users } from "lucide-react";
import { processSteps } from "@/lib/shine-content";

export const incomeFeatures: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Lower UAs and increase max net rent",
    body: "We install solar to offset tenants' electric use. With Shine, each tenant has a small solar array interconnected to their meter. This design approach allows owners to reduce utility allowances through energy consumption model UA methodology.",
  },
  {
    icon: DollarSign,
    title: "Increase gross potential rent (GPR)",
    body: "With higher net max rent, your increased income can either flow to you, increase loan proceeds as part of an LIHTC syndication, or act as an operating income buffer to cover unforeseen expenses.",
  },
  {
    icon: Landmark,
    title: "Self-fund GAP financing",
    body: "When solar is installed in conjunction with a LIHTC syndication, tax equity reduces the cost of the system. The NOI lift from reduced UAs allows owners to generate additional loan proceeds in excess of the system's cost.",
  },
  {
    icon: Shield,
    title: "Protect your net max rent",
    body: "Utility rates are climbing faster than area median incomes — eroding your NOI. Solar offsets a portion of that usage, isolating it from future utility rate increases. That protects your net max rent.",
  },
  {
    icon: Pencil,
    title: "Keep underwriting moving",
    body: "We know affordable housing deals move through complex stages involving budgets, tax credit investors, and lenders. Shine turns around underwriting-ready estimates fast.",
  },
  {
    icon: Users,
    title: "Work with a single team",
    body: "Other solar companies require you to work with multiple vendors to complete a project. From feasibility analysis through design, installation, and monitoring, Shine handles every stage ourselves. We're your one accountable partner.",
  },
];

const stepCopy: Record<string, string> = {
  "1": "We evaluate a single property or your full portfolio to identify system size, project costs, potential net rent increases, and more.",
  "5": "We set up and manage billing for resident-facing systems with no SaaS fees.",
};

export const affordableSteps = processSteps.map((step) =>
  stepCopy[step.n] ? { ...step, body: stepCopy[step.n] } : step,
);
