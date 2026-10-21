import type { LucideIcon } from "lucide-react";
import { DollarSign, Landmark, Pencil, TrendingUp, Users } from "lucide-react";
import { processSteps } from "@/lib/shine-content";

export const marketRateFeatures: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: TrendingUp,
    title: "Turn resident electricity into a new income line",
    body: "A typical multifamily solar system installs only on common area meters, which cover 5% of a property's electrical load. Shine installs on resident meters — the other 95% — letting you capture 100% of the load. Residents pay for that electricity through a solar lease which flows to you as a new recurring income line.",
  },
  {
    icon: DollarSign,
    title: "Combine common area and resident solar for maximum NOI",
    body: "Shine installs common area solar to cut your operating expenses on top of the new income you'll see from resident solar.",
  },
  {
    icon: Landmark,
    title: "Get ahead of Building Performance Standards (BPS) penalties",
    body: "A growing number of municipalities now require multifamily properties to keep emissions below a set threshold or pay fines. Shine's resident meter approach helps you adhere to these standards and avoid expensive penalties.",
  },
  {
    icon: Users,
    title: "Work with one team instead of several vendors",
    body: "Other solar companies require you to hire multiple vendors to complete a project. From feasibility analysis through design, installation, and monitoring, Shine handles every stage ourselves. We're your one accountable partner.",
  },
  {
    icon: Pencil,
    title: "Roll out a cohesive solar program across your portfolio",
    body: "Shine's approach allows you to run the same solar strategy across every property in your portfolio, in all 50 states.",
  },
];

const stepCopy: Record<string, string> = {
  "1": "We evaluate a single property or your full portfolio to identify system size, project costs, potential NOI, and more.",
  "5": "For resident-facing systems, we set up and manage billing, and we help establish solar leases for tenants with no SaaS fees.",
};

export const marketRateSteps = processSteps.map((step) =>
  stepCopy[step.n] ? { ...step, body: stepCopy[step.n] } : step,
);
