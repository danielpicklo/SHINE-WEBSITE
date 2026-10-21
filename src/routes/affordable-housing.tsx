import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/shine/SiteHeader";
import { SiteFooter } from "@/components/shine/SiteFooter";
import { AffordableHero } from "@/components/shine/AffordableHero";
import { AffordableIncome } from "@/components/shine/AffordableIncome";
import { AffordableAerial } from "@/components/shine/AffordableAerial";
import { AffordableProjects } from "@/components/shine/AffordableProjects";
import { AffordableSteps } from "@/components/shine/AffordableSteps";
import { CoverageMap } from "@/components/shine/CoverageMap";
import { FinalCta } from "@/components/shine/FinalCta";

const title = "Affordable Housing Solar | Shine";
const description =
  "Shine helps affordable housing owners raise net max rent by lowering utility allowances, without raising residents' total housing costs.";

export const Route = createFileRoute("/affordable-housing")({
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
  component: AffordableHousingPage,
});

function AffordableHousingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AffordableHero />
        <AffordableIncome />
        <AffordableAerial />
        <AffordableProjects />
        <AffordableSteps />
        <CoverageMap />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
