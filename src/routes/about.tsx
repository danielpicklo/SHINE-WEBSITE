import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/shine/SiteHeader";
import { SiteFooter } from "@/components/shine/SiteFooter";
import { AboutStory } from "@/components/shine/AboutStory";
import { AboutTeam } from "@/components/shine/AboutTeam";
import { AboutCta } from "@/components/shine/AboutCta";

const title = "About Shine";
const description =
  "Shine started when cofounders Owen Barrett and Earl Mohler installed solar on their own apartment communities. Today one team handles every phase, from underwriting to maintenance.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <AboutStory />
        <AboutTeam />
        <AboutCta />
      </main>
      <SiteFooter />
    </div>
  );
}
