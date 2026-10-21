import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/shine/SiteHeader";
import { SiteFooter } from "@/components/shine/SiteFooter";
import { ContactPanel } from "@/components/shine/ContactPanel";

const title = "Contact Shine";
const description =
  "We're here to answer any questions or provide a free analysis of your properties. For partnership inquiries, contact info@getshine.com.";

export const Route = createFileRoute("/contact")({
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
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <ContactPanel />
      </main>
      <SiteFooter />
    </div>
  );
}
