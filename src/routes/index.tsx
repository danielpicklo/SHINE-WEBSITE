import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/shine/SiteHeader";
import { Hero } from "@/components/shine/Hero";
import { LogoBar } from "@/components/shine/LogoBar";
import { HousingSplit } from "@/components/shine/HousingSplit";
import { VideoStill } from "@/components/shine/VideoStill";
import { Steps } from "@/components/shine/Steps";
import { ComparisonTable } from "@/components/shine/ComparisonTable";
import { Quote } from "@/components/shine/Quote";
import { Projects } from "@/components/shine/Projects";
import { CalculatorPlaceholder } from "@/components/shine/CalculatorPlaceholder";
import { CoverageMap } from "@/components/shine/CoverageMap";
import { Faq } from "@/components/shine/Faq";
import { FinalCta } from "@/components/shine/FinalCta";
import { SiteFooter } from "@/components/shine/SiteFooter";

const title = "Multifamily Solar EPC Nationwide | Shine";
const description =
  "Shine’s solar approach creates new income and cuts operating costs for affordable housing and market-rate multifamily communities.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Shine",
          description,
          areaServed: "United States",
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div id="top" className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <LogoBar />
        <HousingSplit />
        <VideoStill />
        <Steps />
        <ComparisonTable />
        <Quote />
        <Projects />
        <CalculatorPlaceholder />
        <CoverageMap />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
