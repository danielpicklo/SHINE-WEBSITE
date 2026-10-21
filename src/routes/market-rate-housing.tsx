import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/shine/SiteHeader";
import { SiteFooter } from "@/components/shine/SiteFooter";
import { MarketRateHero } from "@/components/shine/MarketRateHero";
import { MarketRateIncome } from "@/components/shine/MarketRateIncome";
import { MarketRateAerial } from "@/components/shine/MarketRateAerial";
import { MarketRateProjects } from "@/components/shine/MarketRateProjects";
import { MarketRateSteps } from "@/components/shine/MarketRateSteps";
import { CoverageMap } from "@/components/shine/CoverageMap";
import { FinalCta } from "@/components/shine/FinalCta";

const title = "Market-Rate Multifamily Solar | Shine";
const description =
  "Shine installs solar on resident meters and common areas so market-rate multifamily properties can add recurring income and increase NOI.";

export const Route = createFileRoute("/market-rate-housing")({
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
  component: MarketRateHousingPage,
});

function MarketRateHousingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <MarketRateHero />
        <MarketRateIncome />
        <MarketRateAerial />
        <MarketRateProjects />
        <MarketRateSteps />
        <CoverageMap />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
