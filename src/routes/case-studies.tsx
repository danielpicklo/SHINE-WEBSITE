import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/case-studies")({
  head: () => ({
    meta: [
      { title: "Case Studies | Shine" },
      { name: "description", content: "Multifamily solar case studies from Shine — affordable housing and market-rate apartment projects across the United States." },
      { property: "og:title", content: "Case Studies | Shine" },
      { property: "og:description", content: "Multifamily solar case studies from Shine — affordable housing and market-rate apartment projects across the United States." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CaseStudiesPage,
});

const placeholders = [
  {
    category: "Affordable Housing",
    project: "Add project name",
    owner: "Add owner",
  },
  {
    category: "Market-Rate Housing",
    project: "Add project name",
    owner: "Add owner",
  },
];

function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background pt-[72px]">
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-[1280px] px-5 lg:px-10">
          <Link
            to="/"
            className="text-sm text-charcoal transition-colors hover:text-foreground"
          >
            ← Back to home
          </Link>

          <p className="eyebrow mt-10 text-charcoal">Case studies</p>
          <h1 className="mt-4 max-w-2xl text-4xl leading-[1.05] lg:text-5xl">
            Multifamily solar projects, start to finish.
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-charcoal">
            Detailed project profiles for affordable and market-rate apartment communities.
            Data coming soon.
          </p>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            {placeholders.map((cs) => (
              <article
                key={cs.category}
                className="flex flex-col border border-border bg-background"
              >
                <div className="aspect-[16/10] w-full bg-secondary" />
                <div className="flex flex-1 flex-col p-8">
                  <p className="eyebrow text-charcoal">{cs.category}</p>
                  <h2 className="mt-3 text-2xl text-charcoal/40 lg:text-3xl">
                    {cs.project}
                  </h2>
                  <p className="mt-1 text-sm text-charcoal/40">{cs.owner}</p>
                  <p className="mt-6 text-sm leading-relaxed text-charcoal/60">
                    Project details, system size, financial metrics, and owner outcomes will be
                    added here once data is available.
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
