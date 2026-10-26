export function VideoStill() {
  return (
    <section className="bg-white" aria-label="Multifamily rooftop solar">
      <video
        className="aspect-[1440/431] w-full object-cover"
        src="/homepage/video-section.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-label="Aerial view of solar arrays across a multifamily community"
      />
    </section>
  );
}
