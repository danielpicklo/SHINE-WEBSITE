import { projects } from "@/lib/shine-content";
import { ProjectCarousel } from "@/components/shine/ProjectCarousel";

export function Projects() {
  return (
    <div id="projects" className="scroll-mt-20">
      <ProjectCarousel
        projects={projects}
        heading={
          <>
            Our projects increase
            <br />
            NOI by $620/unit
          </>
        }
      />
    </div>
  );
}
