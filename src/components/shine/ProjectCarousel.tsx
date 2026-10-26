import type { ReactNode } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects as allProjects } from "@/lib/shine-content";

type Project = (typeof allProjects)[number];

const arrowClass =
  "static top-auto left-auto right-auto size-11 shrink-0 translate-x-0 translate-y-0 rounded-[22px] border-0 bg-white/90 text-[#0e0e0e] shadow-none backdrop-blur-[4px] hover:bg-white disabled:opacity-40";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="relative flex w-full flex-col justify-end overflow-hidden rounded-lg p-6 text-white sm:p-8">
      <img src={project.image} alt="" className="absolute inset-0 size-full object-cover" />
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative flex min-h-[420px] flex-col justify-end gap-6">
        {project.owner ? (
          <span className="w-fit rounded-full bg-accent px-3 py-1 font-display text-xs uppercase tracking-[0.6px] text-[#0e0e0e]">
            {project.owner}
          </span>
        ) : (
          <span className="h-8" />
        )}
        <div>
          <h3 className="text-4xl leading-tight tracking-[-1.2px] lg:text-5xl lg:leading-[1.1]">
            {project.name}
          </h3>
          <p className="mt-2 font-display text-lg tracking-[-0.6px]">{project.location}</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {project.metrics.map((metric) => (
            <div key={metric.label} className="bg-white p-4 text-[#0a0a0a]">
              <p className="font-display text-2xl tracking-[-0.6px]">{metric.value}</p>
              <p className="mt-1 text-sm leading-[18px] text-[#525252]">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export function ProjectCarousel({
  projects,
  heading,
  headingClassName,
}: {
  projects: Project[];
  heading: ReactNode;
  headingClassName?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-white py-16 lg:py-24">
      <img
        src="/homepage/casestudies-bg.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 size-full object-cover object-right"
      />
      <div className="relative mx-auto max-w-[1280px] px-5 lg:px-8">
        <h2
          className={
            headingClassName ??
            "mx-auto max-w-3xl text-center text-4xl leading-tight tracking-[-1.2px] text-[#171717] lg:text-[60px] lg:leading-[72px]"
          }
        >
          {heading}
        </h2>

        <Carousel opts={{ align: "start", loop: false }} className="mt-12">
          <div className="flex items-center gap-3">
            <CarouselPrevious className={arrowClass} />
            <CarouselContent className="-ml-6 min-w-0 flex-1 lg:-ml-10">
              {projects.map((project) => (
                <CarouselItem
                  key={project.name}
                  className="basis-[85%] pl-6 sm:basis-[70%] md:basis-[55%] lg:basis-[48%] lg:pl-10"
                >
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className={arrowClass} />
          </div>
        </Carousel>
      </div>
    </section>
  );
}
