export function ProjectsVideoStill() {
  return (
    <section className="bg-white" aria-label="Multifamily rooftop solar">
      <video
        className="aspect-[1440/431] w-full object-cover"
        src="/projects/rino-drone.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Aerial drone view of solar arrays across a multifamily community"
      />
    </section>
  );
}
