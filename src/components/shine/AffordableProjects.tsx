import { projects } from "@/lib/shine-content";

const names = ["NMHC Top 10 Property", "An Affordable Housing Community"];

export function AffordableProjects() {
  const cards = names
    .map((name) => projects.find((project) => project.name === name))
    .filter((project) => project != null);

  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <svg
        aria-hidden="true"
        viewBox="0 0 200 200"
        className="pointer-events-none absolute -right-8 top-4 hidden h-48 w-48 text-accent lg:block"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <rect
            key={index}
            x="92"
            y="8"
            width="16"
            height="70"
            rx="2"
            fill="currentColor"
            opacity={index % 2 === 0 ? 0.95 : 0.45}
            transform={`rotate(${index * 30} 100 100)`}
          />
        ))}
      </svg>
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]">
          See How Solar Increases Property Value for Affordable Housing Communities
        </h2>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
          {cards.map((project) => (
            <article
              key={project.name}
              className="relative flex min-h-[420px] flex-col justify-end overflow-hidden rounded-lg p-6 text-white sm:p-8"
            >
              <img src={project.image} alt="" className="absolute inset-0 size-full object-cover" />
              <div className="absolute inset-0 bg-black/60" />
              <div className="relative">
                <h3 className="text-4xl leading-tight tracking-[-1.2px] lg:text-5xl lg:leading-[1.1]">
                  {project.name}
                </h3>
                <p className="mt-2 font-display text-lg tracking-[-0.6px]">{project.location}</p>
                <div className="mt-6 grid grid-cols-2 gap-4">
                  {project.metrics.map((metric) => (
                    <div key={metric.label} className="bg-white p-4 text-[#0a0a0a]">
                      <p className="font-display text-2xl tracking-[-0.6px]">{metric.value}</p>
                      <p className="mt-1 text-sm leading-[18px] text-[#525252]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
