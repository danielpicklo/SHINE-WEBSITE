import { projects } from "@/lib/shine-content";
import { ProjectCarousel } from "@/components/shine/ProjectCarousel";

const names = ["Southlands", "Helix", "RiNo"];

export function ProjectsMarketRate() {
  const cards = names
    .map((name) => projects.find((project) => project.name === name))
    .filter((project) => project != null);

  return (
    <ProjectCarousel
      projects={cards}
      heading="Market-rate multifamily projects that cut costs and create income."
      headingClassName="mx-auto max-w-3xl text-center text-[28px] leading-10 tracking-[-0.6px] text-[#171717] lg:text-[30px]"
    />
  );
}
