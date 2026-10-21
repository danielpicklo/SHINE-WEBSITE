import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/shine/SiteHeader";
import { SiteFooter } from "@/components/shine/SiteFooter";
import { ProjectsHero } from "@/components/shine/ProjectsHero";
import { ProjectsProof } from "@/components/shine/ProjectsProof";
import { ProjectsAffordable } from "@/components/shine/ProjectsAffordable";
import { ProjectsVideoStill } from "@/components/shine/ProjectsVideoStill";
import { ProjectsMarketRate } from "@/components/shine/ProjectsMarketRate";
import { CoverageMap } from "@/components/shine/CoverageMap";
import { FinalCta } from "@/components/shine/FinalCta";

const title = "Shine's Projects";
const description =
  "See how affordable housing and market-rate multifamily communities create new income and cut operating costs.";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ProjectsHero />
        <ProjectsProof />
        <ProjectsAffordable />
        <ProjectsVideoStill />
        <ProjectsMarketRate />
        <CoverageMap />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
